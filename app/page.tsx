import { TestTube } from "lucide-react";
import About from "./(main)/components/about";
import CTASection from "./(main)/components/ctasection";
import FeaturedProjectsSection from "./(main)/components/featuredproductssection";
import FeaturedShowcaseSection from "./(main)/components/featuredshowcasesection";
import HeroSlider from "./(main)/components/hero";
import ImpactSection from "./(main)/components/impactsection";
import ProgramsSection from "./(main)/components/programssection";
import StorySliderSection from "./(main)/components/storyslidersection";
import Testimonials from "./(main)/components/testimonials";
import FloatingNavbar from "./(main)/components/navbar";
import ProfessionalFooter from "./(main)/components/footer";

export default function Home() {
  return (
    <>
      <FloatingNavbar />
      <HeroSlider />
      <About />
      <ProgramsSection />
      <ImpactSection />
      <StorySliderSection />
      {/* <FeaturedProjectsSection /> */}
      <FeaturedShowcaseSection />
      <Testimonials />
      <CTASection />
      <ProfessionalFooter />
    </>
  );
}
