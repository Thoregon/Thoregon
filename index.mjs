/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe              = await letThereBeLight();
/*
        const services              = universe.services;
        const components            = services.components;
        const ComponentDescriptor   = components.ComponentDescriptor;

        const test = ComponentDescriptor({
            id :            'testapp',
            displayName:    'app for testing thoregon (new) features',
            category :      'test',
            href :          './lib/testapp',
        });

        await components.install(test);
*/
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
