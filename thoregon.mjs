/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

import letThereBeLight      from '/evolux.universe';
// import components           from './@components';

(async () => {
    try {
        const universe              = await letThereBeLight();
        thoregon.checkpoint("§§ start delta");
        // universe.addComponents(components);

        await import('./test/spikes.mjs');
    } catch (err) {
        console.log(err);
    }
})();

/*
setTimeout(() => {
    const components    = universe.services.components;
    universe.logger.info(components.list());
}, 2000);
*/
