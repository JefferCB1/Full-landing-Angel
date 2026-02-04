"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionProps {
    question: string;
    answer: string;
}

const Accordion = ({ question, answer }: AccordionProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-white/10">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
            >
                <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? "text-iam-purple" : "text-white group-hover:text-gray-300"}`}>
                    {question}
                </span>
                <span className={`relative ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center`}>
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        className="absolute w-full h-[2px] bg-iam-purple"
                    />
                    <motion.span
                        animate={{ rotate: isOpen ? 45 : 90 }}
                        className="absolute w-full h-[2px] bg-iam-purple"
                    />
                </span>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-gray-400 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Accordion;
