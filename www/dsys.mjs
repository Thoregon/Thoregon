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
    const matter =    ComponentDescriptor({
        id:             'matter',
        displayName:    'matter in the universe',
        category:       'universe',
        href:           '/evolux.matter',
    });
    const karte =    ComponentDescriptor({
        id:             'KARTE',
        displayName:    'thoregon universe KARTE',
        category:       'thoregon',
        href:           '/evolux.matter',
    });
    const identity  = ComponentDescriptor({
        id:             'identity',
        displayName:    'thoregon distributed identites',
        category:       'thoregon',
        href:           '/thoregon.identity',
    });
/*
    const dynlayers = ComponentDescriptor({
        id:             'dynlayers',
        displayName:    'dynamic layers',
        category:       'universe',
        href:           '/evolux.dynlayers',
    });
*/
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

    // install 'gun' to have synced distributed DB available
    await components.install(pubsub);
    await components.resolve(pubsub.id);
    await components.start(pubsub.id);

    // install 'gun' to have synced distributed DB available
    await components.install(gun);
    await components.resolve(gun.id);
    await components.start(gun.id);

    // install 'everblack' to have secure end2end encryption within the distributed DB
    await components.install(everblack);
    await components.resolve(everblack.id);
    await components.start(everblack.id);

    // install 'matter' to have fast queries available
    await components.install(matter);
    await components.resolve(matter.id);
    await components.start(matter.id);

    // install 'dynlayer'. provides an infrastructure for all other components
/*
    await components.install(dynlayers);
    await components.resolve(dynlayers.id);
    await components.start(dynlayers.id);
*/

    // install 'KARTE'. it is essential to have name and discovery service for DDDD available
    await components.install(karte);
    await components.resolve(karte.id);
    await components.start(karte.id);

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

    // query layer components

    /*
     * Layers
     */

/*
    const persitenceStack   = 'gunpersistence';

    const exports           = universe.components;
    const s_layers          = services.layers;
    const s_matter          = services.matter;

    const monitor           = new exports.dynlayers.MonitorLayer("Gun LayerMonitor");
    const gunlayer          = new exports.gun.GunLayer();
    gunlayer.insert(monitor);

    s_layers.addStack(persitenceStack, monitor, (payload, res) => s_matter.changed(payload, res));
    s_matter.persistence = persitenceStack;
*/
};

export default dsys;
