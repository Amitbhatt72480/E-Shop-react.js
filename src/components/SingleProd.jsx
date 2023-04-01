import React from 'react'
import { useNavigate } from 'react-router-dom'


const SingleProd = ({title, image,desc, price}) => {

	const navigate = useNavigate()

	const handleNavigate = () =>{
		navigate('/productinfo', {state:{prodinfo:{title, image, desc, price}}})
	}

  return (
	<div className='mb-16'>
		<img  onClick={handleNavigate} className='w-[200px] h-[200px] object-contain mx-auto' src={image} alt="" />
		<h1 className="text-xs mt-7 text-center tracking-wider">{title} <span className='font-bold ml-2 text-xl block'>${price}</span></h1>
	</div>
  )
}

export default SingleProd