"use client";

import { motion } from "framer-motion";
import CountUp from "./CountUp";

const DashboardMockup = () => {
    return (
        <div className="relative w-full aspect-video bg-black/40 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Top Bar */}
            <div className="h-10 border-b border-white/10 flex items-center px-4 space-x-2 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>

            {/* Content Grid */}
            <div className="p-6 grid grid-cols-3 gap-4 h-full">

                {/* Sidebar */}
                <div className="col-span-1 space-y-3">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-8 w-full bg-white/5 rounded-md animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                </div>

                {/* Main Area */}
                <div className="col-span-2 space-y-4">
                    {/* Graph Simulation */}
                    <div className="w-full h-32 bg-gradient-to-t from-iam-gold/20 to-transparent rounded-lg border border-iam-gold/30 relative overflow-hidden">
                        <motion.div
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className="absolute bottom-0 left-0 w-full h-full origin-bottom bg-[url('/grid.svg')] opacity-30"
                        />
                        <svg className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
                            <motion.path
                                d="M0,100 Q50,50 100,80 T200,40 T300,60 T400,10 "
                                fill="none"
                                stroke="#FFB800"
                                strokeWidth="2"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, ease: "easeInOut" }}
                            />
                        </svg>
                    </div>

                    {/* Stats Row */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
                            <div className="text-xs text-gray-400">Total Revenue</div>
                            <div className="text-xl text-white font-bold mt-1">€<CountUp to={12450} separator="," /></div>
                        </div>
                        <div className="h-20 bg-white/5 rounded-lg border border-white/10 p-3">
                            <div className="text-xs text-gray-400">Leads Generated</div>
                            <div className="text-xl text-iam-gold font-bold mt-1"><CountUp to={452} /></div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Floating Elements (Notifications) */}
            <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-16 right-4 bg-iam-black border border-iam-gold/40 p-3 rounded-lg shadow-lg flex items-center space-x-3 z-10"
            >
                <div className="w-2 h-2 rounded-full bg-iam-gold animate-ping" />
                <div className="text-xs text-white">New high-ticket lead closed</div>
            </motion.div>
        </div>
    );
};

export default DashboardMockup;
