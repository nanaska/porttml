webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/PostCard */ "./components/PostCard.tsx");
var _this = undefined,
    _jsxFileName = "C:\\Users\\Denis\\Desktop\\devil\\pages\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Home = function Home(props) {
  return __jsx("div", {
    className: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0414.\u0421 \u0428\u0410\u0425\u041E\u0412"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "introduction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "\u041F\u0440\u0438\u0432\u0435\u0442! \u042D\u0442\u043E \u043C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u0442\u0443\u0442 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F")), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "\u041E\u0431\u043E \u043C\u043D\u0435"), __jsx("div", {
    className: "medium-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    source: props.obombe,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "My blog posts"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, "This section demonstrates the power of dynamic imports. Every Markdown file under ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 22
    }
  }, "/md/blog"), " is automatically parsed into a structured TypeScript object and available in the", " ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "props.posts"), " array. These blog post \"cards\" are implemented in the", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "/components/PostCard.tsx"), " component."), __jsx("div", {
    className: "post-card-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, props.posts.map(function (post, j) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["PostCard"], {
      post: post,
      key: j,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 20
      }
    });
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, "\u0412\u0440\u0435\u043C\u044F \u0444\u0430\u043A\u0442\u043E\u0432"), __jsx("blockquote", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430", " ", __jsx("a", {
    href: "https://nextjs.org/",
    className: "siniy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Next js"), " ", "+", " ", __jsx("a", {
    href: "https://github.com/colinhacks/devii",
    className: "siniy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }, "Devii"))))), __jsx("div", {
    className: "section alternate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, "Get started"), __jsx("a", {
    href: "https://github.com/colinhacks/devii",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "fork-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Go to README"))));
};

_c = Home;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm9ib21iZSIsInBvc3RzIiwibWFwIiwicG9zdCIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFNUDtBQUNKLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyR0FERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxVUFERixDQU5GLEVBVUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVSxVQUFNLEVBQUVBLEtBQUssQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FWRixFQWlCRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRkFFYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZiLHVGQUdvRCxHQUhwRCxFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsOERBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FORixnQkFGRixFQVVFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDNUIsV0FBTyxNQUFDLDZEQUFEO0FBQVUsVUFBSSxFQUFFRCxJQUFoQjtBQUFzQixTQUFHLEVBQUVDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkEsQ0FESCxDQVZGLENBakJGLEVBa0NFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0hBQ3VCLEdBRHZCLEVBRUU7QUFBRyxRQUFJLEVBQUMscUJBQVI7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUlPLEdBSlAsT0FLSSxHQUxKLEVBTUU7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBOEMsYUFBUyxFQUFDLE9BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixDQURGLENBREYsQ0FGRixDQWxDRixFQXdFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FGRixDQXhFRixDQURGO0FBaUZELENBeEZEOztLQUFNTixJOztBQTBGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDRiY2M4OTA4MjUyMmM2NTQ3ZTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlUlNTIH0gZnJvbSBcIi4uL3Jzc1V0aWxcIjtcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCB7IFBvc3REYXRhLCBsb2FkQmxvZ1Bvc3RzLCBsb2FkTWFya2Rvd25GaWxlIH0gZnJvbSBcIi4uL2xvYWRlclwiO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzOiB7XG4gIGludHJvZHVjdGlvbjogc3RyaW5nO1xuICBmZWF0dXJlczogc3RyaW5nO1xuICBvYm9tYmU6IHN0cmluZztcbiAgcmVhZG1lOiBzdHJpbmc7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qn9C+0YDRgtGE0L7Qu9C40L4g0JQu0KEg0KjQkNCl0J7QkjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgPGgxPtCf0YDQuNCy0LXRgiEg0K3RgtC+INC80L7QtSDQv9C+0YDRgtGE0L7Qu9C40L4sINGC0YPRgiDQstGLINC80L7QttC10YLQtSDRgdC+INC80L3QvtC5INC/0L7Qt9C90LDQutC+0LzQuNGC0YzRgdGPPC9oMT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGgyPtCe0LHQviDQvNC90LU8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS13aWRlXCI+XG4gICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17cHJvcHMub2JvbWJlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGgyPk15IGJsb2cgcG9zdHM8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIHNlY3Rpb24gZGVtb25zdHJhdGVzIHRoZSBwb3dlciBvZiBkeW5hbWljIGltcG9ydHMuIEV2ZXJ5IE1hcmtkb3duXG4gICAgICAgICAgZmlsZSB1bmRlciA8Y29kZT4vbWQvYmxvZzwvY29kZT4gaXMgYXV0b21hdGljYWxseSBwYXJzZWQgaW50byBhXG4gICAgICAgICAgc3RydWN0dXJlZCBUeXBlU2NyaXB0IG9iamVjdCBhbmQgYXZhaWxhYmxlIGluIHRoZXtcIiBcIn1cbiAgICAgICAgICA8Y29kZT5wcm9wcy5wb3N0czwvY29kZT4gYXJyYXkuIFRoZXNlIGJsb2cgcG9zdCBcImNhcmRzXCIgYXJlXG4gICAgICAgICAgaW1wbGVtZW50ZWQgaW4gdGhlXG4gICAgICAgICAgPGNvZGU+L2NvbXBvbmVudHMvUG9zdENhcmQudHN4PC9jb2RlPiBjb21wb25lbnQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LWNhcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb3BzLnBvc3RzLm1hcCgocG9zdCwgaikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxQb3N0Q2FyZCBwb3N0PXtwb3N0fSBrZXk9e2p9IC8+O1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGgyPtCS0YDQtdC80Y8g0YTQsNC60YLQvtCyPC9oMj5cbiAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8ZW0+XG4gICAgICAgICAgICAgINCt0YLQvtGCINGB0LDQudGCINC90LDQv9C40YHQsNC9INC90LB7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL25leHRqcy5vcmcvXCIgY2xhc3NOYW1lPVwic2luaXlcIj5cbiAgICAgICAgICAgICAgICBOZXh0IGpzXG4gICAgICAgICAgICAgIDwvYT57XCIgXCJ9XG4gICAgICAgICAgICAgICt7XCIgXCJ9XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy9kZXZpaVwiIGNsYXNzTmFtZT1cInNpbml5XCI+XG4gICAgICAgICAgICAgICAgRGV2aWlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9lbT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoMj5SRUFETUUubWQ8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCZWxvdyBpcyB0aGUgUkVBRE1FLm1kIGZvciBkZXZpaS4gSXQgd2FzIGltcG9ydGVkIGFuZCByZW5kZXJlZCB1c2luZ1xuICAgICAgICAgIE5leHQuanMgZHluYW1pYyBpbXBvcnRzLiBUaGUgcmVzdCBvZiB0aGlzIHBhZ2UgKGluY2x1ZGluZyB0aGlzXG4gICAgICAgICAgcGFyYWdyYXBoKSBhcmUgcmVuZGVyZWQgd2l0aCBSZWFjdC4gWW91IGNhbiBhbHNvIHJlYWQgdGhlIFJFQURNRSBvblxuICAgICAgICAgIEdpdEh1YiBhdHsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXCI+XG4gICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy9kZXZpaVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBhbHRlcm5hdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXJyb3dcIj5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtwcm9wcy5yZWFkbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYWx0ZXJuYXRlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPkdldCBzdGFydGVkPC9oMj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JrLWJ1dHRvblwiPkdvIHRvIFJFQURNRTwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaW50cm9kdWN0aW9uID0gYXdhaXQgbG9hZE1hcmtkb3duRmlsZShcImludHJvZHVjdGlvbi5tZFwiKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKFwiZmVhdHVyZXMubWRcIik7XG4gIGNvbnN0IHJlYWRtZUZpbGUgPSBhd2FpdCBpbXBvcnQoYC4uLyR7XCJSRUFETUUubWRcIn1gKTtcbiAgY29uc3QgcmVhZG1lID0gcmVhZG1lRmlsZS5kZWZhdWx0O1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGxvYWRCbG9nUG9zdHMoKTtcblxuICAvLyBjb21tZW50IG91dCB0byB0dXJuIG9mZiBSU1MgZ2VuZXJhdGlvbiBkdXJpbmcgYnVpbGQgc3RlcC5cbiAgYXdhaXQgZ2VuZXJhdGVSU1MocG9zdHMpO1xuXG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGludHJvZHVjdGlvbjogaW50cm9kdWN0aW9uLmNvbnRlbnRzLFxuICAgIGZlYXR1cmVzOiBmZWF0dXJlcy5jb250ZW50cyxcbiAgICByZWFkbWU6IHJlYWRtZSxcbiAgICBwb3N0cyxcbiAgfTtcblxuICByZXR1cm4geyBwcm9wcyB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=