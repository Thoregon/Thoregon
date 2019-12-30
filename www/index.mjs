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
        const universe              = await letThereBeLight();

        const evolux                = universe.evolux;
        const components            = evolux.components;
        const ComponentDescriptor   = components.ComponentDescriptor;

        const test = ComponentDescriptor({
            id :            'testapp',
            displayName:    'app for testing thoregon (new) features',
            category :      'test',
            href :          '/lib/testapp',
        });

        await components.install(test);

        ready();
    } catch (err) {
        console.log(err);
    }
})();

