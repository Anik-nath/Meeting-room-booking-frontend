/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pencil, Trash2 } from "lucide-react";
import {
  useDeleteRoomsMutation,
  useGetRoomsQuery,
  useRoomUpdateMutation,
} from "../Redux/Api/roomApi";
import { toast } from "react-toastify";
import EditRoom from "../Components/Modal/EditRoom";
import { useState } from "react";
import { TRoom } from "../Redux/Types/Types";

export default function RoomList() {
  const { data, refetch, isLoading } = useGetRoomsQuery();
  const Allrooms = data?.data.filter((item) => item.isDeleted === false);

  const [deleteRooms] = useDeleteRoomsMutation();
  const handleDeleteRoom = async (id: string | undefined) => {
    try {
      await deleteRooms({ id, isDeleted: true }).unwrap();
      toast.success("Delete Room Successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to Delete Room.");
    }
  };

  const [updateRoom] = useRoomUpdateMutation();
  const [selectedRoom, setSelectedRoom] = useState<TRoom | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditRoom = (room: TRoom) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleUpdateRoom = async (room: TRoom) => {
    try {
      const result = {
        id: room._id,
        payload: {
          name: room.name,
          roomNo: Number(room.roomNo),
          floorNo: Number(room.floorNo),
          capacity: Number(room.capacity),
          pricePerSlot: Number(room.pricePerSlot),
          amenities: room.amenities,
        },
      };
      // console.log(result);
      await updateRoom(result).unwrap();
      setIsModalOpen(false);
      toast.success("Update Room Successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to update the Room!");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl font-semibold mb-6">Room List</h1>
      {/* Room list */}
      {isLoading ? (
        <div className=" text-primary flex justify-center items-center w-full h-screen">
          <span className="loading loading-bars loading-lg"></span>
        </div>
      ) : (
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
                  <th>Amenities</th>
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
                      <ul>
                        {room.amenities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      <button
                        data-tip="Click to Edit"
                        onClick={() => handleEditRoom(room)}
                        className="bg-primary tooltip tooltip-primary text-white btn-sm rounded"
                      >
                        <Pencil className="h-5 w-5" />
                      </button>
                      {/* modal for edit */}
                      {selectedRoom && (
                        <EditRoom
                          isOpen={isModalOpen}
                          onClose={() => {
                            setIsModalOpen(false);
                            setSelectedRoom(null);
                          }}
                          onSubmit={handleUpdateRoom}
                          room={selectedRoom}
                        />
                      )}
                    </td>
                    <td>
                      <button
                        data-tip="Click to Remove"
                        onClick={() => handleDeleteRoom(room._id)}
                        className="bg-red-500 tooltip tooltip-error text-white btn-sm rounded"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
