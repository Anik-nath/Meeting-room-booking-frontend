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
import Mybooking from "./pages/Mybooking";
import Dashboard from "./Dashboard/Dashboard";
import DashboardHome from "./Dashboard/DashboardHome";
import CreateRoom from "./Dashboard/CreateRoom";
import RoomList from "./Dashboard/RoomList";
import CreateSlot from "./Dashboard/CreateSlot";
import SlotList from "./Dashboard/SlotList";
import BookingList from "./Dashboard/BookingList";
import { useAppDispatch } from "./Redux/hook";
import { useEffect } from "react";
import { setUser } from "./Redux/FeatureSlice/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("userData");

    if (token && userData) {
      dispatch(setUser({ token, userData: JSON.parse(userData) }));
    }
  }, [dispatch]);
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/rooms" element={<MeetingRooms />}></Route>
          <Route path="/rooms/:id" element={<RoomDetails />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/mybookings" element={<Mybooking />}></Route>
          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route index element={<DashboardHome></DashboardHome>}></Route>
            <Route
              path="create-room"
              element={<CreateRoom></CreateRoom>}
            ></Route>
            <Route path="room-list" element={<RoomList></RoomList>}></Route>
            <Route
              path="create-slot"
              element={<CreateSlot></CreateSlot>}
            ></Route>
            <Route path="slot-list" element={<SlotList></SlotList>}></Route>
            <Route
              path="booking-list"
              element={<BookingList></BookingList>}
            ></Route>
          </Route>
        </Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
      <ScrollToTop viewBox="0 0 160 256" smooth color="#7ec242" />
      <Footer></Footer>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
