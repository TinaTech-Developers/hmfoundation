"use client";

import { motion } from "framer-motion";
import { Users, BookOpen, Droplet, Leaf, LucideIcon } from "lucide-react";
import React from "react";

interface Stat {
  id: number;
  icon: LucideIcon;
  number: string;
  label: string;
}

const stats: Stat[] = [
  { id: 1, icon: BookOpen, number: "100+", label: "Children Assisted" },
  { id: 2, icon: Users, number: "100+", label: "Elderly People Assisted" },
  { id: 3, icon: Droplet, number: "20+", label: "Projects" },
  // { id: 4, icon: Leaf, number: "5,000+", label: "Trees Planted" },
];

export default function ImpactSection() {
  return (
    <section className="relative py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm  font-semibold text-[#A7CE44]-600 uppercase mb-2 inline-block"
        >
          Our Impact
        </motion.span>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3"
        >
          Making a Real Difference
        </motion.h3>

        <p className="text-gray-600 mb-12 sm:mb-16 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Every program we run contributes to meaningful change — empowering
          communities, restoring environments, and shaping brighter futures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 ">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="flex flex-col items-center bg-[#A7CE44]-50 rounded-2xl p-8 hover:shadow-md hover:bg-[#A7CE44]-100 transition-all duration-300"
              >
                <div className="mb-4 bg-white shadow-sm p-3 rounded-xl">
                  <Icon className="w-8 h-8 text-[#A7CE44]-600" />
                </div>
                <h4 className="text-3xl sm:text-4xl font-bold text-[#A7CE44]-700 mb-2">
                  {stat.number}
                </h4>
                <p className="text-gray-700 text-sm sm:text-base font-medium">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
