import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import {AiOutlineStar, AiFillStar, AiOutlineMinus} from 'react-icons/ai'
import {BsPlusLg} from 'react-icons/bs'
import Footer from './Footer'

const ProductInfo = () => {


	const [quantity, setQuantity] = useState(0)
	const location = useLocation();
	const { title, price, description, image, category } = location.state.prodinfo
	const handleQuantity = (e) =>{
		const id = e.currentTarget.id
		if (id==="plus"){
			setQuantity((prev)=>{
				return prev + 1
			})
		}
		else{
			setQuantity((prev)=>{
				if (prev===0){
					return 0
				}
				return prev - 1
			})
		}
	}

	return (
		<>
			<Navbar />
			{/* <Link to="/products"><button className="btn ml-32 ">Back to Products</button></Link> */}
			<div className="xl:grid xl:grid-cols-2 mx-10 my-10 ">
				<div className="">
					<img className='w-[500px] ring-1 ring-red-300 2xl:ml-24 object-cover rounded-xl h-[500px]' src={image} alt="img" />
				</div>
				<div className="mt-5  xl:-ml-20">
					<h1 className="lg:text-5xl text-3xl font-f3 tracking-wider">{title}</h1>
					<p className="flex items-center">
						<AiFillStar className='text-yellow-500'/>
						<AiFillStar className='text-yellow-500'/>
						<AiFillStar className='text-yellow-500'/>
						<AiFillStar className='text-yellow-500'/>
						<AiOutlineStar className='text-yellow-500'/>
						<p className="text-xs tracking-wider font-thin mt-1 lg:my-5">20 Customer reviews</p>
					</p>
					<h1 className="lg:text-5xl text-2xl font-bold text-purple-400 mb-2 lg:mb-7" >{price}</h1>
					<p className="lg:text-xl font-f3 tracking-widest">{description}</p>
					<p className="text-xl lg:text-2xl mt-2 lg:mt-6 font-thin text-green-400"><span className='font-bold text-white'>Available</span>: In Stock</p>
					<p className="text-xl lg:text-2xl my-4 font-thin "><span className='font-bold'>Brand</span>: Nike</p>
					<hr />
					<div className="flex items-center  mt-5">
						<AiOutlineMinus id='minus' className='text-2xl lg:text-3xl cursor-pointer hover:scale-105 duration-300 hover:text-purple-400' onClick={handleQuantity}/>
						<h1 className="mx-4 text-3xl lg:text-4xl  font-f3">{quantity}</h1>
						<BsPlusLg id='plus' className='text-2xl lg:text-3xl cursor-pointer hover:scale-105 duration-300 hover:text-purple-400' onClick={handleQuantity}/>
					</div>
					<Link to="/products"><button className="btn">Add to Cart</button></Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductInfo