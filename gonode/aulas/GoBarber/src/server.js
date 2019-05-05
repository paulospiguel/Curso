/* eslint-disable space-before-function-paren */
const express = require('express')
const session = require('express-session') // Cria sessão de usuários
const LokiStore = require('connect-loki')(session) // Cria banco de dados para armazenar sessões
const nunjucks = require('nunjucks') // Gerenciados de páginas
const path = require('path') // Configuração de caminhos (Automático)
const flash = require('connect-flash') // Cria mensagens de erro

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
    this.express.use(flash())
    this.express.use(
      session({
        name: 'root',
        secret: 'MyAppSecret',
        resave: true,
        store: new LokiStore({
          path: path.resolve(__dirname, '..', 'tmp', 'sessions.db')
        }),
        saveUninitialized: true
      })
    )
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
