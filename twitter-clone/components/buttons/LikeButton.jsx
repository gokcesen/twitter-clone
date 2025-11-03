"use client";

import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const LikeButton = ({ initialLikes }) => {
	const [liked, setLiked] = useState(false);
	const [likes, setLikes] = useState(initialLikes);

	const toggleLike = (e) => {
		e.preventDefault();
		setLiked(!liked);
		setLikes((prev) => (liked ? prev - 1 : prev + 1));
	};

	return (
		<>
			<button
				href="#"
				onClick={toggleLike}
				className="flex items-center gap-2 text-gray-400 text-xl"
			>
				{liked ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
				<span className="text-gray-400 text-sm">{likes}</span>
			</button>
		</>
	);
};

export default LikeButton;
