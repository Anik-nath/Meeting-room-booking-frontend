import { ArrowDown } from "lucide-react";
import RoomCard from "../Components/RoomCard/RoomCard";
import { sample } from "../Components/FeaturedRoom/FeaturedRoom";
import { useRef } from "react";
import { useAppDispatch } from "../Redux/hook";
import { useGetRoomsQuery } from "../Redux/Api/roomApi";

const MeetingRooms = () => {
  const rangeRef = useRef<HTMLInputElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //  fetch data using Redux
  const dispatch = useAppDispatch();
  const { data: rooms, error, isLoading } = useGetRoomsQuery();

  return (
    <>
      <section
        id="rooms-hero"
        className="relative w-full md:px-10 px-6 flex flex-col items-center justify-center py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/MK3QgqCf/premium-photo-1682436127861-3718772f4c2e.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#011100ee] opacity-75"></div>

        <div className="relative text-center md:w-1/2 w-full">
          <h1 className="text-gray-200 md:text-2xl text-lg">Meeting Rooms</h1>
          <h1 className="text-3xl md:text-5xl font-bold py-4 text-white">
            Discover the Perfect Space
          </h1>
          <p className="text-gray-300 md:text-lg text-md pb-4">
            Choose from our variety of fully-equipped meeting rooms designed to
            fit your needs. Whether it's a large conference, we have the right
            space for you.
          </p>
          <button
            onClick={scrollToSection}
            className="btn btn-primary text-white cta-button"
          >
            Explore Rooms
          </button>
        </div>
      </section>
      <section className="bg-primary pb-24 ">
        <div className="pt-10 mx-auto max-w-screen-2xl lg:px-12">
          <div className="flex items-center justify-end pr-6 md:mr-0 lg:pr-0 mb-4">
            <p className="pr-4 text-md text-white">
              <span> Showing 10</span> of <span>500</span> products
            </p>
            <p className="px-4 font-semibold text-white">Sort By : </p>
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 gradient-border px-4 border rounded-md">
                <div className="menu-hover my-2 text-base text-white lg:mx-4 uppercase">
                  Filter
                </div>
                <ArrowDown className="h-5 w-5 text-white" />
                <div className="invisible top-14 -left-5 absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-gray-800 shadow-xl group-hover:visible">
                  <button className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Price, Low to High
                  </button>
                  <button className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Price, High to Low
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 md:gap-4 ">
            {/* left side  */}
            <div className="bg-white p-4 rounded-md mx-6 md:mx-0 lg:mx-0">
              <div id="searchbar" className="flex flex-col gap-2 mb-4">
                <label className="font-semibold" htmlFor="search">
                  Search Room
                </label>
                <input
                  className="py-2 border-gray-600 border outline-none px-2 rounded-md"
                  type="text"
                  placeholder="Search room by name"
                />
              </div>
              <div id="capacity">
                <p className="p-2 font-semibold">Capacity</p>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="checkbox"
                    id="available"
                    name="available"
                    className="h-6 w-6 rounded shadow-sm accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="available"
                    className="flex w-full space-x-2 text-md"
                  >
                    Available
                  </label>
                </div>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="checkbox"
                    id="unavailable"
                    name="unavailable"
                    className="h-6 w-6 rounded shadow-sm accent-primary cursor-pointer"
                  />
                  <label
                    htmlFor="outOfStock"
                    className="flex w-full space-x-2 text-md"
                  >
                    Unavailable
                  </label>
                </div>
              </div>
              <div id="price" className="py-6">
                <div className="flex justify-between items-center">
                  <p className="p-2 font-semibold">Price Range</p>
                  <button className="p-2 font-semibold">Reset</button>
                </div>
                <div className="p-2">
                  <div>
                    <input
                      type="range"
                      name="price-range"
                      className="w-full accent-slate-600"
                      ref={rangeRef}
                      defaultValue={10}
                      min={0}
                      max={1000}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span id="minPrice">$100</span>
                    <span id="maxPrice">$1000</span>
                  </div>
                </div>
              </div>
              <div id="resetfilter" className="p-2">
                <button className="underline text-primary">Reset All</button>
              </div>
            </div>
            {/* right side */}
            <div
              ref={roomsRef}
              className="col-span-3 mt-6 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0"
            >
              {/* show all products start */}
              {
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                  {sample.map((room) => (
                    <RoomCard key={room.id} room={room}></RoomCard>
                  ))}
                </div>
              }
              {/* show all products end*/}
              {sample?.length === 0 ? (
                <div id="noProducts">
                  <div className="bg-gray-800 border border-dashed border-gray-600 flex justify-center items-center py-4 h-screen w-full">
                    <div className="flex justify-center flex-col items-center">
                      <p className="text-lg text-gray-400">
                        No Products Found !
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div
                id="pagination"
                className="flex justify-center items-center gap-4 mt-8"
              >
                <button className="bg-white px-4 py-2 hover:bg-gray-200 rounded-md">
                  Previous
                </button>
                <div></div>
                <button className="bg-white px-4 py-2 hover:bg-gray-200 rounded-md">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingRooms;
