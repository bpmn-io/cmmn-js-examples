// we use stringify to inline an example XML document
import claimsDiagram from '../resources/claims.cmmn';


// require the viewer, make sure you added it to your project
// dependencies via npm install --save cmmn-js
var CmmnViewer = require('cmmn-js');

var viewer = new CmmnViewer({
  container: '#canvas'
});

viewer.importXML(claimsDiagram, function(err) {

  if (!err) {
    console.log('success!');
    viewer.get('canvas').zoom('fit-viewport');
  } else {
    console.log('something went wrong:', err);
  }
});