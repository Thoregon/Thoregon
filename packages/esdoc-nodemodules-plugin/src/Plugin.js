const path = require('path');
const fs = require('fs');
// hack: using a internal code of esdoc.
// const ASTNodeContainer = require('esdoc/out/src/Util/ASTNodeContainer.js').default;

/**
 * Lint Output Builder class.
 */
class Plugin {

    onHandleCode (ev) {
      ev.data.code = ev.data.code
        .replace(/module\.exports = /g, 'export default ')
        .replace(/exports = /g, 'export default ');
    }
    
}

module.exports = new Plugin();
