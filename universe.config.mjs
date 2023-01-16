/**
 *
 *
 * @author: blukassen
 */

import os                                   from '/os';
import { version }                          from '/process';

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';

import { tservices }                        from '/evolux.universe';

import SEA                                  from '/evolux.everblack/lib/crypto/sea.mjs'
import GunService                           from '/terra.gun/lib/gunservice.mjs';
import IdentityReflection                   from '/thoregon.identity/lib/identityreflection.mjs';
import Dorifer                              from '/thoregon.truCloud/lib/dorifer.mjs';
import WebserviceController                 from '/evolux.web//lib/webservicecontroller.mjs';

// import dsys                                 from "./dsys.mjs";
// import dsysp                                from "./dsys.sovereign.mjs";
// import dsysx                                from "./dsys_x.mjs";

//
// JS engine independence
//
import npath from "/path";
export const path = npath;

// gun
export const gunpeers           = ['http://185.11.139.203:8765/gun'/*, 'https://matter.thoregon.io:8765/gun'*/];

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = [
    'thoregon.service',
    'identity.services.provider'
];

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

//
// initialize unviverse wide services an functions
//

export const everblack = SEA;

universe.atDawn(async universe => {
    // const componentLocation     = 'components';
    // const componentController   = Controller.baseCwd('ThoregonComponentController');
    // tservices().components = componentController;
    //
    // // now setup the basic distributed system
    // await dsysp(universe);      // first the sovereign settings
    // await dsys(universe);       // basic system
    // await dsysx(universe);      // extended system
    //
    // // now install all other components
    // componentController.addPlugin(ComponentsWatcher.watch(componentLocation));
    // // todo: Refactor LocationWatcher to use 'matter.components'

    const gunservice = new GunService();
    await gunservice.start();

    const identity = new IdentityReflection();
    await identity.start();

    const dorifer = new Dorifer();
    await dorifer.start();

    const wsc = new WebserviceController();
    await wsc.start();

    if (universe.DEV?.ssi) {
        const SSI = universe.DEV?.ssi;
        const spec = (await import("./agent_0.config.mjs")).default;
        await universe.Identity.useIdentity(SSI);
        await universe.Agent.addServiceSpec(spec);
    }

    // awake agent when SSI is avialable
    await agent.prepare();
});

universe.atDusk(async universe => {
    // await tservices().components.exit();
});
