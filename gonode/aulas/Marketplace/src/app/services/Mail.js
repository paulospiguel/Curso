const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

/** CONFIGURAÇÃO DE ENVIO DE EMAIL */
const transport = nodemailer.createTransport(mailConfig)

/** CONFIGURAÇÃO DE TEMPLETE EMAIL */
const viewPath = path.resolve(__dirname, '..', 'views', 'emails')

transport.use(
  'compile',
  hbs({
    viewEngine: exphbs.create({
      partialsDir: path.resolve(viewPath, 'partials'),
      defaultLayout: null
    }),
    viewPath,
    extName: '.hbs'
  })
)

module.exports = transport
