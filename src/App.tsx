import { BlogsSection } from "./components/BlogsSection";
import { ContactSection } from "./components/ContactSection";
import { CyberneticGridSection } from "./components/CyberneticGridSection";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-neu-900">
      <Navbar />
      <main>
        <HeroSection />
        <CyberneticGridSection />
        <BlogsSection />
        <ContactSection />
      </main>
    </div>
  );
}
