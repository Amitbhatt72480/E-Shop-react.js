import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { onSnapshot, doc } from 'firebase/firestore'

const Myorders = () => {

	const { user } = UserAuth()
	const [orders, setOrders] = useState([])

	useEffect(() => {
		onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
			setOrders(doc.data()?.orders);
		})
	}, [user?.email])


	return (
		<>
			<Navbar />
			<div className="bg-white font-f2 text-black h-auto">
				<h1 className="ml-10 pt-10 text-2xl">Welcome: <span className="font-semibold">{user?.email}</span></h1>
				<h1 className="ml-10 py-5 text-4xl">Your Orders:</h1>
				<div className="ml-10 pb-20">
					{orders.map(item=>item).reverse().map((item)=>{
						return <div className="flex py-5">
						<img className='w-[150px] h-[150px] rounded-2xl object-cover' src={item?.image} alt="" />
						<div className="flex flex-col mx-5">
						<h1 className="text-xl tracking-wider  my-3">{item?.title}</h1>
						<h1 className="my-1">Quantity: <span className="font-semibold">{item?.quantity}</span></h1>
						<h1 className="">Total: <span className="font-semibold">${item?.price*item?.quantity}</span></h1>
						<h1 className="my-1">${item?.price} each</h1>
						</div>
						<div className="flex flex-col mx-5 py-3">
						<h1 className="">Ordered on: {item?.day} / {item?.month} / {item?.year}</h1>
						<h1 className="py-1 text-green-400">Successfully Ordered.</h1>
						</div>
					</div>
					})}
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Myorders