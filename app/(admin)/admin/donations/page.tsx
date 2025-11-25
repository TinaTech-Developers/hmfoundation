"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DashboardLayout from "../components/dashboardlayout";
import { useRouter } from "next/navigation";

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

export default function AdminDonationsPage() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const router = useRouter();

  // Fetch donations from API
  const fetchDonations = async () => {
    try {
      const res = await fetch("/api/donations");
      if (!res.ok) throw new Error("Failed to fetch donations");
      const data: Donation[] = await res.json();
      setDonations(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchDonations();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this donation?")) return;
    try {
      const res = await fetch(`/api/donations/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete donation");
      setDonations(donations.filter((d) => d._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting donation");
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#A7CE44]-700"
        >
          Donations
        </motion.h2>
        <p className="text-gray-600">
          Manage and track all donations — both cash and items.
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            className="px-4 py-2 bg-[#A7CE44] text-white rounded-lg hover:bg-[#b4fc00] transition"
            onClick={() => router.push("/admin/donations/new")}
          >
            Add Donation
          </button>
        </div>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-lime-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Donor
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Amount / Item
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {donations.map((donation, index) => (
                <tr key={donation._id} className="hover:bg-lime-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{donation.name}</td>
                  <td className="px-6 py-4">{donation.type}</td>
                  <td className="px-6 py-4">
                    {donation.type === "cash"
                      ? `$${donation.amount}`
                      : donation.items}
                  </td>
                  <td className="px-6 py-4">
                    {new Date(donation.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button
                      onClick={() =>
                        router.push(`/admin/donations/${donation._id}`)
                      }
                      className="px-2 py-1 bg-[#A7CE44] text-white rounded hover:bg-[#9bce1c] transition text-sm"
                    >
                      View / Edit
                    </button>
                    <button
                      onClick={() => handleDelete(donation._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
