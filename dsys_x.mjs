/**
 * setup the components for the distributed system
 * use same setup as for the
 *
 * @author: Bernhard Lukassen
 */
// import { ComponentDescriptor } from '/evolux.dyncomponents';

export default async (universe) => {
    const services              = universe.services;
    const components            = services.components;
    const ComponentDescriptor   = components.ComponentDescriptor;
    /*
     * Components
     */
    const www =       ComponentDescriptor({
                                                 id:             'www',
                                                 displayName:    'connect to the web world',
                                                 category:       'universe',
                                                 href:           '/evolux.web',
                                             });
    // install 'web'. provides universe wide persistence
    await components.install(www);
    await components.resolve(www.id);
    await components.start(www.id);

    /*
     * Thoregon Components
     */
    const archetim =  ComponentDescriptor({
                                              id:             'archetim',
                                              displayName:    'universe wide graph DB',
                                              category:       'universe',
                                              href:           '/thoregon.archetim',
                                          });
    const identity  = ComponentDescriptor({
                                              id:             'identity',
                                              displayName:    'thoregon distributed identites',
                                              category:       'thoregon',
                                              href:           '/thoregon.identity',
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
    // install 'heavymatter'. it is essential to store files and other big data
    // await components.install(heavymatter);
    // await components.resolve(heavymatter.id);
    // await components.start(heavymatter.id);

    // install 'tru4D'. it is essential to have transactions and the eventstore available
    // await components.install(tru4D);
    // await components.resolve(tru4D.id);
    // await components.start(tru4D.id);

    // install 'truCloud'. this is the magic
    await components.install(truCloud);
    await components.resolve(truCloud.id);
    await components.start(truCloud.id);

    // install 'identity'. it is essential to have identities for DDDD available
    await components.install(identity);
    await components.resolve(identity.id);
    await components.start(identity.id);
};;
