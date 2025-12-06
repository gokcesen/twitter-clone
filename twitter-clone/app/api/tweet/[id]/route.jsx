import connectDB from "@/lib/config/database";
import TweetModel from "@/lib/models/TweetModel";
import UserModel from "@/lib/models/UserModel";

export async function GET(req, { params }) {

  try {
    await connectDB();

    const resolvedParams = await params;
    const tweetId = Number(resolvedParams.id);


    const tweet = await TweetModel.findOne({ id: tweetId });
    if (!tweet) {
      return Response.json({ error: "Tweet not found" }, { status: 404 });
    }

    const user = await UserModel.findOne({ externalId: tweet.userId });

    return Response.json({
      ...tweet.toObject(),
      user: user ? user.toObject() : null,
    });

  } catch (error) {
    console.error("Error fetching tweet:", error);
    return Response.json(
      { error: "Failed to fetch tweet" },
      { status: 500 }
    );
  }
}


