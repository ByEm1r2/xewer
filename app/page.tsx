import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Process />
      {/* Portfolyo şimdilik gizli — lib/site.ts içindeki showPortfolio ile açılır */}
      {site.showPortfolio && <Portfolio />}
      <Testimonials />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
