import {
  ArrowDownRightFromSquare,
  Blocks,
  CalendarCheck,
  CircleX,
  Home,
  LayoutList,
  List,
  ListCollapse,
  Logs,
  SquarePen,
} from "lucide-react";
import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

type TMenu = "menu1" | "menu2" | "menu3" | null;

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<TMenu>(null);

  const toggleSubmenu = (menu: TMenu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path ? "bg-gray-100" : "";
  };
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-200 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:flex md:flex-col min-h-screen shadow`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto bg-gray-100">
          {/* <!-- Mobile view logo --> */}
          <div className="flex items-center justify-between p-4 md:hidden">
            <img className="md:w-8 lg:w-8 w-6" src="./icon.png" alt="" />
            <span className="text-[#7ec242] font-bold lg:text-2xl md:text-2xl text-xl">
              NexusMeet
            </span>
            <button
              onClick={closeSidebar}
              className="text-gray-300 focus:outline-none"
            >
              <CircleX />
            </button>
          </div>

          <nav className="flex flex-col flex-1 bg-gray-200 overflow-y-auto bg- px-2 py-4 gap-10 font-semibold">
            <div className="flex flex-col flex-1 gap-3">
              <ul id="menu" className="space-y-2">
                <li id="dashboar-home">
                  <div
                    className={`w-full text-left p-4 hover:bg-gray-100 focus:outline-none  ${
                      isActive("/dashboard") ? "bg-gray-100 text-primary" : ""
                    }`}
                  >
                    <a href="/dashboard" className="flex items-center ">
                      <Logs className="w-6 h-6 mr-1" />
                      Dashboard
                    </a>
                  </div>
                </li>
                <li id="manage-room">
                  <button
                    className="w-full flex flex-row items-center text-left p-4 hover:bg-gray-100 hover:text-primary bg-primary text-white focus:outline-none "
                    onClick={() => toggleSubmenu("menu1")}
                  >
                    <Home className="w-6 h-6 mr-1" />
                    Manage Room
                  </button>
                  <ul
                    id="menu1"
                    className={`pl-8 space-y-2 ${
                      openMenu === "menu1" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <a
                        href="/create-room"
                        className="block p-2 hover:bg-primary hover:text-white bg-gray-100 text-primary mt-2"
                      >
                        <span className="flex flex-row items-center gap-1">
                          <SquarePen />
                          Create Room
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/room-list"
                        className="block p-2 hover:bg-primary hover:text-white bg-gray-100 text-primary"
                      >
                        <span className="flex flex-row items-center gap-1">
                          <ListCollapse />
                          Room List
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="manage-slots">
                  <button
                    className="w-full flex flex-row items-center text-left p-4 hover:bg-gray-100 hover:text-primary bg-primary text-white focus:outline-none"
                    onClick={() => toggleSubmenu("menu2")}
                  >
                    <Blocks className="w-6 h-6 mr-1" />
                    Manage Slots
                  </button>
                  <ul
                    id="menu2"
                    className={`pl-8 space-y-2 ${
                      openMenu === "menu2" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <a
                        href="/create-slot"
                        className="block p-2 hover:bg-primary hover:text-white bg-gray-100 text-primary mt-2"
                      >
                        <span className="flex flex-row items-center gap-1">
                          <SquarePen />
                          Create Slots
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/slot-list"
                        className="block p-2 hover:bg-primary hover:text-white bg-gray-100 text-primary mt-2"
                      >
                        <span className="flex flex-row items-center gap-1">
                          <LayoutList />
                          Slots List
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li id="manage-Booking ">
                  <button
                    className="w-full flex flex-row items-center text-left p-4 hover:bg-gray-100 hover:text-primary bg-primary text-white focus:outline-none"
                    onClick={() => toggleSubmenu("menu3")}
                  >
                    <CalendarCheck className="w-6 h-6 mr-1" />
                    Manage Booking
                  </button>
                  <ul
                    id="menu3"
                    className={`pl-8 space-y-2 ${
                      openMenu === "menu3" ? "block" : "hidden"
                    }`}
                  >
                    <li>
                      <a
                        href="/booking-list"
                        className="block p-2 hover:bg-primary hover:text-white bg-gray-100 text-primary mt-2"
                      >
                        <span className="flex flex-row items-center gap-1">
                          <List />
                          Booking List
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {/* <!-- Main content --> */}
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* <!-- Top bar --> */}
        <div className="flex items-center justify-between h-16 border-b px-4 py-10">
          {/* <!-- Sidebar toggle --> */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-primary focus:outline-none"
          >
            <Logs className="w-8 h-8" />
          </button>
          <div className="flex items-center font-semibold text-lg text-primary">
            Dashboard Overview
          </div>
          <div className="flex items-center space-x-4">
            {/* <!-- Logout --> */}
            <button className="flex items-center btn btn-primary text-white py-1 px-4">
              <ArrowDownRightFromSquare className="w-5 h-5" />
              <span className="font-bold ml-2">Logout</span>
            </button>
          </div>
        </div>

        {/* <!-- Dashboard Content --> */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
