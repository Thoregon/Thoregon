/**
 *
 *
 * @author: Bernhard Lukassen
 */

export default async () => {
    const evolux                = universe.evolux;
    const components            = evolux.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    universe.logger.info("test.config");

    const subscriberlist = ComponentDescriptor({
        id:             'subscriberlist',
        displayName:    'broadcast.green subscriberlist',
        category:       'broadcast.green',
        href:           './lib/subscriberlist',
    });

    // install 'gun' to have synced distributed DB available
    await components.install(subscriberlist);
    await components.resolve(subscriberlist.id);
};

