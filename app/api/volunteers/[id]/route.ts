// app/api/volunteers/[id]/route.ts
import { NextResponse } from "next/server";
import mongoose from "mongoose";
import Volunteer from "@/models/Volunteer";
import { connectDB } from "@/lib/mongodb";

// ✅ GET volunteer by ID
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params; // ✅ unwrap the promise

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const volunteer = await Volunteer.findById(id);
  if (!volunteer) {
    return NextResponse.json({ error: "Volunteer not found" }, { status: 404 });
  }

  return NextResponse.json(volunteer);
}

// ✅ Update volunteer
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params;
  const body = await req.json();

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const volunteer = await Volunteer.findByIdAndUpdate(id, body, {
    new: true,
    runValidators: true,
  });

  if (!volunteer) {
    return NextResponse.json({ error: "Volunteer not found" }, { status: 404 });
  }

  return NextResponse.json(volunteer);
}

// ✅ Delete volunteer
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();
  const { id } = await context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const deleted = await Volunteer.findByIdAndDelete(id);
  if (!deleted) {
    return NextResponse.json({ error: "Volunteer not found" }, { status: 404 });
  }

  return NextResponse.json({ message: "Volunteer deleted successfully" });
}
