import { SquareArrowUpRight } from "lucide-react";

export default function FeaturedRoom() {
  const sample = [
    {
      id: 1,
      image:
        "https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg",
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
              <div
                key={room.id}
                className="bg-secondary shadow rounded-lg overflow-hidden flex flex-col w-full"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={room.image}
                  alt=""
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="font-semibold md:text-xl md:mb-2">
                    Nexus A1 - Collab Room
                  </h3>
                  <p className="text-gray-700 text-base">
                    Capacity: <span className="font-semibold">10 People</span>
                  </p>
                  <div className="mt-auto pt-4 flex md:flex-row flex-col md:items-center justify-between">
                    <p className="text-gray-700 text-base">
                      Price Per Slot:
                      <span className="font-semibold">$500</span>
                    </p>
                    <a
                      href="#"
                      className="btn-secondary text-white inline-block text-center md:mt-0 mt-4"
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
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
