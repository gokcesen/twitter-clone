import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

const filePath = path.join(process.cwd(), "data", "tweets.json");

async function readTweets() {
  try {
    const data = await fs.readFile(filePath, { encoding: "utf8" });
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}

async function writeTweets(tweets) {
  await fs.writeFile(filePath, JSON.stringify(tweets, null, 2), {
    encoding: "utf8",
  });
}

export async function GET() {
  const tweets = await readTweets();
  return NextResponse.json(tweets);
}

export async function POST(request) {
  const { text } = await request.json();

  if (!text || !text.trim()) {
    return NextResponse.json({ error: "text is required" }, { status: 400 });
  }

  const tweets = await readTweets();

  const nextId = tweets.length
    ? Math.max(...tweets.map((t) => t.id || 0)) + 1
    : 31;

  const newTweet = {
    id: nextId,
    body: text,
    user: {
      id: 999,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      image: "/images/avatar.jpg",
    },
    reactions: {              
      likes: 0,
      replies: 0,
      reposts: 0,
    },
    views: 0,                
    createdAt: new Date().toISOString(),
  };

  tweets.unshift(newTweet);
  await writeTweets(tweets);

  return NextResponse.json(newTweet, { status: 201 });
}
