/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */

// all exports from lib/ will be collected
var lib = {};
module.exports = lib;

/* export universe */
const universe = require('./packages/universe');
lib.letThereBeLight = universe.letThereBeLight;

/* export ddd */
