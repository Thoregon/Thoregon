/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';
import componentController, { LocationWhatcher } from '/evolux.dyncomponents';
import { browserloader }    from '/evolux.universe';

(async () => {
    try {
        const universe = await letThereBeLight();

        /*
         * initialize the component loader and load all
         */
        componentController.use(new LocationWatcher(universe.componentlocation));
        export const components = componentController;

        /*
         * publish HTTP interface
         */
        browserloader.serve({ root: 'www/', index: 'index.mjs', port: 8071 });

    } catch (err) {
        console.log(err);
    }
})();

