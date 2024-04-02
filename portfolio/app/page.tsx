import Hero from "@/UI/hero/Hero";
import Navbar from "@/UI/navbar/Navbar";
import Projects from "@/UI/projects/Projects";
import Image from "next/image";
import Technologies from "@/UI/technologies/Technologies";
import Experience from "@/UI/experience/Experience";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Technologies />
      <Projects />
      <Experience />
      </div>
    </main>
  );
}
