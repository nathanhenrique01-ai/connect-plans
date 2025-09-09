import { ShoppingCart, Building, Heart, Users, Calendar } from "lucide-react";

const Markets = () => {
  const markets = [
    {
      icon: ShoppingCart,
      title: "VAREJO",
      description: "Integramos com PDV, CRM, Cadastro Dupla aplicativos de reserva de mesa, ads para vantagens, WhatsApp, entre outras inúmeras possibilidades."
    },
    {
      icon: Building,
      title: "HOTÉIS",
      description: "Integramos API com qualquer solução tecnológica oferecida pelo hotel, dos hospedes de Oita, cadastro e foça vendas diretas."
    },
    {
      icon: Heart,
      title: "HOSPITAIS E CLÍNICAS",
      description: "Integramos com aplicativos e sistemas de gestão inteligente."
    },
    {
      icon: Users,
      title: "PARCEIROS",
      description: "Integramos com ERP e demais soluções tecnológicas existentes do mercado. Saiba se quem se conecta na rede e ou não seu cliente."
    },
    {
      icon: Calendar,
      title: "EVENTOS",
      description: "Integramos com os principais sistemas de eventos."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Setores que <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Atendemos</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
            Soluções personalizadas para cada segmento, integrando perfeitamente com seus sistemas existentes
          </p>
        </div>

        {/* Markets Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {markets.map((market, index) => {
            const IconComponent = market.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl bg-card p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
              >
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-lg font-semibold text-foreground">
                  {market.title}
                </h3>
                <p className="text-center text-sm text-muted-foreground leading-relaxed">
                  {market.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Client Logos Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-foreground mb-2">
              Empresas que confiam na nossa solução
            </h3>
            <p className="text-muted-foreground">
              Clientes que já transformaram sua experiência de Wi-Fi
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-card rounded-xl p-8 shadow-card border border-border/50 max-w-5xl">
              <img 
                src="/lovable-uploads/3e10a188-2c22-4f72-9b23-9368fcd1099c.png" 
                alt="Logos de empresas clientes: McDonald's, Senac, Fogo de Chão, ReidoMate, Atlantica Hotels, Radisson, Unimed, Murillo, Ipiranga, Laghetto Hotéis, Hilton"
                className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Markets;