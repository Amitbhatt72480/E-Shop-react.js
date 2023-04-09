import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import SingleProd from './SingleProd';
import data from '../data/data'
import Footer from './Footer';
import { AiOutlineDown } from 'react-icons/ai'

const Products = () => {

	const [allproducts, setAllProducts] = useState([])
	const [temp, setTemp] = useState([])


	useEffect(() => {
		setAllProducts(data)
		setTemp(data)
	}, [])

	const handleFilter = (e) => {
		const id = e.currentTarget.id
		if (id === 'All') {
			setAllProducts(temp)
			return
		}
		const newItems = temp.filter((item) => {
			return item.category === id
		})
		setAllProducts(newItems)
	}
	const [dropdown, setdropdown] = useState(false)
	const handleDropdown = () => {
		setdropdown((prev) => {
			return !prev
		})
	}

	
	return (
		<>
			<Navbar />
			<div className="lg:grid lg:grid-cols-4 h-full bg-white text-black py-3 lg:py-16">
				<div className="">
					<div className="h-full  border-r mr-5 ml-5">
						<h1 className="flex items-center text-2xl lg:text-5xl font-bold font-f2 mb-10">Category <span className='lg:hidden inline-block ml-3'><AiOutlineDown onClick={handleDropdown} /></span></h1>
						<div className={dropdown ? null : 'hidden lg:flex lg:flex-col'}>
							<h1 id="All" onClick={handleFilter} className=" text-xl lg:text-3xl  mb-5 font-f2  hover:underline hover:underline-offset-8 cursor-pointer hover:decoration-purple-500">All</h1>
							<h1 id="men's clothing" onClick={handleFilter} className=" text-xl lg:text-3xl mb-5 font-f2 hover:underline hover:underline-offset-8 cursor-pointer hover:decoration-purple-500">Men's Fashion</h1>
							<h1 id="women's clothing" onClick={handleFilter} className=" text-xl lg:text-3xl mb-5 font-f2 hover:underline hover:underline-offset-8 cursor-pointer hover:decoration-purple-500">Women's Fashion</h1>
							<h1 id="Jewellery" onClick={handleFilter} className=" text-xl lg:text-3xl mb-5 font-f2 hover:underline hover:underline-offset-8 cursor-pointer hover:decoration-purple-500">Jewellery</h1>
							<h1 id="Electronics" onClick={handleFilter} className=" text-xl lg:text-3xl mb-5 font-f2 hover:underline hover:underline-offset-8 cursor-pointer hover:decoration-purple-500">Electronics</h1>
						</div>
					</div>
				</div>
				<div className="lg:col-span-3 lg:grid lg:grid-cols-3">
				<div className="col-span-3 -mt-4 flex items-center p-4">
					<h1 className="text-xl font-semibold ml-3 bg-white text-black  ">{allproducts.length} Products Found</h1>
				</div>
					{allproducts.map((item) => {
						return <SingleProd key={item.id} id={item.id} title={item.title} image={item.image} desc={item.description} price={item.price} category={item.category}/>
					})}
				</div>
			</div>
			<Footer />
		</>
	)
}
 
export default Products