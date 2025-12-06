import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/config/database";
import UserModel from "@/lib/models/UserModel";

export async function PATCH(req) {
  try {
    await connectDB();

    const cookieStore = cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const body = await req.json();

    const user = await UserModel.findById(decoded.id);
    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    user.image = body.image;
    await user.save();

    return Response.json({ success: true, image: user.image });

  } catch (err) {
    console.error("Update avatar error:", err);
    return Response.json({ error: "Failed to update avatar" }, { status: 500 });
  }
}
