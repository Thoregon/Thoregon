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
};

