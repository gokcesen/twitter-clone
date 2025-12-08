"use client";
import { FiRepeat } from "react-icons/fi";
import { useReposts } from "@/contexts/RepostContext";
import { useState, useEffect, useRef } from "react";

const RepostButton = ({ tweet }) => {
  const { toggleRepost, isReposted } = useReposts();
  const [openMenu, setOpenMenu] = useState(false);
  const menuRef = useRef(null);

  const active = tweet ? isReposted(tweet.id) : false;

  const handleMainClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenMenu((prev) => !prev);
  };

  const handleRepost = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleRepost(tweet); 
    setOpenMenu(false);
  };

  const handleQuote = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    toggleRepost({ ...tweet, quoted: true });
  
    setOpenMenu(false);
  };
  

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openMenu]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={handleMainClick}
        className={`flex items-center gap-2 text-xl transition-colors ${
          active ? "text-green-400 font-bold" : "text-gray-400"
        }`}
      >
        <FiRepeat size={18} />
        <span className="text-sm">{Math.floor(Math.random() * 50) + 1}</span>
      </button>

      {openMenu && (
        <div
          className="absolute top-8 left-0 bg-[#111] border border-gray-700 rounded-lg shadow-lg w-36 z-50 py-2"
          onClick={(e) => e.stopPropagation()}
        >

          <button
            onClick={handleRepost}
            className="w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
          >
            {active ? "Undo Repost" : "Repost"}
          </button>

          <button
            onClick={handleQuote}
            className="w-full text-left px-4 py-2 hover:bg-gray-800 text-white"
          >
            Quote
          </button>

        </div>
      )}
    </div>
  );
};

export default RepostButton;
