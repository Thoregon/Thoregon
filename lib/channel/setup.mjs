/**
 * do the basic setup of channel in thoregon
 *
 * @author: Bernhard Lukassen
 */

import BoundedContextBuilder from '/thoregon.tru4D';
import SchemaBuilder, { ID, CHILD, REL, INT, REAL, BOOL, STRING, DATE, DATETIME, DURATION, IMAGE, LIST, MAP, SET } from '/evolux.schema';

const bg                = ref => `broadcast.green.${ref}`;    // shortcut and DRY

const ctx               = 'broadcast.green.publisher.app';
const entityName        = 'Channel';
const entity            = bg(entityName);
const responsibility    = 'broadcast.green.publisher.app';

(async () => {
    const sbuilder = new SchemaBuilder();

    sbuilder.name(entityName)
        .ref(bg(entityName))
        .addAttribute({ name: 'name',           type: STRING, index: true })
        .addAttribute({ name: 'description',    type: STRING })
        .addAttribute({ name: 'contacts',       type: LIST(REL(bg('Contact'))) })
        .addAttribute({ name: 'messenger',      type: MAP(REL(bg('Messenger'))) })
        .addAttribute({ name: 'thumbnail',      type: IMAGE })
        .addAttribute({ name: 'lastMessage',    type: DATETIME })
        .addAttribute({ name: 'messagesTotal',  type: INT, compute: {
                bind:   bg('messages'),
                fn() { return this.messages.size() }
            } })
        .addAttribute({ name: 'trends',         type: REL(bg('Trends')), compute: {
                fn() { return this.trend() }
            } })
    ;

    const channel = await sbuilder.build();

    const ctxbuilder = new BoundedContextBuilder();

    ctxbuilder.use(ctx)
        .addSchema(channel)
        .addDefaults()
        .collection(bg('channels'))
        .release('2020-01-09.1')
    ;

    const boundctx = await ctxbuilder.build();
    universe.logger.info(`Bounded Context: ${ctx} -> ${entityName}`);
})();

export default { ctx, entity };
