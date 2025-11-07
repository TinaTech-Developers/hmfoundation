import mongoose, { Schema, model, models } from "mongoose";

const NewsArticleSchema = new Schema(
  {
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const NewsArticle =
  models.NewsArticle || model("NewsArticle", NewsArticleSchema);
export default NewsArticle;
