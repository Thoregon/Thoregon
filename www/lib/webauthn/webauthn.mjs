/**
 * WebAuthn
 *
 *   Registration
 *   - create credential information
 *   - create a challenge
 *   - get an attestation from authenticator, including public key and id
 *   - create an Identity
 *      - alias:   concat alias & pubkey & challenge
 *      - pwd:      signature from
 *
 *   Login
 *   - get 'pubkey|challenge' with the alias
 *   -
 *
 * @author: Bernhard Lukassen
 */


const challenge1 = new Uint8Array([ // must be a cryptographically random number sent from a server
                                      0x8C, 0x0A, 0x26, 0xFF, 0x22, 0x91, 0xC1, 0xE9, 0xB9, 0x4E, 0x2E, 0x17, 0x1A, 0x98, 0x6A, 0x73,
                                      0x71, 0x9D, 0x43, 0x48, 0xD5, 0xA7, 0x6A, 0x15, 0x7E, 0x38, 0x94, 0x52, 0x77, 0x97, 0x0F, 0xEF
                                  ]).buffer;
const challenge2  = new Uint8Array([ // must be a cryptographically random number sent from a server
                                       0x79, 0x50, 0x68, 0x71, 0xDA, 0xEE, 0xEE, 0xB9, 0x94, 0xC3, 0xC2, 0x15, 0x67, 0x65, 0x26, 0x22,
                                       0xE3, 0xF3, 0xAB, 0x3B, 0x78, 0x2E, 0xD5, 0x6F, 0x81, 0x26, 0xE2, 0xA6, 0x01, 0x7D, 0x74, 0x50
                                   ]).buffer;

export default class WebAuthn {

    async register({
        alias,
        name,
        code
             }) {
        Object.assign(this, { alias, name, code });

        try {
            // sample arguments for registration
            var createCredentialDefaultArgs = {
                publicKey: {
                    // Relying Party (a.k.a. - Service):
                    rp: {
                        name: "thatsme"
                    },

                    // User:
                    user: {
                        id: new Uint8Array(16),
                        name: "aliceA",
                        displayName: "John Doe"
                    },

                    pubKeyCredParams: [{
                        type: "public-key",
                        alg: -7
                    }],

                    attestation: "direct",

                    timeout: 60000,

                    challenge: universe.Everblack.challenge
                }
            };

            // sample arguments for login
            var getCredentialDefaultArgs = {
                publicKey: {
                    timeout: 60000,
                    // allowCredentials: [newCredential] // see below
                    challenge: universe.Everblack.challenge
                },
            };
            // register / create a new credential
            let cred = await navigator.credentials.create(createCredentialDefaultArgs);
            let assertion = await (async (cred) => {
                // console.log("NEW CREDENTIAL", cred);
                // normally the credential IDs available for an account would come from a server
                // but we can just copy them from above...
                var idList = [{
                    id: cred.rawId,
                    transports: ["usb", "nfc", "ble"],
                    type: "public-key"
                }];
                getCredentialDefaultArgs.publicKey.allowCredentials = idList;
                return navigator.credentials.get(getCredentialDefaultArgs);
            })();
            const decodedAttestationObj = CBOR.decode(
                credential.response.attestationObject);
            // console.log("ASSERTION", assertion);
            return assertion;
        } catch (err) {
            console.log("ERROR", err);
        }
    }

    async auth() {
        const credential = await navigator.credentials.get({
                                                               publicKey: publicKeyCredentialRequestOptions
                                                           });
    }

}
