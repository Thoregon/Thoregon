/**
 * This is the CLI for thoregon to manage this thoregon node
 *
 * @author: Bernhard Lukassen
 */

import yargs                        from "/yargs";
// import { Gun }      from "/terra.gun";
import { Vault, VaultFileStore }    from "/evolux.everblack";

export default async () => {
    let argv = yargs
        .usage('Usage: $0 [options]')
        .help('help')
        .version('v', 'display version information', '1.0')
        .alias('v', 'version')
        .option('h', {
            alias: 'help',
            description: 'display help message'
        })
        .option('p', {
            alias: 'pair',
            description: 'generate keypair'
        })
        .option('g', {
            alias: 'get',
            description: 'get keypair'
        })
        .option('l', {
            alias: 'list',
            description: 'list secrets'
        })
        .epilog('for more information visit https://thoregon.io')
        .argv;

    let key = argv._ ? argv._[0] : undefined;
    let filename = argv._ ? argv._[1] : undefined;
    let p = argv.p;
    let l = argv.l;
    let g = argv.g;
    let s = argv.s;

    // console.log(argv);
    if (!!s) {
        let file    = new VaultFileStore(filename);
        let vault  = new Vault();

        vault.useStore(file);
        await vault.unlock(key);

        await vault.createSecret(s);

        await vault.save();
        await vault.seal();
    }

    if (!!p) {
        let file    = new VaultFileStore(filename);
        let vault  = new Vault();

        vault.useStore(file);
        await vault.unlock(key);

        await vault.createPair(p);

        await vault.save();
        await vault.seal();
    }

    if (l)  {
        let file    = new VaultFileStore(filename);
        let vault  = new Vault();

        vault.useStore(file);
        await vault.unlock(key);

        let entries = await vault.list();
        console.log('Vault:', entries);

        vault.seal();
    }

    if (g)  {
        let file    = new VaultFileStore(filename);
        let vault  = new Vault();

        vault.useStore(file);
        await vault.unlock(key);

        let pair = await vault.get(g);
        console.log('Pair:', pair);

        vault.seal();
    }
};
