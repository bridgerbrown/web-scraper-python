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

/***/ "(app-pages-browser)/./app/home.tsx":
/*!**********************!*\
  !*** ./app/home.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Navbar */ \"(app-pages-browser)/./components/Navbar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react-experimental/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Footer */ \"(app-pages-browser)/./components/Footer.tsx\");\n/* harmony import */ var _components_ResultsSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/ResultsSection */ \"(app-pages-browser)/./components/ResultsSection.tsx\");\n/* harmony import */ var _components_StartSection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/StartSection */ \"(app-pages-browser)/./components/StartSection.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Loading */ \"(app-pages-browser)/./components/Loading.tsx\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const startSectionCSS = \"bg-white drop-shadow-xl md:w-[750px] w-11/12 min-h-[775px] border border-gray-400 \\n    rounded-md mt-12 justify-center items-center flex flex-col\";\n    const resultsSectionCSS = \"pt-14 bg-white drop-shadow-xl md:w-[750px] w-11/12 min-h-[775px] border border-gray-400 \\n    rounded-md mt-12 justify-start items-center flex flex-col\";\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [selectedElements, setSelectedElements] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [browser, setBrowser] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [urlError, setUrlError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [elementsError, setElementsError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [browserError, setBrowserError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [scrapedData, setScrapedData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    const [submitted, setSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [loadingTime, setLoadingTime] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const [headingData, setHeadingData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [paragraphData, setParagraphData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [linkData, setLinkData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [metaData, setMetaData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const scrapedDataLength = headingData.length + paragraphData.length + linkData.length + metaData.length;\n    const handleUrlChange = (event)=>{\n        const newUrl = event.target.value;\n        setUrl(newUrl);\n        setUrlError(false);\n    };\n    const handleCheckboxChange = (event)=>{\n        const { value } = event.target;\n        if (event.target.checked) {\n            setSelectedElements((prev)=>[\n                    ...prev,\n                    value\n                ]);\n            setElementsError(false);\n        } else {\n            setSelectedElements((prev)=>prev.filter((element)=>element !== value));\n        }\n    };\n    const handleRadioChange = (event)=>{\n        const { value } = event.target;\n        setBrowser(value);\n        setBrowserError(false);\n    };\n    const handleSubmit = async (event)=>{\n        setLoading(true);\n        setLoadingTime(performance.now());\n        setSubmitted(true);\n        event.preventDefault();\n        if (!url) setUrlError(true);\n        if (!selectedElements.length) setElementsError(true);\n        if (!browser) setBrowserError(true);\n        if (!url || !selectedElements.length) return;\n        await handleScraper();\n        setLoading(false);\n    };\n    const handleRedo = async (event)=>{\n        event.preventDefault();\n        setSubmitted(false);\n        setScrapedData([]);\n        setUrl(\"\");\n        setSelectedElements([]);\n        setHeadingData([]);\n        setParagraphData([]);\n        setLinkData([]);\n        setMetaData([]);\n        setUrlError(false);\n        setElementsError(false);\n        setBrowserError(false);\n        setStatus(\"\");\n        setLoadingTime(0);\n    };\n    const handleScraper = async ()=>{\n        try {\n            const requestData = {\n                url: url,\n                element_types: selectedElements,\n                browser: browser\n            };\n            const res = await axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].post(\"https://web-scraper-python-server.onrender.com/scrape\", requestData);\n            setLoading(false);\n            setLoadingTime((prev)=>performance.now() - prev);\n            setStatus(res.data.error ? res.data.error : res.data.message);\n            setScrapedData(res.data.data);\n            const heading_data = res.data.data[0].length ? [\n                ...res.data.data[0].map((item)=>[\n                        item[0],\n                        item[1]\n                    ])\n            ] : [];\n            const paragraph_data = res.data.data[1].length ? [\n                ...res.data.data[1].map((item)=>item)\n            ] : [];\n            const link_data = res.data.data[2].length ? [\n                ...res.data.data[2].map((item)=>[\n                        item[0],\n                        item[1]\n                    ])\n            ] : [];\n            const meta_data = res.data.data[3].length ? [\n                ...res.data.data[3].map((item)=>JSON.stringify(item))\n            ] : [];\n            setHeadingData(heading_data);\n            setParagraphData(paragraph_data);\n            setLinkData(link_data);\n            setMetaData(meta_data);\n        } catch (error) {\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(scrapedData);\n    }, [\n        loading,\n        scrapedData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"bg-teal-100 relative pb-60\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                lineNumber: 118,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen flex justify-center items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: submitted && !loading ? resultsSectionCSS : startSectionCSS,\n                    children: submitted ? loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                        lineNumber: 126,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ResultsSection__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        status: status,\n                        scrapedData: scrapedData,\n                        scrapedDataLength: scrapedDataLength,\n                        loadingTime: loadingTime,\n                        selectedElements: selectedElements,\n                        handleRedo: handleRedo,\n                        headingData: headingData,\n                        paragraphData: paragraphData,\n                        linkData: linkData,\n                        metaData: metaData\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                        lineNumber: 128,\n                        columnNumber: 15\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_StartSection__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        url: url,\n                        urlError: urlError,\n                        handleUrlChange: handleUrlChange,\n                        setUrl: setUrl,\n                        handleCheckboxChange: handleCheckboxChange,\n                        elementsError: elementsError,\n                        browserError: browserError,\n                        handleRadioChange: handleRadioChange,\n                        handleSubmit: handleSubmit\n                    }, void 0, false, {\n                        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                        lineNumber: 141,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                lineNumber: 119,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n                lineNumber: 155,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bridgerbrown/Documents/Programming/Projects/web-scraper-python/frontend/app/home.tsx\",\n        lineNumber: 117,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"5f96PIc3nAQARrKW0/76hz88Z5w=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3dCQUNqQi9CLFFBQVFBO3dCQUNSb0Msc0JBQXNCQTt3QkFDdEI3QixlQUFlQTt3QkFDZkUsY0FBY0E7d0JBQ2RnQyxtQkFBbUJBO3dCQUNuQkMsY0FBY0E7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBS3RCLDhEQUFDbkQsMERBQU1BOzs7Ozs7Ozs7OztBQUdiO0dBcEp3Qks7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUudHN4PzFmZTEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIkAvY29tcG9uZW50cy9OYXZiYXJcIjtcbmltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50LCB1c2VFZmZlY3R9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiQC9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IFJlc3VsdHNTZWN0aW9uIGZyb20gXCJAL2NvbXBvbmVudHMvUmVzdWx0c1NlY3Rpb25cIjtcbmltcG9ydCBTdGFydFNlY3Rpb24gZnJvbSBcIkAvY29tcG9uZW50cy9TdGFydFNlY3Rpb25cIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCJAL2NvbXBvbmVudHMvTG9hZGluZ1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBzdGFydFNlY3Rpb25DU1M6IHN0cmluZyA9IGBiZy13aGl0ZSBkcm9wLXNoYWRvdy14bCBtZDp3LVs3NTBweF0gdy0xMS8xMiBtaW4taC1bNzc1cHhdIGJvcmRlciBib3JkZXItZ3JheS00MDAgXG4gICAgcm91bmRlZC1tZCBtdC0xMiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleCBmbGV4LWNvbGA7XG4gIGNvbnN0IHJlc3VsdHNTZWN0aW9uQ1NTOiBzdHJpbmcgPSBgcHQtMTQgYmctd2hpdGUgZHJvcC1zaGFkb3cteGwgbWQ6dy1bNzUwcHhdIHctMTEvMTIgbWluLWgtWzc3NXB4XSBib3JkZXIgYm9yZGVyLWdyYXktNDAwIFxuICAgIHJvdW5kZWQtbWQgbXQtMTIganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXIgZmxleCBmbGV4LWNvbGA7XG5cbiAgY29uc3QgW3VybCwgc2V0VXJsXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtzZWxlY3RlZEVsZW1lbnRzLCBzZXRTZWxlY3RlZEVsZW1lbnRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XG4gIGNvbnN0IFticm93c2VyLCBzZXRCcm93c2VyXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFt1cmxFcnJvciwgc2V0VXJsRXJyb3JdID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbZWxlbWVudHNFcnJvciwgc2V0RWxlbWVudHNFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFticm93c2VyRXJyb3IsIHNldEJyb3dzZXJFcnJvcl0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG4gIGNvbnN0IFtzdGF0dXMsIHNldFN0YXR1c10gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbc2NyYXBlZERhdGEsIHNldFNjcmFwZWREYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcbiAgY29uc3QgW3N1Ym1pdHRlZCwgc2V0U3VibWl0dGVkXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuICBjb25zdCBbbG9hZGluZ1RpbWUsIHNldExvYWRpbmdUaW1lXSA9IHVzZVN0YXRlPG51bWJlcj4oMCk7XG5cbiAgY29uc3QgW2hlYWRpbmdEYXRhLCBzZXRIZWFkaW5nRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbcGFyYWdyYXBoRGF0YSwgc2V0UGFyYWdyYXBoRGF0YV0gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbGlua0RhdGEsIHNldExpbmtEYXRhXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IFttZXRhRGF0YSwgc2V0TWV0YURhdGFdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcblxuICBjb25zdCBzY3JhcGVkRGF0YUxlbmd0aCA9IGhlYWRpbmdEYXRhLmxlbmd0aCArIHBhcmFncmFwaERhdGEubGVuZ3RoICsgbGlua0RhdGEubGVuZ3RoICsgbWV0YURhdGEubGVuZ3RoOyBcblxuICBjb25zdCBoYW5kbGVVcmxDaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgbmV3VXJsID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHNldFVybChuZXdVcmwpO1xuICAgIHNldFVybEVycm9yKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBzZXRTZWxlY3RlZEVsZW1lbnRzKChwcmV2KSA9PiBbLi4ucHJldiwgdmFsdWVdKTtcbiAgICAgIHNldEVsZW1lbnRzRXJyb3IoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZEVsZW1lbnRzKChwcmV2KSA9PiBwcmV2LmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudCAhPT0gdmFsdWUpKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmFkaW9DaGFuZ2UgPSAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgIHNldEJyb3dzZXIodmFsdWUpO1xuICAgIHNldEJyb3dzZXJFcnJvcihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50OiBGb3JtRXZlbnQpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgIHNldExvYWRpbmdUaW1lKHBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICBzZXRTdWJtaXR0ZWQodHJ1ZSk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoIXVybCkgc2V0VXJsRXJyb3IodHJ1ZSk7XG4gICAgaWYgKCFzZWxlY3RlZEVsZW1lbnRzLmxlbmd0aCkgc2V0RWxlbWVudHNFcnJvcih0cnVlKTtcbiAgICBpZiAoIWJyb3dzZXIpIHNldEJyb3dzZXJFcnJvcih0cnVlKTtcbiAgICBpZiAoIXVybCB8fCAhc2VsZWN0ZWRFbGVtZW50cy5sZW5ndGgpIHJldHVybjtcbiAgICBhd2FpdCBoYW5kbGVTY3JhcGVyKCk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUmVkbyA9IGFzeW5jIChldmVudDogRm9ybUV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRTdWJtaXR0ZWQoZmFsc2UpO1xuICAgIHNldFNjcmFwZWREYXRhKFtdKTtcbiAgICBzZXRVcmwoXCJcIik7XG4gICAgc2V0U2VsZWN0ZWRFbGVtZW50cyhbXSk7XG4gICAgc2V0SGVhZGluZ0RhdGEoW10pO1xuICAgIHNldFBhcmFncmFwaERhdGEoW10pO1xuICAgIHNldExpbmtEYXRhKFtdKTtcbiAgICBzZXRNZXRhRGF0YShbXSk7XG4gICAgc2V0VXJsRXJyb3IoZmFsc2UpO1xuICAgIHNldEVsZW1lbnRzRXJyb3IoZmFsc2UpO1xuICAgIHNldEJyb3dzZXJFcnJvcihmYWxzZSk7XG4gICAgc2V0U3RhdHVzKFwiXCIpO1xuICAgIHNldExvYWRpbmdUaW1lKDApO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVNjcmFwZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcXVlc3REYXRhID0ge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZWxlbWVudF90eXBlczogc2VsZWN0ZWRFbGVtZW50cyxcbiAgICAgICAgYnJvd3NlcjogYnJvd3NlclxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoJ2h0dHBzOi8vd2ViLXNjcmFwZXItcHl0aG9uLXNlcnZlci5vbnJlbmRlci5jb20vc2NyYXBlJywgcmVxdWVzdERhdGEpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICBzZXRMb2FkaW5nVGltZSgocHJldikgPT4gcGVyZm9ybWFuY2Uubm93KCkgLSBwcmV2KTtcbiAgICAgIHNldFN0YXR1cyhyZXMuZGF0YS5lcnJvciA/IHJlcy5kYXRhLmVycm9yIDogcmVzLmRhdGEubWVzc2FnZSk7XG4gICAgICBzZXRTY3JhcGVkRGF0YShyZXMuZGF0YS5kYXRhKTtcbiAgICAgIGNvbnN0IGhlYWRpbmdfZGF0YSA9IHJlcy5kYXRhLmRhdGFbMF0ubGVuZ3RoID8gWy4uLnJlcy5kYXRhLmRhdGFbMF0ubWFwKChpdGVtOiBhbnkpID0+IFtpdGVtWzBdLCBpdGVtWzFdXSldIDogW107XG4gICAgICBjb25zdCBwYXJhZ3JhcGhfZGF0YSA9IHJlcy5kYXRhLmRhdGFbMV0ubGVuZ3RoID8gWy4uLnJlcy5kYXRhLmRhdGFbMV0ubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0pXSA6IFtdO1xuICAgICAgY29uc3QgbGlua19kYXRhID0gcmVzLmRhdGEuZGF0YVsyXS5sZW5ndGggPyBbLi4ucmVzLmRhdGEuZGF0YVsyXS5tYXAoKGl0ZW06IGFueSkgPT4gW2l0ZW1bMF0sIGl0ZW1bMV1dKV0gOiBbXTtcbiAgICAgIGNvbnN0IG1ldGFfZGF0YSA9IHJlcy5kYXRhLmRhdGFbM10ubGVuZ3RoID8gWy4uLnJlcy5kYXRhLmRhdGFbM10ubWFwKChpdGVtOiBhbnkpID0+IEpTT04uc3RyaW5naWZ5KGl0ZW0pKV0gOiBbXTtcbiAgICAgIHNldEhlYWRpbmdEYXRhKGhlYWRpbmdfZGF0YSk7XG4gICAgICBzZXRQYXJhZ3JhcGhEYXRhKHBhcmFncmFwaF9kYXRhKTtcbiAgICAgIHNldExpbmtEYXRhKGxpbmtfZGF0YSk7XG4gICAgICBzZXRNZXRhRGF0YShtZXRhX2RhdGEpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2NyYXBlZERhdGEpO1xuICB9LCBbbG9hZGluZywgc2NyYXBlZERhdGFdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImJnLXRlYWwtMTAwIHJlbGF0aXZlIHBiLTYwXCI+XG4gICAgICA8TmF2YmFyIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3VibWl0dGVkICYmICFsb2FkaW5nID8gcmVzdWx0c1NlY3Rpb25DU1MgOiBzdGFydFNlY3Rpb25DU1N9PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN1Ym1pdHRlZFxuICAgICAgICAgICAgP1xuICAgICAgICAgICAgICBsb2FkaW5nIFxuICAgICAgICAgICAgICA/XG4gICAgICAgICAgICAgIDxMb2FkaW5nIC8+XG4gICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgPFJlc3VsdHNTZWN0aW9uXG4gICAgICAgICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XG4gICAgICAgICAgICAgICAgc2NyYXBlZERhdGE9e3NjcmFwZWREYXRhfVxuICAgICAgICAgICAgICAgIHNjcmFwZWREYXRhTGVuZ3RoPXtzY3JhcGVkRGF0YUxlbmd0aH1cbiAgICAgICAgICAgICAgICBsb2FkaW5nVGltZT17bG9hZGluZ1RpbWV9XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRFbGVtZW50cz17c2VsZWN0ZWRFbGVtZW50c31cbiAgICAgICAgICAgICAgICBoYW5kbGVSZWRvPXtoYW5kbGVSZWRvfVxuICAgICAgICAgICAgICAgIGhlYWRpbmdEYXRhPXtoZWFkaW5nRGF0YX1cbiAgICAgICAgICAgICAgICBwYXJhZ3JhcGhEYXRhPXtwYXJhZ3JhcGhEYXRhfVxuICAgICAgICAgICAgICAgIGxpbmtEYXRhPXtsaW5rRGF0YX1cbiAgICAgICAgICAgICAgICBtZXRhRGF0YT17bWV0YURhdGF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8U3RhcnRTZWN0aW9uXG4gICAgICAgICAgICAgIHVybD17dXJsfVxuICAgICAgICAgICAgICB1cmxFcnJvcj17dXJsRXJyb3J9XG4gICAgICAgICAgICAgIGhhbmRsZVVybENoYW5nZT17aGFuZGxlVXJsQ2hhbmdlfVxuICAgICAgICAgICAgICBzZXRVcmw9e3NldFVybH1cbiAgICAgICAgICAgICAgaGFuZGxlQ2hlY2tib3hDaGFuZ2U9e2hhbmRsZUNoZWNrYm94Q2hhbmdlfVxuICAgICAgICAgICAgICBlbGVtZW50c0Vycm9yPXtlbGVtZW50c0Vycm9yfVxuICAgICAgICAgICAgICBicm93c2VyRXJyb3I9e2Jyb3dzZXJFcnJvcn1cbiAgICAgICAgICAgICAgaGFuZGxlUmFkaW9DaGFuZ2U9e2hhbmRsZVJhZGlvQ2hhbmdlfVxuICAgICAgICAgICAgICBoYW5kbGVTdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8L21haW4+XG4gIClcbn07XG4iXSwibmFtZXMiOlsiTmF2YmFyIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkZvb3RlciIsIlJlc3VsdHNTZWN0aW9uIiwiU3RhcnRTZWN0aW9uIiwiTG9hZGluZyIsImF4aW9zIiwiSG9tZSIsInN0YXJ0U2VjdGlvbkNTUyIsInJlc3VsdHNTZWN0aW9uQ1NTIiwidXJsIiwic2V0VXJsIiwic2VsZWN0ZWRFbGVtZW50cyIsInNldFNlbGVjdGVkRWxlbWVudHMiLCJicm93c2VyIiwic2V0QnJvd3NlciIsInVybEVycm9yIiwic2V0VXJsRXJyb3IiLCJlbGVtZW50c0Vycm9yIiwic2V0RWxlbWVudHNFcnJvciIsImJyb3dzZXJFcnJvciIsInNldEJyb3dzZXJFcnJvciIsInN0YXR1cyIsInNldFN0YXR1cyIsInNjcmFwZWREYXRhIiwic2V0U2NyYXBlZERhdGEiLCJzdWJtaXR0ZWQiLCJzZXRTdWJtaXR0ZWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImxvYWRpbmdUaW1lIiwic2V0TG9hZGluZ1RpbWUiLCJoZWFkaW5nRGF0YSIsInNldEhlYWRpbmdEYXRhIiwicGFyYWdyYXBoRGF0YSIsInNldFBhcmFncmFwaERhdGEiLCJsaW5rRGF0YSIsInNldExpbmtEYXRhIiwibWV0YURhdGEiLCJzZXRNZXRhRGF0YSIsInNjcmFwZWREYXRhTGVuZ3RoIiwibGVuZ3RoIiwiaGFuZGxlVXJsQ2hhbmdlIiwiZXZlbnQiLCJuZXdVcmwiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZUNoZWNrYm94Q2hhbmdlIiwiY2hlY2tlZCIsInByZXYiLCJmaWx0ZXIiLCJlbGVtZW50IiwiaGFuZGxlUmFkaW9DaGFuZ2UiLCJoYW5kbGVTdWJtaXQiLCJwZXJmb3JtYW5jZSIsIm5vdyIsInByZXZlbnREZWZhdWx0IiwiaGFuZGxlU2NyYXBlciIsImhhbmRsZVJlZG8iLCJyZXF1ZXN0RGF0YSIsImVsZW1lbnRfdHlwZXMiLCJyZXMiLCJwb3N0IiwiZGF0YSIsImVycm9yIiwibWVzc2FnZSIsImhlYWRpbmdfZGF0YSIsIm1hcCIsIml0ZW0iLCJwYXJhZ3JhcGhfZGF0YSIsImxpbmtfZGF0YSIsIm1ldGFfZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsInNlY3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home.tsx\n"));

/***/ })

});