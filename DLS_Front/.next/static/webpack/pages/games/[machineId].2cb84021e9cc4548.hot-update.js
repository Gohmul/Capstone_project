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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MachineDetail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var machineId = router.query.machineId;\n    // use the machineId to fetch data for the specific machine and render the page\n    console.log(machineId);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), machine = ref[0], setMachine = ref[1];\n    var getMachinesAndFilterById = function(items) {\n        if (items) {\n            var itemsArray = JSON.parse(items);\n            var machineData = itemsArray.filter(function(item) {\n                return item.id === machineId;\n            })[0];\n            setMachine(machineData);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getMachines();\n        var items = sessionStorage.getItem(\"machines\");\n        getMachinesAndFilterById(items);\n    }, []);\n    console.log(machine);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Machine Page\"\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    \"Machine ID: \",\n                    machineId\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(MachineDetail, \"5qLrAd8REkaP9iAT7Ihep2Hr7Ws=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MachineDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MachineDetail);\nvar _c;\n$RefreshReg$(_c, \"MachineDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy9bbWFjaGluZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUF3QztBQUNOO0FBQ007QUFFRDtBQUV2QyxTQUFTSyxhQUFhLEdBQUc7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR04sc0RBQVMsRUFBRTtJQUMxQixJQUFNTyxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDRCxTQUFTO0lBQ3hDLCtFQUErRTtJQUMvRUUsT0FBTyxDQUFDQyxHQUFHLENBQUNILFNBQVMsQ0FBQyxDQUFDO0lBQ3ZCLElBQThCSixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXJDUSxPQUFPLEdBQWdCUixHQUFjLEdBQTlCLEVBQUVTLFVBQVUsR0FBSVQsR0FBYyxHQUFsQjtJQUUxQixJQUFNVSx3QkFBd0IsR0FBRyxTQUFDQyxLQUFLLEVBQUs7UUFDMUMsSUFBSUEsS0FBSyxFQUFFO1lBQ1QsSUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsS0FBSyxDQUFDO1lBQ3BDLElBQU1JLFdBQVcsR0FBR0gsVUFBVSxDQUFDSSxNQUFNLENBQUMsU0FBQ0MsSUFBSTt1QkFBS0EsSUFBSSxDQUFDQyxFQUFFLEtBQUtkLFNBQVM7YUFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pFSyxVQUFVLENBQUNNLFdBQVcsQ0FBQyxDQUFDO1FBQzFCLENBQUM7SUFDSCxDQUFDO0lBQ0RqQixnREFBUyxDQUFDLFdBQU07UUFDZEcsbUVBQWtCLEVBQUUsQ0FBQztRQUNyQixJQUFNVSxLQUFLLEdBQUdTLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNoRFgsd0JBQXdCLENBQUNDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUM7SUFFckIscUJBQ0UsOERBQUNjLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLGNBQVk7Ozs7O29CQUFLOzBCQUNyQiw4REFBQ0MsR0FBQzs7b0JBQUMsY0FBWTtvQkFBQ3BCLFNBQVM7Ozs7OztvQkFBSzs7Ozs7O1lBQzFCLENBQ047QUFDSixDQUFDO0dBM0JRRixhQUFhOztRQUNMTCxrREFBUzs7O0FBRGpCSyxLQUFBQSxhQUFhO0FBNkJ0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVzL1ttYWNoaW5lSWRdLmpzPzdlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgZ2V0QXBpIGZyb20gXCIuLi9hcGlzL0dldEFwaS5qc1wiO1xuXG5mdW5jdGlvbiBNYWNoaW5lRGV0YWlsKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgbWFjaGluZUlkID0gcm91dGVyLnF1ZXJ5Lm1hY2hpbmVJZDtcbiAgLy8gdXNlIHRoZSBtYWNoaW5lSWQgdG8gZmV0Y2ggZGF0YSBmb3IgdGhlIHNwZWNpZmljIG1hY2hpbmUgYW5kIHJlbmRlciB0aGUgcGFnZVxuICBjb25zb2xlLmxvZyhtYWNoaW5lSWQpO1xuICBjb25zdCBbbWFjaGluZSwgc2V0TWFjaGluZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRNYWNoaW5lc0FuZEZpbHRlckJ5SWQgPSAoaXRlbXMpID0+IHtcbiAgICBpZiAoaXRlbXMpIHtcbiAgICAgIGNvbnN0IGl0ZW1zQXJyYXkgPSBKU09OLnBhcnNlKGl0ZW1zKTtcbiAgICAgIGNvbnN0IG1hY2hpbmVEYXRhID0gaXRlbXNBcnJheS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IG1hY2hpbmVJZClbMF07XG4gICAgICBzZXRNYWNoaW5lKG1hY2hpbmVEYXRhKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXBpLmdldE1hY2hpbmVzKCk7XG4gICAgY29uc3QgaXRlbXMgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibWFjaGluZXNcIik7XG4gICAgZ2V0TWFjaGluZXNBbmRGaWx0ZXJCeUlkKGl0ZW1zKTtcbiAgfSwgW10pO1xuICBjb25zb2xlLmxvZyhtYWNoaW5lKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+TWFjaGluZSBQYWdlPC9oMT5cbiAgICAgIDxwPk1hY2hpbmUgSUQ6IHttYWNoaW5lSWR9PC9wPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lRGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRBcGkiLCJNYWNoaW5lRGV0YWlsIiwicm91dGVyIiwibWFjaGluZUlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwibWFjaGluZSIsInNldE1hY2hpbmUiLCJnZXRNYWNoaW5lc0FuZEZpbHRlckJ5SWQiLCJpdGVtcyIsIml0ZW1zQXJyYXkiLCJKU09OIiwicGFyc2UiLCJtYWNoaW5lRGF0YSIsImZpbHRlciIsIml0ZW0iLCJpZCIsImdldE1hY2hpbmVzIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/games/[machineId].js\n"));

/***/ })

});