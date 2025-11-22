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
            className="rounded-2xl shadow-2xl shadow-green-900 object-cover my-6 md:my-12"
          />
          <Image
            src="/childdev.jpg"
            alt="About Hirayama Nawa Foundation"
            width={600}
            height={400}
            className="rounded-2xl shadow-2xl shadow-green-900 object-cover my-6 md:my-10"
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
            {
              "Hiraya Manawari Foundation is dedicated to nurturing hope across generations — empowering children to reach their full potential by giving them the best possible start in life, and providing compassionate care for the elderly to ensure their physical, emotional, and social well-being."
            }
          </p>

          <div className="grid grid-cols-1 sm:grid-cols- gap-6 mt-8">
            {[
              {
                title: "🎒 Child Development",
                text: "Ensuring every child receives education, care, and opportunities to reach their full potential.",
              },
              {
                title: "👵 Elderly Care",
                text: "Providing comprehensive support to improve the physical, emotional, and social well-being of the elderly.",
              },
              {
                title: "💚 Community Support",
                text: "Building compassionate communities that nurture both the young and the elderly through shared care and growth.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
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
