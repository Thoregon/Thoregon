import UpaymeNexusHome          from "/nexus-home/upaymenexushome.mjs";

import IdentityService          from "/thoregon.identity/lib/service/identityservice.mjs";
import PortalService            from "/upayme-service-portal/portalservice.mjs";
import ConfirmService           from "/upayme-service-portal/confirmservice.mjs";
import AffiliateService         from "/easypay-service/affiliates/affiliateservice.mjs";
import AffiliateStatistics      from "/easypay-service/affiliates/affiliatestatistics.mjs";
import AggregationService       from "/easypay-service/affiliates/aggregationservice.mjs";
import BroadcastEmailService    from "/easypay-service/broadcastservice/broadcastemailservice.mjs";

import ResourceService          from "/thoregon.truCloud/lib/resource/resourceservice.mjs";
import RemoteEntityService      from "/thoregon.truCloud/lib/remote/remoteentityservice.mjs";
import RemoteHomeService        from "/thoregon.truCloud/lib/remote/remotehomeservice.mjs";

import InspectionService        from "/thoregon.truCloud/lib/inspect/inspectionservice.mjs"

import { IDENTITY, PORTAL, AFFILIATES, STATISTICS, INSPECT, SETTINGS } from "./agent_sources.mjs";

export default {
    alias: "bltestaffiliateagent",

    app: {
        id      : 'upayme-application-nexus',
        instance: 'nexus',
        home    : UpaymeNexusHome,
        create  : true,
    },

    channels: {
        business         : {description: 'channel for all business events'},
        automation       : {description: 'channel for all automation events'},
        affiliatetracking: {description: 'channel for all affiliate events'},
        broadcastemail   : {description: 'broadcast events for email'},
        // technical
//        app         : { description: 'channel for all technical events' },
//        agentmain   : { description: 'channel for all technical events of this agent' },   // each agent has its own channel
        // test
        test         : { description: 'test channels' }
    },

    services: {

        //
        // remote services
        //

        remoteentity: {
            producer: RemoteEntityService,
            settings: {}
        },

        remotehome: {
            producer: RemoteHomeService,
            settings: {}
        },

        resource: {
            producer: ResourceService,
            settings: {}
        },

        //
        //
        //

        inspect: {
            source  : INSPECT,
            home    : UpaymeNexusHome,
            producer: InspectionService,
            settings: {}
        },

        identity: {
            source  : IDENTITY,
            home    : UpaymeNexusHome,
            producer: IdentityService,
            settings: { rest: true }
        },

        portal: {
            source  : PORTAL,
            home    : UpaymeNexusHome,
            producer: PortalService,
            settings: { rest: true }
        },

        confirm: {
            // source  : CONFIRM,
            home    : UpaymeNexusHome,
            producer: ConfirmService,
            settings: { rest: true }
        },

        affiliates: {
            source  : AFFILIATES,
            home    : UpaymeNexusHome,
            producer: AffiliateService,
            settings: { rest: true }
        },

        aggregation: {
            home    : UpaymeNexusHome,
            producer: AggregationService,
            settings: { rest: true }
        },

        statistics: {
            source  : STATISTICS,
            home    : UpaymeNexusHome,
            producer: AffiliateStatistics,
            settings: { rest: true }
        },
        broadcastemailservice: {
            home    : UpaymeNexusHome,
            producer: BroadcastEmailService,
            settings: {
            }
        },
    }
}