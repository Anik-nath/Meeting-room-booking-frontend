/* eslint-disable @typescript-eslint/no-unused-vars */
import { CheckCircle, Trash2, XCircle } from "lucide-react";
import {
  useDeleteBookingMutation,
  useBookingStatusMutation,
  useGetAllbookingsQuery,
} from "../Redux/Api/roomApi";
import { toast } from "react-toastify";

export default function BookingList() {
  const { data: bookings, refetch } = useGetAllbookingsQuery();
  const allBookings = bookings?.data.filter((item) => item.isDeleted === false);
  // console.log(allBookings);
  const [updateBooking] = useBookingStatusMutation();
  const [deleteBooking] = useDeleteBookingMutation();
  // accept booking
  const handleAcceptBooking = async (id: string) => {
    try {
      await updateBooking({ id, isConfirmed: "confirmed" }).unwrap();
      toast.success("Booking accepted successfully!");
      refetch();
    } catch (error) {
      console.log(id);
      toast.error("Failed to accept booking.");
    }
  };
  // cancel by admin booking
  const handleRejectBooking = async (id: string) => {
    try {
      await updateBooking({ id, isConfirmed: "unconfirmed" }).unwrap();
      toast.success("Booking Unconfirmed!");
      refetch();
    } catch (error) {
      toast.error("Failed to Unconfirmed booking.");
    }
  };
  // delete booking
  const handleDeleteBooking = async (id: string) => {
    try {
      await deleteBooking({ id, isDeleted: true }).unwrap();
      toast.success("Delete Booking Successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to Delete Booking.");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl">Booking List</h1>
      {/* Booking list */}
      <div>
        <div className="overflow-x-auto bg-white mt-8 rounded-xl">
          <table className="table">
            <thead>
              <tr className="border-primary">
                <th>Trans. Id</th>
                <th>Booking Date</th>
                <th>Room Details</th>
                <th>Time Slot</th>
                <th>Amount</th>
                <th>Booking Status</th>
                <th>Payment</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {allBookings?.map((booking) => (
                <tr key={booking._id} className="border-gray-300 text-gray-700">
                  <td>{booking.transactionId}</td>
                  <td>
                    <p>{booking?.user?.name}</p>
                    <p>{booking?.date}</p>
                  </td>
                  <td>
                    <p>Room No: {booking.room?.roomNo}</p>
                    <p>Name: {booking?.room?.name}</p>
                    <p>Floor No: {booking?.room?.floorNo}</p>
                  </td>
                  <td>
                    {booking.slots.map((slot) => (
                      <div key={slot._id} className="py-1">
                        <p>
                          From {slot.startTime} - To {slot.endTime}
                        </p>
                      </div>
                    ))}
                  </td>
                  <td>${booking?.totalAmount}</td>
                  <td>
                    <div
                      className={`badge capitalize ${
                        booking.isConfirmed === "confirmed"
                          ? "badge-primary"
                          : booking.isConfirmed === "unconfirmed"
                          ? "badge-error"
                          : "badge-warning"
                      } badge-outline font-normal`}
                    >
                      {booking.isConfirmed}
                    </div>
                  </td>
                  <td className="font-semibold">
                    {booking.isPayment === true ? (
                      <span className=" badge badge-primary text-white rounded-full px-2">
                        Paid
                      </span>
                    ) : (
                      <span className=" badge badge-error text-white rounded-full px-2">
                        Unpaid
                      </span>
                    )}
                  </td>
                  <td className="flex flex-col items-center justify-center gap-2">
                    <button
                      data-tip="Confirm"
                      className="bg-primary tooltip tooltip-primary tooltip-left text-white btn-sm rounded"
                      onClick={() => handleAcceptBooking(booking._id)}
                    >
                      <CheckCircle className="h-5 w-5 text-white" />
                    </button>
                    <button
                      data-tip="Unconfirm"
                      className="bg-primary tooltip tooltip-primary tooltip-left text-white btn-sm rounded"
                      onClick={() => handleRejectBooking(booking._id)}
                    >
                      <XCircle className="h-5 w-5" />
                    </button>
                    <button
                      data-tip="Delete"
                      className="bg-red-500 tooltip tooltip-error tooltip-left text-white btn-sm rounded"
                      onClick={() => handleDeleteBooking(booking._id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
