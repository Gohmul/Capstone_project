"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/comments",{

/***/ "./pages/comments.js":
/*!***************************!*\
  !*** ./pages/comments.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Refresh */ \"./components/Refresh.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Comments() {\n    var _this = this;\n    _s();\n    _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth), 2), user = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), comments = ref1[0], setComments = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        content: \"\"\n    }), content = ref2[0], setContent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        uid: user === null || user === void 0 ? void 0 : user.uid,\n        displayName: user === null || user === void 0 ? void 0 : user.displayName,\n        photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n        content: content\n    }), commenter = ref3[0], setCommenter = ref3[1];\n    var handleChange = function(e) {\n        setContent((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, content), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, e.target.id, e.target.value)));\n        setCommenter({\n            uid: user === null || user === void 0 ? void 0 : user.uid,\n            displayName: user === null || user === void 0 ? void 0 : user.displayName,\n            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n            content: content.content,\n            likes: \"0\"\n        });\n        console.log(commenter);\n        console.log(content);\n    };\n    var getCommentsAndConvertToArray = function(item) {\n        if (item) {\n            var backToObject = JSON.parse(item);\n            var intoAnArray = Object.values(backToObject);\n            setComments(intoAnArray);\n            console.log(intoAnArray);\n        }\n    };\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function(event) {\n            var data, response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        data = JSON.stringify(commenter);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://localhost:8000/\".concat(\"hryhryjrwnyfjgter\", \"/\"), {\n                                method: \"POST\",\n                                body: JSON.stringify(data),\n                                contentHeaders: \"application/JSON\"\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n                        // window.location.reload();\n                        console.log(response);\n                        console.log(response.data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var item = localStorage.getItem(\"comments\");\n        getCommentsAndConvertToArray(item);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 76,\n            columnNumber: 12\n        }, this);\n    }\n    if (comments && user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"create-comment-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"create-comment-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"content-section\",\n                            id: \"content\",\n                            type: \"text\",\n                            placeholder: \"Leave comment here\",\n                            autoComplete: \"off\",\n                            onChange: handleChange,\n                            value: content.content\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"post-button\",\n                            type: \"submit\",\n                            children: \"Post!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid\",\n                    children: comments.map(function(comment, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.displayName\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: comment.photoURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this);\n    }\n    if (comments) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid\",\n            children: comments.map(function(comment, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.displayName\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: comment.photoURL\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.content\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this);\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Refresh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n        lineNumber: 120,\n        columnNumber: 17\n    }, this);\n}\n_s(Comments, \"bqZyT2NxM7FqsjMHoaknQ3XWoOI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WixLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDWSxJQUFFO3NDQUFFRixPQUFPLENBQUMvQyxXQUFXOzs7OztpQ0FBTTtzQ0FDOUIsOERBQUNrRCxLQUFHOzRCQUFDQyxHQUFHLEVBQUVKLE9BQU8sQ0FBQzlDLFFBQVE7Ozs7O2lDQUFJO3NDQUM5Qiw4REFBQ2dELElBQUU7c0NBQUVGLE9BQU8sQ0FBQ2xELE9BQU87Ozs7O2lDQUFNOzttQkFISW1ELEtBQUs7Ozs7eUJBSS9CO2FBQ1AsQ0FBQzs7Ozs7Z0JBQ0UsQ0FDTjtJQUNKLE9BQU8scUJBQU8sOERBQUM1RCwyREFBTzs7OztZQUFHLENBQUM7QUFDNUIsQ0FBQztHQS9HdUJFLFFBQVE7O1FBRWhCTixrREFBUztRQUNDRixtRUFBWTs7O0FBSGRRLEtBQUFBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tbWVudHMuanM/NzNkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL3V0aWxzL2ZpcmViYXNlXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBnZXRBcGkgZnJvbSBcIi4vYXBpcy9HZXRBcGkuanNcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlZnJlc2ggZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVmcmVzaFwiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21tZW50cygpIHtcbiAgZ2V0QXBpLmdldENvbW1lbnRzKCk7XG4gIGNvbnN0IHJvdXRlID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyLCBsb2FkaW5nXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2NvbnRlbnQsIHNldENvbnRlbnRdID0gdXNlU3RhdGUoe1xuICAgIGNvbnRlbnQ6IFwiXCIsXG4gIH0pO1xuICBjb25zdCBbY29tbWVudGVyLCBzZXRDb21tZW50ZXJdID0gdXNlU3RhdGUoe1xuICAgIHVpZDogdXNlcj8udWlkLFxuICAgIGRpc3BsYXlOYW1lOiB1c2VyPy5kaXNwbGF5TmFtZSxcbiAgICBwaG90b1VSTDogdXNlcj8ucGhvdG9VUkwsXG4gICAgY29udGVudDogY29udGVudCxcbiAgfSk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICBzZXRDb250ZW50KHsgLi4uY29udGVudCwgW2UudGFyZ2V0LmlkXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgc2V0Q29tbWVudGVyKHtcbiAgICAgIHVpZDogdXNlcj8udWlkLFxuICAgICAgZGlzcGxheU5hbWU6IHVzZXI/LmRpc3BsYXlOYW1lLFxuICAgICAgcGhvdG9VUkw6IHVzZXI/LnBob3RvVVJMLFxuICAgICAgY29udGVudDogY29udGVudC5jb250ZW50LFxuICAgICAgbGlrZXM6IFwiMFwiLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRlcik7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgfTtcblxuICBjb25zdCBnZXRDb21tZW50c0FuZENvbnZlcnRUb0FycmF5ID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgYmFja1RvT2JqZWN0ID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgIGNvbnN0IGludG9BbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhiYWNrVG9PYmplY3QpO1xuICAgICAgc2V0Q29tbWVudHMoaW50b0FuQXJyYXkpO1xuICAgICAgY29uc29sZS5sb2coaW50b0FuQXJyYXkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnN0cmluZ2lmeShjb21tZW50ZXIpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwMDAvJHtwcm9jZXNzLmVudi5DT01NRU5UX0xJU1R9L2AsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxuICAgICAgICAgIGNvbnRlbnRIZWFkZXJzOiBcImFwcGxpY2F0aW9uL0pTT05cIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGdldEFwaS5nZXRDb21tZW50cygpO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbW1lbnRzXCIpO1xuICAgIGdldENvbW1lbnRzQW5kQ29udmVydFRvQXJyYXkoaXRlbSk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuICBpZiAoY29tbWVudHMgJiYgdXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jb21tZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJjcmVhdGUtY29tbWVudC1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb25cIlxuICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVhdmUgY29tbWVudCBoZXJlXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnQuY29udGVudH1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJwb3N0LWJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgIFBvc3QhXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxoMj57Y29tbWVudC5kaXNwbGF5TmFtZX08L2gyPlxuICAgICAgICAgICAgICA8aW1nIHNyYz17Y29tbWVudC5waG90b1VSTH0gLz5cbiAgICAgICAgICAgICAgPGgyPntjb21tZW50LmNvbnRlbnR9PC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKGNvbW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aDI+e2NvbW1lbnQuZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjb21tZW50LnBob3RvVVJMfSAvPlxuICAgICAgICAgICAgPGgyPntjb21tZW50LmNvbnRlbnR9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgcmV0dXJuIDxSZWZyZXNoIC8+O1xufVxuIl0sIm5hbWVzIjpbImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRBcGkiLCJSZWFjdCIsInVzZVN0YXRlIiwiUmVmcmVzaCIsIkxvYWRpbmciLCJDb21tZW50cyIsImdldENvbW1lbnRzIiwicm91dGUiLCJ1c2VyIiwibG9hZGluZyIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVpZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJjb21tZW50ZXIiLCJzZXRDb21tZW50ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImxpa2VzIiwiY29uc29sZSIsImxvZyIsImdldENvbW1lbnRzQW5kQ29udmVydFRvQXJyYXkiLCJpdGVtIiwiYmFja1RvT2JqZWN0IiwiSlNPTiIsInBhcnNlIiwiaW50b0FuQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJzdHJpbmdpZnkiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJDT01NRU5UX0xJU1QiLCJtZXRob2QiLCJib2R5IiwiY29udGVudEhlYWRlcnMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJhdXRvQ29tcGxldGUiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImgyIiwiaW1nIiwic3JjIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/comments.js\n"));

/***/ })

});