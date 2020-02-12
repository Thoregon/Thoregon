/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight, { loadIframe }      from '/evolux.universe';
// import { busy, ready }   from '/evolux.universe';

(async () => {
    try {
        // busy();
        const universe              = await letThereBeLight();
        loadIframe('app.html');
        // ready();
    } catch (err) {
        console.log(err);
    }
})();
