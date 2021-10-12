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
  }, "\u041F\u0440\u0438\u0432\u0435\u0442! \u042D\u0442\u043E \u043C\u043E\u0435 \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E, \u0442\u0443\u0442 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0441\u043E \u043C\u043D\u043E\u0439 \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F"), __jsx("br", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("hr", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\u041E\u0431\u043E \u043C\u043D\u0435"), __jsx("div", {
    className: "medium-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    source: props.obombe,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }, "My blog posts"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "This section demonstrates the power of dynamic imports. Every Markdown file under ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 22
    }
  }, "/md/blog"), " is automatically parsed into a structured TypeScript object and available in the", " ", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "props.posts"), " array. These blog post \"cards\" are implemented in the", __jsx("code", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "/components/PostCard.tsx"), " component."), __jsx("div", {
    className: "post-card-container",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, props.posts.map(function (post, j) {
    return __jsx(_components_PostCard__WEBPACK_IMPORTED_MODULE_3__["PostCard"], {
      post: post,
      key: j,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 20
      }
    });
  }))), __jsx("div", {
    className: "section",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\u0412\u0440\u0435\u043C\u044F \u0444\u0430\u043A\u0442\u043E\u0432"), __jsx("blockquote", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("em", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, "\u042D\u0442\u043E\u0442 \u0441\u0430\u0439\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D \u043D\u0430", " ", __jsx("a", {
    href: "https://nextjs.org/",
    className: "siniy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, "Next js"), " ", "+", " ", __jsx("a", {
    href: "https://github.com/colinhacks/devii",
    className: "siniy",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }, "Devii"))))), __jsx("div", {
    className: "section alternate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "Get started"), __jsx("a", {
    href: "https://github.com/colinhacks/devii",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "fork-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsIm9ib21iZSIsInBvc3RzIiwibWFwIiwicG9zdCIsImoiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUVBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLEtBQUQsRUFNUDtBQUNKLFNBQ0U7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyR0FERixFQUVFO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxVUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQU5GLEVBWUU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBVSxVQUFNLEVBQUVBLEtBQUssQ0FBQ0MsTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FaRixFQW1CRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRkFFYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZiLHVGQUdvRCxHQUhwRCxFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsOERBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FORixnQkFGRixFQVVFO0FBQUssYUFBUyxFQUFDLHFCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0QsS0FBSyxDQUFDRSxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDNUIsV0FBTyxNQUFDLDZEQUFEO0FBQVUsVUFBSSxFQUFFRCxJQUFoQjtBQUFzQixTQUFHLEVBQUVDLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNELEdBRkEsQ0FESCxDQVZGLENBbkJGLEVBb0NFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkVBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0hBQ3VCLEdBRHZCLEVBRUU7QUFBRyxRQUFJLEVBQUMscUJBQVI7QUFBOEIsYUFBUyxFQUFDLE9BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixFQUlPLEdBSlAsT0FLSSxHQUxKLEVBTUU7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBOEMsYUFBUyxFQUFDLE9BQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixDQURGLENBREYsQ0FGRixDQXBDRixFQTBFRTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUU7QUFBRyxRQUFJLEVBQUMscUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FGRixDQTFFRixDQURGO0FBbUZELENBMUZEOztLQUFNTixJOztBQTRGU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzkxNjJmMzc2ZDFhOTMyOGYxNTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGdlbmVyYXRlUlNTIH0gZnJvbSBcIi4uL3Jzc1V0aWxcIjtcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCB7IFBvc3REYXRhLCBsb2FkQmxvZ1Bvc3RzLCBsb2FkTWFya2Rvd25GaWxlIH0gZnJvbSBcIi4uL2xvYWRlclwiO1xuaW1wb3J0IHsgUG9zdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qb3N0Q2FyZFwiO1xuXG5jb25zdCBIb21lID0gKHByb3BzOiB7XG4gIGludHJvZHVjdGlvbjogc3RyaW5nO1xuICBmZWF0dXJlczogc3RyaW5nO1xuICBvYm9tYmU6IHN0cmluZztcbiAgcmVhZG1lOiBzdHJpbmc7XG4gIHBvc3RzOiBQb3N0RGF0YVtdO1xufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT7Qn9C+0YDRgtGE0L7Qu9C40L4g0JQu0KEg0KjQkNCl0J7QkjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb2R1Y3Rpb25cIj5cbiAgICAgICAgPGgxPtCf0YDQuNCy0LXRgiEg0K3RgtC+INC80L7QtSDQv9C+0YDRgtGE0L7Qu9C40L4sINGC0YPRgiDQstGLINC80L7QttC10YLQtSDRgdC+INC80L3QvtC5INC/0L7Qt9C90LDQutC+0LzQuNGC0YzRgdGPPC9oMT5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxociAvPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+0J7QsdC+INC80L3QtTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLXdpZGVcIj5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtwcm9wcy5vYm9tYmV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+TXkgYmxvZyBwb3N0czwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgc2VjdGlvbiBkZW1vbnN0cmF0ZXMgdGhlIHBvd2VyIG9mIGR5bmFtaWMgaW1wb3J0cy4gRXZlcnkgTWFya2Rvd25cbiAgICAgICAgICBmaWxlIHVuZGVyIDxjb2RlPi9tZC9ibG9nPC9jb2RlPiBpcyBhdXRvbWF0aWNhbGx5IHBhcnNlZCBpbnRvIGFcbiAgICAgICAgICBzdHJ1Y3R1cmVkIFR5cGVTY3JpcHQgb2JqZWN0IGFuZCBhdmFpbGFibGUgaW4gdGhle1wiIFwifVxuICAgICAgICAgIDxjb2RlPnByb3BzLnBvc3RzPC9jb2RlPiBhcnJheS4gVGhlc2UgYmxvZyBwb3N0IFwiY2FyZHNcIiBhcmVcbiAgICAgICAgICBpbXBsZW1lbnRlZCBpbiB0aGVcbiAgICAgICAgICA8Y29kZT4vY29tcG9uZW50cy9Qb3N0Q2FyZC50c3g8L2NvZGU+IGNvbXBvbmVudC5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3QtY2FyZC1jb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvcHMucG9zdHMubWFwKChwb3N0LCBqKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gPFBvc3RDYXJkIHBvc3Q9e3Bvc3R9IGtleT17an0gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8aDI+0JLRgNC10LzRjyDRhNCw0LrRgtC+0LI8L2gyPlxuICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxlbT5cbiAgICAgICAgICAgICAg0K3RgtC+0YIg0YHQsNC50YIg0L3QsNC/0LjRgdCw0L0g0L3QsHtcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9cIiBjbGFzc05hbWU9XCJzaW5peVwiPlxuICAgICAgICAgICAgICAgIE5leHQganNcbiAgICAgICAgICAgICAgPC9hPntcIiBcIn1cbiAgICAgICAgICAgICAgK3tcIiBcIn1cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXCIgY2xhc3NOYW1lPVwic2luaXlcIj5cbiAgICAgICAgICAgICAgICBEZXZpaVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2VtPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9ibG9ja3F1b3RlPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGgyPlJFQURNRS5tZDwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEJlbG93IGlzIHRoZSBSRUFETUUubWQgZm9yIGRldmlpLiBJdCB3YXMgaW1wb3J0ZWQgYW5kIHJlbmRlcmVkIHVzaW5nXG4gICAgICAgICAgTmV4dC5qcyBkeW5hbWljIGltcG9ydHMuIFRoZSByZXN0IG9mIHRoaXMgcGFnZSAoaW5jbHVkaW5nIHRoaXNcbiAgICAgICAgICBwYXJhZ3JhcGgpIGFyZSByZW5kZXJlZCB3aXRoIFJlYWN0LiBZb3UgY2FuIGFsc28gcmVhZCB0aGUgUkVBRE1FIG9uXG4gICAgICAgICAgR2l0SHViIGF0eycgJ31cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbGluaGFja3MvZGV2aWlcIj5cbiAgICAgICAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIC5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIGFsdGVybmF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hcnJvd1wiPlxuICAgICAgICAgIDxNYXJrZG93biBzb3VyY2U9e3Byb3BzLnJlYWRtZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gKi99XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBhbHRlcm5hdGVcIj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNlbnRlcmVkXCI+R2V0IHN0YXJ0ZWQ8L2gyPlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbGluaGFja3MvZGV2aWlcIj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZvcmstYnV0dG9uXCI+R28gdG8gUkVBRE1FPC9idXR0b24+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBpbnRyb2R1Y3Rpb24gPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKFwiaW50cm9kdWN0aW9uLm1kXCIpO1xuICBjb25zdCBmZWF0dXJlcyA9IGF3YWl0IGxvYWRNYXJrZG93bkZpbGUoXCJmZWF0dXJlcy5tZFwiKTtcbiAgY29uc3Qgb2JvbWJlID0gYXdhaXQgbG9hZE1hcmtkb3duRmlsZShcIm9ib21iZS5tZFwiKTtcbiAgY29uc3QgcmVhZG1lRmlsZSA9IGF3YWl0IGltcG9ydChgLi4vJHtcIlJFQURNRS5tZFwifWApO1xuICBjb25zdCByZWFkbWUgPSByZWFkbWVGaWxlLmRlZmF1bHQ7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgbG9hZEJsb2dQb3N0cygpO1xuXG4gIC8vIGNvbW1lbnQgb3V0IHRvIHR1cm4gb2ZmIFJTUyBnZW5lcmF0aW9uIGR1cmluZyBidWlsZCBzdGVwLlxuICBhd2FpdCBnZW5lcmF0ZVJTUyhwb3N0cyk7XG5cbiAgY29uc3QgcHJvcHMgPSB7XG4gICAgaW50cm9kdWN0aW9uOiBpbnRyb2R1Y3Rpb24uY29udGVudHMsXG4gICAgZmVhdHVyZXM6IGZlYXR1cmVzLmNvbnRlbnRzLFxuICAgIG9ib21iZTogb2JvbWJlLmNvbnRlbnRzLFxuICAgIHJlYWRtZTogcmVhZG1lLFxuICAgIHBvc3RzLFxuICB9O1xuXG4gIHJldHVybiB7IHByb3BzIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==