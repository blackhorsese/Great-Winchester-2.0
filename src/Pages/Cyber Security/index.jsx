import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Home/Footer'
import Dashboard from './Dashboard';
import About from './About';
import Approach from './Approach';
import Choose from './Choose';
import Riskassessment from './Riskassessment';
import Incident from './Incident';


export default function index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Approach/>
    <Choose/>
    <Riskassessment/>
    <Incident/>
    <Footer/>
    </>
  )
}
