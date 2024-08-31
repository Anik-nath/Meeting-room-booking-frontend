import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetAvailAbleslotsQuery,
  useGetRoomByIdQuery,
} from "../Redux/Api/roomApi";
import { useAppSelector } from "../Redux/hook";
import { TslotSummary } from "../Redux/Types/Types";

export default function RoomDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: response } = useGetRoomByIdQuery(id!);
  const room = response?.data;
  const user = useAppSelector((state) => state.user.userData);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TslotSummary[]>([]);

  const { data: availableSlotsData, isLoading: isLoadingSlots } =
    useGetAvailAbleslotsQuery({
      date: selectedDate ?? "",
      roomId: id!,
    });

  const allSlots = availableSlotsData?.data || [];
  const availableSlots = Array.from(
    new Map(
      allSlots.map((slot) => [slot.startTime + slot.endTime, slot])
    ).values()
  );
  // console.log(availableSlots);

  const pricePerSlot = room?.pricePerSlot || 0;
  const navigate = useNavigate();

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    setSelectedSlot([]);
  };

  const handleSlotSelection = (slot: TslotSummary) => {
    if (selectedSlot.some((s) => s._id === slot._id)) {
      setSelectedSlot(selectedSlot.filter((s) => s._id !== slot._id));
    } else {
      setSelectedSlot([...selectedSlot, slot]);
    }
  };

  const handleConfirmBooking = () => {
    const bookingSummary = {
      date: selectedDate,
      slots: selectedSlot,
      user,
      totalCost: selectedSlot.length * pricePerSlot,
      roomID : id,
      room,
      slotId: selectedSlot.map((slot) => slot._id),
      startTime: selectedSlot.map((slot) => slot.startTime),
      endTime: selectedSlot.map((slot) => slot.endTime),
    };
    navigate("/checkout", { state: bookingSummary });
  };

  return (
    <div className="md:px-10 px-6 py-12 bg-primary">
      {/* room image gallery */}
      <div id="room-image-gallery" className="grid grid-cols-2 gap-4">
        <div id="display-image" className="col-span-1">
          <img
            className="w-full rounded-xl h-full object-cover"
            src="https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg"
            alt="room-image"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 col-span-1">
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg"
            alt="room-image"
          />
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg"
            alt="room-image"
          />
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg"
            alt="room-image"
          />
          <img
            className="rounded-xl w-full h-full object-cover"
            src="https://i.postimg.cc/SQznkXX4/photo-1532103151204-5ca98ad48335.jpg"
            alt="room-image"
          />
        </div>
      </div>

      <div
        id="room-details-wrapper"
        className="grid md:grid-cols-3 grid-cols-1 gap-4"
      >
        {/* details */}
        <div id="room-details-part" className="py-8 col-span-2">
          <h2 id="room-name" className="text-white text-2xl font-semibold">
            Room Name - {room?.name}
          </h2>
          <p id="room-id" className="text-white text-md">
            Room No - {room?.roomNo}
          </p>
          <div id="room-detils" className="w-full flex flex-row gap-4 mt-6">
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>{room?.floorNo}</span>
              <p>Floor No</p>
            </div>
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>{room?.capacity}</span>
              <p>Capacity</p>
            </div>
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>{room?.pricePerSlot}</span>
              <p>Price</p>
            </div>
          </div>

          {/* amenities */}
          <h2
            id="amenities-title"
            className="text-white text-2xl font-semibold mt-12"
          >
            Room Amenities
          </h2>
          <div id="amenities-part" className="grid grid-cols-2 gap-4 mt-8">
            {room?.amenities.map((item, index) => (
              <div key={index} className="bg-white p-2 rounded-md py-4">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* booking card */}
        <div
          id="booking-card-part"
          className="bg-white p-4 rounded-md w-full md:my-10 my-0"
        >
          <h2 className="border-b py-4 mb-4 text-lg font-semibold">
            <span className="text-2xl">${pricePerSlot}</span>/ Per Slot
          </h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="date">
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={selectedDate || ""}
              onChange={handleDateChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* available slots */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Available Time Slots
            </label>
            {isLoadingSlots ? (
              <p>Loading available slots...</p>
            ) : availableSlots.length !== 0 ? (
              <div className="grid grid-cols-2 gap-2">
                {availableSlots.map((slot) => (
                  <button
                    key={slot._id}
                    onClick={() => handleSlotSelection(slot)}
                    className={`px-3 py-2 rounded-lg ${
                      slot.isBooked
                        ? "bg-red-100 cursor-not-allowed"
                        : selectedSlot.some((s) => s._id === slot._id)
                        ? "bg-primary text-white"
                        : "bg-gray-200 hover:bg-gray-300"
                    }`}
                    disabled={slot.isBooked}
                  >
                    {slot.startTime} - {slot.endTime}
                  </button>
                ))}
              </div>
            ) : (
              <p>No available slots for the selected date.</p>
            )}
          </div>

          {/* user information */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Information</label>
            <input
              type="text"
              value={user?.name}
              readOnly
              className="w-full px-3 py-2 mb-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              value={user?.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>

          {/* Display Total Cost */}
          <div className="mb-4">
            <h2 className="text-gray-700 text-lg font-semibold flex justify-between items-center">
              Total Cost:
              <span className="text-2xl">
                ${selectedSlot ? selectedSlot.length * pricePerSlot : 0}
              </span>
            </h2>
          </div>

          {/* booking button */}
          <button
            onClick={handleConfirmBooking}
            disabled={!selectedDate || selectedSlot.length === 0}
            className={`${
              !selectedDate || selectedSlot.length === 0
                ? "hidden"
                : "btn btn-primary text-white px-8 py-4 w-full"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
