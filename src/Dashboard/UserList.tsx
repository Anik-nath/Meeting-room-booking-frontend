/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useGetAllUsersQuery, useUserRoleMutation } from "../Redux/Api/authApi";
import { toast } from "react-toastify";

export default function UserList() {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const { data: users, refetch } = useGetAllUsersQuery();
  const [roleChange] = useUserRoleMutation();

  const handleRoleChange = async () => {
    if (!selectedUserId) return;
    const user = users?.data?.find((user) => user._id === selectedUserId);
    const newRole = user?.role === "admin" ? "user" : "admin";
    try {
      await roleChange({ id: selectedUserId, role: newRole }).unwrap();
      toast.success(`Role changed to ${newRole} successfully!`);
      refetch();
      setSelectedUserId(null);
    } catch (error) {
      toast.error(`Failed to change role to ${newRole}.`);
    }
  };

  const openModal = (id: string) => {
    setSelectedUserId(id);
  };
  const closeModal = () => {
    setSelectedUserId(null);
  };

  return (
    <div className="bg-gray-100 p-4 rounded-xl">
      <h1 className="text-2xl">Booking List</h1>
      <div>
        <div className="overflow-x-auto bg-white mt-8 rounded-xl">
          <table className="table">
            <thead>
              <tr className="border-primary">
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Address</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users?.data?.map((user) => (
                <tr key={user._id} className="border-gray-300 text-gray-700">
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.role}</td>
                  <td>{user.address}</td>
                  <td className="flex flex-col items-center justify-center gap-2">
                    <button
                      className={`${
                        user.role === "user"
                          ? "border-error text-error"
                          : "border-primary text-primary"
                      } border btn-sm rounded`}
                      onClick={() => openModal(user._id)}
                    >
                      <span>
                        {user.role === "admin" ? "Make User" : "Make Admin"}
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUserId && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-1/3">
            <h3 className="text-lg font-bold">Confirm Role Change</h3>
            <p className="py-4">
              Are you sure you want to change the role for this user?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                onClick={closeModal}
              >
                No
              </button>
              <button
                className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
                onClick={handleRoleChange}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
