/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://campworking/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://campworking/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://campworking/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ \"./src/pages/index/styles/index.scss\");\n\nconst header = document.querySelector('.header');\nconst burgerButton = document.querySelector('.burger__lines');\nconst overlay = document.querySelector('.burger__overlay');\nconst navigation = document.querySelector('.navigation');\nconst menuToggle = () => {\n  burgerButton.classList.toggle('burger__lines_active');\n  overlay.classList.toggle('burger__overlay_active');\n  navigation.classList.toggle('navigation_active');\n};\noverlay.addEventListener('click', menuToggle);\nburgerButton.addEventListener('click', menuToggle);\n\n//# sourceURL=webpack://campworking/./src/pages/index/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/styles/index.scss":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/styles/index.scss ***!
  \************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/heuristica-regular.otf */ \"./src/assets/fonts/heuristica-regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/heuristica-italic.otf */ \"./src/assets/fonts/heuristica-italic.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/heuristica-bold.otf */ \"./src/assets/fonts/heuristica-bold.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/Lufga-Bold.ttf */ \"./src/assets/fonts/Lufga-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/MyriadPro-Regular.otf */ \"./src/assets/fonts/MyriadPro-Regular.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/TTNormsPro-Regular.ttf */ \"./src/assets/fonts/TTNormsPro-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/TTNormsPro-Light.ttf */ \"./src/assets/fonts/TTNormsPro-Light.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/TTNormsPro-Medium.ttf */ \"./src/assets/fonts/TTNormsPro-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/TTNormsPro-Bold.ttf */ \"./src/assets/fonts/TTNormsPro-Bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/fonts/NotoSerifDisplay-Regular.ttf */ \"./src/assets/fonts/NotoSerifDisplay-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/logo.svg */ \"./src/assets/images/logo.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(/*! ../../../assets/images/logo_small.svg */ \"./src/assets/images/logo_small.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".section__logo-list, .card__info, .burger, .navigation__list, .recommend__title, .footer__links, .footer__social-list, .subscribe__info {\\n  display: flex;\\n  flex-direction: row;\\n}\\n\\n.card, .card__description, .recommend, .recommend__list, .subscribe__form, .subscribe__container {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.section__list, .section__logo-list, .recommend__list, .footer__social-list {\\n  list-style-type: none;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.section, .section__wrapper, .header, .footer__wrapper, .subscribe {\\n  padding-right: 70px;\\n  padding-left: 70px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .section, .section__wrapper, .header, .footer__wrapper, .subscribe {\\n    padding-right: 60px;\\n    padding-left: 60px;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .section, .section__wrapper, .header, .footer__wrapper, .subscribe {\\n    padding-right: 20px;\\n    padding-left: 20px;\\n  }\\n}\\n\\n.section__title {\\n  margin: 0;\\n  font-family: TTNorms, arial, serif;\\n  font-size: 36px;\\n}\\n@media screen and (max-width: 767px) {\\n  .section__title {\\n    font-size: 30px;\\n  }\\n}\\n\\n.card__item-title {\\n  margin: 0;\\n  padding-top: 34px;\\n  font-family: TTNorms, arial, serif;\\n  font-size: 24px;\\n  line-height: 30px;\\n  font-weight: 500;\\n}\\n@media screen and (max-width: 767px) {\\n  .card__item-title {\\n    font-size: 18px;\\n    line-height: 24px;\\n  }\\n}\\n\\n.card__date, .card__company, .card__place {\\n  font-family: TTNorms, arial, serif;\\n  font-size: 14px;\\n  font-weight: 400;\\n}\\n\\n@font-face {\\n  font-family: Heuristica;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: Heuristica;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"opentype\\\");\\n  font-weight: 400;\\n  font-style: italic;\\n}\\n@font-face {\\n  font-family: Heuristica;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"opentype\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: Lugfa;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format(\\\"truetype\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: Myriad;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format(\\\"opentype\\\");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: TTNorms;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \") format(\\\"truetype\\\");\\n  font-weight: 400;\\n}\\n@font-face {\\n  font-family: TTNorms;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format(\\\"truetype\\\");\\n  font-weight: 300;\\n}\\n@font-face {\\n  font-family: TTNorms;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format(\\\"truetype\\\");\\n  font-weight: 500;\\n}\\n@font-face {\\n  font-family: TTNorms;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") format(\\\"truetype\\\");\\n  font-weight: 700;\\n}\\n@font-face {\\n  font-family: Noto;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format(\\\"truetype\\\");\\n  font-weight: normal;\\n}\\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\\n/* Document\\n   ========================================================================== */\\n/**\\n * 1. Correct the line height in all browsers.\\n * 2. Prevent adjustments of font size after orientation changes in iOS.\\n */\\nhtml {\\n  line-height: 1.15; /* 1 */\\n  -webkit-text-size-adjust: 100%; /* 2 */\\n}\\n\\n/* Sections\\n   ========================================================================== */\\n/**\\n * Remove the margin in all browsers.\\n */\\nbody {\\n  margin: 0;\\n}\\n\\n/**\\n * Render the `main` element consistently in IE.\\n */\\nmain {\\n  display: block;\\n}\\n\\n/**\\n * Correct the font size and margin on `h1` elements within `section` and\\n * `article` contexts in Chrome, Firefox, and Safari.\\n */\\nh1 {\\n  font-size: 2em;\\n  margin: 0.67em 0;\\n}\\n\\n/* Grouping content\\n   ========================================================================== */\\n/**\\n * 1. Add the correct box sizing in Firefox.\\n * 2. Show the overflow in Edge and IE.\\n */\\nhr {\\n  box-sizing: content-box; /* 1 */\\n  height: 0; /* 1 */\\n  overflow: visible; /* 2 */\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\npre {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/* Text-level semantics\\n   ========================================================================== */\\n/**\\n * Remove the gray background on active links in IE 10.\\n */\\na {\\n  background-color: transparent;\\n}\\n\\n/**\\n * 1. Remove the bottom border in Chrome 57-\\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\\n */\\nabbr[title] {\\n  border-bottom: none; /* 1 */\\n  text-decoration: underline; /* 2 */\\n  text-decoration: underline dotted; /* 2 */\\n}\\n\\n/**\\n * Add the correct font weight in Chrome, Edge, and Safari.\\n */\\nb,\\nstrong {\\n  font-weight: bolder;\\n}\\n\\n/**\\n * 1. Correct the inheritance and scaling of font size in all browsers.\\n * 2. Correct the odd `em` font sizing in all browsers.\\n */\\ncode,\\nkbd,\\nsamp {\\n  font-family: monospace, monospace; /* 1 */\\n  font-size: 1em; /* 2 */\\n}\\n\\n/**\\n * Add the correct font size in all browsers.\\n */\\nsmall {\\n  font-size: 80%;\\n}\\n\\n/**\\n * Prevent `sub` and `sup` elements from affecting the line height in\\n * all browsers.\\n */\\nsub,\\nsup {\\n  font-size: 75%;\\n  line-height: 0;\\n  position: relative;\\n  vertical-align: baseline;\\n}\\n\\nsub {\\n  bottom: -0.25em;\\n}\\n\\nsup {\\n  top: -0.5em;\\n}\\n\\n/* Embedded content\\n   ========================================================================== */\\n/**\\n * Remove the border on images inside links in IE 10.\\n */\\nimg {\\n  border-style: none;\\n}\\n\\n/* Forms\\n   ========================================================================== */\\n/**\\n * 1. Change the font styles in all browsers.\\n * 2. Remove the margin in Firefox and Safari.\\n */\\nbutton,\\ninput,\\noptgroup,\\nselect,\\ntextarea {\\n  font-family: inherit; /* 1 */\\n  font-size: 100%; /* 1 */\\n  line-height: 1.15; /* 1 */\\n  margin: 0; /* 2 */\\n}\\n\\n/**\\n * Show the overflow in IE.\\n * 1. Show the overflow in Edge.\\n */\\nbutton,\\ninput { /* 1 */\\n  overflow: visible;\\n}\\n\\n/**\\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\\n * 1. Remove the inheritance of text transform in Firefox.\\n */\\nbutton,\\nselect { /* 1 */\\n  text-transform: none;\\n}\\n\\n/**\\n * Correct the inability to style clickable types in iOS and Safari.\\n */\\nbutton,\\n[type=button],\\n[type=reset],\\n[type=submit] {\\n  -webkit-appearance: button;\\n}\\n\\n/**\\n * Remove the inner border and padding in Firefox.\\n */\\nbutton::-moz-focus-inner,\\n[type=button]::-moz-focus-inner,\\n[type=reset]::-moz-focus-inner,\\n[type=submit]::-moz-focus-inner {\\n  border-style: none;\\n  padding: 0;\\n}\\n\\n/**\\n * Restore the focus styles unset by the previous rule.\\n */\\nbutton:-moz-focusring,\\n[type=button]:-moz-focusring,\\n[type=reset]:-moz-focusring,\\n[type=submit]:-moz-focusring {\\n  outline: 1px dotted ButtonText;\\n}\\n\\n/**\\n * Correct the padding in Firefox.\\n */\\nfieldset {\\n  padding: 0.35em 0.75em 0.625em;\\n}\\n\\n/**\\n * 1. Correct the text wrapping in Edge and IE.\\n * 2. Correct the color inheritance from `fieldset` elements in IE.\\n * 3. Remove the padding so developers are not caught out when they zero out\\n *    `fieldset` elements in all browsers.\\n */\\nlegend {\\n  box-sizing: border-box; /* 1 */\\n  color: inherit; /* 2 */\\n  display: table; /* 1 */\\n  max-width: 100%; /* 1 */\\n  padding: 0; /* 3 */\\n  white-space: normal; /* 1 */\\n}\\n\\n/**\\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\\n */\\nprogress {\\n  vertical-align: baseline;\\n}\\n\\n/**\\n * Remove the default vertical scrollbar in IE 10+.\\n */\\ntextarea {\\n  overflow: auto;\\n}\\n\\n/**\\n * 1. Add the correct box sizing in IE 10.\\n * 2. Remove the padding in IE 10.\\n */\\n[type=checkbox],\\n[type=radio] {\\n  box-sizing: border-box; /* 1 */\\n  padding: 0; /* 2 */\\n}\\n\\n/**\\n * Correct the cursor style of increment and decrement buttons in Chrome.\\n */\\n[type=number]::-webkit-inner-spin-button,\\n[type=number]::-webkit-outer-spin-button {\\n  height: auto;\\n}\\n\\n/**\\n * 1. Correct the odd appearance in Chrome and Safari.\\n * 2. Correct the outline style in Safari.\\n */\\n[type=search] {\\n  -webkit-appearance: textfield; /* 1 */\\n  outline-offset: -2px; /* 2 */\\n}\\n\\n/**\\n * Remove the inner padding in Chrome and Safari on macOS.\\n */\\n[type=search]::-webkit-search-decoration {\\n  -webkit-appearance: none;\\n}\\n\\n/**\\n * 1. Correct the inability to style clickable types in iOS and Safari.\\n * 2. Change font properties to `inherit` in Safari.\\n */\\n::-webkit-file-upload-button {\\n  -webkit-appearance: button; /* 1 */\\n  font: inherit; /* 2 */\\n}\\n\\n/* Interactive\\n   ========================================================================== */\\n/*\\n * Add the correct display in Edge, IE 10+, and Firefox.\\n */\\ndetails {\\n  display: block;\\n}\\n\\n/*\\n * Add the correct display in all browsers.\\n */\\nsummary {\\n  display: list-item;\\n}\\n\\n/* Misc\\n   ========================================================================== */\\n/**\\n * Add the correct display in IE 10+.\\n */\\ntemplate {\\n  display: none;\\n}\\n\\n/**\\n * Add the correct display in IE 10.\\n */\\n[hidden] {\\n  display: none;\\n}\\n\\n.section {\\n  width: 100%;\\n  max-width: 1366px;\\n  box-sizing: border-box;\\n  padding-top: 60px;\\n  padding-bottom: 60px;\\n}\\n.section_gray {\\n  max-width: none;\\n  background-color: rgba(230, 230, 230, 0.43);\\n}\\n@media screen and (max-width: 767px) {\\n  .section_nopadding {\\n    padding: 0;\\n  }\\n}\\n.section__wrapper {\\n  width: 100%;\\n  max-width: 1366px;\\n  margin: 0 auto;\\n  box-sizing: border-box;\\n}\\n.section__wrapper_nopadding {\\n  max-width: 1204px;\\n  padding: 0;\\n}\\n.section_partners {\\n  max-height: 20vh;\\n  padding-top: 90px;\\n  padding-bottom: 100px;\\n  box-sizing: border-box;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-areas: \\\"title list list\\\";\\n}\\n@media screen and (max-width: 1289px) {\\n  .section_partners {\\n    max-height: none;\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 36px;\\n    padding-top: 55px;\\n    padding-bottom: 30px;\\n  }\\n}\\n.section__icon {\\n  width: 12px;\\n  height: 25px;\\n}\\n@media screen and (max-width: 767px) {\\n  .section__icon {\\n    height: 16px;\\n  }\\n}\\n.section__list {\\n  padding-top: 82px;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 42px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .section__list {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n@media screen and (max-width: 374px) {\\n  .section__list {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .section__list_flex {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n.section__logo-list {\\n  grid-area: list;\\n  justify-content: space-between;\\n}\\n@media screen and (max-width: 1023px) {\\n  .section__logo-list {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    row-gap: 20px;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .section__logo-list {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n.section__logo {\\n  max-width: 150px;\\n  filter: grayscale(1);\\n  opacity: 0.2;\\n  transition: all 0.7s ease-out;\\n  cursor: pointer;\\n}\\n.section__logo:hover {\\n  filter: grayscale(0);\\n  opacity: 1;\\n}\\n@media screen and (max-width: 767px) {\\n  .section__logo {\\n    max-width: 80%;\\n  }\\n}\\n\\n@media screen and (max-width: 1279px) {\\n  .card_align_center {\\n    align-self: center;\\n    text-align: center;\\n  }\\n}\\n.card_wide {\\n  grid-area: 1/2/1/4;\\n  justify-content: space-between;\\n}\\n@media screen and (max-width: 1279px) {\\n  .card_wide {\\n    grid-area: 1/1/1/3;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .card_side {\\n    display: grid;\\n    grid-template-columns: repeat(2, 1fr);\\n    grid-template-areas: \\\"image title\\\" \\\"image info\\\";\\n    gap: 10px;\\n  }\\n}\\n.card_narrow {\\n  max-width: 330px;\\n}\\n.card__image {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.card__block {\\n  grid-area: image;\\n}\\n.card__block-inner {\\n  width: 100%;\\n  padding-top: 100%;\\n  background-color: black;\\n  position: relative;\\n}\\n.card__block-inner_wide {\\n  padding-top: calc(50% - 21px);\\n}\\n.card__item-title {\\n  width: 100%;\\n  box-sizing: border-box;\\n}\\n@media screen and (max-width: 767px) {\\n  .card__item-title {\\n    align-self: flex-end;\\n  }\\n}\\n.card__item-title_narrow {\\n  width: 130px;\\n}\\n.card__item-title_wide {\\n  padding-top: 15px;\\n  font-size: 48px;\\n  line-height: 48px;\\n  max-width: 500px;\\n}\\n@media screen and (max-width: 767px) {\\n  .card__item-title_wide {\\n    font-size: 21px;\\n    line-height: 18px;\\n  }\\n}\\n.card__info {\\n  grid-area: info;\\n  align-items: center;\\n  gap: 10px;\\n}\\n@media screen and (max-width: 767px) {\\n  .card__info {\\n    align-self: flex-start;\\n  }\\n}\\n.card__description {\\n  align-items: stretch;\\n}\\n.card__preview {\\n  font-family: TTNorms, serif;\\n  font-size: 18px;\\n}\\n@media screen and (max-width: 1440px) {\\n  .card__preview {\\n    font-size: 14px;\\n  }\\n}\\n.card__author {\\n  margin: 0;\\n  font-family: TTNorms, serif;\\n  font-size: 18px;\\n  color: #808080;\\n  text-transform: uppercase;\\n}\\n@media screen and (max-width: 1440px) {\\n  .card__author {\\n    font-size: 14px;\\n  }\\n}\\n.card__date {\\n  color: #ff4f17;\\n}\\n.card__company {\\n  color: #CEB44B;\\n}\\n.card__place {\\n  border-left: 1px solid #000;\\n  padding-left: 10px;\\n}\\n.card__item-description {\\n  max-width: 330px;\\n  font-family: TTNorms, arial, serif;\\n  font-size: 21px;\\n  font-weight: 400;\\n  line-height: 30px;\\n}\\n@media screen and (max-width: 1440px) {\\n  .card__item-description {\\n    max-width: 290px;\\n    font-size: 18px;\\n    line-height: 28px;\\n  }\\n}\\n@media screen and (max-width: 1279px) {\\n  .card__item-description {\\n    max-width: 100%;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .card__item-description {\\n    font-size: 14px;\\n    line-height: 18px;\\n    max-width: 180px;\\n    align-self: center;\\n  }\\n}\\n.card__icon {\\n  width: 80px;\\n}\\n@media screen and (max-width: 1279px) {\\n  .card__icon {\\n    align-self: center;\\n  }\\n}\\n\\n.header {\\n  z-index: 2;\\n  width: 100%;\\n  max-width: 1366px;\\n  padding-top: 54px;\\n  box-sizing: border-box;\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  transition: all 0.3s linear;\\n}\\n@media screen and (min-width: 1024px) and (max-width: 1279px) {\\n  .header {\\n    column-gap: 40px;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .header {\\n    height: 15vh;\\n    background-color: white;\\n    padding: 30px 60px;\\n    position: fixed;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .header {\\n    padding: 20px 20px;\\n    height: 70px;\\n  }\\n}\\n\\n.burger {\\n  visibility: hidden;\\n  display: none;\\n  width: 25px;\\n  height: 25px;\\n  cursor: pointer;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.burger__lines {\\n  position: relative;\\n  width: 100%;\\n  height: 3px;\\n  background: #000;\\n  transition: all 0.3s linear;\\n}\\n.burger__lines::before {\\n  width: 100%;\\n  height: 3px;\\n  background: #000;\\n  position: absolute;\\n  top: -10px;\\n  content: \\\"\\\";\\n  transition: all 0.3s linear;\\n}\\n.burger__lines::after {\\n  width: 100%;\\n  height: 3px;\\n  background: #000;\\n  position: absolute;\\n  top: 10px;\\n  content: \\\"\\\";\\n  transition: all 0.3s linear;\\n}\\n.burger__lines_active {\\n  background-color: transparent;\\n  transition: all 0.3s linear;\\n}\\n.burger__lines_active::before {\\n  top: 0;\\n  rotate: 45deg;\\n}\\n.burger__lines_active::after {\\n  top: 0;\\n  rotate: -45deg;\\n}\\n.burger__overlay {\\n  z-index: 1;\\n  display: flex;\\n  visibility: hidden;\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  opacity: 0;\\n  background-color: rgb(0, 0, 0);\\n  transition: opacity 0.4s ease-in, visibility 0.4s ease-in;\\n}\\n@media screen and (max-width: 1023px) {\\n  .burger__overlay_active {\\n    display: block;\\n    visibility: visible;\\n    opacity: 0.5;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .burger {\\n    display: flex;\\n    visibility: visible;\\n  }\\n}\\n\\n.logo {\\n  display: block;\\n}\\n.logo__image {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  width: 90%;\\n  max-width: 290px;\\n  min-width: 150px;\\n  max-height: 100px;\\n  min-height: 30px;\\n  background-repeat: no-repeat;\\n  background-size: contain;\\n}\\n@media screen and (max-width: 767px) {\\n  .logo__image_footer {\\n    max-width: 220px;\\n    min-width: 42px;\\n    min-height: 73px;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n  }\\n}\\n.logo_footer {\\n  width: 15vw;\\n}\\n@media screen and (max-width: 1023px) {\\n  .logo {\\n    width: 100%;\\n  }\\n}\\n\\n.navigation {\\n  width: 100%;\\n  max-width: 780px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .navigation {\\n    position: fixed;\\n    visibility: hidden;\\n    top: 15vh;\\n    right: -100%;\\n    height: 85vh;\\n    background-color: #fff;\\n    width: 90%;\\n    box-sizing: border-box;\\n    padding: 40px 50px;\\n    transition: all 0.3s linear;\\n  }\\n  .navigation_active {\\n    visibility: visible;\\n    right: -10px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    row-gap: 10%;\\n    justify-content: space-between;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .navigation {\\n    top: 70px;\\n    height: calc(100vh - 70px);\\n  }\\n}\\n.navigation__list {\\n  width: 100%;\\n  max-width: 800px;\\n  list-style-type: none;\\n  padding: 0;\\n  margin: 0;\\n  justify-content: space-between;\\n  align-items: center;\\n  row-gap: 20px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .navigation__list {\\n    flex-direction: column;\\n    align-items: flex-end;\\n    box-sizing: border-box;\\n    justify-content: flex-start;\\n  }\\n}\\n.navigation__list_footer {\\n  max-width: none;\\n}\\n@media screen and (max-width: 1023px) {\\n  .navigation__list_footer {\\n    padding-left: 30px;\\n    align-items: flex-start;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .navigation__list_footer {\\n    padding-left: 20px;\\n  }\\n}\\n.navigation__link {\\n  display: inline-block;\\n  text-align: center;\\n  font-family: TTNorms;\\n  text-decoration: none;\\n  color: black;\\n  font-size: 18px;\\n  transition: all 0.3s linear;\\n}\\n.navigation__link:hover {\\n  text-shadow: 0.8px 0px #000;\\n}\\n@media screen and (max-width: 1279px) {\\n  .navigation__link {\\n    font-size: 16px;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .navigation__link {\\n    font-size: 20px;\\n  }\\n}\\n.navigation__link_footer {\\n  color: #999999;\\n}\\n.navigation__link_footer:hover {\\n  text-shadow: 1px 0px #999;\\n}\\n@media screen and (max-width: 1023px) {\\n  .navigation__link_footer {\\n    text-align: left;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .navigation__link_footer {\\n    font-size: 14px;\\n  }\\n}\\n.navigation__contacts {\\n  display: none;\\n  font-family: TTNorms, Arial, Helvetica, sans-serif;\\n}\\n@media screen and (max-width: 1023px) {\\n  .navigation__contacts {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-end;\\n    row-gap: 15px;\\n  }\\n}\\n.navigation__contacts a {\\n  text-align: right;\\n  font-size: 18px;\\n  text-decoration: none;\\n  color: rgba(0, 0, 0, 0.5);\\n}\\n\\n.banner {\\n  min-height: 485px;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  align-items: flex-end;\\n  grid-template-areas: \\\"info image image\\\";\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner {\\n    max-height: none;\\n    display: flex;\\n    flex-direction: column-reverse;\\n    padding: 30px 0 50px 0;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .banner_main {\\n    padding-top: 15vh;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .banner {\\n    padding-top: 0px;\\n  }\\n  .banner_main {\\n    padding-top: 10vh;\\n  }\\n}\\n.banner__info {\\n  grid-area: info;\\n  max-width: 100%;\\n  z-index: 1;\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner__info {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n.banner__icon {\\n  width: 74px;\\n  padding-bottom: 37px;\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner__icon {\\n    display: none;\\n  }\\n}\\n.banner__image-wrapper {\\n  grid-area: image;\\n  align-self: flex-start;\\n  justify-self: flex-end;\\n  width: 100%;\\n  height: 60vh;\\n  min-height: 525px;\\n}\\n@media screen and (max-width: 767px) {\\n  .banner__image-wrapper {\\n    min-height: 350px;\\n  }\\n}\\n.banner__image-inner {\\n  height: 100%;\\n}\\n.banner__image {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.banner__line {\\n  z-index: 1;\\n  width: 120%;\\n  height: 0.5px;\\n  background-color: #000;\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner__line {\\n    display: none;\\n  }\\n}\\n.banner__title {\\n  margin: 0;\\n  max-width: 410px;\\n  font-size: 48px;\\n  padding-top: 26px;\\n  padding-bottom: 64px;\\n  font-weight: 500;\\n}\\n.banner__title span {\\n  font-style: italic;\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner__title {\\n    text-align: center;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .banner__title {\\n    max-width: 154px;\\n    font-size: 30px;\\n  }\\n}\\n.banner__article-link {\\n  text-decoration: none;\\n  color: #000;\\n}\\n.banner__place {\\n  margin: 0;\\n  font-family: TTNorms, arial, helvetica, sans-serif;\\n  font-size: 18px;\\n  font-weight: 700;\\n  color: #808080;\\n}\\n@media screen and (max-width: 1279px) {\\n  .banner__place {\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n    align-items: center;\\n  }\\n}\\n.banner__link {\\n  text-transform: uppercase;\\n  color: #000;\\n  font-family: TTNorms, arial, sans-serif;\\n  font-weight: 400;\\n  font-size: 14px;\\n  transition: all 0.2s linear;\\n}\\n.banner__link:hover {\\n  text-shadow: 0.5px 0px #000;\\n}\\n\\n.about {\\n  display: grid;\\n  column-gap: 30px;\\n  row-gap: 30px;\\n  grid-template-columns: 200px 170px 1fr 1fr;\\n  grid-template-areas: \\\"title line description description\\\" \\\"empty empty subtitle subtitle\\\" \\\"item1 item1 item2 item3\\\";\\n}\\n@media screen and (min-width: 1024px) and (max-width: 1279px) {\\n  .about {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    grid-template-areas: \\\"title nth nth\\\" \\\"description description description\\\" \\\"subtitle subtitle subtitle\\\" \\\"item1 item2 item3\\\";\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .about {\\n    display: flex;\\n    flex-direction: column;\\n  }\\n}\\n.about .item {\\n  align-self: flex-start;\\n}\\n@media screen and (max-width: 1023px) {\\n  .about .item {\\n    align-self: center;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .about .item {\\n    max-width: 280px;\\n  }\\n}\\n.about .item1 {\\n  grid-area: item1;\\n}\\n.about .item2 {\\n  grid-area: item2;\\n}\\n.about .item3 {\\n  grid-area: item3;\\n}\\n.about__line {\\n  grid-area: line;\\n  width: 170px;\\n  height: 0.5px;\\n  margin-top: 20px;\\n  background-color: #000;\\n}\\n@media screen and (max-width: 1279px) {\\n  .about__line {\\n    display: none;\\n  }\\n}\\n.about__description {\\n  grid-area: description;\\n  margin: 0;\\n  align-self: baseline;\\n  font-size: 24px;\\n  line-height: 34px;\\n  color: #808080;\\n}\\n@media screen and (max-width: 1279px) {\\n  .about__description {\\n    padding-top: 38px;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .about__description {\\n    padding-top: 0px;\\n    font-size: 18px;\\n    line-height: 24px;\\n  }\\n}\\n.about__empty {\\n  grid-area: empty;\\n}\\n@media screen and (max-width: 767px) {\\n  .about__empty {\\n    display: none;\\n  }\\n}\\n.about__mission {\\n  margin: 0;\\n  padding-top: 140px;\\n  padding-bottom: 30px;\\n  grid-area: subtitle;\\n  font-family: TTNorms, arial, serif;\\n  font-size: 24px;\\n  line-height: 42px;\\n  font-weight: 700;\\n}\\n@media screen and (max-width: 1279px) {\\n  .about__mission {\\n    text-align: center;\\n    padding-top: 72px;\\n    align-self: center;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .about__mission {\\n    padding-top: 0px;\\n    padding-bottom: 0px;\\n    font-size: 18px;\\n  }\\n}\\n\\n.recommend {\\n  font-family: TTNorms, serif;\\n}\\n.recommend__title {\\n  margin: 0;\\n  column-gap: 10px;\\n  align-items: baseline;\\n  padding-top: 84px;\\n  line-height: 24px;\\n  font-size: 30px;\\n}\\n.recommend__list {\\n  padding-top: 54px;\\n  row-gap: 60px;\\n}\\n.recommend__item {\\n  display: grid;\\n}\\n.recommend__link {\\n  text-decoration: none;\\n  color: #000;\\n  display: grid;\\n  grid-template-columns: 200px 1fr;\\n  column-gap: 40px;\\n  grid-template-areas: \\\"image title\\\" \\\"image description\\\";\\n}\\n.recommend__image {\\n  grid-area: image;\\n  width: 200px;\\n  height: 200px;\\n  background-color: #808080;\\n}\\n.recommend__article {\\n  grid-area: title;\\n  margin: 0;\\n  padding-top: 10px;\\n  display: block;\\n  color: #000;\\n  font-size: 28px;\\n  line-height: 34px;\\n  font-weight: 500;\\n  display: grid;\\n  width: 200px;\\n}\\n.recommend__preview {\\n  grid-area: description;\\n  margin: 0;\\n  display: block;\\n  width: 280px;\\n  font-size: 18px;\\n  line-height: 24px;\\n  font-weight: 400;\\n}\\n\\n.footer {\\n  width: 100%;\\n  background-color: rgba(230, 230, 230, 0.43);\\n  padding-top: 70px;\\n  padding-bottom: 90px;\\n  box-sizing: border-box;\\n  display: flex;\\n  justify-content: center;\\n}\\n.footer__wrapper {\\n  box-sizing: border-box;\\n  width: 100%;\\n  max-width: 1366px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .footer__wrapper {\\n    display: flex;\\n    flex-direction: row-reverse;\\n    justify-content: space-between;\\n  }\\n}\\n.footer__info-wrapper {\\n  padding-top: 61px;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: flex-end;\\n}\\n@media screen and (max-width: 1023px) {\\n  .footer__info-wrapper {\\n    align-items: flex-start;\\n    padding-top: 0;\\n  }\\n}\\n.footer__links {\\n  align-items: flex-end;\\n  column-gap: 60px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .footer__links {\\n    padding-left: 2s0px;\\n    flex-direction: column-reverse;\\n    align-items: flex-start;\\n    row-gap: 20px;\\n  }\\n}\\n.footer__links a {\\n  text-decoration: none;\\n  color: black;\\n  display: block;\\n  max-width: 330px;\\n  font-family: TTNorms, serif;\\n  font-size: 18px;\\n  font-weight: 400;\\n  line-height: 24px;\\n  transition: all 0.2s linear;\\n}\\n.footer__links a:hover {\\n  text-shadow: 0.8px 0px #000;\\n}\\n@media screen and (max-width: 767px) {\\n  .footer__links a {\\n    font-size: 14px;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .footer__contacts {\\n    display: flex;\\n    flex-direction: column;\\n    row-gap: 10px;\\n  }\\n}\\n.footer__social-list {\\n  column-gap: 20px;\\n  padding-bottom: 10px;\\n}\\n.footer__social-item {\\n  display: block;\\n  width: 20px;\\n  height: 20px;\\n}\\n.footer__social-item svg {\\n  height: 20px;\\n  fill: rgba(0, 0, 0, 0.6);\\n  transition: all 0.3s linear;\\n}\\n.footer__social-item svg:hover {\\n  fill: #000;\\n}\\n.footer__geo {\\n  display: none;\\n}\\n\\n.subscribe {\\n  position: relative;\\n  width: 100%;\\n  max-width: 1366px;\\n  min-height: 525px;\\n  padding-top: 72px;\\n  padding-bottom: 60px;\\n  box-sizing: border-box;\\n}\\n@media screen and (max-width: 1023px) {\\n  .subscribe {\\n    padding: 48px 0 55px 0;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe {\\n    min-height: 350px;\\n  }\\n}\\n.subscribe__wrapper {\\n  margin: 0 auto;\\n  background-color: #f2f2f2;\\n  width: 40%;\\n  padding: 30px 120px;\\n}\\n@media screen and (max-width: 1289px) {\\n  .subscribe__wrapper {\\n    width: 80%;\\n    box-sizing: border-box;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n}\\n@media screen and (max-width: 1023px) {\\n  .subscribe__wrapper {\\n    width: 80%;\\n    max-width: 630px;\\n    padding: 30px 120px;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__wrapper {\\n    padding: 20px 32px;\\n  }\\n}\\n.subscribe__image {\\n  position: absolute;\\n  z-index: -1;\\n  top: 0;\\n  right: 80px;\\n  max-width: 890px;\\n}\\n@media screen and (max-width: 1023px) {\\n  .subscribe__image {\\n    width: 100%;\\n    height: 100%;\\n    right: 0;\\n  }\\n}\\n.subscribe__title {\\n  margin: 0;\\n  max-width: 250px;\\n  font-size: 48px;\\n  font-weight: 400;\\n}\\n.subscribe__title span {\\n  font-style: italic;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__title {\\n    text-align: center;\\n    font-size: 30px;\\n    line-height: 36px;\\n  }\\n}\\n.subscribe__form {\\n  padding-top: 46px;\\n  row-gap: 52px;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__form {\\n    width: 80%;\\n    padding-top: 15px;\\n    row-gap: 12px;\\n  }\\n}\\n.subscribe__container {\\n  row-gap: 18px;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__container {\\n    row-gap: 12px;\\n  }\\n}\\n.subscribe__input-container {\\n  position: relative;\\n}\\n.subscribe__icon {\\n  position: absolute;\\n  top: 25%;\\n  left: 2%;\\n  width: 25px;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__icon {\\n    top: 30%;\\n    left: 5%;\\n    width: 16px;\\n  }\\n}\\n.subscribe__icon_mail {\\n  top: 35%;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__icon_mail {\\n    top: 40%;\\n  }\\n}\\n.subscribe__input {\\n  width: 100%;\\n  padding: 15px 0 12px 60px;\\n  box-sizing: border-box;\\n  border: none;\\n  font-family: TTNorms, serif;\\n  font-size: 14px;\\n  font-weight: 300;\\n  color: #999999;\\n}\\n@media screen and (max-width: 1289px) {\\n  .subscribe__input {\\n    width: 100%;\\n  }\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__input {\\n    padding-left: 35px;\\n    font-size: 12px;\\n  }\\n}\\n.subscribe__info {\\n  column-gap: 25px;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n@media screen and (max-width: 1289px) {\\n  .subscribe__info {\\n    flex-direction: column;\\n  }\\n}\\n.subscribe__button {\\n  cursor: pointer;\\n  padding: 12px 23px;\\n  border: none;\\n  background-color: #000;\\n  color: #fff;\\n  text-transform: uppercase;\\n  font-family: TTNorms, serif;\\n  font-size: 14px;\\n  font-weight: 700;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__button {\\n    font-size: 12px;\\n  }\\n}\\n.subscribe__rules {\\n  margin: 0;\\n  padding-top: 15px;\\n  font-family: TTNorms, serif;\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-weight: 300;\\n  color: #999999;\\n}\\n@media screen and (max-width: 767px) {\\n  .subscribe__rules {\\n    font-size: 10px;\\n  }\\n}\\n\\nbody {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-family: Heuristica, Arial, Helvetica, sans-serif;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://campworking/./src/pages/index/styles/index.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./src/pages/index/styles/index.scss":
/*!*******************************************!*\
  !*** ./src/pages/index/styles/index.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./index.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/pages/index/styles/index.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://campworking/./src/pages/index/styles/index.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://campworking/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/fonts/Lufga-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/assets/fonts/Lufga-Bold.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/0b819e404b04598770c3.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/Lufga-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/MyriadPro-Regular.otf":
/*!************************************************!*\
  !*** ./src/assets/fonts/MyriadPro-Regular.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/31fe6e69dd2c18a7c626.otf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/MyriadPro-Regular.otf?");

/***/ }),

/***/ "./src/assets/fonts/NotoSerifDisplay-Regular.ttf":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/NotoSerifDisplay-Regular.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/4a646ff9d3b4accc6e77.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/NotoSerifDisplay-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/TTNormsPro-Bold.ttf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/TTNormsPro-Bold.ttf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/ca1a7eb9f72ef0dcfd46.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/TTNormsPro-Bold.ttf?");

/***/ }),

/***/ "./src/assets/fonts/TTNormsPro-Light.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/TTNormsPro-Light.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/08b32136957bbe1334d1.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/TTNormsPro-Light.ttf?");

/***/ }),

/***/ "./src/assets/fonts/TTNormsPro-Medium.ttf":
/*!************************************************!*\
  !*** ./src/assets/fonts/TTNormsPro-Medium.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/4b8603a56c06d7a5e40d.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/TTNormsPro-Medium.ttf?");

/***/ }),

/***/ "./src/assets/fonts/TTNormsPro-Regular.ttf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/TTNormsPro-Regular.ttf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/286accc215acf65c8da8.ttf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/TTNormsPro-Regular.ttf?");

/***/ }),

/***/ "./src/assets/fonts/heuristica-bold.otf":
/*!**********************************************!*\
  !*** ./src/assets/fonts/heuristica-bold.otf ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/2e3d3f31269055ab8461.otf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/heuristica-bold.otf?");

/***/ }),

/***/ "./src/assets/fonts/heuristica-italic.otf":
/*!************************************************!*\
  !*** ./src/assets/fonts/heuristica-italic.otf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fa3ca1a41e1a7c3d592b.otf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/heuristica-italic.otf?");

/***/ }),

/***/ "./src/assets/fonts/heuristica-regular.otf":
/*!*************************************************!*\
  !*** ./src/assets/fonts/heuristica-regular.otf ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/969b697ab1868a9c228a.otf\";\n\n//# sourceURL=webpack://campworking/./src/assets/fonts/heuristica-regular.otf?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/38759b747e4a812c755f.svg\";\n\n//# sourceURL=webpack://campworking/./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/images/logo_small.svg":
/*!******************************************!*\
  !*** ./src/assets/images/logo_small.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/da4731c53b666d6ee020.svg\";\n\n//# sourceURL=webpack://campworking/./src/assets/images/logo_small.svg?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/index/index.js");
/******/ 	
/******/ })()
;