// Banco de estudos do Processo Seletivo SEBRAE/RJ – ALI 02/2026 (Agente, metodologia Educação Empreendedora).
// Montado a partir do Manual do Candidato (cap. 3), do Anexo II (prova objetiva) e do Anexo IV (entrevista).
// Questões ORIGINAIS, escritas sobre o conteúdo programático do edital. IDs 9500+ para não colidir com os outros bancos.

const SB_EDITAL = {
  titulo: 'Processo Seletivo SEBRAE/RJ – ALI 02/2026',
  orgao: 'Agente Local de Inovação — metodologia Educação Empreendedora (ALI_EDU) · banca FAPETEC',
  resumo: [
    ['Prova objetiva', '06/10/2026, às 16h, online — 50 questões, cerca de 2h30'],
    ['Composição', '15 de Língua Portuguesa + 15 de Conhecimentos Específicos ALI + 20 da Metodologia'],
    ['Eliminação', 'zerar em qualquer um dos três blocos elimina, mesmo com nota alta no total'],
    ['Nota de corte', 'relativa — definida pelo desempenho dos melhores candidatos de cada vaga'],
    ['Equipamento', 'computador ou notebook (Windows 7+ ou macOS), Chrome/Edge/Opera, webcam e microfone ligados'],
    ['Acesso', 'login, senha e link enviados por e-mail 24 horas antes'],
    ['Etapa 2', 'Análise curricular e documental — até 10 pontos'],
    ['Etapa 3', 'Entrevista por competências — 100 pontos, 45 minutos, de 24 a 27/11/2026'],
    ['Total do processo', '160 pontos (50 + 10 + 100)'],
    ['Desempate', '1º maior nota na entrevista; 2º maior nota em conhecimentos específicos da metodologia'],
    ['Bolsa', 'R$ 5.000,00 (BIT, nível N4), até 24 meses, início previsto em janeiro/2027'],
    ['Dedicação', 'sem vínculo empregatício ou prestação de serviços durante a bolsa; sem gerência de empresa']
  ]
};

const SB_RESUMOS = [
  {
    eixo: 'Estratégia',
    titulo: 'Como a prova é montada (Anexo II)',
    pontos: [
      'São <b class="hl">50 questões de peso 1</b>: 15 de Língua Portuguesa, 15 de Conhecimentos Específicos ALI (comuns a todas as metodologias) e <b class="hl">20 da sua metodologia, Educação Empreendedora</b>.',
      'A metodologia vale 40% da prova e ainda é critério de desempate. <b class="hl">É onde você mais ganha</b>, porque é a parte mais próxima da sua experiência docente.',
      '<b class="hl">Quem zera um bloco está eliminado</b>, ainda que tenha ido bem nos outros. Não deixe o bloco de Português de lado.',
      'A nota de corte não é fixa: sai do desempenho dos melhores candidatos de cada vaga. A ALI_EDU03 (Centro Sul) tem 1 vaga imediata e 3 de reserva, e só passam para a etapa 2 até 3 vezes o número de vagas.',
      'Prova online com câmera e microfone gravando o tempo todo. Teste o equipamento antes, prefira cabo de rede e deixe a mesa limpa.'
    ]
  },
  {
    eixo: 'Estratégia',
    titulo: 'O projeto que você vai executar (decore isto)',
    pontos: [
      'Bolsa <b class="hl">BIT — Bolsista de Inovação Territorial</b>, nível N4 (graduado em atividade de extensão), R$ 5.000,00, até 24 meses.',
      'São <b class="hl">2 ciclos de 12 meses</b>. Em cada ciclo o agente acompanha <b class="hl">15 instituições de ensino da educação básica</b> (mínimo de 12), com <b class="hl">14 encontros individuais presenciais</b>. Ao final, 30 escolas acompanhadas.',
      'O trabalho segue o ciclo <b class="hl">diagnóstico → levantamento e priorização de problemas → plano de implantação da solução → monitoramento → mensuração</b>, com indicadores <b class="hl">T0 (inicial) e TF (final)</b>.',
      'O resultado vira <b class="hl">produtos técnicos e bibliográficos</b>: artigo, estudo de caso, Diagrama Canvas, relatório técnico de pesquisa.',
      'Para o SEBRAE, educação empreendedora é <b class="hl">desenvolver competências que integram saberes, habilidades e atitudes</b> diante de uma situação real, preparando o jovem para transformar a própria realidade. Não é "ensinar a abrir empresa".',
      'Atuação em raio de até <b class="hl">100 km</b> do município de residência. Três Rios pertence à regional <b class="hl">ALI_EDU03 — Centro Sul</b> (1 vaga imediata, 3 de reserva).'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'SEBRAE: o que é e como nasceu',
    pontos: [
      'Serviço social autônomo, <b class="hl">pessoa jurídica de direito privado sem fins lucrativos</b>, integrante do <b class="hl">Sistema S</b>. Não é órgão público e não integra a administração pública.',
      'Criado em 1972 como <b class="hl">CEBRAE</b>, ligado ao governo federal; foi <b class="hl">desvinculado em 1990 pela Lei 8.029</b> e passou a SEBRAE, mantido por contribuição parafiscal das empresas.',
      'Missão: promover a <b class="hl">competitividade e o desenvolvimento sustentável dos pequenos negócios</b> e fomentar o empreendedorismo.',
      'Estrutura: <b class="hl">SEBRAE Nacional + 27 unidades estaduais</b>. O programa ALI nasceu em 2008, de parceria entre <b class="hl">SEBRAE e CNPq</b>, levando extensionismo tecnológico ao pequeno negócio.',
      'O bolsista ALI não é empregado: recebe <b class="hl">bolsa de estímulo à inovação</b>, sem vínculo, e é acompanhado por resultados, produtos e marcos metodológicos, sem controle de jornada.'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'Manual de Oslo, 4ª edição (2018) — o conceito oficial de inovação',
    pontos: [
      'Publicado por <b class="hl">OCDE e Eurostat</b>; a 4ª edição é de 2018 e é a referência cobrada no edital.',
      'Definição: inovação é um <b class="hl">produto ou processo novo ou aprimorado</b> (ou a combinação dos dois) que <b class="hl">difere significativamente</b> dos anteriores e que foi <b class="hl">disponibilizado a usuários potenciais (produto) ou colocado em uso pela empresa (processo)</b>.',
      'A 4ª edição <b class="hl">reduziu de quatro para dois</b> os tipos de inovação empresarial: <b class="hl">inovação de produto</b> (bens e serviços) e <b class="hl">inovação de processo de negócio</b>. Marketing e organizacional, da 3ª edição, foram absorvidas por processo de negócio.',
      'O requisito mínimo é ser <b class="hl">novo para a empresa</b>. Não precisa ser novidade mundial — por isso o pequeno negócio inova.',
      '<b class="hl">Sem implementação não há inovação</b>. Ideia não implantada é invenção ou projeto.',
      'Grau de novidade: <b class="hl">incremental</b> (melhoria contínua) x <b class="hl">radical ou disruptiva</b> (muda o mercado). <b class="hl">Difusão</b> é o espalhamento da inovação pelo mercado.'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'Pesquisa GEM (Global Entrepreneurship Monitor) 2023/24',
    pontos: [
      'Maior pesquisa mundial sobre empreendedorismo, feita desde 1999; no Brasil é conduzida pelo <b class="hl">SEBRAE com o IBQP e a ANEGEPE</b>, por entrevistas na população de 18 a 64 anos.',
      'Indicadores centrais: <b class="hl">TEA — Taxa de Empreendedorismo Inicial</b> (nascentes, até 3 meses de pagamentos, + novos, até 42 meses) e <b class="hl">TEE — Empreendedores Estabelecidos</b> (mais de 42 meses). A soma é a <b class="hl">TTE — Taxa Total de Empreendedorismo</b>.',
      'Motivação é medida por concordância com frases: <b class="hl">"para ganhar a vida porque o emprego é escasso"</b> (necessidade) e <b class="hl">"para construir grande riqueza" ou "fazer a diferença no mundo"</b> (oportunidade).',
      'O Brasil aparece historicamente entre os países de <b class="hl">maior taxa de empreendedorismo inicial</b>, mas com <b class="hl">alta mortalidade e forte peso da necessidade</b>.',
      'A GEM também avalia as <b class="hl">condições estruturais do ambiente</b> (financiamento, políticas, apoio cultural e educação empreendedora na escola). <b class="hl">A educação empreendedora na educação básica é um dos piores indicadores do Brasil</b> — é exatamente o problema que o seu projeto ataca.'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'Lei Complementar 123/2006 e os pequenos negócios',
    pontos: [
      'A LC 123/2006 é o <b class="hl">Estatuto Nacional da Microempresa e da Empresa de Pequeno Porte</b> (Lei Geral da MPE) e institui o <b class="hl">Simples Nacional</b>, regime unificado de tributos.',
      'Faixas de receita bruta anual: <b class="hl">ME até R$ 360 mil</b>; <b class="hl">EPP acima de R$ 360 mil até R$ 4,8 milhões</b>; <b class="hl">MEI até R$ 81 mil</b> (há propostas de reajuste em tramitação — confira a regra vigente na data da prova).',
      'O MEI foi criado pela <b class="hl">LC 128/2008</b>: pode ter <b class="hl">até um empregado</b>, recolhe valor fixo mensal (DAS) e tem cobertura previdenciária.',
      'O tratamento favorecido à MPE tem base constitucional nos <b class="hl">arts. 170, IX, e 179 da Constituição</b>. A LC 123 prevê ainda <b class="hl">preferência em licitações</b> e simplificação de obrigações.',
      'Os pequenos negócios respondem pela <b class="hl">maioria das empresas e dos empregos formais</b> do país — são o público-fim do SEBRAE.'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'Marco Legal da Inovação e ecossistema',
    pontos: [
      'Base: <b class="hl">Lei 10.973/2004</b> (Lei de Inovação), reformada pela <b class="hl">Lei 13.243/2016</b> (Marco Legal de CT&I) e regulamentada pelo <b class="hl">Decreto 9.283/2018</b>. Fundamento constitucional reforçado pela <b class="hl">EC 85/2015</b> (arts. 218 a 219-B).',
      'Conceitos: <b class="hl">ICT</b> — Instituição Científica, Tecnológica e de Inovação — e <b class="hl">NIT</b> — Núcleo de Inovação Tecnológica, que gere a política de inovação da ICT.',
      'Instrumentos: <b class="hl">encomenda tecnológica</b>, <b class="hl">bônus tecnológico</b>, subvenção econômica, compartilhamento de laboratórios com empresas e participação minoritária da União em empresas inovadoras.',
      '<b class="hl">Ecossistema de inovação</b>: rede de atores que se conectam — empresas, universidades e ICTs, governo e sociedade. Modelos: <b class="hl">hélice tríplice</b> (governo, academia, empresa) e <b class="hl">hélice quádrupla</b>, que inclui a sociedade. Ambientes: incubadoras, aceleradoras, parques tecnológicos, hubs e living labs.',
      'O edital cita "<b class="hl">MEI Tools</b>" dentro de ecossistema: a leitura mais provável é a <b class="hl">MEI — Mobilização Empresarial pela Inovação</b>, coordenada pela CNI, que reúne empresas e governo na agenda de inovação e oferece ferramentas de diagnóstico. Se o termo aparecer, pense em <b class="hl">ferramentas de apoio à gestão da inovação no ecossistema</b>, não no microempreendedor individual.'
    ]
  },
  {
    eixo: 'ALI',
    titulo: 'Produtividade, indicadores e sustentabilidade',
    pontos: [
      '<b class="hl">Produtividade é a razão entre o que se produz e os recursos usados</b>. Não é trabalhar mais: é gerar mais valor com os mesmos recursos.',
      '<b class="hl">Eficiência</b> é fazer com menos recursos; <b class="hl">eficácia</b> é atingir o objetivo; <b class="hl">efetividade</b> é o impacto que permanece.',
      'Todo indicador precisa de fórmula, fonte, periodicidade e responsável. Classificação útil: <b class="hl">esforço (insumo e processo) x resultado (produto, efeito, impacto)</b>. Metas no padrão <b class="hl">SMART</b>.',
      'No ALI a lógica é <b class="hl">medir no início (T0), intervir e medir no fim (TF)</b>. Sem medição inicial não se prova o ganho.',
      'Sustentabilidade: <b class="hl">tripé econômico, social e ambiental</b> (triple bottom line) e a <b class="hl">Agenda 2030, com 17 ODS</b>. Para a educação, o <b class="hl">ODS 4</b>, com as metas <b class="hl">4.4</b> (competências para trabalho e empreendedorismo) e <b class="hl">4.7</b> (educação para o desenvolvimento sustentável).'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'BNCC — Base Nacional Comum Curricular',
    pontos: [
      'Documento <b class="hl">normativo e obrigatório</b> que define as aprendizagens essenciais de toda a educação básica. Previsto na <b class="hl">Constituição (art. 210), na LDB e no PNE</b>; homologado em <b class="hl">2017</b> (infantil e fundamental) e em <b class="hl">2018</b> (ensino médio).',
      'Organiza-se em <b class="hl">10 competências gerais</b>, entendidas como <b class="hl">mobilização de conhecimentos, habilidades, atitudes e valores</b> para resolver demandas da vida real — a mesma lógica do conceito de educação empreendedora do SEBRAE.',
      'A competência mais ligada à educação empreendedora é a <b class="hl">competência 6: trabalho e projeto de vida</b>. Também pesam a <b class="hl">2 (pensamento científico, crítico e criativo)</b>, a <b class="hl">9 (empatia e cooperação)</b> e a <b class="hl">10 (responsabilidade e cidadania)</b>.',
      'A BNCC é <b class="hl">referência para os currículos, não é o currículo</b>: cada rede e escola constrói o seu, com a parte diversificada.',
      'Estrutura no fundamental: <b class="hl">áreas do conhecimento → componentes → unidades temáticas → objetos de conhecimento → habilidades</b>, cada habilidade com código alfanumérico (ex.: EF67LP08).'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Novo Ensino Médio',
    pontos: [
      'Reforma instituída pela <b class="hl">Lei 13.415/2017</b>, que alterou a LDB, e revista pela <b class="hl">Lei 14.945/2024</b>.',
      'Carga horária mínima de <b class="hl">1.000 horas anuais</b> (3.000 no total). Com a Lei 14.945/2024, são <b class="hl">2.400 horas de formação geral básica</b> e <b class="hl">600 horas de itinerários formativos</b>.',
      '<b class="hl">Itinerários formativos</b>: aprofundamento em linguagens, matemática, ciências da natureza, ciências humanas e <b class="hl">formação técnica e profissional</b>, conforme a oferta da rede.',
      'A reforma reforça o <b class="hl">projeto de vida</b> e o protagonismo juvenil — a porta de entrada natural da educação empreendedora na escola.',
      'Português e matemática são obrigatórios nos três anos; a BNCC do ensino médio se organiza por <b class="hl">áreas do conhecimento</b>, não por disciplinas isoladas.'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Metodologias ativas e pedagogia de projetos',
    pontos: [
      'Metodologia ativa põe o <b class="hl">estudante no centro</b>: ele investiga, decide e produz; o professor atua como <b class="hl">mediador</b>. Opõe-se à aula expositiva como estratégia única.',
      'Exemplos: <b class="hl">aprendizagem baseada em problemas (PBL)</b>, <b class="hl">aprendizagem baseada em projetos (ABP)</b>, <b class="hl">sala de aula invertida</b>, estudo de caso, aprendizagem entre pares, gamificação e rotação por estações (ensino híbrido).',
      'Raiz teórica: <b class="hl">John Dewey</b> (aprender fazendo, experiência) e <b class="hl">William Kilpatrick</b> (método de projetos, 1918). No Brasil, dialoga com Anísio Teixeira.',
      'Pedagogia de projetos não é "trabalho em grupo": exige <b class="hl">problema real, intenção pedagógica, planejamento com os alunos, produto final e socialização</b>, com avaliação ao longo do processo.',
      'A avaliação coerente com metodologia ativa é <b class="hl">formativa</b> — acompanha e corrige a rota —, com rubricas, autoavaliação e avaliação por pares, e não apenas prova final.'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Design Thinking',
    pontos: [
      'Abordagem de solução de problemas <b class="hl">centrada nas pessoas</b>, que combina empatia, colaboração e experimentação. Não é técnica de desenho.',
      'Etapas mais cobradas (d.school/IDEO): <b class="hl">empatia → definição → ideação → prototipagem → teste</b>. O modelo equivalente britânico é o <b class="hl">duplo diamante</b> (descobrir, definir, desenvolver, entregar), que alterna <b class="hl">divergência e convergência</b>.',
      'Ferramentas: entrevistas em profundidade, <b class="hl">mapa da empatia</b>, <b class="hl">persona</b>, jornada do usuário, brainstorming e <b class="hl">protótipo de baixa fidelidade</b>.',
      'Lógica central: <b class="hl">errar cedo e barato</b>. O protótipo existe para testar a hipótese antes do investimento.',
      'Na escola, vira ferramenta de inovação pedagógica: a turma identifica um problema real da comunidade escolar e prototipa a solução — o mesmo ciclo que o ALI aplica.'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Paulo Freire — Pedagogia da Autonomia',
    pontos: [
      'Obra de <b class="hl">1996</b>, subtítulo <b class="hl">"saberes necessários à prática educativa"</b>. Frase-chave: <b class="hl">"ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção ou a sua construção"</b>.',
      'Critica a <b class="hl">educação bancária</b> (depositar conteúdo no aluno) e defende a <b class="hl">educação problematizadora e dialógica</b>.',
      'Saberes recorrentes: ensinar exige <b class="hl">rigorosidade metódica, pesquisa, respeito aos saberes do educando, criticidade, ética, humildade, escuta, curiosidade e disponibilidade ao diálogo</b>.',
      'Conceitos correlatos: <b class="hl">autonomia como construção</b>, não concessão; <b class="hl">conscientização</b>; e o educador que também aprende ao ensinar.',
      'Ligação com o projeto: educação empreendedora pressupõe <b class="hl">protagonismo e autonomia</b>. Sem isso, vira treinamento, não formação.'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Educação profissional e educação empreendedora',
    pontos: [
      'A educação profissional e tecnológica está na <b class="hl">LDB, arts. 39 a 42</b>; as formas de articulação com o ensino médio são <b class="hl">integrada, concomitante e subsequente</b> (Decreto 5.154/2004).',
      'Princípios: <b class="hl">trabalho como princípio educativo</b>, <b class="hl">contextualização</b>, <b class="hl">flexibilidade</b>, <b class="hl">itinerário formativo</b> e <b class="hl">articulação entre teoria e prática</b>. Referência de oferta: <b class="hl">Catálogo Nacional de Cursos Técnicos</b>.',
      'Para o SEBRAE, educação empreendedora trabalha o <b class="hl">comportamento empreendedor</b> — as CCEs: busca de oportunidades, persistência, correr riscos calculados, exigência de qualidade, comprometimento, busca de informações, planejamento e monitoramento, persuasão e rede de contatos, independência e autoconfiança, e estabelecimento de metas.',
      'Programas de referência: <b class="hl">JEPP</b> (Jovens Empreendedores Primeiros Passos, na educação básica), a <b class="hl">Jornada Empreendedora</b> e o portal <b class="hl">CER — Centro Sebrae de Referência em Educação Empreendedora</b>.',
      '<b class="hl">Inovação pedagógica não é usar tecnologia</b>: é mudar a relação de ensino e aprendizagem. Tecnologia sem mudança de prática é só modernizar o método antigo.'
    ]
  },
  {
    eixo: 'Metodologia',
    titulo: 'Gestão de projetos',
    pontos: [
      'Projeto é <b class="hl">esforço temporário para criar um produto, serviço ou resultado exclusivo</b> (PMBOK). Tem início e fim definidos, diferente de processo contínuo.',
      'Ciclo de vida: <b class="hl">iniciação, planejamento, execução, monitoramento e controle, encerramento</b>.',
      '<b class="hl">Tripla restrição</b>: escopo, prazo e custo, com a qualidade no centro. Mexer em um afeta os outros.',
      'Ferramentas: <b class="hl">EAP</b> (estrutura analítica do projeto), cronograma e marcos, matriz de riscos, <b class="hl">5W2H</b>, <b class="hl">PDCA</b>, <b class="hl">SWOT</b> e <b class="hl">Canvas</b>.',
      'Métodos ágeis (Scrum, Kanban): entregas curtas e iterativas, papéis definidos e revisão a cada ciclo. O edital descreve o ALI como aplicação de <b class="hl">ferramentas ágeis</b> em ciclos.'
    ]
  },
  {
    eixo: 'Português',
    titulo: 'Língua Portuguesa — onde a banca aperta',
    pontos: [
      '<b class="hl">Interpretação de texto</b> tem o maior peso: separe <b class="hl">tese, argumento, exemplo e conclusão</b>, e responda o que o texto <b class="hl">afirma</b>, não o que parece razoável.',
      '<b class="hl">Crase</b>: só com a + a(s). Não há antes de palavra masculina, verbo ou pronome pessoal; há em <b class="hl">à medida que, à vista, às vezes</b> e em <b class="hl">às 16h</b>.',
      '<b class="hl">Concordância</b>: o verbo concorda com o núcleo do sujeito. Atenção a <b class="hl">haver no sentido de existir</b> (impessoal, fica no singular), a <b class="hl">fazer</b> indicando tempo e ao sujeito composto posposto.',
      '<b class="hl">Regência</b>: assistir a (ver), implicar (sem "em"), visar a (ter por objetivo), preferir uma coisa a outra, obedecer a, aspirar a (almejar).',
      '<b class="hl">Pontuação</b>: não separe sujeito de verbo por vírgula; isole aposto e adjunto adverbial deslocado longo; <b class="hl">oração adjetiva explicativa vem entre vírgulas, a restritiva não</b>.',
      'O edital cobra <b class="hl">parecer, nota técnica e relatório</b>: impessoalidade, clareza, objetividade, norma culta e estrutura (identificação do objeto, análise, conclusão ou recomendação), sustentada em dados.'
    ]
  }
];

const SB_MATERIAS = ['Língua Portuguesa', 'Conhecimentos ALI', 'Educação Empreendedora'];

const questoesSebrae = [
  // ===================== LÍNGUA PORTUGUESA =====================
  {
    id: 9501, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa em que o uso do acento indicativo de crase está correto.',
    alternativas: [
      'O agente entregou o relatório à diretora da escola.',
      'Começamos à trabalhar no diagnóstico na semana passada.',
      'O encontro foi adiado à pedido da coordenação.',
      'Enviei o material à ele ontem à tarde.'
    ],
    correta: 0,
    comentario: 'Crase é a fusão da preposição "a" com o artigo "a(s)". Em "entregar algo a alguém", o verbo pede preposição e "diretora" admite artigo: à. Não há crase antes de verbo ("a trabalhar"), antes de palavra masculina ("a pedido") nem antes de pronome pessoal ("a ele").'
  },
  {
    id: 9502, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa em que a concordância verbal está de acordo com a norma-padrão.',
    alternativas: [
      'Houveram muitos candidatos inscritos no processo seletivo.',
      'Fazem três anos que o projeto foi implantado na escola.',
      'Havia muitos candidatos inscritos no processo seletivo.',
      'Existe, nas escolas da rede, diversos projetos de empreendedorismo.'
    ],
    correta: 2,
    comentario: 'O verbo "haver" no sentido de existir é impessoal e fica no singular: "Havia muitos candidatos". O mesmo vale para "fazer" indicando tempo decorrido ("Faz três anos"). Já "existir" é pessoal e concorda com o sujeito: "Existem diversos projetos".'
  },
  {
    id: 9503, materia: 'Língua Portuguesa',
    enunciado: 'Considere o período: "Os professores, que participaram da formação, aplicaram a metodologia." Sobre o emprego das vírgulas, é correto afirmar que:',
    alternativas: [
      'as vírgulas tornam a oração explicativa, indicando que todos os professores participaram da formação.',
      'as vírgulas são obrigatórias, pois separam o sujeito do predicado.',
      'as vírgulas indicam que apenas parte dos professores participou da formação.',
      'o emprego das vírgulas é indiferente ao sentido da frase.'
    ],
    correta: 0,
    comentario: 'A oração adjetiva entre vírgulas é explicativa: acrescenta informação sobre a totalidade do antecedente. Sem vírgulas, seria restritiva ("Os professores que participaram da formação aplicaram..."), limitando a apenas alguns. Vírgula nunca separa sujeito de predicado.'
  },
  {
    id: 9504, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa em que a regência verbal está correta segundo a norma-padrão.',
    alternativas: [
      'Os alunos assistiram o documentário sobre inovação.',
      'A mudança implicou em novos custos para a escola.',
      'O projeto visa à melhoria dos indicadores de aprendizagem.',
      'Prefiro trabalhar com projetos do que com aulas expositivas.'
    ],
    correta: 2,
    comentario: 'No sentido de "ter por objetivo", "visar" é transitivo indireto e pede a preposição "a": visa à melhoria. "Assistir" no sentido de ver pede "a" (assistiram ao documentário); "implicar" como acarretar é direto (implicou novos custos); e "preferir" é "preferir A a B", sem "do que".'
  },
  {
    id: 9505, materia: 'Língua Portuguesa',
    enunciado: 'Em um relatório técnico, a redação mais adequada à norma-padrão e à impessoalidade exigida no gênero é:',
    alternativas: [
      'Eu achei que a escola tá precisando de mais apoio na parte de projetos.',
      'Constatou-se que a instituição de ensino demanda apoio técnico na gestão de projetos.',
      'A gente viu que a escola precisa, e muito, de apoio com projetos.',
      'Parece que talvez a escola possa, quem sabe, precisar de algum apoio.'
    ],
    correta: 1,
    comentario: 'Relatório, parecer e nota técnica exigem impessoalidade, objetividade e norma culta. A partícula apassivadora "constatou-se" afasta a primeira pessoa; as demais opções trazem coloquialismo, imprecisão ou hesitação, que enfraquecem o documento.'
  },
  {
    id: 9506, materia: 'Língua Portuguesa',
    enunciado: 'Leia: "A educação empreendedora não forma apenas futuros donos de negócio; forma pessoas capazes de identificar problemas e agir sobre eles." A relação estabelecida pelo ponto e vírgula e pela estrutura do período é de:',
    alternativas: [
      'contradição entre duas teses incompatíveis.',
      'retificação, em que a segunda parte nega integralmente a primeira.',
      'ampliação, em que a segunda parte precisa e alarga a ideia anunciada na primeira.',
      'exemplificação, em que a segunda parte apresenta um caso particular da primeira.'
    ],
    correta: 2,
    comentario: 'O par "não apenas... mas também" (aqui implícito) amplia: o segundo segmento não nega o primeiro, acrescenta alcance. Em interpretação, identifique a função do conectivo ou da pontuação antes de classificar a relação.'
  },
  {
    id: 9507, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa em que o pronome foi empregado corretamente.',
    alternativas: [
      'Este relatório é para mim assinar hoje.',
      'Entre eu e o coordenador não há divergência.',
      'O diretor falou comigo sobre o cronograma.',
      'Chegaram os documentos para nós analisarmos? Sim, trouxeram eles agora.'
    ],
    correta: 2,
    comentario: 'Depois de preposição, usa-se o pronome oblíquo tônico: "comigo", "entre mim e o coordenador". "Para mim" não pode ser sujeito de infinitivo (o correto é "para eu assinar"), e "trouxeram eles" deveria ser "trouxeram-nos".'
  },
  {
    id: 9508, materia: 'Língua Portuguesa',
    enunciado: 'Na frase "Os indicadores, embora ainda preliminares, apontam avanço na aprendizagem", a oração destacada entre vírgulas exprime ideia de:',
    alternativas: [
      'concessão.',
      'causa.',
      'condição.',
      'finalidade.'
    ],
    correta: 0,
    comentario: 'A conjunção "embora" introduz oração concessiva: admite um fato contrário ao esperado sem impedir a ideia principal. Causa seria "porque"; condição, "se"; finalidade, "para que".'
  },
  {
    id: 9509, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa correta quanto à grafia e à acentuação, conforme o Acordo Ortográfico vigente.',
    alternativas: [
      'A idéia do projeto foi bem recebida pelo público.',
      'O enjôo causado pela viagem atrapalhou a equipe.',
      'A coordenação pediu uma análise mais consequente dos dados.',
      'O pára-quedas do planejamento é o cronograma.'
    ],
    correta: 2,
    comentario: 'O Acordo Ortográfico eliminou o acento dos ditongos abertos "ei" e "oi" em paroxítonas (ideia, enjoo), o trema (consequente) e o acento diferencial de "para" (paraquedas). "Consequente" está correto.'
  },
  {
    id: 9510, materia: 'Língua Portuguesa',
    enunciado: 'Assinale a alternativa em que a reescrita mantém o sentido original de: "Caso os professores adiram ao projeto, a escola ampliará as oficinas."',
    alternativas: [
      'Ainda que os professores adiram ao projeto, a escola ampliará as oficinas.',
      'Se os professores aderirem ao projeto, a escola ampliará as oficinas.',
      'Porque os professores aderiram ao projeto, a escola ampliará as oficinas.',
      'Assim que os professores aderirem ao projeto, a escola já ampliou as oficinas.'
    ],
    correta: 1,
    comentario: '"Caso" equivale a "se": introduz condição. "Ainda que" é concessiva, "porque" é causal e a última alternativa quebra a correlação de tempos verbais.'
  },

  // ===================== CONHECIMENTOS ALI =====================
  {
    id: 9511, materia: 'Conhecimentos ALI',
    enunciado: 'Segundo o Manual de Oslo (4ª edição, 2018), uma inovação somente se caracteriza quando:',
    alternativas: [
      'a novidade é inédita no mercado mundial e protegida por patente.',
      'o produto ou processo novo ou significativamente aprimorado é disponibilizado a usuários potenciais ou colocado em uso pela empresa.',
      'a empresa investe recursos em pesquisa e desenvolvimento, independentemente do resultado.',
      'a ideia é formalizada em projeto aprovado pela direção da empresa.'
    ],
    correta: 1,
    comentario: 'Manual de Oslo, 4ª ed.: inovação é produto ou processo novo ou aprimorado que difere significativamente dos anteriores e que foi disponibilizado a usuários (produto) ou colocado em uso (processo). Exige implementação, mas basta ser novo para a empresa — não precisa de patente nem de ineditismo mundial.'
  },
  {
    id: 9512, materia: 'Conhecimentos ALI',
    enunciado: 'A 4ª edição do Manual de Oslo alterou a tipologia da inovação empresarial em relação à edição anterior. Atualmente, os tipos são:',
    alternativas: [
      'inovação de produto e inovação de processo de negócio.',
      'inovação de produto, de processo, de marketing e organizacional.',
      'inovação incremental, radical, disruptiva e reversa.',
      'inovação tecnológica e inovação social.'
    ],
    correta: 0,
    comentario: 'A 4ª edição (2018) reduziu os quatro tipos da 3ª edição a dois: inovação de produto (bens e serviços) e inovação de processo de negócio, que absorveu marketing e organizacional. Incremental e radical dizem respeito ao grau de novidade, não ao tipo.'
  },
  {
    id: 9513, materia: 'Conhecimentos ALI',
    enunciado: 'O SEBRAE é corretamente definido como:',
    alternativas: [
      'autarquia federal vinculada ao Ministério do Desenvolvimento.',
      'empresa pública de economia mista controlada pela União.',
      'serviço social autônomo, pessoa jurídica de direito privado sem fins lucrativos.',
      'órgão da administração direta responsável pela política de microempresas.'
    ],
    correta: 2,
    comentario: 'O SEBRAE é serviço social autônomo, de direito privado e sem fins lucrativos, integrante do Sistema S. Foi criado em 1972 como CEBRAE e desvinculado da administração pública pela Lei 8.029/1990.'
  },
  {
    id: 9514, materia: 'Conhecimentos ALI',
    enunciado: 'Conforme a Lei Complementar 123/2006, com as atualizações vigentes, considera-se empresa de pequeno porte (EPP) aquela que aufere, em cada ano-calendário, receita bruta:',
    alternativas: [
      'igual ou inferior a R$ 81.000,00.',
      'igual ou inferior a R$ 360.000,00.',
      'superior a R$ 360.000,00 e igual ou inferior a R$ 4.800.000,00.',
      'superior a R$ 4.800.000,00 e igual ou inferior a R$ 7.200.000,00.'
    ],
    correta: 2,
    comentario: 'LC 123/2006, art. 3º: microempresa até R$ 360 mil; EPP acima de R$ 360 mil até R$ 4,8 milhões. O teto de R$ 81 mil é o do MEI, criado pela LC 128/2008.'
  },
  {
    id: 9515, materia: 'Conhecimentos ALI',
    enunciado: 'Na pesquisa GEM, a Taxa de Empreendedorismo Inicial (TEA) reúne:',
    alternativas: [
      'apenas os empreendedores formalizados com CNPJ ativo.',
      'os empreendedores nascentes e os novos, com até 42 meses de pagamento de remuneração.',
      'os empreendedores com mais de 42 meses de atividade.',
      'todos os adultos que declaram intenção de abrir um negócio nos próximos três anos.'
    ],
    correta: 1,
    comentario: 'A TEA soma nascentes (negócio em estruturação, até 3 meses de pagamentos) e novos (de 3 a 42 meses). Acima de 42 meses, o empreendedor entra na TEE (estabelecidos). A GEM não exige formalização para contabilizar o empreendedor.'
  },
  {
    id: 9516, materia: 'Conhecimentos ALI',
    enunciado: 'Uma escola adota um sistema digital de acompanhamento da frequência que já é usado por outras redes do país, mas é novidade naquela instituição. À luz do Manual de Oslo, trata-se de:',
    alternativas: [
      'inovação, pois o requisito mínimo é que seja novo para a organização que a implementa.',
      'mera modernização, pois a solução já existe no mercado.',
      'invenção, por não haver registro de propriedade intelectual.',
      'difusão sem inovação, pois não houve criação original.'
    ],
    correta: 0,
    comentario: 'O requisito mínimo do Manual de Oslo é que a mudança seja nova para a empresa, ainda que já conhecida no mercado. Exatamente por isso o pequeno negócio e a escola podem inovar sem desenvolver tecnologia própria.'
  },
  {
    id: 9517, materia: 'Conhecimentos ALI',
    enunciado: 'O Marco Legal da Ciência, Tecnologia e Inovação (Lei 13.243/2016) alterou a Lei de Inovação para, entre outras medidas:',
    alternativas: [
      'proibir a participação de empresas privadas em projetos de ICTs públicas.',
      'permitir o compartilhamento de laboratórios e instrumentos de ICTs com empresas e criar instrumentos como a encomenda tecnológica e o bônus tecnológico.',
      'transferir às universidades a titularidade exclusiva de toda propriedade intelectual gerada no país.',
      'vedar a participação da União no capital de empresas de propósito específico voltadas à inovação.'
    ],
    correta: 1,
    comentario: 'A Lei 13.243/2016, que reformou a Lei 10.973/2004 e foi regulamentada pelo Decreto 9.283/2018, flexibilizou a relação entre ICTs e empresas: compartilhamento de infraestrutura, encomenda tecnológica, bônus tecnológico, subvenção e participação societária minoritária da União.'
  },
  {
    id: 9518, materia: 'Conhecimentos ALI',
    enunciado: 'O modelo da hélice tríplice, aplicado aos ecossistemas de inovação, descreve a interação entre:',
    alternativas: [
      'governo, universidade e empresa.',
      'capital, trabalho e tecnologia.',
      'startups, aceleradoras e investidores-anjo.',
      'inovação incremental, radical e disruptiva.'
    ],
    correta: 0,
    comentario: 'Hélice tríplice (Etzkowitz e Leydesdorff): governo, academia e setor produtivo. A hélice quádrupla acrescenta a sociedade civil, e há formulações de hélice quíntupla que incluem o meio ambiente.'
  },
  {
    id: 9519, materia: 'Conhecimentos ALI',
    enunciado: 'Uma escola aumentou em 20% o número de estudantes atendidos mantendo a mesma equipe e a mesma carga horária. Em termos de gestão, o indicador que melhor descreve esse resultado é:',
    alternativas: [
      'eficácia, pois a meta foi atingida.',
      'produtividade, pois houve mais resultado com os mesmos recursos.',
      'efetividade, pois houve transformação social duradoura.',
      'economicidade, pois houve redução do custo unitário de compra.'
    ],
    correta: 1,
    comentario: 'Produtividade é a razão entre resultado e recursos empregados: mais saída com a mesma entrada. Eficácia olha só o alcance da meta; efetividade, o impacto que permanece; economicidade, o custo da aquisição.'
  },
  {
    id: 9520, materia: 'Conhecimentos ALI',
    enunciado: 'No acompanhamento metodológico do ALI, a mensuração de indicadores em T0 e TF serve para:',
    alternativas: [
      'cumprir exigência contábil de prestação de contas da bolsa.',
      'comparar a situação inicial e a final e evidenciar o ganho atribuível à intervenção.',
      'classificar as instituições atendidas por porte e faturamento.',
      'substituir o diagnóstico inicial por uma autoavaliação da instituição.'
    ],
    correta: 1,
    comentario: 'T0 é a medição antes da intervenção e TF, ao final do ciclo. Sem a linha de base (T0), não há como demonstrar o resultado alcançado — é o que sustenta os produtos técnicos exigidos do bolsista.'
  },
  {
    id: 9521, materia: 'Conhecimentos ALI',
    enunciado: 'Uma meta formulada como "elevar em 15% o número de estudantes participantes de projetos empreendedores até dezembro, medindo pela lista de inscrição" atende ao critério SMART porque é:',
    alternativas: [
      'subjetiva, moderada, ajustável, relativa e transitória.',
      'específica, mensurável, atingível, relevante e temporal.',
      'simples, motivadora, ampla, revisável e tangível.',
      'sistêmica, metódica, auditável, rastreável e técnica.'
    ],
    correta: 1,
    comentario: 'SMART: Specific (específica), Measurable (mensurável), Achievable (atingível), Relevant (relevante) e Time-bound (temporal). A meta do enunciado traz percentual, fonte de verificação e prazo.'
  },
  {
    id: 9522, materia: 'Conhecimentos ALI',
    enunciado: 'A Agenda 2030 da ONU estabelece 17 Objetivos de Desenvolvimento Sustentável. O ODS diretamente relacionado ao trabalho do ALI Educação Empreendedora é o:',
    alternativas: [
      'ODS 3 — Saúde e bem-estar.',
      'ODS 4 — Educação de qualidade.',
      'ODS 7 — Energia limpa e acessível.',
      'ODS 16 — Paz, justiça e instituições eficazes.'
    ],
    correta: 1,
    comentario: 'O ODS 4 trata de educação inclusiva, equitativa e de qualidade. A meta 4.4 fala em competências para o trabalho e o empreendedorismo e a 4.7, em educação para o desenvolvimento sustentável. O ODS 8 (trabalho decente e crescimento econômico) também dialoga com o tema.'
  },
  {
    id: 9523, materia: 'Conhecimentos ALI',
    enunciado: 'Sobre o conceito de sustentabilidade adotado na gestão de pequenos negócios, é correto afirmar que:',
    alternativas: [
      'restringe-se às práticas de preservação ambiental, como reciclagem e redução de resíduos.',
      'articula as dimensões econômica, social e ambiental, conhecidas como tripé da sustentabilidade.',
      'opõe-se à lucratividade, pois exige que a empresa priorize o impacto social.',
      'aplica-se apenas a grandes empresas sujeitas a relatórios obrigatórios.'
    ],
    correta: 1,
    comentario: 'O triple bottom line articula as dimensões econômica, social e ambiental: um negócio sustentável é viável, justo e ambientalmente correto ao mesmo tempo. Sustentabilidade não se reduz ao ambiental nem se opõe ao lucro.'
  },
  {
    id: 9524, materia: 'Conhecimentos ALI',
    enunciado: 'Assinale a alternativa que descreve corretamente a relação do bolsista ALI com o SEBRAE.',
    alternativas: [
      'É empregado celetista, com jornada controlada e subordinação direta à gerência.',
      'É bolsista, sem vínculo empregatício, acompanhado por resultados, produtos e marcos metodológicos.',
      'É servidor público cedido pelo órgão de origem durante a vigência do projeto.',
      'É prestador de serviços pessoa jurídica, mediante contrato de credenciamento.'
    ],
    correta: 1,
    comentario: 'A bolsa de estímulo à inovação não gera vínculo empregatício, funcional ou societário com o SEBRAE, a FAPETEC ou as organizações participantes. O acompanhamento se dá por entregas e marcos metodológicos, sem controle de jornada.'
  },
  {
    id: 9525, materia: 'Conhecimentos ALI',
    enunciado: 'Entre as vedações impostas ao bolsista durante toda a vigência da bolsa está:',
    alternativas: [
      'participar de gerência ou administração de sociedade privada, exceto como acionista, cotista ou comanditário.',
      'possuir qualquer participação societária, ainda que como mero cotista.',
      'cursar pós-graduação durante o período da bolsa.',
      'residir em município diverso da sede do escritório regional.'
    ],
    correta: 0,
    comentario: 'O edital veda gerência ou administração de sociedade privada e o exercício de atividade econômica, ressalvada a condição de acionista, cotista ou comanditário. Também proíbe manter vínculo empregatício ou prestação de serviços durante a bolsa.'
  },
  {
    id: 9526, materia: 'Conhecimentos ALI',
    enunciado: 'O tratamento jurídico diferenciado e favorecido às microempresas e empresas de pequeno porte tem fundamento:',
    alternativas: [
      'exclusivamente na Lei Complementar 123/2006, sem previsão constitucional.',
      'nos arts. 170, IX, e 179 da Constituição Federal, regulamentados pela LC 123/2006.',
      'em resolução do Comitê Gestor do Simples Nacional.',
      'em convenção internacional ratificada pelo Brasil.'
    ],
    correta: 1,
    comentario: 'A Constituição elege o tratamento favorecido às empresas de pequeno porte como princípio da ordem econômica (art. 170, IX) e determina a simplificação de obrigações (art. 179). A LC 123/2006 regulamenta esse mandamento.'
  },
  {
    id: 9527, materia: 'Conhecimentos ALI',
    enunciado: 'Uma padaria substitui o caderno de encomendas por um aplicativo que organiza pedidos, prazos e rotas de entrega, reduzindo atrasos. Segundo a tipologia vigente do Manual de Oslo, houve inovação de:',
    alternativas: [
      'produto, pois o cliente passou a receber um serviço diferente.',
      'processo de negócio, pois mudou a forma de organizar e executar uma atividade da empresa.',
      'marketing, pois alterou o relacionamento com o cliente.',
      'não houve inovação, pois o aplicativo foi adquirido de terceiros.'
    ],
    correta: 1,
    comentario: 'Mudança na forma de organizar e executar atividades internas (logística, administração, distribuição) é inovação de processo de negócio. Adquirir a solução de terceiros não descaracteriza a inovação: o critério é o uso efetivo pela empresa.'
  },
  {
    id: 9528, materia: 'Conhecimentos ALI',
    enunciado: 'Considerando o papel do ALI como extensionista, a conduta mais adequada diante de um gestor que resiste a adotar a solução proposta é:',
    alternativas: [
      'registrar a recusa, encerrar o atendimento e substituir a instituição na base do projeto.',
      'retomar o diagnóstico com o gestor, evidenciar os dados do T0 e repactuar o plano em escala viável.',
      'aplicar a solução diretamente, assumindo a execução no lugar do gestor.',
      'comunicar a resistência à coordenação para que determine a adoção da medida.'
    ],
    correta: 1,
    comentario: 'O extensionista orienta e sensibiliza, não executa pelo cliente nem impõe a solução. A saída metodológica é voltar aos dados do diagnóstico, mostrar o problema priorizado e repactuar um plano exequível — postura cobrada na competência "orientação para o cliente".'
  },

  // ===================== EDUCAÇÃO EMPREENDEDORA =====================
  {
    id: 9529, materia: 'Educação Empreendedora',
    enunciado: 'A Base Nacional Comum Curricular (BNCC) é corretamente definida como:',
    alternativas: [
      'currículo único de aplicação obrigatória e integral em todas as escolas do país.',
      'documento normativo que define as aprendizagens essenciais da educação básica, servindo de referência para os currículos.',
      'orientação facultativa dirigida apenas às redes estaduais de ensino.',
      'proposta pedagógica elaborada por cada escola em seu projeto político-pedagógico.'
    ],
    correta: 1,
    comentario: 'A BNCC é normativa e obrigatória, mas não é o currículo: define as aprendizagens essenciais e serve de referência para que redes e escolas construam seus currículos, com a parte diversificada.'
  },
  {
    id: 9530, materia: 'Educação Empreendedora',
    enunciado: 'A competência geral da BNCC que mais diretamente sustenta o trabalho de educação empreendedora na escola é a que trata de:',
    alternativas: [
      'cultura digital e uso de tecnologias.',
      'trabalho e projeto de vida.',
      'argumentação com base em fatos e dados.',
      'conhecimento das manifestações artísticas.'
    ],
    correta: 1,
    comentario: 'A competência 6 trata de valorizar a diversidade de saberes e fazer escolhas alinhadas ao exercício da cidadania e ao projeto de vida, com liberdade, autonomia e responsabilidade. É o ponto de ancoragem curricular da educação empreendedora.'
  },
  {
    id: 9531, materia: 'Educação Empreendedora',
    enunciado: 'Sobre o conceito de competência adotado pela BNCC, é correto afirmar que se trata de:',
    alternativas: [
      'domínio de conteúdos conceituais verificado por avaliação somativa.',
      'mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas complexas da vida cotidiana.',
      'conjunto de habilidades motoras desenvolvidas ao longo da escolaridade.',
      'rol de objetivos de ensino definidos pelo professor para cada bimestre.'
    ],
    correta: 1,
    comentario: 'A BNCC define competência como a mobilização de conhecimentos, habilidades, atitudes e valores para resolver demandas complexas da vida cotidiana, do pleno exercício da cidadania e do mundo do trabalho — conceito idêntico ao usado pelo SEBRAE na educação empreendedora.'
  },
  {
    id: 9532, materia: 'Educação Empreendedora',
    enunciado: 'A Lei 13.415/2017, que instituiu o Novo Ensino Médio, e sua revisão pela Lei 14.945/2024 estabelecem que a carga horária se organiza em:',
    alternativas: [
      '1.800 horas de formação geral básica e 1.200 horas de itinerários formativos.',
      '2.400 horas de formação geral básica e 600 horas de itinerários formativos.',
      '3.000 horas integralmente destinadas à formação geral básica.',
      '2.000 horas de formação geral básica e 1.000 horas de educação técnica obrigatória.'
    ],
    correta: 1,
    comentario: 'A Lei 14.945/2024 reviu o desenho da Lei 13.415/2017 e fixou 2.400 horas de formação geral básica e 600 horas de itinerários formativos, dentro das 3.000 horas totais (mínimo de 1.000 horas anuais).'
  },
  {
    id: 9533, materia: 'Educação Empreendedora',
    enunciado: 'Nos itinerários formativos do Novo Ensino Médio, inclui-se, além do aprofundamento nas áreas do conhecimento:',
    alternativas: [
      'a formação técnica e profissional.',
      'o estágio supervisionado obrigatório para todos os estudantes.',
      'a educação de jovens e adultos.',
      'o ensino religioso de matrícula obrigatória.'
    ],
    correta: 0,
    comentario: 'Os itinerários abrangem linguagens, matemática, ciências da natureza, ciências humanas e formação técnica e profissional (LDB, art. 36, com redação da Lei 13.415/2017). O ensino religioso é de oferta obrigatória e matrícula facultativa, e apenas no fundamental.'
  },
  {
    id: 9534, materia: 'Educação Empreendedora',
    enunciado: 'A expressão "ensinar não é transferir conhecimento, mas criar as possibilidades para a sua produção ou a sua construção" sintetiza o pensamento de:',
    alternativas: [
      'Jean Piaget, na teoria da equilibração.',
      'Paulo Freire, em Pedagogia da Autonomia.',
      'Lev Vygotsky, na zona de desenvolvimento proximal.',
      'John Dewey, em Democracia e Educação.'
    ],
    correta: 1,
    comentario: 'A frase é de Paulo Freire, em Pedagogia da Autonomia (1996), obra que reúne os "saberes necessários à prática educativa" e critica a educação bancária, defendendo o ensino dialógico e problematizador.'
  },
  {
    id: 9535, materia: 'Educação Empreendedora',
    enunciado: 'Na perspectiva freireana, a "educação bancária" caracteriza-se por:',
    alternativas: [
      'organizar o currículo a partir de projetos definidos com os estudantes.',
      'tratar o educando como depositário passivo de conteúdos transmitidos pelo educador.',
      'avaliar continuamente a aprendizagem por meio de rubricas e autoavaliação.',
      'partir dos problemas da comunidade para construir o conhecimento.'
    ],
    correta: 1,
    comentario: 'A educação bancária, criticada por Freire, concebe o aluno como conta vazia onde o professor deposita conteúdos. A alternativa é a educação problematizadora, dialógica e voltada à autonomia e à conscientização.'
  },
  {
    id: 9536, materia: 'Educação Empreendedora',
    enunciado: 'A respeito das metodologias ativas, é correto afirmar que:',
    alternativas: [
      'dispensam o planejamento docente, pois a condução cabe aos estudantes.',
      'colocam o estudante como protagonista da aprendizagem e o professor como mediador.',
      'eliminam a avaliação, substituída pela livre manifestação da turma.',
      'exigem obrigatoriamente o uso de recursos tecnológicos digitais.'
    ],
    correta: 1,
    comentario: 'Metodologia ativa desloca o centro para o estudante, que investiga e produz, cabendo ao professor mediar. Ela exige mais planejamento, não menos, e não depende de tecnologia: um estudo de caso em sala já é metodologia ativa.'
  },
  {
    id: 9537, materia: 'Educação Empreendedora',
    enunciado: 'Na sala de aula invertida (flipped classroom):',
    alternativas: [
      'o conteúdo é estudado previamente pelo aluno e o tempo de aula é usado para aplicação, discussão e resolução de problemas.',
      'o professor expõe o conteúdo em aula e o aluno faz exercícios em casa.',
      'os alunos assumem o lugar do professor e ministram as aulas expositivas.',
      'o currículo é invertido, começando pelos conteúdos do último ano.'
    ],
    correta: 0,
    comentario: 'A sala de aula invertida antecipa o contato com o conteúdo (vídeo, texto, podcast) e reserva o encontro presencial para a parte mais difícil: aplicar, discutir e resolver problemas com mediação do professor.'
  },
  {
    id: 9538, materia: 'Educação Empreendedora',
    enunciado: 'A pedagogia de projetos tem como marco histórico o método de projetos sistematizado em 1918 por:',
    alternativas: [
      'Maria Montessori.',
      'William Heard Kilpatrick, a partir das ideias de John Dewey.',
      'Célestin Freinet.',
      'Jerome Bruner.'
    ],
    correta: 1,
    comentario: 'Kilpatrick publicou "The Project Method" em 1918, desenvolvendo a concepção de experiência e de "aprender fazendo" de John Dewey. No Brasil, essas ideias chegaram pela Escola Nova, com Anísio Teixeira.'
  },
  {
    id: 9539, materia: 'Educação Empreendedora',
    enunciado: 'Diferencia a pedagogia de projetos de um simples trabalho em grupo o fato de que o projeto:',
    alternativas: [
      'é sempre realizado fora do horário de aula.',
      'parte de um problema ou questão real, envolve planejamento com os estudantes e culmina em um produto socializado.',
      'dispensa objetivos de aprendizagem previamente definidos.',
      'é avaliado exclusivamente pelo resultado final apresentado.'
    ],
    correta: 1,
    comentario: 'O projeto tem problema real, intencionalidade pedagógica, planejamento compartilhado, produto final e socialização, com avaliação processual. Trabalho em grupo é apenas uma forma de organizar a turma.'
  },
  {
    id: 9540, materia: 'Educação Empreendedora',
    enunciado: 'As etapas clássicas do Design Thinking, na formulação mais difundida, são:',
    alternativas: [
      'planejar, executar, verificar e agir.',
      'empatia, definição, ideação, prototipagem e teste.',
      'diagnóstico, prognóstico, intervenção e laudo.',
      'análise, síntese, avaliação e certificação.'
    ],
    correta: 1,
    comentario: 'O modelo da d.school/IDEO organiza o processo em empatizar, definir, idear, prototipar e testar. "Planejar, executar, verificar e agir" é o ciclo PDCA, de melhoria contínua.'
  },
  {
    id: 9541, materia: 'Educação Empreendedora',
    enunciado: 'No Design Thinking, a prototipagem tem como principal finalidade:',
    alternativas: [
      'apresentar a solução final pronta para produção em escala.',
      'testar hipóteses rapidamente e a baixo custo, permitindo aprender com o erro antes do investimento.',
      'documentar formalmente o projeto para aprovação da direção.',
      'eliminar a necessidade de ouvir o usuário, já que a solução foi definida pela equipe.'
    ],
    correta: 1,
    comentario: 'O protótipo é instrumento de aprendizagem: deve ser rápido, barato e descartável, para validar ou derrubar hipóteses antes do investimento. O retorno do usuário sobre ele realimenta o ciclo.'
  },
  {
    id: 9542, materia: 'Educação Empreendedora',
    enunciado: 'A fase de imersão ou empatia do Design Thinking corresponde, no ciclo do duplo diamante, ao movimento de:',
    alternativas: [
      'divergência, com ampliação da compreensão do problema.',
      'convergência, com escolha imediata da solução.',
      'validação final junto aos usuários.',
      'encerramento do projeto e registro de lições aprendidas.'
    ],
    correta: 0,
    comentario: 'O duplo diamante alterna divergir e convergir: o primeiro diamante abre (descobrir) e fecha (definir) o entendimento do problema; o segundo abre (desenvolver) e fecha (entregar) a solução. Empatia é divergência no primeiro diamante.'
  },
  {
    id: 9543, materia: 'Educação Empreendedora',
    enunciado: 'Para o SEBRAE, a educação empreendedora na educação básica tem como objetivo central:',
    alternativas: [
      'formar estudantes capazes de abrir uma empresa logo após a conclusão do ensino médio.',
      'desenvolver competências que integram saberes, habilidades e atitudes para que o estudante transforme sua realidade e construa seu projeto de vida.',
      'oferecer formação técnica em gestão financeira e contabilidade.',
      'preparar o jovem para processos seletivos de grandes empresas.'
    ],
    correta: 1,
    comentario: 'O Manual do Candidato define educação empreendedora como o desenvolvimento de competências que envolvem o jovem na integração de saberes, habilidades e atitudes diante de uma situação real, para transformar sua realidade. É formação de comportamento, não curso de abertura de empresa.'
  },
  {
    id: 9544, materia: 'Educação Empreendedora',
    enunciado: 'Entre as características do comportamento empreendedor (CCEs) trabalhadas pela metodologia do SEBRAE, inclui-se:',
    alternativas: [
      'aversão sistemática ao risco.',
      'busca de oportunidades e iniciativa, persistência e correr riscos calculados.',
      'centralização das decisões e independência em relação a redes de contato.',
      'preferência por metas amplas e não mensuráveis.'
    ],
    correta: 1,
    comentario: 'As CCEs reúnem busca de oportunidades e iniciativa, persistência, correr riscos calculados, exigência de qualidade e eficiência, comprometimento, busca de informações, estabelecimento de metas, planejamento e monitoramento, persuasão e rede de contatos, independência e autoconfiança. O empreendedor calcula o risco, não o evita nem o ignora.'
  },
  {
    id: 9545, materia: 'Educação Empreendedora',
    enunciado: 'Afirma-se que houve inovação pedagógica em uma escola quando:',
    alternativas: [
      'são adquiridos tablets e lousas digitais para todas as salas.',
      'há mudança na relação de ensino e aprendizagem, com alteração efetiva das práticas e do papel de professores e estudantes.',
      'o conteúdo das aulas expositivas é gravado e disponibilizado on-line.',
      'o material didático impresso é substituído por arquivos em PDF.'
    ],
    correta: 1,
    comentario: 'Inovação pedagógica é mudança na prática e na relação de aprendizagem, não aquisição de equipamento. Digitalizar a aula expositiva mantém o mesmo modelo: é modernização de suporte, não inovação.'
  },
  {
    id: 9546, materia: 'Educação Empreendedora',
    enunciado: 'A avaliação formativa, coerente com as metodologias ativas, caracteriza-se por:',
    alternativas: [
      'ocorrer ao final do processo, com função classificatória.',
      'acompanhar o percurso da aprendizagem e oferecer devolutivas que permitam ao estudante corrigir a rota.',
      'restringir-se à aplicação de provas objetivas padronizadas.',
      'comparar o desempenho dos estudantes entre si para ordenar a turma.'
    ],
    correta: 1,
    comentario: 'A avaliação formativa é processual e diagnóstica: alimenta a regulação da aprendizagem por meio de devolutivas, rubricas e autoavaliação. A somativa é a que fecha o período com função classificatória.'
  },
  {
    id: 9547, materia: 'Educação Empreendedora',
    enunciado: 'Na LDB, a educação profissional e tecnológica articulada ao ensino médio pode ser ofertada nas formas:',
    alternativas: [
      'integrada, concomitante e subsequente.',
      'presencial, semipresencial e a distância.',
      'inicial, continuada e permanente.',
      'propedêutica, técnica e superior.'
    ],
    correta: 0,
    comentario: 'LDB, art. 36-C, e Decreto 5.154/2004: a educação profissional técnica de nível médio articula-se ao ensino médio nas formas integrada (mesma matrícula), concomitante (matrículas distintas e simultâneas) e subsequente (após a conclusão do ensino médio).'
  },
  {
    id: 9548, materia: 'Educação Empreendedora',
    enunciado: 'No ciclo metodológico aplicado pelo agente nas instituições de ensino, a sequência correta é:',
    alternativas: [
      'diagnóstico, priorização do problema, plano de implantação da solução, monitoramento e mensuração final.',
      'mensuração final, diagnóstico, plano de ação e devolutiva.',
      'proposição da solução, diagnóstico, execução pelo agente e relatório.',
      'sensibilização, contratação da escola, aplicação de prova e certificação.'
    ],
    correta: 0,
    comentario: 'O edital descreve a atuação como aplicação de ferramentas ágeis para diagnóstico, levantamento e priorização de problemas, identificação e planejamento da solução, monitoramento da implantação e mensurações inicial e final (T0 e TF).'
  },
  {
    id: 9549, materia: 'Educação Empreendedora',
    enunciado: 'Um projeto é definido, na gestão de projetos, como:',
    alternativas: [
      'esforço contínuo e repetitivo voltado à manutenção das operações.',
      'esforço temporário empreendido para criar um produto, serviço ou resultado exclusivo.',
      'conjunto de tarefas sem prazo determinado, orientado por metas anuais.',
      'rotina administrativa padronizada e documentada em manual.'
    ],
    correta: 1,
    comentario: 'Definição do PMBOK: projeto é esforço temporário, com início e fim definidos, para criar algo exclusivo. O que é contínuo e repetitivo é processo ou operação.'
  },
  {
    id: 9550, materia: 'Educação Empreendedora',
    enunciado: 'Durante um encontro, o coordenador pedagógico afirma que a escola "não tem tempo para projetos de empreendedorismo, porque precisa cumprir o currículo". A resposta tecnicamente mais consistente do agente é:',
    alternativas: [
      'concordar e propor o adiamento do projeto para o ano seguinte.',
      'mostrar que a educação empreendedora se integra ao currículo, ancorando-se nas competências gerais da BNCC e no projeto de vida, sem concorrer com os componentes.',
      'sugerir que o projeto seja realizado apenas no contraturno, com adesão voluntária dos alunos.',
      'encaminhar o caso à coordenação do projeto para que determine a adesão da escola.'
    ],
    correta: 1,
    comentario: 'Educação empreendedora não é disciplina a mais: é abordagem que se integra ao currículo pelas competências gerais da BNCC (em especial a 6, projeto de vida) e pelos itinerários do ensino médio. Essa é a argumentação que sustenta a sensibilização da escola.'
  }
];

const SB_ENTREVISTA_GUIA = {
  comoFunciona: [
    'Etapa 3, <b class="hl">eliminatória e classificatória</b>: vale <b class="hl">100 pontos</b>, o maior peso de todo o processo (a prova vale 50 e os documentos, 10).',
    'Duração de <b class="hl">45 minutos</b>, com banca formada por profissionais da <b class="hl">FAPETEC e do SEBRAE/RJ</b>. Tudo é <b class="hl">gravado</b>, e você autoriza o uso da imagem no início.',
    'São <b class="hl">4 competências, de 25 pontos cada</b>: Autogestão e flexibilidade, Qualidade no Trabalho, Foco em Resultados e Orientação para o Cliente.',
    'Faixas de nota por competência: <b class="hl">21 a 25 excelência</b>, 13 a 20 aplica, 6 a 12 abaixo do necessário, 0 a 5 não aplica. A nota é a média entre os avaliadores.',
    '<b class="hl">Quem fica abaixo de 50 pontos está eliminado</b>, mesmo com boa nota na prova.',
    'A entrevista é também o <b class="hl">primeiro critério de desempate</b> do processo. Datas previstas: 24 a 27/11/2026.'
  ],
  metodo: [
    'A banca avalia <b class="hl">frequência e intensidade de comportamentos</b> — ou seja, ela quer exemplos reais do que você já fez, não opinião sobre o que faria.',
    'Responda em <b class="hl">STAR</b>: <b class="hl">S</b>ituação (contexto, quando e onde), <b class="hl">T</b>arefa (sua responsabilidade), <b class="hl">A</b>ção (o que <u>você</u> fez, no singular) e <b class="hl">R</b>esultado (o que mudou, com número sempre que possível).',
    'Fale em <b class="hl">"eu fiz"</b>, não "a gente fazia". Banca de competências desconta resposta genérica em terceira pessoa.',
    'Tenha <b class="hl">6 a 8 histórias reais</b> preparadas e reaproveite-as em perguntas diferentes: a mesma turma do SENAI serve para resultado, para qualidade e para flexibilidade, dependendo do ângulo.',
    '<b class="hl">Dois minutos por resposta</b> é a medida boa. Menos que isso soa raso; mais que três minutos faz a banca perder o fio.',
    'Fechamento forte: termine dizendo <b class="hl">o que aprendeu</b> e como aplicaria no papel de ALI nas escolas.'
  ],
  erros: [
    'Responder no condicional ("eu faria", "eu costumo") quando a pergunta pede um caso concreto.',
    'Falar mal de instituição, chefia ou aluno. Avalie o problema, não as pessoas.',
    'Dar resposta de manual sem exemplo: a banca pontua comportamento observado, não teoria.',
    'Esconder o erro. Quando perguntarem sobre falha, conte o caso, o que você fez para corrigir e o que mudou na sua prática depois.',
    'Esquecer que a bolsa exige <b class="hl">dedicação exclusiva</b>. Se perguntarem sobre disponibilidade, não deixe dúvida de que você se organizará para cumprir isso.',
    'Ignorar o conteúdo do projeto: mostre que você sabe que são <b class="hl">2 ciclos, 15 escolas, 14 encontros, T0 e TF</b> e visitas presenciais.'
  ],
  preparacao: [
    'Releia o <b class="hl">Manual do Candidato (cap. 3)</b> e o <b class="hl">Anexo IV</b> na véspera: a banca gosta de candidato que entendeu o projeto.',
    'Monte uma <b class="hl">tabela de histórias</b>: situação, número que comprova e competência que ela demonstra.',
    'Treine em voz alta, cronometrado. Grave no celular e assista: corte repetição, muleta e divagação.',
    'Separe <b class="hl">três números seus</b> para citar: 6 disciplinas e 240 horas na Univértix; 466 horas em dois anos de SENAI com turmas de ensino médio; produção contínua de material e cronogramas desde 2023 na Tavares.',
    'Prepare <b class="hl">duas perguntas para a banca</b> ao final — sobre a rotina de campo nas escolas ou sobre os produtos técnicos esperados no ciclo.'
  ]
};

const entrevistaSebrae = [
  {
    id: 1, competencia: 'Apresentação',
    pergunta: 'Fale um pouco sobre você e por que quer ser ALI na metodologia Educação Empreendedora.',
    resposta: 'Em até 2 minutos, com começo, meio e fim: graduação em Comunicação Social (a formação que habilita a vaga) e pós em Docência do Ensino Superior; atuação atual em três frentes de educação — produção de material didático e videoaulas na Univértix, instrutoria presencial no SENAI de Três Rios com turmas de ensino médio e produção pedagógica na Tavares; e o encaixe com a vaga: você já trabalha com educação básica, com conteúdo digital e com empreendedorismo em sala. Feche dizendo por que a ALI: levar à escola o ciclo de diagnóstico, solução e medição, que é o que você já faz em menor escala.',
    dica: 'Não recite o currículo inteiro. Escolha três marcos e conecte cada um à vaga. Termine na vaga, não em você.'
  },
  {
    id: 2, competencia: 'Apresentação',
    pergunta: 'O que você entende por educação empreendedora? Ela serve para formar donos de empresa?',
    resposta: 'Para o SEBRAE, educação empreendedora é desenvolver competências que integram saberes, habilidades e atitudes diante de uma situação real, preparando o jovem para transformar sua realidade e construir seu projeto de vida. Não é curso de abertura de empresa: é formação de comportamento — iniciativa, persistência, risco calculado, planejamento, trabalho em rede. Na escola, isso se ancora nas competências gerais da BNCC, em especial a competência 6 (trabalho e projeto de vida), e nos itinerários do novo ensino médio.',
    dica: 'Essa resposta separa quem leu o edital de quem não leu. Cite BNCC e projeto de vida: mostra que você fala a língua da escola, não só a do SEBRAE.'
  },
  {
    id: 3, competencia: 'Apresentação',
    pergunta: 'O que o agente faz no dia a dia do projeto?',
    resposta: 'Sensibiliza e cadastra instituições de ensino da educação básica, acompanha de 12 a 15 escolas por ciclo, faz 14 encontros presenciais em cada uma, aplica o diagnóstico, prioriza problemas com a equipe gestora, ajuda a planejar e monitorar a solução, mede indicadores T0 e TF e registra tudo em plataforma, produzindo ao final produtos técnicos e bibliográficos (artigo, estudo de caso, Canvas, relatório). São 2 ciclos de 12 meses, 30 escolas no total, com atuação em raio de até 100 km da residência.',
    dica: 'Decore os números: 2 ciclos, 12 a 15 escolas, 14 encontros, 30 escolas, T0 e TF. Eles mostram domínio em 20 segundos.'
  },
  {
    id: 4, competencia: 'Autogestão e flexibilidade',
    pergunta: 'Conte uma situação em que você teve que reorganizar sua rotina por uma mudança inesperada.',
    resposta: 'Use um caso real de agenda concorrente: por exemplo, uma semana em que as aulas presenciais do SENAI, a entrega de uma disciplina para a Univértix e o material de simulado da Tavares caíram no mesmo prazo. Situação: três entregas na mesma semana. Tarefa: cumprir todas sem perder qualidade. Ação: você listou as entregas por prazo e impacto, antecipou o que dependia de terceiros, negociou uma data com quem tinha folga no cronograma e blocou horários fixos para produção. Resultado: as três entregas saíram no prazo, e você passou a planejar por blocos semanais.',
    dica: 'Autogestão é prioridade, método e autonomia. Mostre o critério que você usou para decidir o que vinha primeiro — é isso que a banca quer ouvir.'
  },
  {
    id: 5, competencia: 'Autogestão e flexibilidade',
    pergunta: 'Como você se organiza para trabalhar sem supervisão direta, com autonomia para planejar a própria agenda?',
    resposta: 'Descreva seu sistema concreto: planejamento semanal, cronograma por entrega, controle de prazos, reserva de blocos para produção e um ritual de revisão no fim da semana. Dê a prova: na Univértix e na Tavares você trabalha remotamente, com entregas por disciplina e por material, sem ninguém controlando horário — e as entregas saíram. No ALI, a lógica é a mesma: o acompanhamento é por resultados e marcos metodológicos, com 14 encontros por escola para agendar e cumprir.',
    dica: 'O edital diz que o bolsista tem autonomia para planejar, observadas entregas e prazos. Essa pergunta é quase uma pergunta sobre o seu método — tenha um nome para ele.'
  },
  {
    id: 6, competencia: 'Autogestão e flexibilidade',
    pergunta: 'Fale de uma vez em que você precisou mudar de abordagem no meio do caminho porque a primeira não funcionou.',
    resposta: 'Exemplo forte: uma turma do SENAI em que o conteúdo previsto não engajou. Situação: aula planejada de forma expositiva, turma dispersa. Tarefa: recuperar a aprendizagem sem perder o cronograma. Ação: você trocou a sequência por uma atividade prática baseada em projeto — os alunos produziram material real, com etapas e entrega —, manteve o conteúdo e mudou o formato. Resultado: participação e entrega dos trabalhos aumentaram, e você passou a abrir as unidades por prática e fechar com sistematização.',
    dica: 'Flexibilidade não é abrir mão do objetivo: é trocar o caminho mantendo a meta. Diga essa frase com seu exemplo.'
  },
  {
    id: 7, competencia: 'Autogestão e flexibilidade',
    pergunta: 'A bolsa exige dedicação exclusiva e visitas presenciais. Como você se organizaria?',
    resposta: 'Seja direto: você conhece a regra — nenhum vínculo empregatício ou prestação de serviços durante a vigência, e nada de gerência ou administração de empresa, salvo como mero cotista. Diga que está ciente e que organizará suas atividades atuais para atender a isso antes da assinatura do Termo de Outorga. Sobre o campo, mencione a disponibilidade de deslocamento no raio de 100 km e o planejamento de rotas por região para encaixar os encontros das escolas.',
    dica: 'Não hesite nem deixe no ar. Qualquer dúvida aqui vira risco na Due Diligence — responda com segurança e siga em frente.'
  },
  {
    id: 8, competencia: 'Qualidade no Trabalho',
    pergunta: 'Dê um exemplo de trabalho seu em que o cuidado com a qualidade fez diferença.',
    resposta: 'Use a produção de material didático. Situação: na Univértix, cada disciplina de 40 horas precisa de material alinhado ao projeto pedagógico do curso e ao manual de produção da instituição. Tarefa: entregar conteúdo aprovado sem retrabalho. Ação: você montou um checklist (ementa, objetivos, roteiro, avaliação, revisão de linguagem), validou com a equipe pedagógica antes de gravar e revisou o material após a adaptação metodológica. Resultado: seis disciplinas entregues, 240 horas de conteúdo, com os materiais integrando o acervo institucional.',
    dica: 'Qualidade se demonstra com processo, não com adjetivo. Descreva o seu controle de qualidade: checklist, validação, revisão.'
  },
  {
    id: 9, competencia: 'Qualidade no Trabalho',
    pergunta: 'Conte uma situação em que você cometeu um erro. O que fez?',
    resposta: 'Escolha um erro real e pequeno, com correção visível: um material com informação desatualizada depois de mudança de legislação, por exemplo. Ação: você identificou, comunicou de imediato, corrigiu a versão e criou uma rotina de revisão periódica por data de atualização. Resultado: o material voltou a circular correto e a rotina passou a evitar repetição do problema.',
    dica: 'Nunca diga que não erra. A banca pontua quem assume, corrige e transforma o erro em processo.'
  },
  {
    id: 10, competencia: 'Qualidade no Trabalho',
    pergunta: 'Como você garante que um relatório ou documento técnico seu está bom o suficiente para ser enviado?',
    resposta: 'Fale do seu padrão: objetivo claro, dados verificáveis, estrutura (contexto, análise, conclusão e recomendação), linguagem impessoal e revisão final com distância — ler depois de um tempo, em voz alta ou imprimindo. Cite que no ALI isso é entregável de verdade: relatórios de pesquisa, estudos de caso e registros em plataforma, que serão lidos por coordenação e orientador.',
    dica: 'Mencione o leitor: relatório bom é o que o leitor entende sem perguntar nada. Isso soa profissional.'
  },
  {
    id: 11, competencia: 'Foco em Resultados',
    pergunta: 'Conte um resultado concreto que você alcançou e como mediu.',
    resposta: 'Dois caminhos. Primeiro: SENAI, dois anos consecutivos de contratos (2025 e 2026), 466 horas de instrutoria, turmas concluídas com os projetos entregues — o resultado é a conclusão com produto, não só a presença. Segundo: Tavares, onde seu material de simulados e cronogramas é medido pelo desempenho dos alunos nas provas. Escolha um, diga o indicador que usou (entrega dos trabalhos, frequência, desempenho em simulado) e compare início e fim.',
    dica: 'A banca quer número e comparação. Se não houver número exato, use "de quantos para quantos" ou percentual aproximado, deixando claro que é estimativa.'
  },
  {
    id: 12, competencia: 'Foco em Resultados',
    pergunta: 'O que você faz quando percebe que uma meta não vai ser atingida no prazo?',
    resposta: 'Descreva o procedimento: detectar cedo (acompanhamento semanal), entender a causa, separar o que depende de você do que depende de terceiros, repactuar prazo ou escopo com quem decide e registrar. Dê um exemplo em que você antecipou o aviso e propôs alternativa, em vez de entregar atrasado sem avisar.',
    dica: 'A resposta ruim é "eu me esforço mais". A boa é "eu aviso cedo e proponho alternativa, com um plano novo".'
  },
  {
    id: 13, competencia: 'Foco em Resultados',
    pergunta: 'Se uma das escolas acompanhadas não avançar nos indicadores entre T0 e TF, o que você faz?',
    resposta: 'Primeiro, diagnosticar por que não avançou: a solução não foi implantada, foi implantada parcialmente ou o indicador escolhido não captava o ganho. Depois, retomar com a gestão o plano, ajustar o que for viável no tempo restante e registrar com honestidade o que ocorreu — inclusive o não resultado, que também é dado de pesquisa. Por fim, levar o caso à coordenação e ao orientador para decidir o encaminhamento.',
    dica: 'Mostrar que você registra o resultado negativo com transparência pesa a favor: o projeto é de pesquisa aplicada, e dado maquiado inutiliza o estudo.'
  },
  {
    id: 14, competencia: 'Foco em Resultados',
    pergunta: 'Você trabalharia com metas de atendimento (12 a 15 escolas por ciclo, 14 encontros em cada). Como se organizaria para cumprir?',
    resposta: 'Planejamento por rota e por calendário escolar: agrupar escolas por proximidade dentro do raio de 100 km, marcar os encontros no início do ciclo respeitando o calendário de cada unidade, manter folga para remarcações e acompanhar em planilha o estágio de cada escola. Some a isso o registro imediato na plataforma após cada visita, para não acumular pendência.',
    dica: 'Falar em rota, calendário escolar e folga para imprevistos mostra que você entende a realidade de campo — e não só a teoria.'
  },
  {
    id: 15, competencia: 'Orientação para o Cliente',
    pergunta: 'Quem é o seu cliente nesse projeto e o que ele espera de você?',
    resposta: 'O cliente direto é a instituição de ensino da educação básica — direção, coordenação pedagógica e professores —, e o beneficiário final é o estudante. O que eles esperam: alguém que entenda a rotina da escola, não gere trabalho extra inútil, traga solução aplicável no tempo e nos recursos que eles têm, e devolva resultado em linguagem clara. O SEBRAE e a coordenação do projeto também são clientes internos, que esperam registro, método e produtos técnicos.',
    dica: 'Dizer que o cliente é a escola e que o beneficiário é o aluno mostra maturidade. Muitos candidatos respondem "o SEBRAE".'
  },
  {
    id: 16, competencia: 'Orientação para o Cliente',
    pergunta: 'Conte uma vez em que você atendeu alguém insatisfeito ou resistente.',
    resposta: 'Use o atendimento educacional que você faz na Tavares: aluno insatisfeito com o próprio desempenho ou com o cronograma. Situação: aluno reclamando que o plano não cabia na rotina dele. Tarefa: manter o aluno estudando sem prometer o impossível. Ação: você escutou, refez o cronograma com a carga real disponível, definiu metas semanais menores e combinou um ponto de revisão. Resultado: o aluno retomou a rotina e passou a cumprir o plano.',
    dica: 'Escutar antes de propor é o comportamento que a banca procura. Diga explicitamente que você ouviu primeiro.'
  },
  {
    id: 17, competencia: 'Orientação para o Cliente',
    pergunta: 'Uma direção de escola diz que não tem tempo para o projeto porque precisa cumprir o currículo. Como você responde?',
    resposta: 'Mostre que a educação empreendedora não concorre com o currículo: ela se integra a ele pelas competências gerais da BNCC, especialmente projeto de vida, e pelos itinerários do novo ensino médio. Proponha começar pequeno — uma turma, um problema real da escola, um ciclo curto com resultado medido — e só então ampliar. Use o diagnóstico para mostrar à direção um problema que ela já reconhece.',
    dica: 'Comece pequeno e prove com dado: é a resposta que funciona na prática e a que a banca espera de um extensionista.'
  },
  {
    id: 18, competencia: 'Orientação para o Cliente',
    pergunta: 'Como você adapta sua comunicação para públicos diferentes (direção, professores, alunos)?',
    resposta: 'Com a direção, foco em resultado, tempo e viabilidade, com dados do diagnóstico. Com professores, foco em prática de sala, material pronto e redução de esforço. Com alunos, linguagem direta, exemplo concreto e protagonismo. Dê a prova: você já transita entre material para ensino superior a distância, turma presencial de ensino médio e aluno de concurso, e muda registro em cada um.',
    dica: 'Essa é a pergunta em que sua formação em Comunicação Social rende. Diga isso em uma frase, sem forçar.'
  }
];

const SB_LINKS = [
  { titulo: 'Centro Sebrae de Referência em Educação Empreendedora (CER)', url: 'https://www.cer.sebrae.com.br' },
  { titulo: 'SEBRAE — Educação Empreendedora', url: 'https://www.sebrae.com.br/sites/PortalSebrae/educacaoempreendedora' },
  { titulo: 'Data Sebrae — Educação Empreendedora', url: 'http://datasebrae.com.br/educacaoempreendedora' },
  { titulo: 'Base Nacional Comum Curricular (texto oficial)', url: 'http://basenacionalcomum.mec.gov.br' },
  { titulo: 'Lei 13.415/2017 — Novo Ensino Médio', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2017/lei/l13415.htm' },
  { titulo: 'Lei 14.945/2024 — revisão do Ensino Médio', url: 'https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2024/lei/l14945.htm' },
  { titulo: 'Lei Complementar 123/2006 — Estatuto da MPE', url: 'https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm' },
  { titulo: 'Lei 10.973/2004 — Lei de Inovação', url: 'https://www.planalto.gov.br/ccivil_03/_ato2004-2006/2004/lei/l10.973.htm' },
  { titulo: 'Lei 13.243/2016 — Marco Legal de CT&I', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2016/lei/l13243.htm' },
  { titulo: 'Manual de Oslo 2018 (OCDE/Eurostat, em inglês)', url: 'https://www.oecd.org/en/publications/oslo-manual-2018_9789264304604-en.html' },
  { titulo: 'GEM — Global Entrepreneurship Monitor (relatórios)', url: 'https://www.gemconsortium.org/report' },
  { titulo: 'Portal da FAPETEC — comunicados do processo seletivo', url: 'https://www.fapetec.org' }
];
