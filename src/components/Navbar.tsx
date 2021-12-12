import React from 'react'
import { Link } from 'react-router-dom'

import SneakersLogo from '../SneakersLogo.webp'

const Navbar = () => {
  return (
    <div className=' border-b-2 border-gray-200 max-w-7xl mx-auto flex items-center justify-evenly'>
      <div className='flex items-center w-full '>
        <div className='w-24 h-20'>
          <img src={SneakersLogo} alt='StoreLogo' />
        </div>
        {/* <div>
          <h1 className='font-semibold md:text-2xl ml-4'>Sneakers Store</h1>
        </div> */}
      </div>
      <div className='w-full flex  font-normal md:text-md '>
        <Link to='/'>Home</Link>
      </div>
    </div>
  )
}

export default Navbar
