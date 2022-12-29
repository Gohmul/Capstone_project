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
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Refresh)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var spinners_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! spinners-react */ \"spinners-react\");\n/* harmony import */ var spinners_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(spinners_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Refresh() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"refresh\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Loading...\"\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/components/Loading.js\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(spinners_react__WEBPACK_IMPORTED_MODULE_1__.SpinnerRoundFilled, {}, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/components/Loading.js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/components/Loading.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvYWRpbmcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFvRDtBQUVyQyxTQUFTQyxPQUFPLEdBQUc7SUFDaEMscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLFNBQVM7OzBCQUN0Qiw4REFBQ0MsSUFBRTswQkFBQyxZQUFVOzs7OztvQkFBSzswQkFDbkIsOERBQUNKLDhEQUFrQjs7OztvQkFBRzs7Ozs7O1lBQ2xCLENBQ047QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZW5leHQvLi9jb21wb25lbnRzL0xvYWRpbmcuanM/YTFhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTcGlubmVyUm91bmRGaWxsZWQgfSBmcm9tIFwic3Bpbm5lcnMtcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVmcmVzaCgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlZnJlc2hcIj5cbiAgICAgIDxoMT5Mb2FkaW5nLi4uPC9oMT5cbiAgICAgIDxTcGlubmVyUm91bmRGaWxsZWQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTcGlubmVyUm91bmRGaWxsZWQiLCJSZWZyZXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Loading.js\n");

/***/ }),

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Dashboard)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Loading */ \"./components/Loading.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\nfunction Dashboard() {\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    console.log(user);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: \"Loading\"\n    }, void 0, false, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n        lineNumber: 9,\n        columnNumber: 23\n    }, this);\n    if (!user) route.push(\"/auth/login\");\n    if (loading) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n            lineNumber: 13,\n            columnNumber: 12\n        }, this);\n    }\n    if (user) {\n        console.log(user);\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"dashboard-container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"dashboard\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Welcome to your Dashboard \",\n                            user.displayName,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"dashboard-btn\",\n                        onClick: ()=>_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth.signOut(),\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/dashboard.js\",\n            lineNumber: 18,\n            columnNumber: 7\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9kYXNoYm9hcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUM7QUFDZ0I7QUFDakI7QUFDSTtBQUM3QixTQUFTSSxTQUFTLEdBQUc7SUFDbEMsTUFBTUMsS0FBSyxHQUFHSCxzREFBUyxFQUFFO0lBQ3pCLE1BQU0sQ0FBQ0ksSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR04sdUVBQVksQ0FBQ0QsaURBQUksQ0FBQztJQUMxQ1EsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO0lBQ2xCLElBQUlDLE9BQU8sRUFBRSxxQkFBTyw4REFBQ0csSUFBRTtrQkFBQyxTQUFPOzs7OztZQUFLLENBQUM7SUFFckMsSUFBSSxDQUFDSixJQUFJLEVBQUVELEtBQUssQ0FBQ00sSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3JDLElBQUlKLE9BQU8sRUFBRTtRQUNYLHFCQUFPLDhEQUFDSiwyREFBTzs7OztnQkFBRyxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJRyxJQUFJLEVBQUU7UUFDUkUsT0FBTyxDQUFDQyxHQUFHLENBQUNILElBQUksQ0FBQyxDQUFDO1FBQ2xCLHFCQUNFLDhEQUFDTSxLQUFHO1lBQUNDLFNBQVMsRUFBQyxxQkFBcUI7c0JBQ2xDLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsV0FBVzs7a0NBQ3hCLDhEQUFDSCxJQUFFOzs0QkFBQyw0QkFBMEI7NEJBQUNKLElBQUksQ0FBQ1EsV0FBVzs0QkFBQyxHQUFDOzs7Ozs7NEJBQUs7a0NBRXRELDhEQUFDQyxRQUFNO3dCQUFDRixTQUFTLEVBQUMsZUFBZTt3QkFBQ0csT0FBTyxFQUFFLElBQU1oQix5REFBWSxFQUFFO2tDQUFFLFVBRWpFOzs7Ozs0QkFBUzs7Ozs7O29CQUNMOzs7OztnQkFDRixDQUNOO0lBQ0osQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlbmV4dC8uL3BhZ2VzL2Rhc2hib2FyZC5qcz8wZTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdXRpbHMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL0xvYWRpbmdcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcbiAgY29uc3Qgcm91dGUgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmddID0gdXNlQXV0aFN0YXRlKGF1dGgpO1xuICBjb25zb2xlLmxvZyh1c2VyKTtcbiAgaWYgKGxvYWRpbmcpIHJldHVybiA8aDE+TG9hZGluZzwvaDE+O1xuXG4gIGlmICghdXNlcikgcm91dGUucHVzaChcIi9hdXRoL2xvZ2luXCIpO1xuICBpZiAobG9hZGluZykge1xuICAgIHJldHVybiA8TG9hZGluZyAvPjtcbiAgfVxuICBpZiAodXNlcikge1xuICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhc2hib2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoYm9hcmRcIj5cbiAgICAgICAgICA8aDE+V2VsY29tZSB0byB5b3VyIERhc2hib2FyZCB7dXNlci5kaXNwbGF5TmFtZX0hPC9oMT5cbiAgICAgICAgICB7LyogPGltZyBzcmM9e3VzZXIucGhvdG9VUkx9IC8+ICovfVxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZGFzaGJvYXJkLWJ0blwiIG9uQ2xpY2s9eygpID0+IGF1dGguc2lnbk91dCgpfT5cbiAgICAgICAgICAgIFNpZ24gb3V0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImF1dGgiLCJ1c2VBdXRoU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMb2FkaW5nIiwiRGFzaGJvYXJkIiwicm91dGUiLCJ1c2VyIiwibG9hZGluZyIsImNvbnNvbGUiLCJsb2ciLCJoMSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJkaXNwbGF5TmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzaWduT3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/dashboard.js\n");

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBiBkVZF9ElANPqcC73ryEawQzpwf2g5ao\",\n    authDomain: \"dls-games.firebaseapp.com\",\n    databaseURL: \"https://dls-games-default-rtdb.firebaseio.com\",\n    projectId: \"dls-games\",\n    storageBucket: \"dls-games.appspot.com\",\n    messagingSenderId: \"563502695414\",\n    appId: \"1:563502695414:web:38140bf7c4f70fd3157dd7\",\n    measurementId: \"G-JWVMV5735L\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUVsRCx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLE1BQU1HLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFQyx5Q0FBNEI7SUFDcENHLFVBQVUsRUFBRUgsMkJBQWdDO0lBQzVDSyxXQUFXLEVBQUUsK0NBQStDO0lBQzVEQyxTQUFTLEVBQUVOLFdBQTJCO0lBQ3RDUSxhQUFhLEVBQUVSLHVCQUErQjtJQUM5Q1UsaUJBQWlCLEVBQUVWLGNBQW9DO0lBQ3ZEWSxLQUFLLEVBQUVaLDJDQUF1QjtJQUM5QmMsYUFBYSxFQUFFZCxjQUErQjtDQUMvQztBQUVELHNCQUFzQjtBQUN0QixNQUFNZ0IsR0FBRyxHQUFHckIsMkRBQWEsQ0FBQ0csY0FBYyxDQUFDO0FBRWxDLE1BQU1tQixJQUFJLEdBQUdyQixzREFBTyxFQUFFLENBQUM7QUFDdkIsTUFBTXNCLEVBQUUsR0FBR3JCLGdFQUFZLENBQUNtQixHQUFHLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmVuZXh0Ly4vdXRpbHMvZmlyZWJhc2UuanM/NTI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IHsgZ2V0QXV0aCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbi8vIFlvdXIgd2ViIGFwcCdzIEZpcmViYXNlIGNvbmZpZ3VyYXRpb25cbi8vIEZvciBGaXJlYmFzZSBKUyBTREsgdjcuMjAuMCBhbmQgbGF0ZXIsIG1lYXN1cmVtZW50SWQgaXMgb3B0aW9uYWxcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfQVBQX0FQSV9LRVksXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52Lk5FWFRfQVBQX0FVVEhfRE9NQUlOLFxuICBkYXRhYmFzZVVSTDogXCJodHRwczovL2Rscy1nYW1lcy1kZWZhdWx0LXJ0ZGIuZmlyZWJhc2Vpby5jb21cIixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX0FQUF9JRCxcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9NRUFTVVJFTUVOVF9JRCxcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5leHBvcnQgY29uc3QgYXV0aCA9IGdldEF1dGgoKTtcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuIl0sIm5hbWVzIjpbImluaXRpYWxpemVBcHAiLCJnZXRBdXRoIiwiZ2V0RmlyZXN0b3JlIiwiZmlyZWJhc2VDb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9BUFBfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX0FQUF9BVVRIX0RPTUFJTiIsImRhdGFiYXNlVVJMIiwicHJvamVjdElkIiwiTkVYVF9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9NRUFTVVJFTUVOVF9JRCIsImFwcCIsImF1dGgiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/firebase.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react-firebase-hooks/auth":
/*!********************************************!*\
  !*** external "react-firebase-hooks/auth" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("react-firebase-hooks/auth");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "spinners-react":
/*!*********************************!*\
  !*** external "spinners-react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("spinners-react");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();