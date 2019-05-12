/* eslint-disable space-before-function-paren */
const { User, Appointment } = require('../models')
const moment = require('moment')
const { Op } = require('sequelize')

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

  async appointmentday(req, res) {
    const { id } = req.session.user
    const date = moment()

    const appointments = await Appointment.findAll({
      where: {
        provider_id: id,
        date: {
          [Op.between]: [
            date.startOf('day').format(),
            date.endOf('day').format()
          ]
        }
      }
    })

    // console.log(appointments)

    // const person = await User.findByPk(appointments.user_id)
    // console.log(person)
    // if (appointments) {
    return res.render('appointments/appointmentday', { appointments })
    // }

    // return res.render('appointments/appointmentday')
  }
}

module.exports = new AppointmentController()
