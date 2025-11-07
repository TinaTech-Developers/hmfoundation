import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import NewsArticle from "@/models/NewsArticle";

// GET all articles
export async function GET() {
  try {
    await connectDB();
    const articles = await NewsArticle.find().sort({ date: -1 });
    return NextResponse.json(articles);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}

// POST a new article
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    const article = new NewsArticle(body);
    await article.save();
    return NextResponse.json(article, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create article" },
      { status: 500 }
    );
  }
}
