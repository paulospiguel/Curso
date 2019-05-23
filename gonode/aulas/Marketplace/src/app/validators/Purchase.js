const Joi = require('joi')

module.exports = {
  body: {
    ad: Joi.string().require(),
    content: Joi.string().require()
  }
}
