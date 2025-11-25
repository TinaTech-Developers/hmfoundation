"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../../components/dashboardlayout";

interface NewsArticle {
  _id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
}

export default function ViewArticlePage() {
  const { id } = useParams();
  const router = useRouter();

  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchArticle = async () => {
    try {
      const res = await fetch(`/api/admin/news/${id}`);
      if (res.ok) {
        const data = await res.json();
        setArticle(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="max-w-5xl mx-auto p-6">
        <p className="text-red-600">Article not found.</p>
        <button
          onClick={() => router.back()}
          className="mt-4 text-[#A7CE44]-700 hover:underline"
        >
          <ArrowLeft className="inline w-5 h-5 mr-1" /> Back
        </button>
      </div>
    );
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSave = async (updated: Partial<NewsArticle>) => {
    try {
      const res = await fetch(`/api/admin/news/${article._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated),
      });
      if (res.ok) fetchArticle();
      closeModal();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-[#A7CE44]-700 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Articles
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-linear-to-r from-[#A7CE44]-600 to-[#A7CE44]-500 text-white rounded-2xl p-6 shadow-lg"
        >
          <h1 className="text-2xl font-bold">{article.title}</h1>
          <p className="mt-1 text-sm opacity-80">{article.excerpt}</p>
          <p className="mt-2 text-xs opacity-70">
            {new Date(article.date).toLocaleDateString()}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="text-gray-500 font-semibold">Content</h3>
          <p className="mt-1 text-gray-800 whitespace-pre-line">
            {article.content}
          </p>
          {article.image && (
            <img
              src={article.image}
              alt={article.title}
              className="mt-4 rounded-lg"
            />
          )}
          <p className="mt-2 text-gray-500 text-sm">
            Category: {article.category}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex gap-3"
        >
          <button
            onClick={openModal}
            className="px-5 py-2 bg-[#A7CE44]-600 hover:bg-[#A7CE44]-700 text-white rounded-xl transition shadow"
          >
            Edit Article
          </button>
        </motion.div>

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
                <h3 className="text-xl font-bold text-[#A7CE44]-700 mb-4">
                  Edit Article
                </h3>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as any;
                    handleSave({
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
                    defaultValue={article.title}
                    placeholder="Title"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="text"
                    name="excerpt"
                    defaultValue={article.excerpt}
                    placeholder="Excerpt"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <textarea
                    name="content"
                    defaultValue={article.content}
                    placeholder="Content"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="text"
                    name="image"
                    defaultValue={article.image}
                    placeholder="Image URL"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="text"
                    name="category"
                    defaultValue={article.category}
                    placeholder="Category"
                    required
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
                  />
                  <input
                    type="date"
                    name="date"
                    defaultValue={
                      new Date(article.date).toISOString().split("T")[0]
                    }
                    className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#A7CE44]-600"
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
                      className="px-4 py-2 bg-[#A7CE44]-600 text-white rounded-lg hover:bg-[#A7CE44]-700 transition"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </DashboardLayout>
  );
}
