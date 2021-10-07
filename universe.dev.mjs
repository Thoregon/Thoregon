/**
 *
 *
 * @author: blukassen
 */

// export { default as VAPID }     from "./vapid.json";        // todo: maybe store encoded in matter, passphrase in a vault

// import { browserloader }            from '/evolux.universe';

export const DEBUG    = false;
export const GUNDEBUG = false;

const TESTAPP = {
    namespace: "test",
    keys: {
        "pub": "8Rd9_YyQC6wfvJfevILdNUrqqJD32FwiOlk_InbgnZU.shWJNXxB7eNkBGxeQM9L6lDOnJc-_nO04vBn_giLQSs",
        "priv": "0WpQyGAkoCYt5B4n884WmK9mVI4AGMKDMsZdQwNRW6g",
        "epub": "72_OmxVivQZSqfBdnhSCXK9Ub8_VysdXTEO12IkV-jI.D6a7-RwEtdHSM_QhUSPQ9Bp5T7pUrzLKZsTioOqZG8U",
        "epriv": "xseS_H5PGRGErp5-zajsvJUfBIKH6MXXbjr_q8o3JpA"
    },
    galaxies: [ 'stuff' ],
}

const TESTIDENTITY = {
    alias: 'Testuser',
    keys : {
        "pub": "qnCz27cOAl7OwsdP0-jwot0g61R90KEdZWd0474ELxo.YVFuMtKEf4Vj2yVGZZteDYP2MKN75TxdfD-2r5DFLUc",
        "priv": "gn4ggJx4U6pn_JClJJfHHtr2vtRIs7u0nWEnFjigdLQ",
        "epub": "wsU2aBqVY0DVPugBwu5mkOmgyXnXlXLgFZDQ3izUAR0.q-O3fI54iIi8hDwvV6WMMbiwUw31IciqYLtpbjU5tVA",
        "epriv": "6s8AHkxBSzDRTH9TwBRJkR3DojY_ZeCvUHKKffLUWgQ"
    }
};

const stuff = [
    { name: 'AA', score: 111 },
    { name: 'AB', score: 323 },
    { name: 'AC', score: 132 },
    { name: 'AD', score: 123 },
    { name: 'AE', score: 323 },
    { name: 'AF', score: 151 },
    { name: 'AG', score: 174 },
    { name: 'AH', score: 149 },
    { name: 'AI', score: 130 },
    { name: 'AJ', score: 196 },
    { name: 'AK', score: 128 },
    { name: 'AL', score: 148 },
    { name: 'AM', score: 185 },
    { name: 'AN', score: 176 },
    { name: 'AO', score: 139 },
    { name: 'AP', score: 142 },
    { name: 'AQ', score: 103 },
    { name: 'AR', score: 158 },
    { name: 'AS', score: 138 },
    { name: 'AT', score: 133 },
    { name: 'AU', score: 154 },
    { name: 'AV', score: 193 },
    { name: 'AW', score: 198 },
    { name: 'AX', score: 165 },
    { name: 'AY', score: 155 },
    { name: 'AZ', score: 148 },
    { name: 'BA', score: 160 },
    { name: 'BB', score: 176 },
    { name: 'BC', score: 122 },
    { name: 'BD', score: 164 },
    { name: 'BE', score: 109 },
    { name: 'BF', score: 119 },
    { name: 'BG', score: 157 },
    { name: 'BH', score: 185 },
    { name: 'BI', score: 176 },
    { name: 'BJ', score: 127 },
    { name: 'BK', score: 299 },
]

universe.atDawn(async universe => {
    await universe.Identity.signon(TESTIDENTITY);
    // register credentials for testing
    await universe.archetim.useContext(TESTAPP);
    // add test data to 'stuff'
    universe.archetim.overrideForTest('stuff', stuff);
})

/*
 * publish HTTP interface
 */
/*
browserloader.serve({
    // root: 'www/',        --> default
    // common: './',        --> default
    // index: 'index.mjs',  --> default
    port: 8070,
    host: "0.0.0.0",
    // cachecontrol: 'public, max-age=120'     // fresh in seconds = 2 minutes
});
*/
