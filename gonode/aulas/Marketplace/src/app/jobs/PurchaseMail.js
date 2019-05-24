/* eslint-disable space-before-function-paren */
const Mail = require('../services/Mail')
const moment = require('moment')

class PurchaseMail {
  get key() {
    return 'PurchaseMail'
  }
  async handle(job, done) {
    const { user, content, ad } = job.data
    const dateNow = moment().format('LLLL')

    await Mail.sendMail({
      from: '"NewTech Tecnologia" <contato@newtechtecnologia.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad, dateNow }
    })
    return done()
  }
}

module.exports = new PurchaseMail()
