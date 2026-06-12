import Hero
from "../components/sections/Hero";

import ServicesSection
from "../components/sections/ServicesSection";

import ProjectsSection
from "../components/sections/ProjectsSection";

import CostEstimatorSection
from "../components/sections/CostEstimatorSection";

import TestimonialsSection
from "../components/sections/TestimonialsSection";

import FloatingWhatsapp
from "../components/common/FloatingWhatsapp";

import ContactSection
from "../components/sections/ContactSection";

import Footer from "../layouts/Footer";
import AboutSection from "../components/sections/AboutSection";

const Home = () => {

  return (
  <>
  <Hero/>

  <AboutSection/>

  <ServicesSection />

  <ProjectsSection />

  <TestimonialsSection />

  <CostEstimatorSection />

  <ContactSection />

  {/* <Footer/> */}
  <FloatingWhatsapp />
</>
  );
};

export default Home;