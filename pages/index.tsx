import ContactSection from "../components/sections/contact";
import LandingSection from "../components/sections/landing";
import PortfolioSection from "../components/sections/portfolio";
import ServicesSection from "../components/sections/services";

export default function Index() {
  return (
    <>
      <LandingSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </>
  )
}