"use client";

import { useState } from "react";
import { useReposts } from "@/contexts/RepostContext";
import TweetCard from "@/components/tweet/TweetCard";

export default function ProfilePage() {
  const { reposts } = useReposts();
  const [activeTab, setActiveTab] = useState("posts");

  const myPosts = [];
  const myAnswers = [];
  const myLiked = [];

  const tabs = [
    { id: "posts", label: "Posts", data: reposts },
    { id: "answers", label: "Answers", data: myAnswers },
    { id: "liked", label: "Liked", data: myLiked },
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <main className="flex justify-center mt-8">
      <div className="w-full max-w-2xl bg-black text-white border border-gray-800 rounded-xl overflow-hidden">
        <div className="h-40 bg-gradient-to-r from-blue-500 to-indigo-500 relative">
          <div className="absolute -bottom-12 left-6">
            <div className="w-24 h-24 rounded-full border-4 border-black bg-gray-700 overflow-hidden">
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
              className={`flex-1 py-3 text-center text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-white border-b-2 border-white font-semibold"
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
            activeTabData.data.map((tweet) => (
              <TweetCard key={tweet.id} tweet={tweet} />
            ))
          )}
        </div>
      </div>
    </main>
  );
}
