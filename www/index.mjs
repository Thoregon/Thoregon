/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';
// import { loadIframe }    from '/evolux.universe';
// import { busy, ready }   from '/evolux.universe';

(async () => {
    try {
        // busy();
        const universe              = await letThereBeLight();
        let $done = document.createElement('p');
        let $body = document.getElementsByTagName('body')[0];
        $done.innerText = ">> universe inflated, dark age overcome";
        $body.appendChild($done);
       // loadIframe('app.html');
        // ready();
    } catch (err) {
        console.log(err);
    }
})();
