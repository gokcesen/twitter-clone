"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	HiOutlineHome,
	HiOutlineSearch,
	HiOutlineBookmark,
	HiOutlineUser,
} from "react-icons/hi";
import Image from "next/image";
import logo from "/public/images/x-logo.png";
import { FiUser } from "react-icons/fi";
import { useState } from "react";
import CreateTweetModal from "@/components/CreateTweetModal";

<Image src={logo} alt="Logo" width={40} height={40} />;

const navLinks = [
	{ name: "Home", href: "/", icon: HiOutlineHome },
	{ name: "Explore", href: "/explore", icon: HiOutlineSearch },
	{ name: "Bookmarks", href: "/bookmarks", icon: HiOutlineBookmark },
	{ name: "Profile", href: "/profile", icon: HiOutlineUser },
];

export default function Sidebar() {
	const pathname = usePathname();
	const [showModal, setShowModal] = useState(false);

	return (
		<div className="mb-5">
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
              ${
								pathname === link.href
									? "bg-[#0a0a0a] text-white"
									: "text-gray-300 hover:bg-gray-900"
							}
              `}
					>
						<link.icon size={24} />
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

				<div className="flex items-center space-x-3 p-2 hover:bg-gray-900 rounded cursor-pointer mt-auto">
					<div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center">
						<FiUser size={24} className="text-white" />
					</div>
					<div className="flex flex-col">
						<span className="font-semibold">John Doe</span>
						<span className="text-sm text-gray-400">@johndoe</span>
					</div>
				</div>
			</aside>
		</div>
	);
}
