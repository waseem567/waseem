import Hero from "@/UI/hero/Hero";
import Navbar from "@/UI/navbar/Navbar";
import Projects from "@/UI/projects/Projects";
import Image from "next/image";
import Technologies from "@/UI/technologies/Technologies";
import Experience from "@/UI/experience/Experience";
import Footer from "@/UI/footer/Footer";
import MobileNav from "@/UI/navbar/Mobile";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="container max-w-screen-xl mx-auto">
        <Navbar />
        <MobileNav />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
