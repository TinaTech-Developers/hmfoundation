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

export default function Home() {
  return (
    <>
      <HeroSlider />
      <About />
      <ProgramsSection />
      <ImpactSection />
      <StorySliderSection />
      {/* <FeaturedProjectsSection /> */}
      <Testimonials />
      <FeaturedShowcaseSection />
      <CTASection />
    </>
  );
}
