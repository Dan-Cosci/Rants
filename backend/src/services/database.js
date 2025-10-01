import mysql from 'mysql'
import config from '../config/config.js'

const db = mysql.createConnection({ // Changed from await mysql.createConnection to mysql.createConnection
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log(`Connected to the ${config.database.type} ${config.database.name} database`);
  }
});

db.query(`CREATE TABLE IF NOT EXISTS posts(
  id INT AUTO_INCREMENT UNIQUE NOT NULL,
  user_id INT NOT NULL,
  title VARCHAR(255) NOT NULL, 
  content TEXT NOT NULL, 
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )`
);

db.query(`CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT UNIQUE NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )`
);

export default db;