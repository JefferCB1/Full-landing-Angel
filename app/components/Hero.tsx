"use client";

import Image from "next/image";
import SplitText from "./ui/SplitText";
import CustomForm from "./ui/CustomForm";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-20">

            {/* ABSOLUTE BACKGROUND IMAGE (RIGHT) */}
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] z-0">
                {/* Image Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative w-full h-full"
                >
                    <Image
                        src="/images/angel-portrait.jpg"
                        alt="Angel Aparicio - IA Masters"
                        fill
                        className="object-cover object-center md:object-top opacity-50 md:opacity-100"
                        priority
                    />
                </motion.div>

                {/* Gradient Masak (Blend to Black) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />

                {/* Purple Glow Accent */}
                <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#A855F7] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none z-10" />
            </div>

            {/* CONTENT (LEFT) */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 md:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <div className="flex flex-col items-start space-y-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center space-x-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 mb-6 backdrop-blur-md">
                            <span className="w-2 h-2 rounded-full bg-iam-purple animate-pulse" />
                            <span className="text-gray-300 text-xs uppercase tracking-wider font-semibold">IA Masters System</span>
                        </div>

                        {/* Headline */}
                        <div className="w-full max-w-4xl">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-4">
                                Crea tu Agencia de
                                <span className="block text-[#A855F7]">Inteligencia Artificial</span>
                            </h1>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-gray-300 text-lg max-w-lg leading-relaxed font-light"
                    >
                        Descubre el sistema exacto para facturar <span className="text-white">+4.000€/mes</span> instalando agentes de IA en 48h, sin experiencia técnica previa.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="w-full"
                    >
                        {/* FORMULARIO */}
                        <CustomForm />
                    </motion.div>
                </div>

                {/* Empty Right Column */}
                <div className="hidden md:block" />
            </div>

        </section>
    );
};

export default Hero;
