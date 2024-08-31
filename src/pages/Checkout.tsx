/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { TCheckout } from "../Redux/Types/Types";
import { useCreateBookingMutation } from "../Redux/Api/roomApi";
import { toast } from "react-toastify";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";
import { useState } from "react";
import BookingConfirmModal from "../Components/Modal/BookingConfirmModal";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, user, totalCost, roomID, room, slotId, slots } =
    location.state || {};
  // console.log(slotId);
  const { register, handleSubmit, reset } = useForm<TCheckout>({
    defaultValues: {
      slots: slotId,
    },
  });

  // console.log(slots);
  const [createRoom] = useCreateBookingMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataToSubmit, setFormDataToSubmit] = useState<TCheckout | null>(
    null
  );

  const onSubmit: SubmitHandler<TCheckout> = (formData) => {
    setFormDataToSubmit(formData);
    setIsModalOpen(true);
  };

  const handleConfirm = async (confirm: boolean) => {
    setIsModalOpen(false);
    if (confirm && formDataToSubmit) {
      try {
        const finalData = {
          ...formDataToSubmit,
          slots: formDataToSubmit.slots || [],
        };
        console.log(finalData);
        await createRoom(finalData).unwrap();
        reset();
        toast.success("Booking successfully!");
        navigate("/mybookings");
      } catch (error) {
        console.log(error);
        const errorMessage = DisplayErrorMessage(error);
        toast.error(errorMessage || "Failed to book.");
      }
    }
  };
  return (
    <div className="bg-primary dark:bg-gray-900">
      <div id="checkout-card-wrapper" className="w-full max-w-3xl mx-auto p-8">
        <form
          onSubmit={handleSubmit(onSubmit)}
          id="checkout-card"
          className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700"
        >
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
            Checkout
          </h1>
          {/* summary */}
          <div id="summary" className="mb-2 border-b pb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Booking Summary
            </h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={user?.name}
                  name="name"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
                {/* hidden */}
                <input
                  id="user"
                  type="hidden"
                  {...register("user", { required: true })}
                  value={user?._id}
                />
              </div>
              <div>
                <label
                  htmlFor="room"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Room
                </label>
                <input
                  type="hidden"
                  id="room"
                  {...register("room", { required: true })}
                  value={roomID}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
                <input
                  type="text"
                  id="room"
                  value={room.name}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Meeting Date
                </label>
                <input
                  type="date"
                  {...register("date", { required: true })}
                  value={date}
                  id="date"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="slots"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Slots
                </label>
                <div>
                  {slotId.map((slot: string, index: number) => {
                    const slotData = slots.find((s: any) => s._id === slot);
                    return (
                      <div key={index} className="mb-4">
                        <label
                          htmlFor={`slots.${index}`}
                          className="block text-gray-700 dark:text-white mb-1 border rounded-md "
                        >
                          {slotData?.startTime} - {slotData?.endTime}
                        </label>
                        <input
                          type="hidden"
                          {...register(`slots.${index}` as const, {
                            required: true,
                          })}
                          value={slot}
                          className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                          readOnly
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* Total Cost */}
          <div
            id="total-cost"
            className="flex flex-row justify-between items-center border-b mb-6"
          >
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">
              Total Cost{" "}
              <span className="text-sm font-normal text-gray-400">
                Taxes and charges included
              </span>
            </h2>
            <p className="font-bold text-lg">${totalCost}</p>
          </div>
          {/* Payment Information */}
          <div id="payment-info">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2 mt-4">
              Payment Information
            </h2>
            <div className="mt-4">
              <label
                htmlFor="card_number"
                className="block text-gray-700 dark:text-white mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="exp_date"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                />
              </div>
            </div>
          </div>
          {/* confirm button */}
          <div id="confirm-button" className="mt-8 flex justify-end">
            <button type="submit" className="btn btn-primary text-white">
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
      <BookingConfirmModal
        isOpen={isModalOpen}
        onClose={(confirm) => handleConfirm(confirm)}
        onConfirm={() => handleConfirm(true)}
      />
    </div>
  );
}
