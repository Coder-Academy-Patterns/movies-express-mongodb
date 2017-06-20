const mongoose = require('./init')

const peopleRoleSchema = [{
    person: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    role: String
}]

const movieSchema = mongoose.Schema({
    title: String,
    yearReleased: Number,
    description: String,
    writers: peopleRoleSchema,
    directors: peopleRoleSchema,
    cast: peopleRoleSchema,
    crew: peopleRoleSchema
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie