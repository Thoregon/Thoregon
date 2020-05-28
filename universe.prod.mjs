/**
 *
 *
 * @author: blukassen
 */

import { browserloader }            from '/evolux.universe';

// don't change this settings unless you have a really good reason
export const DEBUG = false;
export const GUNDEBUG = false;

/*
 * publish HTTP interface
 */
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    // port: 80,
    greenlock: {
        // where to find .greenlockrc and set default paths
        packageRoot: __dirname,

        // where config and certificate stuff go
        configDir: "./greenlock.d",

        // contact for security and critical bug notices
        maintainerEmail: pkg.author,

        // name & version for ACME client user agent
        //packageAgent: pkg.name + "/" + pkg.version,

        // whether or not to run at cloudscale
        cluster: false
    }
});
