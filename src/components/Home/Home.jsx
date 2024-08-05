import React from 'react'
import Hero2 from '../Hero2/Hero2'
import Domain from '../Domain/index'
import Box from '../Box/Box'
import Cards from '../Cards/Cards'




const Home = () => {
  return (
    <div className='relative top-16'>
    <Hero2/>
      <Domain   />
      <Box/>
      <Cards/>

  
    </div>
  )
}

export default Home