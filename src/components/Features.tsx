import { Shield, Smartphone, QrCode, BarChart, Zap, Users, Settings, Lock, Target } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "LGPD Inteligente e Transparente",
      description: "Captura e tratamento de dados 100% conforme a Lei Geral de Proteção de Dados (LGPD). Cada acesso é registrado com base legal, com transparência para o usuário e segurança jurídica para sua empresa."
    },
    {
      icon: QrCode,
      title: "QR Code para Captura de Dados sem Wi-Fi",
      description: "Nem todo lugar tem Wi-Fi, e tudo bem. Com o modo QR Code da U-All, você transforma cardápios, balcões, vitrines e eventos em pontos de captura de leads, mesmo sem conexão. Ideal para eventos, igrejas, clínicas, influenciadores, autônomos e mais."
    },
    {
      icon: Zap,
      title: "Campanhas Automatizadas que Vendem por Você",
      description: "Dispare mensagens automáticas por WhatsApp, SMS e E-mail com base no comportamento do visitante. Desde um \"bem-vindo\" até promoções, lembretes ou pedidos de feedback, tudo no momento certo, sem esforço."
    },
    {
      icon: Settings,
      title: "Integrações sem Código com Seu Ecossistema",
      description: "Conecte a U-All às ferramentas que você já usa: CRM, GA4, Meta Ads, RD Station, PipeRun, Facebook Pixel, Zapier, e muito mais. Tudo com APIs abertas e webhooks prontos para facilitar sua operação."
    },
    {
      icon: Lock,
      title: "Captive Portal Personalizado",
      description: "Personalize a tela de acesso com sua identidade visual. Adicione logo, imagem de fundo, botão do Instagram, link para cardápio, vídeos, mensagens, botões de WhatsApp e muito mais."
    },
    {
      icon: Target,
      title: "Retenção e Remarketing",
      description: "Monte públicos personalizados com base nos acessos e recupere visitantes com campanhas automáticas. Você pode até mesmo exportar os dados para plataformas de mídia e fazer anúncios diretamente para quem já te visitou."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Recursos que fazem a <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">diferença</span>
          </h2>
          <p className="text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto leading-relaxed">
            Tecnologia inteligente para transformar qualquer ambiente em um canal de marketing, dados e vendas.
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