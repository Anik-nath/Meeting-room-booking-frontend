import { useRef } from "react";
import {
  useCreateReviewsMutation,
  useGetAllReviewsQuery,
} from "../Redux/Api/roomApi";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { TReview } from "../Redux/Types/Types";
import { toast } from "react-toastify";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";

export default function Reviews() {
  const reviewRef = useRef<HTMLDivElement>(null);
  const scrollToSection = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const { data, refetch } = useGetAllReviewsQuery();
  const AllReviews = data?.data;

  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm<TReview>();
  const [createReview] = useCreateReviewsMutation();

  const onSubmit: SubmitHandler<TReview> = async (formData) => {
    const resultData = {
      ...formData,
    };
    try {
      await createReview(resultData).unwrap();
      reset();
      toast.success("Review added successfully!");
      refetch();
      navigate("/reviews");
    } catch (error) {
      const errorMessage = DisplayErrorMessage(error);
      toast.error(errorMessage || "Failed to add review.");
    }
  };
  return (
    <div>
      <section
        id="about-hero"
        className="relative w-full md:px-10 px-6 flex flex-col items-center justify-center py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/MK3QgqCf/premium-photo-1682436127861-3718772f4c2e.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#011100ee] opacity-75"></div>

        <div className="relative text-center md:w-1/2 w-full">
          <h1 className="text-gray-200 md:text-2xl text-lg">Reviews</h1>
          <h1 className="text-3xl md:text-5xl font-bold py-4 text-white">
            What Our Clients Say
          </h1>
          <p className="text-gray-300 md:text-lg text-md pb-4">
            Real Feedback from Our Valued Customers—Discover How Our Platform
            and Services Make a Difference.
          </p>
          <button
            onClick={scrollToSection}
            className="btn btn-primary text-white cta-button"
          >
            Explore Reviews
          </button>
        </div>
      </section>
      <section
        id="review"
        ref={reviewRef}
        className="text-center md:px-10 px-6 py-12"
      >
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-10 text-center ">
          All Reviews
        </h2>
        {/* all review grid */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {AllReviews?.map((review) => (
            <div
              key={review._id}
              id="reviewCard"
              className="h-full w-full flex flex-col justify-between p-4 bg-primary rounded-lg"
            >
              <div
                id="whatsay"
                className=" md:text-md text-sm text-white text-justify chat chat-end"
              >
                <div className="chat-bubble-secondary chat-bubble">
                  {review.review}
                </div>
              </div>
              <div
                id="whosay"
                className="mt-6 border-t flex flex-row justify-between items-center "
              >
                <div className="text-left mt-4 ">
                  <h2 className="font-semibold md:text-xl text-lg text-white uppercase">
                    {review.reviewerName}
                  </h2>
                  <p className="text-gray-100 text-sm md:text-md">
                    {review.reviewerBio}
                  </p>
                </div>
                <div className="text-right text-gray-100">
                  <p className="font-semibold">Company</p>
                  <p>{review.companyName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="create-review" className="md:px-10 px-6 py-12">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Write Your Review
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 mx-auto p-4 rounded-xl mt-6 md:w-1/2 w-full"
        >
          <div className="form-control">
            <label className="label" htmlFor="reviewerName">
              <span className="label-text">Reviewer Name</span>
            </label>
            <input
              id="reviewerName"
              type="text"
              className="input input-bordered focus:outline-none border-primary "
              {...register("reviewerName")}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="reviewerBio">
              <span className="label-text">Reviewer Bio</span>
            </label>
            <input
              id="reviewerBio"
              type="text"
              className="input input-bordered focus:outline-none border-primary"
              {...register("reviewerBio")}
            />
          </div>

          <div className="form-control">
            <label className="label" htmlFor="review">
              <span className="label-text">Review</span>
            </label>
            <textarea
              id="review"
              className="textarea textarea-bordered focus:outline-none border-primary"
              {...register("review")}
            ></textarea>
          </div>

          <div className="form-control">
            <label className="label" htmlFor="companyName">
              <span className="label-text">Company Name</span>
            </label>
            <input
              id="companyName"
              type="text"
              className="input input-bordered focus:outline-none border-primary"
              {...register("companyName")}
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary text-white">
              Submit Review
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
