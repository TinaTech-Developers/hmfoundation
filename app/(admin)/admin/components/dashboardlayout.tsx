"use client";

import React, { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter();

  const handleSignOut = () => {
    if (confirm("Are you sure you want to sign out?")) {
      localStorage.removeItem("adminToken");
      setTimeout(() => router.replace("/admin"), 50);
    }
  };

  const navItems = [
    { label: "Dashboard", href: "/admin/home" },
    { label: "Donations", href: "/admin/donations" },
    { label: "Programs", href: "/admin/programs" },
    { label: "Volunteers", href: "/admin/volunteers" },
    { label: "Users", href: "/admin/users" },
    { label: "Newsletters", href: "/admin/newsletters" },
    { label: "Settings", href: "/admin/settings" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 shadow-md bg-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-[#A7CE44]">Admin Panel</h1>
        <button
          onClick={handleSignOut}
          className="flex bg-red-700 p-2 text-white items-center gap-2 rounded-lg hover:bg-[#9bcc20] transition"
        >
          <LogOut size={18} /> Sign Out
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 bg-green-100 border-r border-gray-200 p-4 justify-between">
          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:bg-lime-200 transition font-medium text-[#A7CE44]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-8">{children}</main>
      </div>

      {/* Footer */}
      <footer className="bg-white shadow-inner mt-auto text-center py-3 text-sm text-gray-500">
        © {new Date().getFullYear()} Hiraya Manawari Foundation
      </footer>
    </div>
  );
}
