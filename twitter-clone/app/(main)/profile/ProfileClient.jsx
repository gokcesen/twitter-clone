"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useReposts } from "@/contexts/RepostContext";
import { useLikes } from "@/contexts/LikeContext";
import TweetCard from "@/components/tweet/TweetCard";

const ProfileClient = () => {
  const { reposts } = useReposts();
  const { likes } = useLikes();

  const [activeTab, setActiveTab] = useState("posts");
  const [localTweets, setLocalTweets] = useState([]);
  const [allTweets, setAllTweets] = useState([]);
  const [me, setMe] = useState(null);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  const handleChooseAvatar = (img) => {
    fetch("/api/users/update-avatar", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image: img })
    })
      .then((res) => res.json())
      .then(() => {
        setMe((prev) => ({ ...prev, image: img }));
        setShowAvatarModal(false);
      })
      .catch(console.error);
  };

  useEffect(() => {
    fetch("/api/auth/me")
      .then((res) => res.json())
      .then((data) => setMe(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    fetch("/api/tweets")
      .then((res) => res.json())
      .then((data) => {
        setAllTweets(data.posts || []);
  
        if (!me) return;
  
        const onlyMine = (data.posts || [])
          .filter((t) => t.userId === me.externalId)
          .map((t) => ({
            ...t,
            user: {
              firstName: me.firstName,
              lastName: me.lastName,
              username: me.username,
              image: me.image
            }
          }));
  
        setLocalTweets(onlyMine);
      })
      .catch(console.error);
  }, [me, likes]);  
  

  const myPosts = [...localTweets, ...reposts].map((t) => ({
    ...t,
    user: t.user || {
      firstName: me?.firstName,
      lastName: me?.lastName,
      username: me?.username,
      image: me?.image
    },
    displayedAt: t.repostAt || t.createdAt
  }));

  myPosts.sort((a, b) => new Date(b.displayedAt) - new Date(a.displayedAt));

  const myLiked = likes
  .map((tweet) => ({
    ...tweet,
    likedAt: tweet.likedAt
  }))
  .sort((a, b) => b.likedAt - a.likedAt);


  const myAnswers = [];
  const myHighlights = []; 
  const myMedia = []; 

  const tabs = [
    { id: "posts", label: "Posts", data: myPosts },
    { id: "answers", label: "Replies", data: myAnswers },
    { id: "highlights", label: "Highlights", data: myHighlights },
    { id: "media", label: "Media", data: myMedia },
    { id: "likes", label: "Likes", data: myLiked }
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab);

  return (
    <main className="flex justify-center pt-4">
      <div className="w-full max-w-[800px] bg-[#0a0a0a] text-white overflow-hidden mr-6">
        <div className="flex items-center gap-2 px-6 mb-2 relative">
          <Link
            href="/home"
            className="fixed top-4 left-[460px] z-10 flex items-center gap-2 text-white hover:text-sky-400 transition-colors"
          >
            <FaArrowLeft size={24} className="drop-shadow-md" />
          </Link>

          <h1 className="fixed top-4 left-[500px] z-10 text-xl font-bold text-white">
            {me ? `${me.firstName} ${me.lastName}` : "Loading..."}
          </h1>
        </div>

        <div
          className="h-60 relative w-full bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/cat-header.jpg')",
          }}
        >
          <div className="absolute -bottom-12 left-6">
            <div className="w-36 h-36 rounded-full border-4 border-black bg-gray-700 overflow-hidden cursor-pointer">
              <img
                src={me?.image || "/images/default-avatar.jpeg"}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
                onClick={() => setShowAvatarModal(true)}
              />
            </div>
          </div>
        </div>

        <div className="pt-16 px-6 pb-2 border-b border-gray-800">
          <h1 className="text-xl font-bold">
            {me ? `${me.firstName} ${me.lastName}` : ""}
          </h1>
          <p className="text-gray-400">@{me?.username}</p>

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

      {showAvatarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-[#111] rounded-lg p-6 w-[400px] shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Choose your avatar</h2>

            <div className="grid grid-cols-3 gap-4">
              {[
                "/images/avatars/avatar-1.jpg",
                "/images/avatars/avatar-2.jpg",
                "/images/avatars/avatar-3.jpg",
                "/images/avatars/avatar-4.jpeg",
                "/images/avatars/avatar-5.jpg",
                "/images/avatars/avatar.jpg"
              ].map((img) => (
                <img
                  key={img}
                  src={img}
                  className="w-24 h-24 rounded-full object-cover cursor-pointer hover:opacity-80 transition"
                  onClick={() => handleChooseAvatar(img)}
                />
              ))}
            </div>

            <button
              className="mt-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-white"
              onClick={() => setShowAvatarModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProfileClient;
