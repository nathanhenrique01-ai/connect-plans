import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Markets from "@/components/Markets";
import PricingPlans from "@/components/PricingPlans";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <section id="inicio">
          <Hero />
        </section>
        
        <section id="recursos">
          <Features />
        </section>
        
        <section id="setores">
          <Markets />
        </section>
        
        <section id="planos">
          <PricingPlans />
        </section>
        
        <section id="faq">
          <FAQ />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
