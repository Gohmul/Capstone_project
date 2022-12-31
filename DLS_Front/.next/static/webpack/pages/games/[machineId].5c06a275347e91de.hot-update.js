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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction MachineDetail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), machine = ref[0], setMachine = ref[1];\n    var machineId = router.query.machineId;\n    var ref1 = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_3__.auth), 2), user = ref1[0], loading = ref1[1];\n    _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMachineDetails(machineId);\n    // use the machineId to fetch data for the specific machine and render the page\n    console.log(machineId);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var items = sessionStorage.getItem(\"machine\");\n        setMachine(items);\n    }, []);\n    console.log(machine);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n            lineNumber: 26,\n            columnNumber: 12\n        }, this);\n    }\n    if (machine) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Xd\"\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n            lineNumber: 31,\n            columnNumber: 7\n        }, this);\n    } else {}\n}\n_s(MachineDetail, \"r8lQkpYXDeBWRizxLo/ORF+f6KE=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_4__.useAuthState\n    ];\n});\n_c = MachineDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MachineDetail);\nvar _c;\n$RefreshReg$(_c, \"MachineDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy9bbWFjaGluZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQXdDO0FBQ047QUFDVTtBQUNhO0FBQ2pCO0FBQ0Q7QUFDUTtBQUUvQyxTQUFTUSxhQUFhLEdBQUc7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixJQUE4QkssR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFyQ0ssT0FBTyxHQUFnQkwsR0FBYyxHQUE5QixFQUFFTSxVQUFVLEdBQUlOLEdBQWMsR0FBbEI7SUFDMUIsSUFBTU8sU0FBUyxHQUFHSCxNQUFNLENBQUNJLEtBQUssQ0FBQ0QsU0FBUztJQUN4QyxJQUF3QlQsSUFBa0Isb0ZBQWxCQSx1RUFBWSxDQUFDRCxpREFBSSxDQUFDLE1BQW5DWSxJQUFJLEdBQWFYLElBQWtCLEdBQS9CLEVBQUVZLE9BQU8sR0FBSVosSUFBa0IsR0FBdEI7SUFFcEJHLHlFQUF3QixDQUFDTSxTQUFTLENBQUMsQ0FBQztJQUVwQywrRUFBK0U7SUFDL0VLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixTQUFTLENBQUMsQ0FBQztJQUN2QlgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTWtCLEtBQUssR0FBR0MsY0FBYyxDQUFDQyxPQUFPLENBQUMsU0FBUyxDQUFDO1FBQy9DVixVQUFVLENBQUNRLEtBQUssQ0FBQyxDQUFDO0lBQ3BCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNQRixPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsT0FBTyxDQUFDLENBQUM7SUFFckIsSUFBSUssT0FBTyxFQUFFO1FBQ1gscUJBQU8sOERBQUNSLDJEQUFPOzs7O2dCQUFHLENBQUM7SUFDckIsQ0FBQztJQUVELElBQUlHLE9BQU8sRUFBRTtRQUNYLHFCQUNFLDhEQUFDWSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxNQUFNO3NCQUNuQiw0RUFBQ0MsSUFBRTswQkFBQyxJQUFFOzs7OztvQkFBSzs7Ozs7Z0JBQ1AsQ0FDTjtJQUNKLE9BQU8sQ0FDUCxDQUFDO0FBQ0gsQ0FBQztHQTVCUWhCLGFBQWE7O1FBQ0xSLGtEQUFTO1FBR0FHLG1FQUFZOzs7QUFKN0JLLEtBQUFBLGFBQWE7QUE2QnRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZXMvW21hY2hpbmVJZF0uanM/N2U2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi91dGlscy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSBcInJlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGhcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi4vYXBpcy9HZXRBcGkuanNcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuZnVuY3Rpb24gTWFjaGluZURldGFpbCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFttYWNoaW5lLCBzZXRNYWNoaW5lXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBtYWNoaW5lSWQgPSByb3V0ZXIucXVlcnkubWFjaGluZUlkO1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG5cbiAgZ2V0QXBpLmdldE1hY2hpbmVEZXRhaWxzKG1hY2hpbmVJZCk7XG5cbiAgLy8gdXNlIHRoZSBtYWNoaW5lSWQgdG8gZmV0Y2ggZGF0YSBmb3IgdGhlIHNwZWNpZmljIG1hY2hpbmUgYW5kIHJlbmRlciB0aGUgcGFnZVxuICBjb25zb2xlLmxvZyhtYWNoaW5lSWQpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcIm1hY2hpbmVcIik7XG4gICAgc2V0TWFjaGluZShpdGVtcyk7XG4gIH0sIFtdKTtcbiAgY29uc29sZS5sb2cobWFjaGluZSk7XG5cbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cblxuICBpZiAobWFjaGluZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgPGgyPlhkPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1hY2hpbmVEZXRhaWw7XG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiYXV0aCIsInVzZUF1dGhTdGF0ZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRBcGkiLCJMb2FkaW5nIiwiTWFjaGluZURldGFpbCIsInJvdXRlciIsIm1hY2hpbmUiLCJzZXRNYWNoaW5lIiwibWFjaGluZUlkIiwicXVlcnkiLCJ1c2VyIiwibG9hZGluZyIsImdldE1hY2hpbmVEZXRhaWxzIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/games/[machineId].js\n"));

/***/ })

});