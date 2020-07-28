/**
 *
 *
 * @author: Bernhard Lukassen
 */

export default {
    app: 'Test'
};

const rnd = universe.Gun.text.random;
        const SEA = universe.Gun.SEA;

const pubpriv = async () => {
    let pair = await SEA.pair();
    // either
    let enc = await SEA.encrypt('hello world', pair);
    let data = await SEA.sign(enc, pair);
    universe.logger.info('[everblack]',data);
    let msg = await SEA.verify(data, pair.pub);
    let dec = await SEA.decrypt(msg, pair); // { pub: pair.pub, epub: pair.epub }
    let proof = await SEA.work(dec, pair);
    let check = await SEA.work('hello world', pair);
    universe.logger.info('[everblack]',dec);
    universe.logger.info('[everblack]',proof === check);
};

const shared = async () => {
// now let's share private data with someone:
    let alice = await SEA.pair();
    let bob = await SEA.pair();
    let shared1 =  await SEA.secret(bob.epub, alice);
    let enc = await SEA.encrypt('This can only be read by alice & bob', shared1);
    let shared2 = await SEA.secret(alice.epub, bob);
    let dec = await SEA.decrypt(enc, shared2);
    universe.logger.info('[everblack]',dec);
};

const securestore = async () => {
// encrypt passphrase to be stored in public universe
    let pp = 'passphrase';
    let responsiblity = { id: 'broadcast.green.publisher', path: 'path.to', passphrase: pp, pair: await SEA.pair()};
    let salt = rnd(64);
    let proof1 = await SEA.work(pp, salt);
    let enc = await SEA.encrypt(responsiblity, proof1);
    let eresponsobility = JSON.stringify({ enc: enc, salt: salt});
    universe.logger.info('[everblack]',eresponsobility);

// on another process/device: now decode it again
    let proof2 = await SEA.work(pp, salt);
    let r = JSON.parse(eresponsobility);
    let dresponsibility = await SEA.decrypt(r.enc, proof2);
    universe.logger.info('[everblack]',dresponsibility);
};


const signedsecurestore = async () => {
// encrypt passphrase to be stored in public universe
    let alice = await SEA.pair();
    let bob = await SEA.pair();

    let alicepub = alice.pub;
    let bobpub = bob.pub;

    let pp = 'passphrase';
    let responsiblity = { id: 'broadcast.green.publisher', path: 'path.to', passphrase: pp, pair: await SEA.pair()};
    let salt = rnd(64);
    let proof1 = await SEA.work(pp, salt);
    let enc = await SEA.encrypt(responsiblity, proof1);
    let data = await SEA.sign(enc, alice);
    let encresponsobility = JSON.stringify({ data, salt });
    universe.logger.info('[everblack]',encresponsobility);

// on another process/device: now decode it again
    let proof2 = await SEA.work(pp, salt);
    let r = JSON.parse(encresponsobility);
    let msg = await SEA.verify(r.data, alicepub);
    let decresponsibility = await SEA.decrypt(msg, proof2);

    universe.logger.info('[everblack]',decresponsibility);
};


const signedsharedsecurestore = async () => {
// encrypt passphrase to be stored in public universe
    let alice = await SEA.pair();
    let bob = await SEA.pair();

    let alicepub = alice.pub;
    let bobpub = bob.pub;

    let pp = 'passphrase';
    let responsiblity = { id: 'broadcast.green.publisher', path: 'path.to', passphrase: pp, pair: await SEA.pair()};
    let salt = rnd(64);
    let proof1 = await SEA.work(pp, salt);
    let enc = await SEA.encrypt(responsiblity, proof1);
    let data = await SEA.sign(enc, alice);
    let encresponsobility = JSON.stringify({ data, salt });
    universe.logger.info('[everblack]',encresponsobility);

// on another process/device: now decode it again
    let proof2 = await SEA.work(pp, salt);
    let r = JSON.parse(encresponsobility);
    let msg = await SEA.verify(r.data, alicepub);
    let decresponsibility = await SEA.decrypt(msg, proof2);

    universe.logger.info('[everblack]',decresponsibility);
};


const signon = async () => {
    universe.logger.info('Auth', await universe.Identity.auth('bgtest1', 'bgtest1'));
    universe.logger.info('Is', await universe.identity.is);
};



(async () => {
    // await pubpriv();
    // await shared();
    // await securestore();
    // await signedsecurestore();

    // await signon();
})();

