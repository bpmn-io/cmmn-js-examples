import LegacyModeler from "cmmn-js/lib/Modeler";
import LegacyViewer from "cmmn-js/lib/Viewer";

/**
 * Make the Modeler compatible with Typescript, as ES5 inheritance via prototype cant be typed.
 * Also transforms the (used) api into Promises, for easier handling.
 */
export class CmmnModeler extends LegacyModeler {
    /**
     * @see {LegacyViewer.importXML}
     * 
     * @param {String} xml the CMMN 1.1 xml
     */
    importXML(xml: string): Promise<void> {
        return new Promise((resolve, reject) => {
            LegacyModeler.prototype.importXML.call(this, xml, (error) => error
                ? reject(error)
                : resolve()
            )
        })
    }

    /**
     * @see {LegacyViewer.saveXML}
     * 
     * @param {Object} [options] export options
     * @param {Boolean} [options.format=false] output formated XML
     * @param {Boolean} [options.preamble=true] output preamble
     */
    saveXML(options?: { format?: boolean, preamble?: boolean }): Promise<string> {
        return new Promise((resolve, reject) => {
            LegacyModeler.prototype.saveXML.call(this, options, (error, result) => error
                ? reject(error)
                : resolve(result)
            )
        })
    }

    /**
     * @see {LegacyViewer.saveSVG}
     */
    saveSVG(): Promise<string> {
        return new Promise((resolve, reject) => {
            LegacyModeler.prototype.saveSVG.call(this, (error, result) => error
                ? reject(error)
                : resolve(result)
            )
        })
    }
}
