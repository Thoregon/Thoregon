/**
 *
 *
 * @author: blukassen
 */

const setup = require("../lib/service/setup");
const config = require("../lib/service/config")(setup.env);

console.log(config);