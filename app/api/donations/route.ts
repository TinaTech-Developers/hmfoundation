import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import Donation, { IDonation } from "@/models/Donation";

export async function POST(req: Request) {
  await connectDB();
  try {
    const body: Partial<IDonation> = await req.json();

    // Validate required fields
    if (!body.type || !body.name || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create donation
    const newDonation = new Donation({
      type: body.type,
      name: body.name,
      email: body.email,
      amount: body.amount,
      items: body.items,
      details: body.details,
    });

    await newDonation.save();

    return NextResponse.json(
      { message: "Donation saved successfully", donation: newDonation },
      { status: 201 }
    );
  } catch (err: any) {
    console.error("Donation API error:", err);
    return NextResponse.json(
      { error: "Failed to save donation" },
      { status: 500 }
    );
  }
}

// Get all donations
export async function GET() {
  await connectDB();
  try {
    const donations = await Donation.find().sort({ createdAt: -1 });
    return NextResponse.json(donations, { status: 200 });
  } catch (err: any) {
    console.error("Get donations error:", err);
    return NextResponse.json(
      { error: "Failed to fetch donations" },
      { status: 500 }
    );
  }
}
