/**
 * This is the setup for services and tests. Settings will be published to (the) universe.
 *
 * Ready from
 *  - command line args
 *  - environment variables
 *  - uses default values
 *
 * What can be defined:
 *  - stage: () default DEV
 *  - basedir: default current dir
 *  - cfg: alternative config file
 *
 * Just delivers settings to get the config. Go ahead initializing the config.
 * Usage:
 *  const setup = require("setup");
 *  const config = require("config")(setup.env);
 * @see config.js
 *
 * Checks:
 * - Valid stage
 * - Valid and exisiting basedir
 * - Existing config file
 *
 * @author: blukassen
 */

const validStages = require('../lib/stages');
const fs = require('fs');
const path = require('path');

// just init a logger to provide messages at start
let winston = require('winston');
const logger = winston.createLogger({
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

let Setup = (() => {
    logger.debug("$$ setup: start");
    let _env = {
        stage: 'DEV',
        basedir: './',
        logger: logger  // publish the logger
    };

    let argv = require('yargs')
        .usage('Usage: $0 [options]')
        .help('help')
        .version('v', 'display version information', '1.0')
        .alias('v', 'version')
        .option('h', {
            alias: 'help',
            description: 'display help message'
        })
        //.env("STAGE")
        .option('s', {
            alias: 'stage',
            description: 'choose stage',
            choices: Object.getOwnPropertyNames(validStages)
        })
        //.alias('s', 'stage')
        //.describe('s', 'choose stage')
        //.choices('s', ['playground', 'dev', 'ftest', 'ltest', 'preprod', 'production'])
        .option('c', {
            alias: 'cfg',
            description: 'specify config file'
          })
        .option('b', {
            alias: 'basedir',
            description: 'specify base directory'
          })
        .option('l', { // document options.
            array: true, // even single values will be wrapped in [].
            alias: 'let',
            description: 'a list of variable declarations, overrides vars from config. Form: -l var1=val1 var2=val2',
            // default: 'stage=DEV',
          })
        .epilog('for more information visit https://thoregon.io')
        .argv;

    _env.argv = argv;

    // check the 'stage' param
    if (!!argv.stage) {
        if (!!validStages[argv.stage]) {
            _env.stage = argv.stage;
            _env.universe = validStages[_env.stage].universe;
        } else {
            logger.log("error", "unknown stage: ", argv.stage, "(", Object.getOwnPropertyNames(validStages).join(", "), ")");
            process.exit(1);
        }
    } else if (!!process.env.STAGE) {
        if (!!validStages[process.env.STAGE]) {
            _env.stage = process.env.STAGE;
            _env.universe = validStages[_env.stage].universe;
        } else {
            logger.log("error", "unknown stage: ", process.env.STAGE, "(", Object.getOwnPropertyNames(validStages).join(", "), ")");
            process.exit(1);
        }
    }

    // check the 'basedir' param
    if (!!argv.basedir) {
        _env.basedir = argv.basedir;
    } else if (!!process.env.eWBASEDIR) {
        _env.basedir = process.env.eWBASEDIR;
    }

    // check the 'config' param; has no ENV var
    if (!!argv.cfg) {
        _env.universe = argv.cfg;
    } else {
        _env.universe = validStages[_env.stage].universe;
    }

    // check if basedir exists
    _env.basedir = path.join(process.cwd(), _env.basedir);
    if (!fs.existsSync(_env.basedir)) {
        logger.log("error", "unknown basedir: '%s'", _env.basedir);
        process.exit(1);
    } else {
        let stats = fs.statSync(_env.basedir);
        if (!stats.isDirectory()) {
            logger.log("error", "basedir is not  directory: '%s'", _env.basedir);
            process.exit(1);
        }
    }

    _env.universeFile = path.join(_env.basedir, _env.universe);

    // check if config exists
    if (!fs.existsSync(_env.universeFile)) {
        logger.log("error", "unknown config: '%s'", _env.universeFile);
        process.exit(1);
    } else {
        let stats = fs.statSync(_env.universeFile);
        if (!stats.isFile()) {
            logger.log("error", "config is not a file: '%s'", _env.universeFile);
            process.exit(1);
        }
    }

    if (argv.let) {
        let l = argv.let;
        _env.vars = {};
        for (i in l) {
            let part = l[i];
            let parts = part.split("=");
            if (parts.length === 2) _env.vars[parts[0]] = parts[1];
        }
    }

    let setup = {};

    Object.defineProperty(setup, 'env', {
      get: () => { return _env; },
      enumerable: true,
      configurable: false
    });

    logger.debug("$$ setup: end");
    return setup;
})();


module.exports = Setup;