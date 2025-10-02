import db from "../services/database.js";
import BaseModel from "./base.model.js";

/**
 * Post Model
 * Instance methods = operate on one Post object
 * Static methods = operate on the posts table
 */
class Post extends BaseModel {
  constructor(postData = {}) {
    super('posts');
    this.id = postData.id || null;
    this.title = postData.title || '';
    this.content = postData.content || '';
    this.user_id = postData.user_id || null; // add user relation
    this.createdAt = postData.createdAt || null;
    this.updatedAt = postData.updatedAt || null;
  }

  /** Save a new post */
  async save() {
    if (!this.title || !this.content || !this.user_id) {
      throw new Error('Missing required fields');
    }
    const sql = `INSERT INTO ${this.tableName} (user_id, title, content) VALUES (?, ?, ?)`;
    const [result] = await db.execute(sql, [this.user_id, this.title, this.content]);
    this.id = result.insertId;
    return this.id;
  }

  /** Get all posts */
  static async findAll() {
    const sql = `SELECT * FROM posts ORDER BY created_at DESC`;
    const [rows] = await db.query(sql);
    return rows;
  }

  /** Find one post by ID */
  static async findById(id) {
    const sql = `SELECT * FROM posts WHERE id = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows[0] || null;
  }

  /** Update a post */
  static async update(id, data) {
    const fields = [];
    const values = [];
    for (const key in data) {
      fields.push(`${key} = ?`);
      values.push(data[key]);
    }
    const sql = `UPDATE posts SET ${fields.join(', ')} WHERE id = ?`;
    values.push(id);
    const [result] = await db.execute(sql, values);
    return result.affectedRows > 0;
  }

  /** Delete a post */
  static async delete(id) {
    const sql = `DELETE FROM posts WHERE id = ?`;
    const [result] = await db.execute(sql, [id]);
    return result.affectedRows > 0;
  }
}

export default Post;
