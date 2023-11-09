import React from 'react'
import Navbar from '../Navbar'
import About from './About'
import Dashboard from './Dashboard'
import Ceo from './Ceo'
import Footer from './Footer'
import Updates from './Updates'
import Explore from './Explore'
import Wealth from './Wealth'
import Careers from './Careers'
import Office from '../Office'

export default function Index() {
  return (
    <>
        <Navbar/>
        <div className='w-full justify-center mx-auto overflow-hidden'>
            <Dashboard/>
            <About/>
            <Explore/>
            <Wealth/>
            <Ceo/>
            <Careers/>
            <Office/>
            <Updates/>
            <Footer/>
        </div>
    </>
    
  )
}
