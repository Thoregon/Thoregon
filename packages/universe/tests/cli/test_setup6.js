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

if (!setup.env.vars) {
    failure++;
    console.log("$$ Err: no variables defined");
} else {
    if (setup.env.vars.a != 'x' || setup.env.vars.b != 'y') {
        failure++;
        console.log("$$ Err: variables has wrong values");
    }
}

console.log(">> Test: Setup6", (failure ? failure + " failures" : "all tests passed"));

if (failure > 0) process.exit(1);