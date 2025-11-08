"use client";
import { createContext, useContext, useState } from "react";

const RepostContext = createContext();

export function RepostProvider({ children }) {
  const [reposts, setReposts] = useState([]); 

  const toggleRepost = (tweet) => {
    setReposts((prev) => {
      const exists = prev.find((t) => t.id === tweet.id);
      if (exists) {
        return prev.filter((t) => t.id !== tweet.id);
      }
      return [...prev, tweet];
    });
  };

  const isReposted = (id) => {
    return reposts.some((t) => t.id === id);
  };

  return (
    <RepostContext.Provider value={{ reposts, toggleRepost, isReposted }}>
      {children}
    </RepostContext.Provider>
  );
}

export function useReposts() {
  const ctx = useContext(RepostContext);
  if (!ctx) throw new Error("Error");
  return ctx;
}
