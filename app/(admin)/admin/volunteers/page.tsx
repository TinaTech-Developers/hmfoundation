"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import DashboardLayout from "../components/dashboardlayout";

interface Volunteer {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  type: "children" | "elderly" | "community";
  message: string;
  createdAt: string;
}

export default function AdminVolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchVolunteers = async () => {
    try {
      const res = await fetch("/api/volunteers");
      if (!res.ok) throw new Error("Failed to fetch volunteers");
      const data: Volunteer[] = await res.json();
      setVolunteers(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch volunteers");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteVolunteer = async (id: string) => {
    if (!confirm("Are you sure you want to delete this volunteer?")) return;

    try {
      const res = await fetch(`/api/volunteers/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete volunteer");

      setVolunteers(volunteers.filter((v) => v._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting volunteer");
    }
  };

  useEffect(() => {
    fetchVolunteers();
  }, []);

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-gray-600">
          Loading volunteers...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-700"
        >
          Volunteer Requests
        </motion.h2>
        <p className="text-gray-600">Manage all volunteer submissions.</p>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {volunteers.map((v, index) => (
                <tr key={v._id} className="hover:bg-green-50 transition">
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{v.name}</td>
                  <td className="px-6 py-4">{v.email}</td>
                  <td className="px-6 py-4">{v.phone || "-"}</td>
                  <td className="px-6 py-4 capitalize">{v.type}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      href={`/admin/volunteers/${v._id}`}
                      className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                    >
                      View / Edit
                    </Link>
                    <button
                      onClick={() => handleDeleteVolunteer(v._id)}
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
