import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <BrowserRouter>
    <Navbar></Navbar>
     <Routes>
      <Route path="/" element={<Home />} ></Route>
     </Routes>
     <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
