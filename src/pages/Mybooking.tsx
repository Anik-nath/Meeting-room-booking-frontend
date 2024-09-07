import { useGetMyBookingQuery } from "../Redux/Api/roomApi";
import { useAppSelector } from "../Redux/hook";

export default function Mybooking() {
  const user = useAppSelector((state) => state.user.userData);
  const { data: bookings, isLoading } = useGetMyBookingQuery(user?.email ?? "");
  const mybookings = bookings?.data;
  // console.log(mybookings);

  return (
    <div className="md:px-10 px-6 py-12 bg-primary min-h-screen">
      <div className="flex justify-between">
        <h1 className="text-white text-2xl">My Bookings</h1>
        <p className="text-white text-lg">Total : {mybookings?.length}</p>
      </div>

      {isLoading ? (
        <div className=" text-white flex justify-center items-center w-full h-screen ">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : mybookings?.length === 0 ? (
        <div className="text-center  text-white border rounded-md my-10 text-xl flex flex-row items-center justify-center h-screen">
          <h2>No bookings yet!</h2>
        </div>
      ) : (
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
                  <tr
                    key={booking._id}
                    className="border-gray-300 text-gray-700"
                  >
                    <td>{booking.transactionId}</td>
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
                    <td className="capitalize">
                      <div
                        className={`badge ${
                          booking.isConfirmed === "confirmed"
                            ? "badge-primary"
                            : "badge-error"
                        } badge-outline font-normal`}
                      >
                        {booking.isConfirmed}
                      </div>
                    </td>
                    <td className="font-semibold">
                      {booking.isPayment === true ? (
                        <span className="badge badge-primary text-white rounded-full px-2">
                          Paid
                        </span>
                      ) : (
                        <span className="badge badge-error text-white rounded-full px-2">
                          Unpaid
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
