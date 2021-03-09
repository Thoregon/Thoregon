/**
 *
 *
 * @author: blukassen
 */

import { browserloader } from '/evolux.universe';
import fs                from '/fs';

// don't change this settings unless you have a really good reason
export const DEBUG = false;
export const GUNDEBUG = false;


const greenlock = {
    // where to find .greenlockrc and set default paths
    packageRoot: process.cwd(),

    // where config and certificate stuff go
    configDir: "./greenlock.d",

    // contact for security and critical bug notices
    maintainerEmail: "bl@bernhard-lukassen.com",

    // name & version for ACME client user agent
    //packageAgent: pkg.name + "/" + pkg.version,

    // whether or not to run at cloudscale
    cluster: false
};

/*
 * publish HTTP interface
 */
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    // port: 80,            --> will server on 443 for secure communication and on 80 for redirects; cannot be changes, its for production
    greenlock: greenlock,
    cachecontrol: 'public, max-age=18000'     // fresh in seconds = 5 hours
});

/*
 * serve as gun peer
 */
/*
const peerport = 8765;

;(function(){
    var cluster = require('cluster');
    if(cluster.isMaster){
        return cluster.fork() && cluster.on('exit', function(){ cluster.fork() });
    }

    var config = { port: peerport };
    var Gun = require('../'); // require('gun')

    if(process.env.HTTPS_KEY){
        config.key = fs.readFileSync(process.env.HTTPS_KEY);
        config.cert = fs.readFileSync(process.env.HTTPS_CERT);
        config.server = require('https').createServer(config, Gun.serve(__dirname));
    } else {
        config.server = require('http').createServer(Gun.serve(__dirname));
    }

    var gun = Gun({web: config.server.listen(config.port)});
    console.log('Relay peer started on port ' + config.port + ' with /gun');

    module.exports = gun;
}());
*/

