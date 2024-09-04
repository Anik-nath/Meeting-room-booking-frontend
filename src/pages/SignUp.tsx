import { Check } from "lucide-react";
import { toast } from "react-toastify";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TSignUp } from "../Redux/Types/Types";
import { useSignUpMutation } from "../Redux/Api/authApi";

export default function SignUp() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm<TSignUp>();
  const [CreateUser] = useSignUpMutation();

  const onSubmit: SubmitHandler<TSignUp> = async (formData) => {
    const resultData = {
      ...formData,
      role: "user",
    };
    try {
      await CreateUser(resultData).unwrap();
      reset();
      toast.success("Sign up successfully!");
      navigate("/signin");
    } catch (error) {
      console.log(error);
      const errorMessage = DisplayErrorMessage(error);
      toast.error(errorMessage || "Failed to add Sign up.");
    }
  };
  return (
    <div className="md:px-10 px-6 py-24 bg-primary">
      <div className="bg-primary rounded-md md:w-3/4 w-full mx-auto shadow-2xl border nexus-animate-2">
        <div className="flex justify-center md:flex-row flex-col">
          <div className="w-full md:w-1/2 md:py-20 py-4 min-h-full flex flex-col items-center md:justify-between justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-semibold">Sign up</h2>
              <p className="text-white mt-2 text-md">
                to use all features of the application
              </p>
            </div>
            <div className="w-14 h-14 bg-white rounded-full md:flex justify-center items-center hidden">
              <Check className="w-12 h-12 text-primary border-4 border-primary rounded-full"></Check>
            </div>
          </div>
          <div className="w-full bg-white">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-10 md:py-20 py-10 w-full mx-auto"
            >
              {/* name */}
              <div className="text-left w-full text-primary mb-2 font-semibold">
                <label htmlFor="name">Enter Name</label>
              </div>
              <input
                type="text"
                {...register("name")}
                name="name"
                placeholder="Write here"
                className="input input-bordered input-primary w-full"
              />
              {/* email */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="email">Enter Email</label>
              </div>
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="Write here"
                className="input input-bordered input-primary w-full"
              />
              {/* password */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="password">Enter Password</label>
              </div>
              <input
                type="password"
                {...register("password")}
                name="password"
                placeholder="Write here "
                className="input input-bordered input-primary w-full"
              />
              {/* phone */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="phone">Enter phone</label>
              </div>
              <input
                type="tel"
                {...register("phone")}
                name="phone"
                placeholder="Write here "
                className="input input-bordered input-primary w-full"
              />
              {/* address */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="address">Enter Address</label>
              </div>
              <input
                type="text"
                {...register("address")}
                name="address"
                placeholder="Write here "
                className="input input-bordered input-primary w-full"
              />
              {/* submit button */}
              <div className="flex flex-row items-center gap-4 mt-8">
                <button type="submit" className="btn-primary text-white">
                  Sign Up
                </button>
                <span className="text-gray-500">or</span>
                <a
                  className="text-primary hover:underline font-semibold"
                  href="/signin"
                >
                  Sign in
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
