/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';
import { serviceWorkerSetup }               from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.reliant.mjs";

import testcfg                              from "./test.config.mjs";

import { tservices, mythoregon }            from '/evolux.universe';

export const gunpeers =    ['https://service.broadcast.green:8765/gun'];
export const scope =       'ck4zzeen30000sj0og45h6wtk';

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = {
    'broadcast.green.publisher.app' : 'ck5za5vhv00007x0ohw0b0t94',
    'broadcast.green.provider.app'  : 'ck5za5vw900007y0ofbj50xo0'
};

protouniverse.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant peer setup
    await dsys(universe);

    // now install all other components
    componentController.addPlugin(ComponentsWatcher.watch(componentLocation));

    testcfg();

    serviceWorkerSetup();
});

protouniverse.atDusk(async universe => {
    await tservices().components.exit();
});
