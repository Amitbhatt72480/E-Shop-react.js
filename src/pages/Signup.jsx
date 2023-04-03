import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../contexts/AuthContext'

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const {createUser} = UserAuth();

  const handleSubmit = async (e) =>{
    e.preventDefault()
    setError('')
    try {
      await createUser(email, password)
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  }
	
  return (
	<>
	<Navbar />
	<div className="bg-gray-50 text-black h-screen font-f2">
	<div className="">
        <h1 className="text-3xl font-f2 pt-10 text-center">Fill your details to Sign Up</h1>
        <p className="text-center font-xl mt-1 font-f2 mb-4">Create your account with one easy click</p>
        <div className="bg-gradient-to-r from-purple-100 via-green-100 to-cyan-100 shadow-xl rounded-xl px-10 mt-10 mx-auto lg:w-[60%] md:[w-80%]  w-[90%] py-10">
          <form onSubmit={handleSubmit}>
            <div className="text-xl py-2 flex flex-col mb-6">
              <label className='mb-1'>Email:</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="email" />
            </div>
            <div className="text-xl py-2 flex flex-col mb-2">
              <label className='mb-1'>Password:</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="password" />
            </div>
            
            <p className="mt-1">Already have an account? <Link to="/signin" className='text-blue-500 ml-1'>Login</Link> </p>
            <div className="flex items-center mt-8">
              <button className="bg-[#4285F4] hover:scale-105 duration-200 font-f2 font-semibold text-white px-5 py-2 rounded-full mr-7 hover:bg-blue-600 hover:text-white ">Sign up</button>
            </div>
          </form>
        </div>
      </div>
	  </div>
	<Footer />
	</>
  )
}

export default Signup