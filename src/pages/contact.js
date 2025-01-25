import Navbar from "@/components/navbar/navbar";
import ContactSection from "@/components/contact/contact";
import Footer from "@/components/footer/footer";
import { ThemeProvider } from "@/components/context/ThemeContext";
import "@/app/globals.css"; // Tailwind styles are typically included here

export default function ContactPage() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <ContactSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
