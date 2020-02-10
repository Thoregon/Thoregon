/**
 * do the basic setup of channel in thoregon
 *
 * @author: Bernhard Lukassen
 */

import BoundedContextBuilder from '/evolux.tru4D';
import SchemaBuilder, { ID, CHILD, REL, INT, REAL, BOOL, STRING, DATE, DATETIME, DURATION, IMAGE, LIST, MAP, SET } from '/evolux.schema';

const bg                = ref => `broadcast.green.${ref}`;    // shortcut and DRY

const ctx               = 'broadcast.green.publisher.app';
const entityName        = 'Message';
const entity            = bg(entityName);
const responsibility    = 'broadcast.green.publisher.app';

(async () => {
    const sbuilder = new SchemaBuilder();

    sbuilder.name(entityName)
        .ref(bg(entityName))
        .addAttribute({ name: 'content',        type: STRING })
        .addAttribute({ name: 'channel',        type: REL(bg('Channel')) })
        .addAttribute({ name: 'figures',        type: REL(bg('MessageFigures')) })
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
