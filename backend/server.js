import express from 'express';
import morgan from 'morgan';

import config from './src/config/config.js';
import './src/services/database.js'; 
import userRouter from './src/routes/user.routes.js';

import './src/models/user.model.js';
import './src/models/post.model.js';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json())

// routes
// app.use('/api/posts', postRouter)
app.use('/api/users', userRouter)

app.get('/', (req,res)=>{
  res.send("hello world");
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');

    app.listen(config.port, () => {
      console.log(`Server is listening on port ${config.port}`);
    });
  }
});

export default app;