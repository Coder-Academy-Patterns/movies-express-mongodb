const mongoose = require('./init')

const movieSchema = mongoose.Schema({
    title: String,
    yearReleased: Number,
    description: String
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie