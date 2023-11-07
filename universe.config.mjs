/**
 *
 *
 * @author: blukassen
 */

import os          from "/os";
import { version } from "/process";
import CheckMail   from "/evolux.web/lib/mail/checkmail.mjs";

export { default as PEERID }     from "./peer.mjs";
// export { default as STRIPE_INI } from "./stripeini.mjs";

//
// JS engine independence
//
import npath from "/path";
export const path = npath;

import pfs from 'fs/promises';
export const fs = pfs;

import * as pspecials from "/evolux.util/lib/specialnode.mjs";
export const specials = pspecials;

// gun
// export const gunpeers           = ['http://185.11.139.203:8765/gun'/*, 'https://matter.thoregon.io:8765/gun'*/];

export const NEULAND_STORAGE_OPT      = { location: 'data', name: 'neuland' };    // can override: writeCount, writeInterval
export const NEULANDLOCAL_STORAGE_OPT = { location: 'data', name: 'neulandlocal' };    // can override: writeCount, writeInterval

//
// define agent
//

let host = os.hostname();
let i = host.lastIndexOf('.');
if (host.lastIndexOf('.') > -1) {
    host = host.substring(0,i);
}
const AGENT_NAME = 'Agent ' + host + ' on ' + os.type();

export const deviceInfo = {
    name     : AGENT_NAME,
    browser  : 'none',
    vm       : {
        name: 'node',
        os  : os.type(),
        version
    },
    mobile   : false,
    pointlock: false,
    agent    : true
}

Object.defineProperties(thoregon, {
    'deviceInfo'       : { value: deviceInfo, configurable: false, enumerable: true, writable: false },
});

// email

export const checkmail = new CheckMail();

//
// define the universe for this distribution
//
// export const STRANGENESS = 'bwhOilJRd73uyFUzeKfJ13604fJdwKTy';  // the strangeness is a basic reference to be used as 'pepper' for all PoW's
// export const DORIFER = 'HriEr6DQKudGfFVphupRuTyxLGKgxNay';  // the soul (address) of the dorifer directory
// export const THOREGON_SPUB = '';

// export { default as smtpcredentials }       from "./smtp.json";

//
// Identity
//

export const GET_SECRET_WORKER = async () => {
    return (await import('/thoregon.identity/sasecretworker.mjs')).default;
}

// export PEERID;

//
// initialize unviverse wide services an functions
//

universe.atDawn(async (universe) => {
    await import('./thoregonsystem.mjs');

    universe.lifecycle.triggerPrepare();
    universe.lifecycle.triggerStart();
});

universe.atDusk(async (universe, code) => {
    universe.lifecycle?.triggerExit(code);
});
