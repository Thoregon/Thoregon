/**
 *
 *
 * @author: blukassen
 */

import Controller, { LocationWatcher }  from '/evolux.dyncomponents';
import { browserloader }                from '/evolux.universe';

/*
 * initialize the component loader and load all
 */

// publish the component controller
// protouniverse.components = componentController;

protouniverse.atDawn(universe => {
    const componentLocation     = 'components';
    const componentController   = Controller.baseCwd('ThoregonComponentController');
    universe.components = componentController;
    componentController.addPlugin(new LocationWatcher(componentLocation));
});
protouniverse.atDusk(async universe => {
    await universe.components.exit();
});

/*
 * publish HTTP interface
 */
browserloader.serve({
    root: 'www/',
    index: 'index.mjs',
    port: 8071
});
