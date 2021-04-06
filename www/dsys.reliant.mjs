/**
 * setup the components for the distributed system
 * tailored for the peer (reliant)
 *
 * @author: Bernhard Lukassen
 */

const dsysp = async (universe) => {
    const services              = universe.services;
    const components            = services.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    /*
     * UI Components
     */

    const UI = ComponentDescriptor({
                   id         : 'UI',
                   displayName: 'evolux UI components',
                   category   : 'evolux',
                   href       : '/evolux.ui',
               });

    const Aurora = ComponentDescriptor({
                   id         : 'Aurora',
                   displayName: 'Thoregon Aurora UI components',
                   category   : 'thoregon',
                   href       : '/thoregon.aurora',
               });

    await components.install(UI);
    await components.resolve(UI.id);
    await components.start(UI.id);

    await components.install(Aurora);
    await components.resolve(Aurora.id);
    await components.start(Aurora.id);

};

export default dsysp;
