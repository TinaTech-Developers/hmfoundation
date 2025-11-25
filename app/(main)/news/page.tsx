"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import PageLayout from "../components/pagelayout";
import PartnerSpotlightSection from "./_components/partnerspotlightsection";
import CommunityTestimonialsCarousel from "../about/_components/communitytestimonialscarousel";

interface NewsArticle {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  slug: string;
  date: string;
}

export default function NewsPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/admin/news");
        if (!res.ok) throw new Error("Failed to fetch news articles");
        const data = await res.json();
        setArticles(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Filter articles by selected category
  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category === selectedCategory)
    : articles;

  // Unique categories from articles
  const categories = Array.from(new Set(articles.map((a) => a.category)));

  return (
    <PageLayout
      title="News & Updates "
      description="Stay informed with stories, community updates, and highlights from our projects and partners."
      image="https://static.vecteezy.com/system/resources/thumbnails/030/536/174/small/entrepreneur-asian-businessman-and-businesswoman-discussing-new-business-project-in-tablet-in-modern-meeting-in-modern-office-asian-business-casual-concept-photo.jpg"
    >
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-b from-white via-gray-50 to-lime-50 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-light.svg')] opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            The Hiraya Journal
          </motion.h1>
          <p className="text-gray-700 leading-relaxed text-lg">
            Inspiring stories, impactful highlights, and updates from our
            projects and partners — curated to keep you informed and connected.
          </p>
        </div>
      </section>

      {/* News Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-10">
            {loading ? (
              <p className="text-gray-500">Loading articles...</p>
            ) : filteredArticles.length === 0 ? (
              <p className="text-gray-500">No articles in this category.</p>
            ) : (
              <>
                {/* Featured Article */}
                {filteredArticles[0] && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="overflow-hidden rounded-3xl shadow-lg bg-white"
                  >
                    <div className="relative h-80 w-full">
                      <Image
                        src={filteredArticles[0].image}
                        alt={filteredArticles[0].title}
                        fill
                        className="object-cover rounded-t-3xl"
                      />
                    </div>
                    <div className="p-8">
                      <span className="text-[#a2cc39] text-sm font-semibold">
                        {filteredArticles[0].category.toUpperCase()}
                      </span>
                      <h2 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                        {filteredArticles[0].title}
                      </h2>
                      <p className="text-gray-700 mb-6">
                        {filteredArticles[0].excerpt}
                      </p>
                      <Link
                        href={`/news/${filteredArticles[0]._id}`}
                        className="text-[#a2cc39] font-medium hover:underline"
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.div>
                )}

                {/* Articles Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {filteredArticles.slice(1).map((article, i) => (
                    <motion.div
                      key={article._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:shadow-[#A7CE44] transition overflow-hidden"
                    >
                      <div className="relative h-56 w-full">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover rounded-t-2xl"
                        />
                      </div>
                      <div className="p-6 pb-10">
                        <p className="text-sm text-[#a2cc39] font-semibold mb-2">
                          {article.category}
                        </p>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {article.excerpt}
                        </p>
                        <Link
                          href={`/news/${article._id}`}
                          className="text-[#a2cc39] font-medium hover:underline"
                        >
                          Read More →
                        </Link>
                      </div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-2 w-4/5 bg-[#A7CE44] "></div>
                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-gray-50 rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left transition ${
                      !selectedCategory
                        ? "text-[#a2cc39] font-bold"
                        : "text-gray-700 hover:text-[#a2cc39]"
                    }`}
                  >
                    All
                  </button>
                </li>
                {categories.map((cat, i) => (
                  <li key={i}>
                    <button
                      onClick={() => setSelectedCategory(cat)}
                      className={`w-full text-left transition ${
                        selectedCategory === cat
                          ? "text-[#a2cc39] font-bold"
                          : "text-gray-700 hover:text-[#a2cc39]"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Subscribe Box (still here, unchanged 🎉) */}
            <div className="bg-lime-50 border border-lime-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">
                Subscribe for Updates
              </h3>
              <p className="text-gray-700 text-sm mb-4">
                Get monthly updates about our projects, success stories, and
                volunteer opportunities.
              </p>
              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#A7CE44]"
                />
                <button
                  type="submit"
                  className="bg-[#a2cc39] text-white font-semibold py-2 rounded-lg hover:bg-[#a2cc39] transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </aside>
        </div>
      </section>

      {/* <PartnerSpotlightSection /> */}
      {/* <CommunityTestimonialsCarousel /> */}
    </PageLayout>
  );
}
