export default function CreateRoom() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <form className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Add New Room</h2>
        <div className="flex md:flex-row flex-col justify-between md:gap-4">
          {/* Room Name */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Room Name
              </span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered border-gray-400 focus:outline-none  w-full"
              placeholder="Enter room name"
            />
          </div>

          {/* Room Number */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Room No.
              </span>
            </label>
            <input
              type="number"
              name="roomNo"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter room number"
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between md:gap-4">
          {/* Floor Number */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Floor No.
              </span>
            </label>
            <input
              type="number"
              name="floorNo"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter floor number"
            />
          </div>
          {/* Capacity */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Capacity
              </span>
            </label>
            <input
              type="number"
              name="capacity"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter capacity"
            />
          </div>
          {/* Price Per Slot */}
          <div className="form-control md:mb-4 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Price Per Slot
              </span>
            </label>
            <input
              type="number"
              name="pricePerSlot"
              className="input input-bordered border-gray-400 focus:outline-none w-full"
              placeholder="Enter price per slot"
            />
          </div>
        </div>
        <div className="flex flex-row justify-between md:gap-4">
          {/* Amenities */}
          <div className="form-control mb-6 w-full">
            <label className="label">
              <span className="label-text text-lg font-medium text-gray-600">
                Amenities
              </span>
            </label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  value="Whiteboard"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Whiteboard</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  value="Projector"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Projector</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  value="WiFi"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">WiFi</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  value="AC"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">Air Conditioning</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="amenities"
                  value="TV"
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">TV</span>
              </label>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div className="">
          <button type="submit" className="btn btn-primary text-white">
            Add Room
          </button>
        </div>
      </form>
    </div>
  );
}
