/**
 *
 *
 * @author: blukassen
 */

// export { default as VAPID }     from "./vapid.json";        // todo: maybe store encoded in matter, passphrase in a vault

import TESTIDENTITY                      from "./testidentity.mjs";

export const DEBUG    = false;
export const GUNDEBUG = false;

// only this dubug IDs will be logged, or DEBUG = true
export const DEBUGIDS     = ['== ThoregonDecorator', '== AccessObserver' ];
// export const DEBUGIDS     = ['** NeulandDB', '## Identity', '== ThoregonDecorator', '== AccessObserver', '++ AppInstance', ':: AgentInstance', '-- SyncManager', '-- SyncDriverMerge', ')) P2PNetworkPolicy', ')) NetworkPolicy', ')) PeerJSNetworkAdapter', ')) NetworkAdapter'];
export const DEBUGCONSOLE = false;
export const LOGUNCAUGHT  = false;

export const DEV = {
    ssi: TESTIDENTITY,
    apps: {
        'easypay-application-dashboard' : { instance: 'BLDEV5' },
    },
    thoregon: 'dev'    // 'prod' uses or loads thoregon system into browser cache from repo ; 'dev' loads also thoregon system via the dev server
}

/*
export const WWW = {
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    static: '../Puls.Dev.Anon',
    port: 7776,
    host: "0.0.0.0",
    // cachecontrol: 'public, max-age=120'     // fresh in seconds = 2 minutes
}
*/

//
// HTTPS support (uncomment if required)
//
/*
const greenlock = {
    // where to find .greenlockrc and set default paths
    packageRoot: process.cwd(),

    // where config and certificate stuff go
    configDir: "./greenlock.d",

    // contact for security and critical bug notices
    maintainerEmail: "bl@bernhard-lukassen.com",

    // name & version for ACME client user agent
    //packageAgent: pkg.name + "/" + pkg.version,

    // whether or not to run at cloudscale
    cluster: false
};

export const WWW = {
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    // port: 80,            --> will server on 443 for secure communication and on 80 for redirects; cannot be changes, its for production
    greenlock: greenlock,
        cachecontrol: 'public, max-age=18000'     // fresh in seconds = 5 hours
}
*/
