/**
 * setup the components for the  distributed system
 *
 * @author: Bernhard Lukassen
 */
import { ComponentDescriptor } from '/evolux.dyncomponents';

const dynlayers = ComponentDescriptor({
    id :            'dynlayers',
    displayName:    'dynamic layers',
    category :      'universe',
    href :          '/evolux.dynlayers',
});
const tru4D =     ComponentDescriptor({
    id :            'tru4d',
    displayName:    'true distributed domain driven design',
    category :      'universe',
    href :          '/evolux.tru4D',
});
const matter =    ComponentDescriptor({
    id :            'matter',
    displayName:    'matter in the universe',
    category :      'universe',
    href :          '/evolux.matter',
});

const dsys = async (universe) => {
    const evolux        = universe.evolux;
    const components    = evolux.components;

    // install 'dynlayer'. provides an infrastructure for all other components
    components.install(dynlayers);
    await components.isInstalled(dynlayers.id);

    // install 'tru4D'. it is essential to have transations and the eventstore avlailable
    components.install(tru4D);
    await components.isInstalled(tru4D.id);

    // install 'matter' to have fast queries available
    components.install(matter);
    await components.isInstalled(matter.id);
};

export default dsys;
