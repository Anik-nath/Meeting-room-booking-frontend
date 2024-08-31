/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { useCreateSlotsMutation, useGetRoomsQuery } from "../Redux/Api/roomApi";
import { toast } from "react-toastify";
import { TcreateSlot } from "../Redux/Types/Types";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";

export default function CreateSlot() {
  const { data } = useGetRoomsQuery();
  const Allrooms = data?.data;
  const { register, handleSubmit, reset } = useForm<TcreateSlot>();
  const [createSlot] = useCreateSlotsMutation();

  const onSubmit: SubmitHandler<TcreateSlot> = async (formData) => {
    try {
      await createSlot(formData).unwrap();
      reset();
      toast.success("Slot added successfully!");
    } catch (error) {
      const errorMessage = DisplayErrorMessage(error);
      toast.error(errorMessage || "Failed to add slot");
    }
  };
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <div className="bg-gray-100 p-4 rounded-xl">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto"
        >
          <h2 className="text-2xl font-semibold mb-6">Add New Slot</h2>
          <div className="flex md:flex-row flex-col justify-between md:gap-4">
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Room Name
                </span>
              </label>
              <select
                {...register("room", { required: true })}
                className="select select-bordered border-gray-400 focus:outline-none w-full"
                defaultValue=""
              >
                <option value="" disabled>
                  Select room
                </option>
                {Allrooms?.map((room) => (
                  <option key={room._id} value={room._id}>
                    {room.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Date
                </span>
              </label>
              <input
                type="date"
                {...register("date", { required: true })}
                name="date"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:gap-4">
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Start Time
                </span>
              </label>
              <input
                type="time"
                {...register("startTime", { required: true })}
                name="startTime"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  End Time
                </span>
              </label>
              <input
                type="time"
                {...register("endTime", { required: true })}
                name="endTime"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="btn btn-primary text-white mt-6 md:mt-0"
            >
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
