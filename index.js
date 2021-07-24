const express = require('express')
const app = express()

app.get('/costumers', (req, res) => {
  res.send({
    clientes: ['all costumers']
  })
})

app.listen(3000, (err) => {
  if (err)
    console.log('Not possible to liste server...')
  else
    console.log('Server running on port 3000')
})