import React from 'react'
import Mainimg from '../images/main.jpg'
import Mainbg2 from '../images/mainbg2.jpg'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
	<>
  <div className="md:grid md:grid-cols-2 p-10">
    <div className=" mt-10 md:mt-20">
      <h1 className="font-f2 text-5xl tracking-wider text-center md:text-left text-[#B2A4FF]">Choose Your Style</h1>
      <p className="leading-loose tracking-wider text-xl mt-5 break-normal">Check out our latest collection of Clothing, Accessories and Electronics. <span className='md:block mt-1'>Login to check all our products, Add them to your cart or wishlist.</span> <span className="md:block mt-1">Stay in trend with our latest fashion picks.</span> </p>
      <Link to="/products"><button className="btn">Shop Now</button></Link> 
    </div>
    <div className="hidden md:flex my-5">
      <img src={Mainimg} className="w-[50%] rounded-3xl transition-all rotate-12 hover:rotate-6 ease-in-out duration-500" alt="img" />
      <img src={Mainbg2} className="w-[50%] rounded-3xl " alt="img" />
    </div>
  </div>
  </>
  )
}

export default Main