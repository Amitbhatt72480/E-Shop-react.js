import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { UserAuth } from '../contexts/AuthContext'
import { db } from '../firebase'
import { updateDoc, getDocs, doc, onSnapshot } from 'firebase/firestore'



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
      <div className="bg-gray-100 text-black h-screen font-f2 p-4">
        <h1 className="text-4xl underline underline-offset-8 decoration-purple-400">Wishlist</h1>
        <div className="grid grid-cols-3 py-10">
        {saved.map((item) => {
          return <div className='w-[400px] h-auto bg-white rounded-2xl shadow-xl'>
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