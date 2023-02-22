/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

import SEA                   from '/evolux.everblack/lib/crypto/sea.mjs'
import GunService            from '/terra.gun/lib/gunservice.mjs';
import NodeLifecycleEmitter  from "/thoregon.neuland/modules/nodepeer/nodelifecycleemitter.mjs";
import { Automerge, Peer }   from "/thoregon.neuland/modules/nodepeer/index.mjs";
import NeulandStorageAdapter from "/thoregon.neuland/modules/nodepeer/fsneulandstorageadapter.mjs";
import NeulandDB             from "/thoregon.neuland/src/storage/neulanddb.mjs";
import P2PNetworkPolicy      from "/thoregon.neuland/src/p2p/p2pnetworkpolicy.mjs";
import PeerJSNetworkAdapter  from "/thoregon.neuland/src/p2p/peerjsnetworkadapter.mjs";
import SyncManager           from "/thoregon.neuland/src/sync/syncmanager.mjs";
import MQ                    from "/thoregon.neuland/src/mq/mq.mjs";
import IdentityReflection    from '/thoregon.identity/lib/identityreflection.mjs';
import Dorifer               from '/thoregon.truCloud/lib/dorifer.mjs';
import WebserviceController  from '/evolux.web//lib/webservicecontroller.mjs';

//
// crypto, safety & security
//

universe.$everblack = SEA;
universe.$lifecycle = new NodeLifecycleEmitter();

//
// network policies & adapters,
//

universe.$Peer      = Peer;
universe.$netconfig = {
    peerid: 'ynGhbGJjEh3BCNH1mSBTykj89a7PXNzO',
        policies: [P2PNetworkPolicy],
        p2p: { adapters: [PeerJSNetworkAdapter] }
};


const netopt = {};
universe.$net = universe.netconfig.policies.map((Policy) =>  new Policy(netopt));

//
// crdt
//

universe.$Automerge = Automerge;
universe.$syncmgr   = SyncManager.setup();
universe.$mq        = MQ.setup();

//
// components
//

const neuland    = new NeulandDB();
const gunservice = new GunService();
const identity   = new IdentityReflection();
const dorifer    = new Dorifer();
const wsc        = new WebserviceController();

neuland.init(NeulandStorageAdapter, universe.NEULAND_STORAGE_OPT);
await neuland.start();
await gunservice.start();
await identity.start();
await dorifer.start();
await wsc.start();
if (universe.DEV?.ssi) {
    const SSI = universe.DEV?.ssi;
    const spec = (await import("./agent_0.config.mjs")).default;
    await universe.Identity.useIdentity(SSI);
    await universe.Agent.addServiceSpec(spec);
}

//
// information functions
//

universe.$p2ppolicy = () => universe.net[0];
universe.$p2padapter = () => universe.p2ppolicy().net[0];

//
// awake agent when SSI is avialable
//
await agent.prepare();

// don't need a double lifecycle handling
// universe.lifecycle.addEventListener('prepare', () => {
//     neuland.init(NeulandStorageAdapter, universe.NEULAND_STORAGE_OPT);
// });
//
// universe.lifecycle.addEventListener('start', async () => {
//     neuland.start();
//     await gunservice.start();
//     await identity.start();
//     await dorifer.start();
//     await wsc.start();
//     if (universe.DEV?.ssi) {
//         const SSI = universe.DEV?.ssi;
//         const spec = (await import("./agent_0.config.mjs")).default;
//         await universe.Identity.useIdentity(SSI);
//         await universe.Agent.addServiceSpec(spec);
//     }
//
// // awake agent when SSI is avialable
//     await agent.prepare();
// });
