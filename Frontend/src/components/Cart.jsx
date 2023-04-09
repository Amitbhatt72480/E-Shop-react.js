import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { updateDoc, arrayUnion, doc, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'

const Cart = () => {

	const date = new Date();
	const year = date.getFullYear()
	const month = date.getMonth()
	const day = date.getDate()

	const { user } = UserAuth()
	const [cart, setCart] = useState([])
	const [loading, setLoading] = useState(true)
	let totalAmount = 0

	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
			setCart(doc.data()?.cart);
		})
	}, [user?.email])

	const productRef = doc(db, 'users', `${user?.email}`)

	const handleDelete = async (passedID) => {
		try {
			const result = cart.filter((item) => item.id !== passedID)
			await updateDoc(productRef, {
				cart: result
			})
		} catch (error) {
			console.log(error);
		}

	}


	const addDoc = async (item)=>{
		await updateDoc(productRef, {
			orders: arrayUnion({
				id:item?.id,
				title:item?.title,
				price:item?.price,
				image:item?.image,
				quantity:item?.quantity,
				year:year,
				month:month,
				day:day
			})
		})
	}
	const checkout = async () => {
		
		setLoading(false)
		const cartItems = []
		cart.forEach((item) => {
			addDoc(item)
			cartItems.push({
				id: item?.id,
				quantity: item?.quantity
			})
		})

		await fetch('http://localhost:4000/checkout', {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ items: cartItems })
		}).then((response) => {
			return response.json();
		}).then((response) => {
			if (response.url) {
				window.location.assign(response.url); // Forwarding user to Stripe
			}
		});
		await updateDoc(productRef, {
			cart: []
		})
	}


	return (
		<>
			<Navbar />
			{user ? <div className="p-4 bg-gray-100 text-black h-screen">
				<h1 className="text-center font-f2 text-3xl">Your Cart</h1>
				{cart.length !== 0 ?
					<div className="py-10 flex flex-col ">
						{cart.map(item=>item).reverse().map((item)=>{
							return <div key={item?.id} className="mb-16 flex">
							<img className='w-[100px] h-[100px] object-cover rounded-xl ring-1 ring-purple-300' src={item?.image} alt="" />
							<div className="mx-6 ">
								<h1 className="font-semibold  md:text-xl tracking-widest">{item?.title}</h1>
								<h1 className="md:text-lg tracking-wider">Price: <span className='font-bold'>${item?.price}</span> </h1>
								<h1 className="font-semibold">Quantity: {item?.quantity}</h1></div>
							<div className="mx-10 ">
								<h1 className=" font-semibold text-xl">Subtotal: <span className='font-bold'>${item?.price * item?.quantity} <span className='hidden'>{totalAmount += item?.price * item?.quantity}</span></span></h1>
								<button onClick={() => { handleDelete(item?.id) }} className="bg-purple-500 text-white ring-1 ring-teal-300 px-5 py-1 rounded-xl tracking-widest mt-2 hover:scale-105 duration-500 hover:bg-purple-600 font-semibold">Remove</button>
							</div>
						</div>
						})}
					</div>
					:
					<div className="text-center py-10">
						<h1 className="text-2xl tracking-wider">No items in your Cart.</h1>
						<p className="text-xl tracking-wider">Check out all our latest products and add them in your cart.</p>
						<Link to='/products'><button className="btn">All Products</button></Link>
					</div>
				}
				{cart.length !== 0 && <div className="md:absolute md:right-[5%] md:top-[23%] lg:right-[20%] lg:top-[23%] xl:right-[30%] xl:top-[23%]">
					<h1 className="text-4xl font-semibold">Total Bill: </h1>
					<p className="tracking-widest ml-1 my-1">Free Shipping</p>
					<p className="text-xl tracking-wider">Your Email:<span className='font-bold ml-2 tracking-wider'>{user?.email}</span></p>
					<h1 className="font-bold text-2xl mt-3 tracking-widest text-green-500">${totalAmount}</h1>
					{loading ?
						<button onClick={checkout} className="btn">Checkout</button>
						:
					<button disabled type="button" className="py-3 mt-10 px-5 mr-2  font-medium  text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
						<svg aria-hidden="true" role="status" className="inline w-4 h-4 mr-3 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
						<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
						</svg>
						Loading...
					</button>	
				}
				</div>}

			</div>
				:
				<div className="h-screen text-black bg-white text-center">
					<h1 className="trackin-widest text-5xl font-semibold py-5">Your Cart</h1>
					<h1 className="text-3xl py-2">You are not logged in!</h1>
					<p className="text-xl">Log in or sign up to check all our latest projects.</p>
					<Link to='/signup'><button className="btn">Log in</button></Link>
				</div>
			}
			<Footer />
		</>
	)
}

export default Cart