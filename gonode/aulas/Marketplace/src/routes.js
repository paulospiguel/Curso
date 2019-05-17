const express = require('express')

const routes = express.Router()

// ######### IMPORTS MIDDLEWARES ################
const authMiddleware = require('./app/middlewares/auth')

// ######### IMPORTS CONTROLLERS ################
const UserController = require('./app/controllers/UserController')
const SessionController = require('./app/controllers/SessionController')

// ######### ROUTES ################
routes.post('/users', UserController.store)
routes.post('/sessions', SessionController.store)

routes.get('/teste', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
