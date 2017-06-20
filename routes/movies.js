const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

router
.route('/movies')
.get((req, res) => {
    Movie.find()
        .populate('cast.person')
        .populate('directors.person')
        .populate('writers.person')
        .then(movies => {
            res.json(movies)
        })
        .then(error => {
            res.json({ error })
        })
})
.post((req, res) => {
    const newMovie = req.body
    Movie.create(newMovie)
        .then(movie => {
            res.json(movie)
        })
        .then(error => {
            res.json({ error })
        })
})

router
.param('id', (req, res, next, id) => {
    req.itemQuery = Movie.findById(id)
    next()
})

router.route('/movies/:id')
.get((req, res) => {
    req.itemQuery
        .populate('cast.person')
        .populate('directors.person')
        .populate('writers.person')
        .then(movie => {
            res.json(movie)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.put((req, res) => {
    const newMovie = req.body
    req.itemQuery.update(newMovie)
        .then(() => {
            res.json(newMovie)
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})
.delete((req, res) => {
    req.itemQuery.remove()
        .then(() => {
            res.status(204).json({})
        })
        .catch(error => {
            res.status(404).json({ error })
        })
})

module.exports = router