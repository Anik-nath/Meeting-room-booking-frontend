import { ArrowDown } from "lucide-react";
import RoomCard from "../Components/RoomCard/RoomCard";
import { useRef, useState } from "react";
import { useGetRoomsQuery } from "../Redux/Api/roomApi";

const MeetingRooms = () => {
  const rangeRef = useRef<HTMLInputElement>(null);
  const roomsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (roomsRef.current) {
      roomsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { data, isLoading } = useGetRoomsQuery();
  const Allrooms = data?.data.filter((item) => item.isDeleted === false);
  const [searchTerm, setSearchTerm] = useState("");
  const [capacity, setCapacity] = useState<number | null>(null);
  const [priceRange, setPriceRange] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<"low-to-high" | "high-to-low">(
    "low-to-high"
  );

  // Filter and sort
  const filteredRooms = Allrooms?.filter((room) => {
    const matchesSearch = room.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCapacity = capacity === null || room.capacity >= capacity;
    const matchesPrice = room.pricePerSlot >= priceRange;
    return matchesSearch && matchesCapacity && matchesPrice;
  }).sort((a, b) => {
    if (sortOrder === "low-to-high") {
      return a.pricePerSlot - b.pricePerSlot;
    } else {
      return b.pricePerSlot - a.pricePerSlot;
    }
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handlePriceRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(parseInt(e.target.value));
  };
  const handleCapacityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(parseInt(e.target.value));
  };
  const handleSortOrderChange = (order: "low-to-high" | "high-to-low") => {
    setSortOrder(order);
  };

  const handleResetFilters = () => {
    setSearchTerm("");
    setCapacity(null);
    setPriceRange(1000);
    setSortOrder("low-to-high");
    if (rangeRef.current) {
      rangeRef.current.value = "1000";
    }
  };

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

        <div className="relative text-center md:w-1/2 w-full nexus-animate-2">
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
              <span> Showing {filteredRooms?.length} </span> of{" "}
              <span>{Allrooms?.length}</span> rooms
            </p>
            <p className="px-4 font-semibold text-white">Sort By : </p>
            <div className="group relative cursor-pointer py-2">
              <div className="flex items-center justify-between space-x-5 gradient-border px-4 border rounded-md">
                <div className="menu-hover my-2 text-base text-white lg:mx-4 uppercase">
                  Filter
                </div>
                <ArrowDown className="h-5 w-5 text-white" />
                <div className="invisible top-14 -left-5 absolute z-50 flex w-full flex-col bg-gray-100 py-1 text-gray-800 shadow-xl group-hover:visible">
                  <button
                    className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    onClick={() => handleSortOrderChange("low-to-high")}
                  >
                    Price, Low to High
                  </button>
                  <button
                    className="my-2 text-sm block border-b border-gray-300 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
                    onClick={() => handleSortOrderChange("high-to-low")}
                  >
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
                  className="py-2 border-gray-300 border outline-none px-2 rounded-md"
                  type="text"
                  placeholder="Search room by name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div id="capacity">
                <p className="p-2 font-semibold">Capacity</p>
                <div className="flex items-center space-x-2 rounded p-2">
                  <input
                    type="range"
                    id="capacity-range"
                    name="capacity-range"
                    className="w-full accent-primary"
                    min={0}
                    max={100}
                    value={capacity || 0}
                    onChange={handleCapacityChange}
                  />
                </div>
                <div className="flex justify-between px-2">
                  <span>{capacity ? `${capacity}+` : "Any"}</span>
                </div>
              </div>
              <div id="price" className="py-6">
                <div className="flex justify-between items-center">
                  <p className="p-2 font-semibold">Price Range</p>
                  <button
                    className="p-2 font-semibold"
                    onClick={handleResetFilters}
                  >
                    Reset
                  </button>
                </div>
                <div className="p-2">
                  <div>
                    <input
                      type="range"
                      name="price-range"
                      className="w-full accent-primary"
                      ref={rangeRef}
                      value={priceRange}
                      min={0}
                      max={1000}
                      onChange={handlePriceRangeChange}
                    />
                  </div>
                  <div className="flex justify-between">
                    <span id="minPrice">${0}</span>
                    <span id="maxPrice">${priceRange}</span>
                  </div>
                </div>
              </div>
              <div id="resetfilter" className="p-2">
                <button
                  className="underline text-primary"
                  onClick={handleResetFilters}
                >
                  Reset All
                </button>
              </div>
            </div>
            {/* right side */}
            <div
              ref={roomsRef}
              className="col-span-3 mt-6 md:mt-0 lg:mt-0 px-6 md:px-0 lg:px-0"
            >
              {/* show all products start */}
              {isLoading ? (
                <div className=" text-white flex justify-center items-center h-screen ">
                  <span className="loading loading-bars loading-lg"></span>
                </div>
              ) : (
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
                  {filteredRooms?.map((room) => (
                    <RoomCard key={room._id} room={room}></RoomCard>
                  ))}
                </div>
              )}
              {/* show all products end*/}
              {filteredRooms?.length === 0 ? (
                <div className="text-center text-xl flex justify-center items-center rounded-md border border-gray-100 h-screen text-white">
                  No rooms match your filters.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MeetingRooms;
