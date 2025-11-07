import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectDB } from "@/lib/mongodb";
import Admin from "@/models/Admin";

const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

async function verifyToken(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (!authHeader?.startsWith("Bearer ")) return null;

  const token = authHeader.split(" ")[1];
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string };
  } catch {
    return null;
  }
}

// ✅ GET /api/admin/users/[id]
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;

  let admin;
  if (id === "me") {
    // fetch logged-in admin using JWT
    admin = await Admin.findById(user.id).select("-password");
  } else {
    admin = await Admin.findById(id).select("-password");
  }

  if (!admin)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(admin);
}

// ✅ PUT /api/admin/users/[id]
export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;
  const { name, email, role, password } = await req.json();

  const updateId = id === "me" ? user.id : id;

  const updateData: any = { name, email, role };
  if (password) updateData.password = password;

  try {
    const admin = await Admin.findByIdAndUpdate(updateId, updateData, {
      new: true,
    });
    if (!admin)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    const { password: _, ...adminData } = admin.toObject();
    return NextResponse.json(adminData);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
// ✅ DELETE /api/admin/users/[id]
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  await connectDB();

  const user = await verifyToken(req);
  if (!user)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { id } = await context.params;

  const deleteId = id === "me" ? user.id : id;

  try {
    const admin = await Admin.findByIdAndDelete(deleteId);
    if (!admin)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to delete user" },
      { status: 500 }
    );
  }
}
