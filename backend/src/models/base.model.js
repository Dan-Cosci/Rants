class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }
  // Abstract methods to be implemented by subclasses 
  async save() { throw new Error(`Method 'save()' not implemented for ${this.tableName}.`); }
  async findAll() { throw new Error(`Method 'findAll()' not implemented for ${this.tableName}.`); }
  async findById(id) { throw new Error(`Method 'findById()' not implemented for ${this.tableName}.`); }
  async update(id, data) { throw new Error(`Method 'update()' not implemented for ${this.tableName}.`); }
  async delete(id) { throw new Error(`Method 'delete()' not implemented for ${this.tableName}.`); }
}

export default BaseModel;