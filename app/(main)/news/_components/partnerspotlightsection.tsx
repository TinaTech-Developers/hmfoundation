"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "UNICEF",
    logo: "/partners/unicef.png",
    quote:
      "Together, we’re creating safe and inclusive learning environments for all children.",
  },
  {
    name: "World Bank",
    logo: "/partners/worldbank.png",
    quote:
      "Driving sustainable development through community-centered economic programs.",
  },
  {
    name: "Plan International",
    logo: "/partners/plan.png",
    quote:
      "Empowering youth and advancing gender equality in every corner of the world.",
  },
  {
    name: "Save the Children",
    logo: "/partners/savethechildren.png",
    quote:
      "Collaborating to improve access to education and healthcare for vulnerable communities.",
  },
];

export default function PartnerSpotlightSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-lime-50 via-white to-lime-100">
      {/* soft decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#d9f99d_0%,transparent_60%)] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
        >
          Trusted by Our Global Partners
        </motion.h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-16">
          We’re proud to collaborate with leading organizations that share our
          vision for sustainable impact and community empowerment.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded p-6 bg-white/80 backdrop-blur-lg shadow-sm border border-lime-100 hover:shadow-xl transition-all"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {partner.name}
              </h3>
              <p className="text-gray-700 text-sm italic">{partner.quote}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-lime-600 to-lime-400 opacity-0 group-hover:opacity-100 transition-all rounded-b-2xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
