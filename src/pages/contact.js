import Navbar from "@/components/navbar/navbar";
import ContactSection from "@/components/contact/contact";
import { ThemeProvider } from "@/components/context/ThemeContext";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function AboutPage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ContactSection />
      </ThemeProvider>
    </div>
  );
}
