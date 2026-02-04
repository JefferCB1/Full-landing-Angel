"use client";

import { motion } from "framer-motion";

const testimonials = [
    { name: "Carlos M.", role: "Agency Owner", text: "Pasé de perseguir clientes a tener leads cualificados diarios. IA Masters cambió mi negocio." },
    { name: "Elena R.", role: "Consultora", text: "La automatización me devolvió 20 horas a la semana. Ahora solo hago llamadas de cierre." },
    { name: "Javi G.", role: "E-commerce", text: "Implementé el sistema en 3 días. El ROI ha sido brutal desde la primera semana." },
    { name: "Sofia L.", role: "Coach", text: "Mis ventas son consistentes. Ya no dependo de la suerte o del boca a boca." },
];

const TestimonialCarousel = () => {
    // Duplicate list 3 times to ensure smooth infinite scroll on wide screens
    const marqueeItems = [...testimonials, ...testimonials, ...testimonials];

    return (
        <div className="w-full overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex space-x-6"
                animate={{ x: ["0%", "-33.33%"] }} // Move 1/3 since we have 3 sets
                transition={{
                    duration: 15,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {marqueeItems.map((item, idx) => (
                    <div key={idx} className="min-w-[300px] bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-iam-purple/50 transition-colors duration-300">
                        <p className="text-gray-300 text-sm mb-6 italic">&quot;{item.text}&quot;</p>
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-iam-purple to-iam-dark-purple flex items-center justify-center font-bold text-white text-xs">
                                {item.name.charAt(0)}
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">{item.name}</div>
                                <div className="text-xs text-gray-500 uppercase">{item.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TestimonialCarousel;
