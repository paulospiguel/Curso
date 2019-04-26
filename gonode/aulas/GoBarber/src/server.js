/* eslint-disable space-before-function-paren */
const express = require('express')
const nunjucks = require('nunjucks') // Gerenciados de páginas
const path = require('path') // Configuração de caminhos (Automático)

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE.ENV !== 'production' // Verifica ambiente de produção/desenvolvimento/teste

    this.middelwares()
    this.views()
    this.routes()
  }

  // Manipulação de dados
  middelwares() {
    this.express.use(express.urlencoded({ extended: false }))
  }

  // Páginas
  views() {
    // Configuração de barras
    nunjucks.configure(path.resolve(__dirname, 'app', 'views'), {
      watch: this.isDev, // Assistir compilação das views
      express: this.express, // Servidor
      autoescape: true
    })
    this.express.use(express.static(path.resolve(__dirname, 'public')))
    this.express.set('view engine', 'njk')
  }
  // Roteamento
  routes() {
    this.express.use(require('./routes'))
  }
}

module.exports = new App().express
