"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const partners = [
  { id: 1, name: "UNICEF", logoUrl: "/images/partners/unicef.png" },
  { id: 2, name: "World Bank", logoUrl: "/images/partners/worldbank.png" },
  { id: 3, name: "Local NGO", logoUrl: "/images/partners/localngo.png" },
];

export default function ProfessionalFooter() {
  return (
    <footer className="relative bg-gray-900 text-gray-200 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-lime-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-lime-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Hiraya Manawari Foundation
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering communities, educating children, providing clean water,
              and supporting women to build a brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-lime-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-lime-500 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-lime-500 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-lime-500 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                Email:{" "}
                <a
                  href="mailto:info@hirayamanawarifoundation.com"
                  className="hover:text-lime-500 transition"
                >
                  info@hirayamanawarifoundation.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href="tel:+263123456789"
                  className="hover:text-lime-500 transition"
                >
                  +263 123 456 789
                </a>
              </li>
              <li>Address: 123 NGO Street, Harare, Zimbabwe</li>
            </ul>
          </div>

          {/* Newsletter Signup & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Stay Updated
            </h4>
            <form className="flex flex-col sm:flex-row gap-3 mb-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-full text-gray-900 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-lime-600 text-white rounded-full font-semibold hover:bg-lime-700 transition"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-lime-500 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6">
          {partners.map((partner) => (
            <img
              key={partner.id}
              src={partner.logoUrl}
              alt={partner.name}
              className="h-10 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Hiraya Manawari Foundation. All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
