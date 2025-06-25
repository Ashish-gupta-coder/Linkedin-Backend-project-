import express from "express"
import { login, logOut, signUP } from "../Controllers/auth.controllers.js"

let authRouter=express.Router()

authRouter.post("/signup",signUP)  
authRouter.post("/login",login)  
authRouter.get("/logout",logOut)  

export default authRouter