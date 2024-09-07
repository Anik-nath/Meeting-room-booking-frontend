import { CalendarPlus } from "lucide-react";

export default function Hero() {
  return (
    <div className="w-full bg-primary md:px-10 px-6 min-h-screen flex md:flex-row lg:flex-row flex-col justify-between gap-y-8 py-10 md:py-0 lg:py-0">
      <div className="w-full flex flex-col justify-center text-secondary nexus-animate-2">
        <p className="md:text-lg text-md">Meeting Room Booking System</p>
        <h1 className="md:text-5xl text-4xl font-bold py-4  ">
          Book your ideal meeting room with ease.
        </h1>
        <h3 className="md:text-2xl text-xl mb-6 ">
          Efficient, hassle-free room booking for all your meeting needs.
        </h3>
        <div>
          <a className="btn-secondary btn" href="/rooms">
            <span>
              <CalendarPlus className="w-6 h-6" />
            </span>
            Book Now
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center items-center flex-col nexus-animate-2">
        <img
          className="w-full rounded-2xl"
          src="https://i.postimg.cc/X7R0sKym/photo-1557426272-fc759fdf7a8d.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
