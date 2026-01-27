import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import Platform from "@/components/Platform";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <Platform />
      <Solutions />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
