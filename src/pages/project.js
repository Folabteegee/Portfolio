import Navbar from "@/components/navbar/navbar";
import ProjectSection from "@/components/project/project";
import { ThemeProvider } from "@/components/context/ThemeContext";
import Footer from "@/components/footer/footer";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function ProjectPage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ProjectSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
