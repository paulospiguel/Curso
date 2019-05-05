const express = require('express')
const multerConfig = require('./config/multer') // Salva imagens na pasta tmp
const upload = require('multer')(multerConfig)

const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
const guestMiddleware = require('./app/middlewares/guest')

const UserController = require('./app/controller/UserController')
const SessionController = require('./app/controller/SessionController')
const DashboardController = require('./app/controller/DashboardController')

routes.use((req, res, next) => {
  res.locals.flashSucess = req.flash('sucess')
  res.locals.flashError = req.flash('error')
  return next()
})

routes.get('/', guestMiddleware, SessionController.create)
routes.post('/signin', SessionController.store)

routes.get('/signup', guestMiddleware, UserController.create)
routes.post('/signup', upload.single('avatar'), UserController.store)

routes.use('/app', authMiddleware) // Todas as páginas app somente tem acesso a usuários logados

// routes.get('/app/dashboard', DashboardController.create)
routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user)
  return res.render('dashboard')
})

routes.get('/app/logout', SessionController.destroy)

module.exports = routes
