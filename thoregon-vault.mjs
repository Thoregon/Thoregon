/**
 * This is the CLI for thoregon to manage this thoregon node
 *
 * @author: Bernhard Lukassen
 */

import yargs from "/yargs";
import { Gun }      from "/terra.gun";

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
        //.env("STAGE")
        .option('p', {
            alias: 'pair',
            description: 'generate keypair'
        })
        .epilog('for more information visit https://thoregon.io')
        .argv;

    const SEA = Gun.SEA;

    let p = argv.p;

    // console.log(argv);
    if (!!p) {
        let pair = await SEA.pair();

        console.log(JSON.stringify(pair, null, '\t'));
    }
};
