"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/locations",{

/***/ "./pages/apis/GetApi.js":
/*!******************************!*\
  !*** ./pages/apis/GetApi.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n\n\nvar getLocations = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n        var response, data, dataString;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"\".concat(\"http://localhost:8000\", \"/\").concat(\"fwjyhrthtrhtegegrgerge\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    dataString = JSON.stringify(data);\n                    window.localStorage.setItem(\"locations\", dataString);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getLocations() {\n        return _ref.apply(this, arguments);\n    };\n}();\ngetLocations();\nvar getMachines = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n        var response, data, dataString;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"\".concat(\"http://localhost:8000\", \"/\").concat(\"yjytwdbfmgygjytkyege\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    dataString = JSON.stringify(data);\n                    window.localStorage.setItem(\"machines\", dataString);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getMachines() {\n        return _ref.apply(this, arguments);\n    };\n}();\ngetLocations();\nvar getComments = function() {\n    var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(function() {\n        var response, data, dataString;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(\"\".concat(\"http://localhost:8000\", \"/\").concat(\"hryhryjrwnyfjgter\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        4,\n                        response.json()\n                    ];\n                case 2:\n                    data = _state.sent();\n                    dataString = JSON.stringify(data);\n                    window.localStorage.setItem(\"comments\", dataString);\n                    return [\n                        2,\n                        data\n                    ];\n            }\n        });\n    });\n    return function getComments() {\n        return _ref.apply(this, arguments);\n    };\n}();\ngetLocations();\ngetMachines();\ngetComments();\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n    getLocations: getLocations\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGlzL0dldEFwaS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFBQSxJQUFNQSxZQUFZO2VBQUcsK0ZBQVk7WUFDekJDLFFBQVEsRUFHUkMsSUFBSSxFQUNKQyxVQUFVOzs7O29CQUpDOzt3QkFBTUMsS0FBSyxDQUMxQixFQUFDLENBQTBCQyxNQUFxQixDQUE3Q0EsdUJBQW9CLEVBQUMsR0FBQyxDQUF3QixRQUF0QkEsd0JBQXFCLENBQUUsQ0FDbkQ7c0JBQUE7O29CQUZLSixRQUFRLEdBQUcsYUFFaEI7b0JBQ1k7O3dCQUFNQSxRQUFRLENBQUNRLElBQUksRUFBRTtzQkFBQTs7b0JBQTVCUCxJQUFJLEdBQUcsYUFBcUI7b0JBQzVCQyxVQUFVLEdBQUdPLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxJQUFJLENBQUMsQ0FBQztvQkFDeENVLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsV0FBVyxFQUFFWCxVQUFVLENBQUMsQ0FBQztvQkFDckQ7O3dCQUFPRCxJQUFJO3NCQUFDOzs7SUFDZCxDQUFDO29CQVJLRixZQUFZOzs7R0FRakI7QUFDREEsWUFBWSxFQUFFLENBQUM7QUFFZixJQUFNZSxXQUFXO2VBQUcsK0ZBQVk7WUFDeEJkLFFBQVEsRUFHUkMsSUFBSSxFQUNKQyxVQUFVOzs7O29CQUpDOzt3QkFBTUMsS0FBSyxDQUMxQixFQUFDLENBQTBCQyxNQUF3QixDQUFoREEsdUJBQW9CLEVBQUMsR0FBQyxDQUEyQixRQUF6QkEsc0JBQXdCLENBQUUsQ0FDdEQ7c0JBQUE7O29CQUZLSixRQUFRLEdBQUcsYUFFaEI7b0JBQ1k7O3dCQUFNQSxRQUFRLENBQUNRLElBQUksRUFBRTtzQkFBQTs7b0JBQTVCUCxJQUFJLEdBQUcsYUFBcUI7b0JBQzVCQyxVQUFVLEdBQUdPLElBQUksQ0FBQ0MsU0FBUyxDQUFDVCxJQUFJLENBQUMsQ0FBQztvQkFDeENVLE1BQU0sQ0FBQ0MsWUFBWSxDQUFDQyxPQUFPLENBQUMsVUFBVSxFQUFFWCxVQUFVLENBQUMsQ0FBQztvQkFDcEQ7O3dCQUFPRCxJQUFJO3NCQUFDOzs7SUFDZCxDQUFDO29CQVJLYSxXQUFXOzs7R0FRaEI7QUFDRGYsWUFBWSxFQUFFLENBQUM7QUFFZixJQUFNaUIsV0FBVztlQUFHLCtGQUFZO1lBQ3hCaEIsUUFBUSxFQUdSQyxJQUFJLEVBQ0pDLFVBQVU7Ozs7b0JBSkM7O3dCQUFNQyxLQUFLLENBQzFCLEVBQUMsQ0FBMEJDLE1BQXdCLENBQWhEQSx1QkFBb0IsRUFBQyxHQUFDLENBQTJCLFFBQXpCQSxtQkFBd0IsQ0FBRSxDQUN0RDtzQkFBQTs7b0JBRktKLFFBQVEsR0FBRyxhQUVoQjtvQkFDWTs7d0JBQU1BLFFBQVEsQ0FBQ1EsSUFBSSxFQUFFO3NCQUFBOztvQkFBNUJQLElBQUksR0FBRyxhQUFxQjtvQkFDNUJDLFVBQVUsR0FBR08sSUFBSSxDQUFDQyxTQUFTLENBQUNULElBQUksQ0FBQyxDQUFDO29CQUN4Q1UsTUFBTSxDQUFDQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxVQUFVLEVBQUVYLFVBQVUsQ0FBQyxDQUFDO29CQUNwRDs7d0JBQU9ELElBQUk7c0JBQUM7OztJQUNkLENBQUM7b0JBUktlLFdBQVc7OztHQVFoQjtBQUNEakIsWUFBWSxFQUFFLENBQUM7QUFDZmUsV0FBVyxFQUFFLENBQUM7QUFDZEUsV0FBVyxFQUFFLENBQUM7QUFFZCwrREFBZTtJQUNiakIsWUFBWSxFQUFaQSxZQUFZO0NBQ2IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9hcGlzL0dldEFwaS5qcz9mZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdldExvY2F0aW9ucyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vJHtwcm9jZXNzLmVudi5MT0NBVElPTlN9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvY2F0aW9uc1wiLCBkYXRhU3RyaW5nKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuZ2V0TG9jYXRpb25zKCk7XG5cbmNvbnN0IGdldE1hY2hpbmVzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfVVJMfS8ke3Byb2Nlc3MuZW52Lk1BQ0hJTkVfTElTVH1gXG4gICk7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IGRhdGFTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibWFjaGluZXNcIiwgZGF0YVN0cmluZyk7XG4gIHJldHVybiBkYXRhO1xufTtcbmdldExvY2F0aW9ucygpO1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1VSTH0vJHtwcm9jZXNzLmVudi5DT01NRU5UX0xJU1R9YFxuICApO1xuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICBjb25zdCBkYXRhU3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG4gIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNvbW1lbnRzXCIsIGRhdGFTdHJpbmcpO1xuICByZXR1cm4gZGF0YTtcbn07XG5nZXRMb2NhdGlvbnMoKTtcbmdldE1hY2hpbmVzKCk7XG5nZXRDb21tZW50cygpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldExvY2F0aW9ucyxcbn07XG4iXSwibmFtZXMiOlsiZ2V0TG9jYXRpb25zIiwicmVzcG9uc2UiLCJkYXRhIiwiZGF0YVN0cmluZyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkJBU0VfVVJMIiwiTE9DQVRJT05TIiwianNvbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0TWFjaGluZXMiLCJNQUNISU5FX0xJU1QiLCJnZXRDb21tZW50cyIsIkNPTU1FTlRfTElTVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/apis/GetApi.js\n"));

/***/ })

});