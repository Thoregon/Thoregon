import UpaymeExtended          from "/easypay-home/upaymeextended.mjs";
import Checkout                from "/easypay-service/web/checkout.mjs"
import CheckoutService         from "/easypay-service/order/checkoutservice.mjs";
import NumberService           from "/easypay-service/numberranges/numberservice.mjs";
import BroadcastService        from "/easypay-service/broadcastservice/broadcastservice.mjs"
import BroadcastEmailService   from "/easypay-service/broadcastservice/broadcastemailservice.mjs"
import TransactionService      from "/easypay-service/transactions/transactionservice.mjs";
import ProvisionService        from "/easypay-service/provisions/provisionservice.mjs";
import StripeService           from "/paymentprocessors/stripe/stripeservice.mjs";
import StripeCollector         from "/paymentprocessors/stripe/stripecollector.mjs";
import PaypalService           from "/paymentprocessors/paypal/paypalservice.mjs";
//import PaymentServiceCollector from "/paymentprocessors/paymentservicecollector.mjs";
import MembersSuiteConnx       from "/easypay-service/connx/memberssuiteconnx.mjs";
import ActiveCampaignConnx     from "/easypay-service/connx/activecampaignconnx.mjs";
import Digistore24Connx        from "/easypay-service/connx/digistore24connx.mjs";
import Digistore24UXService    from "/easypay-service/digistore24service/digistore24uxservice.mjs";
import Digistore24SAService    from "/easypay-service/digistore24service/digistore24saservice.mjs";
import ConversionTools         from "/easypay-service/conversiontools/conversiontools.mjs";
 // import MQService               from "/thoregon.archetim/test/mq/mqservice.mjs";
import IPNDispatcherService    from "/easypay-service/ipnservice/ipndispatcherservice.mjs";
import IPNService              from "/easypay-service/ipnservice/ipnservice.mjs";
import CustomerService         from "/easypay-service/customer/customerservice.mjs";
import ContentLinkService      from "/easypay-service/web/contentlinks.mjs";
import RedirectLinkService     from "/easypay-service/web/redirlinks.mjs";
import VendorReportsService    from "/easypay-service/vendorreports/vendorreports.mjs"
import IdentityService         from "/thoregon.identity/lib/service/identityservice.mjs";
import InspectionService       from "/thoregon.truCloud/lib/inspect/inspectionservice.mjs"
import HeartBeat               from "/thoregon.truCloud/lib/service/heartbeat.mjs"
import PDFService              from "/easypay-service/pdfservice/pdfservice.mjs";

import RemoteEntityService     from "/thoregon.truCloud/lib/remote/remoteentityservice.mjs";
import RemoteHomeService       from "/thoregon.truCloud/lib/remote/remotehomeservice.mjs";

import {
    NUMBERS,
    UPAYMEORDER,
    STRIPE,
    CUSTOMER,
    IDENTITY,
    INSPECT,
    HEARTBEAT,
    SETTINGS,
    VENDORREPORTS
} from "./agent_sources.mjs";

// todo [OPEN]:
//  - multiple instances for services
//  - serves also multiple app instances
//  - no 'current' instance (all are active)
//  - define which services belongs together (service groups) -> circle

export default {
    alias: "erikawest_upayme_agent",

    app: {
        id      : 'easypay-application-dashboard',
        instance: 'dashboard',
        home    : UpaymeExtended,
        create  : true,
    },

    channels: {
        business: { description: 'channel for all business events' },
        broadcastemail: { description: 'broadcast events for email' },
        automation: { description: 'channel for all automations (external) like IPN etc.' },
        // payment providers
        stripe: { description: 'channel for all stripe events' },
        paypal: { description: 'channel for all paypal events' },
        // technical
        app: { description: 'channel for all technical events' },
        agentmain: { description: 'channel for all technical events of this agent' },   // each agent has its own channel
        // test
        test: { description: 'test channels' }
    },

    www: ['pub'],

    services: {

        heartbeat: {
            source  : HEARTBEAT,
            producer: HeartBeat,
            settings: { rest: true }
        },

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

        //
        // app services
        //

        vendorreports: {
            source  : VENDORREPORTS,
            producer: VendorReportsService,
            settings: {}
        },

        inspect: {
            source  : INSPECT,
            home    : UpaymeExtended,
            producer: InspectionService,
            settings: {}
        },

        identity: {
            source  : IDENTITY,
            home    : UpaymeExtended,
            producer: IdentityService,
            settings: {}
        },

/*
        mqtest: {
            home    : UpaymeExtended,
            producer: MQService,
            settings: {}
        },
*/

        numbers: {
            source  : NUMBERS,
            home    : UpaymeExtended,
            producer: NumberService,
            settings: {}
        },

        upaymecheckout: {
            source  : UPAYMEORDER,
            home    : UpaymeExtended,
            producer: CheckoutService,
            settings: { rest: true }
        },

        checkout: {
            producer: Checkout,
            settings: {}
        },

        stripe: {
            source  : STRIPE,
            home    : UpaymeExtended,
            producer: StripeService,
            settings: {
                rest      : true,
                mailtarget: SETTINGS.MAILTARGET
            }
        },

        stripecollector: {
            // source  : '',       // replace with a unique identifier if needed
            home    : UpaymeExtended,
            producer: StripeCollector,
            settings: {}
        },

        paypal: {
            // source  : PAYPAL,
            home    : UpaymeExtended,
            producer: PaypalService,
            settings: {
                rest      : true,
                mailtarget: SETTINGS.MAILTARGET
            }
        },

        broadcast: {
            producer: BroadcastService,
            settings: {}
        },

        broadcastemail: {
            producer: BroadcastEmailService,
            settings: {}
        },

        transactions: {
            producer: TransactionService,
            settings: {}
        },

        provisions: {
            producer: ProvisionService,
            settings: {}
        },

        pdfdocuments: {
            producer: PDFService,
            settings: {}
        },

        conversion: {
            producer: ConversionTools,
            settings: {}
        },

        ipndispatcherservice: {
            home    : UpaymeExtended,
            producer: IPNDispatcherService,
            settings: {}
        },

        ipnservice: {
            home    : UpaymeExtended,
            producer: IPNService,
            settings: {}
        },

        customer: {
            source  : CUSTOMER,
            home    : UpaymeExtended,
            producer: CustomerService,
            settings: { rest: true }
        },

/*
        paymentcollector: {
             producer: PaymentServiceCollector,
             settings: {}
        },
*/


//--- integration services list of all Connectors ------
        memberssuiteconnx: {
            home    : UpaymeExtended,
            producer: MembersSuiteConnx,
            settings: {}
        },

        activecampaignconnx: {
            home    : UpaymeExtended,
            producer: ActiveCampaignConnx,
            settings: {}
        },

        //--- Digistore24
        digistore24connx: {
            home    : UpaymeExtended,
            producer: Digistore24Connx,
            settings: {}
        },
        digistore24UX: {
            home    : UpaymeExtended,
            producer: Digistore24UXService,
            settings: {}
        },
        digistore24SA: {
            home    : UpaymeExtended,
            producer: Digistore24SAService,
            settings: {}
        },

        contentlink: {
            producer: ContentLinkService,
            settings: {}
        },

        redirlink: {
            producer: RedirectLinkService,
            settings: {}
        },

        /*
                businessdocuments: {
                    producer: BusinessDocumentsStatic,
                    settings: {
                    }
                },

                echo: {
                    source  : 'fCPpFKf7T97EVJdFCwhCENZ77BNZBbBB',
                },


                easypayStatistics : {
                    // cron    : "0 * * ? * *",        // see https://github.com/node-cron/node-cron, https://www.freeformatter.com/cron-expression-generator-quartz.html
                    schedule: "1 min",
                    producer: Statistics,
                    hooks   : {
                        oninstall   : async (service, settings) => await service.init(settings),
                        onattach    : async (service, handle, appinstance) => await service.attach(handle, appinstance),
                        onactivate  : async (service) => await service.activate(),
                        ondeactivate: async (service) => await service.deactivate(),
                        onuninstall : async (service) => await service.quit(),
                    },
                    settings: {
                    }
                },
        */
    }
}
