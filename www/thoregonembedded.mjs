/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

import letThereBeLight          from '/evolux.universe';
import { timeout, doAsync }     from '/evolux.universe';
import components               from './@components';

(async () => {
    try {
        const universe = await letThereBeLight();
        await universe.addComponents(components);     // todo: automatize

        await timeout(300);
        document.dispatchEvent(new CustomEvent('universe', { detail: universe }));
    } catch (err) {
        console.log(err);
    }
})();
