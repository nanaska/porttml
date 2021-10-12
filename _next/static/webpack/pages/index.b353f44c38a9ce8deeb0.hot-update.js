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
  }, "Introduction to Devii"), __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    source: props.introduction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  })), __jsx("div", {
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
  }, "Features"), __jsx("div", {
    className: "medium-wide",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_2__["Markdown"], {
    source: props.features,
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
  }, "Testimonials"), __jsx("blockquote", {
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
  }, "Seems like it might be useful!")), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "\u2014 Dan Abramov, taken", " ", __jsx("a", {
    href: "https://github.com/colinhacks/devii/issues/2",
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, " ", "utterly out of context")))), __jsx("div", {
    className: "section alternate",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "centered",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, "Get started"), __jsx("a", {
    href: "https://github.com/colinhacks/devii",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: "fork-button",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImludHJvZHVjdGlvbiIsImZlYXR1cmVzIiwicG9zdHMiLCJtYXAiLCJwb3N0IiwiaiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUtQO0FBQ0osU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJHQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQURGLEVBRUUsTUFBQyw2REFBRDtBQUFVLFVBQU0sRUFBRUEsS0FBSyxDQUFDQyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FORixFQVdFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDZEQUFEO0FBQVUsVUFBTSxFQUFFRCxLQUFLLENBQUNFLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBWEYsRUFrQkU7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkZBRWE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGYix1RkFHb0QsR0FIcEQsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLDhEQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBTkYsZ0JBRkYsRUFVRTtBQUFLLGFBQVMsRUFBQyxxQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLEtBQUssQ0FBQ0csS0FBTixDQUFZQyxHQUFaLENBQWdCLFVBQUNDLElBQUQsRUFBT0MsQ0FBUCxFQUFhO0FBQzVCLFdBQU8sTUFBQyw2REFBRDtBQUFVLFVBQUksRUFBRUQsSUFBaEI7QUFBc0IsU0FBRyxFQUFFQyxDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRCxHQUZBLENBREgsQ0FWRixDQWxCRixFQW1DRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUN1QixHQUR2QixFQUVFO0FBQ0UsUUFBSSxFQUFDLDhDQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlHLEdBSkgsMkJBRkYsQ0FKRixDQUZGLENBbkNGLEVBMEVFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFHLFFBQUksRUFBQyxxQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUZGLENBMUVGLENBREY7QUFtRkQsQ0F6RkQ7O0tBQU1QLEk7O0FBMkZTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMzUzZjQ0YzM4YTljZThkZWViMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVSU1MgfSBmcm9tIFwiLi4vcnNzVXRpbFwiO1xuaW1wb3J0IHsgTWFya2Rvd24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdERhdGEsIGxvYWRCbG9nUG9zdHMsIGxvYWRNYXJrZG93bkZpbGUgfSBmcm9tIFwiLi4vbG9hZGVyXCI7XG5pbXBvcnQgeyBQb3N0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Bvc3RDYXJkXCI7XG5cbmNvbnN0IEhvbWUgPSAocHJvcHM6IHtcbiAgaW50cm9kdWN0aW9uOiBzdHJpbmc7XG4gIGZlYXR1cmVzOiBzdHJpbmc7XG4gIHJlYWRtZTogc3RyaW5nO1xuICBwb3N0czogUG9zdERhdGFbXTtcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+0J/QvtGA0YLRhNC+0LvQuNC+INCULtChINCo0JDQpdCe0JI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9kdWN0aW9uXCI+XG4gICAgICAgIDxoMT5JbnRyb2R1Y3Rpb24gdG8gRGV2aWk8L2gxPlxuICAgICAgICA8TWFya2Rvd24gc291cmNlPXtwcm9wcy5pbnRyb2R1Y3Rpb259IC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoMj5GZWF0dXJlczwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaXVtLXdpZGVcIj5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtwcm9wcy5mZWF0dXJlc30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoMj5NeSBibG9nIHBvc3RzPC9oMj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgVGhpcyBzZWN0aW9uIGRlbW9uc3RyYXRlcyB0aGUgcG93ZXIgb2YgZHluYW1pYyBpbXBvcnRzLiBFdmVyeSBNYXJrZG93blxuICAgICAgICAgIGZpbGUgdW5kZXIgPGNvZGU+L21kL2Jsb2c8L2NvZGU+IGlzIGF1dG9tYXRpY2FsbHkgcGFyc2VkIGludG8gYVxuICAgICAgICAgIHN0cnVjdHVyZWQgVHlwZVNjcmlwdCBvYmplY3QgYW5kIGF2YWlsYWJsZSBpbiB0aGV7XCIgXCJ9XG4gICAgICAgICAgPGNvZGU+cHJvcHMucG9zdHM8L2NvZGU+IGFycmF5LiBUaGVzZSBibG9nIHBvc3QgXCJjYXJkc1wiIGFyZVxuICAgICAgICAgIGltcGxlbWVudGVkIGluIHRoZVxuICAgICAgICAgIDxjb2RlPi9jb21wb25lbnRzL1Bvc3RDYXJkLnRzeDwvY29kZT4gY29tcG9uZW50LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdC1jYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtwcm9wcy5wb3N0cy5tYXAoKHBvc3QsIGopID0+IHtcbiAgICAgICAgICAgIHJldHVybiA8UG9zdENhcmQgcG9zdD17cG9zdH0ga2V5PXtqfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoMj5UZXN0aW1vbmlhbHM8L2gyPlxuICAgICAgICA8YmxvY2txdW90ZT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxlbT5TZWVtcyBsaWtlIGl0IG1pZ2h0IGJlIHVzZWZ1bCE8L2VtPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIOKAlCBEYW4gQWJyYW1vdiwgdGFrZW57XCIgXCJ9XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NvbGluaGFja3MvZGV2aWkvaXNzdWVzLzJcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgIHV0dGVybHkgb3V0IG9mIGNvbnRleHRcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvYmxvY2txdW90ZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxoMj5SRUFETUUubWQ8L2gyPlxuICAgICAgICA8cD5cbiAgICAgICAgICBCZWxvdyBpcyB0aGUgUkVBRE1FLm1kIGZvciBkZXZpaS4gSXQgd2FzIGltcG9ydGVkIGFuZCByZW5kZXJlZCB1c2luZ1xuICAgICAgICAgIE5leHQuanMgZHluYW1pYyBpbXBvcnRzLiBUaGUgcmVzdCBvZiB0aGlzIHBhZ2UgKGluY2x1ZGluZyB0aGlzXG4gICAgICAgICAgcGFyYWdyYXBoKSBhcmUgcmVuZGVyZWQgd2l0aCBSZWFjdC4gWW91IGNhbiBhbHNvIHJlYWQgdGhlIFJFQURNRSBvblxuICAgICAgICAgIEdpdEh1YiBhdHsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXCI+XG4gICAgICAgICAgICBodHRwczovL2dpdGh1Yi5jb20vY29saW5oYWNrcy9kZXZpaVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICAuXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PiAqL31cblxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBhbHRlcm5hdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXJyb3dcIj5cbiAgICAgICAgICA8TWFya2Rvd24gc291cmNlPXtwcm9wcy5yZWFkbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+ICovfVxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gYWx0ZXJuYXRlXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJjZW50ZXJlZFwiPkdldCBzdGFydGVkPC9oMj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb2xpbmhhY2tzL2RldmlpXCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmb3JrLWJ1dHRvblwiPkdvIHRvIFJFQURNRTwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgaW50cm9kdWN0aW9uID0gYXdhaXQgbG9hZE1hcmtkb3duRmlsZShcImludHJvZHVjdGlvbi5tZFwiKTtcbiAgY29uc3QgZmVhdHVyZXMgPSBhd2FpdCBsb2FkTWFya2Rvd25GaWxlKFwiZmVhdHVyZXMubWRcIik7XG4gIGNvbnN0IHJlYWRtZUZpbGUgPSBhd2FpdCBpbXBvcnQoYC4uLyR7XCJSRUFETUUubWRcIn1gKTtcbiAgY29uc3QgcmVhZG1lID0gcmVhZG1lRmlsZS5kZWZhdWx0O1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGxvYWRCbG9nUG9zdHMoKTtcblxuICAvLyBjb21tZW50IG91dCB0byB0dXJuIG9mZiBSU1MgZ2VuZXJhdGlvbiBkdXJpbmcgYnVpbGQgc3RlcC5cbiAgYXdhaXQgZ2VuZXJhdGVSU1MocG9zdHMpO1xuXG4gIGNvbnN0IHByb3BzID0ge1xuICAgIGludHJvZHVjdGlvbjogaW50cm9kdWN0aW9uLmNvbnRlbnRzLFxuICAgIGZlYXR1cmVzOiBmZWF0dXJlcy5jb250ZW50cyxcbiAgICByZWFkbWU6IHJlYWRtZSxcbiAgICBwb3N0cyxcbiAgfTtcblxuICByZXR1cm4geyBwcm9wcyB9O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=