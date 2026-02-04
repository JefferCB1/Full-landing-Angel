"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface MagnetButtonProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

const MagnetButton = ({ children, className = "", onClick }: MagnetButtonProps) => {
    const ref = useRef<HTMLButtonElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15 });
    const springY = useSpring(y, { stiffness: 150, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        const element = ref.current;
        if (!element) return;

        const { left, top, width, height } = element.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const mouseX = e.clientX;
        const mouseY = e.clientY;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        // Magnetic pull strength
        x.set(distanceX * 0.35);
        y.set(distanceY * 0.35);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            style={{ x: springX, y: springY }}
            className={`relative inline-flex items-center justify-center px-8 py-4 font-bold text-black uppercase tracking-wider bg-[#FFB800] rounded-none hover:bg-[#FF8A00] transition-colors duration-300 ${className}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {children}
        </motion.button>
    );
};

export default MagnetButton;
