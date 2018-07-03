/**
 * config
 **/

const universe = require("./src/universe");

universe.shouldBeA = "A";
universe.register("shouldBeB", "B");

universe.atDawn(() => { universe.logger.debug("universe-dev: dawn hook invoke"); });

universe.atDusk(() => { universe.logger.debug("universe-dev: dusk hook invoke"); });

/*
universe.atDawn(() => {
    universe.logger.debug("universe-dev: async dawn hook invoke");
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            universe.logger.debug("universe-dev: async dawn hook process");
            fulfill();
        }, 3000);
    });
});

universe.atDusk(() => {
    universe.logger.debug("universe-dev: async dusk hook invoke");
    return new Promise((fulfill, reject) => {
        setTimeout(() => {
            universe.logger.debug("universe-dev: async dusk hook process");
            fulfill();
        }, 3000);
    });
});
*/

