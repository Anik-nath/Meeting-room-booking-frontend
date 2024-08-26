import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";
import { SquareArrowUpRight } from "lucide-react";

const sample = [{ id: 1 }, { id: 2 }, { id: 3 }];

export default function CustomerReview() {
  return (
    <div className="bg-primary md:px-10 px-6 py-10 sm:py-16 lg:py-24 grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-8">
      <div className="w-full h-full flex flex-col justify-center">
        <h1 className="text-5xl font-bold py-4 text-white">What People Say</h1>
        <p className=" text-gray-100 mb-4 md:text-lg text-md">
          Join countless satisfied users who have transformed their meeting
          experiences with our intuitive platform.
        </p>
        <div>
          <a className="btn-secondary btn" href="/meeting-rooms">
            <span>See More</span>
            <span>
              <SquareArrowUpRight className="w-6 h-6" />
            </span>
          </a>
        </div>
      </div>
      <div className="w-full col-span-2 md:px-14 pr-10">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          pagination={true}
          modules={[EffectCards, Pagination]}
          className="w-full  md:h-[350px] h-[400px]"
        >
          {sample.map((item) => (
            <SwiperSlide key={item.id} className="rounded-xl p-10 bg-secondary">
              <div className="h-full flex flex-col justify-between">
                <p
                  id="whatsay"
                  className="md:text-lg text-md text-gray-700 text-justify"
                >
                  Yeah, NexusMeet!!! NexusMeet Workplace is the ultimate
                  solution to manage our Meeting rooms. With the bright Display
                  and its colors, you see the availability of rooms connected to
                  the same Floor at a Glance.
                </p>
                <div id="whosay" className="flex flex-row justify-between mb-8">
                  <div>
                    <h2 className="font-semibold md:text-xl text-lg">
                      Thomas Sobirey
                    </h2>
                    <p className="text-gray-600 text-sm md:text-md">
                      CEO, datatechfactory Gmbh & Co.KG
                    </p>
                  </div>
                  <div>
                    <img
                      className="w-36"
                      src="https://www.yeastar.com/wp-content/uploads/2023/06/say-icon12.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
