const cities = require('../models/city')('../banco.sqlite3')

const findCities = async (req, res) => {
  let citiesSelected = ''
  const { name, uf } = req.query

  if (name != '' && name != undefined)
    citiesSelected = await cities.selectByName(name)
  else if (uf != '' && uf != undefined)
    citiesSelected = await cities.selectByUf(uf)
  else
    citiesSelected = await cities.selectAll()

  res.send(citiesSelected)
}

const create = async (req, res) => {
  const { name, uf } = req.body
  const newCity = await cities.create(name, uf)
  res.send(newCity)
}

module.exports = {
  findCities,
  create
}