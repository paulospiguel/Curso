const { User, Appointment } = require('../models')
const moment = require('moment')
const { Op } = require('sequelize')
moment.locale('pt-BR')

class ViewController {
  async index(req, res) {
    const { id } = req.session.user
    const date = moment()
    const today = moment().format('LL')
    const week = moment().format('dddd')

    const appointments = await Appointment.findAll({
      include: [{ model: User, as: 'user' }],
      where: {
        provider_id: req.session.user.id,
        date: {
          [Op.between]: [
            date.startOf('day').format(),
            date.endOf('day').format()
          ]
        }
      }
    })
    console.log(appointments)
    return res.render('appointments/appointmentday', {
      appointments,
      today,
      week
    })
  }
}

module.exports = new ViewController()
