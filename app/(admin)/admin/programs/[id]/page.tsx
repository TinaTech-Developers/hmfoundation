"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import DashboardLayout from "../../components/dashboardlayout";

interface Program {
  _id: string;
  title: string;
  content: string;
  description: string;
  date: string;
  status: "Active" | "Inactive";
  image: string;
  link?: string;
}

export default function ViewProgramPage() {
  const { id } = useParams();
  const router = useRouter();

  const [program, setProgram] = useState<Program | null>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const statusColors: Record<string, string> = {
    Active: "bg-[#A7CE44]-100 text-[#A7CE44]-800",
    Inactive: "bg-yellow-100 text-yellow-800",
  };

  // Fetch program from backend
  const fetchProgram = async () => {
    try {
      const res = await fetch("/api/admin/programs");
      if (!res.ok) throw new Error("Failed to fetch programs");
      const programs: Program[] = await res.json();
      const found = programs.find((p) => p._id === id);
      setProgram(found || null);
    } catch (err) {
      console.error(err);
      alert("Error fetching program");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgram();
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = async (updatedProgram: Partial<Program>) => {
    if (!program) return;
    try {
      const res = await fetch(`/api/admin/programs/${program._id}`, {
        method: "PATCH", // ✅ match backend
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProgram),
      });

      if (!res.ok) throw new Error("Failed to update program");

      const data: Program = await res.json();
      setProgram(data);
      closeModal();
      alert("Program updated successfully");
    } catch (err: any) {
      console.error(err);
      alert("Error updating program: " + err.message);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-gray-600">
          Loading program...
        </div>
      </DashboardLayout>
    );
  }

  if (!program) {
    return (
      <DashboardLayout>
        <div className="max-w-5xl mx-auto p-6">
          <p className="text-red-600">Program not found.</p>
          <button
            onClick={() => router.back()}
            className="mt-4 text-[#A7CE44]-700 hover:underline"
          >
            <ArrowLeft className="inline w-5 h-5 mr-1" /> Back
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
          className="flex items-center gap-2 text-[#A7CE44]-700 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Programs
        </button>

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-linear-to-r from-[#A7CE44]-600 to-[#A7CE44]-500 text-white rounded-2xl p-6 shadow-lg flex justify-between items-center"
        >
          <div>
            <h1 className="text-2xl font-bold">{program.title}</h1>
            <p className="mt-1 text-sm opacity-80">
              {new Date(program.date).toLocaleDateString()}
            </p>
          </div>
          <span
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              statusColors[program.status]
            }`}
          >
            {program.status}
          </span>
        </motion.div>

        {/* Program Image */}
        {program.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full h-90 rounded-xl overflow-hidden object-cover shadow-md"
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        )}

        {/* Program Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="text-gray-500 font-semibold">Description</h3>
          <p className="mt-1 text-gray-800">{program.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="text-gray-500 font-semibold">Content</h3>
          <p className="mt-1 text-gray-800">{program.content}</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex gap-3"
        >
          <button
            onClick={openModal}
            className="px-5 py-2 bg-[#A7CE44]-600 hover:bg-[#A7CE44]-700 text-white rounded-xl transition shadow"
          >
            Edit Program
          </button>
        </motion.div>

        {/* Edit Modal */}
        <AnimatePresence>
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
              >
                <h3 className="text-xl font-bold text-[#A7CE44]-700 mb-4">
                  Edit Program
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as any;
                    handleSave({
                      title: form.title.value,
                      description: form.description.value,
                      date: form.date.value,
                      status: form.status.value,
                      image: form.image.value,
                    });
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="text"
                    name="title"
                    defaultValue={program.title}
                    placeholder="Program Title"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />

                  <textarea
                    name="content"
                    defaultValue={program.content}
                    placeholder="Program Content"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />

                  <textarea
                    name="description"
                    defaultValue={program.description}
                    placeholder="Program Description"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="date"
                    name="date"
                    defaultValue={
                      new Date(program.date).toISOString().split("T")[0]
                    }
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="text"
                    name="image"
                    defaultValue={program.image}
                    placeholder="Image URL"
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <select
                    name="status"
                    defaultValue={program.status}
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
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
