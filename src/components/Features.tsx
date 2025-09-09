import { Shield, Smartphone, BarChart, Zap, Users, Settings } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Compliance LGPD",
      description: "Captura e armazenamento de dados totalmente conforme com a Lei Geral de Proteção de Dados."
    },
    {
      icon: Smartphone,
      title: "Login Social",
      description: "Autenticação via Facebook, Google e Instagram para maior conversão e dados mais ricos."
    },
    {
      icon: BarChart,
      title: "Relatórios Inteligentes",
      description: "Dashboard com insights, mapa de calor e análises comportamentais dos seus clientes."
    },
    {
      icon: Zap,
      title: "Automação Completa",
      description: "Campanhas automáticas por SMS, e-mail e WhatsApp baseadas no comportamento do cliente."
    },
    {
      icon: Users,
      title: "Multi-perfis",
      description: "Gerencie múltiplos estabelecimentos e campanhas a partir de uma única plataforma."
    },
    {
      icon: Settings,
      title: "Integrações",
      description: "APIs e webhooks para conectar com seu CRM, GA4, Facebook Pixel e outras ferramentas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Recursos que fazem a diferença
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl">
            Tecnologia avançada para transformar visitantes em clientes fiéis
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:shadow-card-hover hover:border-primary/20"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;