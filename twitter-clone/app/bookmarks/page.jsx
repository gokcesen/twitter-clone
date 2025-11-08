"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { useBookmarks } from "../../contexts/BookmarkContext";
import TweetCard from "@/components/tweet/TweetCard";

export default function BookmarksPage() {
  const { bookmarks, toggleBookmark } = useBookmarks();

  return (
    <main className="flex justify-center mt-8">
      <div className="w-full max-w-2xl flex flex-col gap-6">
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#0a0a0a] text-white px-3 py-2 rounded-lg shadow hover:bg-gray-900 transition-colors"
          >
            <FaArrowLeft size={20} className="text-white drop-shadow-md" />
          </Link>
          <span className="text-xl font-bold">Bookmarks</span>
        </div>

        {bookmarks.length === 0 ? (
          <p className="text-gray-400 text-center mt-6">
            No Bookmarks
          </p>
        ) : (
          bookmarks.map((tweet) => (
            <div key={tweet.id} className="relative">
              <TweetCard tweet={tweet} />

            </div>
          ))
        )}
      </div>
    </main>
  );
}
