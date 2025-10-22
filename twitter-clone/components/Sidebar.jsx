"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineHome, HiOutlineSearch, HiOutlineBookmark, HiOutlineUser } from "react-icons/hi";
import Image from 'next/image';
import logo from '/public/images/x-logo.png';

<Image src={logo} alt="Logo" width={40} height={40} />


const navLinks = [
  { name: "Home", href: "/", icon: HiOutlineHome },
  { name: "Explore", href: "/explore", icon: HiOutlineSearch },
  { name: "Bookmarks", href: "/bookmarks", icon: HiOutlineBookmark },
  { name: "Profile", href: "/profile", icon: HiOutlineUser },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-0 left-36 h-screen w-[300px] bg-[#0a0a0a] border-r border-zinc-800 text-white flex flex-col items-start p-6 space-y-4 shadow-lg">
      <div>
        <Image src={logo} alt="Icon" width={36} height={36} />
      </div>
      {navLinks.map((link) => (
        <Link
            key={link.href}
            href={link.href}
            className={`
            flex items-center gap-4
            px-4 py-2 rounded w-full text-left
            ${pathname === link.href ? "bg-[#0a0a0a] text-white" : "text-gray-300 hover:bg-gray-900"}
            `}
        >
            <link.icon size={24} />
            <span>{link.name}</span>
        </Link>
      ))}
    </aside>
  );
}