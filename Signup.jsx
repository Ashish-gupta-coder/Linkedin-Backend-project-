import React, { useContext, useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import { authdataContext } from '../context/Authcontext';
import axios from "axios"
function Signup() {
let [show,setShow] = useState(false)
let navigate = useNavigate()
let {serverUrl} = useContext(authdataContext)
let [firstName,setFirstName] = useState("")
let [lastName,setLastName] = useState("")
let [userName,setUserName] = useState("")
let [email,setemail] = useState("")
let [password,setpassword] = useState("")
let [loading,setLoading] = useState("")
let [err,setErr] = useState("")


const handleSignUp = async (e)=>{
  e.preventDefault()
  setLoading(true)
  try {
    let result = await axios.post(serverUrl + "/api/auth/signup",{
firstName,
lastName,
userName,
email,
password
    },{withCredentials:true})
    console.log(result)
    setErr("")
    setLoading(false)
    setFirstName("")
    setLastName("")
    setUserName("")
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
        <h2 className="text-2xl font-semibold text-center mb-6">Signup</h2>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div className="flex gap-3 min-w-0">
            <input required
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="flex-1 min-w-0 border border-[#bfb3f2] px-4 py-2 rounded-md focus:outline-none"
            />
            <input required
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="flex-1 min-w-0 border border-[#bfb3f2] px-4 py-2 rounded-md focus:outline-none"
            />
          </div>
          <input required
          value={userName}
          onChange={(e)=>setUserName(e.target.value)}
            type="text"
            placeholder="Username"
            className="w-full border border-[#bfb3f2] px-4 py-2 rounded-md focus:outline-none"
          />
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
            {loading?"Loading...":"Sign Up"}
          </button>
        </form>
        <p className='text-center font-medium'>Do you have an account ? <span className='text-[#726f9b] cursor-pointer' onClick={()=>navigate("/login")}>Login</span></p>
      </div>
    </div>
  )
}

export default Signup
