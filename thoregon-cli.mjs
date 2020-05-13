/**
 * This is the CLI for thoregon to manage this thoregon node
 *
 * @author: Bernhard Lukassen
 */

import yargs        from "/yargs";
import { Gun }      from "/terra.gun";

// const Gun = globalThis.Gun;

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
        .option('r', {
            // alias: 'pair',
            description: 'generate responisibility id'
        })
        .option('dc', {
            // alias: 'pair',
            description: 'drop bounded context with id'
        })
        .option('lc', {
            // alias: 'pair',
            description: 'list bounded contexts for name'
        })
        .epilog('for more information visit https://thoregon.io')
        .argv;

    // console.log(argv);

    let r = argv.r;
    let dc = argv.dc;

    if (r) {
        let key = Gun.text.random();
        console.log(r === true ? key : `{\n\t'${r}' : '${key}'\n}`);
    }

    // drop bounded context
    if (dc) {

    }
};
