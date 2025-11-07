"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import DashboardLayout from "../components/dashboardlayout";

interface NewsArticle {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
}

export default function AdminNewslettersPage() {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<NewsArticle | null>(
    null
  );

  // Fetch from backend
  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/admin/news");
      const data = await res.json();
      setArticles(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const openModal = (article?: NewsArticle) => {
    setCurrentArticle(article || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentArticle(null);
  };

  const handleSave = async (article: Partial<NewsArticle>) => {
    try {
      let res;
      if (article._id) {
        // Update existing
        res = await fetch(`/api/admin/news/${article._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        });
      } else {
        // Add new
        res = await fetch("/api/admin/news", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        });
      }
      if (res.ok) fetchArticles();
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (_id: string) => {
    if (!confirm("Are you sure you want to delete this article?")) return;
    try {
      const res = await fetch(`/api/admin/news/${_id}`, { method: "DELETE" });
      if (res.ok) fetchArticles();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col gap-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-green-700"
        >
          News Articles
        </motion.h2>

        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Add Article
        </button>

        <div className="overflow-x-auto rounded-lg shadow-md bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  #
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-green-800">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {articles.map((article, i) => (
                <tr key={article._id} className="hover:bg-green-50 transition">
                  <td className="px-6 py-4">{i + 1}</td>
                  <td className="px-6 py-4">{article.title}</td>
                  <td className="px-6 py-4">{article.category}</td>
                  <td className="px-6 py-4">
                    {new Date(article.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <Link
                      href={`/admin/newsletters/${article._id}`}
                      className="px-2 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition text-sm"
                    >
                      View / Edit
                    </Link>

                    <button
                      onClick={() => handleDelete(article._id)}
                      className="px-2 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-lg"
            >
              <h3 className="text-xl font-bold text-green-700 mb-4">
                {currentArticle ? "Edit Article" : "Add Article"}
              </h3>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as any;
                  handleSave({
                    _id: currentArticle?._id,
                    title: form.title.value,
                    excerpt: form.excerpt.value,
                    content: form.content.value,
                    image: form.image.value,
                    category: form.category.value,
                    date: form.date.value,
                  });
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="title"
                  defaultValue={currentArticle?.title || ""}
                  placeholder="Title"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  name="excerpt"
                  defaultValue={currentArticle?.excerpt || ""}
                  placeholder="Excerpt"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
                <textarea
                  name="content"
                  defaultValue={currentArticle?.content || ""}
                  placeholder="Content"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  name="image"
                  defaultValue={currentArticle?.image || ""}
                  placeholder="Image URL"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="text"
                  name="category"
                  defaultValue={currentArticle?.category || ""}
                  placeholder="Category"
                  required
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />
                <input
                  type="date"
                  name="date"
                  defaultValue={
                    currentArticle
                      ? new Date(currentArticle.date)
                          .toISOString()
                          .split("T")[0]
                      : ""
                  }
                  className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-600"
                />

                <div className="flex justify-end gap-2 mt-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    Save
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DashboardLayout>
  );
}
