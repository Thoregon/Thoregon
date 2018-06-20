/**
 *
 *
 * @author: blukassen
 */

const STAGES = {
    PLAYGROUND: {
        universe: 'universe-playground.js'
    },
    DEV: {
        universe: 'universe-dev.js'
    },
    FTEST: {
        universe: 'universe-ftest.js'
    },
    LTEST: {
        universe: 'universe-ltest.js'
    },
    PREPRODUCTION: {
        universe: 'preuniverse.js'
    },
    PRODUCTION: {
        universe: 'universe.js'
    }
};

module.exports = STAGES;
