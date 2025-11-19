import { Shield, AlertCircle, Users, Building2, Heart, TrendingUp, CheckCircle2, XCircle, Info, BarChart3, Database, Eye, Lock, UserCheck, Server } from "lucide-react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TDE4 = () => {
  // Dados processados das pesquisas
  const empresasData = {
    total: 5,
    conheceLGPD: { sim: 3, superficial: 1, nao: 1 },
    temDPO: { sim: 0, emImplementacao: 1, nao: 1, naoSabe: 3 },
    temPolitica: { sim: 0, emConstrucao: 4, nao: 1 },
    coletaDados: { sim: 5 },
    maturidade: { naoIniciou: 2, iniciando: 2, parcial: 1 },
    impacto: { muito: 3, moderado: 1, pouco: 1 }
  };

  const ongsData = {
    total: 3,
    conheceLGPD: { sim: 3 },
    coletaDados: { sim: 3 },
    temPolitica: { sim: 2, emConstrucao: 1 },
    temDPO: { sim: 2, nao: 1 },
    maturidade: { alta: 1, media: 2 },
    importancia: { muitoImportante: 3 }
  };

  const pessoasData = {
    total: 42,
    conheceLGPD: { sim: 35, naoTenhoCerteza: 3, nao: 4 },
    nivelConhecimento: { bem: 3, razoavel: 15, superficial: 8, nada: 16 },
    conheceDPO: { simExato: 2, jaOuviu: 11, nao: 29 },
    solicitouExclusao: { sim: 13, nao: 20, naoSabia: 9 },
    senteSeguronca: { sim: 6, parcial: 12, pouco: 11, nao: 13 },
    importancia: { muitoImportante: 40, importante: 2 }
  };

  // Dados para gráficos
  const distribuicaoRespondentes = [
    { name: 'Pessoas Físicas', value: 84, color: '#3B82F6' },
    { name: 'Empresas', value: 10, color: '#10B981' },
    { name: 'ONGs', value: 6, color: '#8B5CF6' }
  ];

  const conhecimentoLGPD = [
    { grupo: 'Pessoas', conhece: 83, naoConhece: 17 },
    { grupo: 'Empresas', conhece: 60, naoConhece: 40 },
    { grupo: 'ONGs', conhece: 100, naoConhece: 0 }
  ];

  const maturidadeComparativa = [
    { aspecto: 'Conhecimento', pessoas: 83, empresas: 60, ongs: 100 },
    { aspecto: 'Possui Política', pessoas: 31, empresas: 0, ongs: 67 },
    { aspecto: 'Conhece DPO', pessoas: 31, empresas: 20, ongs: 67 },
    { aspecto: 'Sente-se Seguro', pessoas: 43, empresas: 20, ongs: 67 }
  ];

  const renderCustomLabel = (entry: any) => {
    return `${entry.name}: ${entry.value}%`;
  };

  const calcularPercentual = (valor: number, total: number) => {
    return ((valor / total) * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-6 md:p-12 space-y-10">
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

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl shadow-2xl p-8 text-center border border-blue-500/30 overflow-hidden">
        <div className="absolute inset-0 opacity-5"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-blue-400" />
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-300">
              Pesquisa sobre Adequação à LGPD
            </h1>
          </div>
          <p className="text-xl text-blue-100/90 mb-6">
            Análise Quantitativa e Exploratória do Nível de Conhecimento e Aplicação
          </p>

          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <h2 className="font-semibold text-2xl mb-4 text-blue-200">
              📊 Metodologia da Pesquisa
            </h2>
            <p className="text-blue-100/80 leading-relaxed max-w-4xl mx-auto">
              Pesquisa quantitativa e exploratória realizada entre 17 e 19 de novembro de 2025, 
              com 50 respondentes (42 pessoas físicas, 5 empresas e 3 ONGs), utilizando formulários 
              digitais com perguntas objetivas sobre conhecimento e aplicação da LGPD.
            </p>
          </div>
        </div>
      </section>

      {/* Resumo Executivo */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <TrendingUp className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Resumo Executivo</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-red-950/30 p-5 rounded-xl border border-red-800/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-6 h-6 text-red-400" />
              <h3 className="font-semibold text-lg text-red-200">Baixa Maturidade</h3>
            </div>
            <p className="text-4xl font-bold text-red-300 mb-2">40%</p>
            <p className="text-sm text-slate-300">
              das empresas não iniciaram adequação à LGPD
            </p>
          </div>

          <div className="bg-yellow-950/30 p-5 rounded-xl border border-yellow-800/30">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-6 h-6 text-yellow-400" />
              <h3 className="font-semibold text-lg text-yellow-200">Desconhecimento</h3>
            </div>
            <p className="text-4xl font-bold text-yellow-300 mb-2">69%</p>
            <p className="text-sm text-slate-300">
              das pessoas nunca ouviram falar em DPO
            </p>
          </div>

          <div className="bg-green-950/30 p-5 rounded-xl border border-green-800/30">
            <div className="flex items-center gap-2 mb-3">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
              <h3 className="font-semibold text-lg text-green-200">Importância</h3>
            </div>
            <p className="text-4xl font-bold text-green-300 mb-2">95%</p>
            <p className="text-sm text-slate-300">
              consideram a LGPD muito importante
            </p>
          </div>
        </div>
      </article>

      {/* Distribuição de Respondentes */}
      <article className="bg-gradient-to-br from-slate-800/80 to-purple-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-purple-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-400/30">
            <Eye className="w-7 h-7 text-purple-400" />
          </div>
          <h2 className="text-3xl font-bold text-purple-300">Distribuição de Respondentes</h2>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distribuicaoRespondentes}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomLabel}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {distribuicaoRespondentes.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center bg-blue-950/30 p-4 rounded-lg border border-blue-800/30">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-300">42</p>
              <p className="text-sm text-slate-400">Pessoas Físicas</p>
            </div>
            <div className="text-center bg-green-950/30 p-4 rounded-lg border border-green-800/30">
              <Building2 className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-300">5</p>
              <p className="text-sm text-slate-400">Empresas</p>
            </div>
            <div className="text-center bg-purple-950/30 p-4 rounded-lg border border-purple-800/30">
              <Heart className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-300">3</p>
              <p className="text-sm text-slate-400">ONGs</p>
            </div>
          </div>
        </div>
      </article>

      {/* Análise Comparativa */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <BarChart3 className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Análise Comparativa por Grupo</h2>
        </div>

        <div className="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50 mb-6">
          <h3 className="font-semibold text-xl text-blue-200 mb-4">Maturidade em LGPD (%)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={maturidadeComparativa}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="aspecto" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#e2e8f0'
                }} 
              />
              <Legend />
              <Bar dataKey="pessoas" fill="#3B82F6" name="Pessoas" />
              <Bar dataKey="empresas" fill="#10B981" name="Empresas" />
              <Bar dataKey="ongs" fill="#8B5CF6" name="ONGs" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Cards Detalhados */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Empresas */}
          <div className="bg-green-950/30 p-5 rounded-xl border border-green-800/30">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-6 h-6 text-green-400" />
              <h3 className="font-semibold text-lg text-green-200">Empresas</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Total</span>
                <span className="font-bold text-green-300">{empresasData.total}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Conhece LGPD</span>
                <span className="font-bold text-green-300">
                  {calcularPercentual(empresasData.conheceLGPD.sim, empresasData.total)}%
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Possui DPO</span>
                <span className="font-bold text-red-300">
                  {calcularPercentual(empresasData.temDPO.sim, empresasData.total)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Maturidade Alta</span>
                <span className="font-bold text-red-300">
                  {calcularPercentual(empresasData.maturidade.parcial, empresasData.total)}%
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-950/30 rounded-lg border border-red-800/30">
              <p className="text-xs text-red-200 flex items-start gap-2">
                <XCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>100% coletam dados, mas 80% não têm política formalizada</span>
              </p>
            </div>
          </div>

          {/* ONGs */}
          <div className="bg-purple-950/30 p-5 rounded-xl border border-purple-800/30">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-purple-400" />
              <h3 className="font-semibold text-lg text-purple-200">ONGs</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Total</span>
                <span className="font-bold text-purple-300">{ongsData.total}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Conhece LGPD</span>
                <span className="font-bold text-green-300">100%</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Possui DPO</span>
                <span className="font-bold text-green-300">
                  {calcularPercentual(ongsData.temDPO.sim, ongsData.total)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Tem Política</span>
                <span className="font-bold text-green-300">
                  {calcularPercentual(ongsData.temPolitica.sim, ongsData.total)}%
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-green-950/30 rounded-lg border border-green-800/30">
              <p className="text-xs text-green-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Maior maturidade: 100% conhecem e aplicam a LGPD</span>
              </p>
            </div>
          </div>

          {/* Pessoas */}
          <div className="bg-blue-950/30 p-5 rounded-xl border border-blue-800/30">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-6 h-6 text-blue-400" />
              <h3 className="font-semibold text-lg text-blue-200">Pessoas Físicas</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Total</span>
                <span className="font-bold text-blue-300">{pessoasData.total}</span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Conhece LGPD</span>
                <span className="font-bold text-green-300">
                  {calcularPercentual(pessoasData.conheceLGPD.sim, pessoasData.total)}%
                </span>
              </div>
              <div className="flex justify-between items-center pb-2 border-b border-slate-700/50">
                <span className="text-slate-300">Conhece DPO</span>
                <span className="font-bold text-red-300">
                  {calcularPercentual(pessoasData.conheceDPO.simExato, pessoasData.total)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Sente-se Seguro</span>
                <span className="font-bold text-yellow-300">
                  {calcularPercentual(pessoasData.senteSeguronca.sim + pessoasData.senteSeguronca.parcial, pessoasData.total)}%
                </span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-yellow-950/30 rounded-lg border border-yellow-800/30">
              <p className="text-xs text-yellow-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Lacuna entre conhecimento teórico e prático sobre direitos</span>
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Riscos e Pilares */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Riscos Identificados */}
        <article className="bg-gradient-to-br from-slate-800/80 to-red-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-red-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-400/30">
              <AlertCircle className="w-6 h-6 text-red-400" />
            </div>
            <h2 className="text-2xl font-bold text-red-300">Riscos Identificados</h2>
          </div>

          <div className="space-y-3">
            {[
              '60% das empresas não sabem o que é DPO',
              '40% das empresas não iniciaram adequação',
              '69% das pessoas desconhecem o papel do DPO',
              '57% das pessoas não se sentem seguras online',
              'Lacuna entre conhecimento teórico e prático'
            ].map((risco, idx) => (
              <div key={idx} className="bg-red-950/30 p-3 rounded-lg border border-red-800/30 flex items-start gap-3">
                <span className="text-red-400 font-bold text-sm flex-shrink-0">{idx + 1}.</span>
                <p className="text-sm text-slate-300">{risco}</p>
              </div>
            ))}
          </div>
        </article>

        {/* Pontos Positivos */}
        <article className="bg-gradient-to-br from-slate-800/80 to-green-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-6 border border-green-500/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-400/30">
              <CheckCircle2 className="w-6 h-6 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-green-300">Pontos Positivos</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Shield, name: '95% Reconhecem', desc: 'Importância da LGPD' },
              { icon: Heart, name: '100% ONGs', desc: 'Conhecem a lei' },
              { icon: Users, name: '83% Pessoas', desc: 'Ouviram falar' },
              { icon: Database, name: '67% ONGs', desc: 'Têm DPO nomeado' }
            ].map((ponto, idx) => {
              const Icon = ponto.icon;
              return (
                <div key={idx} className="text-center bg-slate-800/60 p-4 rounded-lg border border-slate-700/50">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2 border border-green-400/30">
                    <Icon className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-xs font-bold text-green-200">{ponto.name}</p>
                  <p className="text-xs text-slate-400">{ponto.desc}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>

      {/* Recomendações */}
      <article className="bg-gradient-to-br from-slate-800/80 to-blue-900/40 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-blue-500/30">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-400/30">
            <Database className="w-7 h-7 text-blue-400" />
          </div>
          <h2 className="text-3xl font-bold text-blue-300">Recomendações para Políticas Públicas</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: '1. Para Empresas',
              items: [
                'Programas de capacitação obrigatória',
                'Incentivos fiscais para adequação',
                'Guias simplificados sobre DPO',
                'Fiscalização ativa da ANPD'
              ],
              icon: Building2,
              color: 'green'
            },
            {
              title: '2. Para Cidadãos',
              items: [
                'Campanhas educacionais massivas',
                'Portal simplificado de direitos',
                'LGPD em currículos escolares',
                'Canal de denúncias acessível'
              ],
              icon: Users,
              color: 'blue'
            },
            {
              title: '3. Para o Terceiro Setor',
              items: [
                'Reconhecimento de boas práticas',
                'Programas de apoio técnico',
                'Selos de conformidade',
                'Parcerias com universidades'
              ],
              icon: Heart,
              color: 'purple'
            },
            {
              title: '4. Ações Transversais',
              items: [
                'Fortalecimento da ANPD',
                'Tecnologias privacy by design',
                'Observatório nacional LGPD',
                'Parcerias público-privadas'
              ],
              icon: Shield,
              color: 'red'
            }
          ].map((medida, idx) => {
            const Icon = medida.icon;
            return (
              <div key={idx} className={`bg-${medida.color}-950/30 p-5 rounded-xl border border-${medida.color}-800/30`}>
                <div className="flex items-center gap-2 mb-3">
                  <Icon className={`w-6 h-6 text-${medida.color}-400`} />
                  <h3 className={`font-semibold text-lg text-${medida.color}-200`}>{medida.title}</h3>
                </div>
                <ul className="space-y-2">
                  {medida.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                      <div className={`w-1.5 h-1.5 bg-${medida.color}-400 rounded-full`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </article>

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
            A pesquisa evidencia um <strong>cenário paradoxal</strong>: enquanto 95% dos respondentes reconhecem 
            a importância da LGPD, a implementação prática permanece incipiente, especialmente no setor empresarial.
          </p>

          <p className="text-lg text-blue-100/90 leading-relaxed">
            O <strong>desconhecimento generalizado sobre o DPO</strong> (69% das pessoas e 60% das empresas) 
            representa um obstáculo significativo. As <strong>ONGs demonstram maior maturidade</strong>, 
            sinalizando que organizações com propósito social podem estar mais sensíveis à privacidade.
          </p>

          <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-xl mt-4">
            <p className="text-2xl font-bold italic text-white">"Proteger dados é proteger pessoas."</p>
          </div>

          <p className="text-sm text-blue-200/80 mt-6">
            Para que a LGPD cumpra seu papel transformador, são necessárias <strong>políticas públicas integradas</strong> 
            que combinem educação, capacitação, incentivos e fiscalização.
          </p>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-800/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 text-center border border-slate-700/50">
        <p className="text-sm text-slate-400">
          Pesquisa sobre Adequação à LGPD | 17-19 Novembro 2025 | 50 Respondentes
        </p>
      </footer>
    </div>
  );
};

export default TDE4;
