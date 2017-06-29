const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Config
const jwtSecret = 'SECRET!' // FIXME: use environment variable
const jwtAlgorithm = 'HS256'

// Roles
function getUserRoles(user) {
  let roles = ['movies:read', 'movies:write']

  const isCoderAcademy = /@coderacademy.edu.au$/.test(user.email)
  if (isCoderAcademy) {
    roles.push('people:read', 'people:write')
  }

  return roles
}

// Create a valid JWT
function signTokenHandler(req, res) {
  const user = req.user
  const token = jwt.sign(
    { // Payload
      email: user.email,
      roles: getUserRoles(user)
    },
    jwtSecret,
    { // Options
      subject: user._id.toString(),
      algorithm: jwtAlgorithm,
      expiresIn: '6h'
    }
  )
  res.json({ token })
}

// Add local strategy (email & password)
passport.use(
  User.createStrategy()
)

// Add JWT strategy (json web token)
passport.use(
  new passportJWT.Strategy(
    {
      secretOrKey: jwtSecret,
      // Authorization: JWT [token]
      jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeader(),
      algorithms: [jwtAlgorithm]
    },
    // Called when a valid token is found
    // It decode the token payload for us
    (jwtPayload, done) => {
      const userID = jwtPayload.sub // Used ID is the subject
      const roles = jwtPayload.roles || [] 
      // Look up the user in our database
      User.findById(userID)
        .then(user => {
          // User was found
          if (user) {
            done(null, {
              id: userID,
              email: user.email,
              roles
            })
          }
          // No user was found
          else {
            done(null, false)
          }
        })
        .catch(error => {
          done(new Error(`Issue fetching user with ID: ${userID}`), false)
        })
    }
  )
)

// Register new user
function registerMiddleware(req, res, next) {
  const user = new User({
    email: req.body.email
  })
  User.register(user, req.body.password, (error, user) => {
    // Error in registration
    if (error) {
      // Our middleware failed with this error
      next(error)
      return
    }

    // Add our newly created user to the req
    req.user = user
    // Our middleware succeeded with no error
    next()
  })
}

const requireRole = (role) => (req, res, next) => {
  const user = req.user
  if (user.roles.indexOf(role) === -1) {
    const error = new Error(`Signed in user must have role ${role}`)
    error.status = 401
    next(error)
  }

  next()
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  register: registerMiddleware,
  requireRole,
  signTokenHandler
}