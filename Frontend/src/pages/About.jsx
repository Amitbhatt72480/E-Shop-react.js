import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
	<>
  <Navbar />
  <div className="bg-gray-50 font-f2 text-black h-screen">
    <h1 className="p-10 text-2xl  md:text-5xl font-semibold">Welcome to E-Shop</h1>
    <p className="ml-10 text-xl">This Project is developed and deployed by Amit Bhatt</p>
    <h1 className="ml-10 text-xl my-2">GitHub Repo : <a href='https://github.com/Amitbhatt72480/E-Shop-react.js' className='font-bold ml-2 underline underline-offset-4 decoration-purple-400 hover:text-purple-800'>https://github.com/Amitbhatt72480/E-Shop-react.js</a></h1>
    <div className="ml-10">
      <h1 className="text-3xl font-bold py-8">Technologies Used: </h1>
      <h1 className="text-xl">Javascript Framework: <span className='font-semibold ml-2'>React.Js with React-router-dom and React-icons</span></h1>
      <h1 className="text-xl my-1">For Styling: <span className='font-semibold ml-2'>TailwindCSS with Google Fonts</span></h1>
      <h1 className="text-xl my-1">State Management: <span className='font-semibold ml-2'>React.js Context API</span></h1>
      <h1 className="text-xl my-1">Cloud Storage and Authentication: <span className='font-semibold ml-2'>FireBase / FireStore</span></h1>
      <h1 className="text-xl my-1">Backend: <span className='font-semibold ml-2'>Node.Js</span></h1>
      <h1 className="text-xl my-1">Checkout: <span className='font-semibold ml-2'>Stripe API</span></h1>
    </div>
    <h1 className="ml-10 text-2xl font-semibold mt-10">Thank You</h1>
  </div>

  <Footer />
  </>
  )
}

export default About