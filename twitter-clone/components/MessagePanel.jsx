"use client";
import { useState } from "react";
import { IoChatboxOutline } from "react-icons/io5";
import { FiChevronUp } from "react-icons/fi";

export default function MessagePanel() {
  const [open, setOpen] = useState(false);

  return (
<div className="fixed bottom-[-8px] right-6 z-50 pb-[10px]">
      {open && (
        <div className="w-[360px] h-[350px] bg-[#0f0f0f] 
          border border-gray-800 rounded-t-2xl shadow-lg 
          mb-2 transition-all flex flex-col"
        >
          <div
            className="flex items-center justify-between px-4 py-3 
              border-b border-gray-800 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <span className="text-white font-semibold">Messages</span>
            <FiChevronUp className="text-white rotate-180" size={20} />
          </div>

          <div className="p-4 text-gray-300 overflow-y-auto">
            <p>No messages yet</p>
          </div>
        </div>
      )}

      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="w-[320px] h-[48px] bg-[#0f0f0f] 
            border border-gray-800 rounded-t-2xl shadow-xl 
            flex items-center justify-between px-4 cursor-pointer"
        >
          <span className="text-white font-medium">Messages</span>

          <div className="flex items-center gap-4 text-white">
            <IoChatboxOutline size={20} className="cursor-pointer" />
            <FiChevronUp size={18} className="cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
}
