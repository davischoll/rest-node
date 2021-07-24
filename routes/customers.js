const express = require('express')
const router = express.Router()
const customersController = require('../controllers/customersController')

router.post('/', customersController.create)
router.get('/:id', customersController.findById)
router.get('/:name', customersController.findByName)
router.delete('/:id', customersController.remove)
router.put('/:id', customersController.put)
router.get('/', customersController.findAll)

module.exports = router