import React, { useState } from 'react'
import { FaOpencart } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx'

const Navbar = () => {
  
  const today = new Date();
  const year = today.getFullYear();

  const [hamopen, setHamopen] = useState(false)

  const toggleham = () => {
    setHamopen((prev) => {
      return !prev
    })
  }

  return (
    <>
      <div className="flex bg-gray-900 justify-between items-center p-5 font-f2">
        <div className="logo">
          <Link to="/"><h1 className="lg:text-4xl  md:text-3xl text-2xl font-bold ">E-shop</h1></Link>
        </div>
        <div className="hidden md:flex items-center text-xl">
          <Link to="/"><h1 className="mx-5">Home</h1></Link>
          <h1 className="mx-5">About</h1>
          <Link to='/products'><h1 className="mx-5">Products</h1></Link>
        </div>
        <div className="hidden md:flex items-center text-xl">
          <div className="flex mr-4 items-center bg-[#B2A4FF] hover:bg-purple-400 hover:scale-105 duration-150 ring-1 hover:ring-red-500 text-black rounded-3xl cursor-pointer"><button className="pl-4 pr-2 py-2  font-semibold  tracking-wider ">Cart </button><FaOpencart size={30} className='mr-3 ' /> </div>
          <div className='flex items-center bg-[#B2A4FF] hover:bg-purple-400 hover:scale-105 duration-150 ring-1 hover:ring-red-500 text-black rounded-3xl cursor-pointer'><button className="pl-4 pr-2 py-2 font-semibold  tracking-wider ">Login</button><BiUser className=' mr-3' /></div>
        </div>
        <div className="text-3xl md:hidden"><RxHamburgerMenu onClick={toggleham} /></div>
      </div>
      {hamopen && <div className="bg-gradient-to-b from-black via-gray-900 to-zinc-900  absolute top-0 left-0 w-full h-screen font-f2 after:transition after:ease-[ease] after:duration-500">
        <div className="flex justify-between items-center p-5">
          <div className="logo">
            <Link to="/"><h1 className="text-2xl font-bold ">E-shop</h1></Link>
          </div>
          <div className="">
            <RxCross1 onClick={toggleham} size={30} />
          </div>
        </div>
        <div className="p-5 text-2xl tracking-wider space-y-10 mt-10">
          <h1 className="border-b border-gray-200 w-[85%] py-2 px-4 rounded-3xl font-semibold tracking-widest ">Home</h1>
          <h1 className="border-b border-gray-200 w-[85%] py-2 px-4 rounded-3xl font-semibold tracking-widest ">About</h1>
          <h1 className="border-b border-gray-200 w-[85%] py-2 px-4 rounded-3xl font-semibold tracking-widest ">Products</h1>
        </div>
        <div className="flex items-center text-xl p-5">
          <div className="flex w-[40%] mr-4 items-center bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 rounded-3xl cursor-pointer"><button className="pl-4 pr-2 py-2  font-semibold  tracking-wider ">Cart </button><FaOpencart size={30} className='mr-3 ' /> </div>
          <div className='flex w-[40%] items-center bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 rounded-3xl cursor-pointer'><button className="pl-4 pr-2 py-2 font-semibold  tracking-wider ">Login</button><BiUser className=' mr-3' /></div>
        </div>
        <div className="text-white p-7 tracking-widest text-sm font-f1"><h1 className="">Copyright	&copy; E-shop {year} all rights reserved</h1></div>
      </div>}
    </>
  )
}

export default Navbar