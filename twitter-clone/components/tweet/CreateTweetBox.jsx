"use client";

import { useState } from "react";
import { FiImage, FiSmile, FiMapPin } from "react-icons/fi";
import { TbGif } from "react-icons/tb";
import { useUser } from "@/contexts/UserContext";


export default function CreateTweetBox() {
	const [text, setText] = useState("");
	const [isPosting, setIsPosting] = useState(false);
	const { user } = useUser();

	const avatarSrc = user?.image || "/images/default-avatar.jpeg";



	const handlePost = async () => {
		if (!text.trim()) return;
		setIsPosting(true);
		try {
			const res = await fetch("/api/tweets", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ text }),
			});

			const contentType = res.headers.get("content-type");
			if (!contentType?.includes("application/json")) {
				const raw = await res.text();
				throw new Error("API did not return JSON");
			}

			const data = await res.json();
			setText("");
		} catch (err) {
			console.error("Error:", err);
		} finally {
			setIsPosting(false);
		}
	};

	return (
		<div className="flex w-[800px] top-0 border-b border-neutral-800 px-4 pt-0 pb-4 -mt-32 text-white">
			<div className="mr-4 -mt-4 ml-2">
				<div className="w-14 h-14 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
					<img
						src={avatarSrc}
						alt="User avatar"
						className="w-full h-full object-cover"
					/>
				</div>
			</div>

			<div className="flex flex-col w-full">
				<textarea
					value={text}
					onChange={(e) => setText(e.target.value)}
					placeholder="What’s happening?"
					className="w-full bg-transparent text-gray-200 text-xl resize-none focus:outline-none placeholder-gray-500"
					rows={3}
				/>

				<div className="flex items-center justify-between mt-2">
					<div className="flex gap-4 text-sky-500">
						<FiImage size={20} />
						<TbGif size={20} className="border" />
						
						<FiSmile size={20} />
						<FiMapPin size={20} />
					</div>
					<button
						onClick={handlePost}
						disabled={!text.trim() || isPosting}
						className={`px-4 py-1 rounded-3xl font-bold min-w-[72px] z-10 ${
							text.trim() && !isPosting
								? "bg-sky-500 text-white hover:bg-sky-600"
								: "bg-gray-800 text-gray-200 border border-gray-600 opacity-100"
						}`}
					>
						{isPosting ? "Posting..." : "Post"}
					</button>
				</div>
			</div>
		</div>
	);
}
