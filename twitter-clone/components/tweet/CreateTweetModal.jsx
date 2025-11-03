"use client";
import { useState, useEffect } from "react";

export default function CreateTweetModal({ show, onClose }) {
	const [tweetText, setTweetText] = useState("");
	const [replyOption, setReplyOption] = useState("Everyone");

	const handlePost = () => {
		console.log("Tweet posted:", tweetText, replyOption);
		setTweetText("");
		onClose();
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "Escape" && show) {
				onClose();
			}
		};
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [show, onClose]);

	if (!show) return null;

	return (
		<div className="fixed inset-0 bg-[#0a0a0a] bg-opacity-50 flex justify-center items-start pt-24 z-50">
			<div className="bg-[#0a0a0a] rounded-xl w-full max-w-lg p-6 shadow-lg relative border border-zinc-500">
				{/* Close Button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-white font-bold text-xl hover:text-red-500 transition-colors"
				>
					×
				</button>

				{/* Reply option */}
				<div className="mb-4">
					<label className="text-gray-400 text-sm mb-1 block">
						Who can reply?
					</label>
					<select
						value={replyOption}
						onChange={(e) => setReplyOption(e.target.value)}
						className="bg-zinc-800 text-white rounded-lg p-2 w-full focus:outline-none"
					>
						<option value="Everyone">Everyone</option>
						<option value="People you follow">People you follow</option>
						<option value="Only me">Only me</option>
					</select>
				</div>

				{/* Textarea */}
				<textarea
					placeholder="What's happening?"
					value={tweetText}
					onChange={(e) => setTweetText(e.target.value)}
					className="w-full bg-zinc-800 text-white rounded-xl p-4 mb-2 resize-none h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>

				{/* Character count */}
				<p className="text-gray-500 text-sm mb-4 text-right">
					{tweetText.length} / 280
				</p>

				{/* Buttons */}
				<div className="flex justify-end gap-4">
					<button
						onClick={onClose}
						className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
					>
						Cancel
					</button>
					<button
						onClick={handlePost}
						disabled={!tweetText.trim()}
						className={`py-2 px-4 rounded font-bold text-white ${
							tweetText.trim()
								? "bg-blue-600 hover:bg-blue-700"
								: "bg-blue-900 cursor-not-allowed"
						}`}
					>
						Post
					</button>
				</div>
			</div>
		</div>
	);
}
