import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import HomeSection from "@/components/home/home";
import Footer from "@/components/footer/footer";
import AboutSection from "@/components/about/about";
import { ThemeProvider } from "@/components/context/ThemeContext";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <HomeSection />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
