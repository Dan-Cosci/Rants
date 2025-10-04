import express from "express";

import { getUserById, getUsers } from "../controllers/user.controller.js";
import Authorize from "../middlewares/auth.middleware.js"

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', Authorize, getUserById);

export default userRouter;  