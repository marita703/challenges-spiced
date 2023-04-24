"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/BoxWithClassName/BoxWithClassName.js":
/*!*********************************************************!*\
  !*** ./components/BoxWithClassName/BoxWithClassName.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoxWithClassName)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction BoxWithClassName({ isBlack  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: `box-with-classname${isBlack ? \" box-with-classname--black\" : \"\"}`\n    }, void 0, false, {\n        fileName: \"/Users/mariadelmarmartinez/Documents/savory-folder/challenges-spiced/react-styled-components_box/components/BoxWithClassName/BoxWithClassName.js\",\n        lineNumber: 3,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JveFdpdGhDbGFzc05hbWUvQm94V2l0aENsYXNzTmFtZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUFlLFNBQVNBLGlCQUFpQixFQUFFQyxRQUFPLEVBQUUsRUFBRTtJQUNwRCxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVyxDQUFDLGtCQUFrQixFQUM1QkYsVUFBVSwrQkFBK0IsRUFBRSxDQUM1QyxDQUFDOzs7Ozs7QUFHUixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3R5bGVkLWNvbXBvbmVudHNfYm94Ly4vY29tcG9uZW50cy9Cb3hXaXRoQ2xhc3NOYW1lL0JveFdpdGhDbGFzc05hbWUuanM/NWZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3hXaXRoQ2xhc3NOYW1lKHsgaXNCbGFjayB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtgYm94LXdpdGgtY2xhc3NuYW1lJHtcbiAgICAgICAgaXNCbGFjayA/IFwiIGJveC13aXRoLWNsYXNzbmFtZS0tYmxhY2tcIiA6IFwiXCJcbiAgICAgIH1gfVxuICAgID48L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCb3hXaXRoQ2xhc3NOYW1lIiwiaXNCbGFjayIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BoxWithClassName/BoxWithClassName.js\n");

/***/ }),

/***/ "./components/BoxWithClassName/BoxWithStyledComponents.js":
/*!****************************************************************!*\
  !*** ./components/BoxWithClassName/BoxWithStyledComponents.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ BoxWithStyledComponent)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction BoxWithStyledComponent({ isBlack  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(StyledBox, {\n        isBlack: true\n    }, void 0, false, {\n        fileName: \"/Users/mariadelmarmartinez/Documents/savory-folder/challenges-spiced/react-styled-components_box/components/BoxWithClassName/BoxWithStyledComponents.js\",\n        lineNumber: 4,\n        columnNumber: 10\n    }, this);\n}\nconst StyledBox = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({\n    displayName: \"BoxWithStyledComponents__StyledBox\",\n    componentId: \"sc-975abcae-0\"\n})`\n  width: 100px;\n  height: 100px;\n  margin: 2rem;\n  background-color: ${({ isBlack  })=>isBlack ? \"black\" : \"green\"};\n\n  &:hover {\n    background-color: red;\n  }\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JveFdpdGhDbGFzc05hbWUvQm94V2l0aFN0eWxlZENvbXBvbmVudHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUF1QztBQUV4QixTQUFTQyx1QkFBdUIsRUFBRUMsUUFBTyxFQUFFLEVBQUU7SUFDMUQscUJBQU8sOERBQUNDO1FBQVVELE9BQU87Ozs7OztBQUMzQixDQUFDO0FBRUQsTUFBTUMsWUFBWUgsdUVBQVU7OztFQUFBLENBQUM7Ozs7b0JBSVQsRUFBRSxDQUFDLEVBQUVFLFFBQU8sRUFBRSxHQUFNQSxVQUFVLFVBQVUsT0FBTyxDQUFFOzs7OztBQUtyRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3R5bGVkLWNvbXBvbmVudHNfYm94Ly4vY29tcG9uZW50cy9Cb3hXaXRoQ2xhc3NOYW1lL0JveFdpdGhTdHlsZWRDb21wb25lbnRzLmpzPzU1ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94V2l0aFN0eWxlZENvbXBvbmVudCh7IGlzQmxhY2sgfSkge1xuICByZXR1cm4gPFN0eWxlZEJveCBpc0JsYWNrIC8+O1xufVxuXG5jb25zdCBTdHlsZWRCb3ggPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIG1hcmdpbjogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHsoeyBpc0JsYWNrIH0pID0+IChpc0JsYWNrID8gXCJibGFja1wiIDogXCJncmVlblwiKX07XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICB9XG5gO1xuIl0sIm5hbWVzIjpbInN0eWxlZCIsIkJveFdpdGhTdHlsZWRDb21wb25lbnQiLCJpc0JsYWNrIiwiU3R5bGVkQm94IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BoxWithClassName/BoxWithStyledComponents.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_BoxWithClassName_BoxWithClassName_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/BoxWithClassName/BoxWithClassName.js */ \"./components/BoxWithClassName/BoxWithClassName.js\");\n/* harmony import */ var _components_BoxWithClassName_BoxWithStyledComponents_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BoxWithClassName/BoxWithStyledComponents.js */ \"./components/BoxWithClassName/BoxWithStyledComponents.js\");\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoxWithClassName_BoxWithStyledComponents_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/mariadelmarmartinez/Documents/savory-folder/challenges-spiced/react-styled-components_box/pages/index.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BoxWithClassName_BoxWithStyledComponents_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                isBlack: true\n            }, void 0, false, {\n                fileName: \"/Users/mariadelmarmartinez/Documents/savory-folder/challenges-spiced/react-styled-components_box/pages/index.js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mariadelmarmartinez/Documents/savory-folder/challenges-spiced/react-styled-components_box/pages/index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQWtGO0FBQ2E7QUFFaEYsU0FBU0UsV0FBVztJQUNqQyxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDRiwrRkFBc0JBOzs7OzswQkFDdkIsOERBQUNBLCtGQUFzQkE7Z0JBQUNHLE9BQU87Ozs7Ozs7Ozs7OztBQUdyQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVhY3Qtc3R5bGVkLWNvbXBvbmVudHNfYm94Ly4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm94V2l0aENsYXNzTmFtZSBmcm9tIFwiLi4vY29tcG9uZW50cy9Cb3hXaXRoQ2xhc3NOYW1lL0JveFdpdGhDbGFzc05hbWUuanNcIjtcbmltcG9ydCBCb3hXaXRoU3R5bGVkQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL0JveFdpdGhDbGFzc05hbWUvQm94V2l0aFN0eWxlZENvbXBvbmVudHMuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCb3hXaXRoU3R5bGVkQ29tcG9uZW50IC8+XG4gICAgICA8Qm94V2l0aFN0eWxlZENvbXBvbmVudCBpc0JsYWNrIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQm94V2l0aENsYXNzTmFtZSIsIkJveFdpdGhTdHlsZWRDb21wb25lbnQiLCJIb21lUGFnZSIsImRpdiIsImlzQmxhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();