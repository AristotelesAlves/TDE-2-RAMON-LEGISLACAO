import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Building2, Heart, TrendingUp, AlertCircle, CheckCircle2, XCircle, Info } from "lucide-react";

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

  const calcularPercentual = (valor: number, total: number) => {
    return ((valor / total) * 100).toFixed(1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Institucional */}
      <header className="bg-gradient-institutional text-primary-foreground shadow-lg">
        <div className="container mx-auto px-6 py-12">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="h-16 w-16" />
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Pesquisa sobre Adequação à LGPD
              </h1>
              <p className="text-xl opacity-95">
                Análise Quantitativa e Exploratória do Nível de Conhecimento e Aplicação
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm py-2 px-4">
              <Users className="h-4 w-4 mr-2" />
              50 Respondentes
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm py-2 px-4">
              <Building2 className="h-4 w-4 mr-2" />
              Empresas: 5
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm py-2 px-4">
              <Heart className="h-4 w-4 mr-2" />
              ONGs: 3
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 text-sm py-2 px-4">
              <Users className="h-4 w-4 mr-2" />
              Pessoas Físicas: 42
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12">
        {/* Resumo Executivo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center gap-3">
            <TrendingUp className="h-8 w-8 text-primary" />
            Resumo Executivo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-l-4 border-l-danger">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <AlertCircle className="h-5 w-5 text-danger" />
                  Baixa Maturidade Empresarial
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-danger mb-2">40%</p>
                <p className="text-sm text-muted-foreground">
                  das empresas não iniciaram adequação à LGPD, mesmo coletando dados pessoais
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-warning">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Info className="h-5 w-5 text-warning" />
                  Desconhecimento do DPO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-warning mb-2">69%</p>
                <p className="text-sm text-muted-foreground">
                  das pessoas físicas nunca ouviram falar em DPO (Encarregado de Dados)
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <CheckCircle2 className="h-5 w-5 text-success" />
                  Reconhecimento da Importância
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-success mb-2">95%</p>
                <p className="text-sm text-muted-foreground">
                  dos respondentes consideram a LGPD muito importante para a proteção de dados
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Metodologia */}
        <section className="mb-12">
          <Card className="bg-gradient-card">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                Metodologia da Pesquisa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Tipo de Pesquisa</h4>
                  <p className="text-muted-foreground">Quantitativa e exploratória</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Instrumento</h4>
                  <p className="text-muted-foreground">Formulários com perguntas objetivas (Google Forms)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Amostra</h4>
                  <p className="text-muted-foreground">50 respondentes (42 pessoas, 5 empresas, 3 ONGs)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Período de Coleta</h4>
                  <p className="text-muted-foreground">17 a 19 de novembro de 2025</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-foreground">
                  <strong>Critério Ético:</strong> Participação voluntária e consentimento para uso dos dados de forma anônima, 
                  em conformidade com os princípios da própria LGPD.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Análise Comparativa por Grupo */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Análise Comparativa por Grupo</h2>
          
          {/* Empresas */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Building2 className="h-6 w-6" />
              Empresas ({empresasData.total} respondentes)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Conhecimento da LGPD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sim</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.conheceLGPD.sim, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.conheceLGPD.sim, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Superficial</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.conheceLGPD.superficial, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.conheceLGPD.superficial, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.conheceLGPD.nao, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.conheceLGPD.nao, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Possui DPO Nomeado</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não sabe o que é</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.temDPO.naoSabe, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.temDPO.naoSabe, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Em implementação</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.temDPO.emImplementacao, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.temDPO.emImplementacao, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.temDPO.nao, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.temDPO.nao, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Maturidade em LGPD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não iniciou</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.maturidade.naoIniciou, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.maturidade.naoIniciou, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Iniciando</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.maturidade.iniciando, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.maturidade.iniciando, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Preparada parcial</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(empresasData.maturidade.parcial, empresasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(empresasData.maturidade.parcial, empresasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-danger/5 border-danger/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-danger mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-danger mb-1">Ponto Crítico</p>
                    <p className="text-sm text-foreground">
                      <strong>100% das empresas</strong> coletam dados pessoais, mas <strong>60% não possuem</strong> Política 
                      de Privacidade formalizada e <strong>60% não sabem o que é DPO</strong>, indicando alta 
                      vulnerabilidade legal e exposição a sanções da ANPD.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ONGs */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6" />
              Organizações do Terceiro Setor ({ongsData.total} respondentes)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Conhecimento da LGPD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sim</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-secondary rounded-full h-2">
                        <div className="bg-success h-2 rounded-full w-full" />
                      </div>
                      <span className="text-sm font-semibold w-12 text-right">100%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Possui Política de Privacidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sim</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(ongsData.temPolitica.sim, ongsData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(ongsData.temPolitica.sim, ongsData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Em construção</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(ongsData.temPolitica.emConstrucao, ongsData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(ongsData.temPolitica.emConstrucao, ongsData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Possui DPO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sim</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(ongsData.temDPO.sim, ongsData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(ongsData.temDPO.sim, ongsData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(ongsData.temDPO.nao, ongsData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(ongsData.temDPO.nao, ongsData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-success/5 border-success/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-success mb-1">Destaque Positivo</p>
                    <p className="text-sm text-foreground">
                      As ONGs demonstram <strong>maior maturidade</strong> em comparação às empresas: 100% conhecem a LGPD, 
                      67% já possuem Política de Privacidade formalizada e 67% têm DPO nomeado. O terceiro setor mostra-se 
                      mais consciente sobre a importância da proteção de dados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Pessoas Físicas */}
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center gap-2">
              <Users className="h-6 w-6" />
              Pessoas Físicas ({pessoasData.total} respondentes)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Conhece a LGPD</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sim</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceLGPD.sim, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceLGPD.sim, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não tenho certeza</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceLGPD.naoTenhoCerteza, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceLGPD.naoTenhoCerteza, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceLGPD.nao, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceLGPD.nao, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Conhece o que é DPO</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sei exatamente</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceDPO.simExato, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceDPO.simExato, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Já ouvi falar</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceDPO.jaOuviu, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceDPO.jaOuviu, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.conheceDPO.nao, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.conheceDPO.nao, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Sente-se Seguro na Internet</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Sim</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-success h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.senteSeguronca.sim, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.senteSeguronca.sim, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Parcialmente</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-warning h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.senteSeguronca.parcial, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.senteSeguronca.parcial, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Não se sente seguro</span>
                      <div className="flex items-center gap-2">
                        <div className="w-32 bg-secondary rounded-full h-2">
                          <div 
                            className="bg-danger h-2 rounded-full" 
                            style={{ width: `${calcularPercentual(pessoasData.senteSeguronca.nao + pessoasData.senteSeguronca.pouco, pessoasData.total)}%` }}
                          />
                        </div>
                        <span className="text-sm font-semibold w-12 text-right">
                          {calcularPercentual(pessoasData.senteSeguronca.nao + pessoasData.senteSeguronca.pouco, pessoasData.total)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-warning/5 border-warning/20">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-warning mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-warning mb-1">Alerta Importante</p>
                    <p className="text-sm text-foreground">
                      Apesar de <strong>83% conhecerem a LGPD</strong>, apenas <strong>5% sabem exatamente o que é um DPO</strong> 
                      e <strong>57% não se sentem seguros</strong> com suas informações pessoais na internet. Existe uma clara 
                      lacuna entre conhecimento teórico e prático sobre direitos de proteção de dados.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Recomendações */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Recomendações para Políticas Públicas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  Para Empresas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Programas de capacitação obrigatória</strong> sobre LGPD para empresas que coletam dados pessoais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Incentivos fiscais</strong> para empresas que implementarem políticas de privacidade robustas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Criação de guias simplificados</strong> sobre nomeação e atribuições do DPO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Fiscalização ativa da ANPD</strong> com foco em micro e pequenas empresas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Para Cidadãos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Campanhas educacionais massivas</strong> sobre direitos garantidos pela LGPD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Criação de portal simplificado</strong> para exercício de direitos (exclusão, correção de dados)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Inclusão da LGPD</strong> em currículos escolares e programas de educação digital</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Canal de denúncias acessível</strong> para violações de dados pessoais</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Para o Terceiro Setor
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Reconhecimento e valorização</strong> das boas práticas já implementadas por ONGs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Programas de apoio técnico</strong> para adequação completa à LGPD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Criação de selos de conformidade</strong> para organizações certificadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Parcerias com universidades</strong> para consultoria gratuita em proteção de dados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Ações Transversais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Fortalecimento da ANPD</strong> com recursos humanos e orçamentários adequados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Desenvolvimento de tecnologias</strong> de privacy by design acessíveis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Criação de observatório nacional</strong> para monitoramento contínuo da adequação à LGPD</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span><strong>Parcerias público-privadas</strong> para desenvolvimento de soluções de baixo custo</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusão */}
        <section>
          <Card className="bg-gradient-institutional text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl">Conclusão</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm">
              <p>
                A pesquisa evidencia um <strong>cenário paradoxal</strong>: enquanto 95% dos respondentes reconhecem 
                a importância da LGPD, a implementação prática permanece incipiente, especialmente no setor empresarial.
              </p>
              <p>
                O <strong>desconhecimento generalizado sobre o papel do DPO</strong> (69% das pessoas e 60% das empresas) 
                representa um obstáculo significativo para a efetiva proteção de dados no país.
              </p>
              <p>
                As <strong>ONGs demonstram maior maturidade</strong>, sinalizando que organizações com propósito social 
                podem estar mais sensíveis à importância da privacidade e proteção de dados.
              </p>
              <p>
                Para que a LGPD cumpra seu papel transformador, são necessárias <strong>políticas públicas integradas</strong> 
                que combinem educação, capacitação, incentivos e fiscalização, garantindo que tanto organizações quanto 
                cidadãos compreendam e exerçam plenamente seus direitos e deveres.
              </p>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs opacity-90">
                  Pesquisa realizada entre 17 e 19 de novembro de 2025 | Amostra: 50 respondentes | 
                  Metodologia: Quantitativa e exploratória
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="h-5 w-5" />
            <span className="font-semibold">Pesquisa sobre Adequação à LGPD</span>
          </div>
          <p className="text-sm opacity-80">
            Análise desenvolvida em conformidade com os princípios da Lei Geral de Proteção de Dados
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TDE4;
