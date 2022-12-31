"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/games",{

/***/ "./pages/games/index.js":
/*!******************************!*\
  !*** ./pages/games/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Games; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/Refresh */ \"./components/Refresh.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Loading */ \"./components/Loading.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Games() {\n    var _this = this;\n    var navigateToMachine = function navigateToMachine(machineId) {\n        route.push(\"/games/\".concat(machineId));\n    };\n    _s();\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth), 2), user = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), machines = ref1[0], setMachines = ref1[1];\n    var getMachinesAndConvertToArray = function(item) {\n        if (item) {\n            var backToObject = JSON.parse(item);\n            var intoAnArray = Object.values(backToObject);\n            setMachines(intoAnArray);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getMachines();\n        var item = sessionStorage.getItem(\"machines\");\n        getMachinesAndConvertToArray(item);\n    }, []);\n    console.log(machines);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n            lineNumber: 35,\n            columnNumber: 12\n        }, this);\n    }\n    if (machines) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"game-grid\",\n            children: machines.map(function(machine, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"game-item\",\n                    onClick: function() {\n                        return navigateToMachine(machine.id);\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: machine.model\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n                            lineNumber: 45,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"game-image\",\n                            src: machine.mach_img\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"$\",\n                                machine.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n                            lineNumber: 47,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games/index.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this);\n    } else {\n        return window.location.reload();\n    }\n}\n_s(Games, \"Vsg282hUV+7Vk1uQs/tkHaBA1r0=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = Games;\nvar _c;\n$RefreshReg$(_c, \"Games\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE0QztBQUNhO0FBQ3ZCO0FBQ007QUFDRDtBQUNDO0FBQ087QUFDQTtBQUVoQyxTQUFTUyxLQUFLLEdBQUc7O1FBYXJCQyxpQkFBaUIsR0FBMUIsU0FBU0EsaUJBQWlCLENBQUNDLFNBQVMsRUFBRTtRQUNwQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUMsU0FBUSxDQUFZLE9BQVZGLFNBQVMsQ0FBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7SUFkRCxJQUFNQyxLQUFLLEdBQUdULHNEQUFTLEVBQUU7SUFDekIsSUFBd0JGLEdBQWtCLG9GQUFsQkEsdUVBQVksQ0FBQ0QsaURBQUksQ0FBQyxNQUFuQ2MsSUFBSSxHQUFhYixHQUFrQixHQUEvQixFQUFFYyxPQUFPLEdBQUlkLEdBQWtCLEdBQXRCO0lBQ3BCLElBQWdDSyxJQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQXZDVSxRQUFRLEdBQWlCVixJQUFjLEdBQS9CLEVBQUVXLFdBQVcsR0FBSVgsSUFBYyxHQUFsQjtJQUU1QixJQUFNWSw0QkFBNEIsR0FBRyxTQUFDQyxJQUFJLEVBQUs7UUFDN0MsSUFBSUEsSUFBSSxFQUFFO1lBQ1IsSUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0gsSUFBSSxDQUFDO1lBQ3JDLElBQU1JLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNMLFlBQVksQ0FBQztZQUMvQ0gsV0FBVyxDQUFDTSxXQUFXLENBQUMsQ0FBQztRQUMzQixDQUFDO0lBQ0gsQ0FBQztJQU1EckIsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RFLG1FQUFrQixFQUFFLENBQUM7UUFDckIsSUFBTWUsSUFBSSxHQUFHUSxjQUFjLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDL0NWLDRCQUE0QixDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUNyQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUFUsT0FBTyxDQUFDQyxHQUFHLENBQUNkLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLElBQUlELE9BQU8sRUFBRTtRQUNYLHFCQUFPLDhEQUFDUCwyREFBTzs7OztnQkFBRyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJUSxRQUFRLEVBQUU7UUFDWixxQkFDRSw4REFBQ2UsS0FBRztZQUFDQyxTQUFTLEVBQUMsV0FBVztzQkFDdkJoQixRQUFRLENBQUNpQixHQUFHLENBQUMsU0FBQ0MsT0FBTyxFQUFFQyxLQUFLO3FDQUMzQiw4REFBQ0osS0FBRztvQkFDRkMsU0FBUyxFQUFDLFdBQVc7b0JBQ3JCSSxPQUFPLEVBQUU7K0JBQU0xQixpQkFBaUIsQ0FBQ3dCLE9BQU8sQ0FBQ0csRUFBRSxDQUFDO3FCQUFBOztzQ0FFNUMsOERBQUNDLElBQUU7c0NBQUVKLE9BQU8sQ0FBQ0ssS0FBSzs7Ozs7aUNBQU07c0NBQ3hCLDhEQUFDQyxLQUFHOzRCQUFDUixTQUFTLEVBQUMsWUFBWTs0QkFBQ1MsR0FBRyxFQUFFUCxPQUFPLENBQUNRLFFBQVE7Ozs7O2lDQUFJO3NDQUNyRCw4REFBQ0osSUFBRTs7Z0NBQUMsR0FBQztnQ0FBQ0osT0FBTyxDQUFDUyxLQUFLOzs7Ozs7aUNBQU07Ozs7Ozt5QkFDckI7YUFDUCxDQUFDOzs7OztnQkFDRSxDQUNOO0lBQ0osT0FBTztRQUNMLE9BQU9DLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxNQUFNLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0FBQ0gsQ0FBQztHQTdDdUJyQyxLQUFLOztRQUNiTixrREFBUztRQUNDRixtRUFBWTs7O0FBRmRRLEtBQUFBLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZ2FtZXMvaW5kZXguanM/MGE1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBnZXRBcGkgZnJvbSBcIi4uL2FwaXMvR2V0QXBpLmpzXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWZyZXNoIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1JlZnJlc2hcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZXMoKSB7XG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgY29uc3QgW21hY2hpbmVzLCBzZXRNYWNoaW5lc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBnZXRNYWNoaW5lc0FuZENvbnZlcnRUb0FycmF5ID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgYmFja1RvT2JqZWN0ID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgIGNvbnN0IGludG9BbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhiYWNrVG9PYmplY3QpO1xuICAgICAgc2V0TWFjaGluZXMoaW50b0FuQXJyYXkpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBuYXZpZ2F0ZVRvTWFjaGluZShtYWNoaW5lSWQpIHtcbiAgICByb3V0ZS5wdXNoKGAvZ2FtZXMvJHttYWNoaW5lSWR9YCk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEFwaS5nZXRNYWNoaW5lcygpO1xuICAgIGNvbnN0IGl0ZW0gPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibWFjaGluZXNcIik7XG4gICAgZ2V0TWFjaGluZXNBbmRDb252ZXJ0VG9BcnJheShpdGVtKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKG1hY2hpbmVzKTtcbiAgaWYgKGxvYWRpbmcpIHtcbiAgICByZXR1cm4gPExvYWRpbmcgLz47XG4gIH1cbiAgaWYgKG1hY2hpbmVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZS1ncmlkXCI+XG4gICAgICAgIHttYWNoaW5lcy5tYXAoKG1hY2hpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ2FtZS1pdGVtXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG9NYWNoaW5lKG1hY2hpbmUuaWQpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxoMj57bWFjaGluZS5tb2RlbH08L2gyPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJnYW1lLWltYWdlXCIgc3JjPXttYWNoaW5lLm1hY2hfaW1nfSAvPlxuICAgICAgICAgICAgPGgyPiR7bWFjaGluZS5wcmljZX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRBcGkiLCJSZWFjdCIsInVzZVN0YXRlIiwiUmVmcmVzaCIsIkxvYWRpbmciLCJHYW1lcyIsIm5hdmlnYXRlVG9NYWNoaW5lIiwibWFjaGluZUlkIiwicm91dGUiLCJwdXNoIiwidXNlciIsImxvYWRpbmciLCJtYWNoaW5lcyIsInNldE1hY2hpbmVzIiwiZ2V0TWFjaGluZXNBbmRDb252ZXJ0VG9BcnJheSIsIml0ZW0iLCJiYWNrVG9PYmplY3QiLCJKU09OIiwicGFyc2UiLCJpbnRvQW5BcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImdldE1hY2hpbmVzIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm1hY2hpbmUiLCJpbmRleCIsIm9uQ2xpY2siLCJpZCIsImgyIiwibW9kZWwiLCJpbWciLCJzcmMiLCJtYWNoX2ltZyIsInByaWNlIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/games/index.js\n"));

/***/ })

});