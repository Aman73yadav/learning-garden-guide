import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AbstractSection from "@/components/AbstractSection";
import IntroductionSection from "@/components/IntroductionSection";
import ProblemSection from "@/components/ProblemSection";
import ObjectivesSection from "@/components/ObjectivesSection";
import PreparationSection from "@/components/PreparationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <AbstractSection />
      <IntroductionSection />
      <ProblemSection />
      <ObjectivesSection />
      <PreparationSection />
      <Footer />
    </div>
  );
};

export default Index;
