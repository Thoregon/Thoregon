/**
 * Just map components or parts to local directories/files
 * for development.
 *
 * Map URL path to local files or directories
 *
 * the entry 'www' maps to the static file content (docroot)
 *
 * other entries works like symlinks in the root directory: <link> -> <target>
 *
 * the default mapping for thoregon components @see ./lib/thoregoncomponents.mjs
 */

const thoregonroot   = '/private/var/dev/Projects/ThoregonUniverse';
const thatsmemodules = '/private/var/dev/Projects/b-coop/thatsme/thoregon/thatsme.modules';
const thatsmeapproot = '/private/var/dev/Projects/b-coop/thatsme/thoregon/thatsme.applications';
const thatsmewidget  = '/private/var/dev/Projects/b-coop/thatsme/thoregon/thatsme.widgets';
const thatsmehatch   = '/private/var/dev/Projects/b-coop/thatsme/thoregon/thatsme.widgethatch';

export default {
    // App Mappings
    'thatsme.app'                               : `${thatsmeapproot}`,
    'thatsme.chat'                              : `${thatsmeapproot}`,
    'thatsme.mywebsites'                        : `${thatsmeapproot}`,
    'thatsme-application-mywebsites'            : `${thatsmeapproot}`,
    'thatsme-application-broadcastgreen'        : `${thatsmeapproot}`,
    'thatsme-widget-comment-channel-only'       : `${thatsmeapproot}`,
    'thatsme-widget-register-ssi'               : `${thatsmewidget}`,
    'thatsme-hatch-comment-channel-only'        : `${thatsmehatch}`,
    'thatsme-widget-broadcastgreen-subscription': `${thatsmewidget}`,
    'thatsme-module-message-provider'           : `${thatsmemodules}`,
}
