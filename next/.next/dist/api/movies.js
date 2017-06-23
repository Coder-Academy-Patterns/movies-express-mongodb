'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.list = list;
exports.create = create;

var _init = require('./init');

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