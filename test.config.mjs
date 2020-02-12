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

    universe.logger.info(await await universe.matter.broadcast.green.channels.full);
};

