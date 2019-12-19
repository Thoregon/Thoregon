/**
 * This init can be used as convenient single line initialization.
 * Returns the universe for eays dependency injection.
 *
 * @author: blukassen
 */

async function letThereBeLight() {
    const setup = require("../src/setup");
    const config = require("../src/config")(setup.env);
    const universe = require("../src/universe");
    const logger = universe.logger;

    try {
        logger.debug("$$ letThereBeLight: start");
        // now inflate the universe
        await universe.letThereBeLight();
        logger.debug("$$ letThereBeLight: end");
        return universe;
    } catch (e) {
        logger.error("$$ letThereBeLight: error", e);
        process.exit(1);
    }
}

module.exports = letThereBeLight;

