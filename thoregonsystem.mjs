/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */
import path                  from "/path";
import SEA                   from '/evolux.everblack/lib/crypto/sea.mjs'
import NodeLifecycleEmitter  from "/thoregon.neuland/modules/nodepeer/nodelifecycleemitter.mjs";
import NeulandStorageAdapter from "/thoregon.neuland/modules/nodepeer/fsneulandstorageadapter.mjs";
import NeulandDB             from "/thoregon.neuland/src/storage/neulanddb.mjs";
import IdentityReflection    from '/thoregon.identity/lib/identityreflection.mjs';
import Dorifer               from '/thoregon.truCloud/lib/dorifer.mjs';
import WebserviceController  from '/evolux.web//lib/webservicecontroller.mjs';
import LogSink               from "/evolux.universe/lib/sovereign/logsink.mjs";
import SelfSovereignIdentity from "/thoregon.identity/lib/selfsovereignidentity.mjs"
import MetaClass             from "/thoregon.archetim/lib/metaclass/metaclass.mjs";

//
// crypto, safety & security
//

universe.$everblack = SEA;
universe.$lifecycle = new NodeLifecycleEmitter();

//
// components
//

const neuland      = new NeulandDB();
// const neulandlocal = new NeulandDB();
const identity     = new IdentityReflection();
const dorifer      = new Dorifer();
const wsc          = new WebserviceController();

neuland.init(NeulandStorageAdapter, universe.NEULAND_STORAGE_OPT);
await neuland.start();
//neulandlocal.init(NeulandStorageAdapter, universe.NEULANDLOCAL_STORAGE_OPT);
// await neulandlocal.start();

await identity.start();
await dorifer.start();
await wsc.start();


//
// testing & logging
//
await LogSink.init();
universe.$logsink = LogSink;

universe.neulandFrom = async (location, name) => {
    const neuland = new NeulandDB();
    neuland.init(NeulandStorageAdapter, { ...universe.NEULAND_STORAGE_OPT, location, name });
    await neuland.start();
    return neuland;
}

setTimeout(async () => {
    //
    // check SSI for agent
    //

    const SSI = universe.ssi;
    if (SSI) {
        const confdir = universe.env.etcdir ?? './etc';
        const spec = (await import(`${confdir}/agent_0.config.mjs`)).default;
        await universe.Identity.agentIdentity(SSI);
        await universe.Agent.addServiceSpec(spec);
    }

    //
    // awake agent when SSI is avialable
    //
    await agent.prepare();
}, 300);

//
// shutdown
//

universe.atDusk(async (universe, code) => {})
