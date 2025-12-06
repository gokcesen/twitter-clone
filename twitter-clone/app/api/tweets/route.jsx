import connectDB from "@/lib/config/database";
import TweetModel from "@/lib/models/TweetModel";
import UserModel from "@/lib/models/UserModel";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export async function GET() {
  try {
    await connectDB();

    const posts = await TweetModel.find().sort({ id: 1 });
    const userIds = [...new Set(posts.map((p) => p.userId))];

    const users = await UserModel.find({
      externalId: { $in: userIds }
    });


    return Response.json({
      posts,
      userIds,
      users
    });

  } catch (error) {
    console.error("ERROR:", error);
    return Response.json({ error: "Failed" }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return Response.json({ error: "Not authenticated" }, { status: 401 });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const data = await req.json();

    // Get the real user from DB using _id from token
    const dbUser = await UserModel.findById(decoded.id);

    if (!dbUser) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    // Use externalId for the tweet!
    const newTweet = await TweetModel.create({
      userId: dbUser.externalId,
      body: data.text,
      tags: [],
      likes: 0,
      views: 0,
    });

    return Response.json(newTweet);

  } catch (error) {
    console.error("Error creating tweet:", error);
    return Response.json({ error: "Failed to create tweet" }, { status: 500 });
  }
}

