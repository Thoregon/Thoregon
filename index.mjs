/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

import letThereBeLight      from '/evolux.universe';
import components           from './@components';

(async () => {
    try {
        const universe              = await letThereBeLight();

        universe.addComponents(components);
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
