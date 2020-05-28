/**
 *
 *
 * @author: blukassen
 */

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
    port: 8070
});
