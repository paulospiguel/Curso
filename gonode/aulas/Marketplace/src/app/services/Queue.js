/** FILA DE ENVIO EM BACKGROUD DE EMAILS UTILIZANDO O REDIS */
const kue = require('kue')
const Sentry = require('@sentry/node')
const redisConfig = require('../../config/redis')
const jobs = require('../jobs') // IMPORTA TODOS O JOBS

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

Queue.on('error', Sentry.captureException) /** Captura de erro envio de email */

module.exports = Queue
