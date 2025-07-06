const Order   = require('../models/order')
const Product = require('../models/Product')
const mongoose = require('mongoose')

// POST /api/orders
exports.createOrder = async (req, res) => {
  const { cartItems, shippingAddress } = req.body
  if (!cartItems?.length) return res.status(400).json({ message: 'Cart empty' })

  const session = await mongoose.startSession()
  try {
    session.startTransaction()

    // 1) stock check & decrement
    const bulkOps = cartItems.map(i => ({
      updateOne: {
        filter: { _id: i._id, stock: { $gte: i.quantity } },
        update: { $inc: { stock: -i.quantity } },
      },
    }))
    const bulkRes = await Product.bulkWrite(bulkOps, { session })
    if (bulkRes.modifiedCount !== cartItems.length)
      throw new Error('Insufficient stock for one or more items')

    // 2) total calc
    const total = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0)

    // 3) create order
    const [order] = await Order.create(
      [
        {
          user: req.user._id,
          items: cartItems.map(i => ({
            product: i._id,
            title: i.title,
            price: i.price,
            quantity: i.quantity,
            color: i.color || 'default',
          })),
          total,
          shippingAddress,
        },
      ],
      { session }
    )

    await session.commitTransaction()
    res.status(201).json(order)
  } catch (err) {
    await session.abortTransaction()
    res.status(400).json({ message: err.message })
  } finally {
    session.endSession()
  }
}

// GET /api/orders/admin   (admin only)
exports.getAllOrders = async (req, res) => {
  const orders = await Order.find().populate('user').sort('-createdAt')
  res.json(orders)
}
