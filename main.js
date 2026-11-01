/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    min-height: 100vh;
    transition: background 0.6s ease, color 0.4s ease;
    color: #1f2937;
    background: #e5e7eb;
}

body.theme-default {
    background: linear-gradient(135deg, #e0e7ff, #f3f4f6);
}

body.theme-sunny {
    background: linear-gradient(135deg, #fef3c7, #fde68a);
    color: #78350f;
}

body.theme-cloudy {
    background: linear-gradient(135deg, #d1d5db, #9ca3af);
    color: #1f2937;
}

body.theme-rainy {
    background: linear-gradient(135deg, #bfdbfe, #93c5fd);
    color: #1e3a8a;
}

body.theme-snowy {
    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
    color: #0c4a6e;
}

body.theme-stormy {
    background: linear-gradient(135deg, #4c1d95, #6d28d9);
    color: #f5f3ff;
}

body.theme-foggy {
    background: linear-gradient(135deg, #e5e7eb, #d1d5db);
    color: #374151;
}

#app {
    max-width: 820px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
}

header {
    text-align: center;
    margin-bottom: 2rem;
}

header h1 {
    font-size: 1.8rem;
    margin-bottom: 1.25rem;
}

/* Search form */
#search-form {
    display: flex;
    gap: 0.5rem;
    max-width: 420px;
    margin: 0 auto 1rem;
}

#city-input {
    flex: 1;
    padding: 0.65rem 0.9rem;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    font-size: 1rem;
    font-family: inherit;
    background: rgba(255, 255, 255, 0.85);
}

#search-form button {
    padding: 0.65rem 1.1rem;
    border: none;
    border-radius: 8px;
    background: #2563eb;
    color: #fff;
    font-size: 1rem;
    font-family: inherit;
    cursor: pointer;
}

#search-form button:hover {
    background: #1d4ed8;
}

/* Unit toggle */
#unit-toggle {
    display: inline-flex;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 8px;
    overflow: hidden;
}

.unit-btn {
    padding: 0.45rem 1rem;
    border: none;
    background: rgba(255, 255, 255, 0.6);
    font-size: 0.95rem;
    font-family: inherit;
    cursor: pointer;
}

.unit-btn.active {
    background: #1f2937;
    color: #fff;
}

#main {
    position: relative;
    min-height: 200px;
}

.hidden {
    display: none !important;
}

/* Loading */
#loading {
    text-align: center;
    padding: 3rem 0;
}

.spinner {
    width: 42px;
    height: 42px;
    margin: 0 auto 1rem;
    border: 4px solid rgba(0, 0, 0, 0.15);
    border-top-color: #2563eb;
    border-radius: 50%;
    animation: spin 0.8s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

/* Error */
#error {
    text-align: center;
    padding: 1.25rem;
    background: rgba(254, 226, 226, 0.9);
    color: #991b1b;
    border-radius: 10px;
    margin-bottom: 1rem;
}

/* Empty state */
#empty-state {
    text-align: center;
    padding: 3rem 0;
    opacity: 0.7;
    font-style: italic;
}

/* Weather display */
.current {
    text-align: center;
    margin-bottom: 2rem;
}

.current h2 {
    font-size: 2rem;
    margin-bottom: 0.25rem;
}

.description {
    font-size: 1.15rem;
    opacity: 0.8;
    margin-bottom: 1.5rem;
    text-transform: capitalize;
}

.current-stats {
    display: flex;
    justify-content: center;
    gap: 2.5rem;
}

.stat {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}

.stat-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.65;
}

.stat-value {
    font-size: 1.8rem;
    font-weight: 600;
}

/* Forecast */
.forecast h3 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    text-align: center;
}

.forecast-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.75rem;
}

.forecast-card {
    background: rgba(255, 255, 255, 0.55);
    border-radius: 10px;
    padding: 1rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    backdrop-filter: blur(4px);
}

.forecast-day {
    font-weight: 600;
}

.forecast-temp {
    font-size: 1.25rem;
}

.forecast-wind {
    font-size: 0.85rem;
    opacity: 0.7;
}

@media (max-width: 500px) {
    .forecast-grid {
        grid-template-columns: 1fr;
    }

    .current-stats {
        flex-direction: column;
        gap: 1rem;
    }
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["* {\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    font-family: system-ui, -apple-system, sans-serif;\r\n    min-height: 100vh;\r\n    transition: background 0.6s ease, color 0.4s ease;\r\n    color: #1f2937;\r\n    background: #e5e7eb;\r\n}\r\n\r\nbody.theme-default {\r\n    background: linear-gradient(135deg, #e0e7ff, #f3f4f6);\r\n}\r\n\r\nbody.theme-sunny {\r\n    background: linear-gradient(135deg, #fef3c7, #fde68a);\r\n    color: #78350f;\r\n}\r\n\r\nbody.theme-cloudy {\r\n    background: linear-gradient(135deg, #d1d5db, #9ca3af);\r\n    color: #1f2937;\r\n}\r\n\r\nbody.theme-rainy {\r\n    background: linear-gradient(135deg, #bfdbfe, #93c5fd);\r\n    color: #1e3a8a;\r\n}\r\n\r\nbody.theme-snowy {\r\n    background: linear-gradient(135deg, #f0f9ff, #e0f2fe);\r\n    color: #0c4a6e;\r\n}\r\n\r\nbody.theme-stormy {\r\n    background: linear-gradient(135deg, #4c1d95, #6d28d9);\r\n    color: #f5f3ff;\r\n}\r\n\r\nbody.theme-foggy {\r\n    background: linear-gradient(135deg, #e5e7eb, #d1d5db);\r\n    color: #374151;\r\n}\r\n\r\n#app {\r\n    max-width: 820px;\r\n    margin: 0 auto;\r\n    padding: 2rem 1.5rem;\r\n}\r\n\r\nheader {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 1.8rem;\r\n    margin-bottom: 1.25rem;\r\n}\r\n\r\n/* Search form */\r\n#search-form {\r\n    display: flex;\r\n    gap: 0.5rem;\r\n    max-width: 420px;\r\n    margin: 0 auto 1rem;\r\n}\r\n\r\n#city-input {\r\n    flex: 1;\r\n    padding: 0.65rem 0.9rem;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 8px;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    background: rgba(255, 255, 255, 0.85);\r\n}\r\n\r\n#search-form button {\r\n    padding: 0.65rem 1.1rem;\r\n    border: none;\r\n    border-radius: 8px;\r\n    background: #2563eb;\r\n    color: #fff;\r\n    font-size: 1rem;\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\n#search-form button:hover {\r\n    background: #1d4ed8;\r\n}\r\n\r\n/* Unit toggle */\r\n#unit-toggle {\r\n    display: inline-flex;\r\n    border: 1px solid rgba(0, 0, 0, 0.15);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n}\r\n\r\n.unit-btn {\r\n    padding: 0.45rem 1rem;\r\n    border: none;\r\n    background: rgba(255, 255, 255, 0.6);\r\n    font-size: 0.95rem;\r\n    font-family: inherit;\r\n    cursor: pointer;\r\n}\r\n\r\n.unit-btn.active {\r\n    background: #1f2937;\r\n    color: #fff;\r\n}\r\n\r\n#main {\r\n    position: relative;\r\n    min-height: 200px;\r\n}\r\n\r\n.hidden {\r\n    display: none !important;\r\n}\r\n\r\n/* Loading */\r\n#loading {\r\n    text-align: center;\r\n    padding: 3rem 0;\r\n}\r\n\r\n.spinner {\r\n    width: 42px;\r\n    height: 42px;\r\n    margin: 0 auto 1rem;\r\n    border: 4px solid rgba(0, 0, 0, 0.15);\r\n    border-top-color: #2563eb;\r\n    border-radius: 50%;\r\n    animation: spin 0.8s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n    to {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n\r\n/* Error */\r\n#error {\r\n    text-align: center;\r\n    padding: 1.25rem;\r\n    background: rgba(254, 226, 226, 0.9);\r\n    color: #991b1b;\r\n    border-radius: 10px;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n/* Empty state */\r\n#empty-state {\r\n    text-align: center;\r\n    padding: 3rem 0;\r\n    opacity: 0.7;\r\n    font-style: italic;\r\n}\r\n\r\n/* Weather display */\r\n.current {\r\n    text-align: center;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n.current h2 {\r\n    font-size: 2rem;\r\n    margin-bottom: 0.25rem;\r\n}\r\n\r\n.description {\r\n    font-size: 1.15rem;\r\n    opacity: 0.8;\r\n    margin-bottom: 1.5rem;\r\n    text-transform: capitalize;\r\n}\r\n\r\n.current-stats {\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 2.5rem;\r\n}\r\n\r\n.stat {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.25rem;\r\n}\r\n\r\n.stat-label {\r\n    font-size: 0.8rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1px;\r\n    opacity: 0.65;\r\n}\r\n\r\n.stat-value {\r\n    font-size: 1.8rem;\r\n    font-weight: 600;\r\n}\r\n\r\n/* Forecast */\r\n.forecast h3 {\r\n    font-size: 1.1rem;\r\n    margin-bottom: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n.forecast-grid {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    gap: 0.75rem;\r\n}\r\n\r\n.forecast-card {\r\n    background: rgba(255, 255, 255, 0.55);\r\n    border-radius: 10px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 0.35rem;\r\n    backdrop-filter: blur(4px);\r\n}\r\n\r\n.forecast-day {\r\n    font-weight: 600;\r\n}\r\n\r\n.forecast-temp {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n.forecast-wind {\r\n    font-size: 0.85rem;\r\n    opacity: 0.7;\r\n}\r\n\r\n@media (max-width: 500px) {\r\n    .forecast-grid {\r\n        grid-template-columns: 1fr;\r\n    }\r\n\r\n    .current-stats {\r\n        flex-direction: column;\r\n        gap: 1rem;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js"
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
(module) {



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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {



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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {



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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {



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

/***/ },

/***/ "./src/api/weather.js"
/*!****************************!*\
  !*** ./src/api/weather.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),
/* harmony export */   fetchWeather: () => (/* binding */ fetchWeather),
/* harmony export */   getWeatherTheme: () => (/* binding */ getWeatherTheme),
/* harmony export */   processWeatherData: () => (/* binding */ processWeatherData)
/* harmony export */ });
const BASE_URL = 'https://goweather.xyz/v2/weather';

function parseTemperature(str) {
    if (!str) return { value: null, unit: 'C' };
    const match = str.match(/(-?\d+(?:\.\d+)?)\s*°?\s*([CF])/i);
    if (!match) return { value: null, unit: 'C' };
    return { value: parseFloat(match[1]), unit: match[2].toUpperCase() };
}

function parseWind(str) {
    if (!str) return null;
    const match = str.match(/(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : null;
}

function celsiusToFahrenheit(c) {
    return c === null ? null : Math.round((c * 9) / 5 + 32);
}

async function fetchWeather(city) {
    const encoded = encodeURIComponent(city.trim());
    const response = await fetch(`${BASE_URL}/${encoded}`);

    if (!response.ok) {
        throw new Error(`Could not find weather for "${city}". Please check the city name.`);
    }

    const data = await response.json();

    if (!data || !data.temperature) {
        throw new Error(`No weather data found for "${city}".`);
    }

    return data;
}

function processWeatherData(raw, cityName) {
    const currentTemp = parseTemperature(raw.temperature);

    const forecast = (raw.forecast || []).map((day) => {
        const temp = parseTemperature(day.temperature);
        return {
            day: day.day,
            temperatureC: temp.value,
            windKmh: parseWind(day.wind),
        };
    });

    return {
        city: cityName,
        description: (raw.description || '').trim() || 'Unknown',
        temperatureC: currentTemp.value,
        windKmh: parseWind(raw.wind),
        forecast,
        fetchedAt: new Date(),
    };
}

function getWeatherTheme(description) {
    const d = description.toLowerCase();
    if (d.includes('clear') || d.includes('sunny')) return 'theme-sunny';
    if (d.includes('cloud') || d.includes('overcast')) return 'theme-cloudy';
    if (d.includes('rain') || d.includes('drizzle') || d.includes('shower')) return 'theme-rainy';
    if (d.includes('snow') || d.includes('sleet')) return 'theme-snowy';
    if (d.includes('thunder') || d.includes('storm')) return 'theme-stormy';
    if (d.includes('fog') || d.includes('mist') || d.includes('haze')) return 'theme-foggy';
    return 'theme-default';
}

/***/ },

/***/ "./src/ui/render.js"
/*!**************************!*\
  !*** ./src/ui/render.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   applyTheme: () => (/* binding */ applyTheme),
/* harmony export */   hideAll: () => (/* binding */ hideAll),
/* harmony export */   renderWeather: () => (/* binding */ renderWeather),
/* harmony export */   setActiveUnitButton: () => (/* binding */ setActiveUnitButton),
/* harmony export */   showError: () => (/* binding */ showError),
/* harmony export */   showLoading: () => (/* binding */ showLoading)
/* harmony export */ });
/* harmony import */ var _api_weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/weather.js */ "./src/api/weather.js");


const els = {
    form: document.getElementById("search-form"),
    input: document.getElementById("city-input"),
    loading: document.getElementById("loading"),
    error: document.getElementById("error"),
    display: document.getElementById("weather-display"),
    empty: document.getElementById("empty-state"),
    unitButtons: document.querySelectorAll(".unit-btn"),
    body: document.body,
};

function showLoading() {
    els.loading.classList.remove("hidden");
    els.error.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
}

function showError(message) {
    els.loading.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
    els.error.textContent = message;
    els.error.classList.remove("hidden");
}

function hideAll() {
    els.loading.classList.add("hidden");
    els.error.classList.add("hidden");
    els.display.classList.add("hidden");
    els.empty.classList.add("hidden");
}

function setActiveUnitButton(unit) {
    els.unitButtons.forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.unit === unit);
    });
}

function applyTheme(themeClass) {
    els.body.className = "";
    els.body.classList.add(themeClass);
}

function renderWeather(data, unit) {
    hideAll();
    els.display.classList.remove("hidden");

    const isF = unit === "fahrenheit";

    const fmtTemp = (c) => {
        if (c === null) return "—";
        return isF ? `${(0,_api_weather_js__WEBPACK_IMPORTED_MODULE_0__.celsiusToFahrenheit)(c)}°F` : `${c}°C`;
    };

    const fmtWind = (kmh) => (kmh === null ? "—" : `${kmh} km/h`);

    els.display.innerHTML = `
    <section class="current">
        <h2>${data.city}</h2>
        <p class="description">${data.description}</p>
        <div class="current-stats">
            <div class="stat">
                <span class="stat-label">Temperature</span>
                <span class="stat-value">${fmtTemp(data.temperatureC)}</span>
            </div>
            <div class="stat">
                <span class="stat-label">Wind</span>
                <span class="stat-value">${fmtWind(data.windKmh)}</span>
            </div>
        </div>
    </section>

    <section class="forecast">
        <h3>3-Day Forecast</h3>
        <div class="forecast-grid">
        ${data.forecast
            .map(
                (day) => `
                    <div class="forecast-card">
                        <span class="forecast-day">${day.day}</span>
                        <span class="forecast-temp">${fmtTemp(day.temperatureC)}</span>
                        <span class="forecast-wind">${fmtWind(day.windKmh)}</span>
                    </div>
                `,
            )
            .join("")}
        </div>
    </section>
    `;
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _api_weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/weather.js */ "./src/api/weather.js");
/* harmony import */ var _ui_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/render.js */ "./src/ui/render.js");




let currentData = null;
let currentUnit = 'celsius';

const form = document.getElementById('search-form');
const input = document.getElementById('city-input');
const unitButtons = document.querySelectorAll('.unit-btn');

async function handleSearch(city) {
    (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.showLoading)();
    try {
        const raw = await (0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.fetchWeather)(city);
        currentData = (0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.processWeatherData)(raw, city.trim());
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.applyTheme)((0,_api_weather_js__WEBPACK_IMPORTED_MODULE_1__.getWeatherTheme)(currentData.description));
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(currentData, currentUnit);
    } catch (err) {
        ;(0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.showError)(err.message || 'Something went wrong. Please try again.');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.value.trim();
    if (city) handleSearch(city);
});

unitButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const unit = btn.dataset.unit;
        if (unit === currentUnit) return;

        currentUnit = unit;
        (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.setActiveUnitButton)(unit);

        if (currentData) {
            (0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.renderWeather)(currentData, currentUnit);
        }
    });
});

(0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.setActiveUnitButton)(currentUnit);
(0,_ui_render_js__WEBPACK_IMPORTED_MODULE_2__.applyTheme)('theme-default');
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FB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cUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVQzVCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQSxFOzs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBLEU7OztVQ1BBLHlGOzs7VUNBQTtVQUNBO1VBQ0Esc0RBQXNELGlCQUFpQjtVQUN2RSxnREFBZ0QsYUFBYTtVQUM3RCxFOzs7VUNKQSxtQzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUtJO0FBUUY7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwwREFBVztBQUNmO0FBQ0EsMEJBQTBCLDZEQUFZO0FBQ3RDLHNCQUFzQixtRUFBa0I7QUFDeEMsUUFBUSx5REFBVSxDQUFDLGdFQUFlO0FBQ2xDLFFBQVEsNERBQWE7QUFDckIsTUFBTTtBQUNOLFFBQVEseURBQVM7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtFQUFtQjtBQUMzQjtBQUNBO0FBQ0EsWUFBWSw0REFBYTtBQUN6QjtBQUNBLEtBQUs7QUFDTCxDQUFDO0FBQ0Q7QUFDQSxrRUFBbUI7QUFDbkIseURBQVUsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpL3JlbmRlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBzYW5zLXNlcmlmO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNnMgZWFzZSwgY29sb3IgMC40cyBlYXNlO1xyXG4gICAgY29sb3I6ICMxZjI5Mzc7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTVlN2ViO1xyXG59XHJcblxyXG5ib2R5LnRoZW1lLWRlZmF1bHQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UwZTdmZiwgI2YzZjRmNik7XHJcbn1cclxuXHJcbmJvZHkudGhlbWUtc3Vubnkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2ZlZjNjNywgI2ZkZTY4YSk7XHJcbiAgICBjb2xvcjogIzc4MzUwZjtcclxufVxyXG5cclxuYm9keS50aGVtZS1jbG91ZHkge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZDVkYiwgIzljYTNhZik7XHJcbiAgICBjb2xvcjogIzFmMjkzNztcclxufVxyXG5cclxuYm9keS50aGVtZS1yYWlueSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYmZkYmZlLCAjOTNjNWZkKTtcclxuICAgIGNvbG9yOiAjMWUzYThhO1xyXG59XHJcblxyXG5ib2R5LnRoZW1lLXNub3d5IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMGY5ZmYsICNlMGYyZmUpO1xyXG4gICAgY29sb3I6ICMwYzRhNmU7XHJcbn1cclxuXHJcbmJvZHkudGhlbWUtc3Rvcm15IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0YzFkOTUsICM2ZDI4ZDkpO1xyXG4gICAgY29sb3I6ICNmNWYzZmY7XHJcbn1cclxuXHJcbmJvZHkudGhlbWUtZm9nZ3kge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2U1ZTdlYiwgI2QxZDVkYik7XHJcbiAgICBjb2xvcjogIzM3NDE1MTtcclxufVxyXG5cclxuI2FwcCB7XHJcbiAgICBtYXgtd2lkdGg6IDgyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbn1cclxuXHJcbmhlYWRlciBoMSB7XHJcbiAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbn1cclxuXHJcbi8qIFNlYXJjaCBmb3JtICovXHJcbiNzZWFyY2gtZm9ybSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcclxufVxyXG5cclxuI2NpdHktaW5wdXQge1xyXG4gICAgZmxleDogMTtcclxuICAgIHBhZGRpbmc6IDAuNjVyZW0gMC45cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg1KTtcclxufVxyXG5cclxuI3NlYXJjaC1mb3JtIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDEuMXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICMyNTYzZWI7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jc2VhcmNoLWZvcm0gYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMxZDRlZDg7XHJcbn1cclxuXHJcbi8qIFVuaXQgdG9nZ2xlICovXHJcbiN1bml0LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4udW5pdC1idG4ge1xyXG4gICAgcGFkZGluZzogMC40NXJlbSAxcmVtO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xyXG4gICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51bml0LWJ0bi5hY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZDogIzFmMjkzNztcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4jbWFpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIExvYWRpbmcgKi9cclxuI2xvYWRpbmcge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3JlbSAwO1xyXG59XHJcblxyXG4uc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNDJweDtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvIDFyZW07XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzI1NjNlYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBFcnJvciAqL1xyXG4jZXJyb3Ige1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMS4yNXJlbTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU0LCAyMjYsIDIyNiwgMC45KTtcclxuICAgIGNvbG9yOiAjOTkxYjFiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi8qIEVtcHR5IHN0YXRlICovXHJcbiNlbXB0eS1zdGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAzcmVtIDA7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcbi8qIFdlYXRoZXIgZGlzcGxheSAqL1xyXG4uY3VycmVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4uY3VycmVudCBoMiB7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG59XHJcblxyXG4uZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5jdXJyZW50LXN0YXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMi41cmVtO1xyXG59XHJcblxyXG4uc3RhdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxufVxyXG5cclxuLnN0YXQtbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgIG9wYWNpdHk6IDAuNjU7XHJcbn1cclxuXHJcbi5zdGF0LXZhbHVlIHtcclxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLyogRm9yZWNhc3QgKi9cclxuLmZvcmVjYXN0IGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcmVjYXN0LWdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1jYXJkIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjM1cmVtO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbn1cclxuXHJcbi5mb3JlY2FzdC1kYXkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmZvcmVjYXN0LXRlbXAge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG59XHJcblxyXG4uZm9yZWNhc3Qtd2luZCB7XHJcbiAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmZvcmVjYXN0LWdyaWQge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jdXJyZW50LXN0YXRzIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMXJlbTtcclxuICAgIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlEQUFpRDtJQUNqRCxpQkFBaUI7SUFDakIsaURBQWlEO0lBQ2pELGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxREFBcUQ7SUFDckQsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHFEQUFxRDtJQUNyRCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscURBQXFEO0lBQ3JELGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsc0JBQXNCO0FBQzFCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLE9BQU87SUFDUCx1QkFBdUI7SUFDdkIscUNBQXFDO0lBQ3JDLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLHFDQUFxQztBQUN6Qzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLGdCQUFnQjtBQUNoQjtJQUNJLG9CQUFvQjtJQUNwQixxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLFlBQVk7QUFDWjtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUNBQXFDO0lBQ3JDLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQSxnQkFBZ0I7QUFDaEI7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBLGFBQWE7QUFDYjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7UUFDSSwwQkFBMEI7SUFDOUI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIHNhbnMtc2VyaWY7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuNnMgZWFzZSwgY29sb3IgMC40cyBlYXNlO1xcclxcbiAgICBjb2xvcjogIzFmMjkzNztcXHJcXG4gICAgYmFja2dyb3VuZDogI2U1ZTdlYjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS50aGVtZS1kZWZhdWx0IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2UwZTdmZiwgI2YzZjRmNik7XFxyXFxufVxcclxcblxcclxcbmJvZHkudGhlbWUtc3Vubnkge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZmVmM2M3LCAjZmRlNjhhKTtcXHJcXG4gICAgY29sb3I6ICM3ODM1MGY7XFxyXFxufVxcclxcblxcclxcbmJvZHkudGhlbWUtY2xvdWR5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2QxZDVkYiwgIzljYTNhZik7XFxyXFxuICAgIGNvbG9yOiAjMWYyOTM3O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLXJhaW55IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2JmZGJmZSwgIzkzYzVmZCk7XFxyXFxuICAgIGNvbG9yOiAjMWUzYThhO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLXNub3d5IHtcXHJcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwZjlmZiwgI2UwZjJmZSk7XFxyXFxuICAgIGNvbG9yOiAjMGM0YTZlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LnRoZW1lLXN0b3JteSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM0YzFkOTUsICM2ZDI4ZDkpO1xcclxcbiAgICBjb2xvcjogI2Y1ZjNmZjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keS50aGVtZS1mb2dneSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNlNWU3ZWIsICNkMWQ1ZGIpO1xcclxcbiAgICBjb2xvcjogIzM3NDE1MTtcXHJcXG59XFxyXFxuXFxyXFxuI2FwcCB7XFxyXFxuICAgIG1heC13aWR0aDogODIwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2VhcmNoIGZvcm0gKi9cXHJcXG4jc2VhcmNoLWZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG8gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2NpdHktaW5wdXQge1xcclxcbiAgICBmbGV4OiAxO1xcclxcbiAgICBwYWRkaW5nOiAwLjY1cmVtIDAuOXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZvcm0gYnV0dG9uIHtcXHJcXG4gICAgcGFkZGluZzogMC42NXJlbSAxLjFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLWZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZDogIzFkNGVkODtcXHJcXG59XFxyXFxuXFxyXFxuLyogVW5pdCB0b2dnbGUgKi9cXHJcXG4jdW5pdC10b2dnbGUge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjE1KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4udW5pdC1idG4ge1xcclxcbiAgICBwYWRkaW5nOiAwLjQ1cmVtIDFyZW07XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xcclxcbiAgICBmb250LXNpemU6IDAuOTVyZW07XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi51bml0LWJ0bi5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjMWYyOTM3O1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG59XFxyXFxuXFxyXFxuI21haW4ge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBMb2FkaW5nICovXFxyXFxuI2xvYWRpbmcge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNwaW5uZXIge1xcclxcbiAgICB3aWR0aDogNDJweDtcXHJcXG4gICAgaGVpZ2h0OiA0MnB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0byAxcmVtO1xcclxcbiAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xcclxcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMjU2M2ViO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAwLjhzIGxpbmVhciBpbmZpbml0ZTtcXHJcXG59XFxyXFxuXFxyXFxuQGtleWZyYW1lcyBzcGluIHtcXHJcXG4gICAgdG8ge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBFcnJvciAqL1xcclxcbiNlcnJvciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogMS4yNXJlbTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTQsIDIyNiwgMjI2LCAwLjkpO1xcclxcbiAgICBjb2xvcjogIzk5MWIxYjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRW1wdHkgc3RhdGUgKi9cXHJcXG4jZW1wdHktc3RhdGUge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG4gICAgb3BhY2l0eTogMC43O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi8qIFdlYXRoZXIgZGlzcGxheSAqL1xcclxcbi5jdXJyZW50IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VycmVudCBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjE1cmVtO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxyXFxufVxcclxcblxcclxcbi5jdXJyZW50LXN0YXRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMi41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RhdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtbGFiZWwge1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcXHJcXG4gICAgb3BhY2l0eTogMC42NTtcXHJcXG59XFxyXFxuXFxyXFxuLnN0YXQtdmFsdWUge1xcclxcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9yZWNhc3QgKi9cXHJcXG4uZm9yZWNhc3QgaDMge1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtZ3JpZCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XFxyXFxuICAgIGdhcDogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTUpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC4zNXJlbTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxufVxcclxcblxcclxcbi5mb3JlY2FzdC1kYXkge1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9yZWNhc3QtdGVtcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcmVjYXN0LXdpbmQge1xcclxcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxyXFxuICAgIG9wYWNpdHk6IDAuNztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIC5mb3JlY2FzdC1ncmlkIHtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jdXJyZW50LXN0YXRzIHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBnYXA6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9nb3dlYXRoZXIueHl6L3YyL3dlYXRoZXInO1xyXG5cclxuZnVuY3Rpb24gcGFyc2VUZW1wZXJhdHVyZShzdHIpIHtcclxuICAgIGlmICghc3RyKSByZXR1cm4geyB2YWx1ZTogbnVsbCwgdW5pdDogJ0MnIH07XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKC0/XFxkKyg/OlxcLlxcZCspPylcXHMqwrA/XFxzKihbQ0ZdKS9pKTtcclxuICAgIGlmICghbWF0Y2gpIHJldHVybiB7IHZhbHVlOiBudWxsLCB1bml0OiAnQycgfTtcclxuICAgIHJldHVybiB7IHZhbHVlOiBwYXJzZUZsb2F0KG1hdGNoWzFdKSwgdW5pdDogbWF0Y2hbMl0udG9VcHBlckNhc2UoKSB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVdpbmQoc3RyKSB7XHJcbiAgICBpZiAoIXN0cikgcmV0dXJuIG51bGw7XHJcbiAgICBjb25zdCBtYXRjaCA9IHN0ci5tYXRjaCgvKFxcZCsoPzpcXC5cXGQrKT8pLyk7XHJcbiAgICByZXR1cm4gbWF0Y2ggPyBwYXJzZUZsb2F0KG1hdGNoWzFdKSA6IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjZWxzaXVzVG9GYWhyZW5oZWl0KGMpIHtcclxuICAgIHJldHVybiBjID09PSBudWxsID8gbnVsbCA6IE1hdGgucm91bmQoKGMgKiA5KSAvIDUgKyAzMik7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaFdlYXRoZXIoY2l0eSkge1xyXG4gICAgY29uc3QgZW5jb2RlZCA9IGVuY29kZVVSSUNvbXBvbmVudChjaXR5LnRyaW0oKSk7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfS8ke2VuY29kZWR9YCk7XHJcblxyXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ291bGQgbm90IGZpbmQgd2VhdGhlciBmb3IgXCIke2NpdHl9XCIuIFBsZWFzZSBjaGVjayB0aGUgY2l0eSBuYW1lLmApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gICAgaWYgKCFkYXRhIHx8ICFkYXRhLnRlbXBlcmF0dXJlKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyB3ZWF0aGVyIGRhdGEgZm91bmQgZm9yIFwiJHtjaXR5fVwiLmApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXJEYXRhKHJhdywgY2l0eU5hbWUpIHtcclxuICAgIGNvbnN0IGN1cnJlbnRUZW1wID0gcGFyc2VUZW1wZXJhdHVyZShyYXcudGVtcGVyYXR1cmUpO1xyXG5cclxuICAgIGNvbnN0IGZvcmVjYXN0ID0gKHJhdy5mb3JlY2FzdCB8fCBbXSkubWFwKChkYXkpID0+IHtcclxuICAgICAgICBjb25zdCB0ZW1wID0gcGFyc2VUZW1wZXJhdHVyZShkYXkudGVtcGVyYXR1cmUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGRheTogZGF5LmRheSxcclxuICAgICAgICAgICAgdGVtcGVyYXR1cmVDOiB0ZW1wLnZhbHVlLFxyXG4gICAgICAgICAgICB3aW5kS21oOiBwYXJzZVdpbmQoZGF5LndpbmQpLFxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNpdHk6IGNpdHlOYW1lLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAocmF3LmRlc2NyaXB0aW9uIHx8ICcnKS50cmltKCkgfHwgJ1Vua25vd24nLFxyXG4gICAgICAgIHRlbXBlcmF0dXJlQzogY3VycmVudFRlbXAudmFsdWUsXHJcbiAgICAgICAgd2luZEttaDogcGFyc2VXaW5kKHJhdy53aW5kKSxcclxuICAgICAgICBmb3JlY2FzdCxcclxuICAgICAgICBmZXRjaGVkQXQ6IG5ldyBEYXRlKCksXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VhdGhlclRoZW1lKGRlc2NyaXB0aW9uKSB7XHJcbiAgICBjb25zdCBkID0gZGVzY3JpcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICAgIGlmIChkLmluY2x1ZGVzKCdjbGVhcicpIHx8IGQuaW5jbHVkZXMoJ3N1bm55JykpIHJldHVybiAndGhlbWUtc3VubnknO1xyXG4gICAgaWYgKGQuaW5jbHVkZXMoJ2Nsb3VkJykgfHwgZC5pbmNsdWRlcygnb3ZlcmNhc3QnKSkgcmV0dXJuICd0aGVtZS1jbG91ZHknO1xyXG4gICAgaWYgKGQuaW5jbHVkZXMoJ3JhaW4nKSB8fCBkLmluY2x1ZGVzKCdkcml6emxlJykgfHwgZC5pbmNsdWRlcygnc2hvd2VyJykpIHJldHVybiAndGhlbWUtcmFpbnknO1xyXG4gICAgaWYgKGQuaW5jbHVkZXMoJ3Nub3cnKSB8fCBkLmluY2x1ZGVzKCdzbGVldCcpKSByZXR1cm4gJ3RoZW1lLXNub3d5JztcclxuICAgIGlmIChkLmluY2x1ZGVzKCd0aHVuZGVyJykgfHwgZC5pbmNsdWRlcygnc3Rvcm0nKSkgcmV0dXJuICd0aGVtZS1zdG9ybXknO1xyXG4gICAgaWYgKGQuaW5jbHVkZXMoJ2ZvZycpIHx8IGQuaW5jbHVkZXMoJ21pc3QnKSB8fCBkLmluY2x1ZGVzKCdoYXplJykpIHJldHVybiAndGhlbWUtZm9nZ3knO1xyXG4gICAgcmV0dXJuICd0aGVtZS1kZWZhdWx0JztcclxufSIsImltcG9ydCB7IGNlbHNpdXNUb0ZhaHJlbmhlaXQgfSBmcm9tIFwiLi4vYXBpL3dlYXRoZXIuanNcIjtcclxuXHJcbmNvbnN0IGVscyA9IHtcclxuICAgIGZvcm06IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoLWZvcm1cIiksXHJcbiAgICBpbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LWlucHV0XCIpLFxyXG4gICAgbG9hZGluZzogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2FkaW5nXCIpLFxyXG4gICAgZXJyb3I6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXJyb3JcIiksXHJcbiAgICBkaXNwbGF5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZGlzcGxheVwiKSxcclxuICAgIGVtcHR5OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtcHR5LXN0YXRlXCIpLFxyXG4gICAgdW5pdEJ1dHRvbnM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudW5pdC1idG5cIiksXHJcbiAgICBib2R5OiBkb2N1bWVudC5ib2R5LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dMb2FkaW5nKCkge1xyXG4gICAgZWxzLmxvYWRpbmcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGVscy5lcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZWxzLmRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGVscy5lbXB0eS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0Vycm9yKG1lc3NhZ2UpIHtcclxuICAgIGVscy5sb2FkaW5nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBlbHMuZGlzcGxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZWxzLmVtcHR5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBlbHMuZXJyb3IudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgZWxzLmVycm9yLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoaWRlQWxsKCkge1xyXG4gICAgZWxzLmxvYWRpbmcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGVscy5lcnJvci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZWxzLmRpc3BsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGVscy5lbXB0eS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2V0QWN0aXZlVW5pdEJ1dHRvbih1bml0KSB7XHJcbiAgICBlbHMudW5pdEJ1dHRvbnMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICAgICAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIiwgYnRuLmRhdGFzZXQudW5pdCA9PT0gdW5pdCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VGhlbWUodGhlbWVDbGFzcykge1xyXG4gICAgZWxzLmJvZHkuY2xhc3NOYW1lID0gXCJcIjtcclxuICAgIGVscy5ib2R5LmNsYXNzTGlzdC5hZGQodGhlbWVDbGFzcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJXZWF0aGVyKGRhdGEsIHVuaXQpIHtcclxuICAgIGhpZGVBbGwoKTtcclxuICAgIGVscy5kaXNwbGF5LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcblxyXG4gICAgY29uc3QgaXNGID0gdW5pdCA9PT0gXCJmYWhyZW5oZWl0XCI7XHJcblxyXG4gICAgY29uc3QgZm10VGVtcCA9IChjKSA9PiB7XHJcbiAgICAgICAgaWYgKGMgPT09IG51bGwpIHJldHVybiBcIuKAlFwiO1xyXG4gICAgICAgIHJldHVybiBpc0YgPyBgJHtjZWxzaXVzVG9GYWhyZW5oZWl0KGMpfcKwRmAgOiBgJHtjfcKwQ2A7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGZtdFdpbmQgPSAoa21oKSA9PiAoa21oID09PSBudWxsID8gXCLigJRcIiA6IGAke2ttaH0ga20vaGApO1xyXG5cclxuICAgIGVscy5kaXNwbGF5LmlubmVySFRNTCA9IGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY3VycmVudFwiPlxyXG4gICAgICAgIDxoMj4ke2RhdGEuY2l0eX08L2gyPlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj4ke2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjdXJyZW50LXN0YXRzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0XCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj5UZW1wZXJhdHVyZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZVwiPiR7Zm10VGVtcChkYXRhLnRlbXBlcmF0dXJlQyl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC1sYWJlbFwiPldpbmQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtdmFsdWVcIj4ke2ZtdFdpbmQoZGF0YS53aW5kS21oKX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIDxzZWN0aW9uIGNsYXNzPVwiZm9yZWNhc3RcIj5cclxuICAgICAgICA8aDM+My1EYXkgRm9yZWNhc3Q8L2gzPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JlY2FzdC1ncmlkXCI+XHJcbiAgICAgICAgJHtkYXRhLmZvcmVjYXN0XHJcbiAgICAgICAgICAgIC5tYXAoXHJcbiAgICAgICAgICAgICAgICAoZGF5KSA9PiBgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcmVjYXN0LWNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb3JlY2FzdC1kYXlcIj4ke2RheS5kYXl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcmVjYXN0LXRlbXBcIj4ke2ZtdFRlbXAoZGF5LnRlbXBlcmF0dXJlQyl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZvcmVjYXN0LXdpbmRcIj4ke2ZtdFdpbmQoZGF5LndpbmRLbWgpfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmpvaW4oXCJcIil9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBgO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbmNvbnN0IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0Y29uc3QgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdGNvbnN0IG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0aWYgKCEobW9kdWxlSWQgaW4gX193ZWJwYWNrX21vZHVsZXNfXykpIHtcblx0XHRkZWxldGUgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0XHRjb25zdCBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0Y29uc3QgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSk7IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQge1xyXG4gICAgZmV0Y2hXZWF0aGVyLFxyXG4gICAgcHJvY2Vzc1dlYXRoZXJEYXRhLFxyXG4gICAgZ2V0V2VhdGhlclRoZW1lLFxyXG59IGZyb20gJy4vYXBpL3dlYXRoZXIuanMnO1xyXG5pbXBvcnQge1xyXG4gICAgc2hvd0xvYWRpbmcsXHJcbiAgICBzaG93RXJyb3IsXHJcbiAgICBoaWRlQWxsLFxyXG4gICAgcmVuZGVyV2VhdGhlcixcclxuICAgIGFwcGx5VGhlbWUsXHJcbiAgICBzZXRBY3RpdmVVbml0QnV0dG9uLFxyXG59IGZyb20gJy4vdWkvcmVuZGVyLmpzJztcclxuXHJcbmxldCBjdXJyZW50RGF0YSA9IG51bGw7XHJcbmxldCBjdXJyZW50VW5pdCA9ICdjZWxzaXVzJztcclxuXHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoLWZvcm0nKTtcclxuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2l0eS1pbnB1dCcpO1xyXG5jb25zdCB1bml0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy51bml0LWJ0bicpO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlU2VhcmNoKGNpdHkpIHtcclxuICAgIHNob3dMb2FkaW5nKCk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJhdyA9IGF3YWl0IGZldGNoV2VhdGhlcihjaXR5KTtcclxuICAgICAgICBjdXJyZW50RGF0YSA9IHByb2Nlc3NXZWF0aGVyRGF0YShyYXcsIGNpdHkudHJpbSgpKTtcclxuICAgICAgICBhcHBseVRoZW1lKGdldFdlYXRoZXJUaGVtZShjdXJyZW50RGF0YS5kZXNjcmlwdGlvbikpO1xyXG4gICAgICAgIHJlbmRlcldlYXRoZXIoY3VycmVudERhdGEsIGN1cnJlbnRVbml0KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHNob3dFcnJvcihlcnIubWVzc2FnZSB8fCAnU29tZXRoaW5nIHdlbnQgd3JvbmcuIFBsZWFzZSB0cnkgYWdhaW4uJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGNpdHkgPSBpbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAoY2l0eSkgaGFuZGxlU2VhcmNoKGNpdHkpO1xyXG59KTtcclxuXHJcbnVuaXRCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVuaXQgPSBidG4uZGF0YXNldC51bml0O1xyXG4gICAgICAgIGlmICh1bml0ID09PSBjdXJyZW50VW5pdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjdXJyZW50VW5pdCA9IHVuaXQ7XHJcbiAgICAgICAgc2V0QWN0aXZlVW5pdEJ1dHRvbih1bml0KTtcclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnREYXRhKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcldlYXRoZXIoY3VycmVudERhdGEsIGN1cnJlbnRVbml0KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5zZXRBY3RpdmVVbml0QnV0dG9uKGN1cnJlbnRVbml0KTtcclxuYXBwbHlUaGVtZSgndGhlbWUtZGVmYXVsdCcpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==