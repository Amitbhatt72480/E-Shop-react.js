import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import axios from 'axios';

const Products = () => {

	const [allproducts, setAllProducts] = useState([])
	
useEffect(() => {
	axios.get('https://fakestoreapi.com/products').then(response => {
		setAllProducts(response)
		console.log(response);
	}).catch(error => {
		console.log(error);
	})
}, [])

return (
	<>
		<Navbar />
	</>
)
}

export default Products