const Joi = require('joi')

module.exports = {
  body: {
    email: Joi.string()
      .email()
      .require(),
    password: Joi.string().require()
  }
}
