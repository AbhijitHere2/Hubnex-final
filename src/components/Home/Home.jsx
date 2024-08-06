import React from 'react'
import Hero2 from '../Hero2/Hero2'
import Domain from '../Domain/index'
import Box from '../Box/Box'
import Cards from '../Cards/Cards'
import Certificate from '../Certificate/Certificate'
import Pricing from '../Pricing/Pricing'
import Footer from '../Footer/Footer'




const Home = () => {
  return (
    <div className='relative top-16 overflow-hidden'>
    <Hero2/>
      <Domain   />
      <Box/>
      <Cards/>
      <Certificate />
      <Pricing />
      <Footer />

  
    </div>
  )
}

export default Home