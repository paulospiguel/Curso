/* eslint-disable space-before-function-paren */
const express = require('express')
const mongoose = require('mongoose')
const databeseConfig = require('./config/database')

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE.ENV !== 'production' // Verifica ambiente de produção/desenvolvimento/teste

    this.databese()
    this.middelwares()
    this.routes()
  }

  databese() {
    mongoose.connect(databeseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true
    })
  }

  // Manipulação de dados
  middelwares() {
    this.express.use(express.json())
  }
  // Roteamento
  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
