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
     * Thoregon Components
     */
    const archetim =  ComponentDescriptor({
                                              id:             'archetim',
                                              displayName:    'universe wide graph DB',
                                              category:       'universe',
                                              href:           '/thoregon.archetim',
                                          });
/*
    const karte =    ComponentDescriptor({
        id:             'KARTE',
        displayName:    'thoregon universe KARTE',
        category:       'thoregon',
        href:           '/thoregon.karte',
    });
*/
    const identity  = ComponentDescriptor({
        id:             'identity',
        displayName:    'thoregon distributed identites',
        category:       'thoregon',
        href:           '/thoregon.identity',
    });

    /*
        const heavymatter = ComponentDescriptor({
           id:             'heavymatter',
           displayName:    'matter for heavy (large) data',
           category:       'universe',
           href:           '/terra.ipfs',
        });

        const schema =    ComponentDescriptor({
            id:             'schema',
            displayName:    'schema for apps and contexts',
            category:       'universe',
            href:           '/evolux.schema',
        });
    */
    const tru4D =     ComponentDescriptor({
        id:             'tru4D',
        displayName:    'true distributed domain driven design',
        category:       'universe',
        href:           '/thoregon.tru4D',
    });
    const truCloud =  ComponentDescriptor({
          id:             'truCloud',
          displayName:    'truCloud supporting truServerless',
          category:       'universe',
          href:           '/thoregon.truCloud',
      });

    // install 'archetim'. provides universe wide persistence
    await components.install(archetim);
    await components.resolve(archetim.id);
    await components.start(archetim.id);
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

    // install 'heavymatter'. it is essential to store files and other big data
    // await components.install(heavymatter);
    // await components.resolve(heavymatter.id);
    // await components.start(heavymatter.id);

    // install 'tru4D'. it is essential to have transactions and the eventstore available
    await components.install(tru4D);
    await components.resolve(tru4D.id);
    await components.start(tru4D.id);

    // install 'truCloud'. this is the magic
    await components.install(truCloud);
    await components.resolve(truCloud.id);
    await components.start(truCloud.id);

    // install 'KARTE'. it is essential to have name and discovery service for DDDD available
/*
    await components.install(karte);
    await components.resolve(karte.id);
    await components.start(karte.id);
*/

};

export default dsys;
