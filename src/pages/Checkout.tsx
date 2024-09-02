/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { TCheckout } from "../Redux/Types/Types";
import { useCreateBookingMutation } from "../Redux/Api/roomApi";
import { toast } from "react-toastify";
import { DisplayErrorMessage } from "../Redux/utils/errorMessage";
import BookingConfirmModal from "../Components/Modal/BookingConfirmModal";

export default function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date, user, totalCost, roomID, room, slotId, slots } =
    location.state || {};
  const { register, handleSubmit, reset } = useForm<TCheckout>({
    defaultValues: { slots: slotId },
  });

  const [createBooking] = useCreateBookingMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formDataToSubmit, setFormDataToSubmit] = useState<TCheckout | null>(
    null
  );
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<TCheckout> = (formData) => {
    setFormDataToSubmit(formData);
    setIsModalOpen(true);
  };

  const handleConfirm = async (confirm: boolean) => {
    setIsModalOpen(false);
    if (confirm && formDataToSubmit) {
      setLoading(true);
      try {
        const finalData = {
          ...formDataToSubmit,
          slots: formDataToSubmit.slots || [],
        };
        const response = await createBooking(finalData).unwrap();
        const paymentUrl = response.data.paymentResponse.payment_url;
        window.location.href = paymentUrl;

        if (response.data.result.isPayment === true) {
          reset();
          toast.success("Booking successful!");
          navigate("/mybookings");
        }
      } catch (error) {
        const errorMessage = DisplayErrorMessage(error);
        toast.error(errorMessage || "Failed to book.");
      } finally {
        setLoading(false);
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
          <div id="confirm-button" className="mt-8 flex justify-end">
            <button
              type="submit"
              className="btn btn-primary text-white"
              disabled={loading}
            >
              {loading ? "Processing..." : "Payment"}
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
