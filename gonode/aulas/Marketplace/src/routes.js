const express = require('express')

const routes = express.Router()

// ######### IMPORTS MIDDLEWARES ################
const authMiddleware = require('./app/middlewares/auth')

// ######### IMPORTS CONTROLLERS ################
const controllers = require('./app/controllers')
// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')

// ######### ROUTES ################
routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

/** ONLY LOG IN THE SYSTEM IF IT IS AUTHENTICATED */
routes.use(authMiddleware)

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**  PURCHASE */
routes.post('/purchases', controllers.PurchaseController.store)

module.exports = routes
