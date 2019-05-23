const express = require('express')
const validate = require('express-validation')

const routes = express.Router()

// ######### IMPORTS MIDDLEWARES ################
const authMiddleware = require('./app/middlewares/auth')

// ######### IMPORTS CONTROLLERS ################
const controllers = require('./app/controllers')
const validators = require('./app/validators')
// const UserController = require('./app/controllers/UserController')
// const SessionController = require('./app/controllers/SessionController')

// ######### ROUTES ################
routes.post(
  '/users',
  validate(validators.User),
  controllers.UserController.store
)
routes.post(
  '/sessions',
  validate(validators.Session),
  controllers.SessionController.store
)

/** ONLY LOG IN THE SYSTEM IF IT IS AUTHENTICATED */
routes.use(authMiddleware)

routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', validate(validators.Ad), controllers.AdController.store)
routes.put('/ads/:id', validate(validators.Ad), controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

/**  PURCHASE */
routes.post(
  '/purchases',
  validate(validators.Purchase),
  controllers.PurchaseController.store
)

module.exports = routes
