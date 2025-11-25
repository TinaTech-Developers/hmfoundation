"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DashboardLayout from "../components/dashboardlayout";

interface Program {
  _id: string;
  title: string;
  content: string;
  description: string;
  date: string;
  status: "Active" | "Inactive";
  image: string;
  link: string;
}

export default function AdminProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProgram, setNewProgram] = useState<Partial<Program>>({
    status: "Active",
  });

  // Fetch programs from backend
  const fetchPrograms = async () => {
    try {
      const res = await fetch("/api/admin/programs");
      const data: Program[] = await res.json();
      setPrograms(data);
    } catch (err) {
      console.error(err);
      alert("Failed to fetch programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  const handleAddProgram = async () => {
    if (
      !newProgram.title ||
      !newProgram.content ||
      !newProgram.description ||
      !newProgram.date ||
      !newProgram.image
    ) {
      alert("Please fill in all required fields");
      return;
    }

    try {
      const res = await fetch("/api/admin/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...newProgram,
          date: new Date(newProgram.date).toISOString(), // <-- convert date
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to add program");
      }

      const addedProgram = await res.json();
      setPrograms([...programs, addedProgram]);
      setNewProgram({ status: "Active" });
      setModalOpen(false);
    } catch (err: any) {
      console.error(err);
      alert("Error adding program: " + err.message);
    }
  };

  // Delete program (frontend only; can be extended to backend)
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this program?")) return;

    try {
      // Optional: Add backend delete API call here
      setPrograms(programs.filter((p) => p._id !== id));
    } catch (err) {
      console.error(err);
      alert("Error deleting program");
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-gray-600">
          Loading programs...
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
          className="text-3xl font-bold text-[#9bce1c]"
        >
          Programs
        </motion.h2>
        <p className="text-gray-600">Manage all programs and initiatives.</p>

        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-[#A7CE44] text-white rounded hover:bg-[#9bce1c] transition w-40"
        >
          + Add Program
        </button>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-lime-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-[#9bce1c]">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {programs.map((program, index) => (
                <tr
                  key={program._id}
                  className="hover:bg-[#A7CE44]-50 transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4">{program.title}</td>
                  <td className="px-6 py-4">
                    {new Date(program.date).toLocaleDateString()}
                  </td>
                  <td
                    className={`px-6 py-4 font-semibold ${
                      program.status === "Active"
                        ? "text-[#A7CE44]"
                        : "text-yellow-600"
                    }`}
                  >
                    {program.status}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      href={`/admin/programs/${program._id}`}
                      className="px-2 py-1 bg-[#A7CE44] text-white rounded hover:bg-[#9bce1c] transition text-sm"
                    >
                      View / Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(program._id)}
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

      {/* ---------- Add Program Modal ---------- */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 bg-opacity-50 flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl w-full max-w-md p-6 relative shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h3 className="text-xl font-bold text-[#9bce1c] mb-4">
                Add New Program
              </h3>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Title"
                  className="border px-3 py-2 rounded"
                  value={newProgram.title || ""}
                  onChange={(e) =>
                    setNewProgram({ ...newProgram, title: e.target.value })
                  }
                />

                <textarea
                  placeholder="Description"
                  className="border px-3 py-2 rounded"
                  value={newProgram.description || ""}
                  onChange={(e) =>
                    setNewProgram({
                      ...newProgram,
                      description: e.target.value,
                    })
                  }
                />
                <textarea
                  placeholder="Content"
                  className="border px-3 py-2 rounded"
                  value={newProgram.content || ""}
                  onChange={(e) =>
                    setNewProgram({
                      ...newProgram,
                      content: e.target.value,
                    })
                  }
                />
                <input
                  type="date"
                  className="border px-3 py-2 rounded"
                  value={newProgram.date || ""}
                  onChange={(e) =>
                    setNewProgram({ ...newProgram, date: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Image URL"
                  className="border px-3 py-2 rounded"
                  value={newProgram.image || ""}
                  onChange={(e) =>
                    setNewProgram({ ...newProgram, image: e.target.value })
                  }
                />
                {/* <input
                  type="text"
                  placeholder="Link"
                  className="border px-3 py-2 rounded"
                  value={newProgram.link || ""}
                  onChange={(e) =>
                    setNewProgram({ ...newProgram, link: e.target.value })
                  }
                /> */}
                <select
                  className="border px-3 py-2 rounded"
                  value={newProgram.status || "Active"}
                  onChange={(e) =>
                    setNewProgram({
                      ...newProgram,
                      status: e.target.value as "Active" | "Inactive",
                    })
                  }
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleAddProgram}
                    className="px-4 py-2 bg-[#9bce1c] text-white rounded hover:bg-[#b7ff00] transition"
                  >
                    Add Program
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
