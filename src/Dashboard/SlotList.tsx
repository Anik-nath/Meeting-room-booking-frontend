import { Pencil, Trash2 } from "lucide-react";
import { useGetslotsQuery } from "../Redux/Api/roomApi";
import { TSlot } from "../Redux/Types/Types";

type GroupedSlot = {
  room: string;
  date: string;
  slots: TSlot[];
};

type GroupedSlots = {
  [key: string]: GroupedSlot;
};

export default function SlotList() {
  const { data } = useGetslotsQuery();
  const AllSlots = data?.data;
  console.log(AllSlots)

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
  );
}
