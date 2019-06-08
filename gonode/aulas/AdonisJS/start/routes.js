'use strict'

const Route = use('Route')

Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')
Route.post('forgot', 'ForgotPasswordController.store')
Route.put('forgot', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

// Rotas com autenticação
Route.group(() => {
  Route.post('/files', 'FileController.store')
  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
