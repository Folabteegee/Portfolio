import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import AboutSection from "@/components/about/about";
import { ThemeProvider } from "@/components/context/ThemeContext";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function AboutPage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <AboutSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
