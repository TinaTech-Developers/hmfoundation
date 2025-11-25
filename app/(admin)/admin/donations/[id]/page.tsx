"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../../components/dashboardlayout";
import { useEffect, useState } from "react";

interface Donation {
  _id: string;
  name: string;
  email: string;
  type: "cash" | "items";
  amount?: number;
  items?: string;
  details?: string;
  createdAt: string;
}

export default function ViewDonationPage() {
  const { id } = useParams();
  const router = useRouter();
  const [donation, setDonation] = useState<Donation | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editableDonation, setEditableDonation] = useState<Donation | null>(
    null
  );

  // Fetch donation by ID
  const fetchDonation = async () => {
    try {
      const res = await fetch(`/api/donations/${id}`);
      if (!res.ok) throw new Error("Donation not found");
      const data: Donation = await res.json();
      setDonation(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch donation");
    }
  };

  useEffect(() => {
    fetchDonation();
  }, [id]);

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editableDonation) return;
    const form = e.currentTarget;

    const updatedDonation: Partial<Donation> = {
      name: (form.name as any).value,
      email: (form.email as any).value,
      type: (form.type as any).value,
      amount:
        form.type.value === "cash"
          ? Number((form.amount as any).value)
          : undefined,
      items:
        form.type.value === "items" ? (form.items as any).value : undefined,
      details: (form.details as any).value,
    };

    try {
      const res = await fetch(`/api/donations/${editableDonation._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedDonation),
      });
      if (!res.ok) throw new Error("Failed to update donation");
      fetchDonation();
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Failed to update donation");
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this donation?")) return;
    try {
      const res = await fetch(`/api/donations/${donation!._id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete donation");
      router.push("/admin/donations");
    } catch (err) {
      console.error(err);
      alert("Failed to delete donation");
    }
  };

  if (!donation) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-red-600">Donation not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-[#9bce1c] hover:underline"
        >
          <ArrowLeft className="inline w-5 h-5 mr-1" /> Back
        </button>
      </div>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#9bce1c] hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Donations
        </button>

        {/* Donation Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-linear-to-r from-[#9bce1c] to-[#b7ff00] text-white rounded-2xl p-6 shadow-lg flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold">
              {donation.type.toUpperCase()} Donation
            </h1>
            <p className="mt-1 text-sm opacity-80">{donation.name}</p>
          </div>
        </motion.div>

        {/* Donation Details */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h3 className="text-lg font-semibold text-[#A7CE44]-700 mb-2">
            Donation Details
          </h3>
          <div className="space-y-1 text-gray-700 ">
            <p>
              <span className="font-semibold">Type:</span> {donation.type}
            </p>
            <p>
              <span className="font-semibold">Donor Name:</span> {donation.name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {donation.email}
            </p>
            {donation.type === "cash" && (
              <p>
                <span className="font-semibold">Amount:</span> $
                {donation.amount?.toLocaleString()}
              </p>
            )}
            {donation.type === "items" && (
              <p>
                <span className="font-semibold">Items:</span> {donation.items}
              </p>
            )}
            {donation.details && (
              <p>
                <span className="font-semibold">Address:</span>{" "}
                {donation.details}
              </p>
            )}
            <p>
              <span className="font-semibold">Donated On:</span>{" "}
              {new Date(donation.createdAt).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={() => {
              setEditableDonation(donation);
              setIsEditing(true);
            }}
            className="px-5 py-2 bg-[#A7CE44] hover:bg-[#9bce1c] text-white rounded-xl transition shadow"
          >
            Edit Donation
          </button>
          <button
            onClick={handleDelete}
            className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl transition shadow"
          >
            Delete Donation
          </button>
        </div>

        {/* Edit Modal */}
        <AnimatePresence>
          {isEditing && editableDonation && (
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
                <h3 className="text-xl font-bold text-[#A7CE44]-700 mb-4">
                  Edit Donation
                </h3>
                <form onSubmit={handleSave} className="flex flex-col gap-4">
                  <input
                    type="text"
                    name="name"
                    defaultValue={editableDonation.name}
                    placeholder="Donor Name"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="email"
                    name="email"
                    defaultValue={editableDonation.email}
                    placeholder="Email"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <select
                    name="type"
                    defaultValue={editableDonation.type}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  >
                    <option value="cash">Cash</option>
                    <option value="items">Item</option>
                  </select>
                  {editableDonation.type === "cash" && (
                    <input
                      type="number"
                      name="amount"
                      defaultValue={editableDonation.amount}
                      placeholder="Amount ($)"
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                    />
                  )}
                  {editableDonation.type === "items" && (
                    <input
                      type="text"
                      name="items"
                      defaultValue={editableDonation.items}
                      placeholder="Item Description"
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                    />
                  )}
                  <input
                    type="text"
                    name="details"
                    defaultValue={editableDonation.details || ""}
                    placeholder="Additional Details"
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#A7CE44]-600 text-white rounded-lg hover:bg-[#A7CE44]-700 transition"
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
