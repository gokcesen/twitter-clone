"use client";

import { useState } from "react";
import { FiImage, FiSmile, FiUser } from "react-icons/fi";

export default function CreateTweetBox() {
  const [text, setText] = useState("");

  return (
    <div className="flex w-[800px] top-0 border-b border-neutral-800 px-4 pt-0 pb-4 -mt-20 text-white">
      <div className="mr-4">
        <div className="w-12 h-12 rounded-full bg-gray-600 flex items-center justify-center">
                                <FiUser size={32} className="text-white" />
        </div>
      </div>

      <div className="flex flex-col w-full">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What’s happening?"
          className="w-full bg-transparent text-gray-200 text-lg resize-none focus:outline-none placeholder-gray-500"
          rows={3}
        />

        <div className="flex items-center justify-between mt-2">
          <div className="flex gap-4 text-sky-500">
            <FiImage size={20} />
            <FiSmile size={20} />
          </div>

          <button
            disabled={!text.trim()}
            className={`px-4 py-1 rounded-3xl font-bold ${
              text.trim()
                ? "bg-sky-500 text-white hover:bg-sky-600"
                : "bg-gray-700 text-gray-400 cursor-not-allowed"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
