import React from 'react'
import { useNavigate } from 'react-router-dom'
import data from '../data/data'

const FeaturedProducts = () => {

	const navigate = useNavigate()
	const handleNavigate = () =>{
		navigate('/products')
	}

	const handleClick = (e)=>{
		const id = e.currentTarget.id
		if (id==="bag"){
			navigate('./productinfo', {state:{prodinfo:data[0]}})
		}
		else if(id==="jacket"){
			navigate('./productinfo', {state:{prodinfo:data[1]}})
		}
		else{
			navigate('./productinfo', {state:{prodinfo:data[2]}})
		}
	}

	return (
		<>
			<div className=" mt-10 bg-white text-black">
				<h1 className=" text-center py-4 font-f2 text-bold tracking-widest xl:text-5xl text-2xl md:text-4xl ">Featured Products</h1>
				<div className=" mt-10 lg:grid lg:grid-cols-3 justify-items-center">
					<div className="">
						<img id="bag" onClick={handleClick}  className='w-[400px] h-[300px]  hover:scale-105 duration-500 cursor-pointer mx-auto rounded-xl ring-1 ring-red-300  object-cover'  src={data[0].image} alt="" />
						<h1 className="text-center font-f2  text-xl mt-2 mb-3">Leather Bag <span className='ml-1 text-xl '>$40</span></h1>
					</div>
					<div className="">
					<img id="jacket" onClick={handleClick}  className='w-[400px]  h-[300px]  hover:scale-105 duration-500 cursor-pointer mx-auto rounded-xl ring-1 ring-red-300 object-cover' src={data[1].image} alt="" />
					<h1 className="text-center font-f2  text-xl mt-2 mb-3">Denim Jacket <span className='ml-1 text-xl '>$50</span></h1>
					</div>
					<div className="">
					<img id="shirt" onClick={handleClick} className='w-[400px]  h-[300px] hover:scale-105 duration-500 cursor-pointer  mx-auto rounded-xl ring-1 ring-red-300 object-cover'  src={data[2].image} alt="" />
					<h1 className="text-center font-f2  text-xl mt-2 mb-3">Cotton T-shirt  <span className='ml-1 text-xl '>$20</span></h1>
					</div>
				</div>
				<div className='flex'>
				<button onClick={handleNavigate} className="mx-auto btn">All Products</button>
				</div>
			</div>
		</>
	)
}

export default FeaturedProducts

