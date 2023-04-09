import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
	<>
  <Navbar />
  <div className="text-black bg-gray-50 h-screen text-center font-f2 py-10">
    <h1 className="text-4xl font-semibold"> <span className="text-green-600">Congratulations !! </span> your order has been successfully placed.</h1>
    <h1 className="text-xl my-2 tracking-wider">Items will be delivered soon :) </h1>
    <div className="my-10 flex items-center justify-center space-x-9">
      <Link to='/products'><button className="btn">All products</button></Link>
      <Link to='/myorders'><button className="btn">My orders</button></Link>
    </div>
  </div>
  <Footer />
  </>
  )
}

export default Success