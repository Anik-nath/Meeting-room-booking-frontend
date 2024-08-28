export default function BookingList() {
  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl">Booking List</h1>
      {/* booking list */}
      <div>
        <div className="overflow-x-auto bg-white mt-8 rounded-xl">
          <table className="table">
            <thead>
              <tr className="border-primary">
                <th>Room ID</th>
                <th>Room Name</th>
                <th>Meeting Date</th>
                <th>Meeting Time</th>
                <th>Booking Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-gray-300 text-gray-700">
                <td>#Wt2423</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Room name</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <th>
                  <div className="badge badge-primary badge-outline font-normal">
                    Confirm
                  </div>
                </th>
              </tr>
              <tr className="border-gray-300 text-gray-700">
                <td>#Wt2423</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold">Room name</div>
                    </div>
                  </div>
                </td>
                <td>Zemlak, Daniel and Leannon</td>
                <td>Purple</td>
                <th>
                  <div className="badge badge-error badge-outline font-normal">
                    Unconfirm
                  </div>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
