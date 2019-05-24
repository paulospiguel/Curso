const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async index (req, res) {
    const purchases = await Purchase.find()

    return res.json(purchases)
  }

  async store (req, res) {
    const { ad, content } = req.body
    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    /** ENVIANDO PARA FILA DE ENVIO DE EMAIL REDIS */
    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    /** SALVANDO NO BANCO DE DADOS */
    const purchase = await Purchase.create(req.params.id, {
      ...req.body,
      user: req.userId
    })

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
