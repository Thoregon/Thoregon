/**
 *
 *
 * @author: Bernhard Lukassen
 */

import { Command }      from '/thoregon.tru4D';

export default class AddSubscriptionList extends Command {

    constructor({
                    name,
                    description,
                    thumbnail
                } = {}) {
        super();
        Object.assign(this, { name, description, thumbnail });
    }

}
