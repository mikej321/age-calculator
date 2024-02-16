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
      diffDisplayDays += (1 + 30);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWdlX2NhbGN1bGF0b3IuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUgsTUFBTSxvQkFBb0I7QUFDako7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDJGQUEyRixXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsWUFBWSxZQUFZLFdBQVcsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxLQUFLLEtBQUssWUFBWSxZQUFZLFdBQVcsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLEtBQUssS0FBSyxXQUFXLE1BQU0sS0FBSyxLQUFLLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxZQUFZLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3MiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3M/YmZhZCIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3IvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZ2UtY2FsY3VsYXRvci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYWdlLWNhbGN1bGF0b3Ivd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2FnZS1jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCw3MDA7MSw0MDA7MSw4MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMS42cmVtO1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk0JSk7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgXCJzYW5zLXNlcmlmXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIGJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDEwcmVtO1xuICBtYXgtd2lkdGg6IDM3LjVyZW07XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaW5wdXRcIiBcImFycm93XCIgXCJvdXRwdXRcIjtcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCAxMDAlKTtcbiAgcGFkZGluZzogNHJlbSAycmVtO1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggODBweCAyMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogNTByZW07XG4gICAgcGFkZGluZzogNHJlbTtcbiAgfVxufVxuLnVzZXJfaW5wdXRfY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiBpbnB1dDtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxcmVtO1xuICBtYXJnaW4tYm90dG9tOiA0cmVtO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAudXNlcl9pbnB1dF9jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5pbnB1dF9jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDAuNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5pbnB1dF9jb250YWluZXIgbGFiZWwge1xuICBjb2xvcjogaHNsKDAsIDElLCA0NCUpO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi5pbnB1dF9jb250YWluZXIgbGFiZWxbZXJyb3I9XCJcIl0ge1xuICBjb2xvcjogaHNsKDAsIDEwMCUsIDY3JSk7XG59XG4uaW5wdXRfY29udGFpbmVyIGlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogOHJlbTtcbiAgaGVpZ2h0OiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAwJSwgODYlKTtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICBvdXRsaW5lOiBub25lO1xuICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5pbnB1dF9jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5pbnB1dF9jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBoc2woMjU5LCAxMDAlLCA2NSUpO1xufVxuLmlucHV0X2NvbnRhaW5lciBpbnB1dFtlcnJvcj1cIlwiXSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGhzbCgwLCAxMDAlLCA2NyUpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuICAuaW5wdXRfY29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDEwcmVtO1xuICAgIGhlaWdodDogNC41cmVtO1xuICB9XG4gIC5pbnB1dF9jb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cbi5lcnJvciB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGNvbG9yOiBoc2woMCwgMTAwJSwgNjclKTtcbiAgbWF4LWhlaWdodDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xufVxuLmVycm9yW2ludmFsaWQ9XCJcIl0ge1xuICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgb3BhY2l0eTogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5hcnJvd19jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIGdyaWQtYXJlYTogYXJyb3c7XG59XG4uYXJyb3dfY29udGFpbmVyIC5hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMi41cmVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6IGhzbCgwLCAwJSwgMTAwJSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYmFja2dyb3VuZDogaHNsKDI1OSwgMTAwJSwgNjUlKTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIHBhZGRpbmc6IDEuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hcnJvd19jb250YWluZXIgLmFycm93IHBhdGgge1xuICBzdHJva2U6ICNmZmY7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcbn1cbi5hcnJvd19jb250YWluZXIgLmFycm93OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogaHNsKDAsIDAlLCA4JSk7XG59XG4uYXJyb3dfY29udGFpbmVyIC5hcnJvdzpob3ZlciBwYXRoIHtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG59XG4uYXJyb3dfY29udGFpbmVyIC5saW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBoc2woMCwgMCUsIDk0JSk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5hcnJvd19jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbiAgLmFycm93X2NvbnRhaW5lciAuYXJyb3cge1xuICAgIGxlZnQ6IHVuc2V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICByaWdodDogMDtcbiAgfVxufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIge1xuICBncmlkLWFyZWE6IG91dHB1dDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiA0Ljc1cmVtO1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi1ib3R0b206IC0ycmVtO1xufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogNC43NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgcDpudGgtY2hpbGQoMikge1xuICBtYXJnaW4tYm90dG9tOiAtMnJlbTtcbn1cbi5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyIC5hZ2VfY2FsY3VsYXRpb24ge1xuICBjb2xvcjogaHNsKDI1OSwgMTAwJSwgNjUlKTtcbn1cbi5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyIC5hZ2VfY2FsY3VsYXRpb25bZmluaXNoZWQ9XCJcIl0ge1xuICBsZXR0ZXItc3BhY2luZzogMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0ycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KSB7XG4gIC5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyIGgxIHtcbiAgICBmb250LXNpemU6IDZyZW07XG4gIH1cbiAgLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiA2cmVtO1xuICB9XG4gIC5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyIC5hZ2VfY2FsY3VsYXRpb24ge1xuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogLTEuNXJlbTtcbiAgfVxufVxuLmF0dHJpYnV0aW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDJyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlLnNhc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBZ0JBOzs7RUFHSSxzQkFBQTtBQWRKOztBQWdCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUFiSjs7QUFlQTtFQUNJLGdCQUFBO0FBWko7O0FBY0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBeEJRO0VBeUJSLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFYSjs7QUFhQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSx1QkFBQTtFQVZOO0FBQ0Y7QUFXQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFUSjs7QUFXQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkE5Q0k7RUErQ0osa0JBQUE7RUFDQSxrQ0FBQTtBQVJKOztBQVVBO0VBQ0k7SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsYUFBQTtFQVBOO0FBQ0Y7QUFRQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQU5KOztBQVFBO0VBQ0k7SUFDSSxtQkFBQTtFQUxOO0FBQ0Y7QUFNQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUpKO0FBS0k7RUFDSSxzQkF0RU07RUF1RU4seUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBSFI7QUFJUTtFQUNJLHdCQWpGQTtBQStFWjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO0FBRFI7QUFFUTtFQUNJLGdCQUFBO0FBQVo7QUFDUTtFQUNJLHFDQUFBO0FBQ1o7QUFBUTtFQUNJLG1DQUFBO0FBRVo7O0FBQUE7RUFDSTtJQUNJLGdCQUFBO0lBQ0EsY0FBQTtFQUdOO0VBRk07SUFDSSxlQUFBO0VBSVY7QUFDRjtBQUhBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBN0dRO0VBOEdSLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtBQUtKO0FBSkk7RUFDSSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBTVI7O0FBSkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFPSjtBQU5JO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkEvSEE7RUFnSUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQXRJQztFQXVJRCx1QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQVFSO0FBUFE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQVNaO0FBUlE7RUFDSSwwQkF6SUE7QUFtSlo7QUFUWTtFQUNJLGlCQUFBO0FBV2hCO0FBVkk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQWxKSTtBQThKWjs7QUFWQTtFQUNJO0lBQ0ksbUJBQUE7RUFhTjtFQVpNO0lBQ0ksV0FBQTtJQUNBLHdCQUFBO0lBQ0EsUUFBQTtFQWNWO0FBQ0Y7QUFaQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBY0o7QUFiSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBZVI7QUFkSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWdCUjtBQWZRO0VBQ0ksb0JBQUE7QUFpQlo7QUFoQkk7RUFDSSwwQkFsTEM7QUFvTVQ7QUFqQlE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0FBbUJaOztBQWpCQTtFQUVRO0lBQ0ksZUFBQTtFQW1CVjtFQWxCTTtJQUNJLGVBQUE7RUFvQlY7RUFuQk07SUFDSSxvQkFBQTtJQUNBLHFCQUFBO0VBcUJWO0FBQ0Y7QUFwQkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQXNCSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDcwMDsxLDQwMDsxLDgwMCZkaXNwbGF5PXN3YXAnKVxcbiAgICBcXG4vLyBQcmltYXJ5IENvbG9yc1xcbiRwdXJwbGU6IGhzbCgyNTksIDEwMCUsIDY1JSlcXG4kbGlnaHRfcmVkOiBoc2woMCwgMTAwJSwgNjclKVxcblxcbi8vIE5ldXRyYWwgQ29sb3JzXFxuJHdoaXRlOiBoc2woMCwgMCUsIDEwMCUpXFxuJG9mZl93aGl0ZTogaHNsKDAsIDAlLCA5NCUpXFxuJGxpZ2h0X2dyZXk6IGhzbCgwLCAwJSwgODYlKVxcbiRzbW9rZXlfZ3JleTogaHNsKDAsIDElLCA0NCUpXFxuJG9mZl9ibGFjazogaHNsKDAsIDAlLCA4JSlcXG5cXG4vLyBUeXBvZ3JhcGh5XFxuJGZvbnRfc2l6ZV9pbnB1dHM6IDMycHhcXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94XFxuXFxuKlxcbiAgICBtYXJnaW46IDBcXG4gICAgcGFkZGluZzogMFxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aFxcblxcbmh0bWxcXG4gICAgZm9udC1zaXplOiA2Mi41JVxcblxcbmJvZHlcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtXFxuICAgIGJhY2tncm91bmQ6ICRvZmZfd2hpdGVcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgJ3NhbnMtc2VyaWYnXFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIGJvZHlcXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxcblxcbmltZ1xcbiAgICB3aWR0aDogMTAwJVxcbiAgICBoZWlnaHQ6IGF1dG9cXG4gICAgb2JqZWN0LWZpdDogY292ZXJcXG5cXG4uY29udGFpbmVyXFxuICAgIG1hcmdpbi10b3A6IDEwcmVtXFxuICAgIG1heC13aWR0aDogMzcuNXJlbVxcbiAgICBkaXNwbGF5OiBncmlkXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJpbnB1dFxcXCIgXFxcImFycm93XFxcIiBcXFwib3V0cHV0XFxcIlxcbiAgICBiYWNrZ3JvdW5kOiAkd2hpdGVcXG4gICAgcGFkZGluZzogNHJlbSAycmVtXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCA4MHB4IDIwcHhcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmNvbnRhaW5lclxcbiAgICAgICAgbWFyZ2luLXRvcDogMFxcbiAgICAgICAgd2lkdGg6IDEwMCVcXG4gICAgICAgIG1heC13aWR0aDogNTByZW1cXG4gICAgICAgIHBhZGRpbmc6IDRyZW1cXG5cXG4udXNlcl9pbnB1dF9jb250YWluZXJcXG4gICAgZ3JpZC1hcmVhOiBpbnB1dFxcbiAgICBkaXNwbGF5OiBmbGV4XFxuICAgIGdhcDogMXJlbVxcbiAgICBtYXJnaW4tYm90dG9tOiA0cmVtXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC51c2VyX2lucHV0X2NvbnRhaW5lclxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbVxcblxcbi5pbnB1dF9jb250YWluZXJcXG4gICAgZGlzcGxheTogZmxleFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uXFxuICAgIGdhcDogLjVyZW1cXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICBsYWJlbFxcbiAgICAgICAgY29sb3I6ICRzbW9rZXlfZ3JleVxcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweFxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW1cXG4gICAgICAgICZbZXJyb3I9XFxcIlxcXCJdXFxuICAgICAgICAgICAgY29sb3I6ICRsaWdodF9yZWRcXG4gICAgaW5wdXRcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBtYXgtd2lkdGg6IDhyZW1cXG4gICAgICAgIGhlaWdodDogNXJlbVxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4XFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfZ3JleVxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtXFxuICAgICAgICBvdXRsaW5lOiBub25lXFxuICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXIgMC4ycyBlYXNlLWluLW91dFxcbiAgICAgICAgJjo6cGxhY2Vob2xkZXJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwXFxuICAgICAgICAmOmZvY3VzXFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHB1cnBsZVxcbiAgICAgICAgJltlcnJvcj1cXFwiXFxcIl1cXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkbGlnaHRfcmVkXFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpXFxuICAgIC5pbnB1dF9jb250YWluZXIgaW5wdXRcXG4gICAgICAgIG1heC13aWR0aDogMTByZW1cXG4gICAgICAgIGhlaWdodDogNC41cmVtXFxuICAgICAgICAmOjpwbGFjZWhvbGRlclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbVxcblxcbi5lcnJvclxcbiAgICBmb250LXNpemU6IDAuOXJlbVxcbiAgICBmb250LXdlaWdodDogNDAwXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpY1xcbiAgICBjb2xvcjogJGxpZ2h0X3JlZFxcbiAgICBtYXgtaGVpZ2h0OiAwXFxuICAgIG92ZXJmbG93OiBoaWRkZW5cXG4gICAgb3BhY2l0eTogMFxcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgJltpbnZhbGlkPVxcXCJcXFwiXVxcbiAgICAgICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnRcXG4gICAgICAgIG9wYWNpdHk6IDFcXG4gICAgICAgIG92ZXJmbG93OiBhdXRvXFxuXFxuLmFycm93X2NvbnRhaW5lclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbVxcbiAgICBncmlkLWFyZWE6IGFycm93XFxuICAgIC5hcnJvd1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlXFxuICAgICAgICB0b3A6IC0yLjVyZW1cXG4gICAgICAgIGxlZnQ6IDUwJVxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpXFxuICAgICAgICB3aWR0aDogMnJlbVxcbiAgICAgICAgaGVpZ2h0OiAycmVtXFxuICAgICAgICBjb2xvcjogJHdoaXRlXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCVcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDBcXG4gICAgICAgIGJhY2tncm91bmQ6ICRwdXJwbGVcXG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW1cXG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbFxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXRcXG4gICAgICAgIHBhdGhcXG4gICAgICAgICAgICBzdHJva2U6ICNmZmZcXG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDRweFxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0XFxuICAgICAgICAmOmhvdmVyXFxuICAgICAgICAgICAgYmFja2dyb3VuZDogJG9mZl9ibGFja1xcbiAgICAgICAgICAgIHBhdGhcXG4gICAgICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAycHhcXG4gICAgLmxpbmVcXG4gICAgICAgIHdpZHRoOiAxMDAlXFxuICAgICAgICBoZWlnaHQ6IDJweFxcbiAgICAgICAgYmFja2dyb3VuZDogJG9mZl93aGl0ZVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KVxcbiAgICAuYXJyb3dfY29udGFpbmVyIFxcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxcbiAgICAgICAgLmFycm93XFxuICAgICAgICAgICAgbGVmdDogdW5zZXRcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMClcXG4gICAgICAgICAgICByaWdodDogMFxcblxcblxcbi5hZ2VfY2FsY3VsYXRpb25fY29udGFpbmVyXFxuICAgIGdyaWQtYXJlYTogb3V0cHV0XFxuICAgIGRpc3BsYXk6IGZsZXhcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtblxcbiAgICBoMVxcbiAgICAgICAgZm9udC1zaXplOiA0Ljc1cmVtXFxuICAgICAgICBmb250LXdlaWdodDogODAwXFxuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWNcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0ycmVtXFxuICAgIHBcXG4gICAgICAgIGZvbnQtc2l6ZTogNC43NXJlbVxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMFxcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljXFxuICAgICAgICAmOm50aC1jaGlsZCgyKVxcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycmVtXFxuICAgIC5hZ2VfY2FsY3VsYXRpb25cXG4gICAgICAgIGNvbG9yOiAkcHVycGxlXFxuICAgICAgICAmW2ZpbmlzaGVkPScnXVxcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHhcXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0ycHhcXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweClcXG4gICAgLmFnZV9jYWxjdWxhdGlvbl9jb250YWluZXIgXFxuICAgICAgICBoMVxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbVxcbiAgICAgICAgcFxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnJlbVxcbiAgICAgICAgLmFnZV9jYWxjdWxhdGlvblxcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxMHB4XFxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMS41cmVtXFxuXFxuLmF0dHJpYnV0aW9uXFxuICAgIHBvc2l0aW9uOiBmaXhlZFxcbiAgICBib3R0b206IDJyZW1cXG4gICAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNhc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zYXNzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5zYXNzXCI7XG5pbXBvcnQgeyBmb3JtYXQsIHN1YkRheXMsIHN1Yk1vbnRocywgc3ViWWVhcnN9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5jb25zdCBhZ2VEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FnZURheVwiKTtcbmNvbnN0IGVycm9yRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl9kYXlcIik7XG5jb25zdCBhZ2VNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWdlTW9udGhcIik7XG5jb25zdCBhcnJvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJyb3dcIik7XG5jb25zdCBkYXkzMFJlZ2V4ID0gLyg/PV5bMS0yXVswLTldPyR8XjMwJCkuKi87XG5jb25zdCBkYXkzMVJlZ2V4ID0gLyg/PV5bMS0yXVswLTldPyR8XjNbMC0xXSQpLiovO1xuY29uc3QgZXJyb3JNb250aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JfbW9udGhcIik7XG5jb25zdCBhZ2VZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZ2VZZWFyXCIpO1xuY29uc3QgZXJyb3JZZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvcl95ZWFyXCIpO1xuLy8gcmVnZXhlcyBmb3IgZGF0ZXNcbmNvbnN0IGZlYnJ1YXJ5UmVndWxhclJlZ2V4ID0gLyg/PV5bMS0yXVswLThdPyQpLiovO1xuY29uc3QgZmVicnVhcnlMZWFwUmVnZXggPSAvKD89XlsxLTJdWzAtOV0/JCkuKi87XG5jb25zdCB5ZWFyUmVnZXggPSAvKD89XjE5WzMtOV1bMC05XSR8XjIwWzAtMV1bMC05XSR8XjIwMlswLTRdJCkuKi87XG5jb25zdCBtb250aFJlZ2V4ID0gLyg/PV4wP1sxLTldJHxeMVswLTJdJCkuKi87XG5cbi8vIEhvdyBsb25nIHlvdSB3YW50IHRoZSBhbmltYXRpb24gdG8gdGFrZSwgaW4gbXNcbmNvbnN0IGFuaW1hdGlvbkR1cmF0aW9uID0gMjAwMDtcblxuLy8gQ2FsY3VsYXRlIGhvdyBsb25nIGVhY2ggJ2ZyYW1lJyBzaG91bGQgbGFzdFxuY29uc3QgZnJhbWVEdXJhdGlvbiA9IDEwMDAgLyA2MDtcblxuLy8gVXNlIHRoYXQgdG8gY2FsY3VsYXRlIGhvdyBtYW55IGZyYW1lcyB0byBjb21wbGV0ZSB0aGUgYW5pbWF0aW9uXG5jb25zdCB0b3RhbEZyYW1lcyA9IE1hdGgucm91bmQoYW5pbWF0aW9uRHVyYXRpb24gLyBmcmFtZUR1cmF0aW9uKTtcblxuLy8gQW4gZWFzZS1vdXQgZnVuY3Rpb24gdGhhdCBzbG93cyB0aGUgY291bnQgYXMgaXQgcHJvZ3Jlc3Nlc1xuY29uc3QgZWFzZU91dFF1YWQgPSB0ID0+IHQgKiAoMiAtIHQpO1xuXG4vLyB2YWx1ZSB2YXJpYWJsZXNcbi8qIERheXMgaW4gZWFjaCBtb250aFxuSmFudWFyeTogMzFcbkZlYnJ1YXJ5OiAyOCB8IDI5IGlmIGxlYXAgeWVhclxuTWFyY2g6IDMxXG5BcHJpbDogMzBcbk1heTogMzFcbkp1bmU6IDMwXG5KdWx5OiAzMVxuQXVndXN0OiAzMVxuU2VwdGVtYmVyOiAzMFxuT2N0b2JlcjogMzFcbk5vdmVtYmVyOiAzMFxuRGVjZW1iZXI6IDMxICovXG5cbi8qIExlYXAgWWVhcnNcbjE5MzIsXG4xOTM2LFxuMTk0MCxcbjE5NDQsXG4xOTQ4LFxuMTk1MixcbjE5NTYsXG4xOTYwLFxuMTk2NCxcbjE5NjgsXG4xOTcyLFxuMTk3NixcbjE5ODAsXG4xOTg0LFxuMTk4OCxcbjE5OTIsXG4xOTk2LFxuMjAwMCxcbjIwMDQsXG4yMDA4LFxuMjAxMixcbjIwMTYsXG4yMDIwXG4qL1xuXG53aW5kb3cub25sb2FkID0gZXJhc2VPbkxvYWQ7XG5cbmNsYXNzIFVzZXIge1xuICAvLyBQbGFjZXMgdXNlcnMgZW50ZXJlZCBkYXksIG1vbnRoLCBhbmQgeWVhciBpbnRvIGFuIG9iamVjdCB0byBiZSB1c2VkXG4gIGNvbnN0cnVjdG9yKHVzZXJEYXksIHVzZXJNb250aCwgdXNlclllYXIpIHtcbiAgICB0aGlzLnVzZXJEYXkgPSB1c2VyRGF5O1xuICAgIHRoaXMudXNlck1vbnRoID0gdXNlck1vbnRoO1xuICAgIHRoaXMudXNlclllYXIgPSB1c2VyWWVhcjtcbiAgfVxuXG4gIC8qIFRoaXMgb2JqZWN0IG1ldGhvZCBjYWxjdWxhdGVzIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZSBjdXJyZW50XG4gIGRhdGUgYW5kIG91ciB1c2VyJ3MgZGF0ZSAqL1xuICBjYWxjdWxhdGVBZ2VEaWZmZXJlbmNlKCkge1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCB1c2VyRGF0ZSA9IG5ldyBEYXRlKHRoaXMudXNlclllYXIsIHRoaXMudXNlck1vbnRoIC0gMSwgdGhpcy51c2VyRGF5KTtcbiAgICBjb25zb2xlLmxvZyh0b2RheSlcbiAgICBcbiAgICBsZXQgdG9kYXlEYXkgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IHVzZXJEYXkgPSB1c2VyRGF0ZS5nZXREYXRlKCk7XG4gICAgXG4gICAgbGV0IHRvZGF5TW9udGggPSB0b2RheS5nZXRNb250aCgpO1xuICAgIGxldCB1c2VyTW9udGggPSB1c2VyRGF0ZS5nZXRNb250aCgpO1xuICAgIFxuICAgIGxldCB0b2RheVllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgIGxldCB1c2VyWWVhciA9IHVzZXJEYXRlLmdldEZ1bGxZZWFyKClcbiAgICBcbiAgICByZXR1cm4ge3RvZGF5RGF5LCB1c2VyRGF5LCB0b2RheU1vbnRoLCB1c2VyTW9udGgsIHRvZGF5WWVhciwgdXNlclllYXJ9O1xuICB9XG5cbiAgLyogVGhpcyBvYmplY3QgbWV0aG9kIHRha2VzIHRoZSBvYmplY3QgZnJvbSBjYWxjdWxhdGVBZ2VEaWZmZXJlbmNlKClcbiAgYW5kIGNoYW5nZXMgdGhlIHZhbHVlcyBiYXNlZCBvbiB3aGF0IHRpbWUgb2YgdGhlIHllYXIgb3IgbW9udGggaXQgaXMgKi9cbiAgY2FsY3VsYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgXG4gICAgLy8gSG9sZHMgdGhlIHZhbHVlcyBmcm9tIGNhbGN1bGF0ZUFnZURpZmZlcmVuY2UoKVxuICAgIGNvbnN0IGRpZmZlcmVuY2VzID0gdGhpcy5jYWxjdWxhdGVBZ2VEaWZmZXJlbmNlKCk7XG4gICAgXG4gICAgLy8gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGUgdXNlcnMgZGF5IG9mIGJpcnRoLCBtb250aCwgYW5kIHllYXIgZnJvbSBjdXJyZW50XG4gICAgbGV0IGRpZmZEaXNwbGF5WWVhciA9IChkaWZmZXJlbmNlcy50b2RheVllYXIgLSBkaWZmZXJlbmNlcy51c2VyWWVhcik7XG4gICAgbGV0IGRpZmZEaXNwbGF5TW9udGhzID0gKGRpZmZlcmVuY2VzLnRvZGF5TW9udGggLSBkaWZmZXJlbmNlcy51c2VyTW9udGgpO1xuICAgIGxldCBkaWZmRGlzcGxheURheXMgPSAoZGlmZmVyZW5jZXMudG9kYXlEYXkgLSBkaWZmZXJlbmNlcy51c2VyRGF5KTtcbiAgICBcbiAgICAvKiBXaGVuIHlvdSBzdWJ0cmFjdCB0aGUgbW9udGhzIGZyb20gZWFjaCBvdGhlciwgeW91IGNhbiBlbmQgdXAgd2l0aCBhIG5lZ2F0aXZlIHZhbHVlLi4uXG4gICAgaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlIG9yIGlmIGl0IGVxdWFscyAwIGFuZCB0aGUgY3VycmVudCBkYXkgb2YgdGhlIG1vbnRoIGlzIGxlc3MgdGhhbiB0aGUgdXNlcidzIGRheSBvZiB0aGVcbiAgICBtb250aCwgaXQgd2lsbCBsZXNzZW4gdGhlIHllYXIgYnkgb25lIHdoaWxlIGFkZGluZyAxMiB0byB0aGUgbW9udGggdmFsdWUgKi9cbiAgICBpZiAoZGlmZkRpc3BsYXlNb250aHMgPCAwIHx8IGRpZmZEaXNwbGF5TW9udGhzID09PSAwICYmIGRpZmZlcmVuY2VzLnRvZGF5RGF5IDwgZGlmZmVyZW5jZXMudXNlckRheSkge1xuICAgICAgZGlmZkRpc3BsYXlZZWFyID0gZGlmZkRpc3BsYXlZZWFyIC0gMTtcbiAgICAgIGRpZmZEaXNwbGF5TW9udGhzICs9IDEyO1xuICAgIH1cbiAgICBcbiAgICAvKiBJZiB0aGUgZGlmZmVyZW5jZSBpbiB0aGUgY3VycmVudCBkYXkgYW1vdW50IGFuZCB1c2VyJ3MgZGF5IGFtb3VudCBpcyBsZXNzIHRoYW4gMCxcbiAgICBhIG5ldyB0ZW1wb3Jhcnkgb2JqZWN0IHdpbGwgYmUgY3JlYXRlZCAod2l0aCB0aGUgdmFsdWVzIG9mIHRvZGF5WWVhciBhbmQgdG9kYXlNb250aCkuXG4gICAgVGhlIGRhdGUgZGF5IGFtb3VudCBmcm9tIHRoYXQgb2JqZWN0IHdpbGwgYmUgYWRkZWQgdG8gRGlmZkRpc3BsYXlEYXlzIHdoaWxlIHRoZSBtb250aHMgd2lsbCBiZVxuICAgIGxlc3NlbmVkIChhbiBlZGdlIGNhc2UpKi9cbiAgICBcbiAgICBpZiAoZGlmZkRpc3BsYXlEYXlzIDwgMCkge1xuICAgICAgZGlmZkRpc3BsYXlEYXlzICs9ICgxICsgMzApO1xuICAgICAgZGlmZkRpc3BsYXlNb250aHMtLTtcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIGRpZmZEaXNwbGF5RGF5cyxcbiAgICAgIGRpZmZEaXNwbGF5TW9udGhzLFxuICAgICAgZGlmZkRpc3BsYXlZZWFyXG4gICAgfVxuICB9XG4gIFxuICBhbmltYXRlUGFnZUNvbnRlbnQoKSB7XG4gICAgY29uc3QgZGlmZkRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZl9kYXlzJyk7XG4gICAgY29uc3QgZGlmZk1vbnRocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmX21vbnRocycpO1xuICAgIGNvbnN0IGRpZmZZZWFycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaWZmX3llYXJzJyk7XG5cbiAgICBjb25zdCBkaWZmZXJlbmNlcyA9IHRoaXMuY2FsY3VsYXRlUGFnZUNvbnRlbnQoKTtcbiAgICBjb25zb2xlLmxvZyhkaWZmZXJlbmNlcy5kaWZmRGlzcGxheURheXMsIGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5TW9udGhzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheVllYXIpXG4gICAgLyogY2hhbmdlcyB0aGUgZGlzcGxheSBvbiB0aGUgcGFnZSBieSBhZGRpbmcgYXR0cmlidXRlcyB0byB0aGUgY29udGFpbmVyc1xuICAgIGhvbGRpbmcgdGhlIHZhbHVlcyBhbmQgY2hhbmdpbmcgdGV4dCBjb250ZW50ICovXG4gIFxuICAgIGRpZmZEYXlzLnNldEF0dHJpYnV0ZSgnZmluaXNoZWQnLCAnJyk7XG4gICAgZGlmZk1vbnRocy5zZXRBdHRyaWJ1dGUoJ2ZpbmlzaGVkJywgJycpO1xuICAgIGRpZmZZZWFycy5zZXRBdHRyaWJ1dGUoJ2ZpbmlzaGVkJywgJycpO1xuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5WWVhciA9PSAwKSB7XG4gICAgICBkaWZmWWVhcnMudGV4dENvbnRlbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRlQ291bnRVcChkaWZmWWVhcnMsIGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5WWVhcik7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5TW9udGhzID09IDApIHtcbiAgICAgIGRpZmZNb250aHMudGV4dENvbnRlbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbmltYXRlQ291bnRVcChkaWZmTW9udGhzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheU1vbnRocyk7XG4gICAgfVxuXG4gICAgaWYgKGRpZmZlcmVuY2VzLmRpZmZEaXNwbGF5RGF5cyA9PSAwKSB7XG4gICAgICBkaWZmRGF5cy50ZXh0Q29udGVudCA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFuaW1hdGVDb3VudFVwKGRpZmZEYXlzLCBkaWZmZXJlbmNlcy5kaWZmRGlzcGxheURheXMpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBoZWxwZXIgZnVuY3Rpb24gZm9yIGVyYXNpbmcgZXZlcnl0aGluZyBvbiB0aGUgcGFnZSB3aGVuIHBhZ2UgaXMgbG9hZGVkXG5mdW5jdGlvbiBlcmFzZU9uTG9hZCgpIHtcbiAgYWdlRGF5LnZhbHVlID0gXCJcIjtcbiAgYWdlTW9udGgudmFsdWUgPSBcIlwiO1xuICBhZ2VZZWFyLnZhbHVlID0gXCJcIjtcbn1cblxuZnVuY3Rpb24gY2hlY2tEYXkoKSB7XG4gIC8vIGNoZWNrcyBmb3IgZW1wdHkgdmFsdWUgaW4gZGF5IGlucHV0XG4gIGlmIChhZ2VEYXkudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JEYXkudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcbiAgICBlcnJvckRheS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIC8vIHJldHVybnMgdHJ1ZSBvciBmYWxzeSB2YWx1ZSBmb3IgY2hlY2tpbmcgbGF0ZXJcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoYWdlTW9udGgudmFsdWUgPT0gMikge1xuICAgIC8vIGRpZmZlcmVudCBjYXNlcyBmb3IgdGhlIGRheSB2YWx1ZSB0byBiZSBjaGVja2VkIGFnYWluc3RcbiAgICBpZiAoZmVicnVhcnlMZWFwUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpICYmIGFnZURheS5oYXNBdHRyaWJ1dGUoXCJlcnJvclwiKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgICBhZ2VEYXkucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIGVycm9yRGF5LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGVycm9yRGF5LnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgZmVicnVhcnlMZWFwUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpICYmXG4gICAgICAhYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpXG4gICAgKSB7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWZlYnJ1YXJ5TGVhcFJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIGRheVwiO1xuICAgICAgZXJyb3JEYXkuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgYWdlTW9udGgudmFsdWUgPT0gMSB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDMgfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSA1IHx8XG4gICAgYWdlTW9udGgudmFsdWUgPT0gNyB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDggfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSAxMCB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDEyXG4gICkge1xuICAgIGlmIChkYXkzMVJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSAmJiBhZ2VEYXkuaGFzQXR0cmlidXRlKFwiZXJyb3JcIikpIHtcbiAgICAgIGFnZURheS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgICAgYWdlRGF5LnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgICAgYWdlRGF5LnNldEF0dHJpYnV0ZShcInN1Y2Nlc3NcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBlcnJvckRheS5yZW1vdmVBdHRyaWJ1dGUoXCJpbnZhbGlkXCIpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChkYXkzMVJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSAmJiAhYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIWRheTMxUmVnZXgudGVzdChhZ2VEYXkudmFsdWUpKSB7XG4gICAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICAgIGFnZURheS5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICAgIGVycm9yRGF5LnRleHRDb250ZW50ID0gXCJNdXN0IGJlIGEgdmFsaWQgZGF5XCI7XG4gICAgICBlcnJvckRheS5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgICBhZ2VNb250aC52YWx1ZSA9PSA0IHx8XG4gICAgYWdlTW9udGgudmFsdWUgPT0gNiB8fFxuICAgIGFnZU1vbnRoLnZhbHVlID09IDkgfHxcbiAgICBhZ2VNb250aC52YWx1ZSA9PSAxMVxuICApIHtcbiAgICBpZiAoZGF5MzBSZWdleC50ZXN0KGFnZURheS52YWx1ZSkgJiYgYWdlRGF5Lmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgICBhZ2VEYXkucHJldmlvdXNFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICAgIGFnZURheS5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICAgIGFnZURheS5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgICAgZXJyb3JEYXkudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgZXJyb3JEYXkucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAoZGF5MzBSZWdleC50ZXN0KGFnZURheS52YWx1ZSkgJiYgIWFnZURheS5oYXNBdHRyaWJ1dGUoXCJlcnJvclwiKSkge1xuICAgICAgYWdlRGF5LnNldEF0dHJpYnV0ZShcInN1Y2Nlc3NcIiwgXCJcIik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFkYXkzMFJlZ2V4LnRlc3QoYWdlRGF5LnZhbHVlKSkge1xuICAgICAgYWdlRGF5LnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBhZ2VEYXkuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgICBlcnJvckRheS50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIGRheVwiO1xuICAgICAgZXJyb3JEYXkuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tNb250aCgpIHtcbiAgLy8gY2hlY2tzIGZvciBhbiBlbXB0eSB2YWx1ZSBpbiB0aGUgbW9udGggaW5wdXRcbiAgaWYgKGFnZU1vbnRoLnZhbHVlID09PSBcIlwiKSB7XG4gICAgYWdlTW9udGgucHJldmlvdXNFbGVtZW50U2libGluZy5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBhZ2VNb250aC5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBlcnJvck1vbnRoLnRleHRDb250ZW50ID0gXCJUaGlzIGZpZWxkIGlzIHJlcXVpcmVkXCI7XG4gICAgZXJyb3JNb250aC5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIC8vIHRydXRoeSBvciBmYWxzeSB2YWx1ZXMgdG8gYmUgY2hlY2tlZCBsYXRlclxuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIGlmIChcbiAgICBtb250aFJlZ2V4LnRlc3QoYWdlTW9udGgudmFsdWUpICYmXG4gICAgIWFnZU1vbnRoLmhhc0F0dHJpYnV0ZShcImVycm9yXCIpXG4gICkge1xuICAgIC8vIGRpZmZlcmVudCBjYXNlcyB0byBiZSBjaGVja2VkXG4gICAgYWdlTW9udGguc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChcbiAgICBtb250aFJlZ2V4LnRlc3QoYWdlTW9udGgudmFsdWUpICYmXG4gICAgYWdlTW9udGguaGFzQXR0cmlidXRlKFwiZXJyb3JcIilcbiAgKSB7XG4gICAgYWdlTW9udGgucHJldmlvdXNFbGVtZW50U2libGluZy5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICBhZ2VNb250aC5yZW1vdmVBdHRyaWJ1dGUoXCJlcnJvclwiKTtcbiAgICBhZ2VNb250aC5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgIGVycm9yTW9udGgudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGVycm9yTW9udGgucmVtb3ZlQXR0cmlidXRlKFwiaW52YWxpZFwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICghbW9udGhSZWdleC50ZXN0KGFnZU1vbnRoLnZhbHVlKSkge1xuICAgIGFnZU1vbnRoLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgYWdlTW9udGguc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JNb250aC50ZXh0Q29udGVudCA9IFwiTXVzdCBiZSBhIHZhbGlkIG1vbnRoXCI7XG4gICAgZXJyb3JNb250aC5zZXRBdHRyaWJ1dGUoXCJpbnZhbGlkXCIsIFwiXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1llYXIoKSB7XG4gIC8vIGNoZWNrcyBmb3IgYW4gZW1wdHkgdmFsdWUgaW4gdGhlIHllYXIgaW5wdXRcbiAgaWYgKGFnZVllYXIudmFsdWUgPT09IFwiXCIpIHtcbiAgICBhZ2VZZWFyLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgYWdlWWVhci5zZXRBdHRyaWJ1dGUoXCJlcnJvclwiLCBcIlwiKTtcbiAgICBlcnJvclllYXIudGV4dENvbnRlbnQgPSBcIlRoaXMgZmllbGQgaXMgcmVxdWlyZWRcIjtcbiAgICBlcnJvclllYXIuc2V0QXR0cmlidXRlKFwiaW52YWxpZFwiLCBcIlwiKTtcbiAgICAvLyB0cnV0aHkgb3IgZmFsc3kgdmFsdWVzIHRvIGJlIGNoZWNrZWQgbGF0ZXJcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSBpZiAoeWVhclJlZ2V4LnRlc3QoYWdlWWVhci52YWx1ZSkgJiYgIWFnZVllYXIuaGFzQXR0cmlidXRlKFwiZXJyb3JcIikpIHtcbiAgICAvLyBkaWZmZXJlbnQgY2FzZXMgdG8gYmUgY2hlY2tlZFxuICAgIGFnZVllYXIuc2V0QXR0cmlidXRlKFwic3VjY2Vzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh5ZWFyUmVnZXgudGVzdChhZ2VZZWFyLnZhbHVlKSAmJiBhZ2VZZWFyLmhhc0F0dHJpYnV0ZShcImVycm9yXCIpKSB7XG4gICAgYWdlWWVhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnJlbW92ZUF0dHJpYnV0ZShcImVycm9yXCIpO1xuICAgIGFnZVllYXIucmVtb3ZlQXR0cmlidXRlKFwiZXJyb3JcIik7XG4gICAgYWdlWWVhci5zZXRBdHRyaWJ1dGUoXCJzdWNjZXNzXCIsIFwiXCIpO1xuICAgIGVycm9yWWVhci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZXJyb3JZZWFyLnJlbW92ZUF0dHJpYnV0ZShcImludmFsaWRcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoIXllYXJSZWdleC50ZXN0KGFnZVllYXIudmFsdWUpKSB7XG4gICAgYWdlWWVhci5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnNldEF0dHJpYnV0ZShcImVycm9yXCIsIFwiXCIpO1xuICAgIGFnZVllYXIuc2V0QXR0cmlidXRlKFwiZXJyb3JcIiwgXCJcIik7XG4gICAgZXJyb3JZZWFyLnRleHRDb250ZW50ID0gXCJNdXN0IGJlIGluIHRoZSBwYXN0XCI7XG4gICAgZXJyb3JZZWFyLnNldEF0dHJpYnV0ZShcImludmFsaWRcIiwgXCJcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudFVwKGVsLCBkaWZmKSB7XG4gIGxldCBmcmFtZSA9IDA7XG4gIGNvbnN0IGNvdW50VG8gPSBwYXJzZUludChkaWZmLCAxMCk7XG4gIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24gcnVubmluZyA2MCB0aW1lcyBwZXIgc2Vjb25kXG4gIGNvbnN0IGNvdW50ZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgZnJhbWUrKztcbiAgICAvLyBDYWxjdWxhdGUgb3VyIHByb2dyZXNzIGFzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxXG4gICAgLy8gUGFzcyB0aGF0IHZhbHVlIHRvIG91ciBlYXNpbmcgZnVuY3Rpb24gdG8gZ2V0IG91clxuICAgIC8vIFByb2dyZXNzIG9uIGEgY3VydmVcbiAgICBjb25zdCBwcm9ncmVzcyA9IGVhc2VPdXRRdWFkKGZyYW1lL3RvdGFsRnJhbWVzKTtcbiAgICAvLyBVc2UgdGhlIHByb2dyZXNzIHZhbHVlIHRvIGNhbGN1bGF0ZSB0aGUgY3VycmVudCBjb3VudFxuICAgIGNvbnN0IGN1cnJlbnRDb3VudCA9IE1hdGgucm91bmQoY291bnRUbyAqIHByb2dyZXNzKTtcblxuICAgIC8vIElmIHRoZSBjdXJyZW50IGNvdW50IGhhcyBjaGFuZ2VkLCB1cGRhdGUgdGhlIGVsZW1lbnRcbiAgICBpZiAocGFyc2VJbnQoZGlmZiwgMTApICE9PSBjdXJyZW50Q291bnQpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY3VycmVudENvdW50O1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3ZlIHJlYWNoZWQgb3VyIGxhc3QgZnJhbWUsIHN0b3AgdGhlIGFuaW1hdGlvblxuICAgIGlmIChmcmFtZSA9PT0gdG90YWxGcmFtZXMpIHtcbiAgICAgIGVsLnRleHRDb250ZW50ID0gY3VycmVudENvdW50O1xuICAgICAgY2xlYXJJbnRlcnZhbChjb3VudGVyKTtcbiAgICB9XG4gIH0sIGZyYW1lRHVyYXRpb24pO1xufTtcblxuLy8gZnVuY3Rpb24gZm9yIHBlcmZvcm1pbmcgdGhlIGNoZWNrcyBvbiB0aGUgaW5wdXRzXG5mdW5jdGlvbiBjaGVja0Zvcm0oKSB7XG4gIGxldCBhZ2VEYXlOdW1iZXIgPSBOdW1iZXIoYWdlRGF5LnZhbHVlKTtcbiAgbGV0IGFnZU1vbnRoTnVtYmVyID0gTnVtYmVyKGFnZU1vbnRoLnZhbHVlKTtcbiAgbGV0IGFnZVllYXJOdW1iZXIgPSBOdW1iZXIoYWdlWWVhci52YWx1ZSk7XG5cbiAgbGV0IGRheUNoZWNrZWQgPSBjaGVja0RheSgpO1xuICBsZXQgbW9udGhDaGVja2VkID0gY2hlY2tNb250aCgpO1xuICBsZXQgeWVhckNoZWNrZWQgPSBjaGVja1llYXIoKTtcblxuICBpZiAoZGF5Q2hlY2tlZCAmJiBtb250aENoZWNrZWQgJiYgeWVhckNoZWNrZWQpIHtcbiAgICBjb25zdCB1c2VyID0gbmV3IFVzZXIoYWdlRGF5TnVtYmVyLCBhZ2VNb250aE51bWJlciwgYWdlWWVhck51bWJlcik7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH0gXG59XG5cbi8vIGZ1bmN0aW9uIHdoaWNoIGNvbnRhaW5zIGEgdHJ5IGNhdGNoIGZvciBzdG9wcGluZyB0aGUgZm9ybSBpZiBpbnB1dHMgYXJlIGVudGVyZWQgaW5jb3JyZWN0bHlcbmZ1bmN0aW9uIGRpc3BsYXlBZ2VEaWZmZXJlbmNlKCkge1xuICB0cnkge1xuICAgIGlmIChjaGVja0Zvcm0oKSkge1xuICAgICAgbGV0IHVzZXIgPSBjaGVja0Zvcm0oKTtcbiAgICAgIHVzZXIuYW5pbWF0ZVBhZ2VDb250ZW50KCk7XG4gICAgfSBlbHNlIGlmICghY2hlY2tGb3JtKCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGxlYXNlIGVudGVyIHZhbHVlcyBpbiBhZ2UgZm9ybScpO1xuICAgIH1cbiAgfSBjYXRjaChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbn1cblxuYXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlBZ2VEaWZmZXJlbmNlKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==