const express = require('express')
const router = express.Router()

const { createOrder, getAllOrders } = require('../controllers/orderController')
const { auth, adminOnly } = require('../middleware/auth')

router.post('/', auth, createOrder)                    // ✅ User creates order
router.get('/admin', auth, adminOnly, getAllOrders)    // ✅ Admin views all

module.exports = router
