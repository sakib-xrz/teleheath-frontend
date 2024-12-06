import Doctors from "./components/doctors/doctors";
import FAQSection from "./components/faq-section/faq-section";
import FOOTER from "./components/footer/footer";
import HeroSection from "./components/hero-section/hero-section";
import HowItWorks from "./components/how-it-works/how-it-works";
import Services from "./components/services/services";
import HealthTips from "./components/tips/tips";
import WhyChooseUs from "./components/why-choose-us/why-choose-us";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <HeroSection />
      {/* HOW IT WORKS */}
      <HowItWorks />
      {/* SERVICES */}
      <Services />
      {/* WHY CHOOSE US */}
      <WhyChooseUs />
      {/* DOCTORS */}
      <Doctors />
      {/* FAQ SECTION */}
      <FAQSection />
      {/* HEALTH TIPS */}
      <HealthTips />
      {/* FOOTER */}
      <FOOTER />
    </div>
  );
}
