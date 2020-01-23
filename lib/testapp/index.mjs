/**
 *
 *
 * @author: Bernhard Lukassen
 */

import matter               from '/universe/matter';

(async () => {
    let exists = await universe.matter.has('mydata.b');

    if (!exists) universe.matter.mydata = { a: 'A', b: { b: 'B' } };

    let md = await universe.matter.mydata.val;

    universe.logger.info(md.toString());
})//()


export default {};
