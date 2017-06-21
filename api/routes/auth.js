const express = require('express')
const authMiddleware = require('../middleware/auth')

const router = express.Router()

// Sign in: POST /auth
router.post('/auth', authMiddleware.authenticateSignIn, (req, res) => {
  res.json({ success: true })
})

// Registration: POST /auth/register
router.post('/auth/register', authMiddleware.register, (req, res) => {
  res.json({ user: req.user })
})

module.exports = router