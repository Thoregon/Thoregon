/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { doAsync, timeout }                  from '/evolux.universe';

export default {
    app: 'Test'
};

const rootlocation = 'KVqUQIjHRjdWhTzXbys0tpWJ';
const mychannel    = 'channels.mytestchatgroup';
const location     = `${rootlocation}.${mychannel}`;

const mytestqueue = async () => {
    universe.logger.info("Show test chat group");

    await universe.Identity.auth('aliceA', 'aliceA1');

    let Queue = universe.everblack.Queue;
    let queue = await Queue
        .at(qlocation)
        .createIfMissing();


}

const mytestchatgroup = async () => {
    universe.logger.info("Show test chat group");

    await universe.Identity.auth('aliceA', 'aliceA1');

    let Channel = universe.everblack.Channel;
    let channel = await Channel
        .at(location)
        .join();
    channel.onMessage((msg) => console.log('mytestchatgroup>', `${msg.alias} (${msg.dttm}) : ${msg.message}`));               // show arriving messages including all previous

}

(async () => {
    // await mytestchatgroup();
})();

