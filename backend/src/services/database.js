import mysql from 'mysql2/promise';
import config from '../config/config.js';

// Create and connect (promise API auto-connects)
const db = await mysql.createConnection({
  host: config.database.host,
  user: config.database.user,
  password: config.database.password,
  database: config.database.name
});

console.log(`Connected to the ${config.database.type} ${config.database.name} database`);

// Drop tables if development
if (config.env === 'development') {
  await db.execute(`DROP TABLE IF EXISTS posts`);
  await db.execute(`DROP TABLE IF EXISTS users`);
  console.log('Tables dropped!');
}

// Create tables
await db.execute(`
  CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT UNIQUE NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )
`);

await db.execute(`
  CREATE TABLE IF NOT EXISTS posts (
    id INT AUTO_INCREMENT UNIQUE NOT NULL,
    user_id INT NOT NULL,
    title VARCHAR(255) NOT NULL, 
    content TEXT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
  )
`);

// Seed dummy users
await db.execute(`
  INSERT IGNORE INTO users (username, email, password) VALUES
  ('alice', 'alice@example.com', 'password123'),
  ('bob', 'bob@example.com', 'password123'),
  ('charlie', 'charlie@example.com', 'password123'),
  ('diana', 'diana@example.com', 'password123'),
  ('evan', 'evan@example.com', 'password123'),
  ('fiona', 'fiona@example.com', 'password123'),
  ('george', 'george@example.com', 'password123'),
  ('hannah', 'hannah@example.com', 'password123'),
  ('ian', 'ian@example.com', 'password123'),
  ('judy', 'judy@example.com', 'password123')
`);

// Seed dummy posts
await db.execute(`
  INSERT IGNORE INTO posts (user_id, title, content) VALUES
  (1, 'First Post', 'This is the first post by Alice.'),
  (1, 'Thoughts on Node.js', 'Node.js is great for building APIs.'),
  (1, 'A new day', 'Just another rant.'),
  (2, 'My first rant', 'Hello world! This is Bob.'),
  (2, 'Databases', 'Choosing the right database is key.'),
  (2, 'Express vs Others', 'Express is minimalist and powerful.'),
  (3, 'Web Development', 'The world of web dev moves fast.'),
  (3, 'Learning to code', 'It is a journey.'),
  (3, 'My thoughts on tech', 'So many interesting things are happening.')
`);

console.log('Dummy data has been inserted!');

export default db;
