import { CalendarCheck, CalendarClock, CalendarHeart } from "lucide-react";

export default function HowItWorks() {
  return (
    <>
      <div id="HowItWorks" className="relative py-10 sm:py-16 lg:py-24">
        <div className="md:px-6 px-6 mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl text-primary font-extrabold mx-auto md:text-6xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
              Our Online solution will help you from start to finish
            </p>
          </div>
          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt="steps"
                loading="lazy"
                width="1000"
                height="500"
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
            <div
                id="step-1"
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="w-full flex flex-row justify-center items-center">
                  <CalendarHeart className="h-12 w-full text-2xl text-primary"/>
                </span>
                </div>
                <p className="mt-10 text-base text-gray-500 fonsem md:text-lg">
                Select a Room
                </p>
              </div>
              <div
                id="step-2"
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="w-full flex flex-row justify-center items-center">
                  <CalendarClock  className="h-12 w-full text-2xl text-primary" />
                </span>
                </div>
                <p className="mt-10 text-base text-gray-500 fonsem md:text-lg">
                Choose Date & Time
                </p>
              </div>
              <div
                id="step-3"
                className="flex flex-col items-center justify-center"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                <span className="w-full flex flex-row justify-center items-center">
                  <CalendarCheck className="h-12 w-full text-2xl text-primary" />
                </span>
                </div>
                <p className="mt-10 text-base text-gray-500 fonsem md:text-lg">
                  Confirm Booking
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
          style={{
            background:
              "radial-gradient(1.89deg, rgba(34, 78, 95, 0.4) -1000%, rgba(191, 227, 205, 0.26) 1500.74%, rgba(34, 140, 165, 0.41) 56.49%, rgba(28, 47, 99, 0.11) 1150.91%)",
          }}
        />
      </div>
    </>
  );
}
