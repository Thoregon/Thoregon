/**
 * Collect all exports from lib/
 *
 * @author: blukassen
 */

const fs = require('fs');
const path = require('path');

// all exports from lib/ will be collected
var lib = {};
module.exports = lib;


let libpath = path.join(__dirname, 'lib');

function crawl(lib, crawlpath, ns) {
    if (!ns) ns = ""; // init namespace
    fs.readdirSync(crawlpath).forEach(file => {
        let filepath = path.join(crawlpath, file);
        let stats = fs.statSync(filepath);

        if (stats.isFile() && file.match(/.*\.js$/)) {
            let ns = file.substring(0,file.length-3);
            let imports = require(filepath);
            if (!!imports) {
                if (typeof imports === "object") {
                    lib[ns] = {};
                    Object.assign(lib[ns], imports);
                } else {
                    lib[ns] = imports;
                }
            }
        } else if (stats.isDirectory()) {
            let sublib = lib[file] = {};
            crawl(sublib, filepath, ns);
        }
    });
}

crawl(lib, libpath);

// console.log(lib);

