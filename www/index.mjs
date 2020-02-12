/**
 * Collection of entrypoints, objects and classes from thoregon
 *
 * @author: blukassen
 */


import letThereBeLight      from '/evolux.universe';
// import { busy, ready }   from '/evolux.universe';

(async () => {
    try {
        // busy();
        const universe              = await letThereBeLight();
        loadapp();
        // ready();
    } catch (err) {
        console.log(err);
    }
})();

const loadapp = () => {
    let body = document.getElementsByTagName('body')[0];
    let app = document.createElement('iframe');
    app.src = 'app.html';
    body.appendChild(app);
    // app.innerHTML = '<a href="app.html"><iframe src="app.html"></iframe></a>';
    app.contentWindow.universe = window.universe;
    app.contentWindow.thoregon = window.thoregon;
}
