const mongoose = require('./init')

const movieSchema = mongoose.Schema({
    title: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie