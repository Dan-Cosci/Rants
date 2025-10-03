import db from "../services/database.js";
import BaseModel from "./base.model.js";

class User extends BaseModel{

  constructor(user = {}){
    super('users');
    this.id = user.id || null;
    this.username = user.username || '';
    this.email = user.email || '';
    this.password = user.password || '';
    this.createdAt = user.createdAt || null;
    this.updatedAt = user.updatedAt || null;
  }

  async save() {
    if (!this.username || !this.email || !this.password){ throw new Error('Missing required fields');  }
    const sql = `INSERT INTO ${this.tableName} (username, email, password) VALUES (?, ?, ?)`;
    const [result] = await db.execute(sql, [
      this.username, 
      this.email, 
      this.password
    ]);
    this.id = result.insertId;

    return {
      id: this.id,
      username: this.username,
      email: this.email,
      createdAt: this.createdAt ? null : new Date(),
      updatedAt: new Date()
    };
  
  }

  async findAll() {
    const query = `SELECT * FROM ${this.tableName}`;
    const [users] = await db.query(query);
    return users;
  }
  async findById(id) {
    const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
    const [rows] = await db.execute(query, [id]);
    return rows[0];
  }
  async findByUser(username) {
    const query = `SELECT * FROM ${this.tableName} WHERE username = ?`;
    const [rows] = await db.execute(query, [username]);
    return rows[0];
  }
  async findByEmail(email) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid email format');
    const query = `SELECT * FROM ${this.tableName} WHERE email = ?`;
    const [rows] = await db.execute(query, [email]);
    return new User(rows[0]);
  }

  async update(id, data) {
    const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
    const [result] = await db.execute(query, [data, id]);
    return result.affectedRows;
  }

  async delete(id) {
    const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
    const [result] = await db.execute(query, [id]);
    return result.affectedRows;
  }
}

export default User;