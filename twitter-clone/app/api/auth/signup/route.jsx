import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/lib/config/database";
import UserModel from "@/lib/models/UserModel";

export async function POST(req) {
  try {
    await connectDB();

    const { firstName, lastName, email, username, password } = await req.json();

    if (!email || !username || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const existing = await UserModel.findOne({
      $or: [{ email }, { username }],
    });

    if (existing) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Generate unique internalId
    const maxUser = await UserModel.findOne().sort({ internalId: -1 });
    const internalId = maxUser ? maxUser.internalId + 1 : 1;
    
    // Generate externalId (can be same as internalId or use timestamp-based approach)
    const externalId = Date.now();

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      externalId,
      internalId,
      firstName,
      lastName,
      email,
      username,
      password: hashed
    });

    return NextResponse.json(
      {
        id: newUser._id,
        email: newUser.email,
        username: newUser.username,
        firstName: newUser.firstName,
        lastName: newUser.lastName
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ 
      error: err.message || "Server error" 
    }, { status: 500 });
  }
}
