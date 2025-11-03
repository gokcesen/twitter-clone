"use client";
import { FiMessageCircle } from "react-icons/fi";
import { useState } from "react";

const CommentButton = ({ initialComments }) => {
    const [comments, setComments] = useState(initialComments);

        return (
            <>
                <button
                    href="#"
                    className="flex items-center gap-2 text-gray-400 text-xl"
                >
                    <FiMessageCircle size={16}/>
                    <span className="text-gray-400 text-sm">{comments}</span>
                </button>
            </>
        );

}

export default CommentButton;