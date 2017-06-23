'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MoviesList = require('../components/MoviesList');

var _MoviesList2 = _interopRequireDefault(_MoviesList);

var _CreateMovieForm = require('../components/CreateMovieForm');

var _CreateMovieForm2 = _interopRequireDefault(_CreateMovieForm);

var _movies = require('../api/movies');

var moviesAPI = _interopRequireWildcard(_movies);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/pages/index.js?entry',
    _this2 = undefined;

var Landing = function (_React$Component) {
  (0, _inherits3.default)(Landing, _React$Component);

  function Landing() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Landing);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Landing.__proto__ || (0, _getPrototypeOf2.default)(Landing)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      movies: _this.props.initialMovies
    }, _this.handleCreateMovie = function (movie) {
      _this.setState(function (_ref2) {
        var movies = _ref2.movies;
        return {
          movies: [movie].concat(movies)
        };
      });

      moviesAPI.create(movie);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Landing, [{
    key: 'render',
    value: function render() {
      var movies = this.state.movies;

      return _react2.default.createElement('main', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement(_CreateMovieForm2.default, { onCreate: this.handleCreateMovie, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_MoviesList2.default, { items: movies, __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }]);

  return Landing;
}(_react2.default.Component);

Landing.getInitialProps = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return moviesAPI.list();

        case 2:
          _context.t0 = _context.sent;
          return _context.abrupt('return', {
            initialMovies: _context.t0
          });

        case 4:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, _this2);
}));

exports.default = Landing;