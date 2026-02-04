"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    zIndex?: number;
}

const ScrollReveal = ({ children, className = "", zIndex = 0 }: ScrollRevealProps) => {
    return (
        <div
            className={`relative w-full ${className}`}
            style={{ zIndex }}
        >
            <div className="sticky top-0 w-full overflow-hidden">
                {children}
            </div>
        </div>
    );
};

export default ScrollReveal;
