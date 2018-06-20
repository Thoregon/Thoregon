/**
 *
 *
 * @author: blukassen
 */
describe("Initialize Config", function () {
    const letThereBeLight = require("../../lib/letThereBeLight");
    let universe;

    beforeAll(async function () {
        universe = await letThereBeLight();
    });

    const path = require('path');

    it("stage should be DEV", function () {
        expect(universe.stage).toBe("DEV");
    });

    it("should be A", function () {
        expect(universe.shouldBeA).toBe("A");
    });

    it("should be B", function () {
        expect(universe.shouldBeB).toBe("B");
    });

    it("universeFile should be 'universe-def.js'", function () {
        let filename = path.basename(universe.universeFile);
        expect(filename).toBe('universe-dev.js');
    });

    it("'logger' should be defined", () => {
        expect(universe.logger).toBeDefined();
    });

    it("'missing' should be undefined", () => {
        expect(universe.missing).toBeUndefined();
    });
})
