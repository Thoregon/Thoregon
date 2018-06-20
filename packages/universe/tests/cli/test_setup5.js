#!/usr/bin/env node

/**
 *
 *
 * @author: blukassen
 */

var failure = 0;

//console.log(">> Test: Setup2");

const assert = require("assert");

const setup = require('../../src/setup');

console.log(">> Test: Setup5", (failure ? failure + " failures" : "all tests passed"));
