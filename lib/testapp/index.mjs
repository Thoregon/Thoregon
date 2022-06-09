/**
 *
 *
 * @author: Bernhard Lukassen
 */

import matter               from '/universe/matter';

(async () => {
})();

const cat = async (fn) => {
    let x = await fn();
    if (x) console.log(x);
}

export default {};
