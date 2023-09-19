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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ResultsSection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _ResultsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResultsList */ \"(app-pages-browser)/./components/ResultsList.tsx\");\n\n\nfunction ResultsSection(props) {\n    const { status, scrapedData, scrapedDataLength, loadingTime, selectedElements, handleRedo, headingData, paragraphData, linkData, metaData } = props;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"md:text-3xl text-2xl font-semibold mb-2\",\n                children: \"Results\"\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            status === \"Scraping successful\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"max-w-xl flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-green-500 mb-1\",\n                        children: \"Scraping successful!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-sm text-gray-500 mb-8\",\n                        children: [\n                            scrapedDataLength,\n                            \" items scraped in \",\n                            loadingTime ? (loadingTime / 1000).toFixed(2) : \"unknown\",\n                            \" seconds\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"max-w-xl flex flex-col justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-red-500 mb-2\",\n                        children: \"Scraping error:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-center text-red-500 mb-4\",\n                        children: status\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"mb-6 text-sm\",\n                        children: \"Make sure you entered a valid URL and the correct browser.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"w-full text-center flex justify-center items-center mb-4\",\n                children: scrapedData ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        selectedElements.includes(\"heading\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: headingData,\n                            type: \"Heading\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 56\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 110\n                        }, this),\n                        selectedElements.includes(\"paragraph\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: paragraphData,\n                            type: \"Paragraph\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 58\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 116\n                        }, this),\n                        selectedElements.includes(\"link\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: linkData,\n                            type: \"Link\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 53\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 101\n                        }, this),\n                        selectedElements.includes(\"meta\") ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ResultsList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            data: metaData,\n                            type: \"Meta\"\n                        }, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 53\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 101\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {}, void 0, false, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleRedo,\n                    className: \"md:text-base text-sm mb-16 px-6 py-2 text-white bg-teal-800 rounded-full hover:bg-teal-600 drop-shadow-none hover:drop-shadow-lg transition-all\",\n                    children: \"Restart\"\n                }, void 0, false, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/components/ResultsSection.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = ResultsSection;\nvar _c;\n$RefreshReg$(_c, \"ResultsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvUmVzdWx0c1NlY3Rpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0M7QUFFekIsU0FBU0MsZUFBZUMsS0FBVTtJQUMvQyxNQUFNLEVBQUNDLE1BQU0sRUFBRUMsV0FBVyxFQUFFQyxpQkFBaUIsRUFBRUMsV0FBVyxFQUFFQyxnQkFBZ0IsRUFDdEVDLFVBQVUsRUFBRUMsV0FBVyxFQUFFQyxhQUFhLEVBQUVDLFFBQVEsRUFBRUMsUUFBUSxFQUFFLEdBQUdWO0lBRXJFLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQTBDOzs7Ozs7WUFHdkRYLFdBQVcsc0NBQ1YsOERBQUNhO2dCQUFLRixXQUFVOztrQ0FDZCw4REFBQ0M7d0JBQUdELFdBQVU7a0NBQXNCOzs7Ozs7a0NBR3BDLDhEQUFDRzt3QkFBRUgsV0FBVTs7NEJBQ1ZUOzRCQUFrQjs0QkFBbUJDLGNBQWMsQ0FBQ0EsY0FBYyxJQUFHLEVBQUdZLE9BQU8sQ0FBQyxLQUFLOzRCQUFVOzs7Ozs7Ozs7Ozs7cUNBSXBHLDhEQUFDRjtnQkFBS0YsV0FBVTs7a0NBQ2QsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFrQzs7Ozs7O2tDQUdoRCw4REFBQ0s7d0JBQUdMLFdBQVU7a0NBQ1hYOzs7Ozs7a0NBRUgsOERBQUNjO3dCQUFFSCxXQUFVO2tDQUFlOzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDTTtnQkFBUU4sV0FBVTswQkFFZlYsNEJBQ0UsOERBQUNTOzt3QkFDR04saUJBQWlCYyxRQUFRLENBQUMsMkJBQWEsOERBQUNyQixvREFBV0E7NEJBQUNzQixNQUFNYjs0QkFBYWMsTUFBTTs7Ozs7aURBQWdCLDhEQUFDVjs7Ozs7d0JBQzlGTixpQkFBaUJjLFFBQVEsQ0FBQyw2QkFBZSw4REFBQ3JCLG9EQUFXQTs0QkFBQ3NCLE1BQU1aOzRCQUFlYSxNQUFNOzs7OztpREFBa0IsOERBQUNWOzs7Ozt3QkFDcEdOLGlCQUFpQmMsUUFBUSxDQUFDLHdCQUFVLDhEQUFDckIsb0RBQVdBOzRCQUFDc0IsTUFBTVg7NEJBQVVZLE1BQU07Ozs7O2lEQUFhLDhEQUFDVjs7Ozs7d0JBQ3JGTixpQkFBaUJjLFFBQVEsQ0FBQyx3QkFBVSw4REFBQ3JCLG9EQUFXQTs0QkFBQ3NCLE1BQU1WOzRCQUFVVyxNQUFNOzs7OztpREFBYSw4REFBQ1Y7Ozs7Ozs7Ozs7eUNBR3pGLDhEQUFDSTs7Ozs7Ozs7OzswQkFHUCw4REFBQ0o7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNVO29CQUNDQyxTQUFTakI7b0JBQ1RNLFdBQVU7OEJBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7S0FwRHdCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Jlc3VsdHNTZWN0aW9uLnRzeD9jNzNiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZXN1bHRzTGlzdCBmcm9tIFwiLi9SZXN1bHRzTGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzU2VjdGlvbihwcm9wczogYW55KXtcbiAgY29uc3Qge3N0YXR1cywgc2NyYXBlZERhdGEsIHNjcmFwZWREYXRhTGVuZ3RoLCBsb2FkaW5nVGltZSwgc2VsZWN0ZWRFbGVtZW50cyxcbiAgICAgICAgaGFuZGxlUmVkbywgaGVhZGluZ0RhdGEsIHBhcmFncmFwaERhdGEsIGxpbmtEYXRhLCBtZXRhRGF0YSB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwibWQ6dGV4dC0zeGwgdGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi0yXCI+XG4gICAgICAgIFJlc3VsdHNcbiAgICAgIDwvaDE+XG4gICAgICB7c3RhdHVzID09PSBcIlNjcmFwaW5nIHN1Y2Nlc3NmdWxcIiA/IFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtYXgtdy14bCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LWdyZWVuLTUwMCBtYi0xXCI+XG4gICAgICAgICAgU2NyYXBpbmcgc3VjY2Vzc2Z1bCFcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMCBtYi04XCI+XG4gICAgICAgICAgICB7c2NyYXBlZERhdGFMZW5ndGh9IGl0ZW1zIHNjcmFwZWQgaW4ge2xvYWRpbmdUaW1lID8gKGxvYWRpbmdUaW1lIC8gMTAwMCkudG9GaXhlZCgyKSA6IFwidW5rbm93blwifSBzZWNvbmRzIFxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA6XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1heC13LXhsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC1yZWQtNTAwIG1iLTJcIj5cbiAgICAgICAgICBTY3JhcGluZyBlcnJvcjpcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXJlZC01MDAgbWItNFwiPlxuICAgICAgICAgICAge3N0YXR1c31cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTYgdGV4dC1zbVwiPk1ha2Ugc3VyZSB5b3UgZW50ZXJlZCBhIHZhbGlkIFVSTCBhbmQgdGhlIGNvcnJlY3QgYnJvd3Nlci48L3A+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIH1cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInctZnVsbCB0ZXh0LWNlbnRlciBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtYi00XCI+XG4gICAgICAgIHtcbiAgICAgICAgICBzY3JhcGVkRGF0YSA/IFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgeyBzZWxlY3RlZEVsZW1lbnRzLmluY2x1ZGVzKFwiaGVhZGluZ1wiKSA/IDxSZXN1bHRzTGlzdCBkYXRhPXtoZWFkaW5nRGF0YX0gdHlwZT17XCJIZWFkaW5nXCJ9IC8+IDogPGRpdj48L2Rpdj59XG4gICAgICAgICAgICAgIHsgc2VsZWN0ZWRFbGVtZW50cy5pbmNsdWRlcyhcInBhcmFncmFwaFwiKSA/IDxSZXN1bHRzTGlzdCBkYXRhPXtwYXJhZ3JhcGhEYXRhfSB0eXBlPXtcIlBhcmFncmFwaFwifSAvPiA6IDxkaXY+PC9kaXY+fVxuICAgICAgICAgICAgICB7IHNlbGVjdGVkRWxlbWVudHMuaW5jbHVkZXMoXCJsaW5rXCIpID8gPFJlc3VsdHNMaXN0IGRhdGE9e2xpbmtEYXRhfSB0eXBlPXtcIkxpbmtcIn0gLz4gOiA8ZGl2PjwvZGl2Pn1cbiAgICAgICAgICAgICAgeyBzZWxlY3RlZEVsZW1lbnRzLmluY2x1ZGVzKFwibWV0YVwiKSA/IDxSZXN1bHRzTGlzdCBkYXRhPXttZXRhRGF0YX0gdHlwZT17XCJNZXRhXCJ9IC8+IDogPGRpdj48L2Rpdj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVSZWRvfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOnRleHQtYmFzZSB0ZXh0LXNtIG1iLTE2IHB4LTYgcHktMiB0ZXh0LXdoaXRlIGJnLXRlYWwtODAwIHJvdW5kZWQtZnVsbCBob3ZlcjpiZy10ZWFsLTYwMCBkcm9wLXNoYWRvdy1ub25lIGhvdmVyOmRyb3Atc2hhZG93LWxnIHRyYW5zaXRpb24tYWxsXCJcbiAgICAgICAgPlxuICAgICAgICAgIFJlc3RhcnRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcbiJdLCJuYW1lcyI6WyJSZXN1bHRzTGlzdCIsIlJlc3VsdHNTZWN0aW9uIiwicHJvcHMiLCJzdGF0dXMiLCJzY3JhcGVkRGF0YSIsInNjcmFwZWREYXRhTGVuZ3RoIiwibG9hZGluZ1RpbWUiLCJzZWxlY3RlZEVsZW1lbnRzIiwiaGFuZGxlUmVkbyIsImhlYWRpbmdEYXRhIiwicGFyYWdyYXBoRGF0YSIsImxpbmtEYXRhIiwibWV0YURhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJwIiwidG9GaXhlZCIsImgyIiwic2VjdGlvbiIsImluY2x1ZGVzIiwiZGF0YSIsInR5cGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ResultsSection.tsx\n"));

/***/ })

});