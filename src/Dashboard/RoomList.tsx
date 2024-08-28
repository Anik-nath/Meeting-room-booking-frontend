export default function RoomList() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl font-semibold mb-6">Room List</h1>
      {/* Room list */}
      <div className="overflow-x-auto bg-white mt-8 rounded-xl">
        <table className="table w-full">
          <thead>
            <tr className="border-primary">
              <th>Room Name</th>
              <th>Room No.</th>
              <th>Floor No.</th>
              <th>Capacity</th>
              <th>Price Per Slot</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Room Entry */}
            <tr className="border-gray-300 text-gray-700">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Room Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Room A</div>
                  </div>
                </div>
              </td>
              <td>#104</td>
              <td>2</td>
              <td>15</td>
              <td>$100</td>
              <td>
                <div className="flex gap-4">
                  <button className="btn text-white btn-primary btn-sm">
                    Update
                  </button>
                  <button className="btn  rounded-full text-white btn-error btn-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
            {/* Another Example Room Entry */}
            <tr className="border-gray-300 text-gray-700">
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Room Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">Room B</div>
                  </div>
                </div>
              </td>
              <td>#105</td>
              <td>3</td>
              <td>20</td>
              <td>$150</td>
              <td>
                <div className="flex gap-4">
                  <button className="btn text-white btn-primary btn-sm">
                    Update
                  </button>
                  <button className="btn  rounded-full text-white btn-error btn-sm">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
