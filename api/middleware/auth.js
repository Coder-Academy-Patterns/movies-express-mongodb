const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

// Config
const jwtSecret = 'SECRET!' // FIXME: use environment variable
const jwtAlgorithm = 'HS256'

function rolesForUser(user) {
  let roles = ['movies:read', 'movies:write']

  // Users with coderacademy.edu.au emails have more capabilities
  if (/@coderacademy.edu.au$/.test(user.email)) {
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
      roles: rolesForUser(user)
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
      // Look up the user in our database
      User.findById(userID)
        .then(user => {
          // User was found
          if (user) {
            // req.user = 2nd argument below
            done(null, {
              _id: user._id,
              email: user.email,
              roles: jwtPayload.roles
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
  console.log('registerMiddleware', req.body)
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

const ensureRole = (role) => (req, res, next) => {
  const user = req.user
  const roles = user.roles
  // If the user’s roles does not include the required role
  if (roles.indexOf(role) === -1) {
    let error = new Error(`User must have role ${role}`)
    error.status = 401 // Unauthorized
    next(error)
    return
  }

  next()
}

module.exports = {
  initialize: passport.initialize(),
  authenticateSignIn: passport.authenticate('local', { session: false }),
  // 1. Verifies that a JWT is being passed to the request
  // 2. Verifies that we signed that JWT — i.e. it’s authentic
  // 3. Verifies that it hasn’t expired
  authenticateJWT: passport.authenticate('jwt', { session: false }),
  register: registerMiddleware,
  signTokenHandler,
  ensureRole
}