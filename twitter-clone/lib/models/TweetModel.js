import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    id: { 
      type: Number, 
      required: false 
    }, 
    userId: {
      type: Number,
      required: true,
    }, 
    body: { 
      type: String, 
      required: false, 
      default: "" ,
      minlength: 3,
      maxlength: 280
    },
    likes: { 
      type: Number, 
      default: 0 
    },
    tags: { 
      type: [String], 
      default: [] 
    },
    views: { 
      type: Number, 
      default: 0 
    },
    createdAt: { 
      type: Date, 
      default: () => new Date() 
    },
  },
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
