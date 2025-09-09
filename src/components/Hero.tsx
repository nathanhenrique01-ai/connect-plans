import { Button } from "@/components/ui/button";
import { ArrowRight, Wifi, Users, BarChart3 } from "lucide-react";
import dashboardLaptop from "@/assets/dashboard-laptop-mockup.jpg";

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById("planos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10"></div>
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Wifi className="mr-2 h-4 w-4" />
            Wi-Fi Marketing Inteligente
          </div>
          
          {/* Hero Title */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Transforme seu <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">Wi-Fi</span> em uma
            <br />
            máquina de vendas
          </h1>
          
          {/* Hero Description */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            Capture dados dos clientes, crie campanhas automáticas e aumente suas vendas com a plataforma de Wi-Fi Marketing mais completa do Brasil.
          </p>
          
          {/* CTA Buttons */}
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button variant="hero" size="xl" className="group" onClick={scrollToPlans}>
              Ver nossos planos
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => window.open('https://wa.me/5518997940028?text=Olá! Gostaria de agendar uma demonstração da plataforma U-all Solutions.', '_blank')}
            >
              Agendar demonstração
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="mb-12 rounded-xl overflow-hidden shadow-card-hover">
            <img 
              src="/lovable-uploads/f34f25ee-de68-4e8b-993b-56a28efaee8b.png" 
              alt="Dashboard da plataforma U-all Solutions em notebook mostrando analytics e campanhas de Wi-Fi Marketing"
              className="w-full h-auto"
            />
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">+10 mil</div>
              <div className="text-sm text-muted-foreground">Locais ativos</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">+400%</div>
              <div className="text-sm text-muted-foreground">Aumento em vendas</div>
            </div>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center">
                <Wifi className="h-6 w-6 text-primary" />
              </div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime garantido</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;