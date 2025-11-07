import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/lib/mongodb";
import Donation from "@/models/Donation";

// ✅ GET /api/donations/[id]
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> } // 👈 Notice Promise type
) {
  const { id } = await context.params; // 👈 Must await

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await connectDB();
    const donation = await Donation.findById(id);
    if (!donation) {
      return NextResponse.json(
        { error: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(donation, { status: 200 });
  } catch (error) {
    console.error("Fetch donation error:", error);
    return NextResponse.json(
      { error: "Failed to fetch donation" },
      { status: 500 }
    );
  }
}

// ✅ PATCH /api/donations/[id]
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await connectDB();
    const body = await req.json();
    const updatedDonation = await Donation.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedDonation) {
      return NextResponse.json(
        { error: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatedDonation, { status: 200 });
  } catch (err) {
    console.error("Update donation error:", err);
    return NextResponse.json(
      { error: "Failed to update donation" },
      { status: 500 }
    );
  }
}

// ✅ DELETE /api/donations/[id]
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  try {
    await connectDB();
    const deleted = await Donation.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { error: "Donation not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: "Donation deleted successfully" });
  } catch (err) {
    console.error("Delete donation error:", err);
    return NextResponse.json(
      { error: "Failed to delete donation" },
      { status: 500 }
    );
  }
}
