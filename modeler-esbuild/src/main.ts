import { CmmnModeler } from "./cmmn";

/** @ts-expect-error */
import { saveAs } from 'file-saver';

/** @ts-expect-error */
import newDiagramXML from "./resources/newDiagram.cmmn";

const cmmnModeler = new CmmnModeler({
  container: "#js-canvas",
});

const openDiagram = async (xml: string) => {
  await cmmnModeler.importXML(xml)
}

openDiagram(newDiagramXML);

const downloadCmmnLink = document.getElementById("js-download-diagram")!;
const downloadSvgLink = document.getElementById("js-download-svg")!;

downloadCmmnLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const { xml } = await cmmnModeler.saveXML({ format: true })
  saveAs(new Blob([xml], {type:"application/cmmn11-xml;charset=UTF-8"}), "diagram.cmmn")
});

downloadSvgLink.addEventListener("click", async (e) => {
  e.preventDefault();
  const { svg } = await cmmnModeler.saveSVG()
  saveAs(new Blob([svg], {type:"image/svg+xml;charset=utf-8"}), "diagram.svg")
});
