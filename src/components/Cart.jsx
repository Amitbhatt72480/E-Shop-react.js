import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import {updateDoc, doc, onSnapshot} from 'firebase/firestore'
import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'

const Cart = () => {

	const {user} = UserAuth()
	const [cart, setCart] = useState([])

	useEffect(()=>{
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc)=>{
			setCart(doc.data()?.cart);
		})
	}, [user?.email])

	const [cartQuan, setCartQuan] = useState(cart.price)
	const handleCartQuan = () =>{
		console.log(cartQuan);
		console.log(cart);
	}

  return (
	<>
	<Navbar />
	<div className="p-4 bg-gray-100 text-black">
		<h1 className="text-center font-f2 text-3xl">Your Cart</h1>
		<div className="md:grid md:grid-cols-2  xl:grid-cols-3 gap-8 py-10 flex flex-col items-center">
			{cart.map((item)=>{
				return <div className='w-[400px] h-[350px] bg-white rounded-2xl shadow-xl'>
				<img  className=' mt-4 w-[200px] h-[200px] object-contain mx-auto' src={item?.image} alt="" />
				<h1 className="text-xs mt-7 text-center tracking-wider ">{item?.title} 
				</h1>
				<div className="flex ">
					<h1 className="mx-auto font-bold text-xl tracking-wider ">{item?.price} X {item?.quantity}
					</h1>
				</div>
				<div className="flex items-center justify-center">
				<AiOutlineMinus onClick={handleCartQuan} size={30}  className='font-bold cursor-pointer hover:scale-105 duration-300 mx-3 bg-purple-400 text-white rounded-full'/>
				<button  className=" bg-purple-400 mb-4 px-3 my-3 py-2 text-white rounded-xl shadow-2xl font-bold font-f2 tracking-widest hover:scale-105 duration-300">Remove</button>
				<AiOutlinePlus onClick={handleCartQuan} size={30}  className='font-bold cursor-pointer hover:scale-105 duration-300 mx-3 bg-purple-400 text-white rounded-full'/>
				</div>
			  </div>
			})}
			<div className="">
				<h1 className="font-bold text-3xl font-f2 tracking-wider py-3 underline underline-offset-8 decoration-purple-500">Your Total Value</h1>

			</div>
		</div>
	</div>
	<Footer />
	</>
  )
}

export default Cart