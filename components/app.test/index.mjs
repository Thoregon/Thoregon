/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { doAsync, timeout }                  from '/evolux.universe';

export default {
    app: 'Test'
};

const rootlocation = 'KvjpVDvE4jVuKSlV2JxCxyUP7';
const mychannel    = 'mytestchatgroup';
const location     = `${rootlocation}.${mychannel}`;

const alice = async () => {
    universe.logger.info("Test Everblack Alice");

    await universe.Identity.auth('aliceA', 'aliceA1');

    let Channel = universe.everblack.Channel;

    let channel = await Channel
        .at(location)
        .createIfMissing();  // current user is admin
    universe.mychannel = channel;

    await channel.invite('bobB');
    await channel.grantWrite('bobB');

    channel.onMessage((msg) => console.log('alice>', msg));               // show arriving messages including all previous
    await channel.send("message 1 from aliceA");

    universe.logger.info("Test Everblack Alice END");
}

const bob = async () => {
    universe.logger.info("Test Everblack Bob");

    await universe.Identity.auth('bobB', 'bobB1');

    let Channel = universe.everblack.Channel;
    let channel = await Channel
        .at(location)
        .join();
    channel.onMessage((msg) => console.log('bob>', msg));               // show arriving messages including all previous

    await channel.send("message 2 from bobB");

    // await universe.identity.leave();
    universe.logger.info("Test Everblack Bob END");
}

(async () => {
    /*
        await alice();
        await timeout(500);
        await universe.identity.leave();
    */
    await bob();
})();

