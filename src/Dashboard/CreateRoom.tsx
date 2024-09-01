/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { TRoom } from "../Redux/Types/Types";
import { useCreateRoomMutation } from "../Redux/Api/roomApi";
import { roomAmenities } from "../Redux/utils/roomAmenitiesArr";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";
import { useNavigate } from "react-router-dom";

export default function CreateRoom() {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm<TRoom>();
  const [createRoom] = useCreateRoomMutation();

  const onSubmit: SubmitHandler<TRoom> = async (formData) => {
    const resultData = {
      ...formData,
      roomNo: Number(formData.roomNo),
      floorNo: Number(formData.floorNo),
      capacity: Number(formData.capacity),
      pricePerSlot: Number(formData.pricePerSlot),
    };
    try {
      // console.log(resultData);
      await createRoom(resultData).unwrap();
      reset();
      toast.success("Room added successfully!");
      navigate("/dashboard/room-list");
    } catch (error) {
      const errorMessage = DisplayErrorMessage(error);
      toast.error(errorMessage || "Failed to add room.");
    }
  };
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto"
      >
        <h2 className="text-2xl font-semibold mb-6">Add New Room</h2>
        <div className="flex md:flex-row flex-col justify-between md:gap-4">
          {/* Room Name */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Room Name
              </span>
            </label>
            <input
              type="text"
              {...register("name", { required: true })}
              name="name"
              className="input input-bordered border-gray-400 focus:outline-none  w-full"
              placeholder="Enter room name"
            />
          </div>

          {/* Room Number */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Room No.
              </span>
            </label>
            <input
              type="number"
              {...register("roomNo", { required: true })}
              name="roomNo"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter room number"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:gap-4">
          {/* Floor Number */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Floor No.
              </span>
            </label>
            <input
              type="number"
              {...register("floorNo", { required: true })}
              name="floorNo"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter floor number"
            />
          </div>
          {/* Capacity */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Capacity
              </span>
            </label>
            <input
              type="number"
              {...register("capacity", { required: true })}
              name="capacity"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter capacity"
            />
          </div>
          {/* Price Per Slot */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Price Per Slot
              </span>
            </label>
            <input
              type="number"
              {...register("pricePerSlot", { required: true })}
              name="pricePerSlot"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter price per slot"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between md:gap-4">
          {/* Amenities */}
          <div className="form-control mb-6 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Amenities
              </span>
            </label>
            <div className="flex flex-wrap gap-4">
              {roomAmenities.map((index) => (
                <label key={index} className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    {...register("amenities", { required: true })}
                    name="amenities"
                    value={index}
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">{index}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="">
          <button type="submit" className="btn btn-primary text-white">
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
}
