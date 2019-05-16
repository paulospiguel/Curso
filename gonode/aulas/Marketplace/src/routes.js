const express = require('express')

const routes = express.Router()

// ######### IMPORTS CONTROLLERS ################
const UserController = require('./app/controllers/UserController')

// ######### ROUTES ################
routes.post('/users', UserController.store)

module.exports = routes
