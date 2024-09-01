/* eslint-disable @typescript-eslint/no-unused-vars */
import { Pencil, Trash2 } from "lucide-react";
import { useDeleteSlotsMutation, useGetslotsQuery } from "../Redux/Api/roomApi";
import { GroupedSlots, TSlot } from "../Redux/Types/Types";
import { toast } from "react-toastify";

export default function SlotList() {
  const { data, refetch } = useGetslotsQuery();
  const AllSlots = data?.data.filter((item) => item.isDeleted === false);
  console.log(AllSlots);

  const groupedSlots = AllSlots?.reduce((acc: GroupedSlots, slot: TSlot) => {
    const key = `${slot.room}-${slot.date}`;
    if (!acc[key]) {
      acc[key] = {
        room: slot.room,
        date: slot.date,
        slots: [],
      };
    }
    acc[key].slots.push(slot);
    return acc;
  }, {});
  const groupedSlotsArray = Object.values(groupedSlots || {});

  const [deleteSlots] = useDeleteSlotsMutation();
  const handleDeleteSlot = async (id: string | undefined) => {
    try {
      // console.log(id)
      await deleteSlots({ id, isDeleted: true }).unwrap();
      toast.success("Delete Room Successfully!");
      refetch();
    } catch (error) {
      toast.error("Failed to Delete Room.");
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl font-semibold mb-6">Slot List</h1>
      {/* Slot list */}
      <div className="overflow-x-auto bg-white mt-8 rounded-xl">
        <table className="table w-full">
          <thead className="">
            <tr className="border-primary">
              <th>Room Name</th>
              <th>Room No.</th>
              <th>Date</th>
              <th>Time Slots</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {groupedSlotsArray?.map((group, index) => (
              <tr key={index} className="border-gray-300 text-gray-700">
                <td>
                  <div className="font-semibold">{group.room}</div>
                </td>
                <td>{group.room}</td>
                <td>{group.date}</td>
                <td>
                  {group.slots.map((slot, idx) => (
                    <div
                      key={idx}
                      className="border rounded-full mb-1 text-center bg-gray-100"
                    >
                      <span>{slot.startTime}</span> -{" "}
                      <span>{slot.endTime}</span>
                    </div>
                  ))}
                </td>
                <td>
                  <button
                    data-tip="Click to Edit"
                    className="bg-primary tooltip tooltip-primary text-white btn-sm rounded"
                  >
                    <Pencil className="h-5 w-5" />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteSlot(group.room)}
                    data-tip="Click to Remove"
                    className="bg-red-500 tooltip tooltip-error text-white btn-sm rounded"
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
  );
}
