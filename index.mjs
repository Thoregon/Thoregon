/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe              = await letThereBeLight();

        const evolux                = universe.evolux;
        const components            = evolux.components;
        const ComponentDescriptor   = components.ComponentDescriptor;

        const test = ComponentDescriptor({
            id :            'testapp',
            displayName:    'app for testing thoregon (new) features',
            category :      'test',
            href :          './lib/testapp',
        });

        await components.install(test);
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
