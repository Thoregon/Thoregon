/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';
import { serviceWorkerSetup }               from '/evolux.universe';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.reliant.mjs";
import dsysx                                from "./dsys_x.mjs";

import { tservices, mythoregon }            from '/evolux.universe';

export const gunpeers =    ['https://service.broadcast.green:8765/gun'];

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = [
    'thoregon.app'
];

protouniverse.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant peer setup
    await dsys(universe);       // basic system
    await dsysx(universe);      // extended system

    // now install all other components
    componentController.addPlugin(ComponentsWatcher.watch(componentLocation));

    serviceWorkerSetup();
});

protouniverse.atDusk(async universe => {
    await tservices().components.exit();
});
