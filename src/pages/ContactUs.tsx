import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TContactFormValues } from "../Redux/Types/Types";
import { toast } from "react-toastify";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";
import { useCreateMailMutation } from "../Redux/Api/roomApi";

export default function ContactUs() {
  const formRef = useRef<HTMLDivElement>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TContactFormValues>();
  const [sendMail] = useCreateMailMutation();

  const scrollToSection = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form submission
  const onSubmit: SubmitHandler<TContactFormValues> = async (formData) => {
    const resultData = {
      ...formData,
    };
    try {
      await sendMail(resultData).unwrap();
      reset();
      toast.success("Send mail successfully!");
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
          backgroundImage: "url('https://i.postimg.cc/XqNYppz8/contact.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#011100ee] opacity-75"></div>

        <div className="relative text-center md:w-1/2 w-full nexus-animate-2">
          <h1 className="text-gray-200 md:text-2xl text-lg">Contact Us</h1>
          <h1 className="text-3xl md:text-5xl font-bold py-4 text-white">
            We're Here to Help
          </h1>
          <p className="text-gray-300 md:text-lg text-md pb-4">
            Reach out anytime with your questions or feedback. Our team is ready
            to assist you and ensure you have the best experience.
          </p>
          <button
            onClick={scrollToSection}
            className="btn btn-primary text-white cta-button"
          >
            Send Message
          </button>
        </div>
      </section>

      <section id="contact" className="text-center md:px-10 px-6 py-12">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-10 text-center">
          Let's start conversation
        </h2>

        {/* contact form */}
        <div ref={formRef}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-gray-100 shadow-md rounded-2xl p-4 md:w-1/2 mx-auto"
          >
            {/* name */}
            <div className="text-left w-full text-primary mb-2 font-semibold">
              <label htmlFor="name">Your Name</label>
            </div>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              placeholder="Write here"
              className="input input-bordered input-primary w-full"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* email */}
            <div className="text-left w-full text-primary my-2 font-semibold">
              <label htmlFor="email">Your Email</label>
            </div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Write here"
              className="input input-bordered input-primary w-full"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* subject */}
            <div className="text-left w-full text-primary my-2 font-semibold">
              <label htmlFor="subject">Your Subject</label>
            </div>
            <input
              {...register("subject", { required: "Subject is required" })}
              type="text"
              placeholder="Write here"
              className="input input-bordered input-primary w-full"
            />
            {errors.subject && (
              <p className="text-red-500">{errors.subject.message}</p>
            )}

            {/* message */}
            <div className="text-left w-full text-primary my-2 font-semibold">
              <label htmlFor="message">Message</label>
            </div>
            <textarea
              {...register("message", { required: "Message is required" })}
              rows={5}
              className="textarea textarea-bordered textarea-primary w-full p-2.5"
              placeholder="Write your thoughts here"
            />
            {errors.message && (
              <p className="text-red-500">{errors.message.message}</p>
            )}

            <div>
              <button type="submit" className="btn btn-primary text-white mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
