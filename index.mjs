/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe      = await letThereBeLight();
        const components    = universe.evolux.components;
    } catch (err) {
        console.log(err);
    }
})();

/*
setTimeout(() => {
    const components    = universe.evolux.components;
    universe.logger.info(components.list());
}, 2000);
*/
