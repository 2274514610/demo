<template>
  <div id="map" ref="map"></div>
</template>

<script>
import esriLoader from "esri-loader";
export default {
  name: "HelloWorld",
  mounted() {
    const option = { url: "https://js.arcgis.com/4.3/" };
    esriLoader
      .loadModules(
        [
          "dojo/dom",
          "dojo/on",
          "dojo/_base/declare",
          "dojo/json",
          "dojo/_base/lang",
          "dojo/_base/url",
          "dojo/string",
          "dojo/dom-construct",
          "dojo/number",
          "esri/Map",
          "esri/geometry/Extent",
          "esri/layers/support/TileInfo",
          "esri/layers/support/LOD",
          "esri/geometry/SpatialReference",
          "esri/geometry/Point",
          "esri/views/MapView",
          "esri/views/SceneView",
          "esri/layers/WebTileLayer",
          "esri/layers/VectorTileLayer",
          "esri/layers/TileLayer",
          "esri/layers/MapImageLayer",
          "esri/widgets/LayerList",
          "esri/core/urlUtils",
          "esri/core/JSONSupport",
          "dojo/domReady!"
        ],
        option
      )
      .then(
        ([
          dom,
          on,
          declare,
          JSON,
          lang,
          url,
          string,
          domConstruct,
          number,
          Map,
          Extent,
          TileInfo,
          LOD,
          SpatialReference,
          Point,
          MapView,
          SceneView,
          WebTileLayer,
          VectorTileLayer,
          TileLayer,
          MapImageLayer,
          LayerList,
          urlUtils,
          JSONSupport
        ]) => {
          //创建一个OGC标准的的WMTS定制图层
          var TiandituWMTSLayer = WebTileLayer.createSubclass([JSONSupport], {
            declaredClass: "TiandituWMTSLayer",
            normalizeCtorArgs: function(b, c) {
              return "string" === typeof b
                ? lang.mixin({ urlTemplate: b }, c || {})
                : b;
            },
            getDefaults: function(b) {
              var sp = new SpatialReference({
                wkid: 4490
              });
              var c = new Extent(-180, -90, 180, 90, sp);
              return lang.mixin(this.arguments, {  //this.inherited(arguments)
                fullExtent: c,
                tileInfo: new TileInfo({
                  rows: 256,
                  cols: 256,
                  dpi: 90.71428571428571,
                  format: "PNG8",
                  compressionQuality: 0,
                  origin: new Point({ x: -180, y: 90, spatialReference: sp }),
                  spatialReference: sp,
                  lods: [
                    new LOD({
                      level: 1,
                      resolution: 0.703125,
                      scale: 295497593.05875003
                    }),
                    new LOD({
                      level: 2,
                      resolution: 0.3515625,
                      scale: 147748796.52937502
                    }),
                    new LOD({
                      level: 3,
                      resolution: 0.17578125,
                      scale: 73874398.264687508
                    }),
                    new LOD({
                      level: 4,
                      resolution: 0.087890625,
                      scale: 36937199.132343754
                    }),
                    new LOD({
                      level: 5,
                      resolution: 0.0439453125,
                      scale: 18468599.566171877
                    }),
                    new LOD({
                      level: 6,
                      resolution: 0.02197265625,
                      scale: 9234299.7830859385
                    }),
                    new LOD({
                      level: 7,
                      resolution: 0.010986328125,
                      scale: 4617149.8915429693
                    }),
                    new LOD({
                      level: 8,
                      resolution: 0.0054931640625,
                      scale: 2308574.9457714846
                    }),
                    new LOD({
                      level: 9,
                      resolution: 0.00274658203125,
                      scale: 1154287.4728857423
                    }),
                    new LOD({
                      level: 10,
                      resolution: 0.001373291015625,
                      scale: 577143.73644287116
                    }),
                    new LOD({
                      level: 11,
                      resolution: 0.0006866455078125,
                      scale: 288571.86822143558
                    }),
                    new LOD({
                      level: 12,
                      resolution: 0.00034332275390625,
                      scale: 144285.93411071779
                    }),
                    new LOD({
                      level: 13,
                      resolution: 0.000171661376953125,
                      scale: 72142.967055358895
                    }),
                    new LOD({
                      level: 14,
                      resolution: 8.58306884765625e-5,
                      scale: 36071.483527679447
                    }),
                    new LOD({
                      level: 15,
                      resolution: 4.291534423828125e-5,
                      scale: 18035.741763839724
                    }),
                    new LOD({
                      level: 16,
                      resolution: 2.1457672119140625e-5,
                      scale: 9017.8708819198619
                    }),
                    new LOD({
                      level: 17,
                      resolution: 1.0728836059570313e-5,
                      scale: 4508.9354409599309
                    }),
                    new LOD({
                      level: 18,
                      resolution: 5.3644180297851563e-6,
                      scale: 2254.4677204799655
                    }),
                    new LOD({
                      level: 19,
                      resolution: 2.6822090148925781e-6,
                      scale: 1127.2338602399827
                    }),
                    new LOD({
                      level: 20,
                      resolution: 1.3411045074462891e-6,
                      scale: 563.61693011999137
                    })
                  ]
                })
              });
            },
            properties: {
              copyright: "",
              legendEnabled: {
                json: {
                  readFrom: ["showLegend"],
                  read: function(b, c) {
                    return null != c.showLegend ? c.showLegend : !0;
                  }
                }
              },
              levelValues: {
                dependsOn: ["tileInfo"],
                get: function() {
                  var b = [];
                  if (!this.tileInfo) return null;
                  this.tileInfo.lods.forEach(function(c) {
                    b[c.level] = c.levelValue || c.level;
                  }, this);
                  return b;
                }
              },
              popupEnabled: {
                json: {
                  readFrom: ["disablePopup"],
                  read: function(b, c) {
                    return null != c.disablePopup ? !c.disablePopup : !0;
                  }
                }
              },
              spatialReference: new SpatialReference({ wkid: 4326 }),
              subDomains: null,
              tileServers: {
                value: null,
                dependsOn: ["urlTemplate", "subDomains", "urlPath"],

                get: function() {
                  var b = new url(this.urlTemplate),
                    c = b.scheme ? b.scheme + "://" : "//",
                    a = c + b.authority + "/",
                    e = this.subDomains,
                    d,
                    f = [];
                  -1 === b.authority.indexOf("{subDomain}") && f.push(a);
                  e &&
                    (0 < e.length && 1 < b.authority.split(".").length) &&
                    e.forEach(function(a, e) {
                      -1 < b.authority.indexOf("{subDomain}") &&
                        (d =
                          c + b.authority.replace(/\{subDomain\}/gi, a) + "/");
                      f.push(d);
                    }, this);
                  return (f = f.map(function(b) {
                    "/" !== b.charAt(b.length - 1) && (b += "/");
                    return b;
                  }));
                }
              },
              urlPath: {
                dependsOn: ["urlTemplate"],
                get: function() {
                  if (!this.urlTemplate) return null;
                  var b = this.urlTemplate,
                    a = new url(b);
                  return b.substring(
                    ((a.scheme ? a.scheme + "://" : "//") + a.authority + "/")
                      .length
                  );
                }
              },
              urlTemplate: null
            },
            getTileUrl: function(b, a, d) {
              b = this.levelValues[b];
              var e =
                  this.tileServers[a % this.tileServers.length] +
                  string.substitute(this.urlPath, {
                    level: b,
                    col: d,
                    row: a
                  });
                e = e
                  .replace(/\{level\}/gi, b)
                  .replace(/\{row\}/gi, a)
                  .replace(/\{col\}/gi, d);
              return urlUtils.addProxy(e);
            }
          });
          var options = {
            id: "tianDiTu_vec",
            label: "天地图矢量地图",
            visible: true,
            opacity: 1,
            style: "default",
            wmtslayer: "vec",
            tileMatrixSet: "c",
            format: "tiles",
            urlTemplate:
              "http://{subDomain}.tianditu.gov.cn/DataServer?T=vec_c&x={col}&y={row}&l={level}&tk=0ecb0b40b30f30fba48a13064f485e19",
            copyright: "TiandituWMTS",
            subDomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"]
          };
          var layer1 = new TiandituWMTSLayer(options);
          var map = new Map({
            layers: [layer1]
          });
          //矢量瓦片
          var tileLayer = new VectorTileLayer({
            title: "矢量瓦片图层",
            id: "vectorTileLayer",
            url:
            'ArcGIS Server上发布的服务地址',
            visible: true
          });
          map.add(tileLayer);

          var view = new MapView({
            container: "map",
            zoom: 14,
            center: [100.98268973979392, 21.844773808801815],
            map: map
          });
          // create a layer list widget
          var layerList = new LayerList({
            view: view
          });
          view.ui.add(layerList, "bottom-right");
        }
      );
  }
};
</script>


<style scoped>
@import url("https://js.arcgis.com/4.3/esri/css/main.css");
#map {
  width: 100%;
  height: 100vh;
}
</style>
