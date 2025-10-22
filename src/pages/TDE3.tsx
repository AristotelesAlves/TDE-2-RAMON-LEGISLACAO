import React from 'react';
import { Shield, AlertCircle, Lock, Users, FileText, Building2, Server, UserCheck, Clock, Database, Eye, CheckCircle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TDE3  () {
  const dadosColetados = [
    { name: 'Cadastrais', value: 35, color: '#3B82F6' },
    { name: 'Sensíveis', value: 25, color: '#EF4444' },
    { name: 'Funcionais', value: 25, color: '#10B981' },
    { name: 'Educacionais', value: 15, color: '#F59E0B' }
  ];

  const timeline = [
    { fase: 'Diagnóstico', concluido: 100, pendente: 0 },
    { fase: 'Políticas', concluido: 80, pendente: 20 },
    { fase: 'Sistemas', concluido: 60, pendente: 40 },
    { fase: 'Treinamento', concluido: 40, pendente: 60 },
    { fase: 'Monitoramento', concluido: 20, pendente: 80 }
  ];

  const renderCustomLabel = (entry) => {
    return `${entry.name}: ${entry.value}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-12 space-y-10">
      {/* Hero Section */}
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
      <section className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-blue-400" />
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-300">
              Cartilha de Adequação à LGPD
            </h1>
          </div>
          <p className="text-xl text-blue-100/90 mb-6">
            Lei Geral de Proteção de Dados - Lei nº 13.709/2018
          </p>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h2 className="font-semibold text-2xl mb-4 text-blue-200">
              🏛️ Prefeitura Municipal de Santa Aurora
            </h2>
            <p className="text-blue-100/80 leading-relaxed max-w-4xl mx-auto">
              A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) tem como objetivo proteger os direitos fundamentais de liberdade e privacidade, garantindo o uso responsável e transparente das informações pessoais. No contexto da administração pública, o cumprimento da LGPD é essencial para manter a confiança dos cidadãos.
            </p>
          </div>
        </div>
      </section>

      {/* Estrutura Organizacional */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <Building2 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Estrutura Organizacional</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50">
            <h3 className="font-semibold text-lg text-blue-200 mb-4">📊 Informações Gerais</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span><strong className="text-blue-300">Nome:</strong> Prefeitura Municipal de Santa Aurora</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span><strong className="text-blue-300">Ramo:</strong> Administração pública municipal</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span><strong className="text-blue-300">Funcionários:</strong> 320 servidores públicos</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50">
            <h3 className="font-semibold text-lg text-blue-200 mb-4">🏢 Secretarias</h3>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { name: 'Gabinete do Prefeito', icon: '👔' },
                { name: 'Administração e Finanças', icon: '💼' },
                { name: 'Saúde', icon: '🏥' },
                { name: 'Educação', icon: '📚' },
                { name: 'Assistência Social', icon: '🤝' },
                { name: 'Tecnologia e Inovação', icon: '💻', highlight: true }
              ].map((sec, idx) => (
                <div 
                  key={idx} 
                  className={`p-2 rounded-lg ${sec.highlight ? 'bg-blue-600/30 border border-blue-400/50' : 'bg-slate-700/50'}`}
                >
                  <span className="mr-1">{sec.icon}</span>
                  <span className="text-slate-200">{sec.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tipos de Dados */}
        <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl p-6 border border-blue-500/30">
          <h3 className="font-semibold text-xl text-blue-300 mb-4 flex items-center gap-2">
            <Database className="w-6 h-6" />
            Tipos de Dados Coletados e Utilizados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Dados Cadastrais', items: 'nome, CPF, RG, endereço, telefone, e-mail', icon: '📋', color: 'blue' },
              { title: 'Dados Sensíveis', items: 'estado de saúde, renda familiar, deficiência, religião', icon: '🔐', color: 'red' },
              { title: 'Dados Funcionais', items: 'folha de pagamento, ponto eletrônico, avaliações', icon: '👔', color: 'green' },
              { title: 'Dados Educacionais', items: 'matrículas escolares, histórico de alunos', icon: '🎓', color: 'yellow' }
            ].map((tipo, idx) => (
              <div key={idx} className="bg-slate-800/40 p-4 rounded-lg border border-slate-700/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{tipo.icon}</span>
                  <h4 className="font-semibold text-blue-200">{tipo.title}</h4>
                </div>
                <p className="text-xs text-slate-400">{tipo.items}</p>
              </div>
            ))}
          </div>
        </div>
      </article>

      {/* Gráfico de Distribuição */}
      <article className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
            <Eye className="w-7 h-7 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-purple-300">Distribuição de Tipos de Dados</h2>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={dadosColetados}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {dadosColetados.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </article>

      {/* Riscos e Pilares */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Riscos */}
        <article className="bg-gradient-to-br from-slate-800/80 to-red-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-red-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/30">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-red-300">Riscos Identificados</h2>
          </div>

          <div className="space-y-3">
            {[
              'Armazenamento inadequado em planilhas e documentos físicos',
              'Acesso indevido por servidores não autorizados',
              'Ausência de políticas formais de privacidade',
              'Falhas de segurança em sistemas antigos',
              'Falta de conscientização sobre boas práticas'
            ].map((risco, idx) => (
              <div key={idx} className="bg-red-950/30 p-3 rounded-lg border border-red-800/30 flex items-start gap-3">
                <span className="text-red-400 font-bold text-sm flex-shrink-0">{idx + 1}.</span>
                <p className="text-sm text-slate-300">{risco}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Pilares de Segurança */}
        <article className="bg-gradient-to-br from-slate-800/80 to-green-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
              <Lock className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-300">Pilares de Segurança</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Lock, name: 'Criptografia', desc: 'Proteção avançada' },
              { icon: UserCheck, name: 'Controle de Acesso', desc: 'Permissões por perfil' },
              { icon: Server, name: 'Backup', desc: 'Automatizado' },
              { icon: Users, name: 'Capacitação', desc: 'Treinamento contínuo' }
            ].map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div key={idx} className="text-center bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2 border border-green-400/30">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-xs font-bold text-green-200">{pilar.name}</p>
                  <p className="text-xs text-slate-400">{pilar.desc}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>

      {/* Proposta de Adequação */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <CheckCircle className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Proposta de Adequação à LGPD</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1. Coleta e Armazenamento Seguro',
              items: [
                'Sistemas digitais com criptografia',
                'Servidores seguros com backup',
                'Termos de consentimento',
                'Eliminação de arquivos físicos'
              ],
              color: 'green'
            },
            {
              title: '2. Políticas Internas',
              items: [
                'Política Municipal de Privacidade',
                'Nomeação de DPO (Encarregado)'
              ],
              color: 'blue'
            },
            {
              title: '3. Treinamento de Servidores',
              items: [
                'Capacitações trimestrais',
                'Manual de boas práticas',
                'Campanhas contra phishing'
              ],
              color: 'purple'
            },
            {
              title: '4. Medidas de Emergência',
              items: [
                'Comunicação imediata à ANPD',
                'Medidas corretivas rápidas',
                'Sindicância interna'
              ],
              color: 'red'
            }
          ].map((medida, idx) => (
            <div key={idx} className={`bg-${medida.color}-950/30 p-5 rounded-xl border border-${medida.color}-800/30`}>
              <h3 className={`font-semibold text-lg text-${medida.color}-200 mb-3`}>{medida.title}</h3>
              <ul className="space-y-2">
                {medida.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className={`w-1.5 h-1.5 bg-${medida.color}-400 rounded-full`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      {/* Timeline de Implementação */}
      

      {/* Conclusão */}
      <article className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-400/40 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-400/30 flex items-center justify-center border border-blue-300/50">
            <Shield className="w-7 h-7 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold text-blue-200">Conclusão</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-blue-100/90 leading-relaxed">
            A adequação à LGPD é um passo fundamental para modernizar a gestão pública e garantir o respeito à privacidade dos cidadãos. A Prefeitura Municipal de Santa Aurora reafirma seu compromisso com a transparência, a ética e a segurança da informação, assegurando que cada dado pessoal seja tratado com responsabilidade e dentro dos princípios da lei.
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl">
            <p className="text-2xl font-bold italic text-white">"Proteger dados é proteger pessoas."</p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-slate-700/50">
        <p className="text-sm text-slate-400">
          Prefeitura Municipal de Santa Aurora | Página 3 de 3
        </p>
      </footer>
    </div>
  );
}