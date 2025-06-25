import React, { useContext, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { authdataContext } from '../context/Authcontext';
import axios from "axios"

function Login() {
 let [show,setShow] = useState(false)
let navigate = useNavigate()
let {serverUrl} = useContext(authdataContext)
let [email,setemail] = useState("")
let [password,setpassword] = useState("")
let [loading,setLoading] = useState("")
let [err,setErr] = useState("")


const handleLogin = async (e)=>{
  e.preventDefault()
  setLoading(true)
  try {
    let result = await axios.post(serverUrl + "/api/auth/login",{
email,
password
    },{withCredentials:true})
    console.log(result)
    setErr("")
    setLoading(false)
    setemail("")
    setpassword("")
  } catch (error) {
setErr(error.response.data.message)   
setLoading(false)
  }
}
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#614eeb]">
      <div className="w-[400px] h-[450px] bg-white rounded-xl shadow-lg p-8 flex flex-col gap-5">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <input required
          value={email}
          onChange={(e)=>setemail(e.target.value)}
            type="email"
            placeholder="Email"
            className="w-full border border-[#bfb3f2] px-4 py-2 rounded-md focus:outline-none"
          />
          <div className='relative'>

          <input
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
            type={show?"text":"password"}
            placeholder="Password"
            className="w-full border border-[#bfb3f2] px-4 py-2 rounded-md focus:outline-none"
            />
            <span className='absolute cursor-pointer right-[20px] top-[12px] text-lg text-[#a298ce]'
            onClick={()=>setShow(prev=>!prev)}>{show?<FaRegEye/>:<FaRegEyeSlash />}</span>
            </div>
            {err && <p className='text-center text-red-500'>
              *{err}
              </p>}
          <button
            type="submit"
            className="w-full bg-[#5645cf] hover:bg-indigo-700 text-white font-semibold py-2 rounded-md transition duration-200"
            disabled={loading}
          >
            {loading?"Loading...":"Login"}
          </button>
        </form>
        <p className='text-center font-medium'>Do you want to a new account ? <span className='text-[#726f9b] cursor-pointer' onClick={()=>navigate("/signup")}>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login
