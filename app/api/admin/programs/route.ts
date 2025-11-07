import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Program from "@/models/Program";

// GET all programs
export async function GET() {
  try {
    await connectDB();
    const programs = await Program.find().sort({ date: 1 }); // upcoming first
    return NextResponse.json(programs);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch programs" },
      { status: 500 }
    );
  }
}

// POST create a new program
export async function POST(req: Request) {
  try {
    await connectDB();
    const body = await req.json();
    if (
      !body.title ||
      !body.description ||
      !body.image ||
      !body.content ||
      !body.date
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const newProgram = await Program.create(body);
    return NextResponse.json(newProgram, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to create program" },
      { status: 500 }
    );
  }
}
