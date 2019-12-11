/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller   from '/evolux.dyncomponents';
import { myevolux } from '/evolux.universe';

import dsys         from "../dsys.mjs";
import dsysp        from "./dsys.reliant.mjs";

protouniverse.atDawn(async universe => {
    const componentController = Controller.baseCwd('ThoregonComponentController');
    myevolux().components = componentController;

    // now setup the basic distributed system
    await dsys(universe);
    await dsysp(universe);
});

protouniverse.atDusk(async universe => {
    await myevolux().components.exit();
});
