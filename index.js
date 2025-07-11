import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import authRouter from "./Routes/auth.rout.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import userRouter from "./Routes/user.router.js"
dotenv.config()
let app = express()
let port = process.env.PORT || 4000
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.get("/",(req,res)=>{
    res.send("hello my name is ashish")
})
app.listen(port,()=>{
    connectDB()
    console.log(`server is started at ${port}`);
    
})