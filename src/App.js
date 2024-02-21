import { Routes, Route } from "react-router-dom"
import Index from './Pages/Home/Index';
import Login from "./Pages/Login";

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Index/> } />
        <Route path="/login" element={ <Login/> } />

      </Routes>
  )
}

export default App
