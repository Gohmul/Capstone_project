"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/games/[machineId]",{

/***/ "./pages/games/[machineId].js":
/*!************************************!*\
  !*** ./pages/games/[machineId].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MachineDetail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var machineId = router.query.machineId;\n    // use the machineId to fetch data for the specific machine and render the page\n    console.log(machineId);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getMachines();\n        var item = sessionStorage.getItem(\"machines\");\n        getMachinesAndConvertToArray(item);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Machine Page\"\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Machine ID: \",\n                    machineId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(MachineDetail, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MachineDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MachineDetail);\nvar _c;\n$RefreshReg$(_c, \"MachineDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy9bbWFjaGluZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUNOO0FBQ0s7QUFFdkMsU0FBU0csYUFBYSxHQUFHOztJQUN2QixJQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQUU7SUFDMUIsSUFBTUssU0FBUyxHQUFHRCxNQUFNLENBQUNFLEtBQUssQ0FBQ0QsU0FBUztJQUN4QywrRUFBK0U7SUFDL0VFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUMsQ0FBQztJQUV2QkosZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RDLG1FQUFrQixFQUFFLENBQUM7UUFDckIsSUFBTVEsSUFBSSxHQUFHQyxjQUFjLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDL0NDLDRCQUE0QixDQUFDSCxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDUCxxQkFDRSw4REFBQ0ksS0FBRzs7MEJBQ0YsOERBQUNDLElBQUU7MEJBQUMsY0FBWTs7Ozs7b0JBQUs7MEJBQ3JCLDhEQUFDQyxHQUFDOztvQkFBQyxjQUFZO29CQUFDWCxTQUFTOzs7Ozs7b0JBQUs7Ozs7OztZQUMxQixDQUNOO0FBQ0osQ0FBQztHQWpCUUYsYUFBYTs7UUFDTEgsa0RBQVM7OztBQURqQkcsS0FBQUEsYUFBYTtBQW1CdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9nYW1lcy9bbWFjaGluZUlkXS5qcz83ZTY0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZ2V0QXBpIGZyb20gXCIuLi9hcGlzL0dldEFwaS5qc1wiO1xuXG5mdW5jdGlvbiBNYWNoaW5lRGV0YWlsKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbWFjaGluZUlkID0gcm91dGVyLnF1ZXJ5Lm1hY2hpbmVJZDtcbiAgLy8gdXNlIHRoZSBtYWNoaW5lSWQgdG8gZmV0Y2ggZGF0YSBmb3IgdGhlIHNwZWNpZmljIG1hY2hpbmUgYW5kIHJlbmRlciB0aGUgcGFnZVxuICBjb25zb2xlLmxvZyhtYWNoaW5lSWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXBpLmdldE1hY2hpbmVzKCk7XG4gICAgY29uc3QgaXRlbSA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJtYWNoaW5lc1wiKTtcbiAgICBnZXRNYWNoaW5lc0FuZENvbnZlcnRUb0FycmF5KGl0ZW0pO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5NYWNoaW5lIFBhZ2U8L2gxPlxuICAgICAgPHA+TWFjaGluZSBJRDoge21hY2hpbmVJZH08L3A+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hY2hpbmVEZXRhaWw7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiZ2V0QXBpIiwiTWFjaGluZURldGFpbCIsInJvdXRlciIsIm1hY2hpbmVJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldE1hY2hpbmVzIiwiaXRlbSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImdldE1hY2hpbmVzQW5kQ29udmVydFRvQXJyYXkiLCJkaXYiLCJoMSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/games/[machineId].js\n"));

/***/ })

});