import db from "../services/database.js";
import BaseModel from "./base.model.js";

/**
 * 
 * Represents a Post.
 * Instance methods like save() operate on a specific post object.
 * Static methods like findById() operate on the posts table directly.
 */

class Post extends BaseModel {
  
  constructor(postData = {}) {
    super('posts'); // Always operate on the 'posts' table
    this.id = postData.id || null;
    this.title = postData.title || '';
    this.content = postData.content || '';
    // Assign other properties from postData if they exist
    Object.assign(this, postData);
  }

  async save() {
    try {
      const query = `INSERT INTO ${this.tableName} SET ?`;
      const result = await db.query(query, this);
      return result.insertId;
    } catch (error) {
      throw new Error(`Error saving post: ${error.message}`);
    }
  }

  async findAll() {
    try {
      const query = `SELECT * FROM ${this.tableName}`;
      const posts = await db.query(query);
      return posts;
    } catch (error) {
      throw new Error(`Error fetching posts: ${error.message}`);
    }
  }

  async findById(id) {
    try {
      const query = `SELECT * FROM ${this.tableName} WHERE id = ?`;
      const post = await db.query(query, [id]);
      return post[0];
    } catch (error) {
      throw new Error(`Error fetching post by ID: ${error.message}`);   
    }
  }

  async update(id, data) {
    try {
      const query = `UPDATE ${this.tableName} SET ? WHERE id = ?`;
      const result = await db.query(query, [data, id]);
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Error updating post: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      const query = `DELETE FROM ${this.tableName} WHERE id = ?`;
      const result = await db.query(query, [id]);
      return result.affectedRows;
    } catch (error) {
      throw new Error(`Error deleting post: ${error.message}`);
    }
  }   
}