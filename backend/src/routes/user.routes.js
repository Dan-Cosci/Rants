import express from "express";
import { getUsers } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get('/', getUsers);
// userRouter.get('/:id', getUserById);

export default userRouter;  