const Markets = () => {
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

        {/* Markets Image */}
        <div className="flex justify-center">
          <img 
            src="/lovable-uploads/abc1474d-f301-46b9-bb73-c0e82c382ed8.png" 
            alt="Setores atendidos pela U-all Solutions: Varejo, Hotéis, Hospitais e Clínicas, Parceiros e Eventos"
            className="w-full max-w-4xl h-auto rounded-xl shadow-card-hover"
          />
        </div>
      </div>
    </section>
  );
};

export default Markets;