"use client";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useBookmarks } from "@/contexts/BookmarkContext";

const BookmarksButton = ({ tweet }) => {
  const { toggleBookmark, isBookmarked } = useBookmarks();
  const bookmarked = isBookmarked(tweet.id);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleBookmark(tweet);
  };

  return (
    <button
      className="flex items-center gap-2 text-gray-400 text-xl"
      onClick={handleClick}
    >
      {bookmarked ? (
        <BsBookmarkFill size={16} />
      ) : (
        <BsBookmark size={16} />
      )}
    </button>
  );
};

export default BookmarksButton;

