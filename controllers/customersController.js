const create = (req, res) => {
  res.send({
    success: true,
    data: req.body
  })
}

const findById = (req, res) => {
  res.send({
    name: 'Customer 1'
  })
}

const findByName = (req, res) => {
  res.send({
    name: 'Customer found'
  })
}

const remove = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: 'id' + req.params.id
  })
}

const put = (req, res) => {
  console.log(req.body)
  res.send({
    success: true,
    data: req.body
  })
}

const findAll = (req, res) => {
  res.send({
    clientes: ['all custumers']
  })
}

module.exports = {
  create,
  findById,
  findByName,
  remove,
  put,
  findAll
}