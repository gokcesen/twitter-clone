import React from "react";
import Link from "next/link";
import TweetCard from "@/components/TweetCard";

const getTweet = async (id) => {
    const res = await fetch(`https://dummyjson.com/posts/${id}`);
    if (!res.ok) {
        throw new Error("Tweet fetch failed");
      }
    return res.json();
}

const TweetDetails = async ({ params }) => {
    params = await params
    const tweet = await getTweet(params.id);

    if (!tweet) {
        return <p>Tweet not found.</p>;
      }

    return(
        <main>
            <TweetCard tweet={tweet} />
            <Link href='/' >
                Back to Feed
            </Link>
        </main>
    );

} 

export default TweetDetails;
