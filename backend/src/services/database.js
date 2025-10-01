import mysql from 'mysql'
import config from '../config/config.js'

const db = mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name
});

export default db;