import { Router } from 'express';
import { SignIn, SignOut, SignUp } from '../controllers/auth.controller.js';

const Authrouter = Router();  

Authrouter.post('/sign-up', SignUp);
Authrouter.post('/sign-in', SignIn);
Authrouter.post('/sign-out', SignOut);

export default Authrouter;