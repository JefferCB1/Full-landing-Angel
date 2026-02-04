"use client";

import React from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import Link from "next/link";

interface ShinyButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    className?: string;
    href?: string;
}

export const ShinyButton = ({ children, className, href, onClick, ...props }: ShinyButtonProps) => {
    const content = (
        <motion.div
            initial="initial"
            whileHover="hovered"
            className={`relative px-8 py-4 rounded-lg bg-iam-purple text-white font-bold uppercase tracking-wider overflow-hidden group ${className}`}
        >
            <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 3,
                    ease: "linear",
                    repeatDelay: 1
                }}
                className="absolute inset-0 z-10 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
            />

            <span className="relative z-20 flex items-center justify-center gap-2">
                {children}
            </span>

            {/* Glow effect */}
            <motion.div
                variants={{
                    initial: { opacity: 0 },
                    hovered: { opacity: 1 }
                }}
                className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 pointer-events-none"
            />
        </motion.div>
    );

    if (href) {
        return (
            <Link href={href} className="block w-full">
                {content}
            </Link>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.98 }}
            onClick={onClick}
            className={`block w-full outline-none focus:outline-none`}
            {...props}
        >
            {content}
        </motion.button>
    );
};
