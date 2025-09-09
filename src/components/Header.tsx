import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Wifi } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6d8043ef-3769-44dd-9408-8a552ecf0def.png" 
              alt="U-all Solutions" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("recursos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Recursos
            </button>
            <button
              onClick={() => scrollToSection("planos")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
            >
              FAQ
            </button>
            <Button 
              variant="default" 
              size="sm"
              onClick={() => window.open('https://wa.me/5518997940028?text=Olá! Gostaria de agendar uma demonstração da plataforma U-all Solutions.', '_blank')}
            >
              Agendar Demonstração
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="flex flex-col space-y-4 px-4 py-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("recursos")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                Recursos
              </button>
              <button
                onClick={() => scrollToSection("planos")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                FAQ
              </button>
              <Button 
                variant="default" 
                size="sm" 
                className="w-fit"
                onClick={() => window.open('https://wa.me/5518997940028?text=Olá! Gostaria de agendar uma demonstração da plataforma U-all Solutions.', '_blank')}
              >
                Agendar Demonstração
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;