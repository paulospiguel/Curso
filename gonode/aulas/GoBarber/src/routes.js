const express = require('express')
const multerConfig = require('./config/multer') // Salva imagens na pasta tmp
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')
const DashboardController = require('./app/controller/DashboardController')
const FileController = require('./app/controller/FileController')
const AppointmentController = require('./app/controller/AppointmentController')
const AvailableController = require('./app/controller/AvailableController')
const ViewController = require('./app/controller/ViewController')

routes.use((req, res, next) => {
  res.locals.flashSucess = req.flash('sucess')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/files/:file', FileController.show)

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware) // Todas as páginas app somente tem acesso a usuários logados

routes.get('/app/dashboard', DashboardController.index)
routes.get('/app/logout', SessionController.destroy)

routes.get('/app/appointments/new/:provider', AppointmentController.create)
routes.post('/app/appointments/new/:provider', AppointmentController.store)
routes.get('/app/appointmentday', ViewController.index)

routes.get('/app/available/:provider', AvailableController.index)

module.exports = routes
