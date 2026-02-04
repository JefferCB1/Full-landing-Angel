"use client";

import { ShinyButton } from "./ShinyButton";
import { PlusIcon } from "lucide-react";

const CustomForm = () => {
    return (
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Reserva Tu Plaza</span>
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            </div>

            <form className="space-y-4" onSubmit={(e) => {
                e.preventDefault();
                alert("¡Solicitud recibida! Te contactaremos pronto.");
            }}>

                {/* Inputs */}
                <div className="space-y-2">
                    <label className="text-xs text-gray-400 ml-1">WhatsApp</label>
                    <div className="flex bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/10 focus-within:border-iam-purple transition-colors">
                        <div className="bg-black/40 px-3 py-3 text-white text-sm border-r border-white/10 flex items-center">
                            +34
                        </div>
                        <input
                            type="tel"
                            placeholder="600 000 000"
                            required
                            className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-gray-600 font-mono"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-xs text-gray-400 ml-1">Email</label>
                    <input
                        type="email"
                        placeholder="tu@email.com"
                        required
                        className="w-full bg-[#1a1a1a] rounded-lg px-4 py-3 text-white outline-none border border-white/10 focus:border-iam-purple transition-colors placeholder:text-gray-600"
                    />
                </div>

                {/* Flip Button CTA */}
                <div className="pt-2">
                    <div className="pt-2">
                        <ShinyButton className="w-full justify-center bg-[#A855F7] hover:bg-[#9333EA] transition-colors" type="submit">
                            QUIERO LA CLASE GRATIS
                        </ShinyButton>
                    </div>
                </div>

                <p className="text-[10px] text-center text-gray-500 mt-4">
                    Al registrarte aceptas nuestra política de privacidad. 0% Spam.
                </p>
            </form>
        </div>
    );
};

export default CustomForm;
