import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Home/Footer'
import Dashboard from './Dashboard';
import About from './About';


export default function index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Footer/>
    </>
  )
}