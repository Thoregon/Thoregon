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

export const gunpeers =    ['https://service.broadcast.green:8765/gun'];
export const scope =       'ck4zzeen30000sj0og45h6wtk';

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
    // await testcfg();
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
    port: 8071
});
