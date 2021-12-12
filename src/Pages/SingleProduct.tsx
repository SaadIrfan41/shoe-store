import useAxios from 'axios-hooks'
import { Link, useParams } from 'react-router-dom'
import imageNotFound from '../imageNotFound.jpg'
import { useNavigate } from 'react-router-dom'

const SingleProduct = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [{ data, loading, error }] = useAxios({
    url: `https://the-sneaker-database.p.rapidapi.com/sneakers/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-rapidapi-host': 'the-sneaker-database.p.rapidapi.com',
      'x-rapidapi-key': 'cd017d018emsh9975e0b7b7eb7ddp18e81ejsn4134e6fb98f8',
    },
  })

  if (loading)
    return (
      <div className=' min-h-screen flex justify-center items-center'>
        <div className='animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500'></div>
      </div>
    )
  if (error) return <p>Error!</p>
  console.log(data.results[0])
  console.log(error)

  return (
    <div>
      <section className='text-gray-600 body-font overflow-hidden'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap'>
            <div className='lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0'>
              <h2 className='text-sm title-font text-gray-500 tracking-widest'>
                Product Name
              </h2>
              <h1 className='text-gray-900 text-3xl title-font font-medium mb-4'>
                {data.results[0].name}
              </h1>
              <div className='flex mb-4'>
                <span className='flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1'>
                  Description
                </span>
              </div>
              <p className='leading-relaxed mb-4'>{data.results[0].story}</p>
              <div className='flex border-t border-gray-200 py-2'>
                <span className='text-gray-500'>Gender</span>
                <span className='ml-auto text-gray-900'>
                  {data.results[0].gender}
                </span>
              </div>

              <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                <span className='text-gray-500'>releaseYear</span>
                <span className='ml-auto text-gray-900'>
                  {data.results[0].releaseYear}
                </span>
              </div>
              <div className='flex'>
                <span className='title-font font-medium text-2xl text-gray-900'>
                  ${data.results[0].retailPrice}
                </span>
                <a
                  className='flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded'
                  href={data.results[0].links.goat}
                >
                  Add to Cart
                </a>
              </div>
            </div>
            <img
              width={400}
              height={400}
              alt='ecommerce'
              className=''
              src={
                data.results[0].image.original === ''
                  ? imageNotFound
                  : data.results[0].image.original
              }
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SingleProduct
