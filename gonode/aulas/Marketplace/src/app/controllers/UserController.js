/* eslint-disable space-before-function-paren */
const User = require('../models')

class UserController {
  async store(req, res) {
    const { email } = req.body
    if (await User.findOne({ email })) {
      return res.status(400).json('Email já cadastrado no banco!')
    }

    const user = await User.create(req.body)

    return res.json(user)
  }
}

module.exports = new UserController()
