/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';

(async () => {
    try {
        const universe      = await letThereBeLight();
        const components    = universe.components;

        components.on('started', (descriptor) => {
            if (descriptor.id !== 'matter') return;

            const matter    = universe.matter;

            matter.on('addcollection', (event) => {
                matter.on('additem', collection, (event) => {

                    }
                );
                matter.on('removeitem', collection, (event) => {

                    }
                );
                matter.on('moveitem', collection, (event) => {

                    }
                );

                //
                }
            );


        });

    } catch (err) {
        console.log(err);
    }
})();

