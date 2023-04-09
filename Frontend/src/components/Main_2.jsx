import React from 'react'
import MainA from '../images/mainA.jpg'
import MainB from '../images/mainb.jpg'

const Main_2 = () => {
  return (
	<div className='p-5 my-5 font-f2'>
		<div className="py-5 lg:grid lg:grid-cols-2  text-center">
			<div className="lg:mt-[7rem]">
				<h1 className="text-xl tracking-wide md:text-3xl">Custom Fashion Style only for you</h1>
				<p className="py-2">Contact us and tell us what you want in your products. We will deliver best for you.</p>
				<p className="py-1">Stay tuned for upcoming sales and get your favorite brand with a discount.</p>
			</div>
			<div className="hidden lg:flex">
				<img className='h-[400px] w-[300px] hidden xl:flex object-cover rounded-2xl rotate-12 hover:rotate-6 duration-500' src={MainB} alt="" />
				<img className='h-[400px] w-[300px]  object-cover rounded-2xl mx-1 ml-20 xl:ml-0' src={MainA} alt="" />
			</div>
		</div>

	</div>
  )
}

export default Main_2