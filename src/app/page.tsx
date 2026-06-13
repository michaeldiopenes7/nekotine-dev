import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Hobbies />
      <Projects />
      <Footer />
    </>
  );
}
