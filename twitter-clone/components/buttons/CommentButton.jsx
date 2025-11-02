"use client";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const CommentButton = ({ initialComments }) => {
    const [comments, setComments] = useState(initialComments);

        return (
            <>
                <button
                    href="#"
                    className="flex items-center gap-2 text-white text-xl"
                >
                    <FiMessageCircle />
                    <span className="text-white text-sm">{comments}</span>
                </button>
            </>
        );

}

export default CommentButton;