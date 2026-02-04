import Hero from "./components/Hero";
import EmpathySection from "./components/EmpathySection";
import SolutionSection from "./components/SolutionSection";
import TechStackSection from "./components/TechStackSection";
import SocialProofSection from "./components/SocialProofSection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ui/ScrollReveal";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between bg-black">
            {/* Hero: Base layer */}
            <ScrollReveal zIndex={0}>
                <Hero />
            </ScrollReveal>

            {/* Empathy: Slides over Hero */}
            <ScrollReveal zIndex={10} className="bg-black">
                <EmpathySection />
            </ScrollReveal>

            {/* Tech Stack: Embedded or Separate */}
            <div className="relative z-15 bg-black w-full">
                <TechStackSection />
            </div>

            {/* Solution: Slides over TechStack */}
            <ScrollReveal zIndex={20} className="bg-zinc-950">
                <SolutionSection />
            </ScrollReveal>

            {/* Social Proof: Slides over Solution */}
            <ScrollReveal zIndex={30} className="bg-black">
                <SocialProofSection />
            </ScrollReveal>

            {/* FAQ & Footer: Final layer */}
            <div className="relative z-40 bg-black w-full">
                <FAQSection />
                <Footer />
            </div>
        </main>
    );
}
