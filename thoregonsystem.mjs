/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

import fs                    from 'fs';
import path                  from "/path";
import SEA                   from '/evolux.everblack/lib/crypto/sea.mjs'
import NodeLifecycleEmitter  from "/thoregon.neuland/modules/nodepeer/nodelifecycleemitter.mjs";

// import NeulandStorageAdapterBLOB   from "/thoregon.neuland/modules/nodepeer/fsneulandstorageadapter.mjs";
// import NeulandStorageAdapterSQLite from "/thoregon.neuland/modules/nodepeer/fssqliteasyncneulandstorageadapter.mjs";
// import NeulandStorageAdapterSQLite from "/thoregon.neuland/modules/nodepeer/fssqlitesyncneulandstorageadapter.mjs";
// import NeulandStorageAdapterFSFile from "/thoregon.neuland/modules/nodepeer/fsfileneulandstorageadapter.mjs";

import NeulandDB             from "/thoregon.neuland/src/storage/neulanddb.mjs";
import IdentityReflection    from '/thoregon.identity/lib/identityreflection.mjs';
import Dorifer               from '/thoregon.truCloud/lib/dorifer.mjs';
import WebserviceController  from '/evolux.web//lib/webservicecontroller.mjs';
import LogSink               from "/evolux.universe/lib/sovereign/logsink.mjs";
import SelfSovereignIdentity from "/thoregon.identity/lib/selfsovereignidentity.mjs"
import MetaClass             from "/thoregon.archetim/lib/metaclass/metaclass.mjs";
import process               from "process";
import sfs                   from "fs";

function existsSQLite({ location, name } = {}) {
    const directory    = path.resolve(process.cwd(), location);
    const neulandsqlitefile = `${directory}/${name ?? 'neuland'}.sqlite`;
    const olapsqlitefile = `${directory}/olap/upayme.sqlite`;
    const neulandSQLite = fs.existsSync(neulandsqlitefile);
    const olapSQLite = fs.existsSync(olapsqlitefile);

    return { neulandSQLite, olapSQLite };
}

const { neulandSQLite, olapSQLite } = existsSQLite(universe.NEULAND_STORAGE_OPT);
const NeulandStorageAdapter = !neulandSQLite
    ? (await import('/thoregon.neuland/modules/nodepeer/fsneulandstorageadapter.mjs')).default// NeulandStorageAdapterBLOB
    : (await import('/thoregon.neuland/modules/nodepeer/fssqliteasyncneulandstorageadapter.mjs')).default// NeulandStorageAdapterSQLite;

console.log("---");
console.log(">> Neuland DB: SQLite:", neulandSQLite, NeulandStorageAdapter.name);
console.log(">> OLAP DB: SQLite:", olapSQLite);
console.log("---");

//
// crypto, safety & security
//

console.log("** thoregon.system START");

universe.$everblack = SEA;
universe.$lifecycle = new NodeLifecycleEmitter();

//
// components
//

const neuland      = new NeulandDB();

/*
if (!neulandSQLite) {
    const NeulandSQLiteAdapter = (await import('/thoregon.neuland/modules/nodepeer/fssqliteasyncneulandstorageadapter.mjs')).default;
    neuland.requestMigration(NeulandSQLiteAdapter);
}
*/

// const neulandlocal = new NeulandDB();
const identity     = new IdentityReflection();
const dorifer      = new Dorifer();
const wsc          = new WebserviceController();

universe.neulandSQLite = neulandSQLite;
universe.olapSQLite    = olapSQLite;

//
// testing & logging
//
await LogSink.init();
universe.$logsink = LogSink;

neuland.init(NeulandStorageAdapter, universe.NEULAND_STORAGE_OPT);
const neulandDB = await neuland.start();
//neulandlocal.init(NeulandStorageAdapter, universe.NEULANDLOCAL_STORAGE_OPT);
// await neulandlocal.start();

if (!neulandDB) {
    console.error("********** neulandDB could not be established **********");
} else {
    await startup();
}

async function startup() {
    console.log("*** STARTUP()")
    await identity.start();
    await dorifer.start();
    await wsc.start();

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

        if (!neulandDB) {
            return;
        }

        console.log("** thoregon.system INIT");

        const SSI = universe.ssi;
        if (SSI) {
            console.log("** thoregon.system SSI:", SSI.alias);
            const confdir = universe.env.etcdir ?? './etc';
            const spec = (await import(`${confdir}/agent_0.config.mjs`)).default;
            console.log("** thoregon.system loaded agent 0 config:", SSI.alias);
            await universe.Identity.agentIdentity(SSI);
            console.log("** thoregon.system applied agent SSI:", SSI.alias);
            await universe.Agent.addServiceSpec(spec);
            console.log("** thoregon.system applied agent config:", SSI.alias);
        }

        //
        // awake agent when SSI is avialable
        //
        await agent.prepare();
        console.log("** thoregon.system DONE");
    }, 300);

//
// shutdown
//

    universe.atDusk(async (universe, code) => {
        universe.neuland?.stop();
        // universe.neulandlocal?.stop();
    })

}

console.log("** thoregon.system END");
