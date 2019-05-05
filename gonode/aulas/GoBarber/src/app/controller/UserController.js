/* eslint-disable space-before-function-paren */
const { User } = require('../models')

class UserController {
  create(req, res) {
    return res.render('auth/signup')
  }

  async store(req, res) {
    const { filename: avatar } = req.file ? req.file : '' // Campo no banco de dados
    const { email } = req.body
    const user = await User.findOne({ where: { email } })

    if (user) {
      req.flash('error', 'Usuário já cadastrado')
      return res.redirect('/signup')
    }

    if (!avatar) {
      req.flash('error', 'Foto de perfil não foi definida')
      return res.redirect('/signup')
    }

    if (!req.body.email) {
      req.flash('error', 'Email não digitado')
      return res.redirect('/signup')
    }

    if (!req.body.password) {
      req.flash('error', 'senha não digitada')
      return res.redirect('/signup')
    }

    await User.create({ ...req.body, avatar })
    return res.redirect('/')
  }
}

module.exports = new UserController()
