const nodemailer = require('nodemailer')
const path = require('path')
const hbs = require('nodemailer-express-handlebars')
const exphbs = require('express-handlebars')
const mailConfig = require('../../config/mail')

/** CONFIGURAÇÃO DE ENVIO DE EMAIL */
const transport = nodemailer.createTransport(mailConfig)

/** CONFIGURAÇÃO DE TEMPLETE EMAIL */
transport.use(
  'compile',
  hbs({
    /* viewEngine: exphbs.create({
      partialsDir: path.resolve(viewPath, 'partials')
    }), */
    viewEngine: exphbs.create({ partialsDir: [] }), // Não Resolveu! :(
    viewPath: path.resolve(__dirname, '..', 'views', 'emails'),
    extName: '.hbs'
  })
)

module.exports = transport
