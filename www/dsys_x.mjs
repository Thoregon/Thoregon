/**
 * setup the components for the  distributed system
 *
 * @author: Bernhard Lukassen
 */

const dsys = async (universe) => {
    const services              = universe.services;
    const components            = services.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    /*
     * Components
     */
    const karte =    ComponentDescriptor({
        id:             'KARTE',
        displayName:    'thoregon universe KARTE',
        category:       'thoregon',
        href:           '/thoregon.karte',
    });
    const identity  = ComponentDescriptor({
        id:             'identity',
        displayName:    'thoregon distributed identites',
        category:       'thoregon',
        href:           '/thoregon.identity',
    });

    const schema =    ComponentDescriptor({
        id:             'schema',
        displayName:    'schema for apps and contexts',
        category:       'universe',
        href:           '/evolux.schema',
    });
    const tru4D =     ComponentDescriptor({
        id:             'tru4D',
        displayName:    'true distributed domain driven design',
        category:       'universe',
        href:           '/thoregon.tru4D',
    });

    // install 'dynlayer'. provides an infrastructure for all other components
/*
    await components.install(dynlayers);
    await components.resolve(dynlayers.id);
    await components.start(dynlayers.id);
*/

    // install 'identity'. it is essential to have identities for DDDD available
    await components.install(identity);
    await components.resolve(identity.id);
    await components.start(identity.id);

    // install 'schema'. it is essential to have schema descriptions for DDDD available
    await components.install(schema);
    await components.resolve(schema.id);
    await components.start(schema.id);

    // install 'tru4D'. it is essential to have transactions and the eventstore available
    await components.install(tru4D);
    await components.resolve(tru4D.id);
    await components.start(tru4D.id);

    // install 'KARTE'. it is essential to have name and discovery service for DDDD available
    await components.install(karte);
    await components.resolve(karte.id);
    await components.start(karte.id);

};

export default dsys;
