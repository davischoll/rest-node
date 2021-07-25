const db = require('../db')

const init = database => {

  const selectAll = async() => {
    const banco = await db.init(database)
    return await db.query(banco, `SELECT id, name, gender, birthday, age, ci.city_name
                                    FROM customers c
                                    LEFT JOIN cities ci ON ci.city_id = c.city_id`)
  }

  const create = async(customerData) => {
    customerData = [customerData.name,
                    customerData.gender,
                    customerData.birthday,
                    customerData.age,
                    customerData.city_id]
    const banco = await db.init(database)
    await db.queryWithParams(banco, `INSERT INTO customers (name, gender, birthday, age, city_id)
                                     VALUES (?, ?, ?, ?, ?)`, customerData)
  }

  const selectById = async(customerId) => {
    const banco = await db.init(database)
    return await db.query(banco, `SELECT * FROM customers WHERE id = ${customerId}`)
  }

  const selectByName = async(customerName) => {
    const banco = await db.init(database)
    const customersFound = await db.query(banco, `SELECT * FROM customers WHERE name LIKE '%${customerName}%'`)

    if (customersFound.length > 0)
      return customersFound
    else
      return 'Customer not found'
  }

  const remove = async(customerId) => {
    const banco = await db.init(database)
    customerFound = await selectById(customerId)

    if (customerFound.length == 0)
      return 'Customer not found on database'

    try {
      await db.queryWithParams(banco, `DELETE FROM customers WHERE id = ?`, [customerId])
      return true
    } catch (err) {
      throw new Error('Error on delete! Please, try again later.')
    }
  }

  const update = async(customerId, customerData) => {
    const banco = await db.init(database)
    customerFound = await selectById(customerId)

    if (customerFound.length == 0)
      return 'Customer not found on database'

    try {
      await db.queryWithParams(banco, `UPDATE customers SET name = ? WHERE id = ?`, [customerData, customerId])
      const customerUpdated = await selectById(customerId)
      return customerUpdated
    } catch (err) {
      throw new Error('Unable to update customer! Please, try again.')
    }
  }

  return {
    selectAll,
    create,
    selectById,
    selectByName,
    remove,
    update
  }
}

module.exports = init