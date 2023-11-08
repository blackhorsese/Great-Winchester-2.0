import { Routes, Route } from "react-router-dom"
import Index from './Pages/Home/Index';
import Art from './Pages/Digital Art/Index'
import Asset from './Pages/Digital Asset/Index'
import Cyber from './Pages/Cyber Security/index'
import Software from './Pages/Software Development/Index'
import Consultant from './Pages/IT Consultant/Index'
import EV from './Pages/EV Charging/Index'

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/digital-asset" element={ <Asset/> } />
        <Route path="/digital-art" element={ <Art/> } />
        <Route path="/cybersecurity" element={ <Cyber/> } />
        <Route path="/software-development" element={ <Software/> } />
        <Route path="/IT-consultant" element={ <Consultant/> } />
        <Route path="/ev-network" element={ <EV/> } />
      </Routes>
  )
}

export default App
