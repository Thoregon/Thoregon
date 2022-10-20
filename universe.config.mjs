/**
 *
 *
 * @author: blukassen
 */

import os                                   from '/os';

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';

import { tservices }                        from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.sovereign.mjs";
import dsysx                                from "./dsys_x.mjs";

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
export const AGENT_NAME = 'Agent ' + host + ' on ' + os.type();

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

// import TESTIDENTITY from "./testidentity.mjs";
// import spec         from "./agent_0.config.mjs";

/*
 * initialize the component loader and load all
 */

universe.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController   = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the sovereign settings
    await dsys(universe);       // basic system
    await dsysx(universe);      // extended system

    // now install all other components
    componentController.addPlugin(ComponentsWatcher.watch(componentLocation));
    // todo: Refactor LocationWatcher to use 'matter.components'

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
    await tservices().components.exit();
});
