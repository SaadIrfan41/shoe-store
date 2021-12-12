import useAxios from 'axios-hooks'
import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'
import imageNotFound from '../imageNotFound.jpg'
// import { useGetAllProductsQuery } from '../store/ProductsApi'

export type productTypes = {
  id: number
  category: string
  description: string
  image: string
  price: number
  title: string
  cartQuantity: number
  cartTotalAmount: number
  totalPrice: number
}

const Home = () => {
  const [{ data, loading, error }] = useAxios({
    url: 'https://the-sneaker-database.p.rapidapi.com/sneakers',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
      'x-rapidapi-key': 'cd017d018emsh9975e0b7b7eb7ddp18e81ejsn4134e6fb98f8',
    },
    params: { limit: '20' },
  })

  if (loading)
    return (
      <div className=' min-h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    )
  if (error) return <p>Error!</p>
  console.log(data)
  return (
    <div>
      <div className='bg-white'>
        <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
          <div className='space-y-12'>
            <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
              {data.results.map((product: any) => (
                <Fragment key={product.id}>
                  <Link to={`/product/${product.id}`}>
                    <li>
                      <div className='space-y-4'>
                        <div className=''>
                          <img
                            loading='lazy'
                            className=' shadow rounded-lg w-96 h-96'
                            src={
                              product.image.original === ''
                                ? imageNotFound
                                : product?.image?.original
                            }
                            alt='LOADIND_PRODUCT_IMAGE'
                          />
                        </div>

                        <div className='space-y-2'>
                          <div className='text-lg leading-6 font-medium space-y-1'>
                            <h3>{product.name}</h3>
                            <p className='text-indigo-600'>{product.gender}</p>
                          </div>
                          <ul className='flex space-x-5'>
                            <li>
                              <span className='text-gray-400 hover:text-gray-500'>
                                ${product.estimatedMarketValue}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </Link>
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
