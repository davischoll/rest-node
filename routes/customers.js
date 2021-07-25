const express = require('express')
const router = express.Router()
const customersController = require('../controllers/customersController')

router.post('/', customersController.create)
router.get('/', customersController.findAll)
router.get('/:id', customersController.findById)
router.get('/select/:name', customersController.findByName)
router.delete('/:id', customersController.remove)
router.patch('/:id', customersController.patch)

module.exports = router