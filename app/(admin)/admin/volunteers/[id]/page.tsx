// pages/admin/volunteers/[id].tsx
"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboardlayout";

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  type: "children" | "elderly" | "community";
  message: string;
  createdAt: string;
}

export default function ViewVolunteerPage() {
  const { id } = useParams();
  const router = useRouter();

  const [volunteer, setVolunteer] = useState<Volunteer | null>(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch all volunteers and filter client-side
  const fetchVolunteer = async () => {
    try {
      const res = await fetch("/api/volunteers"); // fetch all
      if (!res.ok) throw new Error("Failed to fetch volunteers");
      const data: Volunteer[] = await res.json();
      const found = data.find((v) => v._id === id);
      setVolunteer(found || null);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch volunteer");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVolunteer();
  }, [id]);

  const handleSave = async (updated: Partial<Volunteer>) => {
    if (!volunteer) return;
    try {
      const res = await fetch(`/api/volunteers/${volunteer._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (!res.ok) throw new Error("Failed to update volunteer");
      fetchVolunteer();
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update volunteer");
    }
  };

  const handleDelete = async () => {
    if (!volunteer) return;
    if (!confirm("Are you sure you want to delete this volunteer?")) return;

    try {
      const res = await fetch(`/api/volunteers/${volunteer._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete volunteer");
      router.push("/admin/volunteers");
    } catch (err) {
      console.error(err);
      alert("Failed to delete volunteer");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-gray-600">
          Loading volunteer...
        </div>
      </DashboardLayout>
    );
  }

  if (!volunteer) {
    return (
      <DashboardLayout>
        <div className="max-w-5xl mx-auto p-6">
          <p className="text-red-600">Volunteer not found.</p>
          <button
            onClick={() => router.back()}
            className="mt-4 text-green-700 hover:underline flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Back
          </button>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-green-700 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Volunteers
        </button>

        {/* Volunteer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-2xl shadow p-6"
        >
          <h1 className="text-2xl font-bold text-green-700 mb-2">
            {volunteer.name}
          </h1>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Email:</span> {volunteer.email}
          </p>
          {volunteer.phone && (
            <p className="text-gray-700 mb-1">
              <span className="font-semibold">Phone:</span> {volunteer.phone}
            </p>
          )}
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Type:</span> {volunteer.type}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Message:</span> {volunteer.message}
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Submitted on: {new Date(volunteer.createdAt).toLocaleString()}
          </p>
        </motion.div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => setIsEditing(true)}
            className="px-5 py-2 bg-green-600 hover:bg-green-700 text-white rounded-xl transition shadow"
          >
            Edit Volunteer
          </button>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition shadow"
          >
            Delete Volunteer
          </button>
        </div>

        {/* Edit Modal */}
        <AnimatePresence>
          {isEditing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
              >
                <h3 className="text-xl font-bold text-green-700 mb-4">
                  Edit Volunteer
                </h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    handleSave({
                      name: (form.name as any).value,
                      email: (form.email as any).value,
                      phone: (form.phone as any).value,
                      type: (form.type as any).value,
                      message: (form.message as any).value,
                    });
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    name="name"
                    defaultValue={volunteer.name}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    defaultValue={volunteer.email}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    defaultValue={volunteer.phone || ""}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                  <select
                    name="type"
                    defaultValue={volunteer.type}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                  >
                    <option value="children">Children Support</option>
                    <option value="elderly">Elderly Care</option>
                    <option value="community">Community Projects</option>
                  </select>
                  <textarea
                    name="message"
                    defaultValue={volunteer.message}
                    rows={3}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                  />
                  <div className="flex justify-end gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
