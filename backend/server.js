const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

// ✅ Routes
app.use('/api/orders', require('./routes/orderRoutes'))
app.use('/api/products', require('./routes/productRoutes'))

app.use('/api/products', productRoutes)

// Health check
app.get('/', (_, res) => res.send('🚀 API running'))


app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

