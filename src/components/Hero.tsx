import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Wifi } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.1),transparent_50%)]"></div>

      <div className="container relative mx-auto px-4">
        {/* Grid Principal: Texto + Imagem */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center mb-16 md:mb-20">
          {/* Coluna Texto */}
          <div className="flex flex-col justify-center max-w-2xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full bg-secondary/10 px-4 py-2 text-sm font-medium text-secondary">
              <Wifi className="mr-2 h-4 w-4" />
              Inteligência de Dados
            </div>

            {/* Hero Title */}
            <h1 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl">
              Transforme sua{" "}
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                empresa
              </span>{" "}
              em uma
              <br />
              <span className="bg-gradient-to-r from-secondary via-primary to-secondary bg-clip-text text-transparent">
                máquina de vendas
              </span>
            </h1>

            {/* Hero Description */}
            <p className="mb-8 text-lg text-muted-foreground md:text-xl leading-relaxed">
              Capture dados dos clientes, crie campanhas automáticas e aumente suas vendas com a plataforma de
              inteligência de dados da U-all Solutions, a mais completa do mercado.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group hover:scale-105 active:scale-95 transition-transform" onClick={scrollToPlans}>
                Ver nossos planos
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="xl"
                className="hover:scale-105 active:scale-95 transition-transform"
                onClick={() => window.open("http://e.uall.ai/9d378412", "_blank")}
              >
                Agendar demonstração
              </Button>
            </div>
          </div>

          {/* Coluna Imagem */}
          <div className="flex items-center justify-center px-4 md:px-0">
            <div className="rounded-xl overflow-hidden shadow-card-hover border border-primary/10 max-w-md md:max-w-lg lg:max-w-xl w-full">
              <img
                src="/lovable-uploads/f34f25ee-de68-4e8b-993b-56a28efaee8b.png"
                alt="Dashboard da plataforma U-all Solutions em notebook mostrando analytics e campanhas de Wi-Fi Marketing"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div className="bg-card border-2 border-secondary/20 rounded-xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-secondary/10 rounded-full p-3">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">+10 mil</div>
              <div className="text-sm text-muted-foreground">Locais ativos</div>
            </div>
            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-primary/10 rounded-full p-3">
                  <BarChart3 className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">+400%</div>
              <div className="text-sm text-muted-foreground">Aumento em vendas</div>
            </div>
            <div className="bg-card border-2 border-primary/20 rounded-xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-primary/10 rounded-full p-3">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="text-3xl font-bold text-foreground">+15 milhões</div>
              <div className="text-sm text-muted-foreground">Cadastros capturados</div>
            </div>
            <div className="bg-card border-2 border-secondary/20 rounded-xl p-6 text-center shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="mb-3 flex items-center justify-center">
                <div className="bg-secondary/10 rounded-full p-3">
                  <Wifi className="h-8 w-8 text-secondary" />
                </div>
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
