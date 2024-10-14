
//****************************************************************//
// Restfull Helloworld Producer                                   //
//****************************************************************//

// import { HelloWorld, UniverseNow } from "/easypay-service/web/helloworldan.mjs";
import path                  from "path";
import NeulandStorageAdapter from "/thoregon.neuland/modules/nodepeer/fsneulandstorageadapter.mjs";
import NeulandDB             from "/thoregon.neuland/src/storage/neulanddb.mjs";
import Channel               from "/thoregon.archetim/lib/localmq/channel.mjs";
import Directory             from "/thoregon.archetim/lib/directory.mjs";
import UpaymeNexusHome       from "/nexus-home/upaymenexushome.mjs";
import AggregationService    from "/easypay-service/affiliates/aggregationservice.mjs";

//import UpaymeExtended        from "/easypay-home/upaymeextended.mjs";



/*
async function getPreviousAffiliateChannel() {
    const NEULANDLOCAL_STORAGE_OPT = { location: 'srv4_data/nexus', name: 'neulandlocal' };    // 'neulandlocal_2024-06-03_172722_24'
// const NEULANDLOCAL_STORAGE_OPT = { location: 'srv4_data/data/erika', name: 'neulandlocal_20240604' };
    const neulandlocal = new NeulandDB();

    neulandlocal.init(NeulandStorageAdapter, NEULANDLOCAL_STORAGE_OPT);
    await neulandlocal.start();
    const keys = [...neulandlocal.storage.db.keys()];
    const raw = neulandlocal.storage.db.get('ADkfBGVtksUVZ2ak8EhOjHxswlG8oJFt.channels.affiliatetracking');
    const affchannel_old = universe.util.txdeserialize(raw, { skipThoregon: true }).obj;
    return affchannel_old;
}

async function makeOldChannel(oldchannel) {
    const dir = path.resolve('srv4_data/nexus/channels');
    const channel = Channel.from({ ...oldchannel, name: 'affiliatetracking_old' }, dir);
    await channel.store();
    return channel;
}

function reaggregateAffiliates(affchannel_old, affchannel_new) {
    const appinstance = { root: Directory.create() };
    const home = new UpaymeNexusHome(appinstance);

    const aggSrv = new AggregationService();
    aggSrv.attach(null, null, home);
    affchannel_old.entries.forEach(entry => {
        aggSrv.buildAggregation(entry);
    });
    affchannel_new.entries.forEach(entry => {
        aggSrv.buildAggregation(entry);
    });
    return home.getAggregationAffiliates();
}

async function getAffiliateChannel() {
    const dir = path.resolve('srv4_data/nexus/channels');
    const affchannel = await Channel.load('affiliatetracking', dir);
    return affchannel;
}

async function getOldAffiliateChannel() {
    const dir = path.resolve('srv4_data/nexus/channels');
    const affchannel = await Channel.load('affiliatetracking_old', dir);
    return affchannel;
}


try {
    const s1 = Date.now();
    // let channel = await getPreviousAffiliateChannel();
    // channel = await makeOldChannel(channel);
    let affold = await getOldAffiliateChannel();
    let affnew = await getAffiliateChannel();
    console.log('Time read channels', Date.now() - s1);
    const s2 = Date.now();
    const agg = reaggregateAffiliates(affold, affnew);
    console.log('Time aggregate', Date.now() - s2);
    debugger;
} catch (e) {
    debugger;
    console.error(e);
}
*/


/*
import fs   from "fs/promises";
import path from "path";

try {
    // const filepath = path.resolve('./srv4_data/data/nexus/neulandlocal_2024-06-03_172722_24.tdb');
    const filepath = path.resolve('./srv4_data/nexus/neulandlocal.tdb');
    const bin      = await fs.readFile(filepath, /!*{ encoding: 'utf8' }*!/);
    debugger;
} catch (e) {
    console.error(e);
}
*/
