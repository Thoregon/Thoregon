/**
 * do the basic setup of subscriberlist in thoregon
 *
 * @author: Bernhard Lukassen
 */

import BoundedContextBuilder from '/evolux.tru4d';
import SchemaBuilder, { ID, CHILD, REF, INT, REAL, BOOL, STRING, DATE, DATETIME, DURATION, IMAGE, LIST, MAP, SET } from '/evolux.schema';
import subscriberlist from "../../components/ddd/subscriberlist.mjs";

const sbuilder = new SchemaBuilder();
const bg =      ref => `broadcast.green.${ref}`;    // shortcut and DRY

sbuilder.name('SubscriptionList')
    .addAttribute({ name: 'name',           type: STRING, index: true })
    .addAttribute({ name: 'description',    type: STRING })
    .addAttribute({ name: 'contacts',       type: LIST(REF(bg('Contact'))) })
    .addAttribute({ name: 'messenger',      type: MAP(REF(bg('Messenger'))) })
    .addAttribute({ name: 'thumbnail',      type: IMAGE })
    .addAttribute({ name: 'lastMessage',    type: DATETIME })
    .addAttribute({ name: 'messagesTotal',  type: INT, compute: {
            bind:   bg('messages'),
            filter: msg => msg.subscriptionlists.includes(this),
            fn:     list => list.size()
        } })
    .addAttribute({ name: 'trends',         type: REF(bg('Trends')), compute: subscriptionlist => subscriptionlist.trend() })
    ;

const subscriberlist = sbuilder.build();

const ctxbuilder = new BoundedContextBuilder();

ctxbuilder.use('broadcast.green.publisher.ctx')
    .addSchema(subscriberlist)
    .addDefaultCommands()
    .collection(bg('subscriptionlists'))
    .release('2019-12-23.1')
;

const ctx = ctxbuilder.build();
