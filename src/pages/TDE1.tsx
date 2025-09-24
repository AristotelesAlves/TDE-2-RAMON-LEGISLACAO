import cyberHero from "@/assets/cyber-hero.jpg";
import lawTech from "@/assets/law-tech.jpg";
import dataProtection from "@/assets/data-protection.jpg";

const TDE1 = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-card rounded-3xl shadow-elevated p-8 text-center border border-border overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${cyberHero})` }}
        />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-accent-cyber mb-4">
            🔒 Cibercrimes e a Legislação Brasileira
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Infográfico acadêmico sobre leis, crimes digitais e prevenção.
          </p>

          {/* Team Members */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="font-semibold text-xl mb-4 text-foreground flex items-center justify-center gap-2">
              👥 Integrantes do Grupo
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm md:text-base">
              {[
                "Aristoteles Alves de Oliveira — 2022213417",
                "Maria Diva Calou Leite — 201310050", 
                "Pedro Lucas Araujo Pinho Pierre — 2022213069",
                "Francisco José Alves da Silva — 2022111885",
                "Yuri Avner Cardoso Fontes — 2020110081"
              ].map((member, index) => (
                <div key={index} className="p-3 bg-card/80 rounded-lg border border-border/30">
                  <span className="text-foreground/90">{member}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* What are Cybercrimes */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-cyber/30 hover:shadow-elevated transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-cyber/20 flex items-center justify-center">
              <span className="text-xl">🔍</span>
            </div>
            <h2 className="text-2xl font-bold text-accent-cyber">O que são Cibercrimes?</h2>
          </div>
          
          <p className="text-foreground/80 mb-6">
            Atos ilícitos praticados com uso de tecnologia digital, causando danos a indivíduos, empresas ou instituições.
          </p>
          
          <div className="space-y-4">
            {[
              { icon: "💻", title: "Invasão de dispositivos", desc: "Acesso não autorizado a sistemas" },
              { icon: "🛑", title: "Vazamento/roubo de dados", desc: "Exposição de informações pessoais" },
              { icon: "🎭", title: "Golpes virtuais", desc: "Phishing, clonagem e fraudes online" },
              { icon: "📢", title: "Fake news", desc: "Disseminação de informações falsas" }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-card/40 rounded-lg border border-border/20">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </article>

        {/* Main Laws */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-ai/30 hover:shadow-elevated transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-ai/20 flex items-center justify-center">
              <span className="text-xl">⚖️</span>
            </div>
            <h2 className="text-2xl font-bold text-accent-ai">Principais Leis no Brasil</h2>
          </div>
          
          <div className="space-y-5">
            {[
              {
                law: "Marco Civil da Internet (2014)",
                description: "Estabelece princípios, garantias, direitos e deveres para o uso da Internet no Brasil.",
                key: "Lei 12.965/2014"
              },
              {
                law: "Lei Carolina Dieckmann (2012)", 
                description: "Tipifica crimes informáticos como invasão de dispositivos e interrupção de serviços.",
                key: "Lei 12.737/2012"
              },
              {
                law: "LGPD (2018)",
                description: "Lei Geral de Proteção de Dados Pessoais, regula tratamento de dados pessoais.",
                key: "Lei 13.709/2018"
              },
              {
                law: "Lei 14.155 (2021)",
                description: "Aumento de penas para fraudes eletrônicas e criação de novos tipos penais.",
                key: "Lei 14.155/2021"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-card/40 rounded-lg border border-border/20">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{item.law}</h3>
                  <span className="text-xs bg-accent-ai/20 text-accent-ai px-2 py-1 rounded-full">
                    {item.key}
                  </span>
                </div>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Penalties */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-ethics/30 hover:shadow-elevated transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-ethics/20 flex items-center justify-center">
              <span className="text-xl">⚖️</span>
            </div>
            <h2 className="text-2xl font-bold text-accent-ethics">Penas Previstas</h2>
          </div>
          
          <div className="space-y-4">
            {[
              {
                crime: "Invasão de dispositivo",
                penalty: "3 meses a 1 ano + multa",
                aggravated: "6 meses a 2 anos (com dano/vantagem)"
              },
              {
                crime: "Fraude eletrônica", 
                penalty: "4 a 8 anos + multa",
                aggravated: "Dobrada se contra idoso/vulnerável"
              },
              {
                crime: "Divulgação de imagens íntimas",
                penalty: "1 a 5 anos",
                aggravated: "Aumentada se por motivo sexista"
              }
            ].map((item, index) => (
              <div key={index} className="p-4 bg-card/40 rounded-lg border border-border/20">
                <h3 className="font-semibold text-foreground mb-1">{item.crime}</h3>
                <p className="text-sm text-accent-ethics">Pena base: {item.penalty}</p>
                <p className="text-xs text-foreground/60 mt-1">{item.aggravated}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-3 bg-accent-ethics/10 rounded-lg border border-accent-ethics/20">
            <p className="text-xs text-foreground/80 italic">
              * Penas podem variar conforme agravantes, atenuantes e circunstâncias específicas do caso.
            </p>
          </div>
        </article>

        {/* Protection */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-future/30 hover:shadow-elevated transition-all duration-300 group">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-accent-future/20 flex items-center justify-center">
              <span className="text-xl">🛡️</span>
            </div>
            <h2 className="text-2xl font-bold text-accent-future">Como se Proteger</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: "🔑", title: "Autenticação 2FA", desc: "Use verificação em duas etapas" },
              { icon: "🚫", title: "Links suspeitos", desc: "Desconfie de URLs desconhecidas" },
              { icon: "🛡️", title: "Software atualizado", desc: "Mantenha antivírus e sistema atualizados" },
              { icon: "🔐", title: "Senhas fortes", desc: "Use senhas complexas e únicas" },
              { icon: "💾", title: "Backups regulares", desc: "Faça cópias de segurança frequentes" },
              { icon: "📱", title: "Redes seguras", desc: "Evite WiFi público para dados sensíveis" }
            ].map((item, index) => (
              <div key={index} className="p-3 bg-card/40 rounded-lg border border-border/20 text-center">
                <div className="text-2xl mb-2">{item.icon}</div>
                <h3 className="font-semibold text-sm text-foreground">{item.title}</h3>
                <p className="text-xs text-foreground/70 mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      {/* Visual Elements Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative bg-gradient-card rounded-2xl shadow-card p-6 border border-border overflow-hidden">
          <img 
            src={lawTech} 
            alt="Tecnologia e Legislação Digital" 
            className="w-full h-48 object-cover rounded-lg mb-4 opacity-80"
          />
          <h3 className="text-xl font-bold text-foreground mb-2">Legislação Digital</h3>
          <p className="text-foreground/70">
            A evolução das leis acompanha o avanço tecnológico para proteger direitos e regular condutas no ambiente digital.
          </p>
        </div>

        <div className="relative bg-gradient-card rounded-2xl shadow-card p-6 border border-border overflow-hidden">
          <img 
            src={dataProtection} 
            alt="Proteção de Dados" 
            className="w-full h-48 object-cover rounded-lg mb-4 opacity-80"
          />
          <h3 className="text-xl font-bold text-foreground mb-2">Proteção de Dados</h3>
          <p className="text-foreground/70">
            A segurança das informações pessoais é fundamental no mundo digital, exigindo medidas técnicas e legais robustas.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-card rounded-3xl shadow-card p-8 text-center border border-border">
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-accent-cyber">📞 Canais de Denúncia</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-card/40 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Polícia Federal</h4>
              <p className="text-sm text-foreground/70">Crimes de maior complexidade e abrangência nacional</p>
            </div>
            <div className="p-4 bg-card/40 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Delegacias Especializadas</h4>
              <p className="text-sm text-foreground/70">DECRADI - Delegacias de Crimes Cibernéticos</p>
            </div>
          </div>
          <p className="text-sm text-foreground/60">
            🌐 Mais informações: <a href="https://www.gov.br" className="underline text-accent-cyber hover:text-accent-cyber/80">gov.br</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TDE1;