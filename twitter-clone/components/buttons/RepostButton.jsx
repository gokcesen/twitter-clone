"use client";
import { FiRepeat } from "react-icons/fi";
import { useReposts } from "@/contexts/RepostContext";

const RepostButton = ({ tweet }) => {
  const { toggleRepost, isReposted } = useReposts();
  const active = tweet ? isReposted(tweet.id) : false;

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (tweet) toggleRepost(tweet);
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 text-xl transition-colors ${
        active ? "text-green-400 font-bold" : "text-gray-400"
      }`}
    >
      <FiRepeat size={18} />
      <span className="text-sm">{Math.floor(Math.random() * 50) + 1}</span>
    </button>
  );
};

export default RepostButton;
