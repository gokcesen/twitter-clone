"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useReposts } from "@/contexts/RepostContext";
import TweetCard from "@/components/tweet/TweetCard";


const ProfileClient = () => {
    const { reposts } = useReposts();
	const [activeTab, setActiveTab] = useState("posts");
    const [localTweets, setLocalTweets] = useState([]);

    useEffect(() => {
        fetch("/api/tweets")
          .then((res) => res.json())
          .then((data) => setLocalTweets(data))
          .catch(console.error);
      }, []);

    const myPosts = [...localTweets, ...reposts]
    const myAnswers = [];
	const myLiked = [];


	const tabs = [
        { id: "posts", label: "Posts", data: myPosts },
		{ id: "answers", label: "Replies", data: myAnswers },
		{ id: "highlights", label: "Highlights", data: myLiked },
		{ id: "media", label: "Media", data: myLiked },
		{ id: "likes", label: "Likes", data: myLiked },
	];

	const activeTabData = tabs.find((t) => t.id === activeTab);

   
  return (
    <main className="flex justify-center pt-4">
    <div className="w-full max-w-[800px] bg-[#0a0a0a] text-white overflow-hidden mr-6">
        <div className="flex items-center gap-2 px-6 mb-2 relative">
            <Link
                href="/"
                className="fixed top-4 left-[460px] z-20 flex items-center gap-2 text-white hover:text-sky-400 transition-colors"
            >
                <FaArrowLeft size={24} className="drop-shadow-md" />
            </Link>

            <h1 className="fixed top-4 left-[500px] z-20 text-xl font-bold text-white">
                John Doe
            </h1>
        </div>

        <div
            className="h-60 relative bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/cat-header.jpg')",
                backgroundBlendMode: "overlay",
            }}
        >
            <div className="absolute -bottom-12 left-6">
                <div className="w-36 h-36 rounded-full border-4 border-black bg-gray-700 overflow-hidden">
                    <img
                        src="/images/avatar.jpg"
                        alt="Profile Avatar"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>

        <div className="pt-16 px-6 pb-2 border-b border-gray-800">
            <h1 className="text-xl font-bold">John Doe</h1>
            <p className="text-gray-400">@johndoe</p>

            <div className="mt-4 flex gap-6 text-sm text-gray-400">
                <p>
                    <span className="text-white font-semibold">120</span> Following
                </p>
                <p>
                    <span className="text-white font-semibold">340</span> Followers
                </p>
            </div>
        </div>

        <div className="flex border-b border-gray-800">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-3 text-center text-m font-medium transition-colors ${
                        activeTab === tab.id
                            ? "text-white font-semibold relative after:content-[''] after:absolute after:left-1/2 after:-bottom-[3px] after:h-[3px] after:w-10 after:-translate-x-1/2 after:bg-sky-500 after:rounded-full"
                            : "text-gray-400 hover:text-gray-200"
                    }`}
                >
                    {tab.label}
                </button>
            ))}
        </div>

        <div className="pl-0 pr-6 pt-6 pb-6 min-h-[200px]">
            {activeTabData?.data.length === 0 ? (
                <p className="text-gray-500 text-center mt-6">
                    No {activeTabData.label.toLowerCase()} yet.
                </p>
            ) : (
                activeTabData.data.map((tweet, index) => (
                    <div key={tweet.id || tweet.body || index}>
                      <TweetCard tweet={tweet} />
                      <div className="border-b border-zinc-800 w-[1080px] ml-[-24px]" />
                    </div>
                  ))
                  

            )}

        </div>
    </div>
</main>
  );
}

export default ProfileClient;