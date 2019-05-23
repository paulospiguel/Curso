const Joi = require('joi')

module.exports = {
  body: {
    name: Joi.string()
      .required()
      .min(5),
    email: Joi.string()
      .email()
      .require(),
    password: Joi.String()
      .require()
      .min(6)
  }
}
