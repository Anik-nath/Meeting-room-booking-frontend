import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />} ></Route>
     </Routes>
    </BrowserRouter>
  )
}

export default App
