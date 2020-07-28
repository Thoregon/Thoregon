/**
 *
 *
 * @author: Bernhard Lukassen
 */

export default {
    app: 'Test'
};

const alice = async () => {
    universe.logger.info("Test Everblack Alice");

    await universe.Identity.auth('aliceA', 'aliceA1');

    let Channel = universe.everblack.Channel;

    let channel = await Channel
        .at('thatsme.channels.mytestchatgroup')
        .signon()
        .create();  // current user is admin

    await channel.invite('bobB');

    // channel.onMessage(console.log);               // show arriving messages including all previous
    // await channel.send("message 1");

    universe.logger.info("Test Everblack Alice END");
}

const bob = async () => {
    universe.logger.info("Test Everblack Bob");

    universe.Identity.auth('bobB', 'bobB1');

    let Channel = universe.everblack.Channel;
    let channel = await Channel.at('thatsme.channels.mytestchatgroup');
    await channel.join();    // user must be invited or admin
//   channel.onMessage(console.log);               // show arriving messages including all previous

//    await channel.send("message 2");

    universe.logger.info("Test Everblack Bob END");
}

(async () => {
    await alice();
    // await bob();
})();

