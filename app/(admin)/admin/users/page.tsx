"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Edit, Trash2, Plus } from "lucide-react";
import DashboardLayout from "../../admin/components/dashboardlayout";

interface AdminUser {
  _id?: string;
  name: string;
  email: string;
  role: "Admin" | "Staff" | "Member";
  password?: string;
}

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<AdminUser | null>(null);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  // ✅ Fetch users
  const fetchUsers = async () => {
    if (!token) return;
    try {
      setLoading(true);
      const res = await fetch("/api/admin/users", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch users");
      const data = await res.json();
      setUsers(data);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const openModal = (user?: AdminUser) => {
    setCurrentUser(user || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  // ✅ Save user
  const handleSave = async (user: AdminUser & { password?: string }) => {
    if (!token) return alert("Unauthorized");
    try {
      const method = user._id ? "PUT" : "POST";
      const url = user._id
        ? `/api/admin/users/${user._id}`
        : `/api/admin/users`;
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Failed to save");
      }
      await fetchUsers();
      closeModal();
    } catch (err: any) {
      alert(err.message || "Something went wrong");
    }
  };

  // ✅ Delete user
  const handleDelete = async (_id?: string) => {
    if (!token || !_id) return;
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`/api/admin/users/${_id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete");
      await fetchUsers();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-between items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-[#9bce1c]">Users</h2>
            <p className="text-gray-600 mt-1">
              Manage platform admins and staff.
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="flex items-center gap-2 px-4 py-2 bg-[#A7CE44] text-white rounded-lg hover:bg-[#9bce1c] transition shadow-md"
          >
            <Plus size={16} /> Add User
          </button>
        </motion.div>

        {/* Users Table */}
        <div className="overflow-x-auto rounded-xl shadow-md bg-white">
          {loading ? (
            <div className="p-6 text-center text-gray-500">
              Loading users...
            </div>
          ) : users.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No users found.</div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-lime-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#9bce1c]">
                    #
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#9bce1c]">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#9bce1c]">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#9bce1c]">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-[#9bce1c]">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user, i) => (
                  <tr key={user._id} className="hover:bg-lime-50 transition">
                    <td className="px-6 py-4">{i + 1}</td>
                    <td className="px-6 py-4 font-medium">{user.name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <button
                        onClick={() => openModal(user)}
                        className="flex items-center gap-1 px-3 py-1 bg-[#A7CE44] text-white rounded hover:bg-[#9bce1c] transition text-sm"
                      >
                        <Edit size={14} /> Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                      >
                        <Trash2 size={14} /> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
            >
              <h3 className="text-xl font-bold text-[#9bce1c] mb-4">
                {currentUser ? "Edit User" : "Add User"}
              </h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const data = Object.fromEntries(new FormData(form)) as any;
                  handleSave({ ...currentUser, ...data });
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  defaultValue={currentUser?.name || ""}
                  placeholder="Full Name"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]"
                />
                <input
                  type="email"
                  name="email"
                  defaultValue={currentUser?.email || ""}
                  placeholder="Email"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]"
                />
                {!currentUser && (
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]"
                  />
                )}
                <select
                  name="role"
                  defaultValue={currentUser?.role || "Staff"}
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]"
                >
                  <option value="Admin">Admin</option>
                  <option value="Staff">Staff</option>
                  <option value="Member">Member</option>
                </select>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#A7CE44] text-white rounded-lg hover:bg-[#9bce1c] transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
