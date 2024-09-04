import { Clock, HandHeart, Merge, Rocket } from "lucide-react";

export default function Services() {
  return (
    <div className="md:px-10 px-6 mx-auto py-24">
      <div className="text-center pb-12 nexus-animate-1">
        <h1 className="md:text-5xl text-3xl text-primary font-bold ">
          Our solutions
        </h1>
        <p className="text-gray-500 md:text-2xl text-lg mt-4">Comprehensive Services to Meet Your Every Need.</p>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 md:gap-y-4 gap-y-12">
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4 nexus-animate-1"
          id="Availability"
        >
          <span>
            <Clock className="md:h-16 h-12 w-full text-2xl text-primary nexus-animate-1" />
          </span>
          <h2 className="md:text-xl text-lg text-primary font-semibold">Real-Time Availability</h2>
          <p className="text-md md:text-center text-justify text-gray-700">
            Check room availability instantly and book on the spot.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4 nexus-animate-1"
          id="Confirmation"
        >
          <span>
            <Rocket className="md:h-16 h-12 w-full text-2xl text-primary nexus-animate-1" />
          </span>
          <h2 className="md:text-xl text-lg text-primary font-semibold">
            Instant Confirmation
          </h2>
          <p className="text-md md:text-center text-justify text-gray-700">
            Receive immediate confirmation as soon as you book.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4 nexus-animate-1"
          id="Scheduling"
        >
          <span>
            <Merge className="md:h-16 h-12 w-full text-2xl text-primary nexus-animate-1" />
          </span>
          <h2 className="md:text-xl text-lg text-primary font-semibold">Flexible Scheduling</h2>
          <p className="text-md md:text-center text-justify text-gray-700">
            Easily adjust your bookings to fit your changing plans.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4 nexus-animate-1"
          id="Support"
        >
          <span>
            <HandHeart className="md:h-16 h-12 w-full text-2xl text-primary nexus-animate-1" />
          </span>
          <h2 className="md:text-xl text-lg text-primary font-semibold">24/7 Support</h2>
          <p className="text-md md:text-center text-justify text-gray-700">
            We're here to assist you anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
}
