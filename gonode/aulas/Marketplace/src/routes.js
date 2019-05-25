const express = require('express')
const validate = require('express-validation')
const handle = require('express-async-handler')

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
  handle(controllers.UserController.store)
)
routes.post(
  '/sessions',
  validate(validators.Session),
  handle(controllers.SessionController.store)
)

/** ONLY LOG IN THE SYSTEM IF IT IS AUTHENTICATED */
routes.use(authMiddleware)

routes.get('/ads', handle(controllers.AdController.index))
routes.get('/ads/:id', handle(controllers.AdController.show))
routes.post(
  '/ads',
  validate(validators.Ad),
  handle(controllers.AdController.store)
)
routes.put(
  '/ads/:id',
  validate(validators.Ad),
  handle(controllers.AdController.update)
)
routes.delete('/ads/:id', handle(controllers.AdController.destroy))

/**  PURCHASE */
routes.get('/purchases', controllers.PurchaseController.index)

routes.post(
  '/purchases',
  validate(validators.Purchase),
  handle(controllers.PurchaseController.store)
)

routes.put(
  '/purchases/:id',
  handle(controllers.PurchaseController.purchaseUpdate)
)

module.exports = routes
