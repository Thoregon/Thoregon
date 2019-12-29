/**
 * setup the components for the distributed system
 * tailored for the peer (sovereign)
 *
 * @author: Bernhard Lukassen
 */


const dsysp = async (universe) => {
    const thoregon              = universe.thoregon;
    const evolux                = universe.evolux;
    const components            = evolux.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    // DB components
//    const nedb = ComponentDescriptor({ id: 'tnedb', displayName: 'neDB adapter', category: 'DB', href: '/terra.nedb' });
//    await components.install(nedb);

    // todo: replace by 'tag' of 'api' descriptor
    // thoregon.matter.storeadapter    = components.tgun.GunObjectStore;
    // thoregon.dddd.storeadapter      = components.tgun.GunEventStore;
};

export default dsysp;
