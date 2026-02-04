"use client";

import LogoLoop from "./ui/LogoLoop";
import { SiOpenai, SiZapier, SiReact, SiPython, SiNodedotjs, SiGoogle, SiMake } from "react-icons/si";
import { motion } from "framer-motion";

const techLogos = [
    { node: <SiOpenai />, title: "OpenAI", href: "https://openai.com" },
    { node: <SiZapier />, title: "Zapier", href: "https://zapier.com" },
    { node: <SiMake />, title: "Make", href: "https://www.make.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiGoogle />, title: "Google Cloud", href: "https://cloud.google.com" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
];

const TechStackSection = () => {
    return (
        <section className="w-full py-2 bg-black border-y border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-12 lg:px-24 mb-2 text-center">
                <span className="text-iam-purple text-xs font-bold tracking-widest uppercase">
                    Stack Tecnológico & Integraciones
                </span>
            </div>

            <div style={{ height: '70px', position: 'relative', overflow: 'hidden' }}>
                <LogoLoop
                    logos={techLogos}
                    speed={50}
                    direction="left"
                    logoHeight={50}
                    gap={80}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#000000"
                    ariaLabel="Technology partners"
                    className="opacity-50 hover:opacity-100 transition-opacity duration-300"
                />
            </div>
        </section>
    );
};

export default TechStackSection;
