'use strict'

const crypto = require('crypto')
const moment = require('moment')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findBy('email', email)
      moment.locale('pt-br')
      const data = moment().format('LLL')

      user.token = crypto.randomBytes(10).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`,
          data
        },
        message => {
          message
            .to(user.email)
            .from('contato@newtechtecnologia.com | Área de Suporte')
            .subject('Recuperação de senha')
        }
      )
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Email não existente. Tente novamente!' } })
    }
  }

  async update ({ request, response }) {
    try {
      const { token, password } = request.all()
      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('2', 'days')
        .moment()
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O token de recuperação está expirado.' } })
      }

      user.token_created_at = null
      user.token = null
      user.password = password
      
      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo de errado. Token inválido.' } })
    }
  }
}

module.exports = ForgotPasswordController
