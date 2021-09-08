

/*
let names = ['a', 'b', 'c'];

let filters = names.toEnum();

console.log(JSON.stringify(filters));
*/


/*
import CollectionWindow from "/thoregon.archetim/lib/collections/collectionwindow.mjs";

const base =new Array(100);
for (let i = 0; i < 100; i++) base[i] = i;

// const window = me.galaxies.stuff.window();
const window = CollectionWindow.on(base);
let key = '';

window
    .size(5)
    .handler((evt) => {
        console.log(JSON.stringify(evt));
    })
    .start(key);

window.down();

window.down();

window.up();

window.up();*/



/************************************************************************************************************/

/*
import AccessObserver from "/evolux.universe/lib/accessobserver.mjs";

let x = AccessObserver.observe([1,2,3]);

x.addEventListener('change', (evt) => {
    console.log(JSON.stringify(evt));
})

x.push(4);
// result events
// {"prop":"3","newValue":4}                                x.push(4)
// {"prop":"length","oldValue":4,"newValue":4}              x.push(4)

x.unshift(0);
// result events
// {"prop":"4","newValue":4}
// {"prop":"3","oldValue":4,"newValue":3}
// {"prop":"2","oldValue":3,"newValue":2}
// {"prop":"1","oldValue":2,"newValue":1}
// {"prop":"0","oldValue":1,"newValue":0}
// {"prop":"length","oldValue":5,"newValue":5}

x[1] = 'A';
// result events
// {"prop":"1","oldValue":1,"newValue":"A"}

x.splice(2, 1, 'C', 'D');
// result events
// {"prop":"5","newValue":4}
// {"prop":"4","oldValue":4,"newValue":3}
// {"prop":"2","oldValue":2,"newValue":"C"}
// {"prop":"3","oldValue":3,"newValue":"D"}
// {"prop":"length","oldValue":6,"newValue":6}
*/

/************************************************************************************************************/

/**
 * Walks through all cases of entity persistence
 *
 * - one owner
 * - simple entity
 * - complex entity with a referenced entity
 * - collections of entities (auto generated keys)
 * - dictionaries of entities (provided keys)
 * - dictionaries (index) on collections (derived keys from entity properties)
 *
 * - permissions: multiple owners
 * - invite other
 * - accept permit
 * - same cases as above, modifications from alternating SSIs
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

// persitent data is stored in galaxies (imagine like a DB)
// You always have a personal view to the universe, you see a part of the universe
// the visible universe
/*

import ThoregonEntity from "/thoregon.archetim/lib/thoregonentity.mjs";

//
// Case: simple entity
// create a persistent simple entity
// use same permit to observe modifications
//

const simpleschema = {
    meta: {
        "version"    : "1.0.0",
        "description": "Simple entity schema for testing",
    },
    attributes: {
        name       : { type: 'string' },
        description: { type: 'string' },
        switch     : { type: 'boolean', transient: true },
        orders     : { type: 'query', source: '<reference to query or collection>' }
    }
};

const stuff = universe.galaxies.testapp.stuff;

// create the entity
const simple1 = await ThoregonEntity.create(simpleschema);
// make the entity persistent as 'simple1'
// await simple1.persist("simple1");
//
const permitsimple1 = simple1.permit;

// now get the entity and observe modifications
const simple2 = await ThoregonEntity.get("simple1", permitsimple1);
// listen to modifications
const s2events = [];
simple2.addEventListener('*', (evt) => s2events.push(evt) );

simple1.name        = "name1";
simple1.description = "description1";
*/





/*
//
// Case: entity with subentity
//

const complexschema = {
    meta: {
        "version"    : "1.0.0",
        "description": "Complex entity schema for testing",
        "persistence": "immediate"
    },
    attributes: {
        group: { type: 'string' },
        sub  : { schema: simpleschema },
    }
};

const complex1 = await ThoregonEntity.create("complex1", complexschema);
const permitcomplex1 = simple1.permit;

// now get the entity and observe modifications

const complex2 = await ThoregonEntity.get("complex1", permitcomplex1);

// listen to modifications


//
// Case: collection of entities
//


//
// Case: dictionary as index on a collection
//

//
// Case: entity with contracts
// contracts must be fulfilled as a prerequisite for the entity to be persisted
//
*/

/*

class CollectionWindow extends Array {

    async* [Symbol.asyncIterator]() {
        let i = 0;
        while (i < this.length) {
            yield this[i++];
        }
    }
}

const x = new CollectionWindow();

x.push(1);
x.push(2);
x.push(3);
x.push(4);
x.push(5);

for await (const elem of x) {
    console.log(elem);
}

 */
