"use client";

import { motion } from "framer-motion";

const GuaranteeSeal = () => {
    return (
        <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">

            {/* Rotating Outer Ring */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
            >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <defs>
                        <path id="circlePath" d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" />
                    </defs>
                    <text fill="#A855F7" fontSize="14" fontWeight="bold" letterSpacing="2">
                        <textPath href="#circlePath" startOffset="0%">
                            • GARANTÍA DE SATISFACCIÓN • 30 DÍAS DE PRUEBA
                        </textPath>
                    </text>
                </svg>
            </motion.div>

            {/* Inner Circle Glow */}
            <div className="absolute inset-4 rounded-full border border-iam-purple/30 bg-iam-purple/5 shadow-[0_0_50px_-10px_rgba(168,85,247,0.3)] backdrop-blur-sm" />

            {/* Center Content */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="text-4xl md:text-5xl font-black text-white">30</div>
                <div className="text-sm md:text-base font-bold text-iam-purple uppercase tracking-widest">Días</div>
                <div className="text-xs text-gray-400 mt-1">Riesgo Cero</div>
            </div>

        </div>
    );
};

export default GuaranteeSeal;
