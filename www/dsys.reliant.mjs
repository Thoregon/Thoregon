/**
 * setup the components for the distributed system
 * tailored for the peer (reliant)
 *
 * @author: Bernhard Lukassen
 */

const dsysp = async (universe) => {
    const evolux                = universe.evolux;
    const components            = evolux.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    // DB components
//    const dexie = ComponentDescriptor({ id: 'tdexie', displayName: 'dexie adapter', category: 'DB', href: '/terra.dexie' });
//    await components.install(dexie);

    // todo: replace by 'tag' of 'api' descriptor
//    thoregon.matter.storeadapter    = components.tdexie.DexieObjectStore;
//    thoregon.dddd.storeadapter      = components.tdexie.DexieEventStore;
};

export default dsysp;
