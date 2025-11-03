"use client";
import { FiRepeat } from "react-icons/fi";

const RepostButton = () => {

        return (
            <>
                <button
                    href="#"
                    className="flex items-center gap-2 text-gray-400 text-xl"
                >
                    <FiRepeat size={16}/>
                    <span className="text-gray-400 text-sm">{Math.floor(Math.random() * 50) + 1}</span>
                </button>
            </>
        );

}

export default RepostButton;
