import { Pencil, Trash2 } from "lucide-react";
import { useGetRoomsQuery } from "../Redux/Api/roomApi";

export default function RoomList() {
  const { data } = useGetRoomsQuery();
  const Allrooms = data?.data;

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl font-semibold mb-6">Room List</h1>
      {/* Room list */}
      <div className="overflow-x-auto bg-white mt-8 rounded-xl">
        {Allrooms?.length === 0 ? (
          <div className="text-center  text-primary text-xl flex flex-row items-center justify-center h-screen">
            <h2>No rooms available.</h2>
          </div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr className="border-primary">
                <th>Room Name</th>
                <th>Room No.</th>
                <th>Floor No.</th>
                <th>Capacity</th>
                <th>Price Per Slot</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {Allrooms?.map((room) => (
                <tr key={room._id} className="border-gray-300 text-gray-700">
                  <td>
                    <div>
                      <div className="font-semibold">{room.name}</div>
                    </div>
                  </td>
                  <td>#{room.roomNo}</td>
                  <td>{room.floorNo}</td>
                  <td>{room.capacity}</td>
                  <td>${room.pricePerSlot}</td>
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
        )}
      </div>
    </div>
  );
}
