"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LikeContext = createContext();

export function LikeProvider({ children }) {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("likes");
    if (saved) setLikes(JSON.parse(saved));
    else setLikes([]);
  }, []);

  useEffect(() => {
    if (likes !== null) {
      localStorage.setItem("likes", JSON.stringify(likes));
    }
  }, [likes]);

  const toggleLike = (tweet) => {
    setLikes((prev) => {
      const exists = prev.find((l) => l.id === tweet.id);

      if (exists) {
        return prev.filter((l) => l.id !== tweet.id);
      }

      return [...prev, { ...tweet, likedAt: Date.now() }];
    });
  };

  const isLiked = (tweetId) => {
    if (!likes) return false;
    return likes.some((l) => l.id === tweetId);
  };

  if (likes === null) return null;

  return (
    <LikeContext.Provider value={{ likes, toggleLike, isLiked }}>
      {children}
    </LikeContext.Provider>
  );
}

export function useLikes() {
  const ctx = useContext(LikeContext);
  if (!ctx) throw new Error("Error");
  return ctx;
}
