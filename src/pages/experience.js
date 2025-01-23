import Navbar from "@/components/navbar/navbar";
import ExperienceSection from "@/components/experience/experience";
import { ThemeProvider } from "@/components/context/ThemeContext";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function AboutPage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ExperienceSection />
      </ThemeProvider>
    </div>
  );
}
