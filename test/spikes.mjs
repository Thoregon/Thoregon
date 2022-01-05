
//****************************************************************//
// Agent Producer                                                 //
//****************************************************************//

// import { asyncWithPath } from "/evolux.util";
import ServiceHandle     from "/thoregon.truCloud/lib/service/servicehandle.mjs";

const ssi          = await me.ssi();
const currentagent = await agent.current;
const services     = await currentagent.services;
let   testservice  = await services.test;
let   source       = 'KhNlE737smMWsKSwK85Ae49JaCOndbCP';

if (!testservice) {
    testservice = ServiceHandle.forProducer('repo:./producer.mjs', source);
}




//****************************************************************//
// entity prop                                                    //
//****************************************************************//





//****************************************************************//
// Telegram MTProto                                               //
//****************************************************************//

/*
import process     from '/process';
import path        from '/path';
import MTProto     from '/@mtproto/core';
// import { MTProto } from "/terra.telegram";

const api_id   = '11199645';
const api_hash = 'a947ddc3bc76bcc6466dba6dec8cc680';
const storage  = path.resolve(process.cwd(), './test/data/1.json');

// 1. Create instance
const mtproto = new MTProto({
                                api_id,
                                api_hash,

                                storageOptions: {
                                    path: storage,
                                },
                            });

// 2. Print the user country code

// const dcinfo = await mtproto.call('help.getNearestDc');
// console.log('country:', dcinfo.country);
// const nearestdc = dcinfo.nearest_dc;

async function getUser() {
    try {
        const user = await mtproto.call('users.getFullUser', {
            id: {
                _: 'inputUserSelf',
            },
        }, { /!* dcId: nearestdc *!/ });

        return user;
    } catch (error) {
        return null;
    }
}

function sendCode(phone) {
    return mtproto.call('auth.sendCode', {
        phone_number: phone,
        settings: {
            _: 'codeSettings',
        },
    }, { /!* dcId: nearestdc *!/ });
}

function signIn({ code, phone, phone_code_hash }) {
    return mtproto.call('auth.signIn', {
        phone_code: code,
        phone_number: phone,
        phone_code_hash: phone_code_hash,
    }, { /!* dcId: nearestdc *!/ });
}

function signUp({ phone, phone_code_hash }) {
    return mtproto.call('auth.signUp', {
        phone_number: phone,
        phone_code_hash: phone_code_hash,
        first_name: 'MTProto',
        last_name: 'Core',
    }, { /!* dcId: nearestdc *!/ });
}

function getPassword() {
    return mtproto.call('account.getPassword', {}, { /!* dcId: nearestdc *!/ });
}

function checkPassword({ srp_id, A, M1 }) {
    return mtproto.call('auth.checkPassword', {
        password: {
            _: 'inputCheckPasswordSRP',
            srp_id,
            A,
            M1,
        },
    }, { /!* dcId: nearestdc *!/ });
}

const enterTelegram = async () => {
    const user = await getUser();

    const phone = '+436767800786';
    const code = '';

    if (!user) {
        try {
            const { phone_code_hash } = await sendCode(phone);

            const signInResult = await signIn({
                                                  code,
                                                  phone,
                                                  phone_code_hash,
                                              });

            if (signInResult._ === 'auth.authorizationSignUpRequired') {
                await signUp({
                                 phone,
                                 phone_code_hash,
                             });
            }
            return enterTelegram();
        } catch (error) {
            const msg = error.error_message ?? '';
            if (msg.indexOf('MIGRATE') > -1) {
                const [type, dc] = msg.split('_MIGRATE_');
                mtproto.setDefaultDc(+dc);  // convert to number!
                return enterTelegram();
            }
            if (msg !== 'SESSION_PASSWORD_NEEDED') {
                console.log(`error:`, error);
                return;
            }

            // 2FA

            const password = 'USER_PASSWORD';

            const { srp_id, current_algo, srp_B } = await getPassword();
            const { g, p, salt1, salt2 } = current_algo;

            const { A, M1 } = await mtproto.mtproto.crypto.getSRPParams({
                                                                        g,
                                                                        p,
                                                                        salt1,
                                                                        salt2,
                                                                        gB: srp_B,
                                                                        password,
                                                                    });

            const checkPasswordResult = await checkPassword({ srp_id, A, M1 });
            return enterTelegram();
        }
    }
    return user;
}

const user = await enterTelegram();

// const martin = "+436765299072";

const contacts = await mtproto.call('contacts.getContacts');

const martin = contacts.users.find(c => c.last_name == 'Neitz');

/!*
const resolvedPeer = await mtproto.call('contacts.resolveUsername', {
    username: 'Martin Neitz',
});

const channel = resolvedPeer.chats.find(
    (chat) => chat.id === resolvedPeer.peer.channel_id
);
*!/

const inputPeer = {
    _: 'inputPeerUser',
    user_id: martin.id,
    access_hash: martin.access_hash,
};

const updates = await mtproto.call('messages.sendMessage', {
    clear_draft: true,
    silent     : false,

    peer: inputPeer,
    message: 'TestIdentity: Message from ServiceAgent',
    entities: [],

    random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
});

console.log("Telegram sent");
*/

/*
const updates = await mtproto.call('messages.sendMessage', {
        clear_draft: true,
        silent     : false,

        peer: {
            _: 'inputPeerSelf',
        },
        message: 'Message from ServiceAgent',
        entities: [
            {
                _: 'messageEntityBold',
                offset: 13,
                length: 12,
            },
        ],

        random_id: Math.ceil(Math.random() * 0xffffff) + Math.ceil(Math.random() * 0xffffff),
    });
console.log("Telegram sent");
*/

//****************************************************************//
// Telegram API ID                                                //
//****************************************************************//

/*
import fetch             from "/evolux.web/lib/request/fetch.mjs";
import { TelegramAppSetup } from "/thatsme-module-message-provider/lib/providers/telegram.mjs";

const setup = new TelegramAppSetup();

await setup.requestLogin('+436767800786');
console.log("Login requested");

let code = "";
await setup.login(code);
console.log("Login OK");

await setup.captureAPIKeys();
console.log("API Settings");
*/

/*
const html = "<!DOCTYPE html>\n" +
             "<html><head>\n" +
             "    <meta charset=\"utf-8\">\n" +
             "    <title>App configuration</title>\n" +
             "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n" +
             "    <meta name=\"apple-itunes-app\" content=\"app-id=686449807\">\n" +
             "    <link rel=\"shortcut icon\" href=\"/favicon.ico?3\" type=\"image/x-icon\">\n" +
             "\n" +
             "    <link href=\"/css/bootstrap.min.css?3\" rel=\"stylesheet\">\n" +
             "    <link href=\"/css/bootstrap-extra.css?2\" rel=\"stylesheet\">\n" +
             "    \n" +
             "    <link href=\"/css/telegram.css?214\" rel=\"stylesheet\" media=\"screen\">\n" +
             "    <style>\n" +
             "    </style>\n" +
             "  </head>\n" +
             "  <body>\n" +
             "    <div id=\"fb-root\"></div>\n" +
             "    <div class=\"tl_page_wrap\">\n" +
             "      <div class=\"tl_page_head navbar navbar-static-top navbar-tg\">\n" +
             "        <div class=\"navbar-inner\">\n" +
             "          <div class=\"container\">\n" +
             "            <ul class=\"nav navbar-nav\">\n" +
             "  <li><a href=\"//telegram.org/\">Home</a></li>\n" +
             "  <li><a href=\"//telegram.org/faq\">FAQ</a></li>\n" +
             "  <li><a href=\"//telegram.org/apps\">Apps</a></li>\n" +
             "  <li class=\"hidden-xs\"><a href=\"//core.telegram.org/api\">API</a></li>\n" +
             "  <li class=\"hidden-xs\"><a href=\"//core.telegram.org/mtproto\">Protocol</a></li>\n" +
             "</ul>\n" +
             "          </div>\n" +
             "        </div>\n" +
             "      </div>\n" +
             "      <div class=\"container tl_page_container\">\n" +
             "        <div class=\"tl_page\">\n" +
             "          <div class=\"app_edit_page\">\n" +
             "  <form class=\"form-horizontal\" id=\"app_edit_form\">\n" +
             "    <input type=\"hidden\" name=\"hash\" value=\"21022ce9eb71972f3a\">\n" +
             "    <h2>App configuration</h2>\n" +
             "    <div class=\"form-group\">\n" +
             "      <label for=\"app_id\" class=\"col-md-4 text-right control-label\">App api_id:</label>\n" +
             "      <div class=\"col-md-7\">\n" +
             "        <span class=\"form-control input-xlarge uneditable-input\" onclick=\"this.select();\"><strong>11199645</strong></span>\n" +
             "      </div>\n" +
             "      <div class=\"col-md-1\">\n" +
             "        <div class=\"app_lock_tt\" data-original-title=\"\" title=\"\"><span class=\"glyphicon glyphicon-lock\"></span></div>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label for=\"app_hash\" class=\"col-md-4 text-right control-label\">App api_hash:</label>\n" +
             "      <div class=\"col-md-7\">\n" +
             "        <span class=\"form-control input-xlarge uneditable-input\" onclick=\"this.select();\">a947ddc3bc76bcc6466dba6dec8cc680</span>\n" +
             "      </div>\n" +
             "      <div class=\"col-md-1\">\n" +
             "        <div class=\"app_lock_tt\" data-original-title=\"\" title=\"\"><span class=\"glyphicon glyphicon-lock\"></span></div>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label for=\"app_title\" class=\"col-md-4 text-right control-label\">App title:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <input id=\"app_title\" name=\"app_title\" type=\"text\" class=\"form-control input-xlarge\" value=\"BroadcastGreen\">\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label for=\"app_shortname\" class=\"col-md-4 text-right control-label\">Short name:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <input id=\"app_shortname\" name=\"app_shortname\" type=\"text\" class=\"form-control input-xlarge\" value=\"bgmanager\">\n" +
             "        <p class=\"help-block\"><span class=\"text-muted\">alphanumeric, 5-32 characters</span></p>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div style=\"display: none;\">\n" +
             "      <h3>PUSH-notifications settings</h3>\n" +
             "\n" +
             "      <div class=\"form-group\">\n" +
             "        <label for=\"app_gcm_api_key\" class=\"col-md-4 text-right control-label\">GCM API key:</label>\n" +
             "        <div class=\"col-md-8\">\n" +
             "          <input id=\"app_gcm_api_key\" name=\"app_gcm_api_key\" type=\"text\" class=\"form-control input-xlarge\" value=\"\">\n" +
             "          <p class=\"help-block\"><a href=\"http://developer.android.com/google/gcm/gs.html#access-key\" target=\"_blank\">How do I get this?</a></p>\n" +
             "        </div>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div style=\"display: none;\">\n" +
             "      <h3>\n" +
             "        APNS certificates\n" +
             "        <small>\n" +
             "          &nbsp;<a href=\"/apps/apns_cert\">Update</a>\n" +
             "          &nbsp;<a href=\"/apps/apns_cert_delete\" onclick=\"return confirm('Are you sure to delete certificates?');\" style=\"display: none;\">Delete</a>\n" +
             "        </small>\n" +
             "      </h3>\n" +
             "\n" +
             "      <div class=\"form-group\" style=\"display: none;\">\n" +
             "        <label for=\"app_apns_production_pem\" class=\"col-md-4 text-right control-label\">APNS production certificate:</label>\n" +
             "        <div class=\"col-md-8\">\n" +
             "          <span class=\"form-control input-xlarge uneditable-input\"></span>\n" +
             "        </div>\n" +
             "      </div>\n" +
             "\n" +
             "      <div class=\"form-group\" style=\"display: none;\">\n" +
             "        <label for=\"app_apns_dev_pem\" class=\"col-md-4 text-right control-label\">APNS development certificate:</label>\n" +
             "        <div class=\"col-md-8\">\n" +
             "          <span class=\"form-control input-xlarge uneditable-input\"></span>\n" +
             "        </div>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <h3>Available MTProto servers</h3>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label class=\"col-md-4 text-right control-label\">Test configuration:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <span class=\"form-control input-xlarge uneditable-input\"><strong>149.154.167.40:443</strong></span>\n" +
             "        <p class=\"help-block\">DC 2</p>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "    <div class=\"form-group\">\n" +
             "      <label class=\"col-md-4 text-right control-label\">Public keys:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <pre><code>-----BEGIN RSA PUBLIC KEY-----\n" +
             "MIIBCgKCAQEAyMEdY1aR+sCR3ZSJrtztKTKqigvO/vBfqACJLZtS7QMgCGXJ6XIR\n" +
             "yy7mx66W0/sOFa7/1mAZtEoIokDP3ShoqF4fVNb6XeqgQfaUHd8wJpDWHcR2OFwv\n" +
             "plUUI1PLTktZ9uW2WE23b+ixNwJjJGwBDJPQEQFBE+vfmH0JP503wr5INS1poWg/\n" +
             "j25sIWeYPHYeOrFp/eXaqhISP6G+q2IeTaWTXpwZj4LzXq5YOpk4bYEQ6mvRq7D1\n" +
             "aHWfYmlEGepfaYR8Q0YqvvhYtMte3ITnuSJs171+GDqpdKcSwHnd6FudwGO4pcCO\n" +
             "j4WcDuXc2CTHgH8gFTNhp/Y8/SpDOhvn9QIDAQAB\n" +
             "-----END RSA PUBLIC KEY-----\n" +
             "</code></pre>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label class=\"col-md-4 text-right control-label\">Production configuration:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <span class=\"form-control input-xlarge uneditable-input\"><strong>149.154.167.50:443</strong></span>\n" +
             "        <p class=\"help-block\">DC 2</p>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <label class=\"col-md-4 text-right control-label\">Public keys:</label>\n" +
             "      <div class=\"col-md-8\">\n" +
             "        <pre><code>-----BEGIN RSA PUBLIC KEY-----\n" +
             "MIIBCgKCAQEA6LszBcC1LGzyr992NzE0ieY+BSaOW622Aa9Bd4ZHLl+TuFQ4lo4g\n" +
             "5nKaMBwK/BIb9xUfg0Q29/2mgIR6Zr9krM7HjuIcCzFvDtr+L0GQjae9H0pRB2OO\n" +
             "62cECs5HKhT5DZ98K33vmWiLowc621dQuwKWSQKjWf50XYFw42h21P2KXUGyp2y/\n" +
             "+aEyZ+uVgLLQbRA1dEjSDZ2iGRy12Mk5gpYc397aYp438fsJoHIgJ2lgMv5h7WY9\n" +
             "t6N/byY9Nw9p21Og3AoXSL2q/2IJ1WRUhebgAdGVMlV1fkuOQoEzR7EdpqtQD9Cs\n" +
             "5+bfo3Nhmcyvk5ftB0WkJ9z6bNZ7yxrP8wIDAQAB\n" +
             "-----END RSA PUBLIC KEY-----\n" +
             "</code></pre>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "\n" +
             "    <div class=\"form-group\">\n" +
             "      <div class=\"col-md-8 col-md-offset-4\">\n" +
             "        <button type=\"button\" class=\"btn btn-primary\" data-loading-text=\"Saving...\" id=\"app_save_btn\" onclick=\"saveApp(); return false;\">Save changes</button>\n" +
             "        <a href=\"/\" class=\"btn btn-link\">Cancel</a>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "  </form>\n" +
             "</div>\n" +
             "          \n" +
             "        </div>\n" +
             "      </div>\n" +
             "    </div>\n" +
             "    <script src=\"/js/jquery.min.js?1\"></script>\n" +
             "    <script src=\"/js/bootstrap.min.js\"></script>\n" +
             "    <script src=\"/js/main.js?4\"></script>\n" +
             "    <script>$('#app_save_btn').button();\n" +
             "$('.app_lock_tt').tooltip({html: true, title: '<div class=\"app_lock_text\">It is forbidden to pass this value to third parties.</div>'});\n" +
             "\n" +
             "function saveApp() {\n" +
             "  $('#app_save_btn').button('loading');\n" +
             "\n" +
             "  $.ajax({\n" +
             "    type: 'POST',\n" +
             "    url: '/apps/save',\n" +
             "    data: $('#app_edit_form').serialize(),\n" +
             "    success: function (error) {\n" +
             "      $('#app_save_btn').button('reset');\n" +
             "      if (error) {\n" +
             "        alert(error);\n" +
             "      }\n" +
             "    },\n" +
             "    error: function (error) {\n" +
             "      $('#app_save_btn').button('reset');\n" +
             "      if (error) {\n" +
             "        alert(error);\n" +
             "      }\n" +
             "    }\n" +
             "  });\n" +
             "}\n" +
             "</script>\n" +
             "  \n" +
             "\n" +
             "<!-- page generated in 4.35ms -->\n" +
             "</body></html>";


const getTitle = (html) => {
    let i,j = 0;
    let title;
    i = html.indexOf("<title>");
    if (i > -1) {
        j = html.indexOf("</title>", i);
        if (j>i) title = html.substring(i+7,j);
    }
    return title;
}

const getNonEditInputFields = (html) => {
    let i,j = 0;
    const fields = [];
    i = html.indexOf("form-control input-xlarge uneditable-input");
    while (i > -1) {
        i = html.indexOf(">", i)+1;
        j = html.indexOf("<", i);
        if (html.substring(i,i+8) === "<strong>") {
            i += 8;
            j = html.indexOf("<", i);
        }
        if (j>i) fields.push(html.substring(i,j));
        i = html.indexOf("form-control input-xlarge uneditable-input", j);
    }
    return fields;
}

const getCodeFields = (html) => {
    let i,j = 0;
    const fields = [];
    i = html.indexOf("<code>");
    while (i > -1) {
        j = html.indexOf("</code>", i);
        if (j>i) fields.push(html.substring(i+6,j));
        i = html.indexOf("<code>", j);
    }
    return fields;
}

const title = getTitle(html);

const fields = getNonEditInputFields(html);
const apiid = fields[0];
const apihash = fields[1];
const testhost = fields[2];
const prodhost = fields[3];

const keys = getCodeFields(html);
const testpub = keys[0];
const propub = keys[1];

console.log("title", title);
console.log(apiid, apihash, testhost, prodhost);
console.log( '\n', testpub, '\n', propub);
*/

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

import fetch, { Request, Response } from "./fetch.mjs";

try {
// simple get request
    const getres = await fetch('https://my.domain.org');
    console.log("GET\n",await getres.text());
} catch (err) {
    console.log(err);
}

try {
// post reqeust with form encoded body params
    const body = "id=12345";
    const postres = await fetch('https://my.domain.org/api', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }, body });
    console.log("POST\n", await postres.text());
} catch (err) {
    console.log(err);
}

 */

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
