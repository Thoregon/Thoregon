/**
 * Test the Builder
 *
 * @author: blukassen
 */
describe("DDD Fluent Builder", function () {
    const NotImplementedException = require('../../lib/exceptions/notimplementedexception');
    const InvalidProperyException = require('../../lib/exceptions/invalidpropertyexception');
    const InvalidStateException = require('../../lib/exceptions/invalidstateexception');

    const TestBuilder = require('./mocks/testbuilder');

    it("should not be initialized", function () {
        let builder = new TestBuilder();

        expect(function () { builder.build(); }).toThrowError(InvalidStateException);
        expect(function () { builder.entity; }).toThrowError(InvalidStateException);
        expect(function () { builder.modifications; }).toThrowError(InvalidStateException);
    });

    it("should build an object with one property", function () {
        let builder = new TestBuilder();

        builder
            .create()
            .set("a", 1)
            .build();

        let entity = builder.entity;

        expect(entity.a).toBe(1);
    });

    it("should have one add modification", function () {
        let builder = new TestBuilder();

        builder
            .create()
            .set("a", 1)
            .build();

        let mod = builder.modifications;

        expect(mod.create).toBe(true);
        expect(mod.modifications.length).toBe(1);
        expect(mod.modifications[0]).toEqual({property: 'a', newval: 1, action: "add"});
    });

    it("should have no removal", function () {
        let builder = new TestBuilder();

        builder
            .create()
            .remove("a")
            .build();

        let mod = builder.modifications;

        expect(mod.create).toBe(true);
        expect(mod.modifications.length).toBe(0);
    });

    it("should have one replace modification", function () {
        let builder = new TestBuilder();

        builder
            .use({ a: 0 })
            .set("a", 1)
            .build();

        let mod = builder.modifications;

        expect(mod.create).toBe(false);
        expect(mod.modifications.length).toBe(1);
        expect(mod.modifications[0]).toEqual({property: 'a', oldval: 0, newval: 1, action: 'change'});
    });

    it("should have one removal", function () {
        let builder = new TestBuilder();

        builder
            .use({ a: 0, b: 1 })
            .remove("a")
            .build();

        let mod = builder.modifications;

        expect(mod.create).toBe(false);
        expect(mod.modifications.length).toBe(1);
        expect(mod.modifications[0]).toEqual({property: 'a', oldval: 0, action: "remove"});
    });

/*
    it("", function () {

    });
*/

});
 