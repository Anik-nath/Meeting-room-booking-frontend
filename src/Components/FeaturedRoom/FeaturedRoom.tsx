import { SquareArrowUpRight } from "lucide-react";
import RoomCard from "../RoomCard/RoomCard";
export const sample = [
  {
    id: 1,
    image: "https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg",
  },
  {
    id: 2,
    image:
      "https://i.postimg.cc/Nfq5MgTH/premium-photo-1681487144031-d502ea9abefc.jpg",
  },
  {
    id: 3,
    image:
      "https://i.postimg.cc/m2Yh10N6/premium-photo-1681487146511-43e0a6382a83.jpg",
  },
  {
    id: 4,
    image:
      "https://i.postimg.cc/T3T1VCt2/premium-photo-1681487775145-fa203ab4aa91.jpg",
  },
];
export default function FeaturedRoom() {
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
            {sample.map((room) => (
              <RoomCard key={room.id} room={room}></RoomCard>
            ))}
          </div>
          <div className="flex flex-row justify-center mt-12">
            <a className="btn btn-primary text-white border-0" href="#">
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
