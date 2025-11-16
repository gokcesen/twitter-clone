import connectDB from "@/lib/config/database";
import TweetModel from "@/lib/models/TweetModel";

// ✅ Tweetleri getir
export async function GET() {
  try {
    await connectDB();

    const posts = await TweetModel.find().sort({ id: 1 });
    const userIds = [...new Set(posts.map((p) => p.userId))];

    return Response.json({
      posts,
      userIds,
    });
  } catch (error) {
    console.error("Error fetching tweets:", error);
    return Response.json({ error: "Failed to fetch tweets" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDB();
    const data = await req.json();

	const newTweet = await TweetModel.create({
		userId: 0,
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
