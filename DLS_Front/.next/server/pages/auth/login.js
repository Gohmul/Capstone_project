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
exports.id = "pages/auth/login";
exports.ids = ["pages/auth/login"];
exports.modules = {

/***/ "./pages/auth/login.js":
/*!*****************************!*\
  !*** ./pages/auth/login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fc */ \"react-icons/fc\");\n/* harmony import */ var react_icons_fc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fc__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"react-icons/ai\");\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _utils_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/firebase */ \"./utils/firebase.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-firebase-hooks/auth */ \"react-firebase-hooks/auth\");\n/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _utils_firebase__WEBPACK_IMPORTED_MODULE_4__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_3__, _utils_firebase__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nfunction Login() {\n    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [user, loading] = (0,react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_6__.useAuthState)(_utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth);\n    //Sign in with google\n    const googleProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.GoogleAuthProvider();\n    const GoogleLogin = async ()=>{\n        try {\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, googleProvider);\n            console.log(result.user);\n            route.push(\"/dashboard\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    const fbProvider = new firebase_auth__WEBPACK_IMPORTED_MODULE_3__.FacebookAuthProvider();\n    const FacebookProvider = async ()=>{\n        try {\n            const result = await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.signInWithPopup)(_utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth, fbProvider);\n            const credantial = await firebase_auth__WEBPACK_IMPORTED_MODULE_3__.FacebookAuthProvider.credentialFromResult(result);\n            const token = credantial.accessToken;\n            let photoUrl = result.user.photoURL + \"?height=500&access_token=\" + token;\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_3__.updateProfile)(_utils_firebase__WEBPACK_IMPORTED_MODULE_4__.auth.currentUser, {\n                photoURL: photoUrl\n            });\n            route.push(\"/dashboard\");\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (user) {\n            route.push(\"/dashboard\");\n        } else {\n            console.log(\"login\");\n        }\n    }, [\n        user\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Sign in with one of the providers\"\n            }, void 0, false, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: GoogleLogin,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fc__WEBPACK_IMPORTED_MODULE_1__.FcGoogle, {}, void 0, false, {\n                                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, this),\n                            \"Sign in with Google\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: FacebookProvider,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiFillFacebook, {}, void 0, false, {\n                                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            \"Sign in with Facebook\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ryan/Desktop/ga_seir/projects/Capstone_project/DLS_Front/pages/auth/login.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hdXRoL2xvZ2luLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ007QUFNekI7QUFDcUI7QUFDSjtBQUNpQjtBQUN2QjtBQUVuQixTQUFTVSxLQUFLLEdBQUc7SUFDOUIsTUFBTUMsS0FBSyxHQUFHSixzREFBUyxFQUFFO0lBQ3pCLE1BQU0sQ0FBQ0ssSUFBSSxFQUFFQyxPQUFPLENBQUMsR0FBR0wsdUVBQVksQ0FBQ0YsaURBQUksQ0FBQztJQUMxQyxxQkFBcUI7SUFDckIsTUFBTVEsY0FBYyxHQUFHLElBQUlYLDZEQUFrQixFQUFFO0lBQy9DLE1BQU1ZLFdBQVcsR0FBRyxVQUFZO1FBQzlCLElBQUk7WUFDRixNQUFNQyxNQUFNLEdBQUcsTUFBTWQsOERBQWUsQ0FBQ0ksaURBQUksRUFBRVEsY0FBYyxDQUFDO1lBQzFERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDSixJQUFJLENBQUMsQ0FBQztZQUN6QkQsS0FBSyxDQUFDUSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDM0IsRUFBRSxPQUFPQyxLQUFLLEVBQUU7WUFDZEgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTUMsVUFBVSxHQUFHLElBQUlqQiwrREFBb0IsRUFBRTtJQUM3QyxNQUFNa0IsZ0JBQWdCLEdBQUcsVUFBWTtRQUNuQyxJQUFJO1lBQ0YsTUFBTU4sTUFBTSxHQUFHLE1BQU1kLDhEQUFlLENBQUNJLGlEQUFJLEVBQUVlLFVBQVUsQ0FBQztZQUN0RCxNQUFNRSxVQUFVLEdBQUcsTUFBTW5CLG9GQUF5QyxDQUNoRVksTUFBTSxDQUNQO1lBQ0QsTUFBTVMsS0FBSyxHQUFHRixVQUFVLENBQUNHLFdBQVc7WUFDcEMsSUFBSUMsUUFBUSxHQUFHWCxNQUFNLENBQUNKLElBQUksQ0FBQ2dCLFFBQVEsR0FBRywyQkFBMkIsR0FBR0gsS0FBSztZQUN6RSxNQUFNcEIsNERBQWEsQ0FBQ0MsNkRBQWdCLEVBQUU7Z0JBQUVzQixRQUFRLEVBQUVELFFBQVE7YUFBRSxDQUFDLENBQUM7WUFDOURoQixLQUFLLENBQUNRLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixFQUFFLE9BQU9DLEtBQUssRUFBRTtZQUNkSCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0UsS0FBSyxDQUFDLENBQUM7UUFDckIsQ0FBQztJQUNILENBQUM7SUFDRFgsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsSUFBSUcsSUFBSSxFQUFFO1lBQ1JELEtBQUssQ0FBQ1EsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzNCLE9BQU87WUFDTEYsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUMsRUFBRTtRQUFDTixJQUFJO0tBQUMsQ0FBQyxDQUFDO0lBRVgscUJBQ0UsOERBQUNrQixLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTswQkFBQyxtQ0FBaUM7Ozs7O29CQUFLOzBCQUMxQyw4REFBQ0QsS0FBRzs7a0NBQ0YsOERBQUNFLFFBQU07d0JBQUNDLE9BQU8sRUFBRWxCLFdBQVc7OzBDQUMxQiw4REFBQ2Ysb0RBQVE7Ozs7b0NBQUc7NEJBQUEscUJBRWQ7Ozs7Ozs0QkFBUztrQ0FDVCw4REFBQ2dDLFFBQU07d0JBQUNDLE9BQU8sRUFBRVgsZ0JBQWdCOzswQ0FDL0IsOERBQUNyQiwwREFBYzs7OztvQ0FBRzs0QkFBQSx1QkFFcEI7Ozs7Ozs0QkFBUzs7Ozs7O29CQUNMOzs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZpcmVuZXh0Ly4vcGFnZXMvYXV0aC9sb2dpbi5qcz8yNzlhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZjXCI7XG5pbXBvcnQgeyBBaUZpbGxGYWNlYm9vayB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xuaW1wb3J0IHtcbiAgc2lnbkluV2l0aFBvcHVwLFxuICBHb29nbGVBdXRoUHJvdmlkZXIsXG4gIEZhY2Vib29rQXV0aFByb3ZpZGVyLFxuICB1cGRhdGVQcm9maWxlLFxufSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi91dGlscy9maXJlYmFzZVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VBdXRoU3RhdGUgfSBmcm9tIFwicmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCByb3V0ZSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgbG9hZGluZ10gPSB1c2VBdXRoU3RhdGUoYXV0aCk7XG4gIC8vU2lnbiBpbiB3aXRoIGdvb2dsZVxuICBjb25zdCBnb29nbGVQcm92aWRlciA9IG5ldyBHb29nbGVBdXRoUHJvdmlkZXIoKTtcbiAgY29uc3QgR29vZ2xlTG9naW4gPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBnb29nbGVQcm92aWRlcik7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQudXNlcik7XG4gICAgICByb3V0ZS5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBmYlByb3ZpZGVyID0gbmV3IEZhY2Vib29rQXV0aFByb3ZpZGVyKCk7XG4gIGNvbnN0IEZhY2Vib29rUHJvdmlkZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHNpZ25JbldpdGhQb3B1cChhdXRoLCBmYlByb3ZpZGVyKTtcbiAgICAgIGNvbnN0IGNyZWRhbnRpYWwgPSBhd2FpdCBGYWNlYm9va0F1dGhQcm92aWRlci5jcmVkZW50aWFsRnJvbVJlc3VsdChcbiAgICAgICAgcmVzdWx0XG4gICAgICApO1xuICAgICAgY29uc3QgdG9rZW4gPSBjcmVkYW50aWFsLmFjY2Vzc1Rva2VuO1xuICAgICAgbGV0IHBob3RvVXJsID0gcmVzdWx0LnVzZXIucGhvdG9VUkwgKyBcIj9oZWlnaHQ9NTAwJmFjY2Vzc190b2tlbj1cIiArIHRva2VuO1xuICAgICAgYXdhaXQgdXBkYXRlUHJvZmlsZShhdXRoLmN1cnJlbnRVc2VyLCB7IHBob3RvVVJMOiBwaG90b1VybCB9KTtcbiAgICAgIHJvdXRlLnB1c2goXCIvZGFzaGJvYXJkXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyKSB7XG4gICAgICByb3V0ZS5wdXNoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJsb2dpblwiKTtcbiAgICB9XG4gIH0sIFt1c2VyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgzPlNpZ24gaW4gd2l0aCBvbmUgb2YgdGhlIHByb3ZpZGVyczwvaDM+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0dvb2dsZUxvZ2lufT5cbiAgICAgICAgICA8RmNHb29nbGUgLz5cbiAgICAgICAgICBTaWduIGluIHdpdGggR29vZ2xlXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e0ZhY2Vib29rUHJvdmlkZXJ9PlxuICAgICAgICAgIDxBaUZpbGxGYWNlYm9vayAvPlxuICAgICAgICAgIFNpZ24gaW4gd2l0aCBGYWNlYm9va1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkZjR29vZ2xlIiwiQWlGaWxsRmFjZWJvb2siLCJzaWduSW5XaXRoUG9wdXAiLCJHb29nbGVBdXRoUHJvdmlkZXIiLCJGYWNlYm9va0F1dGhQcm92aWRlciIsInVwZGF0ZVByb2ZpbGUiLCJhdXRoIiwidXNlUm91dGVyIiwidXNlQXV0aFN0YXRlIiwidXNlRWZmZWN0IiwiTG9naW4iLCJyb3V0ZSIsInVzZXIiLCJsb2FkaW5nIiwiZ29vZ2xlUHJvdmlkZXIiLCJHb29nbGVMb2dpbiIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwiZXJyb3IiLCJmYlByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsImNyZWRhbnRpYWwiLCJjcmVkZW50aWFsRnJvbVJlc3VsdCIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJwaG90b1VybCIsInBob3RvVVJMIiwiY3VycmVudFVzZXIiLCJkaXYiLCJoMyIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/auth/login.js\n");

/***/ }),

/***/ "./utils/firebase.js":
/*!***************************!*\
  !*** ./utils/firebase.js ***!
  \***************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Import the functions you need from the SDKs you need\n\n\n\n// Your web app's Firebase configuration\n// For Firebase JS SDK v7.20.0 and later, measurementId is optional\n// const firebaseConfig = {\n//   apiKey: process.env.NEXT_PUBLIC_API_KEY,\n//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,\n//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,\n//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,\n//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,\n//   appId: process.env.NEXT_PUBLIC_APP_ID,\n//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,\n// };\nconst firebaseConfig = {\n    apiKey: \"AIzaSyBiBkVZF9ElANPqcC73ryEawQzpwf2g5ao\",\n    authDomain: \"dls-games.firebaseapp.com\",\n    databaseURL: \"https://dls-games-default-rtdb.firebaseio.com\",\n    projectId: \"dls-games\",\n    storageBucket: \"dls-games.appspot.com\",\n    messagingSenderId: \"563502695414\",\n    appId: \"1:563502695414:web:38140bf7c4f70fd3157dd7\",\n    measurementId: \"G-JWVMV5735L\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)();\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9maXJlYmFzZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUF1RDtBQUNWO0FBQ0w7QUFDVTtBQUVsRCx3Q0FBd0M7QUFDeEMsbUVBQW1FO0FBQ25FLDJCQUEyQjtBQUMzQiw2Q0FBNkM7QUFDN0MscURBQXFEO0FBQ3JELG1EQUFtRDtBQUNuRCwyREFBMkQ7QUFDM0Qsb0VBQW9FO0FBQ3BFLDJDQUEyQztBQUMzQywyREFBMkQ7QUFDM0QsS0FBSztBQUVMLE1BQU1HLGNBQWMsR0FBRztJQUNyQkMsTUFBTSxFQUFFLHlDQUF5QztJQUNqREMsVUFBVSxFQUFFLDJCQUEyQjtJQUN2Q0MsV0FBVyxFQUFFLCtDQUErQztJQUM1REMsU0FBUyxFQUFFLFdBQVc7SUFDdEJDLGFBQWEsRUFBRSx1QkFBdUI7SUFDdENDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQzlCO0FBRUQsc0JBQXNCO0FBQ3RCLE1BQU1DLEdBQUcsR0FBR1osMkRBQWEsQ0FBQ0csY0FBYyxDQUFDO0FBRWxDLE1BQU1VLElBQUksR0FBR1osc0RBQU8sRUFBRSxDQUFDO0FBQ3ZCLE1BQU1hLEVBQUUsR0FBR1osZ0VBQVksQ0FBQ1UsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maXJlbmV4dC8uL3V0aWxzL2ZpcmViYXNlLmpzPzUyN2IiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG4vLyBGb3IgRmlyZWJhc2UgSlMgU0RLIHY3LjIwLjAgYW5kIGxhdGVyLCBtZWFzdXJlbWVudElkIGlzIG9wdGlvbmFsXG4vLyBjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbi8vICAgYXBpS2V5OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfS0VZLFxuLy8gICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BVVRIX0RPTUFJTixcbi8vICAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19QUk9KRUNUX0lELFxuLy8gICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVE9SQUdFX0JVQ0tFVCxcbi8vICAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4vLyAgIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUFBfSUQsXG4vLyAgIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FQVNVUkVNRU5UX0lELFxuLy8gfTtcblxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XG4gIGFwaUtleTogXCJBSXphU3lCaUJrVlpGOUVsQU5QcWNDNzNyeUVhd1F6cHdmMmc1YW9cIixcbiAgYXV0aERvbWFpbjogXCJkbHMtZ2FtZXMuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZGxzLWdhbWVzLWRlZmF1bHQtcnRkYi5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiZGxzLWdhbWVzXCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwiZGxzLWdhbWVzLmFwcHNwb3QuY29tXCIsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBcIjU2MzUwMjY5NTQxNFwiLFxuICBhcHBJZDogXCIxOjU2MzUwMjY5NTQxNDp3ZWI6MzgxNDBiZjdjNGY3MGZkMzE1N2RkN1wiLFxuICBtZWFzdXJlbWVudElkOiBcIkctSldWTVY1NzM1TFwiLFxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XG5cbmV4cG9ydCBjb25zdCBhdXRoID0gZ2V0QXV0aCgpO1xuZXhwb3J0IGNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJnZXRGaXJlc3RvcmUiLCJmaXJlYmFzZUNvbmZpZyIsImFwaUtleSIsImF1dGhEb21haW4iLCJkYXRhYmFzZVVSTCIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImFwcCIsImF1dGgiLCJkYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/firebase.js\n");

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

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fc":
/*!*********************************!*\
  !*** external "react-icons/fc" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-icons/fc");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/auth/login.js"));
module.exports = __webpack_exports__;

})();