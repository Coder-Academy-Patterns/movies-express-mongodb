'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = CreateMovieForm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Field = require('./Field');

var _Field2 = _interopRequireDefault(_Field);

var _readAndClearForm = require('./readAndClearForm');

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