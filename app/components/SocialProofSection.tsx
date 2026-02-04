"use client";

import TestimonialCarousel from "./ui/TestimonialCarousel";
import CountUp from "./ui/CountUp";
import { motion } from "framer-motion";

const SocialProofSection = () => {
    return (
        <section className="w-full py-10 px-4 md:px-12 lg:px-24 bg-black relative z-10 border-t border-white/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: STATS & AUTHORITY */}
                <div className="flex flex-col space-y-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Resultados, no promesas. <br />
                        <span className="text-iam-purple">Los números hablan.</span>
                    </h2>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 flex items-center">
                                +<CountUp to={1100} separator="," duration={2} />
                            </div>
                            <div className="text-sm text-iam-purple uppercase font-bold tracking-wider mt-2">Alumnos Formados</div>
                        </div>
                        <div>
                            <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 flex items-center">
                                +<CountUp to={2000000} separator="," duration={2} />€
                            </div>
                            <div className="text-sm text-iam-purple uppercase font-bold tracking-wider mt-2">Generados en Ventas</div>
                        </div>
                    </div>

                    <p className="text-gray-400 max-w-md">
                        No somos teóricos. Somos operadores que gestionan campañas activas todos los días.
                        Lo que enseñamos es lo que aplicamos.
                    </p>
                </div>

                {/* RIGHT: CAROUSEL */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="w-full"
                >
                    <TestimonialCarousel />
                </motion.div>

            </div>
        </section>
    );
};

export default SocialProofSection;
