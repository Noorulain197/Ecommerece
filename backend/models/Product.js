const mongoose = require('mongoose')

const productSchema = new mongoose.Schema(
  {
    title:       { type: String,  required: true },
    price:       { type: Number,  required: true },
    stock:       { type: Number,  default: 0 },
    images:      [String],
    description: String,
    category:    String,
  },
  { timestamps: true }
)

module.exports = mongoose.model('Product', productSchema)
