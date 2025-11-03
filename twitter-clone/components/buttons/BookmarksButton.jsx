"use client";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useState } from "react";

const BookmarksButton = () => {
    const [isBookmark, setIsBookmark] = useState(false);

    const toggleBookmarks = () => {
        setIsBookmark(!isBookmark);
    }

        return (
            <>
                <button
                     className="flex items-center gap-2 text-gray-400 text-xl"
                           onClick={(e) => {
                             e.preventDefault();     
                             e.stopPropagation();     
                             toggleBookmarks();       
                           }}
                >
                    {isBookmark ? <BsBookmarkFill size={16} /> : <BsBookmark size={16} />}
                </button>
            </>
        );

}

export default BookmarksButton;
