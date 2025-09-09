import { Wifi, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Wifi className="h-5 w-5" />
              </div>
              <div className="text-xl font-bold text-foreground">
                U-all <span className="text-primary">Solutions</span>
              </div>
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
                <a href="#" className="hover:text-primary transition-smooth">
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
                <span>contato@uallsolutions.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+55 (11) 9999-9999</span>
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