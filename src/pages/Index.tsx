import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import InfoBar from "@/components/InfoBar";
import AboutSection from "@/components/AboutSection";
import DepartmentsSection from "@/components/DepartmentsSection";
import ServicesSection from "@/components/ServicesSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <InfoBar />
        <AboutSection />
        <DepartmentsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
