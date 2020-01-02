/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller   from '/evolux.dyncomponents';

import dsys         from "./dsys.mjs";
import dsysp        from "./dsys.reliant.mjs";

import { myevolux, mythoregon } from '/evolux.universe';

protouniverse.gunpeers = ['https://service.broadcast.green:8765/gun'];

protouniverse.atDawn(async universe => {
    const componentController = Controller.baseCwd('ThoregonComponentController');
    myevolux().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant setup
    await dsys(universe);
});

protouniverse.atDusk(async universe => {
    await myevolux().components.exit();
});
