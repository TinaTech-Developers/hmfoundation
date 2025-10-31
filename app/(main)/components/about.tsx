"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className=""
        >
          <Image
            src="/empowering_communities.png"
            alt="About Hirayama Nawa Foundation"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-5">
            Empowering Lives, Building Futures
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At{" "}
            <span className="font-semibold text-gray-800">
              Hirayama Nawa Foundation
            </span>
            , we believe in the power of education, empowerment, and
            environmental sustainability to uplift communities and create
            lasting change across Zimbabwe.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-8">
            {[
              {
                title: "🎓 Education",
                text: "Supporting access to quality education and youth development.",
              },
              {
                title: "🌍 Environment",
                text: "Promoting sustainable farming and green community projects.",
              },
              {
                title: "🤝 Empowerment",
                text: "Helping women and families gain self-reliance through skills.",
              },
              {
                title: "💧 Well-being",
                text: "Improving access to clean water, health, and nutrition.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-4 rounded-xl border border-gray-200 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-green-600 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <Link
            href="/about"
            className="inline-block mt-10 px-8 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-all"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
