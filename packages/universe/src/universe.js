/**
 * The Universe is the runtime context for the platform.
 * It has properties for every setting used by the eWINGZ platform
 * and returns proper defaults.
 *
 * Acts a Dependency Injection Registry.
 *
 * For proper recording first setup a logger in your config script.
 * Default logging to console
 *
 * @author: blukassen
 */

// Caution: This is a kind of starting point!
// It must be possible to 'require' the universe from any component of the platform.
// Don't import other compoments or modules from the platfrom to avoid circle requires
// Import only modules which are directly installed and do not reference any element from the 'configurations'.

const _ = require("lazy.js");
const winston = require("winston");
const unload = require('unload');

// don't show a warning when this properties of the universe will be overwritten
const noWarnProps = ['logger', 'stage'];

class Universe {

    constructor() {
        let that = this;

        /** @type {Object<String,*>} options */
        this._env = process.env;
        // first register end of process to do the dusk
        /** @type {Function} stop listening on exit function. */
        this._stopListenDusk = unload.add(() => {
            that.freeze();
        });
        /** @type {Array<Function>} hooks */
        this._hooksDawn = [];
        /** @type {Array<Function>} hooks */
        this._hooksDusk = [];
        this._codes = [];

        // collect the native properties of the universe which are reserved (all properties defined above including '_reserved' itself.
        this._reserved = "";
        this._reserved = Object.keys(this);

        this.logger = winston.createLogger({
            level: 'info',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.splat(),
                winston.format.prettyPrint()
            ),
            transports: [
                // - Write to all logs with level `info` and below to console
                new winston.transports.Console()
            ]
        });

        // these properties can be overwritten, not reserved
        this.universeFile = undefined;
        this.stage = undefined;
        // just init logger as long as the service overwrites it
        this.logger.debug("$$ universe: instantiation end");
    }

    /**
     * returns the environment (from the shell)
     * @return {Object<string, *>} env
     */
    get env() {
        return this._env;
    }

    /**
     * Register a setting or resource on the universe
     * @param {String} name - the name of the resource
     * @param {Object} object - the resource or setting
     */
    register(name, object) {
        if (this._reserved.indexOf(name) > -1) {
            this.logger.log('error', 'universe: reserved property, "%s" cannot be registered', name);
            return;
        }
        if (noWarnProps.indexOf(name) < 0 && !!this[name]) this.logger.log('info', 'universe: was alredy registered "%s"', name);
        this[name] = object;
        this.logger.debug("$$ universe: registered -> %s", name);
    }

    /**
     * add codes for errors, notifications and messages
     * @param {Object<String, String>} codes
     */
    addCodes(codes) {

        this.logger.debug("$$ universe: added codes");
    }

    /**
     * Register hook functions to be executed when inflation ends (at dawn).
     * Can be async, inflation waits until all hooks have returned,
     * so be careful what you do.
     * @param {Function} hookfn
     */
    atDawn(hookfn) {
        if (this._hooksDawn.indexOf(hookfn) > -1) {
            this.logger.log('warn', 'universe: dawn hook %s already registered', hookfn.name);
            return;
        }
        this._hooksDawn.push(hookfn);
        this.logger.debug("$$ universe: added dawn hook");
    }

    /**
     * Register hook functions to be executed when universe freezes (at dusk).
     * Can be async, waits until all hooks have returned,
     * so be careful what you do.
     * @param {Function} hookfn
     */
    atDusk(hookfn) {
        if (this._hooksDusk.indexOf(hookfn) > -1) {
            this.logger.log('warn', 'universe: dusk hook %s already registered', hookfn.name);
            return;
        }
        this._hooksDusk.push(hookfn);
        this.logger.debug("$$ universe: added dusk hook");
    }

    /**
     * Start the inflation phase of the universe,
     * returns after the dark ages and leaves
     * a well-established runtime environment.
     * Iterates over the 'inflation-hooks' in the order they where registered.
     * Each hook get this universe as parameter.
     * Hook Fn's can be async, inflation waits until all hooks have returned.
     * If a hook fails the process fails.
     * Will be called at the end of the 'init' module
     */
    letThereBeLight() {
        var logger = this.logger;
        var fns = this._hooksDawn;
        logger.debug("$$ universe: letThereBeLight start");

        // do the dawn async
        return new Promise((fulfill, reject) => {
            logger.debug("$$ universe: letThereBeLight resolve");
            let proms = [];
            try {
                _(fns).each(f => {
                    let prom = f(this);
                    // check if result is a Promise (there is no better way!)
                    if (prom && typeof prom.then === 'function') {
                        proms.push(prom);
                    } else {
                        proms.push(Promise.resolve(true));
                    }
                });
            } catch (e) {
                logger.error('%% universe: letThereBeLight: error at dawn hook: "%s"', e);
                reject();
            }
            Promise.all(proms)
                .then(() => {
                    logger.debug("$$ universe: letThereBeLight resolve end");
                    fulfill();
                });
        });
    }


    freeze() {
        var logger = this.logger;
        var fns = this._hooksDusk;
        logger.debug("$$ universe: freeze start");

        // do the dusk async
        return new Promise((fulfill, reject) => {
            logger.debug("$$ universe: freeze resolve");
            let proms = [];
            try {
                _(fns).each(f => {
                    let prom = f(this);
                    // check if result is a Promise (there is no better way!)
                    if (prom && typeof prom.then === 'function') {
                        proms.push(prom);
                    } else {
                        proms.push(Promise.resolve(true));
                    }
                });
            } catch (e) {
                logger.error('%% universe: letThereBeLight: error at dusk hook: "%s"', e);
                reject();
            }

            Promise.all(proms)
                .then(() => {
                    logger.debug("$$ universe: freeze resolve end");
                    fulfill();
                });
        });
    }
}

const universeHandler = {
    set: (universe, property, value) => {
        return universe.register(property, value);
    },
    get: (universe, property) => {
        let value = universe[property];
        if (value == undefined) value = Object.getPrototypeOf(universe)[property];
        // apply functions direct on the universe, otherwise 'this' will be the Proxy which is not intended
        if (!!value && typeof value === "function") {
            return (...args) => {
                return value.apply(universe, args);
            }
        }
        return value;
    }
};

let universe = new Universe();
let puniverse = new Proxy(universe, universeHandler);

// Singleton (as long as you don't modify 'require.cache' - but don't do that)
module.exports = puniverse;
