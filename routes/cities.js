const express = require('express')
const router = express.Router()
const citiesController = require('../controllers/citiesController')

router.post('/', citiesController.create)
router.get('/', citiesController.findCities)

module.exports = router