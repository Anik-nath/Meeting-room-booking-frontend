import { SquareArrowUpRight } from "lucide-react";

export default function Whyus() {
  return (
    <div className="bg-primary md:px-10 px-6 py-10 sm:py-16 lg:py-24 flex md:flex-row lg:flex-row flex-col justify-between gap-12">
      <div className="w-full flex justify-center items-center flex-col">
        <img
          className="w-full rounded-2xl"
          src="https://i.postimg.cc/tTBJmyfr/real-time-availabillity-image.webp"
          alt=""
        />
      </div>
      <div className="w-full flex flex-col justify-center text-secondary">
        <h1 className="md:text-5xl text-3xl font-bold py-4 text-white md:text-start text-center">Why choose us?</h1>
        <p className="text-lg text-gray-100 ">
          Discover the Ultimate Solution for Effortless Meeting Room
          Reservations And Featuring some advantages like -{" "}
        </p>
        <ul className="steps steps-vertical py-4">
          <li
            data-content="✓"
            className="step step-secondary text-lg text-white"
          >
            Seamless Booking Experience
          </li>
          <li
            data-content="✓"
            className="step step-secondary text-lg text-white"
          >
            Instant Confirmation
          </li>
          <li
            data-content="✓"
            className="step step-secondary text-lg text-white"
          >
            User-Centric Interface
          </li>
          <li
            data-content="✓"
            className="step step-secondary text-lg text-white"
          >
            Secure Transactions
          </li>
        </ul>
        <div>
          <a className="btn-secondary btn" href="/about">
            <span>Read more</span>
            <span>
              <SquareArrowUpRight></SquareArrowUpRight>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
