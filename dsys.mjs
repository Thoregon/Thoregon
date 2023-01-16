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
    const pubsub =       ComponentDescriptor({
                                                 id:             'pubsub',
                                                 displayName:    'publish/subscribe infrastructure in the universe',
                                                 category:       'universe',
                                                 href:           '/evolux.pubsub',
                                             });
    const gun =       ComponentDescriptor({
                                              id:             'gun',
                                              displayName:    'distributed DB from universe',
                                              category:       'universe',
                                              href:           '/terra.gun',
                                          });
    const everblack = ComponentDescriptor({
                                              id:             'everblack',
                                              displayName:    'encryption & security for thoregon',
                                              category:       'thoregon',
                                              href:           '/evolux.everblack',
                                          });
    /*
        const matter =    ComponentDescriptor({
            id:             'matter',
            displayName:    'matter in the universe',
            category:       'universe',
            href:           '/evolux.matter',
        });
    */

    // install 'gun' to have synced distributed DB available
    await components.install(gun);
    await components.resolve(gun.id);
    await components.start(gun.id);

    // install 'gun' to have synced distributed DB available
    await components.install(pubsub);
    await components.resolve(pubsub.id);
    await components.start(pubsub.id);

    // install 'everblack' to have secure end2end encryption within the distributed DB
    await components.install(everblack);
    await components.resolve(everblack.id);
    await components.start(everblack.id);

    // install 'matter' to have fast queries available
    /*
        await components.install(matter);
        await components.resolve(matter.id);
        await components.start(matter.id);
    */

};;
