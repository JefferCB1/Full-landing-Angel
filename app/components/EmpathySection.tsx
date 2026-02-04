"use client";

import SpotlightCard from "./ui/SpotlightCard";
import ElectricBorder from "./ui/ElectricBorder";
import { motion } from "framer-motion";

const EmpathySection = () => {
    const problems = [
        { title: "Sistemas Rotos", value: "90%", desc: "De leads se pierden por falta de seguimiento." },
        { title: "Burnout Digital", value: "24/7", desc: "Esclavitud operativa sin resultados tangibles." },
        { title: "Coste Adquisición", value: "+300%", desc: "El tráfico es más caro y menos efectivo." },
        { title: "Autoridad", value: "Nula", desc: "Te perciben como una commodity más del mercado." },
    ];

    return (
        <section className="w-full py-10 px-4 md:px-12 lg:px-24 bg-black relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT: COPY */}
                <div className="flex flex-col space-y-6 sticky top-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white leading-tight"
                    >
                        Tu Negocio se está <span className="text-iam-purple">Desangrando</span> por la Ineficiencia.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-gray-400 text-lg leading-relaxed"
                    >
                        Has comprado la mentira de los "embudos mágicos" y ahora tienes un sistema roto.
                        Leads fantasma que no contestan, agendas vacías y una facturación estancada mientras
                        trabajas el doble.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="pl-4 border-l-2 border-iam-purple"
                    >
                        <p className="text-white italic">
                            "No es culpa de tu oferta. Es culpa de un modelo obsoleto que ya no funciona en 2026."
                        </p>
                    </motion.div>
                </div>

                {/* RIGHT: SPOTLIGHT GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {problems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <ElectricBorder color="#A855F7" className="h-full">
                                <SpotlightCard className="p-6 h-full flex flex-col justify-between group bg-black/50">
                                    <div>
                                        <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-2">{item.title}</h3>
                                        <div className="text-4xl font-mono text-iam-purple font-bold mb-4">{item.value}</div>
                                    </div>
                                    <p className="text-gray-300 text-sm">{item.desc}</p>
                                </SpotlightCard>
                            </ElectricBorder>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default EmpathySection;
