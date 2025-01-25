import Navbar from "@/components/navbar/navbar";
import ExperienceSection from "@/components/experience/experience";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/context/ThemeContext";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function ExperiencePage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ExperienceSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
