"use client";
import { createContext, useContext, useState, useEffect } from "react";

const RepostContext = createContext();

export function RepostProvider({ children }) {
  const [reposts, setReposts] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("reposts");
    if (saved) {
      setReposts(JSON.parse(saved));
    } else {
      setReposts([]); 
    }
  }, []);

  useEffect(() => {
    if (reposts !== null) {
      localStorage.setItem("reposts", JSON.stringify(reposts));
    }
  }, [reposts]);

  const toggleRepost = (tweet) => {
    setReposts((prev) => {
      const exists = prev.find((t) => t.id === tweet.id);
      if (exists) {
        return prev.filter((t) => t.id !== tweet.id);
      }
      return [...prev, { ...tweet, repostAt: new Date().toISOString() }];
    });
  };

  const isReposted = (id) => {
    if (reposts === null) return false;
    return reposts.some((t) => t.id === id);
  };

  if (reposts === null) return null; 

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
