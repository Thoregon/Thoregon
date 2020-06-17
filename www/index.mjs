/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';
import components           from './@components';

// import { loadIframe }    from '/evolux.universe';
// import { busy, ready }   from '/evolux.universe';

(async () => {
    try {
        // busy();
        const universe              = await letThereBeLight();

        universe.addComponents(components);     // todo: automatize

        /*
         * basic DOM elements
         */
        let $head = document.getElementsByTagName('head')[0];
        let $body = document.getElementsByTagName('body')[0];

        /*
         * show ready message
         */
        let $done = document.createElement('p');
        $done.innerText = ">> universe inflated, dark age overcome";
        $body.appendChild($done);

        let $test = document.createElement('thatsme-connect');
        $test.setAttribute('sid', 'al8pNHuRo7uq0PeXicz6wuoFlEvN1ut0Iwq5RsrNVVDK39lofQdXh5uWSwb8AqFFhrEOl4ptuttbiGD8by9cCBDI5MH6Md44qH8moQkgF3yUT4caqCClU2BF2Vr4Mv2F');
        $body.appendChild($test);

        console.log("components", components);

        // loadIframe('app.html');
        // ready();

        document.dispatchEvent(new CustomEvent('universe', { detail: universe }));
    } catch (err) {
        console.log(err);
    }
})();
