import UpaymeNexusHome          from "/nexus-home/upaymenexushome.mjs";

import IdentityService          from "/thoregon.identity/lib/service/identityservice.mjs";
import PortalService            from "/upayme-service-portal/portalservice.mjs";
import ConfirmService           from "/upayme-service-portal/confirmservice.mjs";
import AffiliateService         from "/easypay-service/affiliates/affiliateservice.mjs";
import AffiliateStatistics      from "/easypay-service/affiliates/affiliatestatistics.mjs";
import AggregationService       from "/easypay-service/affiliates/aggregationservice.mjs";
import BroadcastEmailService    from "/easypay-service/broadcastservice/broadcastemailservice.mjs";
import UpaymeService            from "/upayme-service-portal/upaymeservice.mjs";

import ResourceService          from "/thoregon.truCloud/lib/resource/resourceservice.mjs";
import RemoteEntityService      from "/thoregon.truCloud/lib/remote/remoteentityservice.mjs";
import RemoteHomeService        from "/thoregon.truCloud/lib/remote/remotehomeservice.mjs";

import InspectionService        from "/thoregon.truCloud/lib/inspect/inspectionservice.mjs"

import { IDENTITY, PORTAL, AFFILIATES, STATISTICS, INSPECT, SETTINGS } from "./agent_sources.mjs";

import OLAPService from "/thoregon.neuland/src/olap/olapservice.mjs";

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
        upayme: {
            home    : UpaymeNexusHome,
            producer: UpaymeService,
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


        /**
         *      id
         *      txdate
         *      vendor
         *      product
         *      affiliate
         *      campaignkey
         *
         *      promoClicks
         *      uniqueCustomers
         *      supersededCustomers
         *      reengagedCustomers
         *
         *      subscribedCustomers
         *
         *      visitsCheckoutPage
         *      currency
         *      quantity
         *      amount
         *
         *      returnQuantity
         *      returnAmount
         *
         *      visitorId  // Fingerprint
         *      email      // HASH
         */




        /**
         *      TODO: BL: what about it?
         *      Model Produkte / Marktplatz die beworben werden : Sie werden von Seller gepushed?
         *      Model PII + Devices extra
         *      Model Sales in an extra table?
         *          need bo be triggered from the individual sellers!
         */


        olap: {
            producer: OLAPService,
            settings: {
                db       : 'upayme',
                version  : 1,
                upcmds   : [],
                downcmds : [],
                migration: {
                    1: [
                        { sql: 'CREATE SEQUENCE IF NOT EXISTS activitiesid START 1;'},
                        { sql: 'CREATE SEQUENCE IF NOT EXISTS salesid START 1;'},
                        { table: 'activities',  columns: [
                                { name: 'id',                       def: "INTEGER DEFAULT nextval('activitiesid')" },
                                { name: 'activity_date',            def: 'DATE' },

                                { name: 'vendor',                   def: 'VARCHAR' },
                                { name: 'product_id',               def: 'INTEGER' },

                                { name: 'affiliate',                def: 'VARCHAR' },
                                { name: 'campaignkey',              def: 'VARCHAR' },

                                { name: 'promo_clicks',             def: 'INTEGER NOT NULL DEFAULT 0' },
                                { name: 'unique_customers',         def: 'INTEGER NOT NULL DEFAULT 0' },
                                { name: 'superseded_customers',     def: 'INTEGER NOT NULL DEFAULT 0' },
                                { name: 'reengaged_customers',      def: 'INTEGER NOT NULL DEFAULT 0' },
                                { name: 'subscribed_customers',     def: 'INTEGER NOT NULL DEFAULT 0' },
                                { name: 'visits_checkout_page',     def: 'INTEGER NOT NULL DEFAULT 0' },

                                { def: 'PRIMARY KEY (id)' },

                                { cmd: 'CREATE INDEX idx_activities_product      ON activities (vendor, product_id);' },
                                { cmd: 'CREATE INDEX idx_activities_affiliate    ON activities (affiliate);' },
                                { cmd: 'CREATE INDEX idx_activities_campaignkey  ON activities (campaignkey);' },
                            ] },
                        { table: 'products',    columns: [

                                { name: 'vendor',                   def: 'VARCHAR' },
                                { name: 'product_id',               def: 'INTEGER' },

                                { name: 'vendor_name',              def: 'VARCHAR' },

                                { name: 'name',                     def: 'VARCHAR' },
                                { name: 'description',              def: 'VARCHAR' },
                                { name: 'image_square',             def: 'VARCHAR' },
                                { name: 'image_169',                def: 'VARCHAR' },

                                { name: 'price',                    def: 'FLOAT' },

                                { name: 'commission_type',          def: 'VARCHAR' },
                                { name: 'commission_percentage',    def: 'TINYINT' },
                                { name: 'commission_fixed_amount',  def: 'FLOAT' },

                                { def: 'PRIMARY KEY (vendor, product_id)' },
                            ] },
                        { table: 'sales',       columns: [

                                { name: 'id',                   def: "INTEGER DEFAULT nextval('salesid')" },
                                { name: 'tx_date',              def: 'TIMESTAMP' },

                                { name: 'vendor',               def: 'VARCHAR' },
                                { name: 'product_id',           def: 'INTEGER' },

                                { name: 'affiliate',            def: 'VARCHAR' },
                                { name: 'campaignkey',          def: 'VARCHAR' },

                                { name: 'currency',             def: 'VARCHAR' },
                                { name: 'purchase_quantity',    def: 'TINYINT' },
                                { name: 'purchase_earning',     def: 'FLOAT' },

                                { name: 'return_quantity',      def: 'TINYINT' },
                                { name: 'return_earning',       def: 'FLOAT' },

                                { def: 'PRIMARY KEY (id)' },

                                { cmd: 'CREATE INDEX idx_sales_product      ON sales (vendor, product_id);' },
                                { cmd: 'CREATE INDEX idx_sales_affiliate    ON sales (affiliate);' },
                                { cmd: 'CREATE INDEX idx_sales_campaignkey ON sales (campaignkey);' },

                            ] },
                    ]
                },
            }
        },
    }
}