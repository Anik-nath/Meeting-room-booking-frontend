import { Clock, HandHeart, Merge, Rocket } from "lucide-react";

export default function Services() {
  return (
    <div className="md:px-10 px-6 mx-auto py-10 md:py-16">
      <div className="text-center pb-16">
        <h1 className="text-4xl text-primary font-bold md:text-6xl">
          Our solutions
        </h1>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4"
          id="Availability"
        >
          <span>
            <Clock className="h-12 w-full text-2xl text-primary" />
          </span>
          <h2 className="text-xl text-gray-900">Real-Time Availability</h2>
          <p className="text-md text-gray-700">
            Check room availability instantly and book on the spot.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4"
          id="Confirmation"
        >
          <span>
            <Rocket className="h-12 w-full text-2xl text-primary" />
          </span>
          <h2 className="text-xl text-gray-900">
            Instant Booking Confirmation
          </h2>
          <p className="text-md text-gray-700 text-center">
            Receive immediate confirmation as soon as you book.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4"
          id="Scheduling"
        >
          <span>
            <Merge className="h-12 w-full text-2xl text-primary" />
          </span>
          <h2 className="text-xl text-gray-900">Flexible Scheduling</h2>
          <p className="text-md text-gray-700 text-center">
            Easily adjust your bookings to fit your changing plans.
          </p>
        </div>
        <div
          className="flex w-full text-center flex-col items-center gap-2 md:shadow-none shadow-md p-4"
          id="Support"
        >
          <span>
            <HandHeart className="h-12 w-full text-2xl text-primary" />
          </span>
          <h2 className="text-xl text-gray-900">24/7 Support</h2>
          <p className="text-md text-gray-700 text-center">
            We're here to assist you anytime, day or night.
          </p>
        </div>
      </div>
    </div>
  );
}
