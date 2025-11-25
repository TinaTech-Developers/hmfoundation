// app/volunteer/page.tsx
"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import PageLayout from "../components/pagelayout";

export default function VolunteerPage() {
  const [volunteerType, setVolunteerType] = useState<
    "children" | "elderly" | "community"
  >("children");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: volunteerType }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit request");

      setModalMessage("Thank you for volunteering! We will contact you soon.");
      setModalOpen(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err: any) {
      setModalMessage(err.message);
      setModalOpen(true);
    }
  };

  return (
    <PageLayout
      title=" Volunteer"
      description="Make a difference by volunteering with the Hiraya Manawari Foundation. Help children, support the elderly, or contribute to community initiatives."
      image="/close-up-women-holding-each-other.jpg"
      ctaPrimary={{ label: "Volunteer Now", href: "#volunteer-section" }}
    >
      <div className="bg-gray-50 min-h-screen text-gray-900">
        <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Volunteer With Us
          </h1>
          <p className="text-gray-700 mb-8">
            Join the Hiraya Manawari Foundation and help create a meaningful
            change.
          </p>

          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {["children", "elderly", "community"].map((type) => (
              <button
                key={type}
                onClick={() => setVolunteerType(type as any)}
                className={`px-6 py-3 rounded-full font-semibold transition ${
                  volunteerType === type
                    ? "bg-[#a2cc39] text-white"
                    : "bg-gray-200 text-gray-900 hover:bg-[#A7CE44] hover:text-white"
                }`}
              >
                {type === "children"
                  ? "Children Support"
                  : type === "elderly"
                  ? "Elderly Care"
                  : "Community Projects"}
              </button>
            ))}
          </div>

          <form
            id="volunteer-section"
            onSubmit={handleSubmit}
            className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
              Volunteer Information
            </h3>

            {["name", "email", "phone"].map((field) => (
              <div className="mb-4" key={field}>
                <label className="block text-gray-700 mb-1">
                  {field === "name"
                    ? "Full Name"
                    : field === "email"
                    ? "Email"
                    : "Phone Number"}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  required={field !== "phone" ? true : false}
                  placeholder={
                    field === "name"
                      ? "Full Name"
                      : field === "email"
                      ? "you@example.com"
                      : "+263 77 123 4567"
                  }
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7CE44]"
                />
              </div>
            ))}

            <div className="mb-6">
              <label className="block text-gray-700 mb-1">
                How Would You Like to Help?
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Describe how you can contribute, your skills, availability, etc."
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#A7CE44]-600"
                rows={4}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#A7CE44] text-white font-semibold rounded-full hover:bg-[#a2cc39] transition"
            >
              Submit Volunteer Request
            </button>
          </form>
        </section>

        <section className="py-20 bg-gray-100 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Your Time Makes a Difference
          </motion.h3>
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Whether you support children, care for the elderly, or help with
            community projects, your involvement helps us empower individuals
            and strengthen communities.
          </motion.p> */}
        </section>

        {/* Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-xl p-8 max-w-sm mx-auto text-center shadow-lg"
            >
              <p className="text-gray-900 mb-4">{modalMessage}</p>
              <button
                onClick={() => setModalOpen(false)}
                className="px-6 py-2 bg-[#A7CE44] text-white rounded-full hover:bg-[#9bce1c] transition"
              >
                Close
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
