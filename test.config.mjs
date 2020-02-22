/**
 *
 *
 * @author: Bernhard Lukassen
 */

export default async () => {
    const services              = universe.services;
    const components            = services.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    universe.logger.info("test.config");

    const component = ComponentDescriptor({
        id :            'Karte',
        displayName:    'Karte - Browser for the universe',
        category :      'test',
        href :          '/thoregon.karte',
    });

    await components.install(component);

    // install 'gun' to have synced distributed DB available
    await components.install(component);
    await components.resolve(component.id);
    await components.start(component.id);

    /*
        const channel = ComponentDescriptor({
            id :            'channel',
            displayName:    'channel from broadcast green',
            category :      'test',
            href :          './lib/channel',
        });

        await components.install(channel);

        // install 'gun' to have synced distributed DB available
        await components.install(channel);
        await components.resolve(channel.id);
    */

/*
    let channels = await universe.matter.broadcast.green.channels.val;
    let mirror = channels.mirror;

    universe.logger.info(mirror);
*/
};

