const express = require('express')
const bodyParser = require('body-parser')

const authMiddleware = require('./middleware/auth')

const moviesRouter = require('./routes/movies')
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// Create server
const server = express()

// Middleware
server.use(bodyParser.json())
server.use(authMiddleware.initialize)

// Routes
server.use(moviesRouter)
server.use(peopleRouter)
server.use(authRouter)

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

// Handle errors by returning JSON
server.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({
    error: { message: error.message }
  })
})

// Start server at localhost:7000
const port = 7000
server.listen(port, () => {
    console.log(`Started at localhost:${port}`)
})
