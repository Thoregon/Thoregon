/**
 *
 *
 * @author: Bernhard Lukassen
 */

import Controller   from '/evolux.dyncomponents';

import dsys         from "./dsys.mjs";
import dsysp        from "./dsys.reliant.mjs";

import { tservices, mythoregon } from '/evolux.universe';

protouniverse.gunpeers =    ['https://service.broadcast.green:8765/gun'];
protouniverse.scope =       'ck4zzeen30000sj0og45h6wtk';

protouniverse.atDawn(async universe => {
    const componentController = Controller.baseCwd('ThoregonComponentController');
    tservices().components = componentController;

    // now setup the basic distributed system
    await dsysp(universe);      // first the reliant peer setup
    await dsys(universe);
});

protouniverse.atDusk(async universe => {
    await tservices().components.exit();
});
