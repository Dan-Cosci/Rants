import express from 'express';
import morgan from 'morgan';

import config from './src/config/config.js';
import userRouter from './src/routes/user.routes.js';

import './src/services/database.js';
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


app.listen(config.port, () => {
  console.log(`Server is listening on port http://localhost:${config.port}`);
});

export default app;