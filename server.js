const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./routes/movies')
const peopleRouter = require('./routes/people')

// Create server
const server = express()

// Middleware
server.use(bodyParser.json())

// Routes
server.use(moviesRouter)
server.use(peopleRouter)

// Route to quickly set database up
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

// Start server at localhost:7000
server.listen(7000)
