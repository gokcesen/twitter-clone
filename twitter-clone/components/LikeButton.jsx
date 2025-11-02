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
				className="flex items-center gap-2 text-white text-xl"
			>
				{liked ? <FaHeart /> : <FaRegHeart />}
				<span className="text-white text-sm">{likes}</span>
			</button>
		</>
	);
};

export default LikeButton;
