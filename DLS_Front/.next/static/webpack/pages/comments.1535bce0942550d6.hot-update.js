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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Refresh */ \"./components/Refresh.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Comments() {\n    var _this = this;\n    _s();\n    _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth), 2), user = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), comments = ref1[0], setComments = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        content: \"\"\n    }), content = ref2[0], setContent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        uid: user === null || user === void 0 ? void 0 : user.uid,\n        displayName: user === null || user === void 0 ? void 0 : user.displayName,\n        photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n        content: content\n    }), commenter = ref3[0], setCommenter = ref3[1];\n    var handleChange = function(e) {\n        setContent((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, content), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, e.target.id, e.target.value)));\n        setCommenter({\n            uid: user === null || user === void 0 ? void 0 : user.uid,\n            displayName: user === null || user === void 0 ? void 0 : user.displayName,\n            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n            content: content,\n            likes: \"0\"\n        });\n        console.log(commenter);\n        console.log(content);\n    };\n    var getCommentsAndConvertToArray = function(item) {\n        if (item) {\n            var backToObject = JSON.parse(item);\n            var intoAnArray = Object.values(backToObject);\n            setComments(intoAnArray);\n            console.log(intoAnArray);\n        }\n    };\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function(event) {\n            var response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        data = JSON.stringify(commenter);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://localhost:8000/\".concat(\"hryhryjrwnyfjgter\", \"/\"), {\n                                method: \"POST\",\n                                body: data\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n                        // window.location.reload();\n                        console.log(response);\n                        console.log(response.data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var item = localStorage.getItem(\"comments\");\n        getCommentsAndConvertToArray(item);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 76,\n            columnNumber: 12\n        }, this);\n    }\n    if (comments && user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"create-comment-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"create-comment-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"content-section\",\n                            id: \"content\",\n                            type: \"text\",\n                            placeholder: \"Leave comment here\",\n                            autoComplete: \"off\",\n                            onChange: handleChange,\n                            value: content[\"\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"post-button\",\n                            type: \"submit\",\n                            children: \"Post!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid\",\n                    children: comments.map(function(comment, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.displayName\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: comment.photoURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this);\n    }\n    if (comments) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid\",\n            children: comments.map(function(comment, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.displayName\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: comment.photoURL\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 114,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.content\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 115,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 112,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, this);\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Refresh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n        lineNumber: 120,\n        columnNumber: 17\n    }, this);\n}\n_s(Comments, \"bqZyT2NxM7FqsjMHoaknQ3XWoOI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2lDQUFNO3NDQUM5Qiw4REFBQ2lELEtBQUc7NEJBQUNDLEdBQUcsRUFBRUosT0FBTyxDQUFDN0MsUUFBUTs7Ozs7aUNBQUk7c0NBQzlCLDhEQUFDK0MsSUFBRTtzQ0FBRUYsT0FBTyxDQUFDakQsT0FBTzs7Ozs7aUNBQU07O21CQUhJa0QsS0FBSzs7Ozt5QkFJL0I7YUFDUCxDQUFDOzs7OztnQkFDRSxDQUNOO0lBQ0osT0FBTyxxQkFBTyw4REFBQzNELDJEQUFPOzs7O1lBQUcsQ0FBQztBQUM1QixDQUFDO0dBL0d1QkUsUUFBUTs7UUFFaEJOLGtEQUFTO1FBQ0NGLG1FQUFZOzs7QUFIZFEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21tZW50cy5qcz83M2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdXRpbHMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi9hcGlzL0dldEFwaS5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVmcmVzaCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWZyZXNoXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKCkge1xuICBnZXRBcGkuZ2V0Q29tbWVudHMoKTtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udGVudDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtjb21tZW50ZXIsIHNldENvbW1lbnRlcl0gPSB1c2VTdGF0ZSh7XG4gICAgdWlkOiB1c2VyPy51aWQsXG4gICAgZGlzcGxheU5hbWU6IHVzZXI/LmRpc3BsYXlOYW1lLFxuICAgIHBob3RvVVJMOiB1c2VyPy5waG90b1VSTCxcbiAgICBjb250ZW50OiBjb250ZW50LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldENvbnRlbnQoeyAuLi5jb250ZW50LCBbZS50YXJnZXQuaWRdOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICBzZXRDb21tZW50ZXIoe1xuICAgICAgdWlkOiB1c2VyPy51aWQsXG4gICAgICBkaXNwbGF5TmFtZTogdXNlcj8uZGlzcGxheU5hbWUsXG4gICAgICBwaG90b1VSTDogdXNlcj8ucGhvdG9VUkwsXG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgbGlrZXM6IFwiMFwiLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGNvbW1lbnRlcik7XG5cbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcbiAgfTtcblxuICBjb25zdCBnZXRDb21tZW50c0FuZENvbnZlcnRUb0FycmF5ID0gKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgY29uc3QgYmFja1RvT2JqZWN0ID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgIGNvbnN0IGludG9BbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhiYWNrVG9PYmplY3QpO1xuICAgICAgc2V0Q29tbWVudHMoaW50b0FuQXJyYXkpO1xuICAgICAgY29uc29sZS5sb2coaW50b0FuQXJyYXkpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRlcik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8ke3Byb2Nlc3MuZW52LkNPTU1FTlRfTElTVH0vYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGdldEFwaS5nZXRDb21tZW50cygpO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbW1lbnRzXCIpO1xuICAgIGdldENvbW1lbnRzQW5kQ29udmVydFRvQXJyYXkoaXRlbSk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuICBpZiAoY29tbWVudHMgJiYgdXNlcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZS1jb21tZW50LWNvbnRhaW5lclwiPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJjcmVhdGUtY29tbWVudC1mb3JtXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50LXNlY3Rpb25cIlxuICAgICAgICAgICAgaWQ9XCJjb250ZW50XCJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGVhdmUgY29tbWVudCBoZXJlXCJcbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnRbXCJcIl19XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zdC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBQb3N0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8aDI+e2NvbW1lbnQuZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbW1lbnQucGhvdG9VUkx9IC8+XG4gICAgICAgICAgICAgIDxoMj57Y29tbWVudC5jb250ZW50fTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIGlmIChjb21tZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgPGgyPntjb21tZW50LmRpc3BsYXlOYW1lfTwvaDI+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y29tbWVudC5waG90b1VSTH0gLz5cbiAgICAgICAgICAgIDxoMj57Y29tbWVudC5jb250ZW50fTwvaDI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSBlbHNlIHJldHVybiA8UmVmcmVzaCAvPjtcbn1cbiJdLCJuYW1lcyI6WyJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0QXBpIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlZnJlc2giLCJMb2FkaW5nIiwiQ29tbWVudHMiLCJnZXRDb21tZW50cyIsInJvdXRlIiwidXNlciIsImxvYWRpbmciLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiY29udGVudCIsInNldENvbnRlbnQiLCJ1aWQiLCJkaXNwbGF5TmFtZSIsInBob3RvVVJMIiwiY29tbWVudGVyIiwic2V0Q29tbWVudGVyIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsImlkIiwidmFsdWUiLCJsaWtlcyIsImNvbnNvbGUiLCJsb2ciLCJnZXRDb21tZW50c0FuZENvbnZlcnRUb0FycmF5IiwiaXRlbSIsImJhY2tUb09iamVjdCIsIkpTT04iLCJwYXJzZSIsImludG9BbkFycmF5IiwiT2JqZWN0IiwidmFsdWVzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJyZXNwb25zZSIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQ09NTUVOVF9MSVNUIiwibWV0aG9kIiwiYm9keSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwibWFwIiwiY29tbWVudCIsImluZGV4IiwiaDIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comments.js\n"));

/***/ })

});