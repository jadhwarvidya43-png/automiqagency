import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import Services from "@/components/Services";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import Results from "@/components/Results";
import About from "@/components/About";
import Industries from "@/components/Industries";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import PricingCalculator from "@/components/PricingCalculator";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ConversionWidgets from "@/components/ConversionWidgets";

export default function Home() {
  return (
    <>
      {/* 01. Sticky Header Navigation */}
      <Navbar />

      {/* Main Page Layout */}
      <main className="flex-1 flex flex-col z-10 relative">
        
        {/* 02. Animated Hero Section */}
        <Hero />

        {/* 03. Trusted Companies Logo Cloud */}
        <TrustedCompanies />

        {/* 04. About AUTOMIQ Section */}
        <About />

        {/* 05. Bento Grid Services */}
        <Services />

        {/* 06. Interactive AI Solutions Showcase */}
        <SolutionsShowcase />

        {/* 07. Client Results & Counter Metrics */}
        <Results />

        {/* 08. Industries We Transform */}
        <Industries />

        {/* 09. Why Choose Bento Grid */}
        <WhyChoose />

        {/* 10. Portfolio & Case Studies Dashboards */}
        <Portfolio />

        {/* 11. Project Timeline Process */}
        <Process />

        {/* 12. Tech Integration Hub */}
        <TechStack />

        {/* 13. Auto-play Testimonials Slider */}
        <Testimonials />

        {/* 14. Interactive Pricing & ROI Calculator */}
        <PricingCalculator />

        {/* 15. FAQ Accordion */}
        <FAQ />

        {/* 16. Consultation Calendar & Intakes */}
        <Contact />

      </main>

      {/* 17. Premium Footer */}
      <Footer />

      {/* 18. Floating Widgets & Exit Intent Trigger */}
      <ConversionWidgets />
    </>
  );
}
