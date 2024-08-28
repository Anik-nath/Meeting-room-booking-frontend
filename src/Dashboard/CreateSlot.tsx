export default function CreateSlot() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <div className="bg-gray-100 p-4 rounded-xl">
        <form className="bg-white p-8 rounded-lg shadow-lg max-w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Add New Slot</h2>

          <div className="flex md:flex-row flex-col justify-between md:gap-4">
            {/* Room Name */}
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Room
                </span>
              </label>
              <input
                type="text"
                name="room"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
                placeholder="Enter room name or number"
              />
            </div>

            {/* Date */}
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Date
                </span>
              </label>
              <input
                type="date"
                name="date"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>

          <div className="flex md:flex-row flex-col justify-between md:gap-4">
            {/* Start Time */}
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  Start Time
                </span>
              </label>
              <input
                type="time"
                name="startTime"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>

            {/* End Time */}
            <div className="form-control md:mb-4 w-full">
              <label className="label">
                <span className="label-text text-lg font-medium text-gray-600">
                  End Time
                </span>
              </label>
              <input
                type="time"
                name="endTime"
                className="input input-bordered border-gray-400 focus:outline-none w-full"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="">
            <button type="submit" className="btn btn-primary text-white mt-6 md:mt-0">
              Add Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
