/**
 * setup the components for the  distributed system
 *
 * @author: Bernhard Lukassen
 */
// import { ComponentDescriptor } from '/evolux.dyncomponents';



const dsys = async (universe) => {
    const evolux                = universe.evolux;
    const components            = evolux.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    /*
     * Components
     */
    const dynlayers = ComponentDescriptor({
        id:             'dynlayers',
        displayName:    'dynamic layers',
        category:       'universe',
        href:           '/evolux.dynlayers',
    });
    const tru4D =     ComponentDescriptor({
        id:             'tru4D',
        displayName:    'true distributed domain driven design',
        category:       'universe',
        href:           '/evolux.tru4D',
    });
    const matter =    ComponentDescriptor({
        id:             'matter',
        displayName:    'matter in the universe',
        category:       'universe',
        href:           '/evolux.matter',
    });

    // install 'dynlayer'. provides an infrastructure for all other components
    components.install(dynlayers);
    await components.isInstalled(dynlayers.id);

    // install 'tru4D'. it is essential to have transactions and the eventstore available
    components.install(tru4D);
    await components.isInstalled(tru4D.id);

    // install 'matter' to have fast queries available
    components.install(matter);
    await components.isInstalled(matter.id);

    // query layer components

    /*
     * Layers
     */

    const layers = evolux.layers;

    //

};

export default dsys;
