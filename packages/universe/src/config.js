/**
 *
 *
 * @author: blukassen
 */

/**
 * init config. Reads config from the specified config file: setup.env.configFile
 * If the config file, which is an executable JS, produces errors the process will exit.
 *
 * Usage:
 *  const setup = require("setup");
 *  const config = require("config")(setup.env);
 * @see setup.js
 *
 * @param {} env - invoke with 'setup.env'
 */
let config = function (env) {
    let logger = env.logger;
    // run the config; if it produces errors --> exit
    try {
        logger.debug("$$ config: start");
        const universe = require("./universe");
        // publish argv to universe
        // reuse the logger from setup; can be overwritten by the universe config(s)
        universe.logger = logger;
        // set origin; yes, hard overwrite other settings
        universe.stage = env.stage;
        universe.universeFile = env.universeFile;

        // run the config script
        require(env.universeFile);

        // set variables after reading the universe file to enable override of variables
        if (env.vars) {
            let vars = env.vars;
            for (property in vars) {
                if (vars.hasOwnProperty(prop)) universe.register(property, vars[property]);
            }
        }
        logger.debug("$$ config: end");
    } catch (e) {
        logger.error("$$ config: error -> %s", e);
        process.exit(1);
    }
};

module.exports = config;
