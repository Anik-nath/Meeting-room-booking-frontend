/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoomDetails() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([
    { time: "10:00 AM", isBooked: false },
    { time: "11:00 AM", isBooked: false },
    { time: "12:00 PM", isBooked: true },
  ]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const pricePerSlot = 500;

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSlotSelection = (slot) => {
    if (!slot.isBooked) {
      setSelectedSlot(slot.time);
    }
  };

  const navigate = useNavigate();

  const handleConfirmBooking = () => {
    const bookingSummary = {
      date: selectedDate,
      time: selectedSlot,
      user,
      totalCost: pricePerSlot,
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
            Room Name - NexuxMeet A1 Collabe Room
          </h2>
          <p id="room-id" className="text-white text-md">
            Room No - NexuxMeet A1
          </p>
          {/* room details */}
          <div id="room-detils" className="w-full flex flex-row gap-4 mt-6">
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>10</span>
              <p>Floor No</p>
            </div>
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>50</span>
              <p>Capacity</p>
            </div>
            <div className="bg-white font-semibold rounded-md h-24 w-28 flex flex-col justify-center items-center gap-2">
              <span>100</span>
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
            <div className="bg-white p-2 rounded-md py-4">High-Speed Wi-Fi</div>
            <div className="bg-white p-2 rounded-md py-4">
              Projector and Screen
            </div>
            <div className="bg-white p-2 rounded-md py-4">
              Whiteboard and Markers
            </div>
            <div className="bg-white p-2 rounded-md py-4">
              Conference Call Facilities
            </div>
            <div className="bg-white p-2 rounded-md py-4">Air Conditioning</div>
            <div className="bg-white p-2 rounded-md py-4">
              Complimentary Water and Coffee
            </div>
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
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Available Time Slots
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableSlots.map((slot, index) => (
                <button
                  key={index}
                  onClick={() => handleSlotSelection(slot)}
                  className={`px-3 py-2 rounded-lg ${
                    slot.isBooked
                      ? "bg-red-100 cursor-not-allowed"
                      : selectedSlot === slot.time
                      ? "bg-primary text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  disabled={slot.isBooked}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
          {/* user information */}
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Your Information</label>
            <input
              type="text"
              value={user.name}
              readOnly
              className="w-full px-3 py-2 mb-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
            <input
              type="email"
              value={user.email}
              readOnly
              className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>
          {/* Display Total Cost */}
          <div className="mb-4">
            <h2 className="text-gray-700 text-lg font-semibold flex justify-between items-center">
              Total Cost:
              <span className="text-2xl">
                ${selectedSlot ? pricePerSlot : 0}
              </span>
            </h2>
          </div>
          {/* booking button */}
          <button
            onClick={handleConfirmBooking}
            disabled={!selectedDate || !selectedSlot}
            className={`${
              !selectedDate || !selectedSlot
                ? "hidden"
                : "btn btn-primary text-white "
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
