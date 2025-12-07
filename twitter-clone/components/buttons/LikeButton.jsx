"use client";

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useLikes } from "@/contexts/LikeContext";

const LikeButton = ({ tweet, initialLikes }) => {
  const { toggleLike, isLiked } = useLikes();

  const liked = isLiked(tweet.id);
  const [likes, setLikes] = useState(initialLikes || 0);

  const handleClick = (e) => {
    e.preventDefault();
    const wasLiked = liked;

    toggleLike(tweet);

    setLikes((prev) => {
      if (wasLiked) return prev > 0 ? prev - 1 : 0;
      return prev + 1;
    });
  };

  return (
    <button
      onClick={handleClick}
      className="flex items-center gap-2 text-gray-400 text-xl"
    >
      {liked ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
      <span className="text-gray-400 text-sm">{likes}</span>
    </button>
  );
};

export default LikeButton;
