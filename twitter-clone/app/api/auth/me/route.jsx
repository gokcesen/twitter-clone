import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/config/database";
import UserModel from "@/lib/models/UserModel";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await UserModel.findById(decoded.id);

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    return Response.json({
      _id: user._id,
      externalId: user.externalId,
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      image: user.image,
      email: user.email,
    });

  } catch (error) {
    console.error("ME endpoint error:", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}
