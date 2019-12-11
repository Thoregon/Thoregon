/**
 * do the basic setup of subscriberlist in thoregon
 *
 * @author: Bernhard Lukassen
 */

export default {
    // add to the bounded context
    true4d: {
        context: 'broadcast.green.publisherctx'
    },

    // now for the query, ensure the collection
    matter: {
        collection: 'subscriberlist'
    }
};
