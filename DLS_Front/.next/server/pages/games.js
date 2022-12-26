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
exports.id = "pages/games";
exports.ids = ["pages/games"];
exports.modules = {

/***/ "./pages/apis/GetApi.js":
/*!******************************!*\
  !*** ./pages/apis/GetApi.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getLocations = async ()=>{\n    const response = await fetch(`${\"http://localhost:8000\"}/${\"fwjyhrthtrhtegegrgerge\"}`);\n    const data = await response.json();\n    const dataString = JSON.stringify(data);\n    window.localStorage.setItem(\"locations\", dataString);\n    return data;\n};\nconst getMachines = async ()=>{\n    const response = await fetch(`${\"http://localhost:8000\"}/${\"yjytwdbfmgygjytkyege\"}`);\n    const data = await response.json();\n    const dataString = JSON.stringify(data);\n    window.localStorage.setItem(\"machines\", dataString);\n    return data;\n};\nconst getComments = async ()=>{\n    const response = await fetch(`${\"http://localhost:8000\"}/${\"hryhryjrwnyfjgter\"}`);\n    const data = await response.json();\n    const dataString = JSON.stringify(data);\n    window.localStorage.setItem(\"comments\", dataString);\n    return data;\n};\ngetLocations();\ngetMachines();\ngetComments();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    getLocations,\n    getMachines,\n    getComments\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGlzL0dldEFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsWUFBWSxHQUFHLFVBQVk7SUFDL0IsTUFBTUMsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsQ0FBQyxFQUFFQyx1QkFBb0IsQ0FBQyxDQUFDLEVBQUVBLHdCQUFxQixDQUFDLENBQUMsQ0FDbkQ7SUFDRCxNQUFNSSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLEVBQUU7SUFDbEMsTUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDO0lBQ3ZDSyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFdBQVcsRUFBRUwsVUFBVSxDQUFDLENBQUM7SUFDckQsT0FBT0YsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUVELE1BQU1RLFdBQVcsR0FBRyxVQUFZO0lBQzlCLE1BQU1kLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLENBQUMsRUFBRUMsdUJBQW9CLENBQUMsQ0FBQyxFQUFFQSxzQkFBd0IsQ0FBQyxDQUFDLENBQ3REO0lBQ0QsTUFBTUksSUFBSSxHQUFHLE1BQU1OLFFBQVEsQ0FBQ08sSUFBSSxFQUFFO0lBQ2xDLE1BQU1DLFVBQVUsR0FBR0MsSUFBSSxDQUFDQyxTQUFTLENBQUNKLElBQUksQ0FBQztJQUN2Q0ssTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLEVBQUVMLFVBQVUsQ0FBQyxDQUFDO0lBQ3BELE9BQU9GLElBQUksQ0FBQztBQUNkLENBQUM7QUFFRCxNQUFNVSxXQUFXLEdBQUcsVUFBWTtJQUM5QixNQUFNaEIsUUFBUSxHQUFHLE1BQU1DLEtBQUssQ0FDMUIsQ0FBQyxFQUFFQyx1QkFBb0IsQ0FBQyxDQUFDLEVBQUVBLG1CQUF3QixDQUFDLENBQUMsQ0FDdEQ7SUFDRCxNQUFNSSxJQUFJLEdBQUcsTUFBTU4sUUFBUSxDQUFDTyxJQUFJLEVBQUU7SUFDbEMsTUFBTUMsVUFBVSxHQUFHQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDO0lBQ3ZDSyxNQUFNLENBQUNDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFVBQVUsRUFBRUwsVUFBVSxDQUFDLENBQUM7SUFDcEQsT0FBT0YsSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQUNEUCxZQUFZLEVBQUUsQ0FBQztBQUNmZSxXQUFXLEVBQUUsQ0FBQztBQUNkRSxXQUFXLEVBQUUsQ0FBQztBQUNkLGlFQUFlO0lBQ2JqQixZQUFZO0lBQ1plLFdBQVc7SUFDWEUsV0FBVztDQUNaLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlbmV4dC8uL3BhZ2VzL2FwaXMvR2V0QXBpLmpzP2ZkMTAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0TG9jYXRpb25zID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS8ke3Byb2Nlc3MuZW52LkxPQ0FUSU9OU31gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYXRpb25zXCIsIGRhdGFTdHJpbmcpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmNvbnN0IGdldE1hY2hpbmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS8ke3Byb2Nlc3MuZW52Lk1BQ0hJTkVfTElTVH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFjaGluZXNcIiwgZGF0YVN0cmluZyk7XG4gIHJldHVybiBkYXRhO1xufTtcblxuY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuQkFTRV9VUkx9LyR7cHJvY2Vzcy5lbnYuQ09NTUVOVF9MSVNUfWBcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgY29uc3QgZGF0YVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb21tZW50c1wiLCBkYXRhU3RyaW5nKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuZ2V0TG9jYXRpb25zKCk7XG5nZXRNYWNoaW5lcygpO1xuZ2V0Q29tbWVudHMoKTtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0TG9jYXRpb25zLFxuICBnZXRNYWNoaW5lcyxcbiAgZ2V0Q29tbWVudHMsXG59O1xuIl0sIm5hbWVzIjpbImdldExvY2F0aW9ucyIsInJlc3BvbnNlIiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9VUkwiLCJMT0NBVElPTlMiLCJkYXRhIiwianNvbiIsImRhdGFTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5Iiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldE1hY2hpbmVzIiwiTUFDSElORV9MSVNUIiwiZ2V0Q29tbWVudHMiLCJDT01NRU5UX0xJU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/apis/GetApi.js\n");

/***/ }),

/***/ "./pages/games.js":
/*!************************!*\
  !*** ./pages/games.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Games)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _apis_GetApi_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apis/GetApi.js */ \"./pages/apis/GetApi.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils_firebase__WEBPACK_IMPORTED_MODULE_1__]);\n_utils_firebase__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\nfunction Games() {\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_2__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_1__.auth);\n    const { 0: machines , 1: setMachines  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const getMachinesAndConvertToArray = ()=>{\n        const item = localStorage.getItem(\"machines\");\n        const backToObject = JSON.parse(item);\n        const intoAnArray = Object.values(backToObject);\n        setMachines(intoAnArray);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Perform localStorage action\n        getMachinesAndConvertToArray();\n    }, []);\n    console.log(machines);\n    if (machines) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid\",\n            children: machines.map((machine, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid-item\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: machine.model\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: \"grid-image\",\n                            src: machine.mach_img\n                        }, void 0, false, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                \"$\",\n                                machine.price\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Loading\"\n        }, void 0, false, {\n            fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/games.js\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlDO0FBQ2dCO0FBQ3ZCO0FBQ007QUFDRjtBQUNFO0FBRXpCLFNBQVNPLEtBQUssR0FBRztJQUM5QixNQUFNQyxLQUFLLEdBQUdMLHNEQUFTLEVBQUU7SUFDekIsTUFBTSxDQUFDTSxJQUFJLEVBQUVDLE9BQU8sQ0FBQyxHQUFHVCx1RUFBWSxDQUFDRCxpREFBSSxDQUFDO0lBQzFDLE1BQU0sS0FBQ1csUUFBUSxNQUFFQyxXQUFXLE1BQUlOLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBRTlDLE1BQU1PLDRCQUE0QixHQUFHLElBQU07UUFDekMsTUFBTUMsSUFBSSxHQUFHQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLENBQUM7UUFDN0MsTUFBTUMsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0wsSUFBSSxDQUFDO1FBQ3JDLE1BQU1NLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNMLFlBQVksQ0FBQztRQUMvQ0wsV0FBVyxDQUFDUSxXQUFXLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRURsQixnREFBUyxDQUFDLElBQU07UUFDZCw4QkFBOEI7UUFDOUJXLDRCQUE0QixFQUFFLENBQUM7SUFDakMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVBVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDYixRQUFRLENBQUMsQ0FBQztJQUV0QixJQUFJQSxRQUFRLEVBQUU7UUFDWixxQkFDRSw4REFBQ2MsS0FBRztZQUFDQyxTQUFTLEVBQUMsTUFBTTtzQkFDbEJmLFFBQVEsQ0FBQ2dCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPLEVBQUVDLEtBQUssaUJBQzNCLDhEQUFDSixLQUFHO29CQUFDQyxTQUFTLEVBQUMsV0FBVzs7c0NBQ3hCLDhEQUFDSSxJQUFFO3NDQUFFRixPQUFPLENBQUNHLEtBQUs7Ozs7O2dDQUFNO3NDQUN4Qiw4REFBQ0MsS0FBRzs0QkFBQ04sU0FBUyxFQUFDLFlBQVk7NEJBQUNPLEdBQUcsRUFBRUwsT0FBTyxDQUFDTSxRQUFROzs7OztnQ0FBSTtzQ0FDckQsOERBQUNKLElBQUU7O2dDQUFDLEdBQUM7Z0NBQUNGLE9BQU8sQ0FBQ08sS0FBSzs7Ozs7O2dDQUFNOzttQkFIS04sS0FBSzs7Ozt3QkFJL0IsQ0FDTjs7Ozs7Z0JBQ0UsQ0FDTjtJQUNKLE9BQU87UUFDTCxxQkFBTyw4REFBQ08sSUFBRTtzQkFBQyxTQUFPOzs7OztnQkFBSyxDQUFDO0lBQzFCLENBQUM7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmlyZW5leHQvLi9wYWdlcy9nYW1lcy5qcz8zYmY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGggfSBmcm9tIFwiLi4vdXRpbHMvZmlyZWJhc2VcIjtcbmltcG9ydCB7IHVzZUF1dGhTdGF0ZSB9IGZyb20gXCJyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGdldEFwaSBmcm9tIFwiLi9hcGlzL0dldEFwaS5qc1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdhbWVzKCkge1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIGNvbnN0IFttYWNoaW5lcywgc2V0TWFjaGluZXNdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZ2V0TWFjaGluZXNBbmRDb252ZXJ0VG9BcnJheSA9ICgpID0+IHtcbiAgICBjb25zdCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYWNoaW5lc1wiKTtcbiAgICBjb25zdCBiYWNrVG9PYmplY3QgPSBKU09OLnBhcnNlKGl0ZW0pO1xuICAgIGNvbnN0IGludG9BbkFycmF5ID0gT2JqZWN0LnZhbHVlcyhiYWNrVG9PYmplY3QpO1xuICAgIHNldE1hY2hpbmVzKGludG9BbkFycmF5KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIFBlcmZvcm0gbG9jYWxTdG9yYWdlIGFjdGlvblxuICAgIGdldE1hY2hpbmVzQW5kQ29udmVydFRvQXJyYXkoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnNvbGUubG9nKG1hY2hpbmVzKTtcblxuICBpZiAobWFjaGluZXMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCI+XG4gICAgICAgIHttYWNoaW5lcy5tYXAoKG1hY2hpbmUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkLWl0ZW1cIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxoMj57bWFjaGluZS5tb2RlbH08L2gyPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJncmlkLWltYWdlXCIgc3JjPXttYWNoaW5lLm1hY2hfaW1nfSAvPlxuICAgICAgICAgICAgPGgyPiR7bWFjaGluZS5wcmljZX08L2gyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDxoMT5Mb2FkaW5nPC9oMT47XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJhdXRoIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0QXBpIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkdhbWVzIiwicm91dGUiLCJ1c2VyIiwibG9hZGluZyIsIm1hY2hpbmVzIiwic2V0TWFjaGluZXMiLCJnZXRNYWNoaW5lc0FuZENvbnZlcnRUb0FycmF5IiwiaXRlbSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJiYWNrVG9PYmplY3QiLCJKU09OIiwicGFyc2UiLCJpbnRvQW5BcnJheSIsIk9iamVjdCIsInZhbHVlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJtYWNoaW5lIiwiaW5kZXgiLCJoMiIsIm1vZGVsIiwiaW1nIiwic3JjIiwibWFjaF9pbWciLCJwcmljZSIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/games.js\n");

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = (__webpack_exec__("./pages/games.js"));
module.exports = __webpack_exports__;

})();