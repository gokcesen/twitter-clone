'use client';

import Link from "next/link";
import { useState } from "react";
import { FaThumbsDown, FaRegThumbsDown } from "react-icons/fa";

const DislikeButton = ({ initialDislikes }) => {
    const [disliked, setDisliked] = useState(false);
    const [dislikes, setDislikes] = useState(initialDislikes);

    const toggleDislike = (e) => {
        e.preventDefault(); 
        setDisliked(!disliked);
        setDislikes((prev) => (disliked ? prev - 1 : prev + 1));
      };

    return(
        <>
             <Link href="#" onClick={toggleDislike} className="flex items-center gap-2 text-white text-xl">
                {disliked ? <FaThumbsDown /> : <FaRegThumbsDown />}
                <span className="text-white text-sm">{dislikes}</span>
            </Link>
        </>
    );
}

export default DislikeButton;