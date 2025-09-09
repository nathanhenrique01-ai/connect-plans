import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star } from "lucide-react";
import networkingLogos from "@/assets/networking-brands-logos.png";

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: "connect",
      name: "Connect",
      description: "Para quem precisa capturar dados e ativar um hotspot com segurança",
      monthlyPrice: 179.99,
      annualPrice: 1727.90,
      popular: false,
      features: [
        "1 login de acesso",
        "1 perfil de hotspot",
        "Captura de dados com LGPD",
        "Portal personalizado (logo/cores)",
        "Relatórios básicos de conexões",
        "Suporte 8x5 (horário comercial)",
        "Plataforma homologada"
      ]
    },
    {
      id: "marketing",
      name: "Marketing",
      description: "Para quem quer ativar campanhas automáticas e aumentar vendas",
      monthlyPrice: 199.99,
      annualPrice: 1919.90,
      popular: true,
      features: [
        "Acessos ilimitados",
        "Logins de usuários ilimitados",
        "Captura de dados com LGPD",
        "Login social (Facebook/Google/Instagram)",
        "Campanhas automáticas (SMS, e-mail, WhatsApp META)",
        "Dashboard com gráficos e relatórios detalhados",
        "Integração com APIs externas",
        "Botões Call-to-Action personalizados",
        "Relatório de mapa de calor",
        "Suporte completo 24x7"
      ]
    },
    {
      id: "experience",
      name: "Experience",
      description: "Para negócios que buscam inteligência de dados e performance máxima",
      monthlyPrice: 239.99,
      annualPrice: 2303.90,
      popular: false,
      features: [
        "Tudo do plano Marketing +",
        "Captura de dados com LGPD",
        "IA com insights no dashboard",
        "Acompanhamento mensal com especialista",
        "Suporte prioritário com atendimento dedicado",
        "Plataforma pronta para grandes volumes"
      ]
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  const getMonthlyEquivalent = (annualPrice: number) => {
    return formatPrice(annualPrice / 12);
  };

  return (
    <section className="py-20 bg-muted/30" id="planos">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Escolha o <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">plano ideal</span> para o seu negócio
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Comece agora mesmo e transforme seu Wi-Fi em uma ferramenta de marketing poderosa
          </p>
        </div>

        {/* Toggle */}
        <div className="mb-12 flex justify-center">
          <div className="flex items-center rounded-lg bg-secondary p-1">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-smooth ${
                !isAnnual 
                  ? "bg-background text-foreground shadow-card" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-md px-6 py-2 text-sm font-medium transition-smooth ${
                isAnnual 
                  ? "bg-background text-foreground shadow-card" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Anual
              <Badge variant="secondary" className="ml-2">-20%</Badge>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl border bg-card p-8 transition-smooth hover:shadow-card-hover ${
                plan.popular 
                  ? "border-primary shadow-popular scale-105" 
                  : "border-border shadow-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-popular text-primary-foreground shadow-card">
                    <Star className="mr-1 h-3 w-3" />
                    Mais vendido
                  </Badge>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-card-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              {/* Pricing */}
              <div className="mb-8 text-center">
                {isAnnual ? (
                  <div>
                    <div className="mb-2">
                      <span className="text-4xl font-bold text-card-foreground">
                        {formatPrice(plan.annualPrice)}
                      </span>
                      <span className="text-muted-foreground">/ano</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Equivale a {getMonthlyEquivalent(plan.annualPrice)}/mês
                    </div>
                    <div className="text-sm text-success font-medium">
                      Economia de 20% vs mensal
                    </div>
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-bold text-card-foreground">
                      {formatPrice(plan.monthlyPrice)}
                    </span>
                    <span className="text-muted-foreground">/mês</span>
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="mb-8 space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-5 w-5 flex-shrink-0 text-success mt-0.5" />
                    <span className="text-sm text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.popular ? "popular" : "default"}
                size="lg"
                className="w-full"
              >
                Escolher {plan.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-12 rounded-lg bg-card border border-border p-6">
          <h4 className="mb-4 font-semibold text-card-foreground">Observações importantes:</h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>
              <strong>Serviço SaaS:</strong> Infraestrutura Wi-Fi não incluída (APs/controladora, roteadores, switches/PoE, cabeamento e link). O cliente deve possuir equipamentos compatíveis e internet ativa.
            </p>
            <p>
              <strong>"Acessos/Logins ilimitados"</strong> referem-se ao licenciamento do software. A capacidade real depende do hardware e do link do cliente.
            </p>
            <p>
              <strong>Custos de envio</strong> (SMS/WhatsApp/E-mail) são cobrados pelos provedores/gateways e não estão inclusos nos planos.
            </p>
          </div>
        </div>

        {/* Compatibility Section */}
        <div className="mt-16 text-center">
          <h3 className="mb-8 text-2xl font-bold text-foreground">
            Homologado com os principais equipamentos do mercado
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-sm font-medium text-muted-foreground">
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Aruba</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Alcatel-Lucent</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Cambium Networks</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Cisco</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Fortinet</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Huawei</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Intelbras</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">MikroTik</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Ruckus</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">TP-Link Omada</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Ubiquiti</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Zyxel Nebula</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth">Grandstream</div>
              <div className="p-4 rounded-lg bg-card border border-border hover:shadow-card-hover transition-smooth text-primary font-semibold">+ Muito mais</div>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Compatible com centenas de equipamentos de rede. Entre em contato para verificar compatibilidade específica.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;