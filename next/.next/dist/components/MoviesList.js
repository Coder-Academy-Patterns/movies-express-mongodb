'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MoviesList;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Movie = require('./Movie');

var _Movie2 = _interopRequireDefault(_Movie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/MoviesList.js';
function MoviesList(_ref) {
  var items = _ref.items;

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, items.map(function (item) {
    return _react2.default.createElement(_Movie2.default, (0, _extends3.default)({
      key: item._id
    }, item, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }));
  }));
}