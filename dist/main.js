"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: #fff;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n#footer {\\r\\n  margin: 0;\\r\\n  width: 100%;\\r\\n  height: 10%;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  border-top: 4px solid rgb(0, 0, 0, 0.7);\\r\\n  background-color: rgba(219, 219, 219, 0.5);\\r\\n}\\r\\n\\r\\n#license {\\r\\n  font-size: 36px;\\r\\n}\\r\\n\\r\\n#logoImg {\\r\\n  width: 300px;\\r\\n  margin-left: 64px;\\r\\n}\\r\\n\\r\\n#header {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding-top: 24px;\\r\\n}\\r\\n\\r\\n#ulHeader {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 50%;\\r\\n  list-style: none;\\r\\n  margin-right: 8%;\\r\\n}\\r\\n\\r\\n.linkHeader {\\r\\n  font-size: 36px;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n#listItems {\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  margin: 48px 0 64px 0;\\r\\n}\\r\\n\\r\\n.item {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\n.title {\\r\\n  display: flex;\\r\\n  align-items: baseline;\\r\\n}\\r\\n\\r\\n.likeImg {\\r\\n  width: 24px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.likes {\\r\\n  padding: 48px 0 0 12px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.commentBtn {\\r\\n  border: 4px solid black;\\r\\n  font-size: 18px;\\r\\n  padding: 8px 16px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.reservationBtn {\\r\\n  margin-top: 24px;\\r\\n  border: 4px solid black;\\r\\n  font-size: 18px;\\r\\n  padding: 8px 16px;\\r\\n}\\r\\n\\r\\n.margaritaImg {\\r\\n  width: 50%;\\r\\n}\\r\\n\\r\\n/* popup styles */\\r\\n.card {\\r\\n  background-color: white;\\r\\n  z-index: 10;\\r\\n  border-radius: 5px;\\r\\n  border: 1px solid rgb(180, 178, 178);\\r\\n  width: 95vw;\\r\\n  height: 100vh;\\r\\n  position: fixed;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  right: 0;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.detail-image {\\r\\n  width: 40vw;\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  float: right;\\r\\n  padding: 8px 48px 0 0;\\r\\n  zoom: 4;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.imageDiv {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  clear: right;\\r\\n}\\r\\n\\r\\n.text-title {\\r\\n  text-align: center;\\r\\n  width: 100%;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.detail-info {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(2, 1fr);\\r\\n  width: 90%;\\r\\n  text-align: center;\\r\\n  padding-left: 50px;\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.comment-div {\\r\\n  text-align: center;\\r\\n  width: 50vw;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.comment-list {\\r\\n  font-size: 1.5rem;\\r\\n  list-style-type: none;\\r\\n  height: 14vh;\\r\\n  overflow-y: auto;\\r\\n  border: 2px solid black;\\r\\n  padding-inline-start: 0;\\r\\n  padding: 8px;\\r\\n}\\r\\n\\r\\n.comment-list-div {\\r\\n  display: flex;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.comment-list-div p {\\r\\n  margin-top: 0;\\r\\n}\\r\\n\\r\\n.new-comment-div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.textarea-input {\\r\\n  width: 500px;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.add-comment-title {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.input-comment {\\r\\n  margin-bottom: 10px;\\r\\n  padding: 5px;\\r\\n  width: 20vw;\\r\\n  height: 3vh;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.submit-button {\\r\\n  border: 2px solid black;\\r\\n  font-weight: bold;\\r\\n  padding: 10px;\\r\\n  margin: 10px 0 96px 0;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.instructions-title {\\r\\n  text-align: center;\\r\\n  font-size: 2rem;\\r\\n}\\r\\n\\r\\n.instructions {\\r\\n  padding: 0 30px;\\r\\n  font-size: 1.5rem;\\r\\n  text-align: center;\\r\\n  width: 60%;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/logo.png */ \"./src/img/logo.png\");\n/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/display.js */ \"./src/modules/display.js\");\n/* harmony import */ var _modules_details_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/details.js */ \"./src/modules/details.js\");\n\r\n\r\n\r\n\r\n\r\nconst urlAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';\r\nconst urlInvAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/';\r\nconst logo = document.querySelector('#logoImg');\r\nlogo.src = _img_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\nconst itemSection = document.querySelector('#listItems');\r\n\r\nitemSection.addEventListener('click', async (e) => {\r\n  if (e.target.classList.contains('commentBtn')) {\r\n    document.body.style.overflow = 'hidden';\r\n    const { id } = e.target.parentElement.children[1];\r\n    const details = await (0,_modules_details_js__WEBPACK_IMPORTED_MODULE_3__.fetchCocktailById)(id);\r\n    await (0,_modules_details_js__WEBPACK_IMPORTED_MODULE_3__.popup)(details);\r\n  }\r\n});\r\n\r\nwindow.onload = () => {\r\n  (0,_modules_display_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(urlAPI, urlInvAPI);\r\n};\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/data.js":
/*!*****************************!*\
  !*** ./src/modules/data.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"counterOfDrinks\": () => (/* binding */ counterOfDrinks),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"sendlike\": () => (/* binding */ sendlike)\n/* harmony export */ });\nconst getData = async (url) => {\n  let response = await fetch(url);\n  response = await response.json();\n  return response;\n};\n\nconst sendlike = async (url2, img) => {\n  img.forEach((element, index) => {\n    element.addEventListener('click', async () => {\n      await fetch(url2, {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: `item${index + 1}`,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      });\n      const likesP = document.querySelectorAll('.likesNum');\n      const allLikes = await getData(url2);\n      likesP.forEach((element, index) => {\n        element.innerText = `${allLikes[index].likes} likes`;\n      });\n    });\n  });\n};\n\nconst counterOfDrinks = (data, text) => {\n  const numberOfDrinks = data.length;\n  text.textContent += ` (${numberOfDrinks})`;\n  return numberOfDrinks;\n};\n\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/data.js?");

/***/ }),

/***/ "./src/modules/details.js":
/*!********************************!*\
  !*** ./src/modules/details.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentCounter\": () => (/* binding */ commentCounter),\n/* harmony export */   \"fetchCocktailById\": () => (/* binding */ fetchCocktailById),\n/* harmony export */   \"fetchComments\": () => (/* binding */ fetchComments),\n/* harmony export */   \"popup\": () => (/* binding */ popup),\n/* harmony export */   \"postComments\": () => (/* binding */ postComments)\n/* harmony export */ });\nconst fetchCocktailById = async (id) => {\r\n  const cocktail = await fetch(\r\n    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,\r\n  );\r\n  const result = await cocktail.json();\r\n  return result.drinks[0];\r\n};\r\n\r\nconst fetchComments = async (id) => {\r\n  const comments = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/comments?item_id=${id}`);\r\n  const result = await comments.json();\r\n  return result;\r\n};\r\n\r\nconst commentCounter = (comment) => comment.length;\r\n\r\nconst reloadComments = (allComments, ul) => {\r\n  ul.className = 'comment-list';\r\n  for (let i = 0; i < allComments.length; i += 1) {\r\n    const li = document.createElement('li');\r\n    li.className = 'comment-list-div';\r\n    const p1 = document.createElement('p');\r\n    p1.innerHTML = `${allComments[i].username}:`;\r\n\r\n    const p2 = document.createElement('p');\r\n    p2.innerHTML = allComments[i].comment;\r\n\r\n    li.append(p1, p2);\r\n    ul.append(li);\r\n  }\r\n};\r\n\r\nconst URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xiWFQCtMNwoChVwdNjKe/comments';\r\nconst postComments = async (id, username1, comment1) => {\r\n  const response = await fetch(URL, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n      Accept: 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username: username1,\r\n      comment: comment1,\r\n    }),\r\n  });\r\n  return response;\r\n};\r\n\r\nconst popup = async (details) => {\r\n  const {\r\n    strDrinkThumb, strDrink, strInstructions,\r\n    strIngredient1, strIngredient2, strIngredient3, strIngredient4, idDrink,\r\n  } = details;\r\n  const card = document.createElement('div');\r\n  card.className = 'card';\r\n\r\n  const imageDiv = document.createElement('div');\r\n  imageDiv.className = 'imageDiv';\r\n\r\n  const image = document.createElement('img');\r\n  image.src = strDrinkThumb;\r\n  image.className = 'detail-image';\r\n\r\n  const icon = document.createElement('i');\r\n  icon.className = 'fa fa-times icon';\r\n\r\n  const title = document.createElement('h2');\r\n  title.innerHTML = strDrink;\r\n  title.className = 'text-title';\r\n\r\n  const infoDiv = document.createElement('div');\r\n  infoDiv.className = 'detail-info';\r\n\r\n  const info1 = document.createElement('p');\r\n  info1.innerHTML = `Ingredient1: ${strIngredient1}`;\r\n\r\n  const info2 = document.createElement('p');\r\n  info2.innerHTML = `Ingredient2: ${strIngredient2}`;\r\n\r\n  const info3 = document.createElement('p');\r\n  info3.innerHTML = `Ingredient3: ${strIngredient3}`;\r\n\r\n  const info4 = document.createElement('p');\r\n  info4.innerHTML = `Ingredient4: ${strIngredient4}`;\r\n\r\n  const instructionTitle = document.createElement('h2');\r\n  instructionTitle.innerHTML = 'Read Instructions';\r\n  instructionTitle.className = 'instructions-title';\r\n  const instruction = document.createElement('p');\r\n  instruction.className = 'instructions';\r\n\r\n  const allComments = await fetchComments(idDrink);\r\n  const count = commentCounter(allComments);\r\n\r\n  instruction.innerHTML = strInstructions;\r\n  const commentDiv = document.createElement('div');\r\n  commentDiv.className = 'comment-div';\r\n  const commentTitle = document.createElement('h2');\r\n  commentTitle.innerHTML = `Comments (${count})`;\r\n  commentTitle.className = 'comment-title';\r\n\r\n  const ul = document.createElement('ul');\r\n  reloadComments(allComments, ul);\r\n\r\n  icon.addEventListener('click', () => {\r\n    card.style.display = 'none';\r\n    document.body.style.overflow = '';\r\n  });\r\n\r\n  const addCommentDiv = document.createElement('form');\r\n  addCommentDiv.className = 'new-comment-div';\r\n  const newCommentTitle = document.createElement('h2');\r\n  newCommentTitle.innerHTML = 'Add a comment';\r\n  newCommentTitle.className = 'add-comment-title';\r\n\r\n  const nameInput = document.createElement('input');\r\n  nameInput.className = 'input-comment';\r\n  nameInput.placeholder = 'Your name';\r\n\r\n  const message = document.createElement('textarea');\r\n  message.className = 'textarea-input';\r\n  message.cols = 10;\r\n  message.rows = 10;\r\n  message.placeholder = 'Your insights....';\r\n\r\n  const button = document.createElement('button');\r\n  button.textContent = 'COMMENT';\r\n  button.className = 'submit-button';\r\n\r\n  button.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n    const username = nameInput.value;\r\n    const comment = message.value;\r\n\r\n    if (username === '' || comment === '') {\r\n      alert('fields cannot be empty');\r\n      return;\r\n    }\r\n\r\n    const id = Number(idDrink);\r\n\r\n    const showComments = async () => {\r\n      const res = await postComments(id, username, comment);\r\n\r\n      if (res) {\r\n        const ul = document.querySelector('.comment-list');\r\n        while (ul.firstChild) {\r\n          ul.removeChild(ul.firstChild);\r\n        }\r\n\r\n        const allComments = await fetchComments(idDrink);\r\n        reloadComments(allComments, ul);\r\n      }\r\n    };\r\n    showComments();\r\n\r\n    nameInput.value = '';\r\n    message.value = '';\r\n  });\r\n\r\n  commentDiv.append(commentTitle, ul);\r\n  infoDiv.append(info1, info2, info3, info4);\r\n  imageDiv.append(image);\r\n  addCommentDiv.append(newCommentTitle, nameInput, message, button);\r\n  card.append(icon, imageDiv, title, infoDiv,\r\n    instructionTitle, instruction, commentDiv, addCommentDiv);\r\n  document.body.appendChild(card);\r\n};\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/details.js?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_like_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/like.svg */ \"./src/img/like.svg\");\n/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.js */ \"./src/modules/data.js\");\n\n\n\nconst displayItems = async (url, url2) => {\n  const itemSection = document.querySelector('#listItems');\n  const margaritas = document.querySelector('#margaritas');\n  const allItems = await (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getData)(url);\n  const allMargaritas = allItems.drinks;\n  allMargaritas.forEach((element) => {\n    itemSection.innerHTML += `<div class=\"item\">\n    <img class=\"margaritaImg\" src=\"${element.strDrinkThumb}\" alt=\"item\">\n    <div class=\"title\" id =\"${element.idDrink}\">\n      <h2>${element.strDrink}</h2>\n      <div class=\"likes\">\n        <img class=\"likeImg\" src=\"${_img_like_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"like\">\n        <p class=\"likesNum\"></p>\n      </div>\n      </div>\n      <button class=\"commentBtn\">Comments</button>\n      <button class=\"reservationBtn\">Reservations</button>\n  </div>`;\n  });\n  const likesP = document.querySelectorAll('.likesNum');\n  const allLikes = await (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.getData)(`${url2}likes/`);\n  likesP.forEach((element, index) => {\n    element.innerText = `${allLikes[index].likes} likes`;\n  });\n  const likesImg = document.querySelectorAll('.likeImg');\n  (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.sendlike)(`${url2}likes/`, likesImg);\n  (0,_data_js__WEBPACK_IMPORTED_MODULE_1__.counterOfDrinks)(allLikes, margaritas);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayItems);\n\n//# sourceURL=webpack://to-do-list/./src/modules/display.js?");

/***/ }),

/***/ "./src/img/like.svg":
/*!**************************!*\
  !*** ./src/img/like.svg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a0ceca258f7e606d08e.svg\";\n\n//# sourceURL=webpack://to-do-list/./src/img/like.svg?");

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2b4e7421d1c6dc935d85.png\";\n\n//# sourceURL=webpack://to-do-list/./src/img/logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);