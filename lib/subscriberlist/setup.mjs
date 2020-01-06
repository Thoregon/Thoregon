/**
 * do the basic setup of subscriberlist in thoregon
 *
 * @author: Bernhard Lukassen
 */

import BoundedContextBuilder from '/evolux.tru4d';
import SchemaBuilder, { ID, CHILD, REL, INT, REAL, BOOL, STRING, DATE, DATETIME, DURATION, IMAGE, LIST, MAP, SET } from '/evolux.schema';

const sbuilder = new SchemaBuilder();
const bg =      ref => `broadcast.green.${ref}`;    // shortcut and DRY

sbuilder.name(bg('SubscriberList'))
    .addAttribute({ name: 'name',           type: STRING, index: true })
    .addAttribute({ name: 'description',    type: STRING })
    .addAttribute({ name: 'contacts',       type: LIST(REL(bg('Contact'))) })
    .addAttribute({ name: 'messenger',      type: MAP(REL(bg('Messenger'))) })
    .addAttribute({ name: 'thumbnail',      type: IMAGE })
    .addAttribute({ name: 'lastMessage',    type: DATETIME })
    .addAttribute({ name: 'messagesTotal',  type: INT, compute: {
            bind:   bg('messages'),
            filter: (msg, list) => msg.subscriptionlists.includes(list),
            fn:     list => list.size()
        } })
    .addAttribute({ name: 'trends',         type: REL(bg('Trends')), compute: subscriptionlist => subscriptionlist.trend() })
    ;

const subscriberlist = sbuilder.build();

const ctxbuilder = new BoundedContextBuilder();

ctxbuilder.use('broadcast.green.publisher.ctx')
    .addSchema(subscriberlist)
    .addDefaultCommands()
    .publish(bg('subscriberlists'))
    .release('2019-12-23.1')
;

const ctx = ctxbuilder.build();

export default ctx;
