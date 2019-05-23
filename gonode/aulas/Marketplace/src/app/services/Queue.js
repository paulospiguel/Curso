/** FILA DE ENVIO EM BACKGROUD DE EMAILS UTILIZANDO O REDIS */
const kue = require('kue')
const redisConfig = require('../../config/redis')
const jobs = require('../jobs') // IMPORTA TODOS O JOBS

const Queue = kue.createQueue({ redis: redisConfig })

Queue.process(jobs.PurchaseMail.key, jobs.PurchaseMail.handle)

module.exports = Queue
