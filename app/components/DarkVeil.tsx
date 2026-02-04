"use client";

import { useEffect, useRef } from "react";

const DarkVeil = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resize);
        resize();

        const render = () => {
            time += 0.005;
            const w = canvas.width;
            const h = canvas.height;

            // Simple noise/gradient simulation for "DarkVeil"
            // We create a deep dark texture that shifts slightly

            const gradient = ctx.createRadialGradient(
                w / 2 + Math.sin(time) * 100,
                h / 2 + Math.cos(time) * 50,
                0,
                w / 2,
                h / 2,
                Math.max(w, h)
            );

            // Core center - very dark grey, fading to pure black
            gradient.addColorStop(0, "rgba(20, 20, 20, 1)");
            gradient.addColorStop(0.5, "rgba(5, 5, 5, 1)");
            gradient.addColorStop(1, "rgba(0, 0, 0, 1)");

            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, w, h);

            // Add subtle noise grain
            const imageData = ctx.getImageData(0, 0, w, h);
            const data = imageData.data;

            // Optimization: Apply noise to a smaller offscreen canvas or just skip heavy pixel manipulation for performance
            // For now, we use a lightweight overlay effect

            ctx.fillStyle = "rgba(255, 184, 0, 0.02)"; // Subtle Gold tint low opacity
            ctx.globalCompositeOperation = "overlay";
            ctx.fillRect(0, 0, w, h);
            ctx.globalCompositeOperation = "source-over";

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-[-1] pointer-events-none"
            style={{ background: "#000000" }}
        />
    );
};

export default DarkVeil;
