import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { ResumeSection } from "../components/ResumeSection";
import '../lib/i18n';
import { LanguageToggle } from "../components/LanguageToggle";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <ThemeToggle />
            <LanguageToggle />
            <StarBackground />

            <main className="relative z-0 bg-background/80">
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ResumeSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
}