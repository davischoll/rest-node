const express = require('express')
const router = express.Router()
const customers = require('./customers')
const cities = require('./cities')

router.use('/customers', customers)
router.use('/cities', cities)

module.exports = router