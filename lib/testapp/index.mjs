/**
 *
 *
 * @author: Bernhard Lukassen
 */

import matter               from '/universe/matter';

(async () => {
    const matter = universe.matter;

    let exists = await matter.has('abc1');

    let md = await matter.abc1.val;

    let mc = await matter.mycollection.val;

    cat(() => mc);
})();

const cat = async (fn) => {
    let x = await fn();
    if (x) console.log(x);
}

export default {};
