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
/******/ 		__webpack_require__.p = "";
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
    console.log(day);
    
    let newTime;
    if (weatherIndex != 0){
        newTime = new Date(weatherArray[weatherIndex].dt_txt);
        newTime.setHours(newTime.getHours() + offset);
        day.setHours(day.getHours() + offset);
    } else {
        newTime = new Date(Date(weatherArray[0]));
        newTime.setHours(newTime.getUTCHours() + offset);
        day.setHours(day.getUTCHours() + offset);
    }
    console.log(day);
    day = day.getDay();
    updateDetails(weatherArray[weatherIndex], newTime);

    let startIndex, newDay;
    for (startIndex = weatherIndex; startIndex > 0; startIndex--){
        newDay = new Date(weatherArray[startIndex].dt_txt);
        newDay.setHours(newDay.getHours() + offset);
        console.log(newDay);
        if (day != newDay.getDay()){
            startIndex++;
            break;
        }
    }
    if (startIndex == 0 && weatherIndex != 0) startIndex = 1;

    for (startIndex; startIndex <= 40; startIndex++){
        
        if (startIndex != 0){
            newTime = new Date(weatherArray[startIndex].dt_txt);
            newTime.setHours(newTime.getHours() + offset);
        } else {
            newTime = new Date(Date(weatherArray[0]));
            newTime.setHours(newTime.getUTCHours() + offset);
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
    newDate.setHours(newDate.getUTCHours() + offset);
    let oldDay = newDate.getDay();
    
    updateForecastDay(forecastDiv.children[0], newDate, weatherArray[0], 0);
    
    for (let i = 1, k = 0; i < 5; i++){     
        console.log(oldDay);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBLCtEQUErRCxvQkFBb0IsT0FBTyxvQkFBb0I7QUFDOUc7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLGtCQUFrQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIip7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAzNTBweCkgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHggMmZyIDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDE2NiwgMjA3KTtcXG59XFxuXFxuI2hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ3JpZC1yb3c6IDEvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59XFxuXFxuI3RvcExlZnR7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4jc2VhcmNoRGl2e1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNzZWFyY2hEaXYgaW5wdXR7XFxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgcGFkZGluZzogMTBweCAxMnB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xcbiAgICB3aWR0aDogY2FsYyhtaW4oNTAwcHgsIDQwdncpKTtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcXG59XFxuXFxuI3NlYXJjaERpdiBidXR0b257XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMzJweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzMnB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNzZWFyY2hEaXYgYnV0dG9uIGltZ3tcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG59XFxuXFxuI2xvY2F0aW9uVGV4dCwgI3RpbWVUZXh0e1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbiN0aW1lVGV4dHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcblxcbiNkZXRhaWxzRGl2e1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogbWluKDN2dywgMjBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDE3NXB4O1xcbn1cXG5cXG4jZGV0YWlsc0RpdiAjZGV0YWlsc3tcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbiNkZXRhaWxzRGl2ICNmb2N1c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2JpZ0ljb257XFxuICAgIHdpZHRoOiBtaW4oMjAwcHgsIDE1dncpO1xcbn1cXG5cXG4jZGV0YWlsc0RpdiAjaWNvbkRlc2NyaXB0aW9ue1xcbiAgICB3aWR0aDogbWluKDIwMHB4LCAxNXZ3KTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5cXG4jZGF5RGlzcGxheXtcXG4gICAgbWluLWhlaWdodDogMjAwcHg7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgbWF4LXdpZHRoOiAzNTBweDtcXG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDMwMHB4KTtcXG59XFxuXFxuI2RheURpc3BsYXkgPiBkaXZ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2RheURpc3BsYXkgPiBkaXY6aG92ZXJ7XFxuICAgIHpvb206IDEuMjtcXG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XFxufVxcblxcblxcbiNkYXlEaXNwbGF5IGRpdiBpbWd7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkYXlEaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhcntcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbiNkYXlEaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10cmFja3tcXG4gICAgYmFja2dyb3VuZDogcmdiKDQyLCAxNjYsIDIwNyk7XFxufVxcblxcbiNkYXlEaXNwbGF5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXG4gICAgYmFja2dyb3VuZDogcmdiKDYwLCA2MCwgNzUpO1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MCwgNDAsIDUwKTtcXG59XFxuXFxuXFxuI2ZvcmVjYXN0RGl2e1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2ID4gZGl2e1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMTYwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxufVxcblxcbiNmb3JlY2FzdERpdiBkaXYgaW1nIHtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG59XFxuXFxuI2ZvcmVjYXN0RGl2ID4gZGl2OmhvdmVye1xcbiAgICB6b29tOiAxLjI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcXG59XFxuXFxuLmhvdXJseURpc3BsYXl7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNzVweCAxMDBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmhvdXJseURpc3BsYXlUZW1we1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5ob3VybHlEaXNwbGF5VGltZXtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGVuZFxcbn1cXG5cXG4uaG91cmx5RGlzcGxheUljb257XFxuICAgIGdyaWQtcm93OiAxIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osK0NBQStDO0lBQy9DLGtDQUFrQztJQUNsQyxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3QixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7QUFDckI7OztBQUdBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQjtBQUNKOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG59XFxuXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMzUwcHgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4IDJmciAyMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxNjYsIDIwNyk7XFxufVxcblxcbiNoZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdyaWQtcm93OiAxLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufVxcblxcbiN0b3BMZWZ0e1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuI3NlYXJjaERpdntcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jc2VhcmNoRGl2IGlucHV0e1xcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMTJweDtcXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcXG4gICAgd2lkdGg6IGNhbGMobWluKDUwMHB4LCA0MHZ3KSk7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XFxufVxcblxcbiNzZWFyY2hEaXYgYnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogLTMycHg7XFxuICAgIG1hcmdpbi1yaWdodDogMzJweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogLTRweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jc2VhcmNoRGl2IGJ1dHRvbiBpbWd7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbiNsb2NhdGlvblRleHQsICN0aW1lVGV4dHtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xcbn1cXG5cXG4jdGltZVRleHR7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcbn1cXG5cXG4jZGV0YWlsc0RpdntcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IG1pbigzdncsIDIwcHgpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxNzVweDtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2RldGFpbHN7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4jZGV0YWlsc0RpdiAjZm9jdXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbiNkZXRhaWxzRGl2ICNiaWdJY29ue1xcbiAgICB3aWR0aDogbWluKDIwMHB4LCAxNXZ3KTtcXG59XFxuXFxuI2RldGFpbHNEaXYgI2ljb25EZXNjcmlwdGlvbntcXG4gICAgd2lkdGg6IG1pbigyMDBweCwgMTV2dyk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuXFxuI2RheURpc3BsYXl7XFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIG1heC13aWR0aDogMzUwcHg7XFxuICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAzMDBweCk7XFxufVxcblxcbiNkYXlEaXNwbGF5ID4gZGl2e1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNkYXlEaXNwbGF5ID4gZGl2OmhvdmVye1xcbiAgICB6b29tOiAxLjI7XFxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xcbn1cXG5cXG5cXG4jZGF5RGlzcGxheSBkaXYgaW1ne1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXJ7XFxuICAgIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2t7XFxuICAgIGJhY2tncm91bmQ6IHJnYig0MiwgMTY2LCAyMDcpO1xcbn1cXG5cXG4jZGF5RGlzcGxheTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJ7XFxuICAgIGJhY2tncm91bmQ6IHJnYig2MCwgNjAsIDc1KTtcXG59XFxuXFxuI2RheURpc3BsYXk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNDAsIDQwLCA1MCk7XFxufVxcblxcblxcbiNmb3JlY2FzdERpdntcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgIGhlaWdodDogMjQwcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNmb3JlY2FzdERpdiA+IGRpdntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbn1cXG5cXG4jZm9yZWNhc3REaXYgZGl2IGltZyB7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbiNmb3JlY2FzdERpdiA+IGRpdjpob3ZlcntcXG4gICAgem9vbTogMS4yO1xcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogLTEwcHg7XFxufVxcblxcbi5ob3VybHlEaXNwbGF5e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1cHggMTAwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ob3VybHlEaXNwbGF5VGVtcHtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbn1cXG5cXG4uaG91cmx5RGlzcGxheVRpbWV7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBlbmRcXG59XFxuXFxuLmhvdXJseURpc3BsYXlJY29ue1xcbiAgICBncmlkLXJvdzogMSAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmltcG9ydCBpMDFkIGZyb20gXCIuL2ljb25zLzAxZEAyeC5wbmdcIjtcbmltcG9ydCBpMDFuIGZyb20gXCIuL2ljb25zLzAxbkAyeC5wbmdcIjtcbmltcG9ydCBpMDJkIGZyb20gXCIuL2ljb25zLzAyZEAyeC5wbmdcIjtcbmltcG9ydCBpMDJuIGZyb20gXCIuL2ljb25zLzAybkAyeC5wbmdcIjtcbmltcG9ydCBpMDNkIGZyb20gXCIuL2ljb25zLzAzZEAyeC5wbmdcIjtcbmltcG9ydCBpMDNuIGZyb20gXCIuL2ljb25zLzAzbkAyeC5wbmdcIjtcbmltcG9ydCBpMDRkIGZyb20gXCIuL2ljb25zLzA0ZEAyeC5wbmdcIjtcbmltcG9ydCBpMDRuIGZyb20gXCIuL2ljb25zLzA0bkAyeC5wbmdcIjtcbmltcG9ydCBpMDlkIGZyb20gXCIuL2ljb25zLzA5ZEAyeC5wbmdcIjtcbmltcG9ydCBpMDluIGZyb20gXCIuL2ljb25zLzA5bkAyeC5wbmdcIjtcbmltcG9ydCBpMTBkIGZyb20gXCIuL2ljb25zLzEwZEAyeC5wbmdcIjtcbmltcG9ydCBpMTBuIGZyb20gXCIuL2ljb25zLzEwbkAyeC5wbmdcIjtcbmltcG9ydCBpMTFkIGZyb20gXCIuL2ljb25zLzExZEAyeC5wbmdcIjtcbmltcG9ydCBpMTFuIGZyb20gXCIuL2ljb25zLzExbkAyeC5wbmdcIjtcbmltcG9ydCBpMTNkIGZyb20gXCIuL2ljb25zLzEzZEAyeC5wbmdcIjtcbmltcG9ydCBpMTNuIGZyb20gXCIuL2ljb25zLzEzbkAyeC5wbmdcIjtcbmltcG9ydCBpNTBkIGZyb20gXCIuL2ljb25zLzUwZEAyeC5wbmdcIjtcbmltcG9ydCBpNTBuIGZyb20gXCIuL2ljb25zLzUwbkAyeC5wbmdcIjtcblxuY29uc3Qgd2Vla2RheXMgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J107XG5cbmNvbnN0IGljb25NYXAgPSB7aTAxZCwgaTAxbiwgaTAyZCwgaTAybiwgaTAzZCwgaTAzbiwgaTA0ZCwgaTA0biwgaTA5ZCwgaTA5biwgaTEwZCwgaTEwbiwgaTExZCwgaTExbiwgaTEzZCwgaTEzbiwgaTUwZCwgaTUwbn07XG5cbmNvbnN0IHdlYXRoZXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXJCdXR0b25cIik7XG5jb25zdCB3ZWF0aGVyU2VhcmNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyU2VhcmNoXCIpO1xuXG5jb25zdCBmb3JlY2FzdERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9yZWNhc3REaXZcIik7XG5jb25zdCBkYXlEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXlEaXNwbGF5XCIpO1xuY29uc3QgZGV0YWlsc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV0YWlsc0RpdlwiKTtcbmNvbnN0IHRpbWVUZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aW1lVGV4dFwiKTtcblxuY29uc3QgaHVtaWRpdHlUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNodW1pZGl0eSAuZGV0YWlsSW5mb1wiKTtcbmNvbnN0IHdpbmRUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3aW5kIC5kZXRhaWxJbmZvXCIpO1xuY29uc3QgZmVlbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2ZlZWwgLmRldGFpbEluZm9cIik7XG5jb25zdCBwcmVzc3VyZVRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXNzdXJlIC5kZXRhaWxJbmZvXCIpO1xuY29uc3QgYmlnSWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmlnSWNvblwiKTtcbmNvbnN0IGljb25EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaWNvbkRlc2NyaXB0aW9uXCIpO1xuXG5cbmxldCB3ZWF0aGVyQXJyYXkgPSBudWxsO1xuXG53ZWF0aGVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWFyY2hXZWF0aGVyKTtcbndlYXRoZXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzZWFyY2hXZWF0aGVyKCk7XG4gICAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHNlYXJjaFdlYXRoZXIoKSB7XG4gICAgYXdhaXQgZ2V0V2VhdGhlckRhdGEod2VhdGhlclNlYXJjaC52YWx1ZSk7XG4gICAgY29uc29sZS5sb2cod2VhdGhlckFycmF5KTtcbiAgICBpZiAod2VhdGhlckFycmF5KXtcbiAgICAgICAgdXBkYXRlTG9jYXRpb24oKTtcbiAgICAgICAgdXBkYXRlRGF5KDApO1xuICAgICAgICB1cGRhdGVGb3JlY2FzdCgpO1xuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24pe1xuICAgIGNvbnN0IGRhaWx5RGF0YSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JkFQUElEPTAxNDk2OTMyZTk5OTdkZGZlY2VmOWNkYmYyODdlNDJkYFxuICAgICAgICApLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2RhaWx5RGF0YS5jb29yZC5sYXR9Jmxvbj0ke2RhaWx5RGF0YS5jb29yZC5sb259JkFQUElEPTAxNDk2OTMyZTk5OTdkZGZlY2VmOWNkYmYyODdlNDJkYFxuICAgICAgICApLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG5cbiAgICB3ZWF0aGVyQXJyYXkgPSBbZGFpbHlEYXRhLCAuLi5mb3JlY2FzdERhdGEubGlzdF07XG59XG5cbmNvbnN0IHVwZGF0ZUxvY2F0aW9uID0gKCkgPT4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvblRleHRcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyQXJyYXlbMF0ubmFtZTtcblxuXG5cbmZ1bmN0aW9uIHVwZGF0ZURheSh3ZWF0aGVySW5kZXgpe1xuICAgIGRheURpc3BsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBkZXRhaWxzRGl2LnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBsZXQgb2Zmc2V0ID0gd2VhdGhlckFycmF5WzBdLnRpbWV6b25lLzM2MDA7XG4gICAgd2hpbGUgKGRheURpc3BsYXkuaGFzQ2hpbGROb2RlcygpKSBkYXlEaXNwbGF5LnJlbW92ZUNoaWxkKGRheURpc3BsYXkubGFzdENoaWxkKTtcbiAgICBsZXQgZGF5O1xuICAgIGlmICh3ZWF0aGVySW5kZXggPT0gMCkgZGF5ID0gbmV3IERhdGUoRGF0ZSh3ZWF0aGVyQXJyYXlbMF0uZHQpKTtcbiAgICBlbHNlIGRheSA9IG5ldyBEYXRlKHdlYXRoZXJBcnJheVt3ZWF0aGVySW5kZXhdLmR0X3R4dCk7XG4gICAgY29uc29sZS5sb2coZGF5KTtcbiAgICBcbiAgICBsZXQgbmV3VGltZTtcbiAgICBpZiAod2VhdGhlckluZGV4ICE9IDApe1xuICAgICAgICBuZXdUaW1lID0gbmV3IERhdGUod2VhdGhlckFycmF5W3dlYXRoZXJJbmRleF0uZHRfdHh0KTtcbiAgICAgICAgbmV3VGltZS5zZXRIb3VycyhuZXdUaW1lLmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICBkYXkuc2V0SG91cnMoZGF5LmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RpbWUgPSBuZXcgRGF0ZShEYXRlKHdlYXRoZXJBcnJheVswXSkpO1xuICAgICAgICBuZXdUaW1lLnNldEhvdXJzKG5ld1RpbWUuZ2V0VVRDSG91cnMoKSArIG9mZnNldCk7XG4gICAgICAgIGRheS5zZXRIb3VycyhkYXkuZ2V0VVRDSG91cnMoKSArIG9mZnNldCk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGRheSk7XG4gICAgZGF5ID0gZGF5LmdldERheSgpO1xuICAgIHVwZGF0ZURldGFpbHMod2VhdGhlckFycmF5W3dlYXRoZXJJbmRleF0sIG5ld1RpbWUpO1xuXG4gICAgbGV0IHN0YXJ0SW5kZXgsIG5ld0RheTtcbiAgICBmb3IgKHN0YXJ0SW5kZXggPSB3ZWF0aGVySW5kZXg7IHN0YXJ0SW5kZXggPiAwOyBzdGFydEluZGV4LS0pe1xuICAgICAgICBuZXdEYXkgPSBuZXcgRGF0ZSh3ZWF0aGVyQXJyYXlbc3RhcnRJbmRleF0uZHRfdHh0KTtcbiAgICAgICAgbmV3RGF5LnNldEhvdXJzKG5ld0RheS5nZXRIb3VycygpICsgb2Zmc2V0KTtcbiAgICAgICAgY29uc29sZS5sb2cobmV3RGF5KTtcbiAgICAgICAgaWYgKGRheSAhPSBuZXdEYXkuZ2V0RGF5KCkpe1xuICAgICAgICAgICAgc3RhcnRJbmRleCsrO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHN0YXJ0SW5kZXggPT0gMCAmJiB3ZWF0aGVySW5kZXggIT0gMCkgc3RhcnRJbmRleCA9IDE7XG5cbiAgICBmb3IgKHN0YXJ0SW5kZXg7IHN0YXJ0SW5kZXggPD0gNDA7IHN0YXJ0SW5kZXgrKyl7XG4gICAgICAgIFxuICAgICAgICBpZiAoc3RhcnRJbmRleCAhPSAwKXtcbiAgICAgICAgICAgIG5ld1RpbWUgPSBuZXcgRGF0ZSh3ZWF0aGVyQXJyYXlbc3RhcnRJbmRleF0uZHRfdHh0KTtcbiAgICAgICAgICAgIG5ld1RpbWUuc2V0SG91cnMobmV3VGltZS5nZXRIb3VycygpICsgb2Zmc2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1RpbWUgPSBuZXcgRGF0ZShEYXRlKHdlYXRoZXJBcnJheVswXSkpO1xuICAgICAgICAgICAgbmV3VGltZS5zZXRIb3VycyhuZXdUaW1lLmdldFVUQ0hvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdUaW1lLmdldERheSgpICE9IGRheSAmJiB3ZWF0aGVySW5kZXggIT0gMCkgYnJlYWs7XG4gICAgICAgIGlmICh3ZWF0aGVySW5kZXggPT0gMCAmJiBzdGFydEluZGV4ID09IDkpIGJyZWFrO1xuXG4gICAgICAgIHVwZGF0ZURheVBlcmlvZCh3ZWF0aGVyQXJyYXlbc3RhcnRJbmRleF0sIG5ld1RpbWUpXG5cbiAgICB9XG4gICAgZGF5RGlzcGxheS5zY3JvbGxUbygwLDApO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVEYXlQZXJpb2Qod2VhdGhlciwgbmV3VGltZSl7XG4gICAgbGV0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IGhvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uTWFwW1wiaVwiICsgd2VhdGhlci53ZWF0aGVyWzBdLmljb25dO1xuICAgIGlmICgobmV3VGltZS5nZXRIb3VycygpKSUyNCA+PSAxMCkgaG91ci50ZXh0Q29udGVudCA9IChuZXdUaW1lLmdldEhvdXJzKCkpJTI0ICsgXCI6MDBcIjtcbiAgICBlbHNlIGhvdXIudGV4dENvbnRlbnQgPSBcIjBcIiArIChuZXdUaW1lLmdldEhvdXJzKCkpJTI0ICsgXCI6MDBcIjtcbiAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCgod2VhdGhlci5tYWluLnRlbXAgLTI3MykqMTApLzEwICsgXCIgwrBDXCI7XG4gICAgaG91ci5jbGFzc0xpc3QuYWRkKFwiaG91cmx5RGlzcGxheVRpbWVcIik7XG4gICAgd2VhdGhlckljb24uY2xhc3NMaXN0LmFkZChcImhvdXJseURpc3BsYXlJY29uXCIpO1xuICAgIHRlbXBEaXYuY2xhc3NMaXN0LmFkZChcImhvdXJseURpc3BsYXlUZW1wXCIpO1xuXG5cbiAgICBsZXQgaG91cmx5RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG91cmx5RGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaG91cmx5RGlzcGxheVwiKTtcblxuICAgIGhvdXJseURpc3BsYXkuYXBwZW5kQ2hpbGQoaG91cik7XG4gICAgaG91cmx5RGlzcGxheS5hcHBlbmRDaGlsZCh3ZWF0aGVySWNvbik7XG4gICAgaG91cmx5RGlzcGxheS5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcblxuICAgIGRheURpc3BsYXkuYXBwZW5kQ2hpbGQoaG91cmx5RGlzcGxheSk7XG4gICAgaG91cmx5RGlzcGxheS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdXBkYXRlRGV0YWlscyh3ZWF0aGVyLCBuZXdUaW1lKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0KCkge1xuICAgIGxldCBvZmZzZXQgPSB3ZWF0aGVyQXJyYXlbMF0udGltZXpvbmUvMzYwMDtcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKERhdGUod2VhdGhlckFycmF5WzBdLmR0KSk7XG4gICAgbmV3RGF0ZS5zZXRIb3VycyhuZXdEYXRlLmdldFVUQ0hvdXJzKCkgKyBvZmZzZXQpO1xuICAgIGxldCBvbGREYXkgPSBuZXdEYXRlLmdldERheSgpO1xuICAgIFxuICAgIHVwZGF0ZUZvcmVjYXN0RGF5KGZvcmVjYXN0RGl2LmNoaWxkcmVuWzBdLCBuZXdEYXRlLCB3ZWF0aGVyQXJyYXlbMF0sIDApO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAxLCBrID0gMDsgaSA8IDU7IGkrKyl7ICAgICBcbiAgICAgICAgY29uc29sZS5sb2cob2xkRGF5KTtcbiAgICAgICAgd2hpbGUgKChuZXdEYXRlLmdldERheSgpID09IG9sZERheSB8fCBuZXdEYXRlLmdldEhvdXJzKCkgPCAxMikgJiYgayA8IDQwKXtcbiAgICAgICAgICAgIG5ld0RhdGUgPSBuZXcgRGF0ZSh3ZWF0aGVyQXJyYXlbKytrXS5kdF90eHQpO1xuICAgICAgICAgICAgbmV3RGF0ZS5zZXRIb3VycyhuZXdEYXRlLmdldEhvdXJzKCkgKyBvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBjb2xkZXN0ID0gMTAwMDtcbiAgICAgICAgZm9yIChsZXQgaiA9IGstNDsgaiA8IGsrNDsgaisrKXtcbiAgICAgICAgICAgIGlmIChqIDwgMCkgaiA9IDA7XG4gICAgICAgICAgICBpZiAoaiA+IDQwKSBicmVhaztcbiAgICAgICAgICAgIGlmICh3ZWF0aGVyQXJyYXlbal0ubWFpbi50ZW1wIDwgY29sZGVzdCkgY29sZGVzdCA9IHdlYXRoZXJBcnJheVtqXS5tYWluLnRlbXA7XG4gICAgICAgIH1cbiAgICAgICAgdXBkYXRlRm9yZWNhc3REYXkoZm9yZWNhc3REaXYuY2hpbGRyZW5baV0sIG5ld0RhdGUsIHdlYXRoZXJBcnJheVtrXSwgaywgY29sZGVzdCk7XG4gICAgICAgIG9sZERheSA9IChvbGREYXkgKzEgKSU3O1xuICAgIH1cblxuICAgIGZvciAobGV0IGVsZW0gb2YgZm9yZWNhc3REaXYuY2hpbGRyZW4pe1xuICAgICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdXBkYXRlRGF5KGVsZW0udGltZWluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbmZ1bmN0aW9uIHVwZGF0ZUZvcmVjYXN0RGF5KGRheURpdiwgdGltZVN0YW1wLCB3ZWF0aGVyLCBpbmRleCwgY29sZGVzdCl7XG4gICAgd2hpbGUgKGRheURpdi5oYXNDaGlsZE5vZGVzKCkpIGRheURpdi5yZW1vdmVDaGlsZChkYXlEaXYubGFzdENoaWxkKTtcbiAgICBkYXlEaXYudGltZWluZGV4ID0gaW5kZXg7XG4gICAgXG4gICAgbGV0IHdlYXRoZXJJY29uID0gbmV3IEltYWdlKCk7XG4gICAgbGV0IHdlZWtEYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGxldCB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgY29sZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICB3ZWF0aGVySWNvbi5zcmMgPSBpY29uTWFwW1wiaVwiICsgd2VhdGhlci53ZWF0aGVyWzBdLmljb25dO1xuICAgIHdlZWtEYXkudGV4dENvbnRlbnQgPSBjb2xkZXN0ID09IG51bGwgPyBcIk5vd1wiIDogd2Vla2RheXNbdGltZVN0YW1wLmdldERheSgpXTtcbiAgICB0ZW1wRGl2LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCgxMCood2VhdGhlci5tYWluLnRlbXAgLSAyNzMpKS8xMCArIFwiIMKwQ1wiO1xuICAgIGlmIChjb2xkZXN0KSBjb2xkRGl2LnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCgoY29sZGVzdCAtMjczKSoxMCkvMTAgKyBcIiDCsENcIjtcblxuICAgIGRheURpdi5hcHBlbmRDaGlsZCh3ZWVrRGF5KTtcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQod2VhdGhlckljb24pO1xuICAgIGRheURpdi5hcHBlbmRDaGlsZCh0ZW1wRGl2KTtcbiAgICBkYXlEaXYuYXBwZW5kQ2hpbGQoY29sZERpdik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZURldGFpbHMod2VhdGhlciwgdGltZSl7XG4gICAgbGV0IHRpbWVIb3VycyA9IHRpbWUuZ2V0SG91cnMoKSA+PSAxMCA/IHRpbWUuZ2V0SG91cnMoKSA6IFwiMFwiICsgdGltZS5nZXRIb3VycygpO1xuICAgIHRpbWVUZXh0LnRleHRDb250ZW50ID0gIHdlZWtkYXlzW3RpbWUuZ2V0RGF5KCldICsgXCIgXCIgKyB0aW1lSG91cnMgKyBcIjowMFwiO1xuICAgIGh1bWlkaXR5VGV4dC50ZXh0Q29udGVudCA9IFwiIFwiICsgd2VhdGhlci5tYWluLmh1bWlkaXR5ICsgXCIlXCI7XG4gICAgcHJlc3N1cmVUZXh0LnRleHRDb250ZW50ID0gXCIgXCIgKyB3ZWF0aGVyLm1haW4ucHJlc3N1cmU7XG4gICAgd2luZFRleHQudGV4dENvbnRlbnQgPSBcIiBcIiArIHdlYXRoZXIud2luZC5zcGVlZCArIFwiIG0vc1wiO1xuICAgIGZlZWxUZXh0LnRleHRDb250ZW50ID0gXCIgXCIgKyBNYXRoLnJvdW5kKCh3ZWF0aGVyLm1haW4uZmVlbHNfbGlrZSAtMjczKSoxMCkvMTAgK1wiIMKwQ1wiO1xuICAgIGJpZ0ljb24uc3JjID0gaWNvbk1hcFtcImlcIiArIHdlYXRoZXIud2VhdGhlclswXS5pY29uXTtcbiAgICBpY29uRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=