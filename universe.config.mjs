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

const componentLocation     = 'components';
const componentController   = Controller.baseCwd('ThoregonComponentController');
componentController.addPlugin(new LocationWatcher(componentLocation));

// publish the component controller
protouniverse.components = componentController;

/*
 * publish HTTP interface
 */
browserloader.serve({
    root: 'www/',
    index: 'index.mjs',
    port: 8071
});
