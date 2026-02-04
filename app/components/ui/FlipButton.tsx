"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assuming utils exists, or I will create a simple internal helper if needed. 
// Actually, I'll inline the helper to avoid issues since I haven't checked for 'lib/utils'

const DURATION = 0.25;
const STAGGER = 0.025;

type FlipButtonProps = {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    variant?: "default" | "outline" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
};

import Link from "next/link";

export const FlipButton = ({ children, className, href, onClick, ...props }: any) => {
    if (href) {
        return (
            <Link href={href} className={className}>
                <motion.div
                    initial="initial"
                    whileHover="hovered"
                    className={`relative block overflow-hidden whitespace-nowrap uppercase font-bold tracking-wider`}
                    style={{ lineHeight: 1 }}
                >
                    {children}
                </motion.div>
            </Link>
        );
    }

    return (
        <motion.button
            initial="initial"
            whileHover="hovered"
            className={`relative block overflow-hidden whitespace-nowrap uppercase font-bold tracking-wider ${className}`}
            style={{ lineHeight: 1 }}
            onClick={onClick}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export const FlipButtonFront = ({ children, className, variant = "default" }: { children: React.ReactNode; className?: string; variant?: string; size?: string }) => {
    // Style mapping based on variant
    let bgClass = "bg-[#A855F7] text-white"; // default purple
    if (variant === "outline") bgClass = "border border-[#A855F7] text-[#A855F7]";
    if (variant === "gold") bgClass = "bg-[#FFB800] text-black";

    return (
        <div className={`relative px-8 py-4 ${bgClass} ${className}`}>
            {/* We use a masking effect or just replace content. 
            For a true "Flip" letter by letter, we need to split children if it's text.
            If children is a component (like Icon), we flip the whole thing. */}
            {typeof children === "string" ? (
                <div className="flex">
                    {children.split("").map((l, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: 0 },
                                hovered: { y: "-100%" },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </div>
            ) : (
                <motion.div
                    variants={{
                        initial: { y: 0 },
                        hovered: { y: "-100%" },
                    }}
                    transition={{ duration: DURATION, ease: "easeInOut" }}
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};

export const FlipButtonBack = ({ children, className, variant = "default" }: { children: React.ReactNode; className?: string; variant?: string; size?: string }) => {
    let bgClass = "bg-[#9333EA] text-white"; // darker purple
    if (variant === "gold") bgClass = "bg-[#E0A800] text-black";

    return (
        <div className={`absolute inset-0 flex items-center justify-center pointer-events-none ${bgClass} ${className}`}>
            {typeof children === "string" ? (
                <div className="flex items-center justify-center w-full h-full">
                    {children.split("").map((l, i) => (
                        <motion.span
                            key={i}
                            variants={{
                                initial: { y: "100%" },
                                hovered: { y: 0 },
                            }}
                            transition={{
                                duration: DURATION,
                                ease: "easeInOut",
                                delay: STAGGER * i,
                            }}
                            className="inline-block"
                        >
                            {l === " " ? "\u00A0" : l}
                        </motion.span>
                    ))}
                </div>
            ) : (
                <motion.div
                    variants={{
                        initial: { y: "100%" },
                        hovered: { y: 0 },
                    }}
                    transition={{ duration: DURATION, ease: "easeInOut" }}
                    className="flex items-center justify-center w-full h-full"
                >
                    {children}
                </motion.div>
            )}
        </div>
    );
};
