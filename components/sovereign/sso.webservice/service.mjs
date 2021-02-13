/**
 * This setup establishes an instance of a 'helios' bounded context
 *
 * todo: define convention/configuration for this setup
 *
 * @author: Bernhard Lukassen
 */

const ctxname           = 'identity.services.provider';
const responsibility    = 'identity.services.provider';

const ctxid             = 'cPanGMJZvTpCwF3iPZT2rwFT';   // todo: just for testing, need a global context -> establish global context at 'thoregon.identity'

export default class Service {

    /*
     * service implementation
     */

    install() {}
    uninstall() {}
    resolve() {}

    async start() {
        let tru4d       = universe.services.tru4d;
/*
        tru4d.onMeta(ctxname, async (bc) => {
            let pair         = universe.IDENTITY_PROVIDER;
            await bc.establish(ctxid, pair, {});
            tru4d.onCtx(ctxid, async (ctx) => {
                // universe.logger.info('BC established', ctxname);
                // await testinstall(ctxid);
            });
        });
*/

/*
        let webservice  = universe.Identity.serviceproviderwebservice;
        if (!webservice) return;        // peer w/o embedded web service
        // connect URL with the context instance
        await webservice.addTerminalRoot('serviceproviders', ctxid);
        await webservice.start();
*/
    }

    async stop() {}
    update() {}

}
