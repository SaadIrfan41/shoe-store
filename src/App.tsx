import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import SingleProduct from './Pages/SingleProduct'
const App = () => {
  return (
    <div className='h-screen'>
      {' '}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<SingleProduct />} />

          {/* <Route path='*' element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
