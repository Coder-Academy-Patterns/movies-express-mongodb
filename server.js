const express = require('express')
const moviesRouter = require('./routes/movies')

const server = express()
server.use(moviesRouter)

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
