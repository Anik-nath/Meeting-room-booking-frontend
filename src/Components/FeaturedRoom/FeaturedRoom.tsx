import { SquareArrowUpRight } from "lucide-react";
import RoomCard from "../RoomCard/RoomCard";
import { useGetRoomsQuery } from "../../Redux/Api/roomApi";

export default function FeaturedRoom() {
  const { data } = useGetRoomsQuery();
  const Allrooms = data?.data;
  return (
    <div
      id="HowItWorks"
      className="relative py-10 sm:py-16 lg:py-24 bg-gray-100"
    >
      <div className="md:px-10 px-6 mx-auto">
        {/* section header */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl text-primary font-bold mx-auto md:text-6xl lg:text-5xl">
            Featured Rooms
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base text-gray-500 leading-relaxed md:text-2xl">
            Our Online solution will help you from start to finish
          </p>
        </div>
        {/* featured rooms */}
        <div id="rooms" className="mt-12 lg:mt-20">
          <div className="grid md:grid-cols-4 lg:grid-cols-4 grid-cols-2 gap-4">
            {Allrooms?.map((room) => (
              <RoomCard key={room._id} room={room}></RoomCard>
            )).splice(0, 4)}
          </div>
          <div className="flex flex-row justify-center mt-12">
            <a className="btn btn-primary text-white border-0" href="/rooms">
              <span>See More</span>
              <span>
                <SquareArrowUpRight />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
