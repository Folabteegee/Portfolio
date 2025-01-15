import Image from "next/image";
import Navbar from "@/components/navbar/navbar";
import HomeSection from "@/components/home/home";
import AboutSection from "@/components/about/about";
import { ThemeProvider } from "@/components/context/ThemeContext";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Navbar />
        <HomeSection />
        <AboutSection />
      </ThemeProvider>
    </div>
  );
}
