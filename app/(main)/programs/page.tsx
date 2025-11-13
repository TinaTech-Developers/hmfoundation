"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import PageLayout from "../components/pagelayout";

interface Program {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProgramsPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch("/api/admin/programs");
        if (!res.ok) throw new Error("Failed to fetch programs");
        const data: Program[] = await res.json();
        setPrograms(data);
      } catch (err) {
        console.error(err);
        setPrograms([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  return (
    <PageLayout
      title="Our Programs "
      description="Explore the transformative programs driving our mission — supporting children’s education, caring for the elderly, and fostering strong, empowered communities."
      image="https://reintegrationfacility.eu/wp-content/uploads/2024/09/NGO-training-950x482.jpg"
      ctaPrimary={{ label: "Get Involved", href: "/get-involved" }}
      ctaSecondary={{ label: "Donate Now", href: "/donate" }}
    >
      <section className="py-20 bg-linear-to-b from-white via-gray-50 to-green-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Empowering Communities Through Action
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Our programs are designed to create lasting change — nurturing
            education, improving livelihoods, and protecting our environment for
            generations to come.
          </motion.p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            <p className="text-center col-span-full text-gray-500">
              Loading programs...
            </p>
          ) : programs.length === 0 ? (
            <p className="text-center col-span-full text-gray-500">
              No programs found.
            </p>
          ) : (
            programs.map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl hover:shadow-lime-600 hover:-translate-y-1 transition-all"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 text-center pb-10">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {program.description}
                  </p>
                  <Link
                    href={`/programs/${program._id}`}
                    className="inline-block text-lime-700 font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-4/5 bg-lime-600"></div>
              </motion.div>
            ))
          )}
        </div>
      </section>
    </PageLayout>
  );
}
