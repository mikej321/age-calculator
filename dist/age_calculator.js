/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400;1,800&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

html {
  font-size: 62.5%;
}

body {
  position: relative;
  font-size: 1.6rem;
  background: hsl(0, 0%, 94%);
  font-family: "Poppins", "sans-serif";
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media screen and (min-width: 600px) {
  body {
    min-height: 100vh;
    justify-content: center;
  }
}
img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.container {
  margin-top: 10rem;
  max-width: 37.5rem;
  display: grid;
  grid-template-areas: "input" "arrow" "output";
  background: hsl(0, 0%, 100%);
  padding: 4rem 2rem;
  border-radius: 20px 20px 80px 20px;
}

@media screen and (min-width: 600px) {
  .container {
    margin-top: 0;
    width: 100%;
    max-width: 50rem;
    padding: 4rem;
  }
}
.user_input_container {
  grid-area: input;
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
}

@media screen and (min-width: 600px) {
  .user_input_container {
    margin-bottom: 1rem;
  }
}
.input_container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 2rem;
}
.input_container label {
  color: hsl(0, 1%, 44%);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.1rem;
}
.input_container label[error=""] {
  color: hsl(0, 100%, 67%);
}
.input_container input {
  width: 100%;
  max-width: 8rem;
  height: 5rem;
  border-radius: 6px;
  border: 1px solid hsl(0, 0%, 86%);
  padding-left: 1rem;
  outline: none;
  transition: border 0.2s ease-in-out;
}
.input_container input::placeholder {
  font-weight: 700;
}
.input_container input:focus {
  border: 1px solid hsl(259, 100%, 65%);
}
.input_container input[error=""] {
  border: 1px solid hsl(0, 100%, 67%);
}

@media screen and (min-width: 600px) {
  .input_container input {
    max-width: 10rem;
    height: 4.5rem;
  }
  .input_container input::placeholder {
    font-size: 2rem;
  }
}
.error {
  font-size: 0.9rem;
  font-weight: 400;
  font-style: italic;
  color: hsl(0, 100%, 67%);
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
}
.error[invalid=""] {
  max-height: fit-content;
  opacity: 1;
  overflow: auto;
}

.arrow_container {
  position: relative;
  margin-bottom: 5rem;
  grid-area: arrow;
}
.arrow_container .arrow {
  position: absolute;
  top: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 2rem;
  height: 2rem;
  color: hsl(0, 0%, 100%);
  border-radius: 50%;
  font-weight: 700;
  background: hsl(259, 100%, 65%);
  box-sizing: content-box;
  padding: 1.5rem;
  cursor: pointer;
  pointer-events: all;
  transition: all 0.2s ease-in-out;
}
.arrow_container .arrow path {
  stroke: #fff;
  stroke-width: 4px;
  transition: all 0.2s ease-in-out;
}
.arrow_container .arrow:hover {
  background: hsl(0, 0%, 8%);
}
.arrow_container .arrow:hover path {
  stroke-width: 2px;
}
.arrow_container .line {
  width: 100%;
  height: 2px;
  background: hsl(0, 0%, 94%);
}

@media screen and (min-width: 600px) {
  .arrow_container {
    margin-bottom: 2rem;
  }
  .arrow_container .arrow {
    left: unset;
    transform: translateX(0);
    right: 0;
  }
}
.age_calculation_container {
  grid-area: output;
  display: flex;
  flex-direction: column;
}
.age_calculation_container h1 {
  font-size: 4.75rem;
  font-weight: 800;
  font-style: italic;
  margin-bottom: -2rem;
}
.age_calculation_container p {
  font-size: 4.75rem;
  font-weight: 800;
  font-style: italic;
}
.age_calculation_container p:nth-child(2) {
  margin-bottom: -2rem;
}
.age_calculation_container .age_calculation {
  color: hsl(259, 100%, 65%);
}
.age_calculation_container .age_calculation[finished=""] {
  letter-spacing: 0px;
  margin-right: -2px;
}

@media screen and (min-width: 600px) {
  .age_calculation_container h1 {
    font-size: 6rem;
  }
  .age_calculation_container p {
    font-size: 6rem;
  }
  .age_calculation_container .age_calculation {
    letter-spacing: 10px;
    margin-right: -1.5rem;
  }
}
.attribution {
  position: fixed;
  bottom: 2rem;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.sass"],"names":[],"mappings":"AAgBA;;;EAGI,sBAAA;AAdJ;;AAgBA;EACI,SAAA;EACA,UAAA;EACA,uBAAA;AAbJ;;AAeA;EACI,gBAAA;AAZJ;;AAcA;EACI,kBAAA;EACA,iBAAA;EACA,2BAxBQ;EAyBR,oCAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAXJ;;AAaA;EACI;IACI,iBAAA;IACA,uBAAA;EAVN;AACF;AAWA;EACI,WAAA;EACA,YAAA;EACA,iBAAA;AATJ;;AAWA;EACI,iBAAA;EACA,kBAAA;EACA,aAAA;EACA,6CAAA;EACA,4BA9CI;EA+CJ,kBAAA;EACA,kCAAA;AARJ;;AAUA;EACI;IACI,aAAA;IACA,WAAA;IACA,gBAAA;IACA,aAAA;EAPN;AACF;AAQA;EACI,gBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AANJ;;AAQA;EACI;IACI,mBAAA;EALN;AACF;AAMA;EACI,aAAA;EACA,sBAAA;EACA,WAAA;EACA,mBAAA;AAJJ;AAKI;EACI,sBAtEM;EAuEN,yBAAA;EACA,mBAAA;EACA,iBAAA;AAHR;AAIQ;EACI,wBAjFA;AA+EZ;AAGI;EACI,WAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,mCAAA;AADR;AAEQ;EACI,gBAAA;AAAZ;AACQ;EACI,qCAAA;AACZ;AAAQ;EACI,mCAAA;AAEZ;;AAAA;EACI;IACI,gBAAA;IACA,cAAA;EAGN;EAFM;IACI,eAAA;EAIV;AACF;AAHA;EACI,iBAAA;EACA,gBAAA;EACA,kBAAA;EACA,wBA7GQ;EA8GR,aAAA;EACA,gBAAA;EACA,UAAA;EACA,oCAAA;AAKJ;AAJI;EACI,uBAAA;EACA,UAAA;EACA,cAAA;AAMR;;AAJA;EACI,kBAAA;EACA,mBAAA;EACA,gBAAA;AAOJ;AANI;EACI,kBAAA;EACA,YAAA;EACA,SAAA;EACA,2BAAA;EACA,WAAA;EACA,YAAA;EACA,uBA/HA;EAgIA,kBAAA;EACA,gBAAA;EACA,+BAtIC;EAuID,uBAAA;EACA,eAAA;EACA,eAAA;EACA,mBAAA;EACA,gCAAA;AAQR;AAPQ;EACI,YAAA;EACA,iBAAA;EACA,gCAAA;AASZ;AARQ;EACI,0BAzIA;AAmJZ;AATY;EACI,iBAAA;AAWhB;AAVI;EACI,WAAA;EACA,WAAA;EACA,2BAlJI;AA8JZ;;AAVA;EACI;IACI,mBAAA;EAaN;EAZM;IACI,WAAA;IACA,wBAAA;IACA,QAAA;EAcV;AACF;AAZA;EACI,iBAAA;EACA,aAAA;EACA,sBAAA;AAcJ;AAbI;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,oBAAA;AAeR;AAdI;EACI,kBAAA;EACA,gBAAA;EACA,kBAAA;AAgBR;AAfQ;EACI,oBAAA;AAiBZ;AAhBI;EACI,0BAlLC;AAoMT;AAjBQ;EACI,mBAAA;EACA,kBAAA;AAmBZ;;AAjBA;EAEQ;IACI,eAAA;EAmBV;EAlBM;IACI,eAAA;EAoBV;EAnBM;IACI,oBAAA;IACA,qBAAA;EAqBV;AACF;AApBA;EACI,eAAA;EACA,YAAA;AAsBJ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,700;1,400;1,800&display=swap')\n    \n// Primary Colors\n$purple: hsl(259, 100%, 65%)\n$light_red: hsl(0, 100%, 67%)\n\n// Neutral Colors\n$white: hsl(0, 0%, 100%)\n$off_white: hsl(0, 0%, 94%)\n$light_grey: hsl(0, 0%, 86%)\n$smokey_grey: hsl(0, 1%, 44%)\n$off_black: hsl(0, 0%, 8%)\n\n// Typography\n$font_size_inputs: 32px\n\n*,\n*::before,\n*::after\n    box-sizing: border-box\n\n*\n    margin: 0\n    padding: 0\n    scroll-behavior: smooth\n\nhtml\n    font-size: 62.5%\n\nbody\n    position: relative\n    font-size: 1.6rem\n    background: $off_white\n    font-family: 'Poppins', 'sans-serif'\n    display: flex\n    flex-direction: column\n    align-items: center\n\n@media screen and (min-width: 600px)\n    body\n        min-height: 100vh\n        justify-content: center\n\nimg\n    width: 100%\n    height: auto\n    object-fit: cover\n\n.container\n    margin-top: 10rem\n    max-width: 37.5rem\n    display: grid\n    grid-template-areas: \"input\" \"arrow\" \"output\"\n    background: $white\n    padding: 4rem 2rem\n    border-radius: 20px 20px 80px 20px\n\n@media screen and (min-width: 600px)\n    .container\n        margin-top: 0\n        width: 100%\n        max-width: 50rem\n        padding: 4rem\n\n.user_input_container\n    grid-area: input\n    display: flex\n    gap: 1rem\n    margin-bottom: 4rem\n\n@media screen and (min-width: 600px)\n    .user_input_container\n        margin-bottom: 1rem\n\n.input_container\n    display: flex\n    flex-direction: column\n    gap: .5rem\n    margin-bottom: 2rem\n    label\n        color: $smokey_grey\n        text-transform: uppercase\n        letter-spacing: 3px\n        font-size: 1.1rem\n        &[error=\"\"]\n            color: $light_red\n    input\n        width: 100%\n        max-width: 8rem\n        height: 5rem\n        border-radius: 6px\n        border: 1px solid $light_grey\n        padding-left: 1rem\n        outline: none\n        transition: border 0.2s ease-in-out\n        &::placeholder\n            font-weight: 700\n        &:focus\n            border: 1px solid $purple\n        &[error=\"\"]\n            border: 1px solid $light_red\n\n@media screen and (min-width: 600px)\n    .input_container input\n        max-width: 10rem\n        height: 4.5rem\n        &::placeholder\n            font-size: 2rem\n\n.error\n    font-size: 0.9rem\n    font-weight: 400\n    font-style: italic\n    color: $light_red\n    max-height: 0\n    overflow: hidden\n    opacity: 0\n    transition: opacity 0.2s ease-in-out\n    &[invalid=\"\"]\n        max-height: fit-content\n        opacity: 1\n        overflow: auto\n\n.arrow_container\n    position: relative\n    margin-bottom: 5rem\n    grid-area: arrow\n    .arrow\n        position: absolute\n        top: -2.5rem\n        left: 50%\n        transform: translateX(-50%)\n        width: 2rem\n        height: 2rem\n        color: $white\n        border-radius: 50%\n        font-weight: 700\n        background: $purple\n        box-sizing: content-box\n        padding: 1.5rem\n        cursor: pointer\n        pointer-events: all\n        transition: all 0.2s ease-in-out\n        path\n            stroke: #fff\n            stroke-width: 4px\n            transition: all 0.2s ease-in-out\n        &:hover\n            background: $off_black\n            path\n                stroke-width: 2px\n    .line\n        width: 100%\n        height: 2px\n        background: $off_white\n\n@media screen and (min-width: 600px)\n    .arrow_container \n        margin-bottom: 2rem\n        .arrow\n            left: unset\n            transform: translateX(0)\n            right: 0\n\n\n.age_calculation_container\n    grid-area: output\n    display: flex\n    flex-direction: column\n    h1\n        font-size: 4.75rem\n        font-weight: 800\n        font-style: italic\n        margin-bottom: -2rem\n    p\n        font-size: 4.75rem\n        font-weight: 800\n        font-style: italic\n        &:nth-child(2)\n            margin-bottom: -2rem\n    .age_calculation\n        color: $purple\n        &[finished='']\n            letter-spacing: 0px\n            margin-right: -2px\n\n@media screen and (min-width: 600px)\n    .age_calculation_container \n        h1\n            font-size: 6rem\n        p\n            font-size: 6rem\n        .age_calculation\n            letter-spacing: 10px\n            margin-right: -1.5rem\n\n.attribution\n    position: fixed\n    bottom: 2rem\n    "],"sourceRoot":""}]);
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.sass":
/*!*******************************!*\
  !*** ./src/styles/style.sass ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.sass");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
/* harmony import */ var _styles_style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.sass */ "./src/styles/style.sass");



const ageDay = document.querySelector("#ageDay");
const errorDay = document.querySelector(".error_day");
const ageMonth = document.querySelector("#ageMonth");
const arrow = document.querySelector(".arrow");
const day30Regex = /(?=^[1-2][0-9]?$|^30$).*/;
const day31Regex = /(?=^[1-2][0-9]?$|^3[0-1]$).*/;
const errorMonth = document.querySelector(".error_month");
const ageYear = document.querySelector("#ageYear");
const errorYear = document.querySelector(".error_year");
// regexes for dates
const februaryRegularRegex = /(?=^[1-2][0-8]?$).*/;
const februaryLeapRegex = /(?=^[1-2][0-9]?$).*/;
const yearRegex = /(?=^19[3-9][0-9]$|^20[0-1][0-9]$|^202[0-4]$).*/;
const monthRegex = /(?=^0?[1-9]$|^1[0-2]$).*/;

// How long you want the animation to take, in ms
const animationDuration = 2000;

// Calculate how long each 'frame' should last
const frameDuration = 1000 / 60;

// Use that to calculate how many frames to complete the animation
const totalFrames = Math.round(animationDuration / frameDuration);

// An ease-out function that slows the count as it progresses
const easeOutQuad = t => t * (2 - t);

// value variables
/* Days in each month
January: 31
February: 28 | 29 if leap year
March: 31
April: 30
May: 31
June: 30
July: 31
August: 31
September: 30
October: 31
November: 30
December: 31 */

/* Leap Years
1932,
1936,
1940,
1944,
1948,
1952,
1956,
1960,
1964,
1968,
1972,
1976,
1980,
1984,
1988,
1992,
1996,
2000,
2004,
2008,
2012,
2016,
2020
*/

window.onload = eraseOnLoad;

class User {
  // Places users entered day, month, and year into an object to be used
  constructor(userDay, userMonth, userYear) {
    this.userDay = userDay;
    this.userMonth = userMonth;
    this.userYear = userYear;
  }

  /* This object method calculates the differences between the current
  date and our user's date */
  calculateAgeDifference() {
    const today = new Date();
    const userDate = new Date(this.userYear, this.userMonth - 1, this.userDay);
    console.log(today)
    
    let todayDay = today.getDate();
    let userDay = userDate.getDate();
    
    let todayMonth = today.getMonth();
    let userMonth = userDate.getMonth();
    
    let todayYear = today.getFullYear();
    let userYear = userDate.getFullYear()
    
    return {todayDay, userDay, todayMonth, userMonth, todayYear, userYear};
  }

  /* This object method takes the object from calculateAgeDifference()
  and changes the values based on what time of the year or month it is */
  calculatePageContent() {
    
    // Holds the values from calculateAgeDifference()
    const differences = this.calculateAgeDifference();
    
    // The difference between the users day of birth, month, and year from current
    let diffDisplayYear = (differences.todayYear - differences.userYear);
    let diffDisplayMonths = (differences.todayMonth - differences.userMonth);
    let diffDisplayDays = (differences.todayDay - differences.userDay);
    
    /* When you subtract the months from each other, you can end up with a negative value...
    if the value is negative or if it equals 0 and the current day of the month is less than the user's day of the
    month, it will lessen the year by one while adding 12 to the month value */
    if (diffDisplayMonths < 0 || diffDisplayMonths === 0 && differences.todayDay < differences.userDay) {
      diffDisplayYear = diffDisplayYear - 1;
      diffDisplayMonths += 12;
    }
    
    /* If the difference in the current day amount and user's day amount is less than 0,
    a new temporary object will be created (with the values of todayYear and todayMonth).
    The date day amount from that object will be added to DiffDisplayDays while the months will be
    lessened (an edge case)*/
    
    if (diffDisplayDays < 0) {
      const tempDate = new Date(differences.todayYear, differences.todayMonth);
      diffDisplayDays += tempDate.getDate();
      diffDisplayMonths--;
    }
    
    return {
      diffDisplayDays,
      diffDisplayMonths,
      diffDisplayYear
    }
  }
  
  animatePageContent() {
    const diffDays = document.querySelector('.diff_days');
    const diffMonths = document.querySelector('.diff_months');
    const diffYears = document.querySelector('.diff_years');

    const differences = this.calculatePageContent();
    console.log(differences.diffDisplayDays, differences.diffDisplayMonths, differences.diffDisplayYear)
    /* changes the display on the page by adding attributes to the containers
    holding the values and changing text content */
  
    diffDays.setAttribute('finished', '');
    diffMonths.setAttribute('finished', '');
    diffYears.setAttribute('finished', '');

    if (differences.diffDisplayYear == 0) {
      diffYears.textContent = 0;
    } else {
      animateCountUp(diffYears, differences.diffDisplayYear);
    }

    if (differences.diffDisplayMonths == 0) {
      diffMonths.textContent = 0;
    } else {
      animateCountUp(diffMonths, differences.diffDisplayMonths);
    }

    if (differences.diffDisplayDays == 0) {
      diffDays.textContent = 0;
    } else {
      animateCountUp(diffDays, differences.diffDisplayDays);
    }
  }
}

// helper function for erasing everything on the page when page is loaded
function eraseOnLoad() {
  ageDay.value = "";
  ageMonth.value = "";
  ageYear.value = "";
}

function checkDay() {
  // checks for empty value in day input
  if (ageDay.value === "") {
    ageDay.previousElementSibling.setAttribute("error", "");
    ageDay.setAttribute("error", "");
    errorDay.textContent = "This field is required";
    errorDay.setAttribute("invalid", "");
    // returns true or falsy value for checking later
    return false;
  } else if (ageMonth.value == 2) {
    // different cases for the day value to be checked against
    if (februaryLeapRegex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (
      februaryLeapRegex.test(ageDay.value) &&
      !ageDay.hasAttribute("error")
    ) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!februaryLeapRegex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  } else if (
    ageMonth.value == 1 ||
    ageMonth.value == 3 ||
    ageMonth.value == 5 ||
    ageMonth.value == 7 ||
    ageMonth.value == 8 ||
    ageMonth.value == 10 ||
    ageMonth.value == 12
  ) {
    if (day31Regex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (day31Regex.test(ageDay.value) && !ageDay.hasAttribute("error")) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!day31Regex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  } else if (
    ageMonth.value == 4 ||
    ageMonth.value == 6 ||
    ageMonth.value == 9 ||
    ageMonth.value == 11
  ) {
    if (day30Regex.test(ageDay.value) && ageDay.hasAttribute("error")) {
      ageDay.previousElementSibling.removeAttribute("error");
      ageDay.removeAttribute("error");
      ageDay.setAttribute("success", "");
      errorDay.textContent = "";
      errorDay.removeAttribute("invalid");
      return true;
    } else if (day30Regex.test(ageDay.value) && !ageDay.hasAttribute("error")) {
      ageDay.setAttribute("success", "");
      return true;
    } else if (!day30Regex.test(ageDay.value)) {
      ageDay.previousElementSibling.setAttribute("error", "");
      ageDay.setAttribute("error", "");
      errorDay.textContent = "Must be a valid day";
      errorDay.setAttribute("invalid", "");
      return false;
    }
  }
}

function checkMonth() {
  // checks for an empty value in the month input
  if (ageMonth.value === "") {
    ageMonth.previousElementSibling.setAttribute("error", "");
    ageMonth.setAttribute("error", "");
    errorMonth.textContent = "This field is required";
    errorMonth.setAttribute("invalid", "");
    // truthy or falsy values to be checked later
    return false;
  } else if (
    monthRegex.test(ageMonth.value) &&
    !ageMonth.hasAttribute("error")
  ) {
    // different cases to be checked
    ageMonth.setAttribute("success", "");
    return true;
  } else if (
    monthRegex.test(ageMonth.value) &&
    ageMonth.hasAttribute("error")
  ) {
    ageMonth.previousElementSibling.removeAttribute("error");
    ageMonth.removeAttribute("error");
    ageMonth.setAttribute("success", "");
    errorMonth.textContent = "";
    errorMonth.removeAttribute("invalid");
    return true;
  } else if (!monthRegex.test(ageMonth.value)) {
    ageMonth.previousElementSibling.setAttribute("error", "");
    ageMonth.setAttribute("error", "");
    errorMonth.textContent = "Must be a valid month";
    errorMonth.setAttribute("invalid", "");
    return false;
  }
}

function checkYear() {
  // checks for an empty value in the year input
  if (ageYear.value === "") {
    ageYear.previousElementSibling.setAttribute("error", "");
    ageYear.setAttribute("error", "");
    errorYear.textContent = "This field is required";
    errorYear.setAttribute("invalid", "");
    // truthy or falsy values to be checked later
    return false;
  } else if (yearRegex.test(ageYear.value) && !ageYear.hasAttribute("error")) {
    // different cases to be checked
    ageYear.setAttribute("success", "");
    return true;
  } else if (yearRegex.test(ageYear.value) && ageYear.hasAttribute("error")) {
    ageYear.previousElementSibling.removeAttribute("error");
    ageYear.removeAttribute("error");
    ageYear.setAttribute("success", "");
    errorYear.textContent = "";
    errorYear.removeAttribute("invalid");
    return true;
  } else if (!yearRegex.test(ageYear.value)) {
    ageYear.previousElementSibling.setAttribute("error", "");
    ageYear.setAttribute("error", "");
    errorYear.textContent = "Must be in the past";
    errorYear.setAttribute("invalid", "");
    return false;
  }
}

function animateCountUp(el, diff) {
  let frame = 0;
  const countTo = parseInt(diff, 10);
  // Start the animation running 60 times per second
  const counter = setInterval(() => {
    frame++;
    // Calculate our progress as a value between 0 and 1
    // Pass that value to our easing function to get our
    // Progress on a curve
    const progress = easeOutQuad(frame/totalFrames);
    // Use the progress value to calculate the current count
    const currentCount = Math.round(countTo * progress);

    // If the current count has changed, update the element
    if (parseInt(diff, 10) !== currentCount) {
      el.textContent = currentCount;
    }

    // If we've reached our last frame, stop the animation
    if (frame === totalFrames) {
      el.textContent = currentCount;
      clearInterval(counter);
    }
  }, frameDuration);
};

// function for performing the checks on the inputs
function checkForm() {
  let ageDayNumber = Number(ageDay.value);
  let ageMonthNumber = Number(ageMonth.value);
  let ageYearNumber = Number(ageYear.value);

  let dayChecked = checkDay();
  let monthChecked = checkMonth();
  let yearChecked = checkYear();

  if (dayChecked && monthChecked && yearChecked) {
    const user = new User(ageDayNumber, ageMonthNumber, ageYearNumber);
    return user;
  } 
}

// function which contains a try catch for stopping the form if inputs are entered incorrectly
function displayAgeDifference() {
  try {
    if (checkForm()) {
      let user = checkForm();
      user.animatePageContent();
    } else if (!checkForm()) {
      throw new Error('Please enter values in age form');
    }
  } catch(err) {
      console.log(err);
  }
}

arrow.addEventListener("click", displayAgeDifference);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlX2NhbGN1bGF0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUgsTUFBTSxvQkFBb0I7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2FzcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzcz9iZmFkIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3Ivd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDcwMDsxLDQwMDsxLDgwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTQlKTtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBcInNhbnMtc2VyaWZcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbmltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTByZW07XG4gIG1heC13aWR0aDogMzcuNXJlbTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJpbnB1dFwiIFwiYXJyb3dcIiBcIm91dHB1dFwiO1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDEwMCUpO1xuICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCA4MHB4IDIwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA1MHJlbTtcbiAgICBwYWRkaW5nOiA0cmVtO1xuICB9XG59XG4udXNlcl9pbnB1dF9jb250YWluZXIge1xuICBncmlkLWFyZWE6IGlucHV0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC51c2VyX2lucHV0X2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuLmlucHV0X2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC41cmVtO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuLmlucHV0X2NvbnRhaW5lciBsYWJlbCB7XG4gIGNvbG9yOiBoc2woMCwgMSUsIDQ0JSk7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuLmlucHV0X2NvbnRhaW5lciBsYWJlbFtlcnJvcj1cIlwiXSB7XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNjclKTtcbn1cbi5pbnB1dF9jb250YWluZXIgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA4cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDAlLCA4NiUpO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmlucHV0X2NvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmlucHV0X2NvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgyNTksIDEwMCUsIDY1JSk7XG59XG4uaW5wdXRfY29udGFpbmVyIGlucHV0W2Vycm9yPVwiXCJdIHtcbiAgYm9yZGVyOiAxcHggc29saWQgaHNsKDAsIDEwMCUsIDY3JSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5pbnB1dF9jb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMTByZW07XG4gICAgaGVpZ2h0OiA0LjVyZW07XG4gIH1cbiAgLmlucHV0X2NvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuLmVycm9yIHtcbiAgZm9udC1zaXplOiAwLjlyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgY29sb3I6IGhzbCgwLCAxMDAlLCA2NyUpO1xuICBtYXgtaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG4uZXJyb3JbaW52YWxpZD1cIlwiXSB7XG4gIG1heC1oZWlnaHQ6IGZpdC1jb250ZW50O1xuICBvcGFjaXR5OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmFycm93X2NvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgZ3JpZC1hcmVhOiBhcnJvdztcbn1cbi5hcnJvd19jb250YWluZXIgLmFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yLjVyZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBjb2xvcjogaHNsKDAsIDAlLCAxMDAlKTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogNzAwO1xuICBiYWNrZ3JvdW5kOiBoc2woMjU5LCAxMDAlLCA2NSUpO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgcGFkZGluZzogMS41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmFycm93X2NvbnRhaW5lciAuYXJyb3cgcGF0aCB7XG4gIHN0cm9rZTogI2ZmZjtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmFycm93X2NvbnRhaW5lciAuYXJyb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDglKTtcbn1cbi5hcnJvd19jb250YWluZXIgLmFycm93OmhvdmVyIHBhdGgge1xuICBzdHJva2Utd2lkdGg6IDJweDtcbn1cbi5hcnJvd19jb250YWluZXIgLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IGhzbCgwLCAwJSwgOTQlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmFycm93X2NvbnRhaW5lciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxuICAuYXJyb3dfY29udGFpbmVyIC5hcnJvdyB7XG4gICAgbGVmdDogdW5zZXQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgIHJpZ2h0OiAwO1xuICB9XG59XG4uYWdlX2NhbGN1bGF0aW9uX2NvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogb3V0cHV0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDQuNzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLWJvdHRvbTogLTJyZW07XG59XG4uYWdlX2NhbGN1bGF0aW9uX2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiA0Ljc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG4uYWdlX2NhbGN1bGF0aW9uX2NvbnRhaW5lciBwOm50aC1jaGlsZCgyKSB7XG4gIG1hcmdpbi1ib3R0b206IC0ycmVtO1xufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgLmFnZV9jYWxjdWxhdGlvbiB7XG4gIGNvbG9yOiBoc2woMjU5LCAxMDAlLCA2NSUpO1xufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgLmFnZV9jYWxjdWxhdGlvbltmaW5pc2hlZD1cIlwiXSB7XG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XG4gIG1hcmdpbi1yaWdodDogLTJweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNnJlbTtcbiAgfVxuICAuYWdlX2NhbGN1bGF0aW9uX2NvbnRhaW5lciBwIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbiAgLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgLmFnZV9jYWxjdWxhdGlvbiB7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtO1xuICB9XG59XG4uYXR0cmlidXRpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMnJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuc2Fzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFnQkE7OztFQUdJLHNCQUFBO0FBZEo7O0FBZ0JBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtBQWJKOztBQWVBO0VBQ0ksZ0JBQUE7QUFaSjs7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkF4QlE7RUF5QlIsb0NBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWFBO0VBQ0k7SUFDSSxpQkFBQTtJQUNBLHVCQUFBO0VBVk47QUFDRjtBQVdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQVRKOztBQVdBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQTlDSTtFQStDSixrQkFBQTtFQUNBLGtDQUFBO0FBUko7O0FBVUE7RUFDSTtJQUNJLGFBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0VBUE47QUFDRjtBQVFBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUE7RUFDSTtJQUNJLG1CQUFBO0VBTE47QUFDRjtBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBSko7QUFLSTtFQUNJLHNCQXRFTTtFQXVFTix5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUlRO0VBQ0ksd0JBakZBO0FBK0VaO0FBR0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7QUFEUjtBQUVRO0VBQ0ksZ0JBQUE7QUFBWjtBQUNRO0VBQ0kscUNBQUE7QUFDWjtBQUFRO0VBQ0ksbUNBQUE7QUFFWjs7QUFBQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxjQUFBO0VBR047RUFGTTtJQUNJLGVBQUE7RUFJVjtBQUNGO0FBSEE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkE3R1E7RUE4R1IsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0FBS0o7QUFKSTtFQUNJLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFNUjs7QUFKQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQU9KO0FBTkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQS9IQTtFQWdJQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBdElDO0VBdUlELHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0FBUVI7QUFQUTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBU1o7QUFSUTtFQUNJLDBCQXpJQTtBQW1KWjtBQVRZO0VBQ0ksaUJBQUE7QUFXaEI7QUFWSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBbEpJO0FBOEpaOztBQVZBO0VBQ0k7SUFDSSxtQkFBQTtFQWFOO0VBWk07SUFDSSxXQUFBO0lBQ0Esd0JBQUE7SUFDQSxRQUFBO0VBY1Y7QUFDRjtBQVpBO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFjSjtBQWJJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFlUjtBQWRJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBZ0JSO0FBZlE7RUFDSSxvQkFBQTtBQWlCWjtBQWhCSTtFQUNJLDBCQWxMQztBQW9NVDtBQWpCUTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUFtQlo7O0FBakJBO0VBRVE7SUFDSSxlQUFBO0VBbUJWO0VBbEJNO0lBQ0ksZUFBQTtFQW9CVjtFQW5CTTtJQUNJLG9CQUFBO0lBQ0EscUJBQUE7RUFxQlY7QUFDRjtBQXBCQTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBc0JKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsNzAwOzEsNDAwOzEsODAwJmRpc3BsYXk9c3dhcCcpXFxuICAgIFxcbi8vIFByaW1hcnkgQ29sb3JzXFxuJHB1cnBsZTogaHNsKDI1OSwgMTAwJSwgNjUlKVxcbiRsaWdodF9yZWQ6IGhzbCgwLCAxMDAlLCA2NyUpXFxuXFxuLy8gTmV1dHJhbCBDb2xvcnNcXG4kd2hpdGU6IGhzbCgwLCAwJSwgMTAwJSlcXG4kb2ZmX3doaXRlOiBoc2woMCwgMCUsIDk0JSlcXG4kbGlnaHRfZ3JleTogaHNsKDAsIDAlLCA4NiUpXFxuJHNtb2tleV9ncmV5OiBoc2woMCwgMSUsIDQ0JSlcXG4kb2ZmX2JsYWNrOiBoc2woMCwgMCUsIDglKVxcblxcbi8vIFR5cG9ncmFwaHlcXG4kZm9udF9zaXplX2lucHV0czogMzJweFxcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3hcXG5cXG4qXFxuICAgIG1hcmdpbjogMFxcbiAgICBwYWRkaW5nOiAwXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoXFxuXFxuaHRtbFxcbiAgICBmb250LXNpemU6IDYyLjUlXFxuXFxuYm9keVxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgZm9udC1zaXplOiAxLjZyZW1cXG4gICAgYmFja2dyb3VuZDogJG9mZl93aGl0ZVxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCAnc2Fucy1zZXJpZidcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXJcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgYm9keVxcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmhcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyXFxuXFxuaW1nXFxuICAgIHdpZHRoOiAxMDAlXFxuICAgIGhlaWdodDogYXV0b1xcbiAgICBvYmplY3QtZml0OiBjb3Zlclxcblxcbi5jb250YWluZXJcXG4gICAgbWFyZ2luLXRvcDogMTByZW1cXG4gICAgbWF4LXdpZHRoOiAzNy41cmVtXFxuICAgIGRpc3BsYXk6IGdyaWRcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcImlucHV0XFxcIiBcXFwiYXJyb3dcXFwiIFxcXCJvdXRwdXRcXFwiXFxuICAgIGJhY2tncm91bmQ6ICR3aGl0ZVxcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW1cXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDgwcHggMjBweFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuY29udGFpbmVyXFxuICAgICAgICBtYXJnaW4tdG9wOiAwXFxuICAgICAgICB3aWR0aDogMTAwJVxcbiAgICAgICAgbWF4LXdpZHRoOiA1MHJlbVxcbiAgICAgICAgcGFkZGluZzogNHJlbVxcblxcbi51c2VyX2lucHV0X2NvbnRhaW5lclxcbiAgICBncmlkLWFyZWE6IGlucHV0XFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZ2FwOiAxcmVtXFxuICAgIG1hcmdpbi1ib3R0b206IDRyZW1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLnVzZXJfaW5wdXRfY29udGFpbmVyXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtXFxuXFxuLmlucHV0X2NvbnRhaW5lclxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW5cXG4gICAgZ2FwOiAuNXJlbVxcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgIGxhYmVsXFxuICAgICAgICBjb2xvcjogJHNtb2tleV9ncmV5XFxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlXFxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4XFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbVxcbiAgICAgICAgJltlcnJvcj1cXFwiXFxcIl1cXG4gICAgICAgICAgICBjb2xvcjogJGxpZ2h0X3JlZFxcbiAgICBpbnB1dFxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIG1heC13aWR0aDogOHJlbVxcbiAgICAgICAgaGVpZ2h0OiA1cmVtXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHhcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9ncmV5XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW1cXG4gICAgICAgIG91dGxpbmU6IG5vbmVcXG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAmOjpwbGFjZWhvbGRlclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgICAgICY6Zm9jdXNcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHVycGxlXFxuICAgICAgICAmW2Vycm9yPVxcXCJcXFwiXVxcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodF9yZWRcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmlucHV0X2NvbnRhaW5lciBpbnB1dFxcbiAgICAgICAgbWF4LXdpZHRoOiAxMHJlbVxcbiAgICAgICAgaGVpZ2h0OiA0LjVyZW1cXG4gICAgICAgICY6OnBsYWNlaG9sZGVyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtXFxuXFxuLmVycm9yXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljXFxuICAgIGNvbG9yOiAkbGlnaHRfcmVkXFxuICAgIG1heC1oZWlnaHQ6IDBcXG4gICAgb3ZlcmZsb3c6IGhpZGRlblxcbiAgICBvcGFjaXR5OiAwXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dFxcbiAgICAmW2ludmFsaWQ9XFxcIlxcXCJdXFxuICAgICAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudFxcbiAgICAgICAgb3BhY2l0eTogMVxcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG9cXG5cXG4uYXJyb3dfY29udGFpbmVyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtXFxuICAgIGdyaWQtYXJlYTogYXJyb3dcXG4gICAgLmFycm93XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGVcXG4gICAgICAgIHRvcDogLTIuNXJlbVxcbiAgICAgICAgbGVmdDogNTAlXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcXG4gICAgICAgIHdpZHRoOiAycmVtXFxuICAgICAgICBoZWlnaHQ6IDJyZW1cXG4gICAgICAgIGNvbG9yOiAkd2hpdGVcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJVxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMFxcbiAgICAgICAgYmFja2dyb3VuZDogJHB1cnBsZVxcbiAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3hcXG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbVxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyXFxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsXFxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgcGF0aFxcbiAgICAgICAgICAgIHN0cm9rZTogI2ZmZlxcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4XFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgICY6aG92ZXJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmX2JsYWNrXFxuICAgICAgICAgICAgcGF0aFxcbiAgICAgICAgICAgICAgICBzdHJva2Utd2lkdGg6IDJweFxcbiAgICAubGluZVxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIGhlaWdodDogMnB4XFxuICAgICAgICBiYWNrZ3JvdW5kOiAkb2ZmX3doaXRlXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5hcnJvd19jb250YWluZXIgXFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtXFxuICAgICAgICAuYXJyb3dcXG4gICAgICAgICAgICBsZWZ0OiB1bnNldFxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKVxcbiAgICAgICAgICAgIHJpZ2h0OiAwXFxuXFxuXFxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXJcXG4gICAgZ3JpZC1hcmVhOiBvdXRwdXRcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGgxXFxuICAgICAgICBmb250LXNpemU6IDQuNzVyZW1cXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDBcXG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJyZW1cXG4gICAgcFxcbiAgICAgICAgZm9udC1zaXplOiA0Ljc1cmVtXFxuICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWNcXG4gICAgICAgICY6bnRoLWNoaWxkKDIpXFxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJyZW1cXG4gICAgLmFnZV9jYWxjdWxhdGlvblxcbiAgICAgICAgY29sb3I6ICRwdXJwbGVcXG4gICAgICAgICZbZmluaXNoZWQ9JyddXFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweFxcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLTJweFxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuYWdlX2NhbGN1bGF0aW9uX2NvbnRhaW5lciBcXG4gICAgICAgIGgxXFxuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtXFxuICAgICAgICBwXFxuICAgICAgICAgICAgZm9udC1zaXplOiA2cmVtXFxuICAgICAgICAuYWdlX2NhbGN1bGF0aW9uXFxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEwcHhcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xLjVyZW1cXG5cXG4uYXR0cmlidXRpb25cXG4gICAgcG9zaXRpb246IGZpeGVkXFxuICAgIGJvdHRvbTogMnJlbVxcbiAgICBcIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Fzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzL3N0eWxlLnNhc3NcIjtcbmltcG9ydCB7IGZvcm1hdCwgc3ViRGF5cywgc3ViTW9udGhzLCBzdWJZZWFyc30gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGFnZURheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWdlRGF5XCIpO1xuY29uc3QgZXJyb3JEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yX2RheVwiKTtcbmNvbnN0IGFnZU1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZ2VNb250aFwiKTtcbmNvbnN0IGFycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hcnJvd1wiKTtcbmNvbnN0IGRheTMwUmVnZXggPSAvKD89XlsxLTJdWzAtOV0/JHxeMzAkKS4qLztcbmNvbnN0IGRheTMxUmVnZXggPSAvKD89XlsxLTJdWzAtOV0/JHxeM1swLTFdJCkuKi87XG5jb25zdCBlcnJvck1vbnRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9tb250aFwiKTtcbmNvbnN0IGFnZVllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FnZVllYXJcIik7XG5jb25zdCBlcnJvclllYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yX3llYXJcIik7XG4vLyByZWdleGVzIGZvciBkYXRlc1xuY29uc3QgZmVicnVhcnlSZWd1bGFyUmVnZXggPSAvKD89XlsxLTJdWzAtOF0/JCkuKi87XG5jb25zdCBmZWJydWFyeUxlYXBSZWdleCA9IC8oPz1eWzEtMl1bMC05XT8kKS4qLztcbmNvbnN0IHllYXJSZWdleCA9IC8oPz1eMTlbMy05XVswLTldJHxeMjBbMC0xXVswLTldJHxeMjAyWzAtNF0kKS4qLztcbmNvbnN0IG1vbnRoUmVnZXggPSAvKD89XjA/WzEtOV0kfF4xWzAtMl0kKS4qLztcblxuLy8gSG93IGxvbmcgeW91IHdhbnQgdGhlIGFuaW1hdGlvbiB0byB0YWtlLCBpbiBtc1xuY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSAyMDAwO1xuXG4vLyBDYWxjdWxhdGUgaG93IGxvbmcgZWFjaCAnZnJhbWUnIHNob3VsZCBsYXN0XG5jb25zdCBmcmFtZUR1cmF0aW9uID0gMTAwMCAvIDYwO1xuXG4vLyBVc2UgdGhhdCB0byBjYWxjdWxhdGUgaG93IG1hbnkgZnJhbWVzIHRvIGNvbXBsZXRlIHRoZSBhbmltYXRpb25cbmNvbnN0IHRvdGFsRnJhbWVzID0gTWF0aC5yb3VuZChhbmltYXRpb25EdXJhdGlvbiAvIGZyYW1lRHVyYXRpb24pO1xuXG4vLyBBbiBlYXNlLW91dCBmdW5jdGlvbiB0aGF0IHNsb3dzIHRoZSBjb3VudCBhcyBpdCBwcm9ncmVzc2VzXG5jb25zdCBlYXNlT3V0UXVhZCA9IHQgPT4gdCAqICgyIC0gdCk7XG5cbi8vIHZhbHVlIHZhcmlhYmxlc1xuLyogRGF5cyBpbiBlYWNoIG1vbnRoXG5KYW51YXJ5OiAzMVxuRmVicnVhcnk6IDI4IHwgMjkgaWYgbGVhcCB5ZWFyXG5NYXJjaDogMzFcbkFwcmlsOiAzMFxuTWF5OiAzMVxuSnVuZTogMzBcbkp1bHk6IDMxXG5BdWd1c3Q6IDMxXG5TZXB0ZW1iZXI6IDMwXG5PY3RvYmVyOiAzMVxuTm92ZW1iZXI6IDMwXG5EZWNlbWJlcjogMzEgKi9cblxuLyogTGVhcCBZZWFyc1xuMTkzMixcbjE5MzYsXG4xOTQwLFxuMTk0NCxcbjE5NDgsXG4xOTUyLFxuMTk1NixcbjE5NjAsXG4xOTY0LFxuMTk2OCxcbjE5NzIsXG4xOTc2LFxuMTk4MCxcbjE5ODQsXG4xOTg4LFxuMTk5MixcbjE5OTYsXG4yMDAwLFxuMjAwNCxcbjIwMDgsXG4yMDEyLFxuMjAxNixcbjIwMjBcbiovXG5cbndpbmRvdy5vbmxvYWQgPSBlcmFzZU9uTG9hZDtcblxuY2xhc3MgVXNlciB7XG4gIC8vIFBsYWNlcyB1c2VycyBlbnRlcmVkIGRheSwgbW9udGgsIGFuZCB5ZWFyIGludG8gYW4gb2JqZWN0IHRvIGJlIHVzZWRcbiAgY29uc3RydWN0b3IodXNlckRheSwgdXNlck1vbnRoLCB1c2VyWWVhcikge1xuICAgIHRoaXMudXNlckRheSA9IHVzZXJEYXk7XG4gICAgdGhpcy51c2VyTW9udGggPSB1c2VyTW9udGg7XG4gICAgdGhpcy51c2VyWWVhciA9IHVzZXJZZWFyO1xuICB9XG5cbiAgLyogVGhpcyBvYmplY3QgbWV0aG9kIGNhbGN1bGF0ZXMgdGhlIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlIGN1cnJlbnRcbiAgZGF0ZSBhbmQgb3VyIHVzZXIncyBkYXRlICovXG4gIGNhbGN1bGF0ZUFnZURpZmZlcmVuY2UoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHVzZXJEYXRlID0gbmV3IERhdGUodGhpcy51c2VyWWVhciwgdGhpcy51c2VyTW9udGggLSAxLCB0aGlzLnVzZXJEYXkpO1xuICAgIGNvbnNvbGUubG9nKHRvZGF5KVxuICAgIFxuICAgIGxldCB0b2RheURheSA9IHRvZGF5LmdldERhdGUoKTtcbiAgICBsZXQgdXNlckRheSA9IHVzZXJEYXRlLmdldERhdGUoKTtcbiAgICBcbiAgICBsZXQgdG9kYXlNb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgbGV0IHVzZXJNb250aCA9IHVzZXJEYXRlLmdldE1vbnRoKCk7XG4gICAgXG4gICAgbGV0IHRvZGF5WWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgbGV0IHVzZXJZZWFyID0gdXNlckRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIFxuICAgIHJldHVybiB7dG9kYXlEYXksIHVzZXJEYXksIHRvZGF5TW9udGgsIHVzZXJNb250aCwgdG9kYXlZZWFyLCB1c2VyWWVhcn07XG4gIH1cblxuICAvKiBUaGlzIG9iamVjdCBtZXRob2QgdGFrZXMgdGhlIG9iamVjdCBmcm9tIGNhbGN1bGF0ZUFnZURpZmZlcmVuY2UoKVxuICBhbmQgY2hhbmdlcyB0aGUgdmFsdWVzIGJhc2VkIG9uIHdoYXQgdGltZSBvZiB0aGUgeWVhciBvciBtb250aCBpdCBpcyAqL1xuICBjYWxjdWxhdGVQYWdlQ29udGVudCgpIHtcbiAgICBcbiAgICAvLyBIb2xkcyB0aGUgdmFsdWVzIGZyb20gY2FsY3VsYXRlQWdlRGlmZmVyZW5jZSgpXG4gICAgY29uc3QgZGlmZmVyZW5jZXMgPSB0aGlzLmNhbGN1bGF0ZUFnZURpZmZlcmVuY2UoKTtcbiAgICBcbiAgICAvLyBUaGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSB1c2VycyBkYXkgb2YgYmlydGgsIG1vbnRoLCBhbmQgeWVhciBmcm9tIGN1cnJlbnRcbiAgICBsZXQgZGlmZkRpc3BsYXlZZWFyID0gKGRpZmZlcmVuY2VzLnRvZGF5WWVhciAtIGRpZmZlcmVuY2VzLnVzZXJZZWFyKTtcbiAgICBsZXQgZGlmZkRpc3BsYXlNb250aHMgPSAoZGlmZmVyZW5jZXMudG9kYXlNb250aCAtIGRpZmZlcmVuY2VzLnVzZXJNb250aCk7XG4gICAgbGV0IGRpZmZEaXNwbGF5RGF5cyA9IChkaWZmZXJlbmNlcy50b2RheURheSAtIGRpZmZlcmVuY2VzLnVzZXJEYXkpO1xuICAgIFxuICAgIC8qIFdoZW4geW91IHN1YnRyYWN0IHRoZSBtb250aHMgZnJvbSBlYWNoIG90aGVyLCB5b3UgY2FuIGVuZCB1cCB3aXRoIGEgbmVnYXRpdmUgdmFsdWUuLi5cbiAgICBpZiB0aGUgdmFsdWUgaXMgbmVnYXRpdmUgb3IgaWYgaXQgZXF1YWxzIDAgYW5kIHRoZSBjdXJyZW50IGRheSBvZiB0aGUgbW9udGggaXMgbGVzcyB0aGFuIHRoZSB1c2VyJ3MgZGF5IG9mIHRoZVxuICAgIG1vbnRoLCBpdCB3aWxsIGxlc3NlbiB0aGUgeWVhciBieSBvbmUgd2hpbGUgYWRkaW5nIDEyIHRvIHRoZSBtb250aCB2YWx1ZSAqL1xuICAgIGlmIChkaWZmRGlzcGxheU1vbnRocyA8IDAgfHwgZGlmZkRpc3BsYXlNb250aHMgPT09IDAgJiYgZGlmZmVyZW5jZXMudG9kYXlEYXkgPCBkaWZmZXJlbmNlcy51c2VyRGF5KSB7XG4gICAgICBkaWZmRGlzcGxheVllYXIgPSBkaWZmRGlzcGxheVllYXIgLSAxO1xuICAgICAgZGlmZkRpc3BsYXlNb250aHMgKz0gMTI7XG4gICAgfVxuICAgIFxuICAgIC8qIElmIHRoZSBkaWZmZXJlbmNlIGluIHRoZSBjdXJyZW50IGRheSBhbW91bnQgYW5kIHVzZXIncyBkYXkgYW1vdW50IGlzIGxlc3MgdGhhbiAwLFxuICAgIGEgbmV3IHRlbXBvcmFyeSBvYmplY3Qgd2lsbCBiZSBjcmVhdGVkICh3aXRoIHRoZSB2YWx1ZXMgb2YgdG9kYXlZZWFyIGFuZCB0b2RheU1vbnRoKS5cbiAgICBUaGUgZGF0ZSBkYXkgYW1vdW50IGZyb20gdGhhdCBvYmplY3Qgd2lsbCBiZSBhZGRlZCB0byBEaWZmRGlzcGxheURheXMgd2hpbGUgdGhlIG1vbnRocyB3aWxsIGJlXG4gICAgbGVzc2VuZWQgKGFuIGVkZ2UgY2FzZSkqL1xuICAgIFxuICAgIGlmIChkaWZmRGlzcGxheURheXMgPCAwKSB7XG4gICAgICBjb25zdCB0ZW1wRGF0ZSA9IG5ldyBEYXRlKGRpZmZlcmVuY2VzLnRvZGF5WWVhciwgZGlmZmVyZW5jZXMudG9kYXlNb250aCk7XG4gICAgICBkaWZmRGlzcGxheURheXMgKz0gdGVtcERhdGUuZ2V0RGF0ZSgpO1xuICAgICAgZGlmZkRpc3BsYXlNb250aHMtLTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpZmZEaXNwbGF5RGF5cyxcbiAgICAgIGRpZmZEaXNwbGF5TW9udGhzLFxuICAgICAgZGlmZkRpc3BsYXlZZWFyXG4gICAgfVxuICB9XG4gIFxuICBhbmltYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZGlmZkRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZl9kYXlzJyk7XG4gICAgY29uc3QgZGlmZk1vbnRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmX21vbnRocycpO1xuICAgIGNvbnN0IGRpZmZZZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmX3llYXJzJyk7XG5cbiAgICBjb25zdCBkaWZmZXJlbmNlcyA9IHRoaXMuY2FsY3VsYXRlUGFnZUNvbnRlbnQoKTtcbiAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlcy5kaWZmRGlzcGxheURheXMsIGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5TW9udGhzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheVllYXIpXG4gICAgLyogY2hhbmdlcyB0aGUgZGlzcGxheSBvbiB0aGUgcGFnZSBieSBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGUgY29udGFpbmVyc1xuICAgIGhvbGRpbmcgdGhlIHZhbHVlcyBhbmQgY2hhbmdpbmcgdGV4dCBjb250ZW50ICovXG4gIFxuICAgIGRpZmZEYXlzLnNldEF0dHJpYnV0ZSgnZmluaXNoZWQnLCAnJyk7XG4gICAgZGlmZk1vbnRocy5zZXRBdHRyaWJ1dGUoJ2ZpbmlzaGVkJywgJycpO1xuICAgIGRpZmZZZWFycy5zZXRBdHRyaWJ1dGUoJ2ZpbmlzaGVkJywgJycpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5WWVhciA9PSAwKSB7XG4gICAgICBkaWZmWWVhcnMudGV4dENvbnRlbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRlQ291bnRVcChkaWZmWWVhcnMsIGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5WWVhcik7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5TW9udGhzID09IDApIHtcbiAgICAgIGRpZmZNb250aHMudGV4dENvbnRlbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRlQ291bnRVcChkaWZmTW9udGhzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheU1vbnRocyk7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5RGF5cyA9PSAwKSB7XG4gICAgICBkaWZmRGF5cy50ZXh0Q29udGVudCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGVDb3VudFVwKGRpZmZEYXlzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheURheXMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIGVyYXNpbmcgZXZlcnl0aGluZyBvbiB0aGUgcGFnZSB3aGVuIHBhZ2UgaXMgbG9hZGVkXG5mdW5jdGlvbiBlcmFzZU9uTG9hZCgpIHtcbiAgYWdlRGF5LnZhbHVlID0gXCJcIjtcbiAgYWdlTW9udGgudmFsdWUgPSBcIlwiO1xuICBhZ2VZZWFyLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tEYXkoKSB7XG4gIC8vIGNoZWNrcyBmb3IgZW1wdHkgdmFsdWUgaW4gZGF5IGlucHV0XG4gIGlmIChhZ2VEYXkudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JEYXkudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcbiAgICBlcnJvckRheS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIC8vIHJldHVybnMgdHJ1ZSBvciBmYWxzeSB2YWx1ZSBmb3IgY2hlY2tpbmcgbGF0ZXJcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoYWdlTW9udGgudmFsdWUgPT0gMikge1xuICAgIC8vIGRpZmZlcmVudCBjYXNlcyBmb3IgdGhlIGRheSB2YWx1ZSB0byBiZSBjaGVja2VkIGFnYWluc3RcbiAgICBpZiAoZmVicnVhcnlMZWFwUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpICYmIGFnZURheS5oYXNBdHRyaWJ1dGUoXCJlcnJvclwiKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgICBhZ2VEYXkucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIGVycm9yRGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVycm9yRGF5LnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmVicnVhcnlMZWFwUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpICYmXG4gICAgICAhYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpXG4gICAgKSB7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWZlYnJ1YXJ5TGVhcFJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIGRheVwiO1xuICAgICAgZXJyb3JEYXkuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgYWdlTW9udGgudmFsdWUgPT0gMSB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDMgfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSA1IHx8XG4gICAgYWdlTW9udGgudmFsdWUgPT0gNyB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDggfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSAxMCB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDEyXG4gICkge1xuICAgIGlmIChkYXkzMVJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSAmJiBhZ2VEYXkuaGFzQXR0cmlidXRlKFwiZXJyb3JcIikpIHtcbiAgICAgIGFnZURheS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgICAgYWdlRGF5LnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgICAgYWdlRGF5LnNldEF0dHJpYnV0ZShcInN1Y2Nlc3NcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBlcnJvckRheS5yZW1vdmVBdHRyaWJ1dGUoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChkYXkzMVJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSAmJiAhYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWRheTMxUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpKSB7XG4gICAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICAgIGFnZURheS5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICAgIGVycm9yRGF5LnRleHRDb250ZW50ID0gXCJNdXN0IGJlIGEgdmFsaWQgZGF5XCI7XG4gICAgICBlcnJvckRheS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBhZ2VNb250aC52YWx1ZSA9PSA0IHx8XG4gICAgYWdlTW9udGgudmFsdWUgPT0gNiB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDkgfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSAxMVxuICApIHtcbiAgICBpZiAoZGF5MzBSZWdleC50ZXN0KGFnZURheS52YWx1ZSkgJiYgYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICAgIGFnZURheS5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICAgIGFnZURheS5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgICAgZXJyb3JEYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZXJyb3JEYXkucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZGF5MzBSZWdleC50ZXN0KGFnZURheS52YWx1ZSkgJiYgIWFnZURheS5oYXNBdHRyaWJ1dGUoXCJlcnJvclwiKSkge1xuICAgICAgYWdlRGF5LnNldEF0dHJpYnV0ZShcInN1Y2Nlc3NcIiwgXCJcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFkYXkzMFJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIGRheVwiO1xuICAgICAgZXJyb3JEYXkuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tNb250aCgpIHtcbiAgLy8gY2hlY2tzIGZvciBhbiBlbXB0eSB2YWx1ZSBpbiB0aGUgbW9udGggaW5wdXRcbiAgaWYgKGFnZU1vbnRoLnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWdlTW9udGgucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBhZ2VNb250aC5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBlcnJvck1vbnRoLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gICAgZXJyb3JNb250aC5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIC8vIHRydXRoeSBvciBmYWxzeSB2YWx1ZXMgdG8gYmUgY2hlY2tlZCBsYXRlclxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChcbiAgICBtb250aFJlZ2V4LnRlc3QoYWdlTW9udGgudmFsdWUpICYmXG4gICAgIWFnZU1vbnRoLmhhc0F0dHJpYnV0ZShcImVycm9yXCIpXG4gICkge1xuICAgIC8vIGRpZmZlcmVudCBjYXNlcyB0byBiZSBjaGVja2VkXG4gICAgYWdlTW9udGguc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChcbiAgICBtb250aFJlZ2V4LnRlc3QoYWdlTW9udGgudmFsdWUpICYmXG4gICAgYWdlTW9udGguaGFzQXR0cmlidXRlKFwiZXJyb3JcIilcbiAgKSB7XG4gICAgYWdlTW9udGgucHJldmlvdXNFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICBhZ2VNb250aC5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICBhZ2VNb250aC5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgIGVycm9yTW9udGgudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yTW9udGgucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICghbW9udGhSZWdleC50ZXN0KGFnZU1vbnRoLnZhbHVlKSkge1xuICAgIGFnZU1vbnRoLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgYWdlTW9udGguc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JNb250aC50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIG1vbnRoXCI7XG4gICAgZXJyb3JNb250aC5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1llYXIoKSB7XG4gIC8vIGNoZWNrcyBmb3IgYW4gZW1wdHkgdmFsdWUgaW4gdGhlIHllYXIgaW5wdXRcbiAgaWYgKGFnZVllYXIudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhZ2VZZWFyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgYWdlWWVhci5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBlcnJvclllYXIudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcbiAgICBlcnJvclllYXIuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAvLyB0cnV0aHkgb3IgZmFsc3kgdmFsdWVzIHRvIGJlIGNoZWNrZWQgbGF0ZXJcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoeWVhclJlZ2V4LnRlc3QoYWdlWWVhci52YWx1ZSkgJiYgIWFnZVllYXIuaGFzQXR0cmlidXRlKFwiZXJyb3JcIikpIHtcbiAgICAvLyBkaWZmZXJlbnQgY2FzZXMgdG8gYmUgY2hlY2tlZFxuICAgIGFnZVllYXIuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh5ZWFyUmVnZXgudGVzdChhZ2VZZWFyLnZhbHVlKSAmJiBhZ2VZZWFyLmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgYWdlWWVhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgIGFnZVllYXIucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgYWdlWWVhci5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgIGVycm9yWWVhci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JZZWFyLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoIXllYXJSZWdleC50ZXN0KGFnZVllYXIudmFsdWUpKSB7XG4gICAgYWdlWWVhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZShcImVycm9yXCIsIFwiXCIpO1xuICAgIGFnZVllYXIuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JZZWFyLnRleHRDb250ZW50ID0gXCJNdXN0IGJlIGluIHRoZSBwYXN0XCI7XG4gICAgZXJyb3JZZWFyLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudFVwKGVsLCBkaWZmKSB7XG4gIGxldCBmcmFtZSA9IDA7XG4gIGNvbnN0IGNvdW50VG8gPSBwYXJzZUludChkaWZmLCAxMCk7XG4gIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gcnVubmluZyA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gIGNvbnN0IGNvdW50ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZnJhbWUrKztcbiAgICAvLyBDYWxjdWxhdGUgb3VyIHByb2dyZXNzIGFzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxXG4gICAgLy8gUGFzcyB0aGF0IHZhbHVlIHRvIG91ciBlYXNpbmcgZnVuY3Rpb24gdG8gZ2V0IG91clxuICAgIC8vIFByb2dyZXNzIG9uIGEgY3VydmVcbiAgICBjb25zdCBwcm9ncmVzcyA9IGVhc2VPdXRRdWFkKGZyYW1lL3RvdGFsRnJhbWVzKTtcbiAgICAvLyBVc2UgdGhlIHByb2dyZXNzIHZhbHVlIHRvIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBjb3VudFxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IE1hdGgucm91bmQoY291bnRUbyAqIHByb2dyZXNzKTtcblxuICAgIC8vIElmIHRoZSBjdXJyZW50IGNvdW50IGhhcyBjaGFuZ2VkLCB1cGRhdGUgdGhlIGVsZW1lbnRcbiAgICBpZiAocGFyc2VJbnQoZGlmZiwgMTApICE9PSBjdXJyZW50Q291bnQpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY3VycmVudENvdW50O1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgb3VyIGxhc3QgZnJhbWUsIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgIGlmIChmcmFtZSA9PT0gdG90YWxGcmFtZXMpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY3VycmVudENvdW50O1xuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGVyKTtcbiAgICB9XG4gIH0sIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLy8gZnVuY3Rpb24gZm9yIHBlcmZvcm1pbmcgdGhlIGNoZWNrcyBvbiB0aGUgaW5wdXRzXG5mdW5jdGlvbiBjaGVja0Zvcm0oKSB7XG4gIGxldCBhZ2VEYXlOdW1iZXIgPSBOdW1iZXIoYWdlRGF5LnZhbHVlKTtcbiAgbGV0IGFnZU1vbnRoTnVtYmVyID0gTnVtYmVyKGFnZU1vbnRoLnZhbHVlKTtcbiAgbGV0IGFnZVllYXJOdW1iZXIgPSBOdW1iZXIoYWdlWWVhci52YWx1ZSk7XG5cbiAgbGV0IGRheUNoZWNrZWQgPSBjaGVja0RheSgpO1xuICBsZXQgbW9udGhDaGVja2VkID0gY2hlY2tNb250aCgpO1xuICBsZXQgeWVhckNoZWNrZWQgPSBjaGVja1llYXIoKTtcblxuICBpZiAoZGF5Q2hlY2tlZCAmJiBtb250aENoZWNrZWQgJiYgeWVhckNoZWNrZWQpIHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoYWdlRGF5TnVtYmVyLCBhZ2VNb250aE51bWJlciwgYWdlWWVhck51bWJlcik7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gXG59XG5cbi8vIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIGEgdHJ5IGNhdGNoIGZvciBzdG9wcGluZyB0aGUgZm9ybSBpZiBpbnB1dHMgYXJlIGVudGVyZWQgaW5jb3JyZWN0bHlcbmZ1bmN0aW9uIGRpc3BsYXlBZ2VEaWZmZXJlbmNlKCkge1xuICB0cnkge1xuICAgIGlmIChjaGVja0Zvcm0oKSkge1xuICAgICAgbGV0IHVzZXIgPSBjaGVja0Zvcm0oKTtcbiAgICAgIHVzZXIuYW5pbWF0ZVBhZ2VDb250ZW50KCk7XG4gICAgfSBlbHNlIGlmICghY2hlY2tGb3JtKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIHZhbHVlcyBpbiBhZ2UgZm9ybScpO1xuICAgIH1cbiAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZ2VEaWZmZXJlbmNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==