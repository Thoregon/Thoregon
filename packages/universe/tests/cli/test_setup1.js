#!/usr/bin/env node

/**
 *
 *
 * @author: blukassen
 */
const path = require('path');

var failure = 0;

// console.log(">> Test: Setup1");

const assert = require("assert");

const setup = require('../../src/setup');

// console.log("env: ", setup.env);

if ('DEV' != setup.env.stage) {
    failure++;
    console.log("$$ Err: stage is '" + setup.env.stage + "' instead of 'DEV'");
}
let dir = path.join(process.cwd(), "./");
if (dir != setup.env.basedir) {
    failure++;
    console.log("$$ Err: basedir is '" + setup.env.basedir + "' instead of '"+dir+"'");
}
if ('universe-dev.js' != setup.env.universe) {
    failure++;
    console.log("$$ Err: config is '" + setup.env.universe + "' instead of 'universe-dev.js'");
}

console.log(">> Test: Setup1", (failure ? failure + " failures" : "all tests passed"));

if (failure > 0) process.exit(1);