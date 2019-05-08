/* eslint-disable space-before-function-paren */
const { User } = require('../models')

class AppointmentController {
  async create(req, res) {
    const provider = await User.findByPk(req.params.provider)

    return res.render('appointments/create', { provider })
  }
}

module.exports = new AppointmentController()
