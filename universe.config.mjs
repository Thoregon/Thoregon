/**
 *
 *
 * @author: blukassen
 */

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';

import { tservices }                        from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.sovereign.mjs";
import dsysx                                from "./dsys_x.mjs";

export const gunpeers           = ['https://matter.thoregon.io:8765/gun'];

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = [
    'thoregon.service',
    'identity.services.provider'
];

//
// define app if no reference for this distribution
//
export const defaultapp = 'thatsme.app';

//
// define the universe for this distribution
//
export const STRANGENESS = 'bwhOilJRd73uyFUzeKfJ13604fJdwKTy';  // the strangeness is a basic reference to be used as 'pepper' for all PoW's
export const DORIFER = 'HriEr6DQKudGfFVphupRuTyxLGKgxNay';  // the soul (address) of the dorifer directory
export const THOREGON_SPUB = '';

export const SSI_RESOLVER = '/thoregon.identity/lib/resolvers/gunidentityresolver.mjs';

// export { default as smtpcredentials }       from "./smtp.json";

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

    // get the keypair from the vault; since the passphrase is here in clean text, this is also insecure
    // todo: use a wallet or FIDO instead
    // let entry = await universe.Everblack.getPair("heliots.service", "heliotspassphrase1", "./.thoregon/tvs/heliots.tvs");
    // universe.HELIOTS_SERVICE = entry.data;
 //   let entry = await universe.Everblack.getPair("identity.webservice", "thoregonidentitypassphrase1", "./.thoregon/tvs/identity.tvs");
   // universe.IDENTITY_PROVIDER = entry.data;

});

universe.atDusk(async universe => {
    await tservices().components.exit();
});
