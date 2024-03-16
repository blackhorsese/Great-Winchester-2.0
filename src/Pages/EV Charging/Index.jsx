import React from 'react'
import Navbar from '../Navbar'
import Dashboard from './Dashboard'
import About from './About'
import Footer from '../Home/Footer'
import Choose from './Choose'

export default function Index() {
  return (
    <>
        <Navbar/>
        <div className='w-full justify-center mx-auto overflow-hidden'>
            <Dashboard/>
            <About/>
            <Choose/>
            <Footer/>
        </div>
    </>
    
  )
}