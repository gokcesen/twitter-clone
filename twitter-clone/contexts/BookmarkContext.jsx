"use client";
import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const toggleBookmark = (tweet) => {
    setBookmarks((prev) => {
      const exists = prev.find((t) => t.id === tweet.id);
      if (exists) {
        return prev.filter((t) => t.id !== tweet.id);
      }
      return [...prev, tweet];
    });
  };

  const isBookmarked = (id) => bookmarks.some((t) => t.id === id);

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const ctx = useContext(BookmarkContext);
  if (!ctx) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return ctx;
};
