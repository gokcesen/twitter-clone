import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false }, 
    userId: { type: Number, required: false, default: 1 }, 
    body: { type: String, required: false, default: "" },
    tags: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
    views: { type: Number, default: 0 },
    createdAt: { type: Date, default: () => new Date() },
  },
  { timestamps: true }
);

TweetSchema.pre("save", async function (next) {
  if (!this.isNew) return next();

  const lastTweet = await this.constructor.findOne().sort({ id: -1 });
  this.id = lastTweet ? lastTweet.id + 1 : 1;

  next();
});

const TweetModel =
  mongoose.models.Tweet || mongoose.model("Tweet", TweetSchema);

export default TweetModel;
