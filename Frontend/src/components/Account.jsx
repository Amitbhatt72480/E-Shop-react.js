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

  const handleDelete = async (passedID) => {
    try {
      const result = saved.filter((item) => item.id !== passedID)
      await updateDoc(productRef, {
        wishlist: result
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      {user ? <div className="bg-gray-100 text-black h-auto font-f2 p-4">
        <div className="md:flex md:space-x-10 items-center">
          <h1 className="text-4xl underline underline-offset-8 decoration-purple-400">Wishlist</h1>
          <h1 className="my-2 ">Welcome: <span className='font-bold'>{user?.email}</span> </h1>
          <Link to='/cart'><button className='text-xl bg-purple-400 text-white px-4 py-1 rounded-xl shadow-xl  '>Go to Cart</button></Link>
          <Link to='/myorders'><button className="text-xl bg-purple-400 text-white px-4 py-1 rounded-xl shadow-xl">My orders</button> </Link>
        </div>
        {saved.length !== 0 ? <div className="md:grid md:grid-cols-2  xl:grid-cols-3 gap-8 py-10 flex flex-col items-center">
          {saved.map(item=>item).reverse().map((item)=>{
            return <div key={item?.id} className='w-[400px] h-auto bg-white rounded-2xl shadow-xl'>
            <img className=' mt-4 w-[300px] h-[220px] object-contain mx-auto' src={item?.image} alt="" />
            <h1 className="text- mt-7 text-center tracking-wider">{item?.title} <span className='font-bold ml-2 text-xl block '>${item?.price} </span>

              <button onClick={() => { handleDelete(item?.id) }} className="bg-purple-400 mb-4 px-5 py-2 my-4 text-white rounded-xl shadow-2xl font-bold font-f2 tracking-widest hover:scale-105 duration-300">Remove</button>
            </h1>
          </div>
          })}
        </div>
          :
          <div className='h-screen'>
            <h1 className="text-2xl tracking-wider mt-10 ">No items in Cart. Check our products and start adding it to your wishlist</h1>
            <Link to='/products'> <button className="btn">All Products</button></Link>
          </div>}
      </div> :
        <div className="h-screen bg-white text-black">
          <h1 className="p-4 text-4xl font-bold">WishList</h1>
          <h1 className="p-4 text-3xl ">You are not Logged in. Log in or sign up to add items to your wishlist</h1>
          <Link to='/signup'><button className="ml-4 btn">Login</button></Link>
        </div>
      }
      <Footer />
    </>
  )
}

export default Account