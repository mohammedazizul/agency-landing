import PriceSection from "./PriceSection";
import TestimonialSection from "./TestimonialSection";
import CompaniesSection from "./CompaniesSection";
import HeroSection from "./HeroSection";
import TrialSection from "./TrialSection";
import FaqSection from "./FaqSection";
import ServiceSection from "./ServiceSection";

export default function Section() {
  return (
    <>
      <HeroSection />
      <CompaniesSection />
      <ServiceSection />
      <TestimonialSection />
      <PriceSection />
      <FaqSection />
      <TrialSection />
    </>
  );
}
