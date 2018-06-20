/**
 * Test Builder
 *
 * @author: blukassen
 */

const Builder = require('../../../lib/ddd/builder');

class TestBuilder extends Builder {


    /**
     * create new instance
     * @param {Object} options - options for the eTrace
     * @return {Object} entity
     * @private
     */
    _newEntity(options) {
        return {};
    }

}

module.exports = TestBuilder;