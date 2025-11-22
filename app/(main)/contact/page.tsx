"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import PageLayout from "../components/pagelayout";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted! (Replace this with your form handler)");
  };

  return (
    <PageLayout
      title="Contact Us "
      description="Reach out to Hiraya Manawari Foundation. We're here to answer your questions and connect you with our community programs."
      image="https://www.raymond.in/static/media/Contact%20us%20banner%20.7a073f8d0667605662b2.jpg"
      ctaPrimary={{ label: "Get Involved", href: "/get-involved" }}
      ctaSecondary={{ label: "Donate ", href: "/donate" }}
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-linear-to-b from-green-50 via-white to-white text-center overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6"
          >
            Get in Touch with Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 text-lg sm:text-xl max-w-2xl mx-auto"
          >
            Have questions, suggestions, or want to collaborate? <br /> We’d
            love to hear from you.
          </motion.p>
        </div>
      </section>
      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center lg:text-left">
              Send Us a Message
            </h2>

            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-6 w-full"
            >
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-600 transition text-sm sm:text-base"
                  placeholder=" "
                />
                <label
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400
            peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-lime-600"
                >
                  Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-600 transition text-sm sm:text-base"
                  placeholder=" "
                />
                <label
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400
            peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-lime-600"
                >
                  Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="peer w-full px-4 py-3 sm:py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-lime-600 transition text-sm sm:text-base resize-none"
                  placeholder=" "
                />
                <label
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all
            peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400
            peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-xs peer-focus:text-lime-600"
                >
                  Message
                </label>
              </div>

              <button
                type="submit"
                className="bg-lime-600 text-white font-semibold px-6 py-3 sm:py-4 rounded-lg shadow hover:bg-lime-700 transition w-full text-sm sm:text-base"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Contact Info
            </h2>

            <div className="space-y-4">
              <div className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <p className="text-gray-700">
                    info@hirayamanawarifoundation.com <br />
                    hirayamanawari.foundation@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <p className="text-gray-700">+263 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-700">
                    123 Community Rd, Harare, Zimbabwe
                  </p>
                </div>
              </div>

              <div className="flex items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
                <div className="bg-lime-600 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl mr-4">
                  🌐
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Follow Us</p>
                  <div className="flex gap-4 mt-1">
                    <a
                      href="https://www.facebook.com/share/1J4NBPTvve/"
                      className="text-lime-600 font-semibold hover:underline"
                    >
                      Facebook
                    </a>
                    <a
                      href="https://www.linkedin.com/company/hiraya-manawari-foundation/"
                      className="text-lime-600 font-semibold hover:underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-lime-600 font-semibold hover:underline"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className=" bg-linear-to-r from-green-800 to-lime-600  py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl  overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.789847!2d31.045984!3d-17.825827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1934b0f5c7ed2f1b%3A0x123456789abcdef0!2sHarare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1699012345678!5m2!1sen!2s"
            className="w-full h-96 border-0"
            allowFullScreen={true}
            loading="lazy"
            title="Hiraya Manawari Foundation Location"
          ></iframe>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-700 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Ready to Make a Difference?
        </motion.h2>
        <p className="max-w-2xl mx-auto text-sm sm:text-base leading-relaxed mb-8">
          {/* Volunteer your time or support our programs to empower communities
          across Zimbabwe. */}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/volunteer"
            className="bg-white text-lime-800 mx-4 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
          >
            Volunteer Today
          </a>
          <a
            href="/donate"
            className="bg-transparent border border-white mx-4 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-green-800 transition"
          >
            Donate
          </a>
        </div>
      </section>
    </PageLayout>
  );
}
