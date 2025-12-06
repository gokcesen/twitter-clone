"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineHome,
  HiHome,
  HiOutlineSearch,
  HiSearch,
  HiOutlineBookmark,
  HiBookmark,
  HiOutlineUser,
  HiUser,
} from "react-icons/hi";

import Image from "next/image";
import logo from "/public/images/x-logo.png";
import { useState } from "react";
import CreateTweetModal from "@/components/tweet/CreateTweetModal";
import { useUser } from "@/contexts/UserContext"; // 🔥 EKLENDİ

const navLinks = [
  { name: "Home", href: "/", icon: HiOutlineHome, filledIcon: HiHome },
  {
    name: "Explore",
    href: "/explore",
    icon: HiOutlineSearch,
    filledIcon: HiSearch,
  },
  {
    name: "Bookmarks",
    href: "/bookmarks",
    icon: HiOutlineBookmark,
    filledIcon: HiBookmark,
  },
  {
    name: "Profile",
    href: "/profile",
    icon: HiOutlineUser,
    filledIcon: HiUser,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState(false);

  const { user } = useUser(); // 🔥 useAuth yerine bu geldi

  return (
    <div className="hidden lg:block mb-5">
      <aside className="fixed top-0 left-36 h-screen w-[300px] bg-[#0a0a0a] border-r border-zinc-800 text-white flex flex-col items-start p-6 space-y-4 shadow-lg">
        <div className="px-2">
          <Image src={logo} alt="Icon" width={36} height={36} />
        </div>

        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex items-center gap-4
              px-4 py-2 rounded w-fit text-left
              ${
                pathname === link.href
                  ? "bg-[#0a0a0a] text-white text-lg font-bold"
                  : "text-gray-300 hover:bg-zinc-800 rounded-3xl text-lg"
              }
              `}
          >
            {pathname === link.href ? (
              <link.filledIcon size={24} className="text-white" />
            ) : (
              <link.icon size={24} className="text-gray-300" />
            )}

            <span>{link.name}</span>
          </Link>
        ))}

        <button
          onClick={() => setShowModal(true)}
          className="bg-white text-black font-bold py-2 px-4 border rounded-3xl w-full h-12"
        >
          Post
        </button>

        <CreateTweetModal
          show={showModal}
          onClose={() => setShowModal(false)}
        />

        <Link
          href="/profile"
          className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded cursor-pointer mt-auto transition-colors"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
            <img
              src={user?.image || "/images/default-avatar.jpeg"} // 🔥 Avatar artık userContext’ten
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-semibold">
              {user?.firstName} {user?.lastName}
            </span>

            <span className="text-sm text-gray-400">@{user?.username}</span>
          </div>
        </Link>
      </aside>
    </div>
  );
}
