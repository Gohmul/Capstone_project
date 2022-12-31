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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction MachineDetail() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var machineId = router.query.machineId - 1;\n    // use the machineId to fetch data for the specific machine and render the page\n    console.log(machineId);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getMachines().then(function(response) {\n            var _$machines = response.data;\n            if (_$machines) {\n                var matchingMachine = _$machines.filter(function(m) {\n                    return m.id === machineId;\n                })[0];\n                setMachine(matchingMachine);\n            }\n        }).catch(function(error) {\n            console.error(error);\n        });\n    }, []);\n    console.log(machines);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \" hi\"\n    }, void 0, false, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/[machineId].js\",\n        lineNumber: 28,\n        columnNumber: 10\n    }, this);\n}\n_s(MachineDetail, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = MachineDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MachineDetail);\nvar _c;\n$RefreshReg$(_c, \"MachineDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy9bbWFjaGluZUlkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDTjtBQUNNO0FBQ0Q7QUFDUTtBQUUvQyxTQUFTTSxhQUFhLEdBQUc7O0lBQ3ZCLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixJQUFNUSxTQUFTLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDRCxTQUFTLEdBQUcsQ0FBQztJQUM1QywrRUFBK0U7SUFDL0VFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxTQUFTLENBQUMsQ0FBQztJQUN2QlAsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RHLG1FQUNjLEVBQUUsQ0FDYlMsSUFBSSxDQUFDLFNBQUNDLFFBQVEsRUFBSztZQUNsQixJQUFNQyxVQUFRLEdBQUdELFFBQVEsQ0FBQ0UsSUFBSTtZQUM5QixJQUFJRCxVQUFRLEVBQUU7Z0JBQ1osSUFBTUUsZUFBZSxHQUFHRixVQUFRLENBQUNHLE1BQU0sQ0FBQyxTQUFDQyxDQUFDOzJCQUFLQSxDQUFDLENBQUNDLEVBQUUsS0FBS1osU0FBUztpQkFBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyRWEsVUFBVSxDQUFDSixlQUFlLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQ0RLLEtBQUssQ0FBQyxTQUFDQyxLQUFLLEVBQUs7WUFDaEJiLE9BQU8sQ0FBQ2EsS0FBSyxDQUFDQSxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQYixPQUFPLENBQUNDLEdBQUcsQ0FBQ0ksUUFBUSxDQUFDLENBQUM7SUFDdEIscUJBQU8sOERBQUNTLEtBQUc7a0JBQUMsS0FBRzs7Ozs7WUFBTSxDQUFDO0FBQ3hCLENBQUM7R0F0QlFsQixhQUFhOztRQUNMTixrREFBUzs7O0FBRGpCTSxLQUFBQSxhQUFhO0FBd0J0QiwrREFBZUEsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2dhbWVzL1ttYWNoaW5lSWRdLmpzPzdlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi4vYXBpcy9HZXRBcGkuanNcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuZnVuY3Rpb24gTWFjaGluZURldGFpbCgpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IG1hY2hpbmVJZCA9IHJvdXRlci5xdWVyeS5tYWNoaW5lSWQgLSAxO1xuICAvLyB1c2UgdGhlIG1hY2hpbmVJZCB0byBmZXRjaCBkYXRhIGZvciB0aGUgc3BlY2lmaWMgbWFjaGluZSBhbmQgcmVuZGVyIHRoZSBwYWdlXG4gIGNvbnNvbGUubG9nKG1hY2hpbmVJZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0QXBpXG4gICAgICAuZ2V0TWFjaGluZXMoKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hY2hpbmVzID0gcmVzcG9uc2UuZGF0YTtcbiAgICAgICAgaWYgKG1hY2hpbmVzKSB7XG4gICAgICAgICAgY29uc3QgbWF0Y2hpbmdNYWNoaW5lID0gbWFjaGluZXMuZmlsdGVyKChtKSA9PiBtLmlkID09PSBtYWNoaW5lSWQpWzBdO1xuICAgICAgICAgIHNldE1hY2hpbmUobWF0Y2hpbmdNYWNoaW5lKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKG1hY2hpbmVzKTtcbiAgcmV0dXJuIDxkaXY+IGhpPC9kaXY+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNYWNoaW5lRGV0YWlsO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJnZXRBcGkiLCJMb2FkaW5nIiwiTWFjaGluZURldGFpbCIsInJvdXRlciIsIm1hY2hpbmVJZCIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImdldE1hY2hpbmVzIiwidGhlbiIsInJlc3BvbnNlIiwibWFjaGluZXMiLCJkYXRhIiwibWF0Y2hpbmdNYWNoaW5lIiwiZmlsdGVyIiwibSIsImlkIiwic2V0TWFjaGluZSIsImNhdGNoIiwiZXJyb3IiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/games/[machineId].js\n"));

/***/ })

});