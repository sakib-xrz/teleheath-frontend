import HeroSection from "./components/hero-section/hero-section";
import HowItWorks from "./components/how-it-works/how-it-works";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />
      {/* How it works */}
      <HowItWorks />
    </div>
  );
}
