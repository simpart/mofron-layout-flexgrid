/**
 * @file mofron-layout-flexgrid/index.js
 * @brief layout module template for developper
 * @license MIT
 */
module.exports = class extends mofron.class.Layout {
    /**
     * initialize layout
     * 
     * @param (mixed) 
     *                key-value: layout config
     * @short
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('FlexGrid');

	    if (0 < arguments.length) {
                this.config(p1);
	    }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * component setter/getter
     * 
     * @param (Component) layout parent
     * @return (Component) layout parent
     * @type private
     */
    component (prm) {
        try {
	    if (undefined !== prm) {
                prm.style({
                    "display": "flex",
		    "flex-wrap": "wrap",
                    "justify-content": "center"
		});
	    }
            return super.component(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * layout contents
     * 
     * @param (number) target child index
     * @param (component) target component object
     * @type private
     */
    contents (idx, cmp) {
        try {
	    let wid = cmp.width();
	    cmp.style({ "flex": "0 1 " + wid + "rem" });
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
