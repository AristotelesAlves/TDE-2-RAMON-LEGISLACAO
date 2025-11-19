// Update this page (the content is just a fallback if you fail to update the page)

import React from 'react';
import { Shield, AlertCircle, Lock, Users, Building2, Server, UserCheck, Eye, CheckCircle, BarChart3, TrendingUp, Heart, Info, Target, AlertTriangle } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

export default function TDE4 () {
  // Dados da Cartilha
  const dadosColetados = [
    { name: 'Cadastrais', value: 35, color: '#3B82F6' },
    { name: 'Sensíveis', value: 25, color: '#EF4444' },
    { name: 'Funcionais', value: 25, color: '#10B981' },
    { name: 'Educacionais', value: 15, color: '#F59E0B' }
  ];

  // Dados de Pesquisa
  const conhecimentoLGPD = [
    { grupo: 'Pessoas', sim: 84, nao: 8, incerto: 8 },
    { grupo: 'Empresas', sim: 60, superficial: 20, nao: 20 },
    { grupo: 'ONGs', sim: 100, nao: 0, incerto: 0 }
  ];

  const conhecimentoDPO = [
    { grupo: 'Pessoas Físicas', conhece: 16, ouviuFalar: 26, naoConhece: 58 },
    { grupo: 'Empresas', possui: 0, implementando: 20, naoSabe: 80 },
    { grupo: 'ONGs', possui: 100, nao: 0 }
  ];

  const politicaPrivacidade = [
    { grupo: 'Empresas', possui: 0, emConstrucao: 100, nao: 0 },
    { grupo: 'ONGs', possui: 100, nao: 0 }
  ];

  const maturidadeData = [
    { categoria: 'Conhecimento', pessoas: 45, empresas: 30, ongs: 80 },
    { categoria: 'Políticas', pessoas: 25, empresas: 20, ongs: 100 },
    { categoria: 'Segurança', pessoas: 30, empresas: 40, ongs: 100 },
    { categoria: 'Treinamento', pessoas: 35, empresas: 10, ongs: 100 },
    { categoria: 'Processos', pessoas: 20, empresas: 30, ongs: 100 }
  ];

  const segurancaPessoas = [
    { name: 'Totalmente seguro', value: 3, color: '#10B981' },
    { name: 'Parcialmente', value: 24, color: '#3B82F6' },
    { name: 'Pouco seguro', value: 27, color: '#F59E0B' },
    { name: 'Inseguro', value: 46, color: '#EF4444' }
  ];

  const praticasSeguranca = [
    { name: 'Não possui', value: 60, color: '#EF4444' },
    { name: 'Algumas práticas', value: 40, color: '#F59E0B' },
    { name: 'Possui completo', value: 0, color: '#10B981' }
  ];

  const renderCustomLabel = (entry: any) => {
    return `${entry.name}: ${entry.value}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-12 space-y-10">
      {/* Hero Section Principal */}
      <section className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-blue-300 mb-4">
            LGPD - Santa Aurora
          </h1>
          <p className="text-2xl text-blue-100/90 mb-6">
            Cartilha Completa de Adequação à LGPD
          </p>
          <p className="text-lg text-blue-100/80">
            Lei Geral de Proteção de Dados - Lei nº 13.709/2018
          </p>
        </div>
      </section>

      {/* Integrantes */}
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

      {/* Divisor Parte 1 - CARTILHA */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-blue-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-2 rounded-full border-2 border-blue-500/30 text-blue-300 font-bold text-xl">
            PARTE 1: CARTILHA PREFEITURA MUNICIPAL
          </span>
        </div>
      </div>

      {/* Contexto LGPD */}
      <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
        <h2 className="font-semibold text-2xl mb-4 text-blue-200">
          🏛️ Prefeitura Municipal de Santa Aurora
        </h2>
        <p className="text-blue-100/80 leading-relaxed">
          A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) tem como objetivo proteger os direitos fundamentais de liberdade e privacidade, garantindo o uso responsável e transparente das informações pessoais. No contexto da administração pública, o cumprimento da LGPD é essencial para manter a confiança dos cidadãos.
        </p>
      </div>

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
            <Eye className="w-6 h-6" />
            Tipos de Dados Coletados e Utilizados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: 'Dados Cadastrais', items: 'nome, CPF, RG, endereço, telefone, e-mail', icon: '📋' },
              { title: 'Dados Sensíveis', items: 'estado de saúde, renda familiar, deficiência, religião', icon: '🔐' },
              { title: 'Dados Funcionais', items: 'folha de pagamento, ponto eletrônico, avaliações', icon: '👔' },
              { title: 'Dados Educacionais', items: 'matrículas escolares, histórico de alunos', icon: '🎓' }
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

      {/* Conclusão Parte 1 */}
      <article className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-400/40 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-400/30 flex items-center justify-center border border-blue-300/50">
            <Shield className="w-7 h-7 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold text-blue-200">Conclusão Cartilha</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-lg text-blue-100/90 leading-relaxed">
            A adequação à LGPD é um passo fundamental para modernizar a gestão pública e garantir o respeito à privacidade dos cidadãos. A Prefeitura Municipal de Santa Aurora reafirma seu compromisso com a transparência, a ética e a segurança da informação.
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl">
            <p className="text-2xl font-bold italic text-white">"Proteger dados é proteger pessoas."</p>
          </div>
        </div>
      </article>

      {/* Divisor Parte 2 - PESQUISA */}
      <div className="relative py-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-green-500/30"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 px-6 py-2 rounded-full border-2 border-green-500/30 text-green-300 font-bold text-xl">
            PARTE 2: PESQUISA NACIONAL LGPD
          </span>
        </div>
      </div>

      {/* Hero Pesquisa */}
      <section className="relative bg-gradient-to-br from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-green-500/30 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BarChart3 className="w-12 h-12 text-green-400" />
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-green-300">
              Pesquisa Nacional LGPD
            </h1>
          </div>
          <p className="text-xl text-green-100/90 mb-6">
            Análise Comparativa: Pessoas, Empresas e ONGs
          </p>
          
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h2 className="font-semibold text-2xl mb-4 text-green-200">
              📊 Dados da Pesquisa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-950/40 p-4 rounded-xl border border-blue-800/30">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-blue-300">38</p>
                <p className="text-sm text-blue-100/80">Pessoas Físicas</p>
              </div>
              <div className="bg-green-950/40 p-4 rounded-xl border border-green-800/30">
                <Building2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-green-300">5</p>
                <p className="text-sm text-green-100/80">Empresas</p>
              </div>
              <div className="bg-purple-950/40 p-4 rounded-xl border border-purple-800/30">
                <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <p className="text-3xl font-bold text-purple-300">1</p>
                <p className="text-sm text-purple-100/80">ONGs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conhecimento sobre LGPD */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <Info className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Conhecimento sobre a LGPD</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
            <h3 className="font-semibold text-xl text-blue-200 mb-4">Por Grupo</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conhecimentoLGPD}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="grupo" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="sim" name="Sim" fill="#10B981" />
                <Bar dataKey="superficial" name="Superficial" fill="#F59E0B" />
                <Bar dataKey="nao" name="Não" fill="#EF4444" />
                <Bar dataKey="incerto" name="Incerto" fill="#6B7280" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-gradient-to-br from-blue-950/40 to-purple-950/40 rounded-xl p-6 border border-blue-800/30">
            <h3 className="font-semibold text-xl text-blue-200 mb-4">📈 Insights</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-300">ONGs lideram</p>
                  <p className="text-sm text-slate-300">100% das ONGs conhecem a LGPD</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-yellow-300">Empresas em alerta</p>
                  <p className="text-sm text-slate-300">40% das empresas têm conhecimento limitado ou nulo</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-blue-300">População consciente</p>
                  <p className="text-sm text-slate-300">84% das pessoas já ouviram falar da LGPD</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* DPO */}
      <article className="bg-gradient-to-br from-slate-800/80 to-red-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-red-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/30">
            <AlertTriangle className="w-7 h-7 text-red-400" />
          </div>
          <h2 className="text-3xl font-bold text-red-300">Conhecimento sobre DPO (Encarregado)</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
            <h3 className="font-semibold text-xl text-red-200 mb-4">Comparativo por Grupo</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={conhecimentoDPO} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis type="number" stroke="#94a3b8" />
                <YAxis dataKey="grupo" type="category" width={120} stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="conhece" name="Conhece bem" fill="#10B981" />
                <Bar dataKey="ouviuFalar" name="Ouviu falar" fill="#F59E0B" />
                <Bar dataKey="naoConhece" name="Não conhece" fill="#EF4444" />
                <Bar dataKey="possui" name="Possui DPO" fill="#10B981" />
                <Bar dataKey="implementando" name="Implementando" fill="#3B82F6" />
                <Bar dataKey="naoSabe" name="Não sabe o que é" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="bg-red-950/40 rounded-xl p-5 border border-red-800/30">
              <h4 className="font-semibold text-lg text-red-200 mb-3">🚨 Problema Crítico</h4>
              <div className="space-y-3 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <strong>80%</strong> das empresas não sabem o que é DPO
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  <strong>58%</strong> das pessoas nunca ouviram falar
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Apenas <strong>1 ONG</strong> possui DPO nomeado
                </p>
              </div>
            </div>

            <div className="bg-blue-950/40 rounded-xl p-5 border border-blue-800/30">
              <h4 className="font-semibold text-lg text-blue-200 mb-3">💡 O que é DPO?</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                O <strong>Encarregado de Proteção de Dados (DPO)</strong> é o profissional responsável por garantir 
                que a organização esteja em conformidade com a LGPD, servindo como canal de comunicação entre 
                a empresa, os titulares dos dados e a ANPD.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Política de Privacidade */}
      <article className="bg-gradient-to-br from-slate-800/80 to-green-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-green-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
            <Shield className="w-7 h-7 text-green-400" />
          </div>
          <h2 className="text-3xl font-bold text-green-300">Política de Privacidade</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50 lg:col-span-2">
            <h3 className="font-semibold text-xl text-green-200 mb-4">Status nas Organizações</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={politicaPrivacidade}>
                <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
                <XAxis dataKey="grupo" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
                <Legend />
                <Bar dataKey="possui" name="Possui" fill="#10B981" />
                <Bar dataKey="emConstrucao" name="Em construção" fill="#F59E0B" />
                <Bar dataKey="nao" name="Não possui" fill="#EF4444" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="bg-green-950/40 rounded-xl p-5 border border-green-800/30">
              <h4 className="font-semibold text-lg text-green-200 mb-3">✅ Destaques Positivos</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>• ONGs: 100% possuem política formalizada</p>
                <p>• Empresas: 100% em construção</p>
              </div>
            </div>

            <div className="bg-yellow-950/40 rounded-xl p-5 border border-yellow-800/30">
              <h4 className="font-semibold text-lg text-yellow-200 mb-3">⚠️ Atenção</h4>
              <p className="text-sm text-slate-300">
                Empresas ainda não finalizaram suas políticas, demonstrando fase inicial de adequação.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Maturidade LGPD */}
      <article className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
            <Target className="w-7 h-7 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-purple-300">Maturidade em Adequação à LGPD</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50 flex items-center justify-center">
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={maturidadeData}>
                <PolarGrid stroke="#475569" />
                <PolarAngleAxis dataKey="categoria" stroke="#94a3b8" />
                <PolarRadiusAxis stroke="#94a3b8" />
                <Radar name="Pessoas" dataKey="pessoas" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.3} />
                <Radar name="Empresas" dataKey="empresas" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                <Radar name="ONGs" dataKey="ongs" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.3} />
                <Legend />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="bg-purple-950/40 rounded-xl p-5 border border-purple-800/30">
              <h4 className="font-semibold text-lg text-purple-200 mb-3">📊 Análise Comparativa</h4>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-purple-300 mb-1">🥇 ONGs (Nível Alto)</p>
                  <p className="text-slate-300">Maturidade completa em todas as dimensões</p>
                </div>
                <div>
                  <p className="font-semibold text-blue-300 mb-1">🥈 Pessoas (Nível Médio-Baixo)</p>
                  <p className="text-slate-300">Conhecimento teórico, mas falta prática</p>
                </div>
                <div>
                  <p className="font-semibold text-green-300 mb-1">🥉 Empresas (Nível Baixo)</p>
                  <p className="text-slate-300">Fase inicial, necessitam investimento urgente</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/60 rounded-xl p-5 border border-slate-700/50">
              <h4 className="font-semibold text-lg text-slate-200 mb-3">🎯 Áreas Críticas</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <p>🚨 Treinamento: Empresas (10%)</p>
                <p>🚨 Políticas: Empresas (20%)</p>
                <p>🚨 Processos: Pessoas (20%) e Empresas (30%)</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Segurança e Práticas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <article className="bg-gradient-to-br from-slate-800/80 to-orange-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-orange-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-400/30">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <h2 className="text-2xl font-bold text-orange-300">Percepção de Segurança</h2>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={segurancaPessoas}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {segurancaPessoas.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 bg-red-950/40 rounded-lg p-4 border border-red-800/30">
              <p className="text-sm text-slate-300">
                <strong className="text-red-300">73%</strong> das pessoas sentem-se pouco seguras ou inseguras.
              </p>
            </div>
          </div>
        </article>

        <article className="bg-gradient-to-br from-slate-800/80 to-cyan-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-cyan-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-400/30">
              <Building2 className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold text-cyan-300">Práticas de Segurança</h2>
          </div>

          <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={praticasSeguranca}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.name}: ${entry.value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {praticasSeguranca.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }} />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-4 bg-yellow-950/40 rounded-lg p-4 border border-yellow-800/30">
              <p className="text-sm text-slate-300">
                <strong className="text-yellow-300">60%</strong> das empresas não possuem práticas implementadas.
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Recomendações */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <TrendingUp className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Recomendações para Políticas Públicas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1. Campanhas de Conscientização',
              priority: 'Alta',
              color: 'red',
              items: [
                'Programas educacionais sobre LGPD',
                'Material didático acessível',
                'Campanhas nas redes sociais',
                'Palestras em escolas'
              ]
            },
            {
              title: '2. Capacitação Empresarial',
              priority: 'Crítica',
              color: 'orange',
              items: [
                'Cursos gratuitos sobre LGPD',
                'Consultoria subsidiada',
                'Manual de implementação',
                'Certificação de conformidade'
              ]
            },
            {
              title: '3. Apoio ao Terceiro Setor',
              priority: 'Média',
              color: 'green',
              items: [
                'Reconhecimento de boas práticas',
                'Incentivos fiscais',
                'Compartilhamento de conhecimento',
                'Parcerias para disseminação'
              ]
            },
            {
              title: '4. Infraestrutura de Segurança',
              priority: 'Alta',
              color: 'blue',
              items: [
                'Subsídios para sistemas seguros',
                'Parceria com empresas de tecnologia',
                'Central de suporte técnico',
                'Auditorias periódicas'
              ]
            },
            {
              title: '5. Marco Regulatório Municipal',
              priority: 'Alta',
              color: 'purple',
              items: [
                'Decreto municipal de proteção',
                'Criação do cargo de DPO municipal',
                'Comitê gestor de privacidade',
                'Portal de transparência'
              ]
            },
            {
              title: '6. Canal de Denúncias',
              priority: 'Média',
              color: 'pink',
              items: [
                'Ouvidoria especializada',
                'App para denúncias anônimas',
                'Procedimentos de investigação',
                'Punições para descumprimento'
              ]
            }
          ].map((rec, idx) => (
            <div key={idx} className={`bg-${rec.color}-950/30 p-5 rounded-xl border border-${rec.color}-800/30`}>
              <div className="flex items-center justify-between mb-3">
                <h3 className={`font-semibold text-lg text-${rec.color}-200`}>{rec.title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full bg-${rec.color}-500/20 text-${rec.color}-300 border border-${rec.color}-500/30`}>
                  {rec.priority}
                </span>
              </div>
              <ul className="space-y-2">
                {rec.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-slate-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>

      {/* Conclusões Finais */}
      <article className="bg-gradient-to-br from-blue-600/30 to-purple-600/30 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-400/40">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-400/30 flex items-center justify-center border border-blue-300/50">
            <Shield className="w-7 h-7 text-blue-300" />
          </div>
          <h2 className="text-3xl font-bold text-blue-200">Conclusões da Pesquisa</h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-950/40 p-5 rounded-xl border border-blue-800/30">
              <h3 className="font-bold text-xl text-blue-200 mb-2">Pontos Positivos</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>✅ Alta conscientização (84%)</li>
                <li>✅ ONGs como referência</li>
                <li>✅ Empresas iniciando adequação</li>
                <li>✅ Reconhecimento da importância</li>
              </ul>
            </div>

            <div className="bg-red-950/40 p-5 rounded-xl border border-red-800/30">
              <h3 className="font-bold text-xl text-red-200 mb-2">Desafios Críticos</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>🚨 Desconhecimento sobre DPO</li>
                <li>🚨 Ausência de práticas (60%)</li>
                <li>🚨 Baixa percepção de segurança</li>
                <li>🚨 Falta de treinamento</li>
              </ul>
            </div>

            <div className="bg-green-950/40 p-5 rounded-xl border border-green-800/30">
              <h3 className="font-bold text-xl text-green-200 mb-2">Oportunidades</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>💡 Demanda por capacitação</li>
                <li>💡 Empresas em construção</li>
                <li>💡 População valoriza proteção</li>
                <li>💡 Liderança governamental</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/20 to-purple-600/20 p-6 rounded-xl border border-blue-400/30">
            <h3 className="font-bold text-2xl text-blue-200 mb-4 text-center">Chamado à Ação</h3>
            <p className="text-lg text-blue-100/90 leading-relaxed text-center mb-4">
              Os dados revelam uma janela de oportunidade para o poder público implementar 
              políticas efetivas de proteção de dados. A conscientização existe, mas precisa ser transformada 
              em ações concretas através de investimento em educação, infraestrutura e regulamentação.
            </p>
            <div className="flex justify-center">
              <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-xl">
                <p className="text-xl font-bold italic text-white">
                  "A proteção de dados é um direito fundamental que exige ação imediata."
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Metodologia */}
      <article className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-700/50">
        <h3 className="font-semibold text-xl text-slate-200 mb-4">📋 Metodologia da Pesquisa</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <p className="font-semibold text-blue-300 mb-2">Período de Coleta</p>
            <p className="text-slate-400">17/11/2025 a 19/11/2025</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <p className="font-semibold text-blue-300 mb-2">Instrumento</p>
            <p className="text-slate-400">Questionários online segmentados</p>
          </div>
          <div className="bg-slate-900/50 p-4 rounded-lg">
            <p className="font-semibold text-blue-300 mb-2">Amostra Total</p>
            <p className="text-slate-400">44 respondentes (38+5+1)</p>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-slate-700/50">
        <p className="text-sm text-slate-400">
          LGPD Santa Aurora - Cartilha Completa | Prefeitura Municipal de Santa Aurora | 2025
        </p>
        <p className="text-xs text-slate-500 mt-2">
          Dados coletados anonimamente em conformidade com a Lei nº 13.709/2018
        </p>
      </footer>
    </div>
  );
};
