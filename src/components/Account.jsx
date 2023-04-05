import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { updateDoc, doc, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'



const Account = () => {

  const { user } = UserAuth();
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
      setSaved(doc.data()?.wishlist);
    })
  }, [user?.email])

  const productRef = doc(db, 'users', `${user?.email}`)

  const handleDelete = async (passedID) =>{
    try {
      const result = saved.filter((item) => item.id !== passedID)
      await updateDoc(productRef, {
        wishlist : result
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 text-black h-auto font-f2 p-4">
        <div className="md:flex md:space-x-10 items-center">
        <h1 className="text-4xl underline underline-offset-8 decoration-purple-400">Wishlist</h1>
        <h1 className="my-2 ">Welcome: <span className='font-bold'>{user?.email}</span> </h1>
        <Link to='/cart'><button className='text-xl bg-purple-400 text-white px-4 py-1 rounded-xl shadow-xl  '>Go to Cart</button></Link>
        </div>
        <div className="md:grid md:grid-cols-2  xl:grid-cols-3 gap-8 py-10 flex flex-col items-center">
        {saved.map((item) => {
          return <div className='w-[400px] h-[350px] bg-white rounded-2xl shadow-xl'>
            <img  className=' mt-4 w-[200px] h-[200px] object-contain mx-auto' src={item?.image} alt="" />
            <h1 className="text-xs mt-7 text-center tracking-wider">{item?.title} <span className='font-bold ml-2 text-xl block '>${item?.price} </span>
            <button onClick={()=>{handleDelete(item?.id)}} className="bg-purple-400 mb-4 px-3 py-1 text-white rounded-xl shadow-2xl font-bold font-f2 tracking-widest hover:scale-105 duration-300">Remove</button>
            </h1>
          </div>
        })}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Account