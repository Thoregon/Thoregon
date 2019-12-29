/**
 *
 *
 * @author: blukassen
 */

import Controller, { ComponentDescriptor }  from '/evolux.dyncomponents';
import LocationWatcher                      from '/evolux.dyncomponents/lib/controller/locationwatcher.mjs';
import { browserloader, myevolux }          from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.sovereign.mjs";

/*
 * initialize the component loader and load all
 */

protouniverse.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController   = Controller.baseCwd('ThoregonComponentController');
    myevolux().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the sovereign settings
    await dsys(universe);

    // now install all other components
    // componentController.addPlugin(new LocationWatcher(componentLocation));
});

protouniverse.atDusk(async universe => {
    await myevolux().components.exit();
});

/*
 * publish HTTP interface
 */
browserloader.serve({
    root: 'www/',
    index: 'index.mjs',
    port: 8071
});
