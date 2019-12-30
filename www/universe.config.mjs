/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller   from '/evolux.dyncomponents';

import dsys         from "./dsys.mjs";
import dsysp        from "./dsys.reliant.mjs";

import { myevolux, mythoregon } from '/evolux.universe';

protouniverse.atDawn(async universe => {
    const componentController = Controller.baseCwd('ThoregonComponentController');
    myevolux().components = componentController;

    /*
     * define all component slots
     */
    const t = mythoregon();

    // matter
    t.matter = {};
    t.matter.storeadapter = {};

    // tru4D
    t.dddd = {};
    t.dddd.storeadapter = {};

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant setup
    await dsys(universe);
});

protouniverse.atDusk(async universe => {
    await myevolux().components.exit();
});
