"use client";

import DashboardMockup from "./ui/DashboardMockup";
import { motion } from "framer-motion";

const SolutionSection = () => {
    const pillars = [
        { num: "01", title: "Ingeniería de Persuasión", desc: "Copywriting y psicología de ventas aplicada a escala." },
        { num: "02", title: "Automatización Low-Code", desc: "Sistemas que operan 24/7 sin tu intervención manual." },
        { num: "03", title: "Inteligencia Artificial", desc: "Agentes autónomos que cualifican y cierran ventas." },
    ];

    return (
        <section className="w-full py-10 px-4 md:px-12 lg:px-24 bg-gradient-to-b from-black to-zinc-950 relative z-10 overflow-hidden">

            {/* Background Noise/Grid optional */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT: 3 PILLARS */}
                <div className="flex flex-col space-y-12">

                    <div className="space-y-4">
                        <span className="text-iam-purple uppercase tracking-widest text-xs font-bold">El Mecanismo Único</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            El <span className="text-white">Triángulo de Oro</span> de los Negocios Digitales.
                        </h2>
                    </div>

                    <div className="space-y-8">
                        {pillars.map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.2, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex items-start space-x-6 group"
                            >
                                <div className="text-5xl font-black text-white/5 group-hover:text-iam-purple/20 transition-colors duration-500">
                                    {pillar.num}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                    <p className="text-gray-400">{pillar.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>

                {/* RIGHT: MOCKUP */}
                <div className="relative">
                    {/* Glow behind */}
                    <div className="absolute inset-0 bg-iam-purple/10 blur-[100px] rounded-full pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 10 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                        viewport={{ once: true }}
                        style={{ perspective: "1000px" }}
                    >
                        <DashboardMockup />
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default SolutionSection;
