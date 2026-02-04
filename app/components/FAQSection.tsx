"use client";

import Accordion from "./ui/Accordion";
import GuaranteeSeal from "./ui/GuaranteeSeal";
import CustomForm from "./ui/CustomForm";
import { motion } from "framer-motion";

const FAQSection = () => {
    const faqs = [
        {
            question: "¿Necesito saber programar para aplicar esto?",
            answer: "Absolutamente no. Enseñamos sistemas Low-Code y No-Code. Si sabes usar Excel y Gmail, puedes montar este sistema."
        },
        {
            question: "¿Funciona para [MI NICHO]?",
            answer: "Los principios de persuasión y automatización son universales. Tenemos alumnos en Real Estate, E-commerce, Infoproductos y Agencias."
        },
        {
            question: "¿Qué pasa si no recupero la inversión?",
            answer: "Tienes nuestra garantía de 30 días. Si aplicas el método y no ves resultados (algo que nunca ha pasado), te devolvemos el 100% de tu dinero."
        },
        {
            question: "¿Cuánto tiempo necesito dedicarle?",
            answer: "El objetivo es automatizar, no darte más trabajo. Al principio requerirá configuración (aprox. 5-10h), luego el sistema trabaja por ti."
        }
    ];

    return (
        <section className="w-full py-10 px-4 md:px-12 lg:px-24 relative z-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* LEFT: FAQ ACCORDION */}
                <div className="w-full">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">
                        Preguntas <span className="text-iam-purple">Frecuentes</span>
                    </h2>
                    <div className="w-full">
                        {faqs.map((faq, idx) => (
                            <Accordion key={idx} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>

                {/* RIGHT: GUARANTEE & FINAL CTA */}
                <div className="flex flex-col items-center justify-center space-y-12 py-12 lg:py-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <GuaranteeSeal />
                    </motion.div>

                    <div className="w-full max-w-md mx-auto">
                        <CustomForm />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FAQSection;
