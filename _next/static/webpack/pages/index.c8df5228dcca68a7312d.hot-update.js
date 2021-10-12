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
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E \u0414.\u0421 \u0428\u0410\u0425\u041E\u0412"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "introduction",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "\u041F\u0440\u0438\u0432\u0435\u0442! \u042D\u0442\u043E \u043C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u0442\u0443\u0442 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F")), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Features"), __jsx("div", {
    className: "medium-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    source: props.features,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "My blog posts"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "This section demonstrates the power of dynamic imports. Every Markdown file under ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 22
    }
  }, "/md/blog"), " is automatically parsed into a structured TypeScript object and available in the", " ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, "props.posts"), " array. These blog post \"cards\" are implemented in the", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "/components/PostCard.tsx"), " component."), __jsx("div", {
    className: "post-card-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, props.posts.map(function (post, j) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["PostCard"], {
      post: post,
      key: j,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 20
      }
    });
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, "Testimonials"), __jsx("blockquote", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, "Seems like it might be useful!")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, "\u2014 Dan Abramov, taken", " ", __jsx("a", {
    href: "https://github.com/colinhacks/devii/issues/2",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, " ", "utterly out of context")))), __jsx("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImZlYXR1cmVzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUtQO0FBQ0osU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJHQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFVQURGLENBTkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFVLFVBQU0sRUFBRUEsS0FBSyxDQUFDQyxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQVZGLEVBaUJFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJGQUVhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRmIsdUZBR29ELEdBSHBELEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRiw4REFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQU5GLGdCQUZGLEVBVUU7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHRCxLQUFLLENBQUNFLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUM1QixXQUFPLE1BQUMsNkRBQUQ7QUFBVSxVQUFJLEVBQUVELElBQWhCO0FBQXNCLFNBQUcsRUFBRUMsQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0QsR0FGQSxDQURILENBVkYsQ0FqQkYsRUFrQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FDdUIsR0FEdkIsRUFFRTtBQUNFLFFBQUksRUFBQyw4Q0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRyxHQUpILDJCQUZGLENBSkYsQ0FGRixDQWxDRixFQXlFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FGRixDQXpFRixDQURGO0FBa0ZELENBeEZEOztLQUFNTixJOztBQTBGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzhkZjUyMjhkY2NhNjhhNzMxMmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlUlNTIH0gZnJvbSBcIi4uL3Jzc1V0aWxcIjtcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCB7IFBvc3REYXRhLCBsb2FkQmxvZ1Bvc3RzLCBsb2FkTWFya2Rvd25GaWxlIH0gZnJvbSBcIi4uL2xvYWRlclwiO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzOiB7XG4gIGludHJvZHVjdGlvbjogc3RyaW5nO1xuICBmZWF0dXJlczogc3RyaW5nO1xuICByZWFkbWU6IHN0cmluZztcbiAgcG9zdHM6IFBvc3REYXRhW107XG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPtCf0L7RgNGC0YTQvtC70LjQviDQlC7QoSDQqNCQ0KXQntCSPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvZHVjdGlvblwiPlxuICAgICAgICA8aDE+0J/RgNC40LLQtdGCISDQrdGC0L4g0LzQvtC1INC/0L7RgNGC0YTQvtC70LjQviwg0YLRg9GCINCy0Ysg0LzQvtC20LXRgtC1INGB0L4g0LzQvdC+0Lkg0L/QvtC30L3QsNC60L7QvNC40YLRjNGB0Y88L2gxPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+RmVhdHVyZXM8L2gyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGl1bS13aWRlXCI+XG4gICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17cHJvcHMuZmVhdHVyZXN9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+TXkgYmxvZyBwb3N0czwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgc2VjdGlvbiBkZW1vbnN0cmF0ZXMgdGhlIHBvd2VyIG9mIGR5bmFtaWMgaW1wb3J0cy4gRXZlcnkgTWFya2Rvd25cbiAgICAgICAgICBmaWxlIHVuZGVyIDxjb2RlPi9tZC9ibG9nPC9jb2RlPiBpcyBhdXRvbWF0aWNhbGx5IHBhcnNlZCBpbnRvIGFcbiAgICAgICAgICBzdHJ1Y3R1cmVkIFR5cGVTY3JpcHQgb2JqZWN0IGFuZCBhdmFpbGFibGUgaW4gdGhle1wiIFwifVxuICAgICAgICAgIDxjb2RlPnByb3BzLnBvc3RzPC9jb2RlPiBhcnJheS4gVGhlc2UgYmxvZyBwb3N0IFwiY2FyZHNcIiBhcmVcbiAgICAgICAgICBpbXBsZW1lbnRlZCBpbiB0aGVcbiAgICAgICAgICA8Y29kZT4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3g8L2NvZGU+IGNvbXBvbmVudC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvcHMucG9zdHMubWFwKChwb3N0LCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17an0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+VGVzdGltb25pYWxzPC9oMj5cbiAgICAgICAgPGJsb2NrcXVvdGU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8ZW0+U2VlbXMgbGlrZSBpdCBtaWdodCBiZSB1c2VmdWwhPC9lbT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICDigJQgRGFuIEFicmFtb3YsIHRha2Vue1wiIFwifVxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpL2lzc3Vlcy8yXCJcbiAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICB1dHRlcmx5IG91dCBvZiBjb250ZXh0XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+UkVBRE1FLm1kPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQmVsb3cgaXMgdGhlIFJFQURNRS5tZCBmb3IgZGV2aWkuIEl0IHdhcyBpbXBvcnRlZCBhbmQgcmVuZGVyZWQgdXNpbmdcbiAgICAgICAgICBOZXh0LmpzIGR5bmFtaWMgaW1wb3J0cy4gVGhlIHJlc3Qgb2YgdGhpcyBwYWdlIChpbmNsdWRpbmcgdGhpc1xuICAgICAgICAgIHBhcmFncmFwaCkgYXJlIHJlbmRlcmVkIHdpdGggUmVhY3QuIFlvdSBjYW4gYWxzbyByZWFkIHRoZSBSRUFETUUgb25cbiAgICAgICAgICBHaXRIdWIgYXR7JyAnfVxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy9kZXZpaVwiPlxuICAgICAgICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2NvbGluaGFja3MvZGV2aWlcbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgLlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYWx0ZXJuYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmFycm93XCI+XG4gICAgICAgICAgPE1hcmtkb3duIHNvdXJjZT17cHJvcHMucmVhZG1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGFsdGVybmF0ZVwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY2VudGVyZWRcIj5HZXQgc3RhcnRlZDwvaDI+XG4gICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy9kZXZpaVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiZm9yay1idXR0b25cIj5HbyB0byBSRUFETUU8L2J1dHRvbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGludHJvZHVjdGlvbiA9IGF3YWl0IGxvYWRNYXJrZG93bkZpbGUoXCJpbnRyb2R1Y3Rpb24ubWRcIik7XG4gIGNvbnN0IGZlYXR1cmVzID0gYXdhaXQgbG9hZE1hcmtkb3duRmlsZShcImZlYXR1cmVzLm1kXCIpO1xuICBjb25zdCByZWFkbWVGaWxlID0gYXdhaXQgaW1wb3J0KGAuLi8ke1wiUkVBRE1FLm1kXCJ9YCk7XG4gIGNvbnN0IHJlYWRtZSA9IHJlYWRtZUZpbGUuZGVmYXVsdDtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBsb2FkQmxvZ1Bvc3RzKCk7XG5cbiAgLy8gY29tbWVudCBvdXQgdG8gdHVybiBvZmYgUlNTIGdlbmVyYXRpb24gZHVyaW5nIGJ1aWxkIHN0ZXAuXG4gIGF3YWl0IGdlbmVyYXRlUlNTKHBvc3RzKTtcblxuICBjb25zdCBwcm9wcyA9IHtcbiAgICBpbnRyb2R1Y3Rpb246IGludHJvZHVjdGlvbi5jb250ZW50cyxcbiAgICBmZWF0dXJlczogZmVhdHVyZXMuY29udGVudHMsXG4gICAgcmVhZG1lOiByZWFkbWUsXG4gICAgcG9zdHMsXG4gIH07XG5cbiAgcmV0dXJuIHsgcHJvcHMgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9