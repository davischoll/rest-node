const db = require('../db')

const init = database => {

  const selectAll = async() => {
    const banco = await db.init(database)
    return await db.query(banco, `SELECT * FROM cities`)
  }

  const create = async(name, uf) => {
    const banco = await db.init(database)
    await db.queryWithParams(banco, `INSERT INTO cities (city_name, city_uf) VALUES (?, ?)`, [name, uf])
    
    const newCity = await db.query(banco, `SELECT * FROM cities ORDER BY city_id DESC LIMIT 1`)
    return newCity[0]
  }

  const selectByName = async(cityName) => {
    const banco = await db.init(database)
    const citiesFound = await db.query(banco, `SELECT * FROM cities WHERE city_name LIKE '%${cityName}%'`)

    if (citiesFound.length > 0)
      return citiesFound
    else
      return 'City not found!'
  }

  const selectByUf = async(cityUf) => {
    const banco = await db.init(database)
    const citiesFound = await db.query(banco, `SELECT * FROM cities WHERE city_uf = '${cityUf.toUpperCase()}'`)

    if (citiesFound.length > 0)
      return citiesFound
    else
      return 'City not found!'
  }

  return {
    selectAll,
    create,
    selectByName,
    selectByUf
  }
}

module.exports = init