import React from "react";
import Link from "next/link";
import TweetCard from "@/components/TweetCard";
import { FaArrowLeft } from "react-icons/fa";

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
        <main className="flex flex-col items-start ml-[500px] mt-8 gap-4">
            <div className="flex flex-row items-center">
                <Link href="/" className=" top-4 left-4 flex items-start gap-2 bg-[#0a0a0a] text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors ">
                    <FaArrowLeft size={20} className="text-white drop-shadow-md" /> 
                </Link>
                <span className="text-xl font-bold ml-2"> Post </span>
            </div>
            <div className="mt-2">
                <TweetCard className="w-full" tweet={tweet} />
            </div>
      </main>
      
    );

} 

export default TweetDetails;
