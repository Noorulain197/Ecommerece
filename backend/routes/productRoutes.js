// backend/routes/productRoutes.js
const express = require('express')
const router = express.Router()
const { auth, adminOnly } = require('../middleware/auth')
const { addProduct, getAllProducts } = require('../controllers/productController')

router.post('/', auth, adminOnly, addProduct)
router.get('/', getAllProducts)

module.exports = router
