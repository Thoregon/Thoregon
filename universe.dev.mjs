/**
 *
 *
 * @author: blukassen
 */

export { default as VAPID }     from "./vapid.json";        // todo: maybe store encoded in matter, passphrase in a vault

import { browserloader }            from '/evolux.universe';

export const DEBUG = false;
export const GUNDEBUG = false;

/*
 * publish HTTP interface
 */
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    port: 8070,
    host: "0.0.0.0",
    // cachecontrol: 'public, max-age=120'     // fresh in seconds = 2 minutes
});
