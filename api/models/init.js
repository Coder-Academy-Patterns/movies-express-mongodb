const mongoose = require('mongoose')
mongoose.Promise = Promise
mongoose.connect('mongodb://localhost/movies')

const db = mongoose.connection

module.exports = mongoose