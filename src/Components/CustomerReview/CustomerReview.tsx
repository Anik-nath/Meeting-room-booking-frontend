import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { EffectCards, Pagination } from "swiper/modules";
import { SquareArrowUpRight } from "lucide-react";
import { useGetAllReviewsQuery } from "../../Redux/Api/roomApi";


export default function CustomerReview() {
  const { data } = useGetAllReviewsQuery();
  const AllReviews = data?.data.slice(1,4);

  return (
    <div className="bg-primary md:px-10 px-6 py-10 sm:py-16 lg:py-24 grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-8">
      <div className="w-full h-full flex flex-col justify-center nexus-animate-1">
        <h1 className="md:text-5xl text-3xl font-bold py-4 text-white">What People Say</h1>
        <p className=" text-gray-100 mb-4 md:text-lg text-md">
          Join countless satisfied users who have transformed their meeting
          experiences with our intuitive platform.
        </p>
        <div>
          <a href="/reviews" className="btn-secondary btn">
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
          {
          AllReviews?.map((review) => (
            <SwiperSlide key={review._id} className="rounded-xl p-10 bg-secondary">
              <div className="h-full flex flex-col justify-between">
                <p
                  id="whatsay"
                  className="md:text-lg text-md text-gray-700 text-justify"
                >
                  {review.review}
                </p>
                <div id="whosay" className="flex flex-row justify-between mb-8">
                  <div>
                    <h2 className="font-semibold md:text-xl text-lg">
                      {review.reviewerName}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-md">
                      {review.reviewerBio}
                    </p>
                  </div>
                  <div className="font-bold text-primary">
                    {review.companyName}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
          }
        </Swiper>
      </div>
    </div>
  );
}
