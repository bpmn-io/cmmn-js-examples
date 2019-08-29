# cmmn-js pre-packaged example

This example showcases how to use the pre-packaged version(s) of [cmmn-js](https://github.com/bpmn-io/cmmn-js).


## About

We provide pre-packaged versions of our toolkit via [unpkg](https://unpkg.com/cmmn-js/dist/).

This example shows how to embed these resources to integrate a CMMN viewer or editor
into a website.


## Embed pre-packaged Assets

Download or simply include the relevant dependencies into your website:

#### Viewer

```html
<script src="https://unpkg.com/cmmn-js@0.19.2/dist/cmmn-viewer.development.js"></script>
```

Download the complete [viewer example](https://cdn.staticaly.com/gh/bpmn-io/cmmn-js-examples/master/starter/viewer.html).

#### Modeler

```html
<!-- necessary stylesheets -->
<link rel="stylesheet" href="https://unpkg.com/cmmn-js@0.19.2/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="https://unpkg.com/cmmn-js@0.19.2/dist/assets/cmmn-font/css/cmmn.css" />

<script src="https://unpkg.com/cmmn-js@0.19.2/dist/cmmn-modeler.development.js"></script>
```

Download the complete [modeler example](https://cdn.staticaly.com/gh/bpmn-io/cmmn-js-examples/master/starter/modeler.html).


## Use the Library

The library is bundled as an UMD bundle and binds itself to the global `CmmnJS`
variable.

```javascript
var cmmnJS = new CmmnJS({
  container: '#canvas'
});

cmmnJS.importXML(someDiagram, function(err) {

  if (!err) {
    console.log('success!');
    viewer.get('canvas').zoom('fit-viewport');
  } else {
    console.log('something went wrong:', err);
  }
});
```

## License

MIT
