/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe              = await letThereBeLight();
        thoregon.checkpoint("§§ start delta");
        // universe.addComponents(components);

        global.agent?.addHook(async () => {
            await import('./test/spikes.mjs');
        })
    } catch (err) {
        console.log(err);
    }
})();
