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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Comments; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"./node_modules/react-firebase-hooks/auth/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apis/GetApi.js */ \"./pages/apis/GetApi.js\");\n/* harmony import */ var _components_Refresh__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Refresh */ \"./components/Refresh.js\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Comments() {\n    var _this = this;\n    _s();\n    _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n    var route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])((0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth), 2), user = ref[0], loading = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), comments = ref1[0], setComments = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        content: \"\"\n    }), content = ref2[0], setContent = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        {\n            uid: user === null || user === void 0 ? void 0 : user.uid,\n            displayName: user === null || user === void 0 ? void 0 : user.displayName,\n            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n            content: content\n        }, \n    ]), commenter = ref3[0], setCommenter = ref3[1];\n    var handleChange = function(e) {\n        setContent((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_9__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])({}, content), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_11__[\"default\"])({}, e.target.id, e.target.value)));\n        setCommenter({\n            uid: user === null || user === void 0 ? void 0 : user.uid,\n            displayName: user === null || user === void 0 ? void 0 : user.displayName,\n            photoURL: user === null || user === void 0 ? void 0 : user.photoURL,\n            content: content.content,\n            likes: \"0\"\n        });\n        console.log(commenter);\n        console.log(JSON.stringify(commenter));\n    };\n    var getCommentsAndConvertToArray = function(item) {\n        if (item) {\n            var backToObject = JSON.parse(item);\n            var intoAnArray = Object.values(backToObject);\n            setComments(intoAnArray);\n            console.log(intoAnArray);\n        }\n    };\n    var handleSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_12__[\"default\"])(function(event) {\n            var data, response, error;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_13__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        event.preventDefault();\n                        data = JSON.stringify(commenter);\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            fetch(\"http://localhost:8000/\".concat(\"hryhryjrwnyfjgter\", \"/\"), {\n                                method: \"POST\",\n                                mode: \"no-cors\",\n                                credentials: \"omit\",\n                                body: JSON.stringify(data),\n                                headers: {\n                                    \"Content-Type\": \"application/json\"\n                                }\n                            })\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].getComments();\n                        // window.location.reload();\n                        console.log(response);\n                        console.log(response.data);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function handleSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        var item = localStorage.getItem(\"comments\");\n        getCommentsAndConvertToArray(item);\n    }, []);\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 82,\n            columnNumber: 12\n        }, this);\n    }\n    if (user === null || user === void 0 ? void 0 : user.uid) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"create-comment-container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    className: \"create-comment-form\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            className: \"content-section\",\n                            id: \"content\",\n                            type: \"text\",\n                            placeholder: \"Leave comment here\",\n                            autoComplete: \"off\",\n                            onChange: handleChange,\n                            value: content.content\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"post-button\",\n                            type: \"submit\",\n                            children: \"Post!\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 88,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid\",\n                    children: comments.map(function(comment, index) {\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid-item\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.displayName\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: comment.photoURL\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    children: comment.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"edit\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    children: \"delete\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 105,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 87,\n            columnNumber: 7\n        }, this);\n    }\n    if (comments) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid\",\n            children: comments.map(function(comment, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.displayName\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: comment.photoURL\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: comment.content\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                            lineNumber: 124,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n                    lineNumber: 121,\n                    columnNumber: 11\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, this);\n    } else return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Refresh__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/comments.js\",\n        lineNumber: 129,\n        columnNumber: 17\n    }, this);\n}\n_s(Comments, \"1GliIDZULhxNlVuygzwflydKDio=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState\n    ];\n});\n_c = Comments;\nvar _c;\n$RefreshReg$(_c, \"Comments\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFFBQU07OENBQUMsUUFBTTs7Ozs7eUNBQVM7OzJCQUxPRyxLQUFLOzs7O2lDQU0vQixDQUFDO29CQUNULENBQUMsQ0FBQzs7Ozs7d0JBQ0U7Ozs7OztnQkFDRixDQUNOO0lBQ0osQ0FBQztJQUNELElBQUl2RCxRQUFRLEVBQUU7UUFDWixxQkFDRSw4REFBQzJDLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLE1BQU07c0JBQ2xCNUMsUUFBUSxDQUFDcUQsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSztxQ0FDM0IsOERBQUNaLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOztzQ0FDeEIsOERBQUNZLElBQUU7c0NBQUVGLE9BQU8sQ0FBQ2pELFdBQVc7Ozs7O2lDQUFNO3NDQUM5Qiw4REFBQ29ELEtBQUc7NEJBQUNDLEdBQUcsRUFBRUosT0FBTyxDQUFDaEQsUUFBUTs7Ozs7aUNBQUk7c0NBQzlCLDhEQUFDa0QsSUFBRTtzQ0FBRUYsT0FBTyxDQUFDcEQsT0FBTzs7Ozs7aUNBQU07O21CQUhJcUQsS0FBSzs7Ozt5QkFJL0I7YUFDUCxDQUFDOzs7OztnQkFDRSxDQUNOO0lBQ0osT0FBTyxxQkFBTyw4REFBQzlELDJEQUFPOzs7O1lBQUcsQ0FBQztBQUM1QixDQUFDO0dBeEh1QkUsUUFBUTs7UUFFaEJOLGtEQUFTO1FBQ0NGLG1FQUFZOzs7QUFIZFEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21tZW50cy5qcz83M2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdXRpbHMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi9hcGlzL0dldEFwaS5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVmcmVzaCBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWZyZXNoXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy9Mb2FkaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbW1lbnRzKCkge1xuICBnZXRBcGkuZ2V0Q29tbWVudHMoKTtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSh7XG4gICAgY29udGVudDogXCJcIixcbiAgfSk7XG4gIGNvbnN0IFtjb21tZW50ZXIsIHNldENvbW1lbnRlcl0gPSB1c2VTdGF0ZShbXG4gICAge1xuICAgICAgdWlkOiB1c2VyPy51aWQsXG4gICAgICBkaXNwbGF5TmFtZTogdXNlcj8uZGlzcGxheU5hbWUsXG4gICAgICBwaG90b1VSTDogdXNlcj8ucGhvdG9VUkwsXG4gICAgICBjb250ZW50OiBjb250ZW50LFxuICAgIH0sXG4gIF0pO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0Q29udGVudCh7IC4uLmNvbnRlbnQsIFtlLnRhcmdldC5pZF06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgIHNldENvbW1lbnRlcih7XG4gICAgICB1aWQ6IHVzZXI/LnVpZCxcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyPy5kaXNwbGF5TmFtZSxcbiAgICAgIHBob3RvVVJMOiB1c2VyPy5waG90b1VSTCxcbiAgICAgIGNvbnRlbnQ6IGNvbnRlbnQuY29udGVudCxcbiAgICAgIGxpa2VzOiBcIjBcIixcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhjb21tZW50ZXIpO1xuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGNvbW1lbnRlcikpO1xuICB9O1xuXG4gIGNvbnN0IGdldENvbW1lbnRzQW5kQ29udmVydFRvQXJyYXkgPSAoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtKSB7XG4gICAgICBjb25zdCBiYWNrVG9PYmplY3QgPSBKU09OLnBhcnNlKGl0ZW0pO1xuICAgICAgY29uc3QgaW50b0FuQXJyYXkgPSBPYmplY3QudmFsdWVzKGJhY2tUb09iamVjdCk7XG4gICAgICBzZXRDb21tZW50cyhpbnRvQW5BcnJheSk7XG4gICAgICBjb25zb2xlLmxvZyhpbnRvQW5BcnJheSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGNvbW1lbnRlcik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8ke3Byb2Nlc3MuZW52LkNPTU1FTlRfTElTVH0vYCxcbiAgICAgICAge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsIC8vICpHRVQsIFBPU1QsIFBVVCwgREVMRVRFLCBldGMuXG4gICAgICAgICAgbW9kZTogXCJuby1jb3JzXCIsIC8vIG5vLWNvcnMsICpjb3JzLCBzYW1lLW9yaWdpblxuICAgICAgICAgIGNyZWRlbnRpYWxzOiBcIm9taXRcIiwgLy8gaW5jbHVkZSwgKnNhbWUtb3JpZ2luLCBvbWl0XG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAvLyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAgICAgfSxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGdldEFwaS5nZXRDb21tZW50cygpO1xuICAgICAgLy8gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImNvbW1lbnRzXCIpO1xuICAgIGdldENvbW1lbnRzQW5kQ29udmVydFRvQXJyYXkoaXRlbSk7XG4gIH0sIFtdKTtcblxuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuXG4gIGlmICh1c2VyPy51aWQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcmVhdGUtY29tbWVudC1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPVwiY3JlYXRlLWNvbW1lbnQtZm9ybVwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudC1zZWN0aW9uXCJcbiAgICAgICAgICAgIGlkPVwiY29udGVudFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxlYXZlIGNvbW1lbnQgaGVyZVwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIHZhbHVlPXtjb250ZW50LmNvbnRlbnR9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicG9zdC1idXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBQb3N0IVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgIHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQtaXRlbVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8aDI+e2NvbW1lbnQuZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9e2NvbW1lbnQucGhvdG9VUkx9IC8+XG4gICAgICAgICAgICAgIDxoMj57Y29tbWVudC5jb250ZW50fTwvaDI+XG4gICAgICAgICAgICAgIDxidXR0b24+ZWRpdDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uPmRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgaWYgKGNvbW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC1pdGVtXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICA8aDI+e2NvbW1lbnQuZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtjb21tZW50LnBob3RvVVJMfSAvPlxuICAgICAgICAgICAgPGgyPntjb21tZW50LmNvbnRlbnR9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9IGVsc2UgcmV0dXJuIDxSZWZyZXNoIC8+O1xufVxuIl0sIm5hbWVzIjpbImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJnZXRBcGkiLCJSZWFjdCIsInVzZVN0YXRlIiwiUmVmcmVzaCIsIkxvYWRpbmciLCJDb21tZW50cyIsImdldENvbW1lbnRzIiwicm91dGUiLCJ1c2VyIiwibG9hZGluZyIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInVpZCIsImRpc3BsYXlOYW1lIiwicGhvdG9VUkwiLCJjb21tZW50ZXIiLCJzZXRDb21tZW50ZXIiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaWQiLCJ2YWx1ZSIsImxpa2VzIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRDb21tZW50c0FuZENvbnZlcnRUb0FycmF5IiwiaXRlbSIsImJhY2tUb09iamVjdCIsInBhcnNlIiwiaW50b0FuQXJyYXkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsImRhdGEiLCJyZXNwb25zZSIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJDT01NRU5UX0xJU1QiLCJtZXRob2QiLCJtb2RlIiwiY3JlZGVudGlhbHMiLCJib2R5IiwiaGVhZGVycyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsImF1dG9Db21wbGV0ZSIsIm9uQ2hhbmdlIiwiYnV0dG9uIiwibWFwIiwiY29tbWVudCIsImluZGV4IiwiaDIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/comments.js\n"));

/***/ })

});