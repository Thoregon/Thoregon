/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller, { ComponentsWatcher }    from '/evolux.dyncomponents';

import dsys                                 from "./dsys.mjs";
import dsysp                                from "./dsys.reliant.mjs";
import dsysx                                from "./dsys_x.mjs";

import { tservices, mythoregon }            from '/evolux.universe';

export const gunpeers =    ['https://matter.thoregon.io:8765/gun'];

// todo: move to seperate config e.g. 'tru4d.config.mjs'
export const responsibilities   = [
    'thoregon.app'
];

export const defaultapp = 'thatsme.app';

universe.atDawn(async universe => {
    const componentLocation     = 'components';
    const componentController = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant peer setup
    await dsys(universe);       // basic system
    await dsysx(universe);      // extended system

    // now install all other components
    componentController.addPlugin(ComponentsWatcher.watch(componentLocation));
});

universe.atDusk(async universe => {
    await tservices().components.exit();
});
