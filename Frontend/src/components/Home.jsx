import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Main from './Main'
import Navbar from './Navbar'
import Main2 from './Main_2'
import Newsletter from './Newsletter'
import Footer from './Footer'


const Home = () => {


  return (
	<>
	<Navbar />
	<Main />
	<FeaturedProducts />
	<Main2 />
	<Newsletter />
	<Footer />
	</>
  )
}

export default Home