/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { doAsync, timeout }                  from '/evolux.universe';

export default {
    app: 'Test'
};

const T = universe.T;     // meta data property name


const rootlocation = 'KvjpVDvE4jVuKSlV2JxCxyUP7';
const mychannel    = 'mytestchatgroup';
const clocation    = `${rootlocation}.${mychannel}`;


const wpall = 'KvjpVDvE4jVuKSlV2JxCxyUP7.topics.123';

const qrootlocation = 'KvjpVDvE4jVuKSlV2JxCxyUQ10';
const myqueue       = 'queue';
const qlocation     = `${qrootlocation}.${myqueue}`;
const pqlocation    = `${T}${qrootlocation}.${T}${myqueue}`;

const servicepair = {
    pub  : "tbf4_XSzaAcYqqN_DTwQh-TWKdKHpg4O1V8fQa-P-z8.2tiwh3UaUpxDgXqNBt_7adeZDndfh1aor-sdAxrQkgA",
    priv : "wCfVo8E3ehSsyqSnpQn_pL-oHmfwPeNxuezvxuzdFQM",
    epub : "M8b8e_6rq3-zPur0Juc-PiOCWSIItKy37WGqX67CDH4.BW3rYwDgEU8I_R9J2LaE2k2iUVMaQZAXCH_AD6rT-e0",
    epriv: "ZkL7GfESU2dDnG4Dzk5Vv4d9WoCp3N5anH6vysocWoQ"
};
const clientpair  = {
    pub  : "fak0L-STC5ZqRfbG1DDSIwV1L4vKil2qfzqZO2FvAJ0.vkVdgh56H5mVdvsc5RnB_Ev1QtCLKWUmwOm_aVIqm78",
    priv : "9UjHqyhMIuvyjKSSa16bqcpyxuUayV8ccLUev2oJ_uA",
    epub : "7s8xc1QqAAkrYJL6mMhwLnLA8ambhRhcgewJgsDIOJI.5j0DH4elS0IbgmmVkM9IvB_LUpCjn43BIZG21gfUBD4",
    epriv: "NwEANRzlBSywtX8ySWJw84CtrQWIT0q8AjG7cSlS1Ik"
};

const secretobjectlocation ='8SCk0k5QdwB8pyHtBBGaTsD9';

const kvalice = async () => {
    universe.logger.info("Test Everblack KV Alice");

    await universe.Identity.auth('aliceA', 'aliceA1');
    let SecretObject = universe.everblack.SecretObject;

    let so = await SecretObject
        .at(secretobjectlocation)
        .createIfMissing();

    await so.invite('bobB');
    await so.grantWrite('bobB');

    so.onChange((item, key) => {
        let value = item ? item.toString() : 'null';
        universe.logger.info(`KV '${key}' => ${value}`);
/*
        so.forEachEntry(({ item, key }) => {
            universe.logger.info(`KV forEachEntry '${key}' => ${value}`);
        });
*/
    });

    so.on('b', (item) => {
        let value = item ? JSON.stringify(item) : 'null';
        universe.logger.info(`KV Listener for Key 'b' => ${value}`);
    })

    universe.logger.info("Test Everblack KV Alice END");
}

const kvbob = async () => {
    universe.logger.info("Test Everblack KV Bob");

    await universe.Identity.auth('bobB', 'bobB1');

    let SecretObject = universe.everblack.SecretObject;

    let so = await SecretObject
        .at(secretobjectlocation)
        .join();

    // await so.put('a', 'A2');
    // await timeout(1000);
    await so.put('b', { b: 'B3', c: { d: 'D3' } });
    await timeout(1000);
    let obj = await so.get('b');
    universe.logger.info(`Got 'b' -> ${JSON.stringify(obj)}`);

    let { so2 : secretObject } = await so.addSecretObject('so');
    await so2.invite('aliceA');
    await so2.grantWrite('aliceA');

    await so2.put('b2', 'B2');
    await timeout(200);
    let so3 = await so.get('so')
    let prop = await so3.get('b2');
    universe.logger.info("so3['b2'] ->", prop);

    universe.logger.info("Test Everblack KV Bob END");
}

const service = async () => {
    universe.logger.info("Test Everblack Service");

    let Queue = universe.everblack.Queue;

    let queue = await Queue
        .at(qlocation)
        .signon(servicepair)    // owner of servicepair is admin
        .createIfMissing();

    queue.handle((request, response) => {
        universe.logger.info('Queue Request', request);
        response.payload = request.payload;
        response.payload.s = "S";
        response.send();
    })

    universe.logger.info("Test Everblack Service END");
}

const client = async () => {
    universe.logger.info("Test Everblack Client");
    let i = 1;

    let Queue = universe.everblack.Queue;

    let queue = await Queue.at(qlocation);

    try {
        let response = await queue.request({ test: 'Test' });
        universe.logger.info('Queue Response', response);
    } catch (e) {
        universe.logger.error('Queue Response Error', e);
    }

    universe.logger.info("Test Everblack Client END");
}


const privservice = async () => {
    universe.logger.info("Test Everblack Service");
    let Queue = universe.everblack.Queue;

    let queue = await Queue
        .at(pqlocation)
        .signon(servicepair)    // owner of servicepair is admin
        .createIfMissing();

    // await queue.invite({ pub: clientpair.pub, epub: clientpair.epub });

    queue.handle((request, response) => {
        universe.logger.info('Private Queue Request', request);
        response.payload = request.payload;
        response.payload.s = "PS";
        response.send();
    })

    universe.logger.info("Test Everblack Service END");
}

const privclient = async () => {
    universe.logger.info("Test Everblack Client");
    let Queue = universe.everblack.Queue;

    let queue = await Queue
        .at(pqlocation)
        .join(clientpair);

    let response = await queue.request({ test: 'Test' });
    universe.logger.info('Private Queue Response', response);

    universe.logger.info("Test Everblack Client END");
}

const alice = async () => {
    universe.logger.info("Test Everblack Alice");

    await universe.Identity.auth('aliceA', 'aliceA1');

    let Channel = universe.everblack.Channel;

    let channel = await Channel
        .at(clocation)
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
        .at(clocation)
        .join();
    channel.onMessage((msg) => console.log('bob>', msg));               // show arriving messages including all previous

    await channel.send("message 3 from bobB");

    // await universe.identity.leave();
    universe.logger.info("Test Everblack Bob END");
}

(async () => {
/*
    await alice();
    await timeout(500);
    await universe.identity.leave();
    await bob();
*/

/*
    await service();
    await timeout(300);
    await client();
*/

/*
    await privservice();
    await timeout(300);
    await privclient();
*/

/*
    await kvalice();
    await timeout(300);
    await kvbob();
*/

})();

