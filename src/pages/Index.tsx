import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import DirectorSection from "@/components/DirectorSection";
import FacilitySection from "@/components/FacilitySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen w-full">
    <Header />
    <HeroSection />
    <AboutSection />
    <ProductsSection />
    <DirectorSection />
    <FacilitySection />
    <WhyChooseSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
