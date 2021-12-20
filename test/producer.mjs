/**
 *
 *
 * @author: Bernhard Lukassen
 * @licence: MIT
 * @see: {@link https://github.com/Thoregon}
 */

export default class Producer {

    constructor() {
        this.name = 'Producer Service';
    }

    echo(text) {
        /*console.*/log("Producer.echo()", text);
        return "Got: '" + text + "'";
    }

}
