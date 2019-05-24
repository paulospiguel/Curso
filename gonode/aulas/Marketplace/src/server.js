/* eslint-disable space-before-function-paren */
require('dotenv').config()
require('moment').locale('pt-BR')

const express = require('express')
const mongoose = require('mongoose')
const Sentry = require('@sentry/node')
const Youch = require('youch')
const validate = require('express-validation')
const databeseConfig = require('./config/database')
const sentryConfig = require('./config/sentry')

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE.ENV !== 'production' // Verifica ambiente de produção/desenvolvimento/teste

    this.sentry()
    this.databese()
    this.middelwares()
    this.routes()
    this.exception()
  }
  sentry() {
    Sentry.init(sentryConfig)
  }

  databese() {
    mongoose.connect(databeseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  // Manipulação de dados
  middelwares() {
    this.express.use(Sentry.Handlers.requestHandler())
    this.express.use(express.json())
  }
  // Roteamento
  routes() {
    this.express.use(require('./routes'))
  }

  /** TRATAMENTO DE ERROS */
  exception() {
    if (process.env.NODE_ENV === 'production') {
      this.express.use(Sentry.Handlers.errorHandler())
    }

    this.express.use(async (err, req, res, next) => {
      if (err instanceof validate.ValidationError) {
        return res.status(err.status).json(err, req)
      }

      /** FORMATAÇÃO DE MENSAGEM DE ERROR */
      if (process.env.NODE_ENV !== 'production') {
        const youch = new Youch(err, req)

        return res.json(await youch.toJSON())
        // return res.send(await youch.toHTML()) /** MOSTRAR EM VERSÃO HTML */
      }

      return res
        .status(err.status || 500)
        .json({ error: 'Internal Server Error' })
    })
  }
}

module.exports = new App().express
