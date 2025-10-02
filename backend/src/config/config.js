import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',

  jwt: {
    secretKey: process.env.JWT_SECRET_KEY || 'supersecretjwtkey',
    tokenHeaderKey: process.env.TOKEN_HEADER_KEY || 'x-auth-token',
    expiresIn: process.env.JWT_EXPIRES_IN || '1h',
  },

  database: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    name: process.env.DB_NAME || 'blog',
    type: process.env.DBMS || 'mysql', // e.g., 'mysql', 'postgres', 'sqlite', 'mongodb'

  }
};

export default config;