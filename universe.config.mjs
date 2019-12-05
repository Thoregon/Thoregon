/**
 *
 *
 * @author: blukassen
 */

import Controller                   from '/evolux.dyncomponents';
import LocationWatcher              from '/evolux.dyncomponents/lib/controller/locationwatcher.mjs';
import { browserloader, myevolux }  from '/evolux.universe';

/*
 * initialize the component loader and load all
 */

protouniverse.atDawn(universe => {
    const componentLocation     = 'components';
    const componentController   = Controller.baseCwd('ThoregonComponentController');
    myevolux().components = componentController;
    componentController.addPlugin(new LocationWatcher(componentLocation));
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
