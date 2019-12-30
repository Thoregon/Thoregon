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
    const matter =    ComponentDescriptor({
        id:             'matter',
        displayName:    'matter in the universe',
        category:       'universe',
        href:           '/evolux.matter',
    });
    const dynlayers = ComponentDescriptor({
        id:             'dynlayers',
        displayName:    'dynamic layers',
        category:       'universe',
        href:           '/evolux.dynlayers',
    });
    const schema =     ComponentDescriptor({
        id:             'schema',
        displayName:    'schema for apps and contexts',
        category:       'universe',
        href:           '/evolux.schema',
    });
    const tru4D =     ComponentDescriptor({
        id:             'tru4D',
        displayName:    'true distributed domain driven design',
        category:       'universe',
        href:           '/evolux.tru4D',
    });

    // install 'matter' to have fast queries available
    await components.install(matter);

    // install 'dynlayer'. provides an infrastructure for all other components
    await components.install(dynlayers);

    // install 'schema'. it is essential to have schema descriptions for DDDD available
    await components.install(schema);

    // install 'tru4D'. it is essential to have transactions and the eventstore available
    await components.install(tru4D);

    // query layer components

    /*
     * Layers
     */

    const layers = evolux.layers;

    //

};

export default dsys;
