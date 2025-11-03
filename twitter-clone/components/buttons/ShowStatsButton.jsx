"use client";
import { FiBarChart2 } from "react-icons/fi";
import { useState } from "react";

const ShowStatsButton = ({ initialStats }) => {
    const [stats, setStats] = useState(initialStats);

        return (
            <>
                <button
                    href="#"
                    className="flex items-center gap-2 text-gray-400 text-xl"
                >
                    <FiBarChart2 size={16}/>
                    <span className="text-gray-400 text-sm">{stats}</span>
                </button>
            </>
        );

}

export default ShowStatsButton;