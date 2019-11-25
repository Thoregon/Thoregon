/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe              = await letThereBeLight();
    } catch (err) {
        console.log(err);
    }
})();

