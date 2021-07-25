const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

app.listen(3000, (err) => {
  if (err)
    console.log('Unable to start server...')
  else
    console.log('Server running on port 3000')
})