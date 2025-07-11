const Product = require('../models/Product')

exports.addProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort('-createdAt')
    res.json(products)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
