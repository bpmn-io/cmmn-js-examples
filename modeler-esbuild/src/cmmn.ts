import LegacyModeler from "cmmn-js/lib/Modeler";
import LegacyViewer from "cmmn-js/lib/Viewer";

/**
 * @see LegacyModeler
 * @see LegacyViewer
 * 
 * Make the Modeler compatible with Typescript, as ES5 inheritance via prototype cant be typed.
 * Also transforms the (used) api into Promises, for easier handling.
 */
export class CmmnModeler {

    private legacyModeler: LegacyModeler;

    /**
     * @see LegacyModeler
     * 
     * @param options configuration options to pass to the viewer
     * @param options.container the container to attach to
     * @param options.width the width of the viewer
     * @param options.height the height of the viewer
     * @param options.moddleExtensions extension packages to provide
     * @param options.modules a list of modules to override the default modules
     * @param options.additionalModules a list of modules to use with the default modules
     */
    constructor(options?: {
        container?: HTMLElement|string,
        width?: string|number,
        heigt?: string|number,
        moddleExtensions?: object,
        modules?: any[],
        additionalModules?: any[],
    }) {
        this.legacyModeler = new LegacyModeler(options);
    }

    /**
     * @see {LegacyViewer.importXML}
     * 
     * @param {String} xml the CMMN 1.1 xml
     */
    importXML(xml: string): Promise<void> {
        return new Promise((resolve, reject) => {
            /** @ts-expect-error */
            this.legacyModeler.importXML(xml, (error) => error
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
            /** @ts-expect-error */
            this.legacyModeler.saveXML(options, (error, result) => error
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
            /** @ts-expect-error */
            this.legacyModeler.saveSVG((error, result) => error
                ? reject(error)
                : resolve(result)
            )
        })
    }
}
