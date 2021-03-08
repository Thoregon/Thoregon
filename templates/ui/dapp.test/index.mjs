/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { doAsync, timeout }                  from '/evolux.universe';

export default {
    app: 'Test'
};

const rootlocation = 'GEuctGZLKE2V4mypzmcfuUGq';
const mychannel    = 'queues.testqueue';
const location     = `${rootlocation}.${mychannel}`;

const testa = async () => {
    universe.logger.info("Show test chat group");

    let pair = universe.Everblack.pair();

    let Queue = universe.everblack.Queue;
    let queue = await Queue
        .at(qlocation)
        .signon(pair)       // identity of keypair
        .createIfMissing();

    queue.onRequest((request) => {
        universe.logger.info(request);
        request.respond({ b: 'B' })
    })
}

const testb = async () => {
    let Queue = universe.everblack.Queue;
    let queue = await Queue.at(qlocation);

    queue
        .request({ a: 'A' })
        .onResponse((response) => {
            universe.logger.info(response);
        });
}

(async () => {
    //await testa();
    //await timeout(300);
    //await testb();
})();

