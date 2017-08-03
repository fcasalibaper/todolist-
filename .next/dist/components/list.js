"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ullistStyles = require("./../styles/ullist.styles.js");

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