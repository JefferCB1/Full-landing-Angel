"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
}

const SplitText = ({ text, className = "", delay = 0 }: SplitTextProps) => {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.12, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
        hidden: {
            opacity: 0,
            y: 20,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 200,
            },
        },
    };

    return (
        <motion.h1
            className={`overflow-hidden flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, i) => (
                <div key={i} className="inline-block whitespace-nowrap overflow-hidden mr-3 md:mr-5">
                    {word.split("").map((letter, j) => (
                        <motion.span
                            key={j}
                            variants={child}
                            className="inline-block"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            ))}
        </motion.h1>
    );
};

export default SplitText;
