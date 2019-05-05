const { User } = require('../models')
class DashboardController {
  async index (req, res) {
    const providers = await User.findAll({ where: { provider: true } }) // Busca no banco
    return res.render('dashboard', { providers })
  }
}

module.exports = new DashboardController()
