import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <HowItWorks />
        <RoiCalculator />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
