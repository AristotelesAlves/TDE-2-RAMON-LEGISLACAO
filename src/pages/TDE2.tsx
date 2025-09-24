import aiHero from "@/assets/ai-hero.jpg";

const TDE2 = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 space-y-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-card rounded-3xl shadow-elevated p-8 text-center border border-border overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center"
          style={{ backgroundImage: `url(${aiHero})` }}
        />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-accent-ai mb-4">
            🧠 PL 21/2020 - Marco Legal da Inteligência Artificial
          </h1>
          <p className="text-lg text-foreground/80 mb-8">
            Análise do Projeto de Lei que regulamenta a Inteligência Artificial no Brasil
          </p>

          {/* Project Info */}
          <div className="bg-card/60 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h2 className="font-semibold text-xl mb-4 text-foreground">
              📋 TDE 2 - Complemento ao Infográfico
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="p-3 bg-card/80 rounded-lg">
                <strong>Disciplina:</strong> Informática e Legislação
              </div>
              <div className="p-3 bg-card/80 rounded-lg">
                <strong>Professor:</strong> Ramon Felizardo
              </div>
              <div className="p-3 bg-card/80 rounded-lg">
                <strong>Entrega:</strong> 24/09/2025
              </div>
              <div className="p-3 bg-card/80 rounded-lg">
                <strong>Tema:</strong> PL 21/2020
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="space-y-8">
        
        {/* What is PL 21/2020 */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-8 border border-accent-ai/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent-ai/20 flex items-center justify-center">
              <span className="text-2xl">📜</span>
            </div>
            <h2 className="text-3xl font-bold text-accent-ai">O que é a PL 21/2020?</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-4">
              <p className="text-foreground/90 text-lg leading-relaxed">
                O <strong>Projeto de Lei 21/2020</strong> estabelece o <strong>Marco Legal da Inteligência Artificial</strong> no Brasil, 
                propondo fundamentos, princípios e diretrizes para o desenvolvimento e aplicação de sistemas de IA.
              </p>
              
              <div className="p-4 bg-card/40 rounded-lg border border-border/20">
                <h3 className="font-semibold text-foreground mb-2">🎯 Objetivo Principal</h3>
                <p className="text-sm text-foreground/80">
                  Regular o desenvolvimento, implementação e uso de sistemas de inteligência artificial no território nacional, 
                  promovendo inovação responsável e proteção de direitos fundamentais.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-accent-ai/10 rounded-lg border border-accent-ai/20">
                <h3 className="font-semibold text-accent-ai mb-3">📊 Status Atual</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-ai rounded-full"></span>
                    Apresentado em 2020
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-ai rounded-full"></span>
                    Em tramitação no Senado Federal
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent-ai rounded-full"></span>
                    Relatoria: Sen. Styvenson Valentim
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Principles */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-8 border border-accent-cyber/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent-cyber/20 flex items-center justify-center">
              <span className="text-2xl">⚡</span>
            </div>
            <h2 className="text-3xl font-bold text-accent-cyber">Princípios Norteadores</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "🤝",
                title: "Ética e Responsabilidade",
                description: "Desenvolvimento e uso de IA deve seguir princípios éticos, respeitando dignidade humana e direitos fundamentais."
              },
              {
                icon: "🔍",
                title: "Transparência",
                description: "Sistemas de IA devem ser auditáveis e explicáveis, permitindo compreensão de suas decisões."
              },
              {
                icon: "🔒",
                title: "Privacidade",
                description: "Proteção de dados pessoais e garantia da privacidade no processamento de informações."
              },
              {
                icon: "🛡️",
                title: "Segurança",
                description: "Sistemas seguros e robustos, com medidas de proteção contra ataques e falhas."
              },
              {
                icon: "⚖️",
                title: "Não Discriminação",
                description: "Prevenção de vieses algorítmicos e promoção da equidade e inclusão social."
              },
              {
                icon: "🌱",
                title: "Sustentabilidade",
                description: "Desenvolvimento sustentável considerando impactos ambientais e sociais."
              }
            ].map((principle, index) => (
              <div key={index} className="p-5 bg-card/40 rounded-lg border border-border/20 hover:bg-card/60 transition-all">
                <div className="text-3xl mb-3">{principle.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{principle.title}</h3>
                <p className="text-sm text-foreground/70">{principle.description}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Expected Impacts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-ethics/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-ethics/20 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <h2 className="text-2xl font-bold text-accent-ethics">Impactos Esperados</h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  area: "Inovação Tecnológica",
                  impact: "Estímulo ao desenvolvimento responsável de IA no país"
                },
                {
                  area: "Proteção ao Consumidor", 
                  impact: "Maior segurança jurídica para usuários de sistemas de IA"
                },
                {
                  area: "Competitividade",
                  impact: "Posicionamento do Brasil no cenário global de IA"
                },
                {
                  area: "Mercado de Trabalho",
                  impact: "Regulamentação de impactos da IA no emprego"
                },
                {
                  area: "Setor Público",
                  impact: "Diretrizes para uso de IA na administração pública"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-card/40 rounded-lg border border-border/20">
                  <h3 className="font-semibold text-accent-ethics mb-1">{item.area}</h3>
                  <p className="text-sm text-foreground/80">{item.impact}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="bg-gradient-card rounded-2xl shadow-card p-6 border border-accent-future/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-accent-future/20 flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
              <h2 className="text-2xl font-bold text-accent-future">Desafios e Riscos</h2>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  challenge: "Complexidade Técnica",
                  description: "Dificuldade em regular tecnologia em constante evolução"
                },
                {
                  challenge: "Inovação vs Regulação",
                  description: "Equilibrar proteção com estímulo à inovação"
                },
                {
                  challenge: "Fiscalização",
                  description: "Desafio de monitorar cumprimento das normas"
                },
                {
                  challenge: "Harmonização Global",
                  description: "Alinhamento com regulações internacionais"
                },
                {
                  challenge: "Capacitação",
                  description: "Necessidade de qualificar profissionais e reguladores"
                }
              ].map((item, index) => (
                <div key={index} className="p-4 bg-card/40 rounded-lg border border-border/20">
                  <h3 className="font-semibold text-accent-future mb-1">{item.challenge}</h3>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>

        {/* Resumo Autoral */}
        <article className="bg-gradient-card rounded-2xl shadow-card p-8 border border-accent-ai/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-accent-ai/20 flex items-center justify-center">
              <span className="text-2xl">✍️</span>
            </div>
            <h2 className="text-3xl font-bold text-accent-ai">Resumo Autoral do Grupo</h2>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <div className="bg-card/40 rounded-lg p-6 border border-border/20">
              <p className="text-foreground/90 leading-relaxed mb-4">
                A <strong>PL 21/2020</strong> representa um marco fundamental para o Brasil no cenário da regulamentação de Inteligência Artificial. 
                Nossa análise revela que o projeto busca equilibrar a promoção da inovação tecnológica com a proteção de direitos fundamentais, 
                estabelecendo um framework legal robusto para o desenvolvimento responsável de IA.
              </p>
              
              <p className="text-foreground/90 leading-relaxed mb-4">
                O projeto se destaca por sua abordagem baseada em princípios, priorizando <strong>ética, transparência e responsabilidade</strong>. 
                Isso é crucial em um momento onde a IA permeia diversos setores da sociedade, desde saúde e educação até segurança pública e 
                sistemas financeiros.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                Consideramos que a aprovação desta lei será essencial para posicionar o Brasil como líder regional em regulação de IA, 
                oferecendo segurança jurídica para empresas e proteção para cidadãos, enquanto mantém o país competitivo no cenário 
                tecnológico global.
              </p>
            </div>
          </div>
        </article>

        {/* Conclusion */}
        <article className="bg-gradient-accent rounded-2xl shadow-elevated p-8 border border-border text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-card/20 flex items-center justify-center">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="text-3xl font-bold text-foreground">Conclusão do Grupo</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg text-foreground/90 leading-relaxed">
              A PL 21/2020 representa um passo necessário e estratégico para o futuro tecnológico do Brasil. 
              Sua aprovação estabelecerá as bases para um desenvolvimento de IA que seja ao mesmo tempo inovador e responsável.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="p-4 bg-card/20 rounded-lg">
                <div className="text-2xl mb-2">🏆</div>
                <h3 className="font-semibold mb-1">Relevância</h3>
                <p className="text-sm text-foreground/80">Marco regulatório histórico</p>
              </div>
              <div className="p-4 bg-card/20 rounded-lg">
                <div className="text-2xl mb-2">🌟</div>
                <h3 className="font-semibold mb-1">Impacto</h3>
                <p className="text-sm text-foreground/80">Transformação social e econômica</p>
              </div>
              <div className="p-4 bg-card/20 rounded-lg">
                <div className="text-2xl mb-2">🚀</div>
                <h3 className="font-semibold mb-1">Futuro</h3>
                <p className="text-sm text-foreground/80">Posicionamento global do Brasil</p>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-card rounded-3xl shadow-card p-6 text-center border border-border">
        <div className="space-y-3">
          <h3 className="text-lg font-bold text-accent-ai">📚 Fontes de Pesquisa</h3>
          <div className="text-sm text-foreground/70 space-y-1">
            <p>• Texto integral da PL 21/2020 - Senado Federal</p>
            <p>• Relatórios de tramitação - Congresso Nacional</p>
            <p>• Análises acadêmicas sobre regulação de IA</p>
            <p>• Documentos oficiais do governo federal</p>
          </div>
          <p className="text-xs text-foreground/60 mt-4">
            💡 Este trabalho complementa o TDE1, expandindo o portfólio acadêmico sobre tecnologia e legislação.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TDE2;