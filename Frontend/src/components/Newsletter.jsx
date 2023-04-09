import React, { useState } from 'react'
import {BsCheck2Circle} from 'react-icons/bs'

const Newsletter = () => {

  const [submitted, setSubmitted] = useState(false)
  const [email, setEmail] = useState('')
  const handleSubmit = () =>{
    if (email){
    setSubmitted(true)
    }
  }

  return (
	<div className='font-f2 bg-white text-black py-20 px-10'>
    <div className="">
      <h1 className="text-3xl font-bold">Join our Newsletter and get 10% off</h1>
      <p className="text-xl py-1">Subscribe to our newsletter to get to know all the latest fashion trends, latest Gadgets available in the market</p>
    </div>
    <div className="pt-5 flex items-center">
      <h1 className="text-xl font-semibold tracking-wider">Enter your Email: </h1>
      <input onChange={(e)=>setEmail(e.target.value)} className=' bg-gray-200 py-1 px-4 ml-4 rounded-xl' type="email" />
    </div>
    {submitted ? <div className="flex items-center">
    <h1 className="py-4 text-xl font-semibold text-green-500">Subscribed</h1>
    <BsCheck2Circle className='text-xl ml-2 text-green-500'/>
    </div>
    :
    <button onClick={handleSubmit} className="btn">Subscribe</button>
    }
    </div>
  )
}

export default Newsletter