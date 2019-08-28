/**
 *
 *
 * @author: blukassen
 */

/*
 * initialize the component loader and load all
 */
export const componentlocation = './tcomponents';

/*
 * publish HTTP interface
 */
browserloader.serve({ root: 'www/', index: 'index.mjs', port: 8071 });
