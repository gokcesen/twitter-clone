"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import TweetCard from "@/components/tweet/TweetCard";

export default function RepostModal({ show, onClose, tweet, onSubmit }) {
  const [comment, setComment] = useState("");
  const [isPosting, setIsPosting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && show) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [show, onClose]);

  if (!show) return null;

  const handlePost = async () => {
    if (isPosting) return;

    setIsPosting(true);
    await onSubmit(comment);
    setComment("");
    setIsPosting(false);
    onClose();
  };

  const modalContent = (
    <div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-50 flex justify-center items-start pt-24 z-[9999]">
      <div className="bg-[#0a0a0a] rounded-xl w-full max-w-lg p-6 shadow-lg relative border border-zinc-500 z-[10000]">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white font-bold text-xl hover:text-red-500 transition-colors"
        >
          ×
        </button>

        <h2 className="text-white text-lg font-semibold mb-4">
          Add a comment
        </h2>

        <textarea
          placeholder="Add a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full bg-zinc-800 text-white rounded-xl p-4 mb-2 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <p className="text-gray-500 text-sm mb-4 text-right">
          {comment.length} / 280
        </p>

        <div className="border border-gray-700 rounded-xl p-3 bg-black/40 mb-6">
          <TweetCard tweet={tweet} small />
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          >
            Cancel
          </button>

          <button
            onClick={handlePost}
            disabled={isPosting}
            className={`py-2 px-4 rounded font-bold text-white ${
              !isPosting
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-blue-900 cursor-not-allowed"
            }`}
          >
            {isPosting ? "Posting..." : "Post"}
          </button>
        </div>

      </div>
    </div>
  );

  if (typeof window !== "undefined") {
    return createPortal(modalContent, document.body);
  }

  return null;
}
