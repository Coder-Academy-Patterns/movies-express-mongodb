const express = require('express')

const server = express()

const Movie = require('./models/movie')

server.get('/movies', (req, res) => {
    Movie.find()
        .then(movies => {
            res.json(movies)
        })
        .then(error => {
            res.json({ error })
        })
})

server.get('/setup', (req, res) => {
    const forestGump = new Movie({ title: 'Forest Gump' })
    console.log('Save')
    forestGump.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(error => {
            res.json({ error })
        })
})

server.listen(7000)
