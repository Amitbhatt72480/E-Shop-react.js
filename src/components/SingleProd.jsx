import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { arrayUnion, doc, updateDoc} from 'firebase/firestore'



const SingleProd = ({id, title, image,desc, price, category}) => {

	const [like, setLike] = useState(false)
	const {user} = UserAuth()


	const productid = doc(db, 'users', `${user?.email}`)

	const handleSave = async () =>{
		setLike(true)
		await updateDoc(productid, {
			wishlist : arrayUnion({
				key:id,
				id: id,
				title: title,
				price : price, 
				description : desc,
				image : image, 
				category : category
			})
		})
	}



	const navigate = useNavigate()

	const handleNavigate = () =>{
		navigate('/productinfo', {state:{prodinfo:{id, title, image, desc, price, category}}})
	}

  return (
	<div className='mb-16'>
		<img  onClick={handleNavigate} className='w-[200px] h-[200px] cursor-pointer object-contain mx-auto' src={image} alt="" />
		<h1 className="text-xs mt-7 text-center tracking-wider">{title} <span className='font-bold ml-2 text-xl block '>${price} {like ? <AiFillHeart  className='inline-block text-red-600'/> : <AiOutlineHeart onClick={handleSave} className='inline-block'/>}</span>
		</h1>
	</div>
  )
}

export default SingleProd