import { Pencil, Trash2 } from "lucide-react";
import { useGetAllbookingsQuery } from "../Redux/Api/roomApi";

export default function BookingList() {
  const { data: bookings } = useGetAllbookingsQuery();
  const allBookings = bookings?.data;
  console.log(allBookings);

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl">Booking List</h1>
      {/* booking list */}
      <div>
        <div className="overflow-x-auto bg-white mt-8 rounded-xl">
          <table className="table">
            <thead>
              <tr className="border-primary">
                <th>Booking Date</th>
                <th>Booking By</th>
                <th>Room No.</th>
                <th>Room Name</th>
                <th>Floor No.</th>
                <th>Meeting Time</th>
                <th>Amount</th>
                <th>Booking Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {allBookings?.map((booking) => (
                <tr key={booking._id} className="border-gray-300 text-gray-700">
                  <td>{booking?.date}</td>
                  <td>{booking?.user?.name}</td>
                  <td>{booking.room?.roomNo}</td>
                  <td>
                    <div className="font-semibold">{booking?.room?.name}</div>
                  </td>
                  <td>{booking?.room?.floorNo}</td>
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
                    <button className="bg-primary text-white btn-sm rounded">
                      <Pencil className="h-5 w-5" />
                    </button>
                  </td>
                  <td>
                    <button className="bg-red-500 text-white btn-sm rounded">
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
