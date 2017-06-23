
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(65);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(63);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MoviesList = __webpack_require__(570);

var _MoviesList2 = _interopRequireDefault(_MoviesList);

var _CreateMovieForm = __webpack_require__(572);

var _CreateMovieForm2 = _interopRequireDefault(_CreateMovieForm);

var _movies = __webpack_require__(568);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(548);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
    baseURL: 'http://localhost:7000'
});

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/api/init.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/api/init.js"); } } })();

/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.create = create;

var _init = __webpack_require__(567);

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function list() {
    return _init2.default.get('/movies').then(function (res) {
        return res.data;
    });
}

function create(_ref) {
    var title = _ref.title,
        yearReleased = _ref.yearReleased,
        description = _ref.description;

    return _init2.default.post('/movies', {
        title: title, yearReleased: yearReleased, description: description
    }).then(function (res) {
        return res.data;
    });
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/api/movies.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/api/movies.js"); } } })();

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Movie;

var _react = __webpack_require__(12);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Movie.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Movie.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = MoviesList;

var _extends2 = __webpack_require__(96);

var _extends3 = _interopRequireDefault(_extends2);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Movie = __webpack_require__(569);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/MoviesList.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/MoviesList.js"); } } })();

/***/ }),

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(547);


/***/ }),

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateMovieForm;

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Field = __webpack_require__(573);

var _Field2 = _interopRequireDefault(_Field);

var _readAndClearForm = __webpack_require__(574);

var _readAndClearForm2 = _interopRequireDefault(_readAndClearForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/CreateMovieForm.js';


function submitCreate(event, onCreate) {
    event.preventDefault();

    var form = event.target;
    var movieValues = (0, _readAndClearForm2.default)(form);
    onCreate(movieValues);
}

function CreateMovieForm(_ref) {
    var onCreate = _ref.onCreate;

    return _react2.default.createElement('form', { onSubmit: function onSubmit(event) {
            return submitCreate(event, onCreate);
        }, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_Field2.default, { label: 'Title', name: 'title', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }), _react2.default.createElement(_Field2.default, { label: 'Year Released', name: 'yearReleased', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement(_Field2.default, { label: 'Description', name: 'description', __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }), _react2.default.createElement('button', { type: 'submit', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, 'Create Movie'));
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/CreateMovieForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/CreateMovieForm.js"); } } })();

/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Field;

var _react = __webpack_require__(12);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Field.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/Field.js"); } } })();

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function readAndClearForm(form) {
    var elements = form;
    var values = {};
    // Loop through form elements https://stackoverflow.com/a/19978872
    for (var i = 0, element; element = elements[i++];) {
        values[element.name] = element.value;
        element.value = '';
    }

    return values;
}

module.exports = readAndClearForm;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/readAndClearForm.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pgwsmith/Examples/Node/movies-express-mongodb/next/components/readAndClearForm.js"); } } })();

/***/ })

},[571]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzP2YxMDA0MTUiLCJ3ZWJwYWNrOi8vLy4vYXBpL2luaXQuanM/ZjEwMDQxNSIsIndlYnBhY2s6Ly8vLi9hcGkvbW92aWVzLmpzP2YxMDA0MTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Nb3ZpZS5qcz9mMTAwNDE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTW92aWVzTGlzdC5qcz9mMTAwNDE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlTW92aWVGb3JtLmpzP2YxMDA0MTUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWVsZC5qcz9mMTAwNDE1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVhZEFuZENsZWFyRm9ybS5qcz9mMTAwNDE1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpZXNMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvTW92aWVzTGlzdCdcbmltcG9ydCBDcmVhdGVNb3ZpZUZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVNb3ZpZUZvcm0nXG5pbXBvcnQgKiBhcyBtb3ZpZXNBUEkgZnJvbSAnLi4vYXBpL21vdmllcydcblxuY2xhc3MgTGFuZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIG1vdmllczogdGhpcy5wcm9wcy5pbml0aWFsTW92aWVzXG4gIH1cblxuICBoYW5kbGVDcmVhdGVNb3ZpZSA9IChtb3ZpZSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoKHsgbW92aWVzIH0pID0+ICh7XG4gICAgICBtb3ZpZXM6IFsgbW92aWUgXS5jb25jYXQobW92aWVzKVxuICAgIH0pKVxuXG4gICAgbW92aWVzQVBJLmNyZWF0ZShtb3ZpZSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb3ZpZXNcbiAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8Q3JlYXRlTW92aWVGb3JtIG9uQ3JlYXRlPXsgdGhpcy5oYW5kbGVDcmVhdGVNb3ZpZSB9IC8+XG4gICAgICAgIDxNb3ZpZXNMaXN0IGl0ZW1zPXsgbW92aWVzIH0gLz5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cblxuTGFuZGluZy5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgaW5pdGlhbE1vdmllczogYXdhaXQgbW92aWVzQVBJLmxpc3QoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo3MDAwJ1xufSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9pbml0LmpzIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4vaW5pdCdcblxuZXhwb3J0IGZ1bmN0aW9uIGxpc3QoKSB7XG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL21vdmllcycpLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlKHsgdGl0bGUsIHllYXJSZWxlYXNlZCwgZGVzY3JpcHRpb24gfSkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvbW92aWVzJywge1xuICAgICAgICB0aXRsZSwgeWVhclJlbGVhc2VkLCBkZXNjcmlwdGlvblxuICAgIH0pLnRoZW4ocmVzID0+IHJlcy5kYXRhKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9tb3ZpZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllKHtcbiAgdGl0bGUsXG4gIHllYXJSZWxlYXNlZCxcbiAgZGVzY3JpcHRpb24sXG4gIHdyaXRlcnMsXG4gIGRpcmVjdG9ycyxcbiAgY2FzdCxcbiAgY3Jld1xufSkge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgyPnsgdGl0bGUgfSA8c21hbGw+KHsgeWVhclJlbGVhc2VkIH0pPC9zbWFsbD48L2gyPlxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTW92aWUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzTGlzdCh7XG4gIGl0ZW1zXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICB7XG4gICAgICBpdGVtcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxNb3ZpZVxuICAgICAgICAgIGtleT17IGl0ZW0uX2lkIH1cbiAgICAgICAgICB7IC4uLml0ZW0gfVxuICAgICAgICAvPlxuICAgICAgKSlcbiAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL01vdmllc0xpc3QuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgRmllbGQgZnJvbSAnLi9GaWVsZCdcbmltcG9ydCByZWFkQW5kQ2xlYXJGb3JtIGZyb20gJy4vcmVhZEFuZENsZWFyRm9ybSdcblxuZnVuY3Rpb24gc3VibWl0Q3JlYXRlKGV2ZW50LCBvbkNyZWF0ZSkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcblxuICAgIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBtb3ZpZVZhbHVlcyA9IHJlYWRBbmRDbGVhckZvcm0oZm9ybSlcbiAgICBvbkNyZWF0ZShtb3ZpZVZhbHVlcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ3JlYXRlTW92aWVGb3JtKHtcbiAgICBvbkNyZWF0ZVxufSkge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIG9uU3VibWl0PXsgKGV2ZW50KSA9PiBzdWJtaXRDcmVhdGUoZXZlbnQsIG9uQ3JlYXRlKSB9PlxuICAgICAgICA8RmllbGQgbGFiZWw9J1RpdGxlJyBuYW1lPSd0aXRsZScgLz5cbiAgICAgICAgPEZpZWxkIGxhYmVsPSdZZWFyIFJlbGVhc2VkJyBuYW1lPSd5ZWFyUmVsZWFzZWQnIC8+XG4gICAgICAgIDxGaWVsZCBsYWJlbD0nRGVzY3JpcHRpb24nIG5hbWU9J2Rlc2NyaXB0aW9uJyAvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+Q3JlYXRlIE1vdmllPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DcmVhdGVNb3ZpZUZvcm0uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpZWxkKHtcbiAgbGFiZWwsXG4gIHR5cGUsXG4gIG5hbWVcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8bGFiZWw+XG4gICAgICAgIDxzcGFuPnsgbGFiZWwgfSA8L3NwYW4+XG4gICAgICAgIDxpbnB1dCB0eXBlPXsgdHlwZSB9IG5hbWU9eyBuYW1lIH0gLz5cbiAgICA8L2xhYmVsPlxuICApXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9GaWVsZC5qcyIsImZ1bmN0aW9uIHJlYWRBbmRDbGVhckZvcm0oZm9ybSkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gZm9ybVxuICAgIGxldCB2YWx1ZXMgPSB7fVxuICAgIC8vIExvb3AgdGhyb3VnaCBmb3JtIGVsZW1lbnRzIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xOTk3ODg3MlxuICAgIGZvciAobGV0IGkgPSAwLCBlbGVtZW50OyBlbGVtZW50ID0gZWxlbWVudHNbaSsrXTspIHtcbiAgICAgICAgdmFsdWVzW2VsZW1lbnQubmFtZV0gPSBlbGVtZW50LnZhbHVlXG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSAnJ1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gdmFsdWVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcmVhZEFuZENsZWFyRm9ybVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvcmVhZEFuZENsZWFyRm9ybS5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7O0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFEQTs7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFIQTs7Ozs7O0FBckJBO0FBQ0E7QUEwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQUE7O0FBQUE7QUFFQTtBQUNBO0FBSEE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFNQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7Ozs7O0FBREE7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFJQTtBQUNBO0FBTEE7QUFDQTs7Ozs7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7Ozs7O0FBREE7QUFRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7QUFEQTtBQUVBO0FBQ0E7QUFDQTs7QUFBQTtBQUVBO0FBRkE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7OztBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7Ozs7O0FBREE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUhBOzs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBOzs7QUFFQTtBQUNBOzs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        