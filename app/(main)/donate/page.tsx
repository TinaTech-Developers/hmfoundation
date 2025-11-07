"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import PageLayout from "../components/pagelayout";

export default function DonatePage() {
  const [amount, setAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState<"cash" | "items">("cash");

  const donationOptions = [25, 50, 100, 250];

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(Number(e.target.value) || 0);
  };

  const handleCashDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form)) as any;

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "cash",
          name: formData.name,
          email: formData.email,
          amount,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit donation");
      }

      alert(`Thank you for your donation of $${amount}!`);
      form.reset();
      setAmount(50);
      setCustomAmount("");
    } catch (err: any) {
      alert(err.message);
    }
  };

  const handleItemsDonate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = Object.fromEntries(new FormData(form)) as any;

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "items",
          name: formData.name,
          email: formData.email,
          items: formData.items,
          details: formData.details,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit donation");
      }

      alert("Thank you for your item donation! We will contact you soon.");
      form.reset();
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <PageLayout
      title="Support Our Cause"
      description="Make a difference today by donating to our organization. Your support helps us provide education, clean water, and empowerment to those in need."
      image="https://cloudfront-us-east-1.images.arcpublishing.com/pmn/D2LTRFIHZZEXTAJ55QIZBWGJEU.jpg"
      ctaPrimary={{ label: "Donate Now", href: "#donate-section" }}
    >
      <div className="bg-gray-50 min-h-screen text-gray-900">
        <section className="py-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setDonationType("cash")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                donationType === "cash"
                  ? "bg-lime-600 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-lime-500 hover:text-white"
              }`}
            >
              Cash Donation
            </button>
            <button
              onClick={() => setDonationType("items")}
              className={`px-6 py-3 rounded-full font-semibold transition ${
                donationType === "items"
                  ? "bg-lime-600 text-white"
                  : "bg-gray-200 text-gray-900 hover:bg-lime-500 hover:text-white"
              }`}
            >
              Donate Items
            </button>
          </div>

          {/* Cash Donation Form */}
          {donationType === "cash" && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Choose Your Donation Amount
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {donationOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setAmount(opt)}
                    className={`px-6 py-3 rounded-full font-semibold transition ${
                      amount === opt
                        ? "bg-lime-600 text-white"
                        : "bg-gray-200 text-gray-900 hover:bg-lime-500 hover:text-white"
                    }`}
                  >
                    ${opt}
                  </button>
                ))}
              </div>

              <div className="flex justify-center mb-12">
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={handleCustomAmountChange}
                  className="w-40 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                />
              </div>

              <form
                onSubmit={handleCashDonate}
                className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  Your Information
                </h3>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 mb-1">
                    Donation Amount
                  </label>
                  <input
                    type="text"
                    value={`$${amount}`}
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition"
                >
                  Donate ${amount}
                </button>
              </form>
            </div>
          )}

          {/* Item Donation Form */}
          {donationType === "items" && (
            <form
              onSubmit={handleItemsDonate}
              className="max-w-md mx-auto bg-white rounded-2xl p-8 shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                Donate Items
              </h3>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">
                  Items to Donate
                </label>
                <textarea
                  name="items"
                  required
                  placeholder="Describe the items you would like to donate"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                  rows={4}
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 mb-1">
                  Pickup / Delivery Details
                </label>
                <textarea
                  name="details"
                  required
                  placeholder="Your address or preferred method for item drop-off"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-lime-600"
                  rows={2}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-lime-600 text-white font-semibold rounded-full hover:bg-lime-700 transition"
              >
                Submit Item Donation
              </button>
            </form>
          )}
        </section>

        <section className="py-20 bg-gray-100 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Your Donation Matters
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-700 max-w-2xl mx-auto"
          >
            Every contribution helps children attend school, communities gain
            access to clean water, and women achieve independence. Together, we
            can change lives.
          </motion.p>
        </section>
      </div>
    </PageLayout>
  );
}
