const TDE3 = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 space-y-10">
      {/* Hero Section */}
      <section className="bg-gradient-card rounded-3xl shadow-elevated p-8 text-center border border-border">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-accent-ethics mb-4">
          📖 TDE 3 - Ética e Responsabilidade Digital
        </h1>
        <p className="text-lg text-foreground/80">
          Em desenvolvimento - Próximo trabalho dirigido sobre ética digital e responsabilidade tecnológica
        </p>
      </section>

      {/* Content Preview */}
      <section className="bg-gradient-card rounded-2xl shadow-card p-8 border border-accent-ethics/30">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-accent-ethics/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">🚧</span>
          </div>
          <h2 className="text-2xl font-bold text-accent-ethics mb-4">Em Construção</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Este espaço será dedicado ao terceiro trabalho dirigido da disciplina, 
            abordando temas relacionados à ética digital, responsabilidade social da tecnologia 
            e impactos sociais da transformação digital.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TDE3;