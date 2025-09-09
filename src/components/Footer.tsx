import { Wifi, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/6d8043ef-3769-44dd-9408-8a552ecf0def.png" 
                alt="U-all Solutions" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transformando Wi-Fi em oportunidades de negócio. Plataforma completa de Wi-Fi Marketing para PMEs.
            </p>
            <div className="text-sm text-muted-foreground">
              <a 
                href="https://www.uallsolutions.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-smooth"
              >
                www.uallsolutions.com.br
              </a>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Produtos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#planos" className="hover:text-primary transition-smooth">
                  U-all Connect
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-primary transition-smooth">
                  U-all Marketing
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-primary transition-smooth">
                  U-all Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#faq" className="hover:text-primary transition-smooth">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Documentação
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">
                  Academy
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/5518997940028?text=Olá! Gostaria de agendar uma demonstração da plataforma U-all Solutions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Agendar Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>comercial@uallsolutions.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+55 11 5200-1762</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 U-all Solutions. Todos os direitos reservados.
            </div>
            <div className="flex space-x-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-smooth">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;