import { LogOut } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../Redux/FeatureSlice/userSlice";
import { toast } from "react-toastify";
import icon from "../../assets/icon.png";

export default function Navbar() {
  const hideNavbarRoutes = [
    "/dashboard",
    "/dashboard/create-room",
    "/dashboard/room-list",
    "/dashboard/create-slot",
    "/dashboard/slot-list",
    "/dashboard/booking-list",
  ];
  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  const ResultuserData = useAppSelector((state) => state.user.userData);

  //  logout user
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(clearUser());
    toast.success("You Just Logout!",{
      position: "top-center",
      autoClose: 2000,
    });
    navigate("/signin");
  };

  return (
    <>
      {isNavbarVisible && (
        <div className="navbar bg-secondary text-primary-content md:px-10 lg:px-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#7ec242]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/rooms">Meeting Rooms</a>
                </li>
                <li>
                  <a href="/about-us">About Us</a>
                </li>
                <li>
                  <a href="/contact-us">Contact Us</a>
                </li>
              </ul>
            </div>
            <a href="/" className="text-xl flex flex-row gap-1 items-center">
              <img className="md:w-10 lg:w-10 w-6" src={icon} alt={icon} />
              <span className="text-[#7ec242] font-bold lg:text-2xl md:text-2xl text-xl">
                NexusMeet
              </span>
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal text-gray-700 px-1 gap-2 text-[16px]">
              <li>
                <a className=" hover:text-primary" href="/home">
                  Home
                </a>
              </li>
              <li>
                <a className=" hover:text-primary" href="/rooms">
                  Meeting Rooms
                </a>
              </li>
              <li>
                <a className=" hover:text-primary" href="/about-us">
                  About Us
                </a>
              </li>
              <li>
                <a className=" hover:text-primary" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="navbar-end flex flex-row items-center gap-4">
            {ResultuserData?.email ? (
              <button
                onClick={handleLogOut}
                className="flex flex-row gap-1 items-center btn-primary text-white"
              >
                <LogOut className="w-4 h-4"></LogOut>
                Logout
              </button>
            ) : (
              <a href="/signin" className="btn-primary text-white">
                Sign in
              </a>
            )}
            {/* theme controller */}
            <div id="theme-controller">
              <label className="swap swap-rotate">
                <input
                  type="checkbox"
                  className="theme-controller"
                  value="black"
                />
                <svg
                  className="swap-off h-7 w-7 fill-current text-[#7ec242] "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 18"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-on h-6 w-6 fill-current text-[#7ec242]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 18"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </div>
            <div id="avatar" className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://i.postimg.cc/CxF3mJ8s/free-user-icon-3297-thumb.png"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-80 p-2 shadow gap-2"
              >
                {/* loggin user profile */}
                {ResultuserData?.email ? (
                  <div
                    id="loggein User Details"
                    className="bg-gray-100 w-full flex flex-col justify-center items-center rounded-xl py-2"
                  >
                    <h2 className="text-xs">{ResultuserData?.name}</h2>
                    <div className="w-10 rounded-full py-1">
                      <img
                        alt="loggin user profile picture"
                        src="https://i.postimg.cc/CLM722v5/userbluel.png"
                      />
                    </div>
                    <p className="text-xs">{ResultuserData?.email}</p>
                  </div>
                ) : (
                  ""
                )}
                <li className="border-b py-2 hover:bg-gray-100 rounded-xl font-semibold">
                  <a href="/dashboard">Dashboard</a>
                </li>
                <li className="border-b py-2 hover:bg-gray-100 rounded-xl font-semibold">
                  <a href="/mybookings">My Bookings</a>
                </li>
                
                <li className="bg-gray-100 hover:bg-primary hover:text-white rounded-xl py-2 font-semibold">
                  <button
                  disabled={!ResultuserData?.email}
                    onClick={handleLogOut}
                    className="text-center flex flex-row gap-2"
                  >
                    <LogOut className="w-4 h-4"></LogOut>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
