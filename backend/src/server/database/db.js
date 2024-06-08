import pkg from 'pg'
const { Pool } = pkg

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  AllowExitOnIdle: true
}

const pool = new Pool(config)

const dbase = async (query, values) => {
  try {
    const { rows } = await pool.query(query, values)
    return rows
  } catch ({ code, message }) {
    const error = { status: false, code, message }
    throw error
  }
}

export default dbase
