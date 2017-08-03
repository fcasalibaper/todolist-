
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(544);


/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(47);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(16);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(17);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(48);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _title = __webpack_require__(545);

var _title2 = _interopRequireDefault(_title);

var _list = __webpack_require__(560);

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/ReactTest/todolist/pages/index.js?entry';


var App = function (_React$Component) {
  (0, _inherits3.default)(App, _React$Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);

    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      }, _react2.default.createElement(_title2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }), _react2.default.createElement(_list2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }));
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/todolist/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/todolist/pages/index.js"); } } })();
    (function (Component, route) {
      if (!module.hot) return
      if (false) return

      var qs = __webpack_require__(69)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _baseStyles = __webpack_require__(546);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/title.js';


var Title = function Title() {
  return _react2.default.createElement(_baseStyles.TitleWrap, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('hgroup', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, 'TodoList')));
};

exports.default = Title;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/title.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/title.js"); } } })();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TitleWrap = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(547);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(554);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n'], ['\n\tbackground: ', ';\n\tcolor: ', ';\n\n\tfont-size: 1em;\n\tmargin: 1em;\n\tpadding: 0.25em 1em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 3px;\n']);

var TitleWrap = exports.TitleWrap = _styledComponents2.default.hgroup(_templateObject, function (props) {
	return props.primary ? 'palevioletred' : 'white';
}, function (props) {
	return props.primary ? 'white' : 'palevioletred';
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/todolist/styles/base.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/todolist/styles/base.styles.js"); } } })();

/***/ }),

/***/ 560:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(9);

var _react2 = _interopRequireDefault(_react);

var _ullistStyles = __webpack_require__(561);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/list.js";


var List = function List() {
  return _react2.default.createElement(_ullistStyles.UlList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, _react2.default.createElement("input", { type: "checkbox", __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }), _react2.default.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "estudiar react"), "span"));
};

exports.default = List;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/list.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/todolist/components/list.js"); } } })();

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UlList = undefined;

var _taggedTemplateLiteral2 = __webpack_require__(547);

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _styledComponents = __webpack_require__(554);

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tpadding:0;\n\n\tli {\n\t\tlist-style-type: none;\n\t}\n'], ['\n\tpadding:0;\n\n\tli {\n\t\tlist-style-type: none;\n\t}\n']);

var UlList = exports.UlList = _styledComponents2.default.ul(_templateObject);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/fernandocasaliba/GitHub/ReactTest/todolist/styles/ullist.styles.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/fernandocasaliba/GitHub/ReactTest/todolist/styles/ullist.styles.js"); } } })();

/***/ })

},[543]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzdjYjEyZjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90aXRsZS5qcz83Y2IxMmYxIiwid2VicGFjazovLy8uL3N0eWxlcy9iYXNlLnN0eWxlcy5qcz83Y2IxMmYxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGlzdC5qcz83Y2IxMmYxIiwid2VicGFjazovLy8uL3N0eWxlcy91bGxpc3Quc3R5bGVzLmpzPzdjYjEyZjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUaXRsZSBmcm9tICcuLy4uL2NvbXBvbmVudHMvdGl0bGUnO1xuaW1wb3J0IExpc3QgZnJvbSAnLi8uLi9jb21wb25lbnRzL2xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8VGl0bGUgLz5cbiAgICAgICAgPExpc3QgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiLCJpbXBvcnQgeyBUaXRsZVdyYXAgfSBmcm9tICcuLy4uL3N0eWxlcy9iYXNlLnN0eWxlcy5qcyc7XG5cbmNvbnN0IFRpdGxlID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaXRsZVdyYXA+XG4gICAgICA8aGdyb3VwPlxuICAgICAgICA8aDE+VG9kb0xpc3Q8L2gxPlxuICAgICAgPC9oZ3JvdXA+XG4gICAgPC9UaXRsZVdyYXA+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL3RpdGxlLmpzIiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBUaXRsZVdyYXAgPSBzdHlsZWQuaGdyb3VwYFxuXHRiYWNrZ3JvdW5kOiAke3Byb3BzID0+IHByb3BzLnByaW1hcnkgPyAncGFsZXZpb2xldHJlZCcgOiAnd2hpdGUnfTtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMucHJpbWFyeSA/ICd3aGl0ZScgOiAncGFsZXZpb2xldHJlZCd9O1xuXG5cdGZvbnQtc2l6ZTogMWVtO1xuXHRtYXJnaW46IDFlbTtcblx0cGFkZGluZzogMC4yNWVtIDFlbTtcblx0Ym9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0eWxlcy9iYXNlLnN0eWxlcy5qcyIsImltcG9ydCB7IFVsTGlzdCB9IGZyb20gJy4vLi4vc3R5bGVzL3VsbGlzdC5zdHlsZXMuanMnO1xuXG5jb25zdCBMaXN0ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxVbExpc3Q+XG4gICAgICA8bGk+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxuICAgICAgICA8c3Bhbj5cbiAgICAgICAgICBlc3R1ZGlhciByZWFjdFxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIHNwYW5cbiAgICAgIDwvbGk+XG4gICAgPC9VbExpc3Q+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlzdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbGlzdC5qcyIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgY29uc3QgVWxMaXN0ID0gc3R5bGVkLnVsYFxuXHRwYWRkaW5nOjA7XG5cblx0bGkge1xuXHRcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcblx0fVxuYDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0eWxlcy91bGxpc3Quc3R5bGVzLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7OztBQUVBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFHQTtBQUhBO0FBQUE7Ozs7O0FBTEE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBOzs7Ozs7QUFDQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTs7Ozs7OztBQURBO0FBQ0E7QUFEQTtBQUVBO0FBRkE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7Ozs7OztBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVNBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7Ozs7Ozs7QUFEQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        