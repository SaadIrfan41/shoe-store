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
      {/* <div className='w-full font-normal md:text-md'>
        <Link to='/cart' className='flex justify-center'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
              />
            </svg>
          </span>
          <div className='rounded-full bg-black text-white w-6 h-6 flex items-center justify-center'>
            <span className=''>{cartItems.length}</span>
          </div>
        </Link>
      </div> */}
    </div>
  )
}

export default Navbar
