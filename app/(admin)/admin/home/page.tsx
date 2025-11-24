"use client";

import React, { useEffect, useState } from "react";
import { FiUsers, FiGift, FiActivity, FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import DashboardLayout from "../components/dashboardlayout";

interface Stat {
  id: number;
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

interface Donation {
  _id: string;
  name: string;
  type: string;
  amount?: number;
  items?: string;
  createdAt: string;
}

export default function DashboardHome() {
  const [stats, setStats] = useState<Stat[]>([
    {
      id: 1,
      label: "Total Donations",
      value: 0,
      icon: <FiGift className="text-lime-600" />,
    },
    {
      id: 2,
      label: "Items Donated",
      value: 0,
      icon: <FiActivity className="text-lime-600" />,
    },
    {
      id: 3,
      label: "Active Programs",
      value: 0,
      icon: <FiCheckCircle className="text-lime-600" />,
    },
    {
      id: 4,
      label: "Beneficiaries",
      value: 0,
      icon: <FiUsers className="text-lime-600" />,
    },
  ]);

  const [recentDonations, setRecentDonations] = useState<Donation[]>([]);

  useEffect(() => {
    // Fetch stats
    const fetchStats = async () => {
      try {
        const resPrograms = await fetch("/api/admin/programs");
        const programs = await resPrograms.json();

        const activePrograms = programs.filter(
          (p: any) => p.status === "Active"
        ).length;

        const resDonations = await fetch("/api/donations");
        const donations = await resDonations.json();

        const totalDonations = donations
          .filter((d: any) => d.type.toLowerCase() === "cash")
          .reduce((acc: number, curr: any) => acc + (curr.amount || 0), 0);

        const itemsDonated = donations
          .filter((d: any) => d.type.toLowerCase() === "items")
          .reduce(
            (acc: number, curr: any) =>
              acc + (curr.items?.split(",").length || 0),
            0
          );

        const beneficiaries = programs.reduce(
          (acc: number, curr: any) => acc + (curr.beneficiaries || 0),
          0
        );

        setStats([
          {
            id: 1,
            label: "Total Donations",
            value: `$${totalDonations}`,
            icon: <FiGift className="text-lime-600" />,
          },
          {
            id: 2,
            label: "Items Donated",
            value: itemsDonated,
            icon: <FiActivity className="text-lime-600" />,
          },
          {
            id: 3,
            label: "Active Programs",
            value: activePrograms,
            icon: <FiCheckCircle className="text-lime-600" />,
          },
          {
            id: 4,
            label: "Beneficiaries",
            value: beneficiaries,
            icon: <FiUsers className="text-lime-600" />,
          },
        ]);

        // Sort recent donations by date descending and take latest 5
        const sortedDonations = donations.sort(
          (a: any, b: any) =>
            new Date(b.date).getTime() - new Date(a.date).getTime()
        );
        setRecentDonations(sortedDonations.slice(0, 5));
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6 text-gray-900">Dashboard</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="p-3 bg-lime-100 rounded-full">{stat.icon}</div>
              <span className="text-gray-700 font-medium">{stat.label}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Donations Table */}
      <div className="bg-white rounded-2xl shadow p-6 mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Recent Donations
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="py-2">Donor</th>
                <th className="py-2">Type</th>
                <th className="py-2">Amount / Items</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {recentDonations.map((d) => (
                <tr key={d._id} className="border-b border-gray-100">
                  <td className="py-2">{d.name}</td>
                  <td className="py-2">{d.type}</td>

                  <td className="py-2">
                    {d.type === "cash"
                      ? `$${Number(d.amount || 0).toLocaleString()}`
                      : d.items}
                  </td>

                  <td className="py-2">
                    {new Date(d.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-lime-600 text-white p-6 rounded-2xl cursor-pointer hover:bg-lime-700 transition">
          Add Donation
        </div>
        <div className="bg-lime-600 text-white p-6 rounded-2xl cursor-pointer hover:bg-lime-700 transition">
          Add Program
        </div>
        <div className="bg-lime-600 text-white p-6 rounded-2xl cursor-pointer hover:bg-lime-700 transition">
          Export Data
        </div>
      </div>
    </DashboardLayout>
  );
}
