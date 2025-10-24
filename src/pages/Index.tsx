import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientsSection from "@/components/ClientsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import TechnicalInfoSection from "@/components/TechnicalInfoSection";
import ApplicationsSection from "@/components/ApplicationsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import MobileActionBar from "@/components/MobileActionBar";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ClientsSection />
        <TestimonialsSection />
        <GallerySection />
        <TechnicalInfoSection />
        <ApplicationsSection />
        <FAQSection />
      </main>
      <Footer />
      <MobileActionBar />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
