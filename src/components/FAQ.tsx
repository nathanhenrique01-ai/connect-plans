import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "O que exatamente a U-All Solutions oferece?",
      answer: "A U-All é uma plataforma completa de Wi-Fi Marketing, Captura de Dados e Engajamento Inteligente, que transforma redes Wi-Fi e QR Codes em ferramentas de crescimento, vendas e relacionamento. Capturamos dados dos visitantes (como nome, e-mail, telefone, CPF, redes sociais) com total conformidade com a LGPD e automatizamos campanhas por WhatsApp, e-mail e SMS."
    },
    {
      question: "Preciso ter Wi-Fi para usar a plataforma?",
      answer: "Não! A U-All também funciona com QR Codes, ideais para estabelecimentos sem rede Wi-Fi ou para captura complementar em cardápios, vitrines, mesas, eventos e muito mais."
    },
    {
      question: "A infraestrutura (equipamentos) está inclusa no plano?",
      answer: "A infraestrutura física não está inclusa. A U-All é uma plataforma SaaS (software) e o cliente deve possuir ou adquirir os equipamentos de rede compatíveis com nossa solução. Podemos indicar modelos homologados."
    },
    {
      question: "Quais equipamentos são compatíveis?",
      answer: "Somos compatíveis com os principais equipamentos do mercado, como TP-Link Omada, Mikrotik, UniFi (Ubiquiti), Cambium, Ruckus e outros que aceitam captive portal externo e autenticação via RADIUS."
    },
    {
      question: "O que significa \"acessos ilimitados\"?",
      answer: "Significa que você pode receber quantos visitantes quiser na sua rede ou QR Code, sem limitação de cadastros, logins ou acessos simultâneos. O que varia entre os planos é o nível de recursos e suporte disponível."
    },
    {
      question: "Vocês fazem disparo automático por WhatsApp, SMS e e-mail?",
      answer: "Sim! A U-All permite criar campanhas automatizadas baseadas no comportamento do cliente: visitas, horários, número de acessos, aniversários, entre outros."
    },
    {
      question: "Posso integrar com meu CRM ou ferramentas externas?",
      answer: "Com certeza! Possuímos APIs abertas, webhooks, integração com CRM, Google Analytics (GA4), Facebook Pixel, Zapier e outras ferramentas. É possível conectar com RD Station, PipeRun, HubSpot, entre outros."
    },
    {
      question: "É necessário conhecimento técnico para usar a plataforma?",
      answer: "Não. O painel da U-All é simples, visual e intuitivo. Você consegue montar fluxos, campanhas e relatórios com poucos cliques. Se precisar de ajuda, temos material de apoio, vídeos e suporte humanizado."
    },
    {
      question: "Como funciona a cobrança e o plano anual?",
      answer: "A cobrança é mensal ou anual, via boleto ou cartão. Planos anuais possuem 20% de desconto e podem ser parcelados. Sem surpresas ou cobranças adicionais."
    },
    {
      question: "A plataforma é segura e está em conformidade com a LGPD?",
      answer: "Sim. Temos criptografia de ponta, servidores no Brasil e políticas de proteção de dados conforme exigido pela Lei Geral de Proteção de Dados (LGPD). Você também pode personalizar os termos de uso e privacidade exibidos aos usuários da rede."
    },
    {
      question: "Consigo ver quem são meus visitantes e se eles voltaram?",
      answer: "Sim. O sistema identifica visitantes únicos e recorrentes, mostra quando e onde acessaram, qual dispositivo foi usado, tempo de permanência e até geolocalização."
    },
    {
      question: "Posso testar a plataforma antes de contratar?",
      answer: "Claro! Podemos agendar uma demonstração personalizada com nosso time. Solicite agora pelo botão \"Agendar Demo\" no topo da página."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-background" id="faq">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre nossa plataforma de Wi-Fi Marketing
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-border bg-card shadow-card transition-smooth hover:shadow-card-hover"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left transition-smooth hover:bg-muted/30"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 flex-shrink-0 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 flex-shrink-0 text-primary" />
                    )}
                  </div>
                </button>
                
                {openItems.includes(index) && (
                  <div className="px-6 pb-4">
                    <div className="border-t border-border pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;