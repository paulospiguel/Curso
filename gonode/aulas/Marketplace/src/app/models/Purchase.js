const mongoose = require('mongoose')
// const mongoosePaginate = require('mongoose-paginate')

const Purchase = new mongoose.Schema({
  ad: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: null
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})

// Purchase.plugin(mongoosePaginate)

module.exports = mongoose.model('Purchase', Purchase)
