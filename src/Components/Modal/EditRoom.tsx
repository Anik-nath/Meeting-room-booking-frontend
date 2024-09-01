import { useForm, SubmitHandler } from "react-hook-form";
import { TRoom } from "../../Redux/Types/Types";
import { roomAmenities } from "../../Redux/utils/roomAmenitiesArr";

interface EditRoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: TRoom) => void;
  room: TRoom;
}

export default function EditRoom({
  isOpen,
  onClose,
  onSubmit,
  room,
}: EditRoomModalProps) {
  const { register, handleSubmit, reset } = useForm<TRoom>({
    defaultValues: room,
  });

  const submitHandler: SubmitHandler<TRoom> = (data) => {
    onSubmit(data);
    onClose();
    reset();
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-8">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 bg-opacity-15"></div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:max-w-2xl w-full">
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div
                    id="form-container"
                    className="mt-3 text-center sm:text-left w-full"
                  >
                    <h3 className="text-lg mb-4 font-medium text-gray-900">
                      Edit Room
                    </h3>
                    <form onSubmit={handleSubmit(submitHandler)}>
                      <div className="grid md:grid-cols-3 grid-cols-2 gap-4 text-start">
                        <div className="mt-2">
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Room Name
                          </label>
                          <input
                            id="name"
                            {...register("name", { required: true })}
                            className="input input-bordered border-gray-400 focus:outline-none w-full"
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="roomNo"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Room No.
                          </label>
                          <input
                            id="roomNo"
                            {...register("roomNo", {
                              required: true,
                              valueAsNumber: true,
                            })}
                            className="input input-bordered border-gray-400 focus:outline-none w-full"
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="floorNo"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Floor No.
                          </label>
                          <input
                            id="floorNo"
                            {...register("floorNo", {
                              required: true,
                              valueAsNumber: true,
                            })}
                            className="input input-bordered border-gray-400 focus:outline-none w-full"
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="capacity"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Capacity
                          </label>
                          <input
                            id="capacity"
                            {...register("capacity", {
                              required: true,
                              valueAsNumber: true,
                            })}
                            className="input input-bordered border-gray-400 focus:outline-none w-full"
                          />
                        </div>
                        <div className="mt-2">
                          <label
                            htmlFor="pricePerSlot"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Price Per Slot
                          </label>
                          <input
                            id="pricePerSlot"
                            {...register("pricePerSlot", {
                              required: true,
                              valueAsNumber: true,
                            })}
                            className="input input-bordered border-gray-400 focus:outline-none w-full"
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <div>
                          <label className="block font-medium mb-2 text-start">
                            Amenities
                          </label>
                          <div className="grid md:grid-cols-3 grid-cols-2 gap-4">
                            {roomAmenities.map((amenity) => (
                              <div key={amenity} className="form-control">
                                <label className="cursor-pointer label border border-gray-400 rounded-md text-start">
                                  <input
                                    type="checkbox"
                                    {...register("amenities")}
                                    value={amenity}
                                    className="checkbox checkbox-primary"
                                    defaultChecked={room.amenities.includes(
                                      amenity
                                    )}
                                  />
                                  <span className="label-text w-full ml-4">
                                    {amenity}
                                  </span>
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 sm:mt-6 flex  gap-4 flex-row-reverse">
                        <button
                          type="submit"
                          className="btn-primary my-4 text-white w-full"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          onClick={onClose}
                          className="btn-secondary my-4 w-full"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
