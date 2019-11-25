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

        components.observe('matter', { started:  (descriptor) => {
                const matter = universe.evolux.matter;
                universe.logger.info("hook on matter");
            }
        });



    } catch (err) {
        console.log(err);
    }
})();

setTimeout(() => {
    const components    = universe.evolux.components;
    universe.logger.info(components.list());
}, 2000);

/*
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
                });
*/
