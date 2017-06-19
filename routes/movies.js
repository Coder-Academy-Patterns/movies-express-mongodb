const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

router
.route('/movies')
.get((req, res) => {
    Movie.find()
        .then(movies => {
            res.json(movies)
        })
        .then(error => {
            res.json({ error })
        })
})

module.exports = router