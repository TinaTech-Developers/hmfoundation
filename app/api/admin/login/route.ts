import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import Admin from "@/models/Admin";
import { connectDB } from "@/lib/mongodb";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

interface LoginRequest {
  email: string;
  password: string;
}

export async function POST(req: Request) {
  await connectDB();
  const { email, password }: LoginRequest = await req.json();

  const admin = await Admin.findOne({ email });
  if (!admin)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const isMatch = await admin.comparePassword(password);
  if (!isMatch)
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

  const token = jwt.sign(
    {
      id: (admin._id as string).toString(),
      email: admin.email,
      role: admin.role,
    },
    JWT_SECRET,
    { expiresIn: "2h" }
  );

  return NextResponse.json({ token, role: admin.role });
}
