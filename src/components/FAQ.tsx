import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "O que exatamente a WallSolution PME oferece?",
      answer: "Uma plataforma SaaS de Wi-Fi Marketing e captação de dados (captive portal), com automações, relatórios e integrações. Não inclui hardware nem instalação física."
    },
    {
      question: "Infraestrutura está incluída?",
      answer: "Não. O serviço é de software. O cliente deve possuir rede Wi-Fi funcional (APs/controladora/roteador, switch/PoE, cabeamento e internet)."
    },
    {
      question: "Quais equipamentos são compatíveis?",
      answer: "Compatível com os principais do mercado (ex.: MikroTik, Ubiquiti/UniFi, TP-Link/Omada). Precisa permitir captive portal e Walled Garden/Whitelist."
    },
    {
      question: "O que preciso ter pronto para ativar?",
      answer: "AP/roteador compatível e internet ativa, DHCP habilitado, acesso à controladora/roteador para ajustes e liberação de domínios/URLs (Walled Garden) do portal."
    },
    {
      question: "O que significa 'acessos ilimitados' e 'logins ilimitados'?",
      answer: "Acessos ilimitados: sem limite de conexões/autorizações no licenciamento do software. A capacidade real depende do hardware e do link do cliente. Logins ilimitados: você pode criar quantos usuários/operadores precisar."
    },
    {
      question: "Diferença prática entre os planos?",
      answer: "Connect: 1 login + 1 perfil, captura básica, suporte 8x5. Marketing: acessos ilimitados, login social, automação completa, suporte 24x7. Experience: tudo do Marketing + IA, especialista dedicado, carteira digital."
    },
    {
      question: "Campanhas por WhatsApp, e-mail e SMS estão inclusas?",
      answer: "As funcionalidades estão inclusas. Custos de envio (gateways/operadoras/API Meta) são à parte do plano e cobrados pelos provedores."
    },
    {
      question: "Como funciona a cobrança e o desconto anual?",
      answer: "Planos mensais ou anuais. No anual há 20% OFF (exibimos o valor total anual e o equivalente mensal). Pagamento e gestão via GuruManage."
    },
    {
      question: "Tem fidelidade? Posso cancelar quando quiser?",
      answer: "Sem fidelidade. O cancelamento interrompe a próxima renovação. (Encargos já faturados não são reembolsáveis.)"
    },
    {
      question: "Como é o suporte em cada plano?",
      answer: "Connect: horário comercial 8x5. Marketing: 24x7. Experience: fila prioritária + atendimento dedicado (CS) e acompanhamento mensal."
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