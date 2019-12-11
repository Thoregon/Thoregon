/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

// import { busy, ready, busySince, isBusy }   from '/evolux.universe';
import { busy, ready }   from '/evolux.universe';

(async () => {
    try {
        busy();
        const universe = await letThereBeLight();
        ready();
    } catch (err) {
        console.log(err);
    }
})();

