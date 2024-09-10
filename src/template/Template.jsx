import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from '../pages/Home'
import Booking from '../pages/Booking'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Template = () => {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/reservations" element={<Booking />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Template
