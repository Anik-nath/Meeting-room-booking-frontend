import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
      </Routes>
      <ScrollToTop viewBox="0 0 160 256" smooth color="#7ec242" />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
