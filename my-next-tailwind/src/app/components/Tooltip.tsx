"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface TooltipProps {
    trigger: ReactNode;
    children: ReactNode;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}

export default function Tooltip({
    trigger,
    children,
    position = "bottom",
    className = "",
}: TooltipProps) {
    const [open, setOpen] = useState(false);
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            const target = e.target as Node | null;
            if (tooltipRef.current && target && !tooltipRef.current.contains(target)) {
                setOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const positionClass = {
        top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
        bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
        left: "right-full top-1/2 -translate-y-1/2 mr-2",
        right: "left-full top-1/2 -translate-y-1/2 ml-2",
    }[position];

    return (
        <div ref={tooltipRef} className={`relative inline-block ${className}`}>
            <div onClick={() => setOpen(!open)} className="cursor-pointer select-none">
                {trigger}
            </div>
            {open && (
                <div
                    className={`absolute z-10 ${positionClass} bg-white text-gray-800 rounded-md shadow-lg border border-gray-200 p-3 min-w-[250px]`}
                >
                    {children}
                </div>
            )}

        </div>
    );
}
