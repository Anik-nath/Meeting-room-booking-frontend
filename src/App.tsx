import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import ScrollToTop from "react-scroll-to-top";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import MeetingRooms from "./pages/MeetingRooms";
import RoomDetails from "./pages/RoomDetails";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/meeting-rooms" element={<MeetingRooms />}></Route>
        <Route path="/details" element={<RoomDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ScrollToTop viewBox="0 0 160 256" smooth color="#7ec242" />
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
