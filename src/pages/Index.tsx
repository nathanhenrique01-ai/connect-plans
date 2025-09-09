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
        
        {/* Final Quote Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Quem tem dados ganha o jogo
            </h2>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
