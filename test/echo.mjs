/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

export default class Echo {

    constructor() {
        this.state = 'Alive';
    }

    echo(text) {
        /*console.log("Echo:", text);*/
        return text;
    }

}
