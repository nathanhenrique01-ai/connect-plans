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
      </div>
    </section>
  );
};

export default Markets;