const customer = require('../models/customer')('../banco.sqlite3')

const create = async (req, res) => {
  const newCustomer = await customer.create(req.body)
  res.send({
    success: true,
    newCustomer
  })
}

const findById = async (req, res) => {
  const customerFound = await customer.selectById(req.params.id)
  res.send({
    customerFound
  })
}

const findByName = async (req, res) => {
  const customerFound = await customer.selectByName(req.params.name)
  res.send({
    customerFound
  })
}

const remove = async (req, res) => {
  const response = await customer.remove(req.params.id)
  res.send({
    response
  })
}

const patch = async (req, res) => {
  const response = await customer.update(req.params.id, [req.body.name])
  res.send({
    data: response
  })
}

const findAll = async (req, res) => {
  const customers = await customer.selectAll()
  res.send({
    customers
  })
}

module.exports = {
  create,
  findById,
  findByName,
  remove,
  patch,
  findAll
}