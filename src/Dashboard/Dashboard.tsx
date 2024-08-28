import { ArrowDownRightFromSquare, BarChart, Cross, Home } from "lucide-react";
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
    return location.pathname === path ? "bg-gray-700" : "";
  };
  return (
    <div className="flex h-screen">
      {/* <!-- Sidebar --> */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-primary transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-200 ease-in-out md:translate-x-0 md:static md:flex md:flex-col min-h-screen shadow`}
      >
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* <!-- Sidebar for mobile --> */}
          <div className="flex  items-center justify-between p-4 bg-white md:hidden">
            <img className="md:w-10 lg:w-10 w-6" src="./icon.png" alt="" />
            <span className="text-[#7ec242] font-bold lg:text-2xl md:text-2xl text-xl">
              NexusMeet
            </span>
            <button
              onClick={closeSidebar}
              className="text-gray-300 focus:outline-none"
            >
              <Cross></Cross>
            </button>
          </div>

          <nav className="flex flex-col flex-1 overflow-y-auto bg-primary px-2 py-4 gap-10 font-semibold">
            <div>
              <a
                href="/dashboard"
                className={`flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 ${isActive(
                  "/dashboard"
                )}`}
              >
                <BarChart className="w-6 h-6 mr-1" />
                Dashboard
              </a>
            </div>
            <div className="flex flex-col flex-1 gap-3">
              <ul id="menu" className="space-y-2">
                <li>
                  <div
                    className={`w-full text-left p-4 hover:bg-gray-700 focus:outline-none  ${
                      isActive("/") ? "bg-gray-700" : ""
                    }`}
                  >
                    <a
                      href="/"
                      className="flex items-center  text-gray-100 hover:bg-gray-700"
                    >
                      <Home className="w-6 h-6 mr-1" />
                      Back Home
                    </a>
                  </div>
                </li>
                <li>
                  <button
                    className="w-full text-left p-4 hover:bg-gray-700 focus:outline-none"
                    onClick={() => toggleSubmenu("menu1")}
                  >
                    Room Management
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
                        className="block p-2 hover:bg-gray-700"
                      >
                        Create Room
                      </a>
                    </li>
                    <li>
                      <a
                        href="/room-list"
                        className="block p-2 hover:bg-gray-700"
                      >
                        Room List
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left p-4 hover:bg-gray-700 focus:outline-none"
                    onClick={() => toggleSubmenu("menu2")}
                  >
                    Slots Management
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
                        className="block p-2 hover:bg-gray-700"
                      >
                        Create Slot
                      </a>
                    </li>
                    <li>
                      <a
                        href="/slot-list"
                        className="block p-2 hover:bg-gray-700"
                      >
                        Slots List
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className="w-full text-left p-4 hover:bg-gray-700 focus:outline-none"
                    onClick={() => toggleSubmenu("menu3")}
                  >
                    Booking Management
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
                        className="block p-2 hover:bg-gray-700"
                      >
                        Booking List
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
        <div className="flex items-center justify-between h-16 bg-gray-800 border-teal-500 border-b px-4">
          {/* <!-- Sidebar toggle --> */}
          <button
            onClick={toggleSidebar}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            <BarChart className="w-6 h-6" />
          </button>
          <div className="flex items-center font-bold">
            <img className="md:w-10 lg:w-10 w-6" src="./icon.png" alt="" />
            <span className="text-[#7ec242] font-bold lg:text-2xl md:text-2xl text-xl">
              NexusMeet
            </span>
          </div>
          <div className="flex items-center space-x-4">
            {/* <!-- Logout --> */}
            <button className="flex items-center gradient-border hover:bg-gray-800 text-gray-300 py-1 px-4">
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
