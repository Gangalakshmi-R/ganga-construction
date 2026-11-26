import Hero from "../components/sections/Hero";
import Marquee from "../components/sections/Marquee";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ProcessSection from "../components/sections/ProcessSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import CostEstimatorSection from "../components/sections/CostEstimatorSection";
import ContactSection from "../components/sections/ContactSection";
import FloatingWhatsapp from "../components/common/FloatingWhatsapp";

const Home = () => (
  <>
    <Hero />
    <Marquee />
    <AboutSection />
    <ServicesSection />
    <ProjectsSection />
    <ProcessSection />
    <TestimonialsSection />
    <CostEstimatorSection />
    <ContactSection />
    <FloatingWhatsapp />
  </>
);

export default Home;
