import UpaymeNexusHome          from "/nexus-home/upaymenexushome.mjs";

import IdentityService          from "/thoregon.identity/lib/service/identityservice.mjs";
import PortalService            from "/upayme-service-portal/portalservice.mjs";
import ConfirmService           from "/upayme-service-portal/confirmservice.mjs";
import AffiliateService         from "/easypay-service/affiliates/affiliateservice.mjs";
import AffiliateStatistics      from "/easypay-service/affiliates/affiliatestatistics.mjs";


import { IDENTITY, PORTAL, ACTIVITES, STATISTICS,SETTINGS } from "./agent_sources.mjs";

export default {
    alias: "bltestaffiliateagent",

    app: {
        id      : 'upayme-application-nexus',
        instance: 'BLDEV5',
        home    : UpaymeNexusHome,
        create  : true,
    },

    channels: {
        business      : { description: 'channel for all business events' },
        automation    : { description: 'channel for all automation events' },
        broadcastemail: { description: 'broadcast events for email' },
        // technical
//        app         : { description: 'channel for all technical events' },
//        agentmain   : { description: 'channel for all technical events of this agent' },   // each agent has its own channel
        // test
        test         : { description: 'test channels' }
    },

    services: {

        identity: {
            source  : IDENTITY,
            home    : UpaymeNexusHome,
            producer: IdentityService,
            settings: {}
        },

        portal: {
            source  : PORTAL,
            home    : UpaymeNexusHome,
            producer: PortalService,
            settings: {}
        },

        confirm: {
            // source  : CONFIRM,
            home    : UpaymeNexusHome,
            producer: ConfirmService,
            settings: {}
        },

        activities: {
            source  : ACTIVITES,
            home    : UpaymeNexusHome,
            producer: AffiliateService,
            settings: {}
        },

        statistics: {
            source  : STATISTICS,
            home    : UpaymeNexusHome,
            producer: AffiliateStatistics,
            settings: {}
        },

    }
}