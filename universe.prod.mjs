/**
 *
 *
 * @author: blukassen
 */

import { browserloader }            from '/evolux.universe';

// don't change this settings unless you have a really good reason
export const DEBUG = false;
export const GUNDEBUG = false;

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

/*
 * publish HTTP interface
 */
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    // port: 80,            --> will server on 443 for secure communication and on 80 for redirects; cannot be changes, its for production
    greenlock: greenlock
});
