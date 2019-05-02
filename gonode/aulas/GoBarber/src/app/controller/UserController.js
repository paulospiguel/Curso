/* eslint-disable space-before-function-paren */
const { User } = require('../models')

class UserController {
  create(req, res) {
    return res.render('auth/signup')
  }

  async store(req, res) {
    const { filename: avatar } = req.file // Campo no banco de dados
    await User.create({ ...req.body, avatar }) // ... Traz todos as informações do Body

    return res.redirect('/')
  }
}

module.exports = new UserController()
