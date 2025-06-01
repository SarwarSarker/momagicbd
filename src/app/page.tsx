import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Benefits from "@/components/sections/Benefits";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import Partners from "@/components/sections/Partners";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Partners />
        <Benefits />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
