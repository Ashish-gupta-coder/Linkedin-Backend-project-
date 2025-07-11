import express from "express"
import isAuth from "../middlewares/isAuth.js"
import { getCurrentUser } from "../Controllers/user.controller.js"

let userRouter=express.Router()

userRouter.get("/currentuser",isAuth,getCurrentUser)


export default userRouter