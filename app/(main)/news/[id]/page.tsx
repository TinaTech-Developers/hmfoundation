"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import PartnerSpotlightSection from "../_components/partnerspotlightsection";
import { useEffect, useState } from "react";
import PageLayout from "../../components/pagelayout";

interface NewsArticle {
  _id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
}

export default function NewsArticlePage() {
  const { id } = useParams(); // <-- now using 'id'
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/admin/news/${id}`); // fetch single article by ID
        if (!res.ok) throw new Error("Article not found");
        const data: NewsArticle = await res.json();
        setArticle(data);
      } catch (err) {
        console.error(err);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [id]);

  if (loading) {
    return (
      <PageLayout
        title="Loading..."
        description="Loading article..."
        image="/images/news/hero.jpg"
      >
        <div className="py-40 text-center text-gray-600">
          <p className="text-lg">Loading article...</p>
        </div>
      </PageLayout>
    );
  }

  if (!article) {
    return (
      <PageLayout
        title="Article Not Found"
        description="Sorry, we couldn’t find the article you’re looking for."
        image="/images/news/hero.jpg"
      >
        <div className="py-40 text-center text-gray-600">
          <h1 className="text-3xl font-bold mb-2">404 — Article Not Found</h1>
          <p className="mb-6">
            The article you’re looking for doesn’t exist or was removed.
          </p>
          <Link
            href="/news"
            className="bg-lime-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-lime-800 transition"
          >
            Back to News
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={`${article.title} - Hiraya Manawari Foundation`}
      description={article.excerpt}
      image={article.image}
    >
      <article className="bg-white max-w-4xl mx-auto py-20 px-6 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-green-700 font-semibold text-sm uppercase">
            {article.category}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mt-2 mb-4">
            {article.title}
          </h1>
          <p className="text-gray-500 text-sm mb-8">
            Published on{" "}
            {new Date(article.date).toLocaleDateString(undefined, {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <div className="relative h-96 w-full mb-10 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed">
            {article.content.split("\n").map((p, i) => (
              <p key={i} className="mb-6">
                {p}
              </p>
            ))}
          </div>

          <Link
            href="/news"
            className="inline-block mt-10 text-lime-700 font-semibold hover:underline"
          >
            ← Back to All News
          </Link>
        </motion.div>
      </article>

      <PartnerSpotlightSection />
    </PageLayout>
  );
}
