import { useLocation } from "react-router-dom";
import { useState } from "react";
import BookingConfirmModal from "../Components/Modal/BookingConfirmModal";

export default function Checkout() {
  const location = useLocation();

  const { date, time, user, totalCost } = location.state || {};
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleConfirmBooking = () => {
    setIsBookingConfirmed(true);
    const modal = document.getElementById(
      "confirmation-modal"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };

  const confirmData = {
    date,
    time,
    user,
    totalCost,
  };

  return (
    <div className="bg-primary dark:bg-gray-900">
      <div id="checkout-card-wrapper" className="w-full max-w-3xl mx-auto p-8">
        <div
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
                  value={user.name}
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={user.email}
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
                  value={date}
                  id="date"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-gray-700 dark:text-white mb-1"
                >
                  Meeting Time
                </label>
                <input
                  type="text"
                  value={time}
                  id="time"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  readOnly
                />
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
            <button
              className="btn btn-primary text-white"
              onClick={handleConfirmBooking}
            >
              Confirm Booking
            </button>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isBookingConfirmed && (
        <BookingConfirmModal confirmData={confirmData}></BookingConfirmModal>
      )}
    </div>
  );
}
