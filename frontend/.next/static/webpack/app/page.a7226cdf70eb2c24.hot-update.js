"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/ResultsSection.tsx":
/*!***************************************!*\
  !*** ./components/ResultsSection.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResultsSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _ResultsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsList */ \"(app-pages-browser)/./components/ResultsList.tsx\");\n\n\nfunction ResultsSection(props) {\n    const { status, scrapedData, scrapedDataLength, loadingTime, selectedElements, handleRedo, headingData, paragraphData, linkData, metaData, url } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center pt-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"md:text-3xl text-2xl font-semibold mb-2\",\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            \"URL: \",\n            url,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {}, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            status === \"Scraping successful\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"max-w-xl flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-green-500 mb-1\",\n                        children: \"Scraping successful!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-500 mb-8\",\n                        children: [\n                            scrapedDataLength,\n                            \" items scraped in \",\n                            loadingTime ? (loadingTime / 1000).toFixed(2) : \"unknown\",\n                            \" seconds\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"max-w-xl flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-red-500 mb-2\",\n                        children: \"Scraping error:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-center text-red-500 mb-4\",\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-6 text-sm\",\n                        children: \"Make sure you entered a valid URL and the correct browser.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full text-center flex justify-center items-center mb-4\",\n                children: scrapedData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        selectedElements.includes(\"heading\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: headingData,\n                            type: \"Heading\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 56\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 110\n                        }, this),\n                        selectedElements.includes(\"paragraph\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: paragraphData,\n                            type: \"Paragraph\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 58\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 116\n                        }, this),\n                        selectedElements.includes(\"link\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: linkData,\n                            type: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 53\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 101\n                        }, this),\n                        selectedElements.includes(\"meta\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: metaData,\n                            type: \"Meta\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 53\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 101\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleRedo,\n                    className: \"md:text-base text-sm mb-16 px-6 py-2 text-white bg-teal-800 rounded-full hover:bg-teal-600 drop-shadow-none hover:drop-shadow-lg transition-all\",\n                    children: \"Restart\"\n                }, void 0, false, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ResultsSection;\nvar _c;\n$RefreshReg$(_c, \"ResultsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVzdWx0c1NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0MsZUFBZUMsS0FBVTtJQUMvQyxNQUFNLEVBQUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsRUFDdEVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxHQUFHLEVBQUMsR0FBR1g7SUFFekUscUJBQ0UsOERBQUNZO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQztnQkFBR0QsV0FBVTswQkFBMEM7Ozs7OztZQUVuRDtZQUNFRjswQkFDUCw4REFBQ0k7Ozs7O1lBR0FkLFdBQVcsc0NBQ1YsOERBQUNlO2dCQUFLSCxXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXNCOzs7Ozs7a0NBR3BDLDhEQUFDSTt3QkFBRUosV0FBVTs7NEJBQ1ZWOzRCQUFrQjs0QkFBbUJDLGNBQWMsQ0FBQ0EsY0FBYyxJQUFHLEVBQUdjLE9BQU8sQ0FBQyxLQUFLOzRCQUFVOzs7Ozs7Ozs7Ozs7cUNBSXBHLDhEQUFDRjtnQkFBS0gsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFrQzs7Ozs7O2tDQUdoRCw4REFBQ0U7d0JBQUdGLFdBQVU7a0NBQ1haOzs7Ozs7a0NBRUgsOERBQUNnQjt3QkFBRUosV0FBVTtrQ0FBZTs7Ozs7Ozs7Ozs7OzBCQUdoQyw4REFBQ007Z0JBQVFOLFdBQVU7MEJBRWZYLDRCQUNFLDhEQUFDVTs7d0JBQ0dQLGlCQUFpQmUsUUFBUSxDQUFDLDJCQUFhLDhEQUFDdEIsb0RBQVdBOzRCQUFDdUIsTUFBTWQ7NEJBQWFlLE1BQU07Ozs7O2lEQUFnQiw4REFBQ1Y7Ozs7O3dCQUM5RlAsaUJBQWlCZSxRQUFRLENBQUMsNkJBQWUsOERBQUN0QixvREFBV0E7NEJBQUN1QixNQUFNYjs0QkFBZWMsTUFBTTs7Ozs7aURBQWtCLDhEQUFDVjs7Ozs7d0JBQ3BHUCxpQkFBaUJlLFFBQVEsQ0FBQyx3QkFBVSw4REFBQ3RCLG9EQUFXQTs0QkFBQ3VCLE1BQU1aOzRCQUFVYSxNQUFNOzs7OztpREFBYSw4REFBQ1Y7Ozs7O3dCQUNyRlAsaUJBQWlCZSxRQUFRLENBQUMsd0JBQVUsOERBQUN0QixvREFBV0E7NEJBQUN1QixNQUFNWDs0QkFBVVksTUFBTTs7Ozs7aURBQWEsOERBQUNWOzs7Ozs7Ozs7O3lDQUd6Riw4REFBQ0s7Ozs7Ozs7Ozs7MEJBR1AsOERBQUNMO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDVTtvQkFDQ0MsU0FBU2xCO29CQUNUTyxXQUFVOzhCQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0tBeER3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXN1bHRzU2VjdGlvbi50c3g/YzczYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzdWx0c0xpc3QgZnJvbSBcIi4vUmVzdWx0c0xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzdWx0c1NlY3Rpb24ocHJvcHM6IGFueSl7XG4gIGNvbnN0IHtzdGF0dXMsIHNjcmFwZWREYXRhLCBzY3JhcGVkRGF0YUxlbmd0aCwgbG9hZGluZ1RpbWUsIHNlbGVjdGVkRWxlbWVudHMsXG4gICAgICAgIGhhbmRsZVJlZG8sIGhlYWRpbmdEYXRhLCBwYXJhZ3JhcGhEYXRhLCBsaW5rRGF0YSwgbWV0YURhdGEsIHVybH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcHQtOFwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cIm1kOnRleHQtM3hsIHRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItMlwiPlxuICAgICAgICBSZXN1bHRzXG4gICAgICA8L2gxPlxuICAgICAgIFVSTDoge3VybH1cbiAgICAgIDxoMj5cblxuICAgICAgPC9oMj5cbiAgICAgIHtzdGF0dXMgPT09IFwiU2NyYXBpbmcgc3VjY2Vzc2Z1bFwiID8gXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1heC13LXhsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtZ3JlZW4tNTAwIG1iLTFcIj5cbiAgICAgICAgICBTY3JhcGluZyBzdWNjZXNzZnVsIVxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwIG1iLThcIj5cbiAgICAgICAgICAgIHtzY3JhcGVkRGF0YUxlbmd0aH0gaXRlbXMgc2NyYXBlZCBpbiB7bG9hZGluZ1RpbWUgPyAobG9hZGluZ1RpbWUgLyAxMDAwKS50b0ZpeGVkKDIpIDogXCJ1bmtub3duXCJ9IHNlY29uZHMgXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDpcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWF4LXcteGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCB0ZXh0LXJlZC01MDAgbWItMlwiPlxuICAgICAgICAgIFNjcmFwaW5nIGVycm9yOlxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBtYi00XCI+XG4gICAgICAgICAgICB7c3RhdHVzfVxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiB0ZXh0LXNtXCI+TWFrZSBzdXJlIHlvdSBlbnRlcmVkIGEgdmFsaWQgVVJMIGFuZCB0aGUgY29ycmVjdCBicm93c2VyLjwvcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIHRleHQtY2VudGVyIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAge1xuICAgICAgICAgIHNjcmFwZWREYXRhID8gXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7IHNlbGVjdGVkRWxlbWVudHMuaW5jbHVkZXMoXCJoZWFkaW5nXCIpID8gPFJlc3VsdHNMaXN0IGRhdGE9e2hlYWRpbmdEYXRhfSB0eXBlPXtcIkhlYWRpbmdcIn0gLz4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgICAgeyBzZWxlY3RlZEVsZW1lbnRzLmluY2x1ZGVzKFwicGFyYWdyYXBoXCIpID8gPFJlc3VsdHNMaXN0IGRhdGE9e3BhcmFncmFwaERhdGF9IHR5cGU9e1wiUGFyYWdyYXBoXCJ9IC8+IDogPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgIHsgc2VsZWN0ZWRFbGVtZW50cy5pbmNsdWRlcyhcImxpbmtcIikgPyA8UmVzdWx0c0xpc3QgZGF0YT17bGlua0RhdGF9IHR5cGU9e1wiTGlua1wifSAvPiA6IDxkaXY+PC9kaXY+fVxuICAgICAgICAgICAgICB7IHNlbGVjdGVkRWxlbWVudHMuaW5jbHVkZXMoXCJtZXRhXCIpID8gPFJlc3VsdHNMaXN0IGRhdGE9e21ldGFEYXRhfSB0eXBlPXtcIk1ldGFcIn0gLz4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOlxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICB9XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlZG99XG4gICAgICAgICAgY2xhc3NOYW1lPVwibWQ6dGV4dC1iYXNlIHRleHQtc20gbWItMTYgcHgtNiBweS0yIHRleHQtd2hpdGUgYmctdGVhbC04MDAgcm91bmRlZC1mdWxsIGhvdmVyOmJnLXRlYWwtNjAwIGRyb3Atc2hhZG93LW5vbmUgaG92ZXI6ZHJvcC1zaGFkb3ctbGcgdHJhbnNpdGlvbi1hbGxcIlxuICAgICAgICA+XG4gICAgICAgICAgUmVzdGFydFxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59O1xuIl0sIm5hbWVzIjpbIlJlc3VsdHNMaXN0IiwiUmVzdWx0c1NlY3Rpb24iLCJwcm9wcyIsInN0YXR1cyIsInNjcmFwZWREYXRhIiwic2NyYXBlZERhdGFMZW5ndGgiLCJsb2FkaW5nVGltZSIsInNlbGVjdGVkRWxlbWVudHMiLCJoYW5kbGVSZWRvIiwiaGVhZGluZ0RhdGEiLCJwYXJhZ3JhcGhEYXRhIiwibGlua0RhdGEiLCJtZXRhRGF0YSIsInVybCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaDIiLCJzcGFuIiwicCIsInRvRml4ZWQiLCJzZWN0aW9uIiwiaW5jbHVkZXMiLCJkYXRhIiwidHlwZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ResultsSection.tsx\n"));

/***/ })

});