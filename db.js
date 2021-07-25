const sqlite = require('sqlite3').verbose()

const openDatabase = databaseFile => new Promise((resolve, reject) => {
  const db = new sqlite.Database('banco.sqlite3', (err) => {
    if (err)
      reject(err)
    else
      resolve(db)
  })
})

const run = (db, query) => new Promise((resolve, reject) => {
  db.run(query, err => {
    if (err)
      reject(err)
    else
      resolve()
  })
})

const init = async (databaseFile) => {
  const db = await openDatabase(databaseFile)

  const tableExists = await query(db, `SELECT name FROM sqlite_master WHERE type = 'table' AND name = 'cities'`)
  if (tableExists.length === 0) {
    await run(db, `
      CREATE TABLE cities (
        city_id INTEGER PRIMARY KEY AUTOINCREMENT,
        city_name TEXT,
        city_uf TEXT
      );
    `)
    await run(db, `
      CREATE TABLE customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        gender TEXT,
        birthday TEXT,
        age INTEGER,
        city_id INTEGER
      );
    `)
  }

  return db
}

const queryWithParams = (db, query, values) => new Promise((resolve, reject) => {
  db.run(query, values, err => {
    if (err)
      reject(err)
    else
      resolve()
  })
})

const query = (db, query) => new Promise((resolve, reject) => {
  db.all(query, (err, rows) => {
    if (err)
      reject(err)
    else
      resolve(rows)
  })
})

module.exports = {
  init,
  queryWithParams,
  query
}