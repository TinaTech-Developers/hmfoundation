"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { usePathname } from "next/navigation";

export default function FloatingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Get Involved", href: "/get-involved" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Floating Animated Gradient Background */}
      <motion.div
        className="fixed top-0 left-0 w-full h-24 z-30 rounded-b-3xl pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, rgba(40,167,69,0.2), rgba(168,224,99,0.2), rgba(40,167,69,0.2))",
          filter: "blur(30px)",
          opacity: scrolled ? 1 : 0.7,
        }}
        animate={{ backgroundPositionX: ["0%", "100%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Glass Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] md:w-4/5 z-40 backdrop-blur-xl bg-white border border-white/20 rounded-2xl shadow-xl transition-all  duration-500 ${
          scrolled ? "shadow-2xl" : "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-1">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <Image
              src="/hiraya_logo.png"
              alt="Hiraya Logo"
              width={50}
              height={50}
              className="h-20 w-20 object-contain"
            />
            {/* <span className="font-bold text-gray-900 text-lg md:text-xl">
              Hiraya
            </span> */}
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  className="relative group"
                >
                  <Link
                    href={link.href}
                    className={`text-gray-800 font-medium transition-colors duration-200 group-hover:text-green-700 ${
                      isActive ? "text-green-500" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
                </motion.div>
              );
            })}

            {/* Donate Button */}
            <motion.div whileHover={{ scale: 1.1 }} className="relative">
              <Link
                href="/donate"
                className="px-5 py-2 rounded-full bg-linear-to-r from-green-600 to-lime-500 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                Donate
              </Link>
              <motion.span
                className="absolute -inset-1 rounded-full bg-green-400 opacity-30 blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav (from clean compact design) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden bg-white shadow-md border-t border-gray-200"
            >
              <div className="flex flex-col items-center space-y-6 py-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`text-base font-semibold ${
                        isActive
                          ? "text-green-500"
                          : "text-gray-800 hover:text-green-500"
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                {/* LinkedIn Mobile */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900 transition"
                >
                  <FaLinkedin size={24} />
                </a>
                {/* Donate Button */}
                <Link
                  href="/donate"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full text-center px-6 py-3 bg-lime-500 text-white rounded-full font-bold shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  Donate
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
