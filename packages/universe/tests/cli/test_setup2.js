#!/usr/bin/env node

/**
 *
 *
 * @author: blukassen
 */
const path = require('path');

var failure = 0;

//console.log(">> Test: Setup2");

const assert = require("assert");

const setup = require('../../src/setup');

// console.log("env: ", setup.env);

if ('PLAYGROUND' != setup.env.stage) {
    failure++;
    console.log("$$ Err: stage is '" + setup.env.stage + "' instead of 'PLAYGROUND'");
}
let dir = path.join(process.cwd(), "conf/");
if (dir != setup.env.basedir) {
    failure++;
    console.log("$$ Err: basedir is '" + setup.env.basedir + "' instead of '"+dir+"'");
}
if ('universe-playground.js' != setup.env.universe) {
    failure++;
    console.log("$$ Err: config is '" + setup.env.universe + "' instead of 'universe-playground.js'");
}

console.log(">> Test: Setup2", (failure ? failure + " failures" : "all tests passed"));

if (failure > 0) process.exit(1);