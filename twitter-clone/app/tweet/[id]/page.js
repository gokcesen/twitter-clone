"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TweetCard from "@/components/TweetCard";
import { FaArrowLeft } from "react-icons/fa";
import { useParams } from "next/navigation";

const TweetDetails = ({ params }) => {
  const { id } = useParams();
  const [tweet, setTweet] = useState(null);

    const fetchTweets = async (id) => {
    fetch(`/api/tweet/${id}`)
      .then((res) => res.json())
      .then((data) => setTweet(data))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    if (id) fetchTweets(id);
  }, [id]);

  if (!tweet) {
    return <p>Loading...</p>;
  }

  console.log(tweet);
  return (
    <main className="flex flex-col items-start ml-[500px] mt-8 gap-4">
      <div className="flex flex-row items-center">
        <Link
          href="/"
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

export default TweetDetails;
