/* eslint-disable space-before-function-paren */
const { User, Appointment } = require('../models')

class AppointmentController {
  async create(req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/create', { provider })
  }

  async store(req, res) {
    const { id } = req.session.user // Usuário que solicitou
    const { provider } = req.params // O id do usuário (pela requisicão post)
    const { date } = req.body // Valor do radio dentro da view available(index)

    await Appointment.create({
      user_id: id,
      provider_id: provider,
      date
    })

    return res.redirect('/app/dashboard')
  }
}

module.exports = new AppointmentController()
