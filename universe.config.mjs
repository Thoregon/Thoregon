/**
 *
 *
 * @author: blukassen
 */

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';

import { browserloader, tservices }         from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.sovereign.mjs";
import testcfg                              from "./test.config.mjs";

export const gunpeers           = ['https://service.broadcast.green:8765/gun'];
export const scope              = 'ck4zzeen30000sj0og45h6wtk';

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = {
    'broadcast.green.publisher.service' : 'ck5z99pvr00004v0oc9bl6k3m',
    'broadcast.green.provider.service'  : 'ck5za1mpm00007a0offuyd7kp',
};

/*
 * initialize the component loader and load all
 */

protouniverse.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController   = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the sovereign settings
    await dsys(universe);

    // now install all other components
    componentController.addPlugin(ComponentsWatcher.watch(componentLocation));
    // todo: Refactor LocationWatcher to use 'matter.components'

    testcfg();
});

protouniverse.atDusk(async universe => {
    await tservices().components.exit();
});

/*
 * publish HTTP interface
 */
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    port: 8070
});
