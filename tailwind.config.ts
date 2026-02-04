import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'iam-purple': '#A855F7', // Primary Purple (e.g., violet-500/purple-500)
                'iam-dark-purple': '#581c87', // Darker shade for backgrounds/depth
                'iam-black': '#000000',
                'iam-gold': '#FFB800', // Keeping gold as highlight/accent if needed
            },
        },
    },
    plugins: [],
};
export default config;
