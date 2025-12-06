"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TweetCard from "@/components/tweet/TweetCard";
import { FaArrowLeft } from "react-icons/fa";

const TweetDetailsClient = ({ params }) => {
  const [tweet, setTweet] = useState(null);

  const fetchTweets = async (id) => {
    try {
      const res = await fetch(`/api/tweet/${id}`);
      const data = await res.json();
      setTweet(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (params?.id) {
      fetchTweets(params.id);  
    }
  }, [params?.id]);

  if (!tweet) return <p></p>;

  return (
    <main className="flex flex-col items-start ml-[450px] -mt-2 gap-4">
      <div className="flex flex-row items-center">
        <Link
          href="/home"
          className="top-4 left-4 flex items-start gap-2 bg-[#0a0a0a] text-white px-4 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors"
        >
          <FaArrowLeft size={20} className="text-white drop-shadow-md" />
        </Link>
        <span className="text-xl font-bold ml-2">Post</span>
      </div>

      <div className="mt-2">
        <TweetCard className="w-full" tweet={tweet} />
      </div>
    </main>
  );
};

export default TweetDetailsClient;
