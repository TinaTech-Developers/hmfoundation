"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, Settings as SettingsIcon, Upload } from "lucide-react";
import DashboardLayout from "../components/dashboardlayout";

export default function AdminSettingsPage() {
  const [formData, setFormData] = useState({
    orgName: "Hiraya Manawari Foundation",
    orgEmail: "info@hirayamanawarifoundation.com",
    orgLogo: "",
    description:
      "Empowering communities through education, innovation, and humanitarian aid.",
    adminName: "",
    adminEmail: "",
    password: "",
    adminId: "", // store admin ID for PUT request
  });

  const [loading, setLoading] = useState(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Fetch logged-in admin info
  const fetchAdmin = async () => {
    try {
      const token = localStorage.getItem("token"); // or however your JWT is stored
      const res = await fetch("/api/admin/users/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch admin");

      const admin = await res.json();
      setFormData((prev) => ({
        ...prev,
        adminName: admin.name,
        adminEmail: admin.email,
        adminId: admin._id,
      }));
    } catch (err) {
      console.error(err);
      alert("Error fetching admin data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`/api/admin/users/${formData.adminId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.adminName,
          email: formData.adminEmail,
          password: formData.password || undefined, // only send if not empty
        }),
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to update admin");
      }

      alert("Settings saved successfully!");
      setFormData((prev) => ({ ...prev, password: "" })); // clear password
    } catch (err: any) {
      console.error(err);
      alert("Error saving settings: " + err.message);
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="py-40 text-center text-gray-600">
          Loading admin settings...
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold text-green-700 flex items-center gap-2">
              <SettingsIcon className="text-green-600" size={28} />
              Settings
            </h2>
            <p className="text-gray-600 mt-1">
              Manage organization and admin settings.
            </p>
          </div>
        </motion.div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 space-y-10"
        >
          {/* Organization Settings */}
          {/* ...keep your existing org fields here... */}

          {/* Admin Settings */}
          <section>
            <h3 className="text-xl font-semibold text-green-700 mb-4 border-b pb-2">
              Admin Account
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Admin Name
                </label>
                <input
                  type="text"
                  name="adminName"
                  value={formData.adminName}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Admin Email
                </label>
                <input
                  type="email"
                  name="adminEmail"
                  value={formData.adminEmail}
                  onChange={handleChange}
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  New Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter new password"
                  className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
              </div>
            </div>
          </section>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t">
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </DashboardLayout>
  );
}
