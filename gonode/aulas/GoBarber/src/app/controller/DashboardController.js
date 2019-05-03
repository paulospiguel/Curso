class DashboardController {
  async create (req, res) {
    return res.render('dashboard')
  }
}

module.exports = new DashboardController()
