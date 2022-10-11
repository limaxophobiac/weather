/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*{\n    margin: 0px;\n    box-sizing: border-box;\n    padding: 0px;\n    font-size: 1.1rem;\n}\n\nbody{\n    height: 100vh;\n    display: grid;\n    padding: 5px;\n    grid-template-columns: minmax(250px, 350px) 1fr;\n    grid-template-rows: 50px 2fr 200px;\n    background-color: rgb(42, 166, 207);\n}\n\n#header{\n    display: flex;\n    grid-row: 1/ 2;\n    grid-column: 1 / 3;\n}\n\n#topLeft{\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n#searchDiv{\n    height: 30px;\n    display: flex;\n    align-items: center;\n}\n\n#searchDiv input{\n    margin-left: 5px;\n    height: 30px;\n    padding: 10px 12px;\n    padding-right: 32px;\n    border: none;\n    outline: none;\n    border-radius: 100px;\n    width: calc(min(500px, 40vw));\n    font-size: 1.2rem;\n    background-color: rgba(255, 255, 255, 0.6);\n}\n\n#searchDiv button{\n    background: transparent;\n    border: none;\n    outline: none;\n    margin-left: -32px;\n    margin-right: 32px;\n    margin-bottom: -4px;\n    cursor: pointer;\n}\n\n#searchDiv button img{\n    height: 24px;\n    object-fit: cover;\n}\n\n#locationText, #timeText{\n    line-height: 30px;\n    height: 30px;\n    font-size: 1.25rem;\n}\n\n#timeText{\n    margin-left: 20px;\n}\n\n#detailsDiv{\n    grid-row: 2 / 3;\n    width: 100%;\n    grid-column: 2 / 3;\n    justify-self: end;\n    font-size: 1.2rem;\n    padding-right: min(3vw, 20px);\n    grid-template-columns: 1fr 175px;\n}\n\n#detailsDiv #details{\n    justify-self: start;\n    align-self: start;\n}\n\n#detailsDiv #focus{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: start;\n}\n\n#detailsDiv #bigIcon{\n    width: min(200px, 15vw);\n}\n\n#detailsDiv #iconDescription{\n    width: min(200px, 15vw);\n    text-align: center;\n}\n\n\n#dayDisplay{\n    min-height: 200px;\n    overflow-y: scroll;\n    max-width: 350px;\n    max-height: calc(100vh - 300px);\n}\n\n#dayDisplay > div{\n    cursor: pointer;\n    height: 100px;\n}\n\n#dayDisplay > div:hover{\n    zoom: 1.2;\n    margin-top: -20px;\n}\n\n\n#dayDisplay div img{\n    height: 100px;\n}\n\n#dayDisplay::-webkit-scrollbar{\n    width: 20px;\n}\n\n#dayDisplay::-webkit-scrollbar-track{\n    background: rgb(42, 166, 207);\n}\n\n#dayDisplay::-webkit-scrollbar-thumb{\n    background: rgb(60, 60, 75);\n}\n\n#dayDisplay::-webkit-scrollbar-thumb:hover{\n    background: rgb(40, 40, 50);\n}\n\n\n#forecastDiv{\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-around;\n    align-self: end;\n    height: 240px;\n    overflow: hidden;\n}\n\n#forecastDiv > div{\n    text-align: center;\n    align-self: center;\n    cursor: pointer;\n    width: 160px;\n    height: 160px;\n}\n\n#forecastDiv div img {\n    height: 100px;\n}\n\n#forecastDiv > div:hover{\n    zoom: 1.2;\n    margin-left: -10px;\n    margin-right: -10px;\n}\n\n.hourlyDisplay{\n    display: grid;\n    grid-template-columns: 75px 100px;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.hourlyDisplayTemp{\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    align-self: start;\n}\n\n.hourlyDisplayTime{\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    align-self: end\n}\n\n.hourlyDisplayIcon{\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,YAAY;IACZ,+CAA+C;IAC/C,kCAAkC;IAClC,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,oBAAoB;IACpB,6BAA6B;IAC7B,iBAAiB;IACjB,0CAA0C;AAC9C;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,WAAW;IACX,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,6BAA6B;IAC7B,gCAAgC;AACpC;;AAEA;IACI,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;IACvB,kBAAkB;AACtB;;;AAGA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,+BAA+B;AACnC;;AAEA;IACI,eAAe;IACf,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,iBAAiB;AACrB;;;AAGA;IACI,aAAa;AACjB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,2BAA2B;AAC/B;;;AAGA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,6BAA6B;IAC7B,eAAe;IACf,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB;AACJ;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB","sourcesContent":["*{\n    margin: 0px;\n    box-sizing: border-box;\n    padding: 0px;\n    font-size: 1.1rem;\n}\n\nbody{\n    height: 100vh;\n    display: grid;\n    padding: 5px;\n    grid-template-columns: minmax(250px, 350px) 1fr;\n    grid-template-rows: 50px 2fr 200px;\n    background-color: rgb(42, 166, 207);\n}\n\n#header{\n    display: flex;\n    grid-row: 1/ 2;\n    grid-column: 1 / 3;\n}\n\n#topLeft{\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n}\n\n#searchDiv{\n    height: 30px;\n    display: flex;\n    align-items: center;\n}\n\n#searchDiv input{\n    margin-left: 5px;\n    height: 30px;\n    padding: 10px 12px;\n    padding-right: 32px;\n    border: none;\n    outline: none;\n    border-radius: 100px;\n    width: calc(min(500px, 40vw));\n    font-size: 1.2rem;\n    background-color: rgba(255, 255, 255, 0.6);\n}\n\n#searchDiv button{\n    background: transparent;\n    border: none;\n    outline: none;\n    margin-left: -32px;\n    margin-right: 32px;\n    margin-bottom: -4px;\n    cursor: pointer;\n}\n\n#searchDiv button img{\n    height: 24px;\n    object-fit: cover;\n}\n\n#locationText, #timeText{\n    line-height: 30px;\n    height: 30px;\n    font-size: 1.25rem;\n}\n\n#timeText{\n    margin-left: 20px;\n}\n\n#detailsDiv{\n    grid-row: 2 / 3;\n    width: 100%;\n    grid-column: 2 / 3;\n    justify-self: end;\n    font-size: 1.2rem;\n    padding-right: min(3vw, 20px);\n    grid-template-columns: 1fr 175px;\n}\n\n#detailsDiv #details{\n    justify-self: start;\n    align-self: start;\n}\n\n#detailsDiv #focus{\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    justify-content: start;\n}\n\n#detailsDiv #bigIcon{\n    width: min(200px, 15vw);\n}\n\n#detailsDiv #iconDescription{\n    width: min(200px, 15vw);\n    text-align: center;\n}\n\n\n#dayDisplay{\n    min-height: 200px;\n    overflow-y: scroll;\n    max-width: 350px;\n    max-height: calc(100vh - 300px);\n}\n\n#dayDisplay > div{\n    cursor: pointer;\n    height: 100px;\n}\n\n#dayDisplay > div:hover{\n    zoom: 1.2;\n    margin-top: -20px;\n}\n\n\n#dayDisplay div img{\n    height: 100px;\n}\n\n#dayDisplay::-webkit-scrollbar{\n    width: 20px;\n}\n\n#dayDisplay::-webkit-scrollbar-track{\n    background: rgb(42, 166, 207);\n}\n\n#dayDisplay::-webkit-scrollbar-thumb{\n    background: rgb(60, 60, 75);\n}\n\n#dayDisplay::-webkit-scrollbar-thumb:hover{\n    background: rgb(40, 40, 50);\n}\n\n\n#forecastDiv{\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: space-around;\n    align-self: end;\n    height: 240px;\n    overflow: hidden;\n}\n\n#forecastDiv > div{\n    text-align: center;\n    align-self: center;\n    cursor: pointer;\n    width: 160px;\n    height: 160px;\n}\n\n#forecastDiv div img {\n    height: 100px;\n}\n\n#forecastDiv > div:hover{\n    zoom: 1.2;\n    margin-left: -10px;\n    margin-right: -10px;\n}\n\n.hourlyDisplay{\n    display: grid;\n    grid-template-columns: 75px 100px;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.hourlyDisplayTemp{\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    align-self: start;\n}\n\n.hourlyDisplayTime{\n    grid-row: 1 / 2;\n    grid-column: 1 / 2;\n    align-self: end\n}\n\n.hourlyDisplayIcon{\n    grid-row: 1 / 3;\n    grid-column: 2 / 3;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/icons/01d@2x.png":
/*!******************************!*\
  !*** ./src/icons/01d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21d0166d556b45f9d0fb.png";

/***/ }),

/***/ "./src/icons/01n@2x.png":
/*!******************************!*\
  !*** ./src/icons/01n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dea4f0c50e2c8b7319a.png";

/***/ }),

/***/ "./src/icons/02d@2x.png":
/*!******************************!*\
  !*** ./src/icons/02d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7eb74c4e0a99eebd4f9f.png";

/***/ }),

/***/ "./src/icons/02n@2x.png":
/*!******************************!*\
  !*** ./src/icons/02n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3b2e3426e30cdc516b3d.png";

/***/ }),

/***/ "./src/icons/03d@2x.png":
/*!******************************!*\
  !*** ./src/icons/03d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "826d0111ad3d4fb9d6ef.png";

/***/ }),

/***/ "./src/icons/03n@2x.png":
/*!******************************!*\
  !*** ./src/icons/03n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "826d0111ad3d4fb9d6ef.png";

/***/ }),

/***/ "./src/icons/04d@2x.png":
/*!******************************!*\
  !*** ./src/icons/04d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6663ab6322a5eaec1d6.png";

/***/ }),

/***/ "./src/icons/04n@2x.png":
/*!******************************!*\
  !*** ./src/icons/04n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e6663ab6322a5eaec1d6.png";

/***/ }),

/***/ "./src/icons/09d@2x.png":
/*!******************************!*\
  !*** ./src/icons/09d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e78c8c56627e697f1174.png";

/***/ }),

/***/ "./src/icons/09n@2x.png":
/*!******************************!*\
  !*** ./src/icons/09n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e78c8c56627e697f1174.png";

/***/ }),

/***/ "./src/icons/10d@2x.png":
/*!******************************!*\
  !*** ./src/icons/10d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eaa6309e7e00f8a46060.png";

/***/ }),

/***/ "./src/icons/10n@2x.png":
/*!******************************!*\
  !*** ./src/icons/10n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ce578ca0edbed3e8867.png";

/***/ }),

/***/ "./src/icons/11d@2x.png":
/*!******************************!*\
  !*** ./src/icons/11d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb274bd2c737e393f248.png";

/***/ }),

/***/ "./src/icons/11n@2x.png":
/*!******************************!*\
  !*** ./src/icons/11n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb274bd2c737e393f248.png";

/***/ }),

/***/ "./src/icons/13d@2x.png":
/*!******************************!*\
  !*** ./src/icons/13d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3004cf8bc60dbb89df3.png";

/***/ }),

/***/ "./src/icons/13n@2x.png":
/*!******************************!*\
  !*** ./src/icons/13n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3004cf8bc60dbb89df3.png";

/***/ }),

/***/ "./src/icons/50d@2x.png":
/*!******************************!*\
  !*** ./src/icons/50d@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85ba87958a828a21ba4b.png";

/***/ }),

/***/ "./src/icons/50n@2x.png":
/*!******************************!*\
  !*** ./src/icons/50n@2x.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85ba87958a828a21ba4b.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _icons_01d_2x_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/01d@2x.png */ "./src/icons/01d@2x.png");
/* harmony import */ var _icons_01n_2x_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/01n@2x.png */ "./src/icons/01n@2x.png");
/* harmony import */ var _icons_02d_2x_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/02d@2x.png */ "./src/icons/02d@2x.png");
/* harmony import */ var _icons_02n_2x_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/02n@2x.png */ "./src/icons/02n@2x.png");
/* harmony import */ var _icons_03d_2x_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/03d@2x.png */ "./src/icons/03d@2x.png");
/* harmony import */ var _icons_03n_2x_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/03n@2x.png */ "./src/icons/03n@2x.png");
/* harmony import */ var _icons_04d_2x_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/04d@2x.png */ "./src/icons/04d@2x.png");
/* harmony import */ var _icons_04n_2x_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/04n@2x.png */ "./src/icons/04n@2x.png");
/* harmony import */ var _icons_09d_2x_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/09d@2x.png */ "./src/icons/09d@2x.png");
/* harmony import */ var _icons_09n_2x_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/09n@2x.png */ "./src/icons/09n@2x.png");
/* harmony import */ var _icons_10d_2x_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/10d@2x.png */ "./src/icons/10d@2x.png");
/* harmony import */ var _icons_10n_2x_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/10n@2x.png */ "./src/icons/10n@2x.png");
/* harmony import */ var _icons_11d_2x_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/11d@2x.png */ "./src/icons/11d@2x.png");
/* harmony import */ var _icons_11n_2x_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/11n@2x.png */ "./src/icons/11n@2x.png");
/* harmony import */ var _icons_13d_2x_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/13d@2x.png */ "./src/icons/13d@2x.png");
/* harmony import */ var _icons_13n_2x_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/13n@2x.png */ "./src/icons/13n@2x.png");
/* harmony import */ var _icons_50d_2x_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/50d@2x.png */ "./src/icons/50d@2x.png");
/* harmony import */ var _icons_50n_2x_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./icons/50n@2x.png */ "./src/icons/50n@2x.png");





















const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const iconMap = {i01d: _icons_01d_2x_png__WEBPACK_IMPORTED_MODULE_1__, i01n: _icons_01n_2x_png__WEBPACK_IMPORTED_MODULE_2__, i02d: _icons_02d_2x_png__WEBPACK_IMPORTED_MODULE_3__, i02n: _icons_02n_2x_png__WEBPACK_IMPORTED_MODULE_4__, i03d: _icons_03d_2x_png__WEBPACK_IMPORTED_MODULE_5__, i03n: _icons_03n_2x_png__WEBPACK_IMPORTED_MODULE_6__, i04d: _icons_04d_2x_png__WEBPACK_IMPORTED_MODULE_7__, i04n: _icons_04n_2x_png__WEBPACK_IMPORTED_MODULE_8__, i09d: _icons_09d_2x_png__WEBPACK_IMPORTED_MODULE_9__, i09n: _icons_09n_2x_png__WEBPACK_IMPORTED_MODULE_10__, i10d: _icons_10d_2x_png__WEBPACK_IMPORTED_MODULE_11__, i10n: _icons_10n_2x_png__WEBPACK_IMPORTED_MODULE_12__, i11d: _icons_11d_2x_png__WEBPACK_IMPORTED_MODULE_13__, i11n: _icons_11n_2x_png__WEBPACK_IMPORTED_MODULE_14__, i13d: _icons_13d_2x_png__WEBPACK_IMPORTED_MODULE_15__, i13n: _icons_13n_2x_png__WEBPACK_IMPORTED_MODULE_16__, i50d: _icons_50d_2x_png__WEBPACK_IMPORTED_MODULE_17__, i50n: _icons_50n_2x_png__WEBPACK_IMPORTED_MODULE_18__};

const weatherButton = document.getElementById("weatherButton");
const weatherSearch = document.getElementById("weatherSearch");

const forecastDiv = document.getElementById("forecastDiv");
const dayDisplay = document.getElementById("dayDisplay");
const detailsDiv = document.getElementById("detailsDiv");
const timeText = document.getElementById("timeText");

const humidityText = document.querySelector("#humidity .detailInfo");
const windText = document.querySelector("#wind .detailInfo");
const feelText = document.querySelector("#feel .detailInfo");
const pressureText = document.querySelector("#pressure .detailInfo");
const bigIcon = document.getElementById("bigIcon");
const iconDescription = document.getElementById("iconDescription");


let weatherArray = null;

weatherButton.addEventListener("click", searchWeather);
weatherSearch.addEventListener("keyup", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        searchWeather();
    }
});

async function searchWeather() {
    await getWeatherData(weatherSearch.value);
    console.log(weatherArray);
    if (weatherArray){
        updateLocation();
        updateDay(0);
        updateForecast();
    }
}

async function getWeatherData(location){
    const dailyData = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=01496932e9997ddfecef9cdbf287e42d`
        ).then((data) => data.json())
        .catch((err) => console.log(err));

    const forecastData = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${dailyData.coord.lat}&lon=${dailyData.coord.lon}&APPID=01496932e9997ddfecef9cdbf287e42d`
        ).then((data) => data.json())
        .catch((err) => console.log(err));

    weatherArray = [dailyData, ...forecastData.list];
}

const updateLocation = () => document.getElementById("locationText").textContent = weatherArray[0].name;



function updateDay(weatherIndex){
    dayDisplay.style.display = "block";
    detailsDiv.style.display = "grid";
    let offset = weatherArray[0].timezone/3600;
    while (dayDisplay.hasChildNodes()) dayDisplay.removeChild(dayDisplay.lastChild);
    let day;
    if (weatherIndex == 0) day = new Date(Date(weatherArray[0].dt));
    else day = new Date(weatherArray[weatherIndex].dt_txt);

    
    let newTime;
    if (weatherIndex != 0){
        newTime = new Date(weatherArray[weatherIndex].dt_txt);
        newTime.setHours(newTime.getHours() + offset);
        day.setHours(day.getHours() + offset);
    } else {
        newTime = new Date(Date(weatherArray[0]));
        newTime.setHours(newTime.getUTCHours() + offset -24);
        day.setHours(day.getUTCHours() + offset);
    }
    day = day.getDay();
    updateDetails(weatherArray[weatherIndex], newTime);

    let startIndex, newDay;
    for (startIndex = weatherIndex; startIndex > 1; startIndex--){
        newDay = new Date(weatherArray[startIndex].dt_txt);
        newDay.setHours(newDay.getHours() + offset);
        if (day != newDay.getDay()){
            startIndex++;
            break;
        }
    }

    for (startIndex; startIndex <= 40; startIndex++){
        
        if (startIndex != 0){
            newTime = new Date(weatherArray[startIndex].dt_txt);
            newTime.setHours(newTime.getHours() + offset);
        } else {
            newTime = new Date(Date(weatherArray[0]));
            newTime.setHours(newTime.getUTCHours() + offset -24);
        }
        if (newTime.getDay() != day && weatherIndex != 0) break;
        if (weatherIndex == 0 && startIndex == 9) break;

        updateDayPeriod(weatherArray[startIndex], newTime)

    }
    dayDisplay.scrollTo(0,0);
}

function updateDayPeriod(weather, newTime){
    let weatherIcon = new Image();
    let hour = document.createElement("div");
    let tempDiv = document.createElement("div");
    weatherIcon.src = iconMap["i" + weather.weather[0].icon];
    if ((newTime.getHours())%24 >= 10) hour.textContent = (newTime.getHours())%24 + ":00";
    else hour.textContent = "0" + (newTime.getHours())%24 + ":00";
    tempDiv.textContent = Math.round((weather.main.temp -273)*10)/10 + " °C";
    hour.classList.add("hourlyDisplayTime");
    weatherIcon.classList.add("hourlyDisplayIcon");
    tempDiv.classList.add("hourlyDisplayTemp");


    let hourlyDisplay = document.createElement("div");
    hourlyDisplay.classList.add("hourlyDisplay");

    hourlyDisplay.appendChild(hour);
    hourlyDisplay.appendChild(weatherIcon);
    hourlyDisplay.appendChild(tempDiv);

    dayDisplay.appendChild(hourlyDisplay);
    hourlyDisplay.addEventListener("click", () => updateDetails(weather, newTime));
}

function updateForecast() {
    let offset = weatherArray[0].timezone/3600;
    let newDate = new Date(Date(weatherArray[0].dt));
    newDate.setHours(newDate.getUTCHours() + offset -24);
    let oldDay = newDate.getDay();
    
    updateForecastDay(forecastDiv.children[0], newDate, weatherArray[0], 0);
    
    for (let i = 1, k = 0; i < 5; i++){     
        while ((newDate.getDay() == oldDay || newDate.getHours() < 12) && k < 40){
            newDate = new Date(weatherArray[++k].dt_txt);
            newDate.setHours(newDate.getHours() + offset);
        }
        let coldest = 1000;
        for (let j = k-4; j < k+4; j++){
            if (j < 0) j = 0;
            if (j > 40) break;
            if (weatherArray[j].main.temp < coldest) coldest = weatherArray[j].main.temp;
        }
        updateForecastDay(forecastDiv.children[i], newDate, weatherArray[k], k, coldest);
        oldDay = (oldDay +1 )%7;
    }

    for (let elem of forecastDiv.children){
        elem.addEventListener("click", function(){
            updateDay(elem.timeindex);
        });
    }
}


function updateForecastDay(dayDiv, timeStamp, weather, index, coldest){
    while (dayDiv.hasChildNodes()) dayDiv.removeChild(dayDiv.lastChild);
    dayDiv.timeindex = index;
    
    let weatherIcon = new Image();
    let weekDay = document.createElement("div");
    let tempDiv = document.createElement("div");
    let coldDiv = document.createElement("div");

    weatherIcon.src = iconMap["i" + weather.weather[0].icon];
    weekDay.textContent = coldest == null ? "Now" : weekdays[timeStamp.getDay()];
    tempDiv.textContent = Math.round(10*(weather.main.temp - 273))/10 + " °C";
    if (coldest) coldDiv.textContent = Math.round((coldest -273)*10)/10 + " °C";

    dayDiv.appendChild(weekDay);
    dayDiv.appendChild(weatherIcon);
    dayDiv.appendChild(tempDiv);
    dayDiv.appendChild(coldDiv);
}

function updateDetails(weather, time){
    let timeHours = time.getHours() >= 10 ? time.getHours() : "0" + time.getHours();
    timeText.textContent =  weekdays[time.getDay()] + " " + timeHours + ":00";
    humidityText.textContent = " " + weather.main.humidity + "%";
    pressureText.textContent = " " + weather.main.pressure;
    windText.textContent = " " + weather.wind.speed + " m/s";
    feelText.textContent = " " + Math.round((weather.main.feels_like -273)*10)/10 +" °C";
    bigIcon.src = iconMap["i" + weather.weather[0].icon];
    iconDescription.textContent = weather.weather[0].description;

}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMzUwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDJmciAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNjYsIDIwNyk7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtcm93OiAxLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbiN0b3BMZWZ0e1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuI3NlYXJjaERpdntcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoRGl2IGlucHV0e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgd2lkdGg6IGNhbGMobWluKDUwMHB4LCA0MHZ3KSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbiNzZWFyY2hEaXYgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoRGl2IGJ1dHRvbiBpbWd7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNsb2NhdGlvblRleHQsICN0aW1lVGV4dHtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jdGltZVRleHR7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jZGV0YWlsc0RpdntcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigzdncsIDIwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNzVweDtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2RldGFpbHN7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jZGV0YWlsc0RpdiAjZm9jdXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNkZXRhaWxzRGl2ICNiaWdJY29ue1xcbiAgICB3aWR0aDogbWluKDIwMHB4LCAxNXZ3KTtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2ljb25EZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IG1pbigyMDBweCwgMTV2dyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuI2RheURpc3BsYXl7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxufVxcblxcbiNkYXlEaXNwbGF5ID4gZGl2e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkYXlEaXNwbGF5ID4gZGl2OmhvdmVye1xcbiAgICB6b29tOiAxLjI7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG5cXG4jZGF5RGlzcGxheSBkaXYgaW1ne1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MiwgMTY2LCAyMDcpO1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgNjAsIDc1KTtcXG59XFxuXFxuI2RheURpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA1MCk7XFxufVxcblxcblxcbiNmb3JlY2FzdERpdntcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGhlaWdodDogMjQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNmb3JlY2FzdERpdiA+IGRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4jZm9yZWNhc3REaXYgZGl2IGltZyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNmb3JlY2FzdERpdiA+IGRpdjpob3ZlcntcXG4gICAgem9vbTogMS4yO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi5ob3VybHlEaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlEaXNwbGF5VGVtcHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uaG91cmx5RGlzcGxheVRpbWV7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmRcXG59XFxuXFxuLmhvdXJseURpc3BsYXlJY29ue1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsWUFBWTtJQUNaLCtDQUErQztJQUMvQyxrQ0FBa0M7SUFDbEMsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKntcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHBhZGRpbmc6IDBweDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxufVxcblxcbmJvZHl7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDM1MHB4KSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweCAyZnIgMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgMTY2LCAyMDcpO1xcbn1cXG5cXG4jaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBncmlkLXJvdzogMS8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn1cXG5cXG4jdG9wTGVmdHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxufVxcblxcbiNzZWFyY2hEaXZ7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI3NlYXJjaERpdiBpbnB1dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4IDEycHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMycHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XFxuICAgIHdpZHRoOiBjYWxjKG1pbig1MDBweCwgNDB2dykpO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcbn1cXG5cXG4jc2VhcmNoRGl2IGJ1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IC0zMnB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMycHg7XFxuICAgIG1hcmdpbi1ib3R0b206IC00cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3NlYXJjaERpdiBidXR0b24gaW1ne1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG5cXG4jbG9jYXRpb25UZXh0LCAjdGltZVRleHR7XFxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuI3RpbWVUZXh0e1xcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuXFxuI2RldGFpbHNEaXZ7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBtaW4oM3Z3LCAyMHB4KTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTc1cHg7XFxufVxcblxcbiNkZXRhaWxzRGl2ICNkZXRhaWxze1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2ZvY3Vze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG4jZGV0YWlsc0RpdiAjYmlnSWNvbntcXG4gICAgd2lkdGg6IG1pbigyMDBweCwgMTV2dyk7XFxufVxcblxcbiNkZXRhaWxzRGl2ICNpY29uRGVzY3JpcHRpb257XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsIDE1dncpO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcblxcbiNkYXlEaXNwbGF5e1xcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzAwcHgpO1xcbn1cXG5cXG4jZGF5RGlzcGxheSA+IGRpdntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGF5RGlzcGxheSA+IGRpdjpob3ZlcntcXG4gICAgem9vbTogMS4yO1xcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcXG59XFxuXFxuXFxuI2RheURpc3BsYXkgZGl2IGltZ3tcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RheURpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFye1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuI2RheURpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNre1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDIsIDE2NiwgMjA3KTtcXG59XFxuXFxuI2RheURpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNjAsIDYwLCA3NSk7XFxufVxcblxcbiNkYXlEaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogcmdiKDQwLCA0MCwgNTApO1xcbn1cXG5cXG5cXG4jZm9yZWNhc3REaXZ7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICBoZWlnaHQ6IDI0MHB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jZm9yZWNhc3REaXYgPiBkaXZ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2IGRpdiBpbWcge1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZm9yZWNhc3REaXYgPiBkaXY6aG92ZXJ7XFxuICAgIHpvb206IDEuMjtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xMHB4O1xcbn1cXG5cXG4uaG91cmx5RGlzcGxheXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NXB4IDEwMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uaG91cmx5RGlzcGxheVRlbXB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmhvdXJseURpc3BsYXlUaW1le1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYWxpZ24tc2VsZjogZW5kXFxufVxcblxcbi5ob3VybHlEaXNwbGF5SWNvbntcXG4gICAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBpMDFkIGZyb20gXCIuL2ljb25zLzAxZEAyeC5wbmdcIjtcbmltcG9ydCBpMDFuIGZyb20gXCIuL2ljb25zLzAxbkAyeC5wbmdcIjtcbmltcG9ydCBpMDJkIGZyb20gXCIuL2ljb25zLzAyZEAyeC5wbmdcIjtcbmltcG9ydCBpMDJuIGZyb20gXCIuL2ljb25zLzAybkAyeC5wbmdcIjtcbmltcG9ydCBpMDNkIGZyb20gXCIuL2ljb25zLzAzZEAyeC5wbmdcIjtcbmltcG9ydCBpMDNuIGZyb20gXCIuL2ljb25zLzAzbkAyeC5wbmdcIjtcbmltcG9ydCBpMDRkIGZyb20gXCIuL2ljb25zLzA0ZEAyeC5wbmdcIjtcbmltcG9ydCBpMDRuIGZyb20gXCIuL2ljb25zLzA0bkAyeC5wbmdcIjtcbmltcG9ydCBpMDlkIGZyb20gXCIuL2ljb25zLzA5ZEAyeC5wbmdcIjtcbmltcG9ydCBpMDluIGZyb20gXCIuL2ljb25zLzA5bkAyeC5wbmdcIjtcbmltcG9ydCBpMTBkIGZyb20gXCIuL2ljb25zLzEwZEAyeC5wbmdcIjtcbmltcG9ydCBpMTBuIGZyb20gXCIuL2ljb25zLzEwbkAyeC5wbmdcIjtcbmltcG9ydCBpMTFkIGZyb20gXCIuL2ljb25zLzExZEAyeC5wbmdcIjtcbmltcG9ydCBpMTFuIGZyb20gXCIuL2ljb25zLzExbkAyeC5wbmdcIjtcbmltcG9ydCBpMTNkIGZyb20gXCIuL2ljb25zLzEzZEAyeC5wbmdcIjtcbmltcG9ydCBpMTNuIGZyb20gXCIuL2ljb25zLzEzbkAyeC5wbmdcIjtcbmltcG9ydCBpNTBkIGZyb20gXCIuL2ljb25zLzUwZEAyeC5wbmdcIjtcbmltcG9ydCBpNTBuIGZyb20gXCIuL2ljb25zLzUwbkAyeC5wbmdcIjtcblxuY29uc3Qgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbmNvbnN0IGljb25NYXAgPSB7aTAxZCwgaTAxbiwgaTAyZCwgaTAybiwgaTAzZCwgaTAzbiwgaTA0ZCwgaTA0biwgaTA5ZCwgaTA5biwgaTEwZCwgaTEwbiwgaTExZCwgaTExbiwgaTEzZCwgaTEzbiwgaTUwZCwgaTUwbn07XG5cbmNvbnN0IHdlYXRoZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJCdXR0b25cIik7XG5jb25zdCB3ZWF0aGVyU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyU2VhcmNoXCIpO1xuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3REaXZcIik7XG5jb25zdCBkYXlEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlEaXNwbGF5XCIpO1xuY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc0RpdlwiKTtcbmNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lVGV4dFwiKTtcblxuY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1pZGl0eSAuZGV0YWlsSW5mb1wiKTtcbmNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kIC5kZXRhaWxJbmZvXCIpO1xuY29uc3QgZmVlbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWwgLmRldGFpbEluZm9cIik7XG5jb25zdCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXNzdXJlIC5kZXRhaWxJbmZvXCIpO1xuY29uc3QgYmlnSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnSWNvblwiKTtcbmNvbnN0IGljb25EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbkRlc2NyaXB0aW9uXCIpO1xuXG5cbmxldCB3ZWF0aGVyQXJyYXkgPSBudWxsO1xuXG53ZWF0aGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcbndlYXRoZXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWFyY2hXZWF0aGVyKCk7XG4gICAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gICAgYXdhaXQgZ2V0V2VhdGhlckRhdGEod2VhdGhlclNlYXJjaC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckFycmF5KTtcbiAgICBpZiAod2VhdGhlckFycmF5KXtcbiAgICAgICAgdXBkYXRlTG9jYXRpb24oKTtcbiAgICAgICAgdXBkYXRlRGF5KDApO1xuICAgICAgICB1cGRhdGVGb3JlY2FzdCgpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pe1xuICAgIGNvbnN0IGRhaWx5RGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTAxNDk2OTMyZTk5OTdkZGZlY2VmOWNkYmYyODdlNDJkYFxuICAgICAgICApLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2RhaWx5RGF0YS5jb29yZC5sYXR9Jmxvbj0ke2RhaWx5RGF0YS5jb29yZC5sb259JkFQUElEPTAxNDk2OTMyZTk5OTdkZGZlY2VmOWNkYmYyODdlNDJkYFxuICAgICAgICApLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICB3ZWF0aGVyQXJyYXkgPSBbZGFpbHlEYXRhLCAuLi5mb3JlY2FzdERhdGEubGlzdF07XG59XG5cbmNvbnN0IHVwZGF0ZUxvY2F0aW9uID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblRleHRcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyQXJyYXlbMF0ubmFtZTtcblxuXG5cbmZ1bmN0aW9uIHVwZGF0ZURheSh3ZWF0aGVySW5kZXgpe1xuICAgIGRheURpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBsZXQgb2Zmc2V0ID0gd2VhdGhlckFycmF5WzBdLnRpbWV6b25lLzM2MDA7XG4gICAgd2hpbGUgKGRheURpc3BsYXkuaGFzQ2hpbGROb2RlcygpKSBkYXlEaXNwbGF5LnJlbW92ZUNoaWxkKGRheURpc3BsYXkubGFzdENoaWxkKTtcbiAgICBsZXQgZGF5O1xuICAgIGlmICh3ZWF0aGVySW5kZXggPT0gMCkgZGF5ID0gbmV3IERhdGUoRGF0ZSh3ZWF0aGVyQXJyYXlbMF0uZHQpKTtcbiAgICBlbHNlIGRheSA9IG5ldyBEYXRlKHdlYXRoZXJBcnJheVt3ZWF0aGVySW5kZXhdLmR0X3R4dCk7XG5cbiAgICBcbiAgICBsZXQgbmV3VGltZTtcbiAgICBpZiAod2VhdGhlckluZGV4ICE9IDApe1xuICAgICAgICBuZXdUaW1lID0gbmV3IERhdGUod2VhdGhlckFycmF5W3dlYXRoZXJJbmRleF0uZHRfdHh0KTtcbiAgICAgICAgbmV3VGltZS5zZXRIb3VycyhuZXdUaW1lLmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICBkYXkuc2V0SG91cnMoZGF5LmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RpbWUgPSBuZXcgRGF0ZShEYXRlKHdlYXRoZXJBcnJheVswXSkpO1xuICAgICAgICBuZXdUaW1lLnNldEhvdXJzKG5ld1RpbWUuZ2V0VVRDSG91cnMoKSArIG9mZnNldCAtMjQpO1xuICAgICAgICBkYXkuc2V0SG91cnMoZGF5LmdldFVUQ0hvdXJzKCkgKyBvZmZzZXQpO1xuICAgIH1cbiAgICBkYXkgPSBkYXkuZ2V0RGF5KCk7XG4gICAgdXBkYXRlRGV0YWlscyh3ZWF0aGVyQXJyYXlbd2VhdGhlckluZGV4XSwgbmV3VGltZSk7XG5cbiAgICBsZXQgc3RhcnRJbmRleCwgbmV3RGF5O1xuICAgIGZvciAoc3RhcnRJbmRleCA9IHdlYXRoZXJJbmRleDsgc3RhcnRJbmRleCA+IDE7IHN0YXJ0SW5kZXgtLSl7XG4gICAgICAgIG5ld0RheSA9IG5ldyBEYXRlKHdlYXRoZXJBcnJheVtzdGFydEluZGV4XS5kdF90eHQpO1xuICAgICAgICBuZXdEYXkuc2V0SG91cnMobmV3RGF5LmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICBpZiAoZGF5ICE9IG5ld0RheS5nZXREYXkoKSl7XG4gICAgICAgICAgICBzdGFydEluZGV4Kys7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoc3RhcnRJbmRleDsgc3RhcnRJbmRleCA8PSA0MDsgc3RhcnRJbmRleCsrKXtcbiAgICAgICAgXG4gICAgICAgIGlmIChzdGFydEluZGV4ICE9IDApe1xuICAgICAgICAgICAgbmV3VGltZSA9IG5ldyBEYXRlKHdlYXRoZXJBcnJheVtzdGFydEluZGV4XS5kdF90eHQpO1xuICAgICAgICAgICAgbmV3VGltZS5zZXRIb3VycyhuZXdUaW1lLmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmV3VGltZSA9IG5ldyBEYXRlKERhdGUod2VhdGhlckFycmF5WzBdKSk7XG4gICAgICAgICAgICBuZXdUaW1lLnNldEhvdXJzKG5ld1RpbWUuZ2V0VVRDSG91cnMoKSArIG9mZnNldCAtMjQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUaW1lLmdldERheSgpICE9IGRheSAmJiB3ZWF0aGVySW5kZXggIT0gMCkgYnJlYWs7XG4gICAgICAgIGlmICh3ZWF0aGVySW5kZXggPT0gMCAmJiBzdGFydEluZGV4ID09IDkpIGJyZWFrO1xuXG4gICAgICAgIHVwZGF0ZURheVBlcmlvZCh3ZWF0aGVyQXJyYXlbc3RhcnRJbmRleF0sIG5ld1RpbWUpXG5cbiAgICB9XG4gICAgZGF5RGlzcGxheS5zY3JvbGxUbygwLDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXlQZXJpb2Qod2VhdGhlciwgbmV3VGltZSl7XG4gICAgbGV0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uTWFwW1wiaVwiICsgd2VhdGhlci53ZWF0aGVyWzBdLmljb25dO1xuICAgIGlmICgobmV3VGltZS5nZXRIb3VycygpKSUyNCA+PSAxMCkgaG91ci50ZXh0Q29udGVudCA9IChuZXdUaW1lLmdldEhvdXJzKCkpJTI0ICsgXCI6MDBcIjtcbiAgICBlbHNlIGhvdXIudGV4dENvbnRlbnQgPSBcIjBcIiArIChuZXdUaW1lLmdldEhvdXJzKCkpJTI0ICsgXCI6MDBcIjtcbiAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCgod2VhdGhlci5tYWluLnRlbXAgLTI3MykqMTApLzEwICsgXCIgwrBDXCI7XG4gICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5RGlzcGxheVRpbWVcIik7XG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseURpc3BsYXlJY29uXCIpO1xuICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcImhvdXJseURpc3BsYXlUZW1wXCIpO1xuXG5cbiAgICBsZXQgaG91cmx5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5RGlzcGxheVwiKTtcblxuICAgIGhvdXJseURpc3BsYXkuYXBwZW5kQ2hpbGQoaG91cik7XG4gICAgaG91cmx5RGlzcGxheS5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgaG91cmx5RGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcblxuICAgIGRheURpc3BsYXkuYXBwZW5kQ2hpbGQoaG91cmx5RGlzcGxheSk7XG4gICAgaG91cmx5RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlRGV0YWlscyh3ZWF0aGVyLCBuZXdUaW1lKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0KCkge1xuICAgIGxldCBvZmZzZXQgPSB3ZWF0aGVyQXJyYXlbMF0udGltZXpvbmUvMzYwMDtcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKERhdGUod2VhdGhlckFycmF5WzBdLmR0KSk7XG4gICAgbmV3RGF0ZS5zZXRIb3VycyhuZXdEYXRlLmdldFVUQ0hvdXJzKCkgKyBvZmZzZXQgLTI0KTtcbiAgICBsZXQgb2xkRGF5ID0gbmV3RGF0ZS5nZXREYXkoKTtcbiAgICBcbiAgICB1cGRhdGVGb3JlY2FzdERheShmb3JlY2FzdERpdi5jaGlsZHJlblswXSwgbmV3RGF0ZSwgd2VhdGhlckFycmF5WzBdLCAwKTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMSwgayA9IDA7IGkgPCA1OyBpKyspeyAgICAgXG4gICAgICAgIHdoaWxlICgobmV3RGF0ZS5nZXREYXkoKSA9PSBvbGREYXkgfHwgbmV3RGF0ZS5nZXRIb3VycygpIDwgMTIpICYmIGsgPCA0MCl7XG4gICAgICAgICAgICBuZXdEYXRlID0gbmV3IERhdGUod2VhdGhlckFycmF5Wysra10uZHRfdHh0KTtcbiAgICAgICAgICAgIG5ld0RhdGUuc2V0SG91cnMobmV3RGF0ZS5nZXRIb3VycygpICsgb2Zmc2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY29sZGVzdCA9IDEwMDA7XG4gICAgICAgIGZvciAobGV0IGogPSBrLTQ7IGogPCBrKzQ7IGorKyl7XG4gICAgICAgICAgICBpZiAoaiA8IDApIGogPSAwO1xuICAgICAgICAgICAgaWYgKGogPiA0MCkgYnJlYWs7XG4gICAgICAgICAgICBpZiAod2VhdGhlckFycmF5W2pdLm1haW4udGVtcCA8IGNvbGRlc3QpIGNvbGRlc3QgPSB3ZWF0aGVyQXJyYXlbal0ubWFpbi50ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHVwZGF0ZUZvcmVjYXN0RGF5KGZvcmVjYXN0RGl2LmNoaWxkcmVuW2ldLCBuZXdEYXRlLCB3ZWF0aGVyQXJyYXlba10sIGssIGNvbGRlc3QpO1xuICAgICAgICBvbGREYXkgPSAob2xkRGF5ICsxICklNztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBlbGVtIG9mIGZvcmVjYXN0RGl2LmNoaWxkcmVuKXtcbiAgICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHVwZGF0ZURheShlbGVtLnRpbWVpbmRleCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5mdW5jdGlvbiB1cGRhdGVGb3JlY2FzdERheShkYXlEaXYsIHRpbWVTdGFtcCwgd2VhdGhlciwgaW5kZXgsIGNvbGRlc3Qpe1xuICAgIHdoaWxlIChkYXlEaXYuaGFzQ2hpbGROb2RlcygpKSBkYXlEaXYucmVtb3ZlQ2hpbGQoZGF5RGl2Lmxhc3RDaGlsZCk7XG4gICAgZGF5RGl2LnRpbWVpbmRleCA9IGluZGV4O1xuICAgIFxuICAgIGxldCB3ZWF0aGVySWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGxldCB3ZWVrRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgdGVtcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGNvbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgd2VhdGhlckljb24uc3JjID0gaWNvbk1hcFtcImlcIiArIHdlYXRoZXIud2VhdGhlclswXS5pY29uXTtcbiAgICB3ZWVrRGF5LnRleHRDb250ZW50ID0gY29sZGVzdCA9PSBudWxsID8gXCJOb3dcIiA6IHdlZWtkYXlzW3RpbWVTdGFtcC5nZXREYXkoKV07XG4gICAgdGVtcERpdi50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoMTAqKHdlYXRoZXIubWFpbi50ZW1wIC0gMjczKSkvMTAgKyBcIiDCsENcIjtcbiAgICBpZiAoY29sZGVzdCkgY29sZERpdi50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoKGNvbGRlc3QgLTI3MykqMTApLzEwICsgXCIgwrBDXCI7XG5cbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQod2Vla0RheSk7XG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKHdlYXRoZXJJY29uKTtcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQodGVtcERpdik7XG4gICAgZGF5RGl2LmFwcGVuZENoaWxkKGNvbGREaXYpO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEZXRhaWxzKHdlYXRoZXIsIHRpbWUpe1xuICAgIGxldCB0aW1lSG91cnMgPSB0aW1lLmdldEhvdXJzKCkgPj0gMTAgPyB0aW1lLmdldEhvdXJzKCkgOiBcIjBcIiArIHRpbWUuZ2V0SG91cnMoKTtcbiAgICB0aW1lVGV4dC50ZXh0Q29udGVudCA9ICB3ZWVrZGF5c1t0aW1lLmdldERheSgpXSArIFwiIFwiICsgdGltZUhvdXJzICsgXCI6MDBcIjtcbiAgICBodW1pZGl0eVRleHQudGV4dENvbnRlbnQgPSBcIiBcIiArIHdlYXRoZXIubWFpbi5odW1pZGl0eSArIFwiJVwiO1xuICAgIHByZXNzdXJlVGV4dC50ZXh0Q29udGVudCA9IFwiIFwiICsgd2VhdGhlci5tYWluLnByZXNzdXJlO1xuICAgIHdpbmRUZXh0LnRleHRDb250ZW50ID0gXCIgXCIgKyB3ZWF0aGVyLndpbmQuc3BlZWQgKyBcIiBtL3NcIjtcbiAgICBmZWVsVGV4dC50ZXh0Q29udGVudCA9IFwiIFwiICsgTWF0aC5yb3VuZCgod2VhdGhlci5tYWluLmZlZWxzX2xpa2UgLTI3MykqMTApLzEwICtcIiDCsENcIjtcbiAgICBiaWdJY29uLnNyYyA9IGljb25NYXBbXCJpXCIgKyB3ZWF0aGVyLndlYXRoZXJbMF0uaWNvbl07XG4gICAgaWNvbkRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9