import { Routes, Route } from "react-router-dom"
import Index from './Pages/Home/Index';
import Login from "./Pages/Login";
import React, { useEffect, useState } from 'react';
import EV from './Pages/EV Charging/Index';
import Preloader from './Pages/Preloader';
import Cybersecurity from './Pages/Cyber Security/index';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to mimic content loading
    setTimeout(() => {
      setLoading(false);
    }, 1000); // Adjust the delay as needed

    // You can replace the above setTimeout with your actual data fetching logic.
  }, []);

  return (
    <>
      {loading ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={ <Index/> } />
          <Route path="/electric-vehicle" element={ <EV/> } />
          <Route path="/cyber-secruity" element={ <Cybersecurity/> } />
          <Route path="/login" element={ <Login/> } />

        </Routes>
      )}
    </>

  )
}

export default App
