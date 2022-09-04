import CmmnModeler from "cmmn-js/lib/Modeler";

import { saveAs } from 'file-saver';

import newDiagramXML from "./resources/newDiagram.cmmn";

const cmmnModeler = new CmmnModeler({
  container: "#js-canvas",
});

/**
 * @param {(callback: ((error: Error|null, result: string|null) => void)) => void} functionWithCallback 
 */
const pomisify = (functionWithCallback) => {
  return new Promise((resolve, reject) => {
    functionWithCallback((error, result) => {
      if (error) {
        reject(error)
      }
      resolve(result)
    })
  })
}

const openDiagram = (xml) => {
  return pomisify((done) => cmmnModeler.importXML(xml, done))
}

openDiagram(newDiagramXML);

const downloadCmmnLink = document.getElementById("js-download-diagram");
const downloadSvgLink = document.getElementById("js-download-svg");

downloadCmmnLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const cmmnContents = await pomisify((done) => cmmnModeler.saveXML({ format: true }, done))
  saveAs(new Blob([cmmnContents], {type:"application/cmmn11-xml;charset=UTF-8"}), "diagram.cmmn")
});

downloadSvgLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const svgContents = await pomisify((done) => cmmnModeler.saveSVG(done))
  saveAs(new Blob([svgContents], {type:"image/svg+xml;charset=utf-8"}), "diagram.svg")
});
