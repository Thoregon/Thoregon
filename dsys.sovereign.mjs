/**
 * setup the components for the distributed system
 * tailored for the peer (sovereign)
 *
 * @author: Bernhard Lukassen
 */


const dsysp = async (universe) => {
    const services              = universe.services;
    const components            = services.components;
    const ComponentDescriptor   = components.ComponentDescriptor;

    /*
     * Components
     */
    const www =       ComponentDescriptor({
        id:             'www',
        displayName:    'simple webservice connection to components',
        category:       'universe',
        href:           '/evolux.web',
    });

    // install 'www' to have synced distributed DB available
    await components.install(www);
    await components.resolve(www.id);
    await components.start(www.id);

};

export default dsysp;
