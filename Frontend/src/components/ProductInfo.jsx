import React, { useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import Navbar from './Navbar'
import { AiOutlineStar, AiFillStar, AiOutlineMinus } from 'react-icons/ai'
import { BsPlusLg } from 'react-icons/bs'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import {arrayUnion, doc, updateDoc} from 'firebase/firestore'

const ProductInfo = () => {


	const [quantity, setQuantity] = useState(1)
	const location = useLocation();
	const { title, price, desc, image, id, category } = location.state.prodinfo
	const handleQuantity = (e) => {
		const id = e.currentTarget.id
		if (id === "plus") {
			setQuantity((prev) => {
				return prev + 1
			})
		}
		else {
			setQuantity((prev) => {
				if (prev === 1) {
					return 1
				}
				return prev - 1
			})
		}
	}

	const {user} = UserAuth();
	const productid = doc(db, 'users', `${user?.email}`)
	const [saved, setSaved] = useState(false)
	const handleCart = async () =>{
		setSaved(true)
		await updateDoc(productid, {
			cart: arrayUnion({
				id: id,
				title:title,
				quantity:quantity,
				image:image,
				price:price,
				description:desc,
				category:category
			})
		})
	}

	return (
		<>
			<Navbar />
			<div className="xl:grid  xl:grid-cols-2 mx-10 my-10 ">
				<div className="">
					<img className='w-[500px]  object-cover ring-1 ring-red-300 2xl:ml-24  rounded-xl h-[500px]' src={image} alt="img" />
				</div>
				<div className="mt-5  xl:-ml-20">
					<h1 className="lg:text-5xl text-3xl font-f3 tracking-wider">{title}</h1>
					<p className="flex items-center mt-3 lg:mt-0">
						<AiFillStar className='text-yellow-500' />
						<AiFillStar className='text-yellow-500' />
						<AiFillStar className='text-yellow-500' />
						<AiFillStar className='text-yellow-500' />
						<AiOutlineStar className='text-yellow-500' />
						<span className="text-xs tracking-wider font-thin mt-1 lg:my-5">20 Customer reviews</span>
					</p>
					<h1 className="lg:text-5xl text-2xl font-bold text-purple-400 mt-3 lg:mt-0 mb-2 lg:mb-7" >${price}</h1>
					<p className="lg:text-xl font-f3 tracking-widest">{desc}</p>
					<p className="text-xl lg:text-2xl mt-2 lg:mt-6 font-thin text-green-400"><span className='font-bold text-white'>Available</span>: In Stock</p>
					<p className="text-xl lg:text-2xl my-4 font-thin "><span className='font-bold'>Brand</span>: Nike</p>
					<hr />
					<div className="flex items-center  mt-5">
						<AiOutlineMinus id='minus' className='text-2xl lg:text-3xl cursor-pointer hover:scale-105 duration-300 hover:text-purple-400' onClick={handleQuantity} />
						<h1 className="mx-4 text-3xl lg:text-4xl  font-f3">{quantity}</h1>
						<BsPlusLg id='plus' className='text-2xl lg:text-3xl cursor-pointer hover:scale-105 duration-300 hover:text-purple-400' onClick={handleQuantity} />
					</div>
					{saved ? <Link to='/cart'><button className='btn'>Go to Cart</button></Link> :<button onClick={handleCart} className="btn">Add to Cart</button>}
					<Link to='/products'><button className="btn lg:ml-10 ml-4">All Products</button></Link>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default ProductInfo