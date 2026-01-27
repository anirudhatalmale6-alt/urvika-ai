import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoBar from "@/components/LogoBar";
import WhyUrvika from "@/components/WhyUrvika";
import Product from "@/components/Product";
import Solutions from "@/components/Solutions";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LogoBar />
      <WhyUrvika />
      <Product />
      <Solutions />
      <Testimonials />
      <About />
      <Contact />
      <Careers />
      <Footer />
    </main>
  );
}
