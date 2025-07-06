const admin = require('firebase-admin')
const path = require('path')
const serviceAccount = require(path.join(__dirname, '../config/serviceAccountKey.json'))

if (!admin.apps.length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
}

const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]
  if (!token) return res.status(401).json({ message: 'Unauthorized' })

  try {
    const decoded = await admin.auth().verifyIdToken(token)
    req.user = decoded
    next()
  } catch (err) {
    console.error('Token verify error:', err.message)
    res.status(401).json({ message: 'Invalid token' })
  }
}

const adminOnly = (req, res, next) => {
  const adminEmails = ['noorulainfarooq41@gmail.com', 'admin@abc.com']
  if (!adminEmails.includes(req.user.email)) {
    return res.status(403).json({ message: 'Admins only' })
  }
  next()
}

module.exports = { auth, adminOnly }