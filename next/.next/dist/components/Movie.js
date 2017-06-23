'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Movie;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Movie.js';
function Movie(_ref) {
  var title = _ref.title,
      yearReleased = _ref.yearReleased,
      description = _ref.description,
      writers = _ref.writers,
      directors = _ref.directors,
      cast = _ref.cast,
      crew = _ref.crew;

  return _react2.default.createElement('article', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('h2', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, title, ' ', _react2.default.createElement('small', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, '(', yearReleased, ')')));
}