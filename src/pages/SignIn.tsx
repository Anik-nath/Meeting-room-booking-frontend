import { Check } from "lucide-react";
import { useAppDispatch } from "../Redux/hook";
import { TSignInRequest } from "../Redux/Types/Types";
import { useSignInMutation } from "../Redux/Api/authApi";
import { useForm } from "react-hook-form";
import { setUser } from "../Redux/FeatureSlice/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit } = useForm<TSignInRequest>();
  const [signIn, { isLoading, error }] = useSignInMutation();

  const onSubmit = async (data: TSignInRequest) => {
    try {
      const response = await signIn(data).unwrap();
      // console.log("Login successful:", response);
      dispatch(setUser({ token: response.token, userData: response.data }));
      toast.success("Successfully Sign in! Welcome, " + response.data.name, {
        position: "top-center",
        autoClose: 2000,
      });
      navigate("/meeting-rooms");
    } catch (err) {
      console.error("Failed to sign in:", err);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  return (
    <div className="md:px-10 px-6 py-24 bg-primary">
      <div className="bg-primary rounded-md md:w-3/4 w-full mx-auto shadow-2xl border">
        <div className="flex justify-center md:flex-row flex-col">
          <div className="w-full md:w-1/2 md:py-20 py-4 min-h-full flex flex-col items-center md:justify-between justify-center">
            <div className="text-center">
              <h2 className="text-white text-4xl font-semibold">Sign in</h2>
              <p className="text-white mt-2 text-md">
                to use all features of the application
              </p>
              <div></div>
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
              {/* email */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="email">Enter Email</label>
              </div>
              <input
                {...register("email")}
                type="email"
                name="email"
                required
                placeholder="Write here"
                className="input input-bordered input-primary w-full"
              />
              <p className="text-red-500 text-sm hidden">
                Invaild email address
              </p>
              {/* password */}
              <div className="text-left w-full text-primary my-2 font-semibold">
                <label htmlFor="password">Enter Password</label>
              </div>
              <input
                {...register("password")}
                type="password"
                name="password"
                required
                placeholder="Write here "
                className="input input-bordered input-primary w-full"
              />
              <p className="text-red-500 text-sm hidden">Invaild Password</p>
              {/* submit button */}
              <div className="flex md:flex-row flex-col items-center gap-4 mt-8">
                <button
                  type="submit"
                  className="btn-primary text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </button>
                {error && <p className="text-red-500">Failed to sign in</p>}
                <span className="text-gray-500">If Don't have an account</span>
                <a
                  className="text-primary hover:underline font-semibold"
                  href="/signup"
                >
                  Sign up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
