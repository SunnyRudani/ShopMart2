const express = require('express')
const { ensureAuthorized } = require('../middleware/auth')
const router = express.Router()




const productRoutes = require('./product')

router.use('/product', productRoutes)




module.exports = router