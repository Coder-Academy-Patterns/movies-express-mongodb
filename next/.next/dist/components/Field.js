'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Field;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Field.js';
function Field(_ref) {
  var label = _ref.label,
      type = _ref.type,
      name = _ref.name;

  return _react2.default.createElement('label', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement('span', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, label, ' '), _react2.default.createElement('input', { type: type, name: name, __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }));
}