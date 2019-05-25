const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async index (req, res) {
    const purchases = await Purchase.find({ status: null })

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

    const purchase = await Purchase.create({
      ...req.body,
      user: req.userId
    })

    return res.json(purchase)
  }

  async purchaseUpdate (req, res) {
    const purchaseAd = await Purchase.findById(req.params.id)

    const purchase = await Purchase.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    await Ad.findByIdAndUpdate(
      purchaseAd.ad,
      { purchasedBy: purchaseAd.id },
      {
        new: true
      }
    )

    return res.json(purchase)
  }
}

module.exports = new PurchaseController()
