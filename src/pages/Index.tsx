import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoursesSection from "@/components/CoursesSection";
import FeaturesSection from "@/components/FeaturesSection";
import LeaderboardSection from "@/components/LeaderboardSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CoursesSection />
      <FeaturesSection />
      <LeaderboardSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
