import TESTIDENTITY from "../Puls.Dev/testidentity.mjs";

export default {
    ssi: TESTIDENTITY,
    apps: {
        'example-application-aurora'   : { instance: 'BLDEV' },
        'easypay-application-dashboard': {
            instance  : 'BLDEV4',
            testdata  : ['/easypay-testdata/integrationtestdata.mjs', '/easypay-testdata/producttestdata.mjs'],
            // autoreload: true
        },
    },
    thoregon: 'dev'    // 'prod' uses thoregon system from (browser) cache from, if missing it's loaded from repo ; 'dev' loads also thoregon system via the dev server
}
