"use client";

import { useState } from "react";

export default function SearchBar({
    placeholder = "Bạn tìm gì...",
    onSearch = (value: string) => { },
    className = "",
}) {
    const [value, setValue] = useState("");

    const handleSearch = () => {
        if (value.trim() !== "") onSearch(value);
    };

    const handleKeyDown = (e: { key: string; }) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div
            className={`flex items-center bg-white rounded-[8px] shadow-sm border border-gray-300 focus-within:ring-2 focus-within:ring-blue-400 transition ${className}`}
        >
            <button
                onClick={handleSearch}
                className="p-3 text-gray-500 hover:text-blue-500 transition"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                </svg>
            </button>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                className="flex-1 bg-transparent outline-none placeholder-gray-500 text-gray-800 pr-4"
            />
        </div>
    );
}
