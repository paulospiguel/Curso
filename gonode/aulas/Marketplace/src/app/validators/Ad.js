const Joi = require('joi')

module.exports = {
  body: {
    title: Joi.string().require(),
    description: Joi.string().require(),
    price: Joi.number().require()
  }
}
