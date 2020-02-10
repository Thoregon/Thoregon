/**
 * do the basic setup of channel in thoregon
 *
 * @author: Bernhard Lukassen
 */

import BoundedContextBuilder from '/evolux.tru4D';
import SchemaBuilder, { ID, CHILD, REL, INT, REAL, BOOL, STRING, DATE, DATETIME, DURATION, IMAGE, LIST, MAP, SET } from '/evolux.schema';

const bg                = ref => `broadcast.green.${ref}`;    // shortcut and DRY

const ctx               = 'broadcast.green.publisher.service';
const entityName        = 'MessageFigures';
const entity            = bg(entityName);
const responsibility    = 'broadcast.green.publisher.service';

(async () => {
    const sbuilder = new SchemaBuilder();

    sbuilder.name(entityName)
        .ref(bg(entityName))
        .addAttribute({ name: 'message',        type: REL(bg('Message')) })
        .addAttribute({ name: 'queued',         type: DATETIME })
        .addAttribute({ name: 'fulfilled',      type: DATETIME })
        .addAttribute({ name: 'sentTotal',      type: INT })
        .addAttribute({ name: 'sentMessengers', type:  MAP(INT, REL(bg('Messenger'))) })
    ;

    const channel = await sbuilder.build();

    const ctxbuilder = new BoundedContextBuilder();

    ctxbuilder.use(ctx)
        .addSchema(channel)
        .addDefaults(responsibility)
        .collection(bg('channels'))
        .release('2020-01-09.1')
    ;

    const boundctx = await ctxbuilder.build();
    universe.logger.info(`Bounded Context: ${ctx} -> ${entityName}`);
})();

export default { ctx, entity };
