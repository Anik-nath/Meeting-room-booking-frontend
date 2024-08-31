import UpdateBookingModal from "../Components/Modal/UpdateBookingModal";
import { useGetMyBookingQuery } from "../Redux/Api/roomApi";
import { useAppSelector } from "../Redux/hook";

export default function Mybooking() {
  const user = useAppSelector((state) => state.user.userData);
  const { data: bookings } = useGetMyBookingQuery(user?.email ?? "");
  const mybookings = bookings?.data;
  // console.log(mybookings)
  const handleModal = () => {
    const modal = document.getElementById(
      "Update-booking-modal"
    ) as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
  };
  return (
    <div className="md:px-10 px-6 py-12 bg-primary min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl">My Bookings</h1>
        <p className="text-white text-lg">Total : {mybookings?.length}</p>
      </div>
      <div>
        <div className="overflow-x-auto bg-white mt-8 rounded-xl">
          <table className="table">
            <thead>
              <tr className="border-primary">
                <th>Booking ID</th>
                <th>Booking Date</th>
                <th>Booking By</th>
                <th>Room No.</th>
                <th>Room Name</th>
                <th>Floor No.</th>
                <th>Meeting Time</th>
                <th>Amount</th>
                <th>Booking Status</th>
                <th>Modify</th>
              </tr>
            </thead>
            <tbody>
              {mybookings?.map((booking) => (
                <tr key={booking._id} className="border-gray-300 text-gray-700">
                  <td>#{booking._id.slice(0, 4)}</td>
                  <td>{booking.date}</td>
                  <td>{user?.name}</td>
                  <td>{booking.room.roomNo}</td>
                  <td>
                    <div className="font-semibold">{booking.room.name}</div>
                  </td>
                  <td>{booking.room.floorNo}</td>
                  <td>
                    {booking.slots.map((slot) => (
                      <div key={slot._id} className="py-1">
                        <p>
                          From {slot.startTime} - To {slot.endTime}
                        </p>
                      </div>
                    ))}
                  </td>
                  <td>${booking.totalAmount}</td>
                  <th>
                    <div
                      className={`badge ${
                        booking.isConfirmed === "confirmed"
                          ? "badge-primary"
                          : "badge-error"
                      } badge-outline font-normal`}
                    >
                      {booking.isConfirmed}
                    </div>
                  </th>
                  <td>
                    <button
                      id="update-booking"
                      className="btn-secondary"
                      onClick={handleModal}
                    >
                      Update
                    </button>
                    <UpdateBookingModal />
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
