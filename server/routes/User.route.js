import express from "express";
import { CreateUser, LoginUser } from "../controller/User.controller.js";

const UserRouter = express.Router();

UserRouter.post("/create", CreateUser);
UserRouter.post("/login", LoginUser);
export default UserRouter;
