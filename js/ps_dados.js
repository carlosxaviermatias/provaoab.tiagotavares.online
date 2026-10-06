// Banco de estudos do Processo Seletivo de Estagiários - Vara Federal de Três Rios (Edital SJRJ nº 47/2026).
// Matérias da entrevista (item 1.9, "b", do edital): Direito Civil, Processo Civil, Direito Previdenciário e JEF.
// As questões são ORIGINAIS (elaboradas a partir dos temas cobrados em provas antigas de estágio da Justiça Federal),
// com base na legislação e em súmulas. IDs 9001+ para não colidir com o banco da OAB.

const PS_MATERIAS = ['Direito Civil', 'Processo Civil', 'Direito Previdenciário', 'Juizados Especiais Federais'];

const PS_EDITAL = {
  titulo: 'Edital SJRJ nº 47/2026',
  orgao: 'Seção Judiciária do Rio de Janeiro — Vara Federal de Três Rios',
  resumo: [
    ['Inscrições', '19 a 28/10/2026 (balcão da Vara ou e-mail 01vf-tr@jfrj.jus.br)'],
    ['Resultado preliminar', '29/10/2026'],
    ['Entrevista (presencial)', '05/11/2026'],
    ['Resultado final', '06/11/2026'],
    ['Requisito de CR', 'CR/CRA/IRA igual ou superior a 8,0'],
    ['Quem faz a entrevista', 'os 10 primeiros por CR (mais empatados na 10ª posição)'],
    ['Nota final', 'média aritmética entre o CR e a nota da entrevista (peso 10 cada)'],
    ['Desempate', '1º maior CR · 2º período menos adiantado · 3º maior idade'],
    ['Matérias da entrevista', 'Direito Civil, Processo Civil, Direito Previdenciário e Juizados Especiais Federais'],
    ['Período do curso', 'do 5º período (inscrição) ao 9º (convocação)'],
    ['Jornada e bolsa', '20h semanais, entre 11h e 19h · bolsa de R$ 1.400,00 + auxílio-transporte de R$ 10,00/dia (máx. R$ 220,00)'],
    ['Habilidade exigida', 'criação e edição de textos no Microsoft Word'],
    ['Validade', '1 ano, a partir do 1º dia útil após o resultado final']
  ]
};

const questoesPS = [
  // ============================ DIREITO CIVIL ============================
  {
    id: 9001, materia: 'Direito Civil',
    enunciado: 'Pedro tem 17 anos e não é emancipado. De acordo com o Código Civil, quanto à capacidade civil de Pedro, é correto afirmar que:',
    alternativas: [
      'ele é absolutamente incapaz, pois ainda não atingiu a maioridade civil.',
      'ele é relativamente incapaz, devendo ser assistido nos atos da vida civil.',
      'ele é plenamente capaz para os atos patrimoniais, sendo incapaz apenas para casar.',
      'ele é incapaz apenas se for considerado pródigo ou ébrio habitual.'
    ],
    correta: 1,
    comentario: 'São absolutamente incapazes apenas os menores de 16 anos (CC, art. 3º). Os maiores de 16 e menores de 18 anos são relativamente incapazes (art. 4º, I) e praticam os atos assistidos. Desde o Estatuto da Pessoa com Deficiência (Lei 13.146/2015), a deficiência por si só não afeta a capacidade civil.'
  },
  {
    id: 9002, materia: 'Direito Civil',
    enunciado: 'Segundo o Código Civil, a pretensão de reparação civil por ato ilícito extracontratual (por exemplo, um acidente de trânsito) prescreve em:',
    alternativas: [
      '1 (um) ano.',
      '3 (três) anos.',
      '5 (cinco) anos.',
      '10 (dez) anos.'
    ],
    correta: 1,
    comentario: 'CC, art. 206, §3º, V: prescreve em 3 anos a pretensão de reparação civil. O prazo geral, quando a lei não fixar prazo menor, é de 10 anos (art. 205). Cuidado: contra a Fazenda Pública, o prazo é de 5 anos (Decreto 20.910/32) — tema comum nas ações de Justiça Federal.'
  },
  {
    id: 9003, materia: 'Direito Civil',
    enunciado: 'Sobre a prescrição no Código Civil, assinale a alternativa correta.',
    alternativas: [
      'A prescrição pode ser interrompida quantas vezes o credor praticar atos que a interrompam.',
      'A interrupção da prescrição somente poderá ocorrer uma vez.',
      'A prescrição não pode ser alegada em grau de recurso, sob pena de supressão de instância.',
      'A renúncia à prescrição é válida mesmo antes de consumada.'
    ],
    correta: 1,
    comentario: 'CC, art. 202, caput: a interrupção da prescrição somente poderá ocorrer uma vez. A prescrição pode ser alegada em qualquer grau de jurisdição (art. 193) e só pode ser renunciada depois de consumada (art. 191).'
  },
  {
    id: 9004, materia: 'Direito Civil',
    enunciado: 'A respeito dos defeitos e da invalidade do negócio jurídico, é correto afirmar que:',
    alternativas: [
      'o negócio jurídico simulado é meramente anulável, no prazo de 4 anos.',
      'a fraude contra credores torna o negócio anulável, e o prazo para anulá-lo é decadencial de 4 anos.',
      'o erro substancial acarreta a nulidade absoluta do negócio.',
      'o negócio nulo pode ser convalidado pelo decurso do tempo.'
    ],
    correta: 1,
    comentario: 'A fraude contra credores gera anulabilidade (CC, art. 171, II), com prazo decadencial de 4 anos (art. 178, II). A simulação gera nulidade (art. 167); o erro gera anulabilidade (art. 171, II); e o negócio nulo não é suscetível de confirmação nem convalesce pelo decurso do tempo (art. 169).'
  },
  {
    id: 9005, materia: 'Direito Civil',
    enunciado: 'Nas obrigações provenientes de ato ilícito, o devedor considera-se em mora:',
    alternativas: [
      'desde a citação válida no processo.',
      'desde que for notificado extrajudicialmente.',
      'desde que o praticou.',
      'desde o trânsito em julgado da sentença condenatória.'
    ],
    correta: 2,
    comentario: 'CC, art. 398: nas obrigações provenientes de ato ilícito, considera-se o devedor em mora desde que o praticou. No mesmo sentido, a Súmula 54 do STJ: os juros moratórios fluem a partir do evento danoso, em caso de responsabilidade extracontratual.'
  },
  {
    id: 9006, materia: 'Direito Civil',
    enunciado: 'De acordo com o art. 188 do Código Civil, NÃO constitui ato ilícito:',
    alternativas: [
      'o ato praticado por quem, mesmo agindo com cautela, causou dano a terceiro.',
      'o ato praticado em legítima defesa ou no exercício regular de um direito reconhecido.',
      'o ato praticado por omissão voluntária que viole direito alheio.',
      'o ato praticado com negligência que cause dano exclusivamente moral.'
    ],
    correta: 1,
    comentario: 'CC, art. 188, I: não constituem atos ilícitos os praticados em legítima defesa ou no exercício regular de um direito reconhecido (e, no inciso II, a deterioração ou destruição da coisa alheia, ou a lesão a pessoa, a fim de remover perigo iminente — estado de necessidade). Ação ou omissão voluntária, negligência ou imprudência que causem dano, ainda que exclusivamente moral, são ilícito (art. 186).'
  },
  {
    id: 9007, materia: 'Direito Civil',
    enunciado: 'Quanto à responsabilidade civil, nos termos do Código Civil, haverá obrigação de reparar o dano, independentemente de culpa, quando:',
    alternativas: [
      'o dano for de pequena monta.',
      'a atividade normalmente desenvolvida pelo autor do dano implicar, por sua natureza, risco para os direitos de outrem.',
      'o autor do dano for pessoa jurídica de direito privado, em qualquer hipótese.',
      'houver previsão apenas em contrato entre as partes, nunca em lei.'
    ],
    correta: 1,
    comentario: 'CC, art. 927, parágrafo único: responsabilidade objetiva nos casos especificados em lei ou quando a atividade normalmente desenvolvida pelo autor do dano implicar risco para os direitos de outrem (teoria do risco). Além disso, a responsabilidade do Estado por seus agentes é objetiva (CF, art. 37, §6º).'
  },
  {
    id: 9008, materia: 'Direito Civil',
    enunciado: 'Em matéria de indenização, a jurisprudência sumulada do STJ admite que:',
    alternativas: [
      'a indenização por dano material e a por dano moral, oriundas do mesmo fato, são cumuláveis.',
      'só se pode escolher entre dano material e dano moral, vedada a cumulação.',
      'a pessoa jurídica jamais pode sofrer dano moral.',
      'o dano estético e o dano moral não podem ser cumulados.'
    ],
    correta: 0,
    comentario: 'Súmula 37 do STJ: são cumuláveis as indenizações por dano material e dano moral oriundos do mesmo fato. Súmula 387: é lícita a cumulação das indenizações de dano estético e dano moral. Súmula 227: a pessoa jurídica pode sofrer dano moral.'
  },
  {
    id: 9009, materia: 'Direito Civil',
    enunciado: 'Antônio exerce posse mansa, pacífica e ininterrupta, com ânimo de dono, sobre um imóvel há 20 anos, sem justo título nem boa-fé comprovados. O imóvel é de propriedade particular. Nessa hipótese, é correto afirmar que:',
    alternativas: [
      'ele não pode usucapir, porque lhe falta justo título.',
      'ele não pode usucapir, pois o prazo mínimo é de 30 anos.',
      'ele pode adquirir a propriedade pela usucapião extraordinária, cujo prazo, em regra, é de 15 anos.',
      'ele só poderia usucapir se o imóvel fosse urbano e de até 250 m².'
    ],
    correta: 2,
    comentario: 'Usucapião extraordinária (CC, art. 1.238): posse de 15 anos, independentemente de justo título e de boa-fé; reduz-se a 10 anos se o possuidor estabeleceu no imóvel a sua moradia habitual ou realizou obras ou serviços de caráter produtivo. A usucapião especial urbana (CF, art. 183 / CC, art. 1.240) exige 5 anos e área de até 250 m².'
  },
  {
    id: 9010, materia: 'Direito Civil',
    enunciado: 'Maria ocupa há mais de 20 anos, como se fosse dona, uma área que pertence à União. Quanto à possibilidade de usucapião, é correto afirmar que:',
    alternativas: [
      'ela adquire a propriedade se comprovar a moradia e o pagamento de tributos.',
      'ela adquire a propriedade, mas apenas se a área tiver até 250 m².',
      'ela não adquire a propriedade pela usucapião, pois os imóveis públicos não são usucapíveis.',
      'ela adquire a propriedade se a União não se opuser em 5 anos.'
    ],
    correta: 2,
    comentario: 'Os imóveis públicos não serão adquiridos por usucapião (CF, arts. 183, §3º, e 191, parágrafo único; CC, art. 102). Súmula 340 do STF: desde a vigência do Código Civil, os bens dominicais, como os demais bens públicos, não podem ser adquiridos por usucapião. Tema recorrente na Justiça Federal (bens da União).'
  },
  {
    id: 9011, materia: 'Direito Civil',
    enunciado: 'Segundo a Súmula 549 do STJ, em relação à penhora de bem de família:',
    alternativas: [
      'é inválida a penhora do bem de família do fiador em contrato de locação.',
      'é válida a penhora do bem de família pertencente a fiador de contrato de locação.',
      'é válida a penhora do bem de família apenas se houver mais de um imóvel.',
      'o bem de família nunca pode ser penhorado, em nenhuma hipótese legal.'
    ],
    correta: 1,
    comentario: 'Súmula 549 do STJ e Lei 8.009/90, art. 3º, VII: é válida a penhora de bem de família pertencente a fiador de contrato de locação. O STF também considerou a exceção constitucional (RE 407.688). A impenhorabilidade, portanto, não é absoluta (art. 3º traz outras exceções, como dívidas de IPTU e pensão alimentícia).'
  },
  {
    id: 9012, materia: 'Direito Civil',
    enunciado: 'Segundo o art. 50 do Código Civil, com a redação da Lei 13.874/2019 (Lei da Liberdade Econômica), a desconsideração da personalidade jurídica depende de:',
    alternativas: [
      'qualquer inadimplemento da pessoa jurídica.',
      'abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial.',
      'insuficiência patrimonial da pessoa jurídica, apenas.',
      'pedido exclusivo do Ministério Público.'
    ],
    correta: 1,
    comentario: 'CC, art. 50, caput: em caso de abuso da personalidade jurídica, caracterizado pelo desvio de finalidade ou pela confusão patrimonial, o juiz pode desconsiderá-la a requerimento da parte ou do Ministério Público, quando lhe couber intervir. O pedido segue o incidente de desconsideração da personalidade jurídica (CPC, arts. 133 a 137), que se aplica inclusive aos Juizados (CPC, art. 1.062).'
  },
  {
    id: 9013, materia: 'Direito Civil',
    enunciado: 'Segundo o STF (Tema 809 da repercussão geral), no âmbito do direito das sucessões:',
    alternativas: [
      'o companheiro herda menos que o cônjuge, conforme o art. 1.790 do Código Civil.',
      'é inconstitucional a distinção de regimes sucessórios entre cônjuges e companheiros, aplicando-se a ambos o art. 1.829 do Código Civil.',
      'o companheiro não é herdeiro, tendo apenas direito à meação.',
      'a união estável só gera direitos sucessórios se registrada em cartório.'
    ],
    correta: 1,
    comentario: 'RE 878.694 (Tema 809): é inconstitucional a distinção de regimes sucessórios entre cônjuges e companheiros prevista no art. 1.790 do CC; aplica-se, em ambos os casos, o regime do art. 1.829.'
  },
  {
    id: 9014, materia: 'Direito Civil',
    enunciado: 'Em regra, a propriedade de bem imóvel adquirido por negócio entre vivos (por exemplo, compra e venda) se transfere:',
    alternativas: [
      'com a assinatura do contrato particular.',
      'com a tradição (entrega das chaves).',
      'com o registro do título translativo no Registro de Imóveis.',
      'com o pagamento integral do preço.'
    ],
    correta: 2,
    comentario: 'CC, art. 1.245: transfere-se entre vivos a propriedade mediante o registro do título translativo no Registro de Imóveis; enquanto não se registrar o título, o alienante continua sendo havido como dono. A escritura pública é essencial à validade dos negócios que visem à constituição, transferência, modificação ou renúncia de direitos reais sobre imóveis de valor superior a 30 salários mínimos (art. 108).'
  },
  {
    id: 9015, materia: 'Direito Civil',
    enunciado: 'Em relação à cláusula penal no Código Civil, é correto afirmar que:',
    alternativas: [
      'seu valor pode exceder o da obrigação principal, desde que as partes concordem.',
      'o valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal.',
      'o juiz nunca pode reduzi-la, em respeito à autonomia da vontade.',
      'ela só pode ser estipulada em caso de inadimplemento absoluto, nunca para mora.'
    ],
    correta: 1,
    comentario: 'CC, art. 412: o valor da cominação imposta na cláusula penal não pode exceder o da obrigação principal. O juiz deve reduzi-la equitativamente se a obrigação principal tiver sido cumprida em parte ou se o montante for manifestamente excessivo (art. 413). A cláusula penal pode ser estipulada para a inexecução completa, para a mora ou para cláusula especial (art. 409).'
  },

  // ============================ PROCESSO CIVIL ============================
  {
    id: 9016, materia: 'Processo Civil',
    enunciado: 'De acordo com o Código de Processo Civil, a União é representada em juízo, ativa e passivamente, por:',
    alternativas: [
      'Ministério Público Federal.',
      'Advocacia-Geral da União, diretamente ou mediante órgão vinculado.',
      'Presidente da República.',
      'Procurador-Geral da República.'
    ],
    correta: 1,
    comentario: 'CPC, art. 75, I: a União é representada pela Advocacia-Geral da União, diretamente ou mediante órgão vinculado (por exemplo, a Procuradoria-Geral Federal, que representa as autarquias e fundações públicas federais, como o INSS). A massa falida é representada pelo administrador judicial (inciso V) e o espólio, pelo inventariante (inciso VII).'
  },
  {
    id: 9017, materia: 'Processo Civil',
    enunciado: 'No procedimento comum da Justiça Federal (fora dos Juizados), qual é o prazo para a União apresentar contestação?',
    alternativas: [
      '15 dias úteis.',
      '30 dias úteis.',
      '15 dias corridos.',
      '60 dias úteis.'
    ],
    correta: 1,
    comentario: 'O prazo de contestação é de 15 dias úteis (CPC, art. 335 c/c art. 219) e, para a Fazenda Pública, é contado em dobro (art. 183): 30 dias úteis, com intimação pessoal. Atenção: nos Juizados Especiais Federais não há prazo diferenciado para pessoas jurídicas de direito público (Lei 10.259/2001, art. 9º).'
  },
  {
    id: 9018, materia: 'Processo Civil',
    enunciado: 'Sobre a incompetência absoluta, é correto afirmar que:',
    alternativas: [
      'deve ser alegada somente na contestação, sob pena de preclusão.',
      'pode ser alegada em qualquer tempo e grau de jurisdição e deve ser declarada de ofício.',
      'prorroga-se a competência se a parte não a alegar.',
      'só existe em razão do território.'
    ],
    correta: 1,
    comentario: 'CPC, art. 64, §1º: a incompetência absoluta pode ser alegada em qualquer tempo e grau de jurisdição e deve ser declarada de ofício. A incompetência relativa (valor e território) deve ser alegada em preliminar de contestação, sob pena de prorrogação (arts. 64, caput, e 65). Competência em razão da matéria, da pessoa ou da função é inderrogável por convenção (art. 62).'
  },
  {
    id: 9019, materia: 'Processo Civil',
    enunciado: 'Segundo a Constituição Federal (art. 109, §2º), as causas intentadas contra a União poderão ser aforadas:',
    alternativas: [
      'somente no Distrito Federal.',
      'somente no domicílio da União, na capital.',
      'na seção judiciária em que for domiciliado o autor, naquela onde houver ocorrido o ato ou fato, onde esteja situada a coisa, ou no Distrito Federal.',
      'somente no foro da situação do imóvel, em qualquer caso.'
    ],
    correta: 2,
    comentario: 'CF, art. 109, §2º: o autor tem opção entre o seu domicílio, o local do ato ou fato, a situação da coisa ou o Distrito Federal. O STF estendeu a regra às autarquias federais (RE 627.709). Súmula 689 do STF: o segurado pode ajuizar ação contra a instituição previdenciária perante o juízo federal do seu domicílio ou nas varas federais da capital do Estado-membro.'
  },
  {
    id: 9020, materia: 'Processo Civil',
    enunciado: 'A tutela de urgência (CPC, art. 300) será concedida quando houver elementos que evidenciem:',
    alternativas: [
      'prova inequívoca do direito e verossimilhança da alegação, apenas.',
      'a probabilidade do direito e o perigo de dano ou o risco ao resultado útil do processo.',
      'apenas o perigo de dano, independentemente do direito alegado.',
      'a existência de caução obrigatória prestada pelo autor, em todos os casos.'
    ],
    correta: 1,
    comentario: 'CPC, art. 300: probabilidade do direito + perigo de dano ou risco ao resultado útil do processo. A caução pode ser exigida (§1º) e a tutela não será concedida quando houver perigo de irreversibilidade dos efeitos da decisão (§3º). Pode ser antecipada (satisfativa) ou cautelar, e requerida em caráter antecedente ou incidental.'
  },
  {
    id: 9021, materia: 'Processo Civil',
    enunciado: 'A tutela da evidência (CPC, art. 311) pode ser concedida, independentemente da demonstração de perigo de dano, quando:',
    alternativas: [
      'o autor tiver mais de 60 anos de idade.',
      'as alegações de fato puderem ser comprovadas apenas documentalmente e houver tese firmada em julgamento de casos repetitivos ou em súmula vinculante.',
      'o réu for revel, em qualquer hipótese.',
      'o valor da causa for superior a 60 salários mínimos.'
    ],
    correta: 1,
    comentario: 'CPC, art. 311, II: as alegações de fato podem ser comprovadas apenas documentalmente e há tese firmada em casos repetitivos ou súmula vinculante. Também cabe quando houver abuso do direito de defesa (I), pedido reipersecutório fundado em prova documental de contrato de depósito (III) ou quando a petição inicial for instruída com prova documental suficiente e o réu não opuser prova capaz de gerar dúvida razoável (IV). Nas hipóteses dos incisos II e III, o juiz pode decidir liminarmente (parágrafo único).'
  },
  {
    id: 9022, materia: 'Processo Civil',
    enunciado: 'A União, citada em ação ordinária, deixa de contestar e é declarada revel. Quanto aos efeitos da revelia, é correto afirmar que:',
    alternativas: [
      'presumem-se verdadeiras todas as alegações de fato formuladas pelo autor, sem exceção.',
      'a presunção de veracidade não se aplica, pois o litígio versa sobre direitos indisponíveis.',
      'a revelia da União gera automaticamente a procedência do pedido.',
      'a União perde o direito de recorrer da sentença.'
    ],
    correta: 1,
    comentario: 'CPC, art. 344: a revelia induz presunção de veracidade, mas o art. 345, II, a afasta se o litígio versar sobre direitos indisponíveis — entendimento aplicado à Fazenda Pública. Além disso, o revel pode intervir no processo em qualquer fase, recebendo-o no estado em que se encontrar (art. 346, parágrafo único), e recorrer. O juiz ainda decide conforme a prova dos autos.'
  },
  {
    id: 9023, materia: 'Processo Civil',
    enunciado: 'Em uma ação de cobrança, o réu alega, em contestação, que já pagou a dívida cobrada e junta um recibo. Segundo as regras do ônus da prova no CPC, é correto afirmar que:',
    alternativas: [
      'o autor deve provar que não houve pagamento, pois cabe a ele provar todos os fatos.',
      'cabe ao réu provar o pagamento, por se tratar de fato extintivo do direito do autor.',
      'o ônus da prova é sempre do juiz, que decide de ofício.',
      'a alegação de pagamento dispensa prova por ser fato notório.'
    ],
    correta: 1,
    comentario: 'CPC, art. 373: incumbe ao autor provar o fato constitutivo do seu direito (I) e ao réu provar a existência de fato impeditivo, modificativo ou extintivo do direito do autor (II). O pagamento é fato extintivo. O juiz pode redistribuir o ônus (distribuição dinâmica, §1º) em decisão fundamentada.'
  },
  {
    id: 9024, materia: 'Processo Civil',
    enunciado: 'Assinale a hipótese em que o juiz resolve o mérito (CPC, art. 487):',
    alternativas: [
      'reconhecimento da litispendência.',
      'falta de legitimidade ou de interesse processual.',
      'reconhecimento da prescrição.',
      'abandono da causa pelo autor por mais de 30 dias.'
    ],
    correta: 2,
    comentario: 'CPC, art. 487, II: há resolução do mérito quando o juiz decide, de ofício ou a requerimento, sobre a ocorrência de decadência ou prescrição. Litispendência, ilegitimidade, falta de interesse e abandono da causa por mais de 30 dias são casos de extinção sem resolução do mérito (art. 485, V, VI e III).'
  },
  {
    id: 9025, materia: 'Processo Civil',
    enunciado: 'Quanto à coisa julgada no CPC, é correto afirmar que:',
    alternativas: [
      'também se forma sobre os motivos que fundamentaram a sentença.',
      'é a autoridade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso.',
      'prejudica sempre terceiros alheios ao processo.',
      'ocorre sempre, mesmo nas sentenças terminativas (sem resolução de mérito).'
    ],
    correta: 1,
    comentario: 'CPC, art. 502: autoridade que torna imutável e indiscutível a decisão de mérito não mais sujeita a recurso. Não fazem coisa julgada os motivos (art. 504) e a coisa julgada não prejudica terceiros (art. 506). Em regra, a sentença sem resolução de mérito não faz coisa julgada material (art. 486 permite repropor a ação).'
  },
  {
    id: 9026, materia: 'Processo Civil',
    enunciado: 'Contra a sentença proferida em ação de procedimento comum na Justiça Federal (fora dos Juizados), o recurso cabível e seu prazo são:',
    alternativas: [
      'agravo de instrumento, em 15 dias úteis.',
      'apelação, em 15 dias úteis.',
      'recurso inominado, em 10 dias.',
      'embargos infringentes, em 5 dias.'
    ],
    correta: 1,
    comentario: 'CPC, arts. 1.009 e 1.003, §5º: da sentença cabe apelação, no prazo de 15 dias úteis (30 dias para a Fazenda Pública, art. 183). O agravo de instrumento cabe nas hipóteses do rol do art. 1.015 (e nas hipóteses de taxatividade mitigada — STJ, Tema 988). O recurso inominado só existe no sistema dos Juizados Especiais.'
  },
  {
    id: 9027, materia: 'Processo Civil',
    enunciado: 'O prazo para opor embargos de declaração, segundo o CPC, é de:',
    alternativas: [
      '2 dias úteis.',
      '5 dias úteis.',
      '10 dias úteis.',
      '15 dias úteis.'
    ],
    correta: 1,
    comentario: 'CPC, art. 1.023: embargos de declaração em 5 dias, contados na forma do art. 219 (dias úteis). Eles interrompem o prazo para a interposição de outros recursos (art. 1.026, caput). O prazo dos demais recursos é de 15 dias úteis (art. 1.003, §5º). Observação: nos Juizados, o art. 49 da Lei 9.099/95 mantém os 5 dias, e os embargos suspendem o prazo recursal (art. 50, na redação do CPC).'
  },
  {
    id: 9028, materia: 'Processo Civil',
    enunciado: 'Uma pessoa natural pede a gratuidade da justiça apenas com a sua declaração de hipossuficiência. Nos termos do CPC:',
    alternativas: [
      'a alegação de insuficiência de recursos deduzida por pessoa natural presume-se verdadeira, podendo o juiz indeferir se houver elementos que evidenciem a falta dos pressupostos legais.',
      'o juiz deve sempre exigir a juntada da última declaração de imposto de renda.',
      'a gratuidade é restrita a pessoas jurídicas sem fins lucrativos.',
      'a gratuidade exime o beneficiário de qualquer responsabilidade pelos ônus da sucumbência, sem exceção.'
    ],
    correta: 0,
    comentario: 'CPC, art. 99, §3º: presume-se verdadeira a alegação de insuficiência deduzida exclusivamente por pessoa natural. O juiz somente poderá indeferir o pedido se houver nos autos elementos que evidenciem a falta dos pressupostos legais, devendo antes determinar a comprovação (§2º). A gratuidade não afasta o dever de pagar multas processuais (art. 98, §4º) e a sucumbência fica em condição suspensiva por 5 anos (art. 98, §3º).'
  },
  {
    id: 9029, materia: 'Processo Civil',
    enunciado: 'Quanto ao reexame necessário (remessa necessária) em sentença proferida contra a União e suas autarquias no procedimento comum, assinale a correta:',
    alternativas: [
      'ela é sempre obrigatória, qualquer que seja o valor da condenação.',
      'ela não é necessária quando a condenação ou o proveito econômico obtido na causa for de valor certo e líquido inferior a 1.000 salários mínimos.',
      'ela só se aplica contra Municípios.',
      'ela é necessária em todas as sentenças favoráveis à Fazenda Pública.'
    ],
    correta: 1,
    comentario: 'CPC, art. 496, §3º, I: dispensa-se a remessa necessária quando a condenação ou o proveito econômico for inferior a 1.000 salários mínimos para a União, autarquias e fundações de direito público federais (500 para Estados e capitais; 100 para os demais Municípios). O §4º dispensa ainda nos casos de súmulas, recursos repetitivos etc. Nos Juizados Especiais Federais não há reexame necessário (Lei 10.259/2001, art. 13).'
  },
  {
    id: 9030, materia: 'Processo Civil',
    enunciado: 'Segundo o art. 927 do CPC, os juízes e tribunais observarão, em regra, todos os itens abaixo, EXCETO:',
    alternativas: [
      'as decisões do STF em controle concentrado de constitucionalidade.',
      'os enunciados de súmula vinculante.',
      'os acórdãos em incidente de resolução de demandas repetitivas e em julgamento de recursos repetitivos.',
      'a decisão monocrática isolada de qualquer ministro do STJ, sem tese firmada em julgamento colegiado.'
    ],
    correta: 3,
    comentario: 'CPC, art. 927: devem ser observados (I) decisões do STF em controle concentrado; (II) súmulas vinculantes; (III) acórdãos em IAC, IRDR e recursos repetitivos; (IV) súmulas do STF em matéria constitucional e do STJ em matéria infraconstitucional; (V) a orientação do plenário ou do órgão especial. Uma decisão monocrática isolada não integra o rol.'
  },

  // ============================ DIREITO PREVIDENCIÁRIO ============================
  {
    id: 9031, materia: 'Direito Previdenciário',
    enunciado: 'Assinale a alternativa que NÃO apresenta uma espécie de segurado obrigatório do Regime Geral de Previdência Social (Lei 8.213/91, art. 11):',
    alternativas: [
      'Empregado.',
      'Trabalhador avulso.',
      'Segurado facultativo.',
      'Segurado especial.'
    ],
    correta: 2,
    comentario: 'São segurados obrigatórios: empregado, empregado doméstico, contribuinte individual, trabalhador avulso e segurado especial (art. 11). O segurado facultativo (art. 13) é quem, maior de 14 anos, se filia voluntariamente, sem exercer atividade que o enquadre como obrigatório (exemplos: dona de casa, estudante).'
  },
  {
    id: 9032, materia: 'Direito Previdenciário',
    enunciado: 'Maria perdeu o emprego após contribuir por mais de 120 meses ininterruptos, sem interrupção que acarretasse a perda da qualidade de segurada. Quanto ao período de graça da segurada (Lei 8.213/91, art. 15), é correto afirmar que, em regra, ele será de:',
    alternativas: [
      '6 meses.',
      '12 meses.',
      '24 meses.',
      '48 meses.'
    ],
    correta: 2,
    comentario: 'Lei 8.213/91, art. 15, II, e §1º: o período de graça é de 12 meses após a cessação das contribuições, prorrogado para até 24 meses se o segurado já tiver pago mais de 120 contribuições mensais sem interrupção que acarrete a perda da qualidade de segurado. Se estiver comprovadamente desempregado, acrescem-se mais 12 meses (§2º) — podendo chegar a 36 meses.'
  },
  {
    id: 9033, materia: 'Direito Previdenciário',
    enunciado: 'O segurado facultativo mantém a qualidade de segurado, independentemente de contribuições, até:',
    alternativas: [
      '3 meses após a cessação das contribuições.',
      '6 meses após a cessação das contribuições.',
      '12 meses após a cessação das contribuições.',
      '24 meses após a cessação das contribuições.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 15, VI: até 6 meses após a cessação das contribuições, o segurado facultativo. Outros prazos: segurado retido ou recluso, até 12 meses após o livramento (IV); segurado incorporado às Forças Armadas, até 3 meses após o licenciamento (V); quem está em gozo de benefício, sem limite de prazo, exceto auxílio-acidente (I).'
  },
  {
    id: 9034, materia: 'Direito Previdenciário',
    enunciado: 'A carência exigida para a concessão do benefício por incapacidade temporária (antigo auxílio-doença) é, em regra, de 12 contribuições mensais. Ela é dispensada, entre outros casos, quando a incapacidade decorrer de:',
    alternativas: [
      'doença comum preexistente à filiação.',
      'acidente de qualquer natureza ou causa, ou de doença profissional ou do trabalho.',
      'qualquer doença, desde que o segurado tenha mais de 40 anos.',
      'doença mental, apenas.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 25, I (12 contribuições) e art. 26, II: independe de carência o auxílio por incapacidade temporária e a aposentadoria por incapacidade permanente nos casos de acidente de qualquer natureza ou causa, doença profissional ou do trabalho, bem como nas doenças e afecções listadas em ato conjunto (por exemplo, neoplasia maligna, cegueira, AIDS). Doença ou lesão preexistente à filiação não gera direito, salvo se a incapacidade resultar de progressão ou agravamento (art. 42, §2º).'
  },
  {
    id: 9035, materia: 'Direito Previdenciário',
    enunciado: 'Pelas regras permanentes do RGPS, após a Emenda Constitucional 103/2019 (art. 201, §7º, da CF), a aposentadoria voluntária por idade exige a idade mínima de:',
    alternativas: [
      '60 anos, se mulher, e 65, se homem.',
      '62 anos, se mulher, e 65, se homem.',
      '65 anos, se mulher, e 70, se homem.',
      '55 anos, se mulher, e 60, se homem.'
    ],
    correta: 1,
    comentario: 'CF, art. 201, §7º, I (EC 103/2019): 65 anos de idade, se homem, e 62, se mulher, observado tempo mínimo de contribuição. Para trabalhadores rurais e os que exerçam atividade em regime de economia familiar (segurado especial) a idade mínima é reduzida em 5 anos (60 anos homem, 55 anos mulher — art. 201, §7º, II). A carência, antes da reforma, era de 180 contribuições (art. 25, II).'
  },
  {
    id: 9036, materia: 'Direito Previdenciário',
    enunciado: 'Carlos, casado há 1 ano, faleceu de doença comum, tendo recolhido 10 contribuições mensais. Sua esposa requereu a pensão por morte. Conforme a Lei 8.213/91 (art. 77, §2º, V, "b"), a pensão será:',
    alternativas: [
      'indeferida, pois não há carência cumprida.',
      'vitalícia, por ser a única dependente.',
      'devida pelo prazo de 4 (quatro) meses.',
      'devida por 3 anos, por ser dependente de classe I.'
    ],
    correta: 2,
    comentario: 'A pensão por morte não exige carência (art. 26, I), mas, para o cônjuge/companheiro, a duração varia: se o óbito ocorrer sem 18 contribuições mensais ou se o casamento/união estável tiver menos de 2 anos, a pensão será de apenas 4 meses (art. 77, §2º, V, "b"). Exceção: se o óbito decorrer de acidente de qualquer natureza ou doença profissional/do trabalho, as condições são dispensadas. Cumpridos os requisitos, a duração varia conforme a idade do beneficiário.'
  },
  {
    id: 9037, materia: 'Direito Previdenciário',
    enunciado: 'Quanto aos dependentes previstos no art. 16 da Lei 8.213/91, é correto afirmar que:',
    alternativas: [
      'a dependência econômica de todos os dependentes é sempre presumida.',
      'a dependência econômica dos dependentes de classe I (cônjuge, companheiro e filhos) é presumida; a dos demais deve ser comprovada.',
      'os dependentes de classes diferentes concorrem sempre em igualdade de condições.',
      'só é dependente o cônjuge civil, nunca o companheiro.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 16, §4º: a dependência econômica das pessoas da classe I (cônjuge, companheiro e filho não emancipado menor de 21 anos, ou inválido, ou com deficiência intelectual/mental/grave) é presumida e a das demais (pais e irmãos) deve ser comprovada. A existência de dependente de classe I exclui do direito às prestações os das classes seguintes (§1º).'
  },
  {
    id: 9038, materia: 'Direito Previdenciário',
    enunciado: 'Sobre o auxílio-acidente (Lei 8.213/91, art. 86), é correto afirmar que:',
    alternativas: [
      'tem natureza substitutiva e corresponde a 100% do salário de benefício.',
      'tem natureza indenizatória, é pago após a consolidação das lesões que reduzam a capacidade para o trabalho habitual, e corresponde a 50% do salário de benefício, sem exigir carência.',
      'só é devido ao trabalhador rural.',
      'exige 12 contribuições mensais de carência.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 86 e art. 26, I: o auxílio-acidente é benefício de natureza indenizatória, concedido após a consolidação das lesões decorrentes de acidente de qualquer natureza que resultem em sequelas que reduzam a capacidade para o trabalho habitual; corresponde a 50% do salário de benefício e independe de carência. É devido até a véspera do início de qualquer aposentadoria ou até a data do óbito (§2º).'
  },
  {
    id: 9039, materia: 'Direito Previdenciário',
    enunciado: 'Quanto ao Benefício de Prestação Continuada (BPC/LOAS — Lei 8.742/93), é correto afirmar que:',
    alternativas: [
      'é benefício previdenciário e exige 180 contribuições mensais.',
      'é benefício assistencial, independe de contribuição, e é devido ao idoso com 65 anos ou mais e à pessoa com deficiência, com renda familiar per capita igual ou inferior a 1/4 do salário mínimo.',
      'é devido a qualquer pessoa com mais de 60 anos, independentemente de renda.',
      'gera pensão por morte aos dependentes.'
    ],
    correta: 1,
    comentario: 'O BPC é benefício assistencial (CF, art. 203, V), de um salário mínimo mensal, para o idoso com 65 anos ou mais ou a pessoa com deficiência (impedimento de longo prazo), cuja família tenha renda per capita igual ou inferior a 1/4 do salário mínimo (Lei 8.742/93, art. 20, §3º). Não exige contribuição, não gera 13º nem pensão por morte. A jurisprudência admite outros meios de prova da miserabilidade (STF, RE 567.985).'
  },
  {
    id: 9040, materia: 'Direito Previdenciário',
    enunciado: 'Uma ação em que o segurado, empregado, postula auxílio-doença acidentário decorrente de acidente de trabalho contra o INSS deve ser processada e julgada:',
    alternativas: [
      'na Justiça Federal, por se tratar de autarquia federal.',
      'no Juizado Especial Federal, se o valor for de até 60 salários mínimos.',
      'na Justiça Estadual.',
      'na Justiça do Trabalho.'
    ],
    correta: 2,
    comentario: 'CF, art. 109, I: excluem-se da competência federal as causas de acidente de trabalho. A ação acidentária contra o INSS é de competência da Justiça Estadual (Súmula 15 do STJ). Se o acidente for de qualquer natureza (não de trabalho), o auxílio-acidente é previdenciário comum e a competência é federal.'
  },
  {
    id: 9041, materia: 'Direito Previdenciário',
    enunciado: 'Quanto aos prazos de decadência e prescrição nas ações previdenciárias, assinale a correta:',
    alternativas: [
      'decadência de 5 anos para revisar o ato de concessão; prescrição de 10 anos.',
      'decadência de 10 anos para revisão do ato de concessão; prescrição de 5 anos das parcelas vencidas anteriores ao ajuizamento.',
      'o direito à revisão é imprescritível e as parcelas são imprescritíveis.',
      'prescrição de 2 anos para parcelas vencidas e decadência de 20 anos.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 103, caput: é de 10 anos o prazo de decadência para a revisão do ato de concessão, indeferimento, cancelamento ou cessação do benefício (o STF, Tema 313, validou a aplicação do prazo aos benefícios anteriores à MP 1.523/97, contado de 1º/8/1997). Parágrafo único: prescreve em 5 anos, contados da data em que deveriam ter sido pagas, toda e qualquer ação para haver prestações vencidas ou quaisquer restituições ou diferenças. O direito ao benefício em si é imprescritível.'
  },
  {
    id: 9042, materia: 'Direito Previdenciário',
    enunciado: 'Segundo o STF (RE 631.240 — Tema 350), para o ajuizamento de ação de concessão de benefício previdenciário contra o INSS:',
    alternativas: [
      'nunca é exigido requerimento administrativo prévio.',
      'é exigido o prévio requerimento administrativo, como regra, mas não se exige o esgotamento da via administrativa (recursos ao CRPS).',
      'é exigido o esgotamento de todos os recursos administrativos.',
      'basta ter completado a idade mínima, mesmo sem qualquer pedido ao INSS.'
    ],
    correta: 1,
    comentario: 'RE 631.240: a concessão de benefício previdenciário depende de prévio requerimento administrativo (configura o interesse de agir), mas não de exaurimento da via administrativa. Há exceções, como quando o entendimento do INSS for notoriamente contrário à pretensão do segurado. A análise do pedido deve ocorrer em prazo razoável; a demora do INSS equivale ao indeferimento.'
  },
  {
    id: 9043, materia: 'Direito Previdenciário',
    enunciado: 'Segundo a Súmula 149 do STJ, a prova da atividade rurícola, para fins de benefício previdenciário:',
    alternativas: [
      'pode ser feita exclusivamente com prova testemunhal.',
      'não pode ser feita exclusivamente com prova testemunhal, exigindo início de prova material.',
      'prescinde de qualquer prova, bastando declaração do próprio segurado.',
      'só pode ser feita por prova pericial.'
    ],
    correta: 1,
    comentario: 'Súmula 149 do STJ: a prova exclusivamente testemunhal não basta à comprovação da atividade rurícola, para efeito de obtenção de benefício previdenciário. Exige-se início de prova material (Lei 8.213/91, art. 55, §3º), que pode ser complementado por prova testemunhal. Exemplos: notas de produtor, bloco de notas, certidões com profissão de lavrador, contrato de arrendamento.'
  },
  {
    id: 9044, materia: 'Direito Previdenciário',
    enunciado: 'Perícia judicial reconhece que o segurado tem incapacidade parcial e permanente para o trabalho. Segundo a Súmula 47 da TNU:',
    alternativas: [
      'a incapacidade parcial impede, em qualquer hipótese, a concessão de aposentadoria por incapacidade permanente.',
      'o juiz deve analisar as condições pessoais e sociais do segurado para a concessão de aposentadoria por incapacidade permanente.',
      'o juiz deve sempre conceder auxílio-acidente.',
      'o juiz deve sempre extinguir a ação sem resolução do mérito.'
    ],
    correta: 1,
    comentario: 'Súmula 47 da TNU: uma vez reconhecida a incapacidade parcial para o trabalho, o juiz deve analisar as condições pessoais e sociais do segurado para a concessão do benefício de aposentadoria por invalidez (hoje, aposentadoria por incapacidade permanente). Assim, idade, escolaridade, profissão e a possibilidade real de reabilitação podem justificar a concessão. O juiz não está vinculado ao laudo (CPC, art. 479).'
  },
  {
    id: 9045, materia: 'Direito Previdenciário',
    enunciado: 'A contribuinte individual requereu salário-maternidade. Qual é a carência exigida, nos termos do art. 25, III, da Lei 8.213/91?',
    alternativas: [
      'Não há carência alguma.',
      '10 contribuições mensais.',
      '12 contribuições mensais.',
      '180 contribuições mensais.'
    ],
    correta: 1,
    comentario: 'Lei 8.213/91, art. 25, III: o salário-maternidade para as seguradas contribuinte individual, facultativa e especial exige 10 contribuições mensais (no caso de parto antecipado, reduz-se o número de contribuições em igual número de meses da antecipação). Para as seguradas empregada, empregada doméstica e trabalhadora avulsa, não há carência (art. 26, VI). A duração é de 120 dias (art. 71).'
  },

  // ============================ JUIZADOS ESPECIAIS FEDERAIS ============================
  {
    id: 9046, materia: 'Juizados Especiais Federais',
    enunciado: 'Compete ao Juizado Especial Federal Cível processar, conciliar e julgar causas de competência da Justiça Federal até o valor de:',
    alternativas: [
      '40 salários mínimos.',
      '60 salários mínimos.',
      '100 salários mínimos.',
      '200 salários mínimos.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 3º, caput: competência para causas até 60 salários mínimos, bem como para executar suas sentenças. Quando a pretensão versar sobre obrigações vincendas, a soma de 12 parcelas não pode exceder o valor do limite (§2º). No foro onde estiver instalada Vara do JEF, a sua competência é absoluta (§3º).'
  },
  {
    id: 9047, materia: 'Juizados Especiais Federais',
    enunciado: 'No foro onde estiver instalada Vara do Juizado Especial Federal, a competência do JEF é:',
    alternativas: [
      'relativa, podendo o autor optar pelo juízo comum.',
      'concorrente com a Vara Federal comum.',
      'absoluta.',
      'facultativa, dependendo da concordância do réu.'
    ],
    correta: 2,
    comentario: 'Lei 10.259/2001, art. 3º, §3º: no foro onde estiver instalada Vara do Juizado Especial, a sua competência é absoluta. Logo, ações até 60 salários mínimos (e fora das exclusões do §1º) devem tramitar no JEF; pode o juiz declinar de ofício. Havendo conflito entre JEF e juízo federal comum da mesma seção judiciária, quem o decide é o TRF (Súmula 428 do STJ).'
  },
  {
    id: 9048, materia: 'Juizados Especiais Federais',
    enunciado: 'Assinale a causa que NÃO se inclui na competência do Juizado Especial Federal Cível:',
    alternativas: [
      'ação de concessão de benefício previdenciário com valor de 30 salários mínimos.',
      'ação de concessão de BPC/LOAS.',
      'mandado de segurança contra ato de autoridade federal.',
      'ação indenizatória contra a Caixa Econômica Federal com valor de 10 salários mínimos.'
    ],
    correta: 2,
    comentario: 'Lei 10.259/2001, art. 3º, §1º: não se incluem na competência do JEF as causas referidas no art. 109, II, III e XI, da CF, as ações de mandado de segurança, de desapropriação, de divisão e demarcação, populares, execuções fiscais, as demandas sobre direitos ou interesses difusos, coletivos ou individuais homogêneos, as causas sobre bens imóveis da União, autarquias e fundações públicas federais, as de anulação ou cancelamento de ato administrativo federal (salvo o previdenciário e o de lançamento fiscal) e as que tenham por objeto a impugnação da pena de demissão de servidores civis ou sanções disciplinares aplicadas a militares.'
  },
  {
    id: 9049, materia: 'Juizados Especiais Federais',
    enunciado: 'Podem ser autores no Juizado Especial Federal Cível:',
    alternativas: [
      'qualquer pessoa jurídica de direito privado.',
      'pessoas físicas, microempresas e empresas de pequeno porte.',
      'apenas pessoas físicas maiores de 18 anos, sem representante.',
      'sociedades de economia mista e empresas públicas.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 6º, I: podem ser partes, como autores, as pessoas físicas e as microempresas e empresas de pequeno porte. Não podem ser autores as demais pessoas jurídicas. Os incapazes podem ser autores (representados ou assistidos), diferentemente do que ocorre nos Juizados Estaduais (Lei 9.099/95, art. 8º).'
  },
  {
    id: 9050, materia: 'Juizados Especiais Federais',
    enunciado: 'No Juizado Especial Federal Cível, podem ser réus:',
    alternativas: [
      'a União, autarquias, fundações e empresas públicas federais.',
      'os Estados e Municípios.',
      'as sociedades de economia mista federais (como o Banco do Brasil).',
      'qualquer pessoa física ou jurídica, em demandas até 60 salários mínimos.'
    ],
    correta: 0,
    comentario: 'Lei 10.259/2001, art. 6º, II: podem ser réus a União, autarquias (como o INSS), fundações e empresas públicas federais (como a CEF). Estados, Municípios e sociedades de economia mista (Banco do Brasil, Petrobras) não se submetem à competência federal — as causas contra estas últimas são, em regra, da Justiça Estadual (Súmula 42 do STJ).'
  },
  {
    id: 9051, materia: 'Juizados Especiais Federais',
    enunciado: 'Em relação aos prazos processuais das pessoas jurídicas de direito público no Juizado Especial Federal:',
    alternativas: [
      'têm prazo em dobro para recorrer e em quádruplo para contestar.',
      'não há prazo diferenciado para a prática de qualquer ato processual, inclusive recursos.',
      'têm prazo em dobro apenas para contestar.',
      'seguem o regime do CPC integralmente, com prazo em dobro.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 9º: não haverá prazo diferenciado para a prática de qualquer ato processual pelas pessoas jurídicas de direito público, inclusive a interposição de recursos, devendo a citação para audiência de conciliação ser efetuada com antecedência mínima de 30 dias. Isso distingue o JEF do procedimento comum (CPC, art. 183).'
  },
  {
    id: 9052, materia: 'Juizados Especiais Federais',
    enunciado: 'Da sentença proferida no Juizado Especial Federal Cível (exceto a homologatória de conciliação) cabe:',
    alternativas: [
      'apelação ao TRF, em 15 dias.',
      'recurso inominado à Turma Recursal, em 10 dias.',
      'agravo de instrumento ao TRF, em 5 dias.',
      'recurso ordinário ao STJ.'
    ],
    correta: 1,
    comentario: 'Da sentença cabe recurso inominado para a Turma Recursal, em 10 dias (Lei 9.099/95, art. 42, aplicável subsidiariamente — Lei 10.259/2001, art. 1º), por petição escrita, necessariamente subscrita por advogado. A Turma é formada por 3 juízes federais de 1º grau. Somente cabe recurso de sentença definitiva, ressalvadas as decisões sobre medidas cautelares (Lei 10.259/2001, art. 5º).'
  },
  {
    id: 9053, materia: 'Juizados Especiais Federais',
    enunciado: 'Quanto ao reexame necessário nas causas processadas no Juizado Especial Federal:',
    alternativas: [
      'é obrigatório sempre que a União for vencida.',
      'não há reexame necessário nas causas de que trata a Lei 10.259/2001.',
      'é obrigatório apenas nas causas previdenciárias.',
      'é obrigatório se a condenação ultrapassar 20 salários mínimos.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 13: nas causas de que trata esta Lei, não haverá reexame necessário. É uma das diferenças em relação ao procedimento comum (CPC, art. 496), no qual a sentença contra a Fazenda Pública está sujeita à remessa necessária, salvo os limites do §3º.'
  },
  {
    id: 9054, materia: 'Juizados Especiais Federais',
    enunciado: 'Segundo a Lei 10.259/2001, art. 4º, no curso do processo, o juiz poderá:',
    alternativas: [
      'deferir medidas cautelares apenas a requerimento da parte e mediante caução.',
      'deferir, de ofício ou a requerimento das partes, medidas cautelares para evitar dano de difícil reparação.',
      'indeferir qualquer medida de urgência contra a Fazenda Pública.',
      'deferir medidas cautelares apenas após o trânsito em julgado.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 4º: o juiz poderá, de ofício ou a requerimento das partes, deferir medidas cautelares no curso do processo, para evitar dano de difícil reparação. Esse é um dos casos em que cabe recurso de decisão interlocutória (art. 5º). A jurisprudência admite também a tutela antecipada no JEF, inclusive em matéria previdenciária (Súmula 729 do STF).'
  },
  {
    id: 9055, materia: 'Juizados Especiais Federais',
    enunciado: 'Quanto à intervenção de terceiros no sistema dos Juizados Especiais, é correto afirmar que:',
    alternativas: [
      'admite-se denunciação da lide e chamamento ao processo.',
      'não se admite, em regra, nenhuma forma de intervenção de terceiro nem assistência, sendo admitido o litisconsórcio e o incidente de desconsideração da personalidade jurídica.',
      'admite-se apenas a assistência simples.',
      'não se admite litisconsórcio nem intervenção de terceiros.'
    ],
    correta: 1,
    comentario: 'Lei 9.099/95, art. 10: não se admitirá qualquer forma de intervenção de terceiro nem de assistência; admitir-se-á o litisconsórcio. O CPC/2015, art. 1.062, admite o incidente de desconsideração da personalidade jurídica nos processos de competência dos Juizados Especiais.'
  },
  {
    id: 9056, materia: 'Juizados Especiais Federais',
    enunciado: 'Nas ações previdenciárias e assistenciais processadas no JEF, determinada a perícia, as partes serão intimadas para apresentar quesitos e indicar assistentes no prazo de:',
    alternativas: [
      '5 dias.',
      '10 dias.',
      '15 dias.',
      '30 dias.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 12, §2º: nas ações previdenciárias e relativas à assistência social, havendo designação de exame, as partes serão intimadas para, em 10 dias, apresentar quesitos e indicar assistentes. Os honorários do técnico são antecipados à conta de verba orçamentária do Tribunal (§1º). O laudo deve ser apresentado até 5 dias antes da audiência, quando houver.'
  },
  {
    id: 9057, materia: 'Juizados Especiais Federais',
    enunciado: 'Quanto ao pagamento das condenações nos JEF, é correto afirmar que:',
    alternativas: [
      'as condenações até 60 salários mínimos são pagas por requisição de pequeno valor (RPV), em até 60 dias, sem precatório; o autor pode renunciar ao crédito excedente para receber por RPV.',
      'todas as condenações da Fazenda Pública são pagas por precatório, em qualquer valor.',
      'a RPV é paga em 5 anos.',
      'é permitido o fracionamento do valor da execução para enquadrar parte dele em RPV.'
    ],
    correta: 0,
    comentario: 'Lei 10.259/2001, art. 17: o pagamento será feito, no prazo de 60 dias contados da entrega da requisição, por ordem do juiz, à autoridade citada para a causa, na agência mais próxima da CEF ou do Banco do Brasil, independentemente de precatório. Valor limite: 60 salários mínimos (§1º). A parte pode renunciar ao crédito excedente para receber por RPV (§4º). É vedado o fracionamento para fins de enquadramento (§3º). Se superior, segue a via do precatório (CF, art. 100).'
  },
  {
    id: 9058, materia: 'Juizados Especiais Federais',
    enunciado: 'Quanto ao pedido de uniformização de interpretação de lei federal nos JEF (Lei 10.259/2001, art. 14), é correto afirmar que, havendo divergência entre decisões de Turmas Recursais de regiões diferentes sobre questões de direito material, o pedido é julgado:',
    alternativas: [
      'pela Turma Regional de Uniformização.',
      'pela Turma Nacional de Uniformização (TNU).',
      'pelo TRF da região do autor.',
      'pelo Supremo Tribunal Federal, diretamente.'
    ],
    correta: 1,
    comentario: 'Lei 10.259/2001, art. 14: cabe pedido de uniformização quando houver divergência sobre questões de direito material. Se entre Turmas da mesma região, a Turma Regional de Uniformização (TRU); se entre Turmas de regiões diferentes ou se a decisão contrariar súmula ou jurisprudência dominante do STJ, a TNU (§2º). Se a orientação da TNU contrariar súmula ou jurisprudência dominante do STJ, a parte pode provocar a manifestação do STJ (§4º). Do acórdão da Turma Recursal cabe recurso extraordinário ao STF (art. 15).'
  },
  {
    id: 9059, materia: 'Juizados Especiais Federais',
    enunciado: 'Segundo a Súmula 428 do STJ, havendo conflito de competência entre o Juizado Especial Federal e o juízo federal da mesma seção judiciária, compete decidir ao:',
    alternativas: [
      'Superior Tribunal de Justiça.',
      'Tribunal Regional Federal.',
      'Turma Recursal do JEF.',
      'Supremo Tribunal Federal.'
    ],
    correta: 1,
    comentario: 'Súmula 428 do STJ: compete ao Tribunal Regional Federal decidir os conflitos de competência entre juizado especial federal e juízo federal da mesma seção judiciária. Já o mandado de segurança contra ato de Juizado Especial é processado e julgado pela própria Turma Recursal (Súmula 376 do STJ).'
  },
  {
    id: 9060, materia: 'Juizados Especiais Federais',
    enunciado: 'No âmbito dos Juizados Especiais (Lei 9.099/95, aplicável subsidiariamente aos JEF), em relação a custas e honorários advocatícios:',
    alternativas: [
      'a sentença de primeiro grau condena sempre o vencido em honorários de 10% a 20%.',
      'a sentença de primeiro grau não condena o vencido em custas e honorários, salvo litigância de má-fé; em segundo grau, o recorrente vencido paga custas e honorários de 10% a 20% do valor da condenação.',
      'não há custas nem honorários em nenhuma instância.',
      'o autor sempre paga custas no ajuizamento, em qualquer caso.'
    ],
    correta: 1,
    comentario: 'Lei 9.099/95, art. 55: a sentença de primeiro grau não condenará o vencido em custas e honorários de advogado, ressalvados os casos de litigância de má-fé. Em segundo grau, o recorrente vencido pagará custas e honorários fixados entre 10% e 20% do valor da condenação ou, não havendo condenação, do valor corrigido da causa. O acesso ao Juizado, em primeiro grau, independe do pagamento de custas, taxas ou despesas (art. 54).'
  }
];

// Roteiro de entrevista (a seleção do Edital 47/2026 é por CR + entrevista oral — itens 1.9 e 3.4).
const entrevistaPS = [
  {
    id: 1, materia: 'Apresentação',
    pergunta: 'Fale um pouco sobre você e por que quer estagiar na Vara Federal de Três Rios.',
    resposta: 'Responda em 1 a 2 minutos, com começo, meio e fim: período do curso e faculdade; o que já fez (monitoria, estágio anterior, projeto, curso); por que a Justiça Federal; por que previdenciário e JEF (contato direto com o cidadão e com demandas de massa); e a disponibilidade (20h semanais, entre 11h e 19h, presencial). Cite com honestidade o domínio do Word, pois o edital exige.',
    dica: 'Seja claro e objetivo. Não critique estágios anteriores. Mostre que leu o edital (item 1.5 a 1.10) e que atende aos requisitos.'
  },
  {
    id: 2, materia: 'Juizados Especiais Federais',
    pergunta: 'O que é o Juizado Especial Federal e qual a sua competência?',
    resposta: 'Criado pela Lei 10.259/2001, julga causas cíveis de competência da Justiça Federal até 60 salários mínimos, e cíveis e criminais de menor potencial ofensivo. Onde há Vara do JEF, a competência é absoluta. Rito: oralidade, simplicidade, informalidade, economia processual e celeridade. Partes: autores são pessoas físicas, ME e EPP; réus são União, autarquias, fundações e empresas públicas federais. Não cabem, entre outras, mandado de segurança, execução fiscal, desapropriação e ações sobre bens imóveis da União.',
    dica: 'Termine citando que a Lei 9.099/95 se aplica subsidiariamente (art. 1º da Lei 10.259).'
  },
  {
    id: 3, materia: 'Juizados Especiais Federais',
    pergunta: 'Qual a diferença entre o rito do JEF e o procedimento comum do CPC?',
    resposta: 'No JEF: limite de 60 salários mínimos; sem prazo diferenciado para a Fazenda Pública (art. 9º); sem reexame necessário (art. 13); sem condenação em custas e honorários em 1º grau (art. 55 da Lei 9.099); recurso inominado em 10 dias para a Turma Recursal; sem intervenção de terceiros; execução por RPV em 60 dias (art. 17). No comum: apelação em 15 dias úteis ao TRF, prazo em dobro para a Fazenda, remessa necessária nos limites do art. 496 e execução por precatório/RPV conforme o CPC.',
    dica: 'Uma boa resposta compara em pares (JEF x comum). Evite recitar tudo; escolha 4 diferenças e explique.'
  },
  {
    id: 4, materia: 'Direito Previdenciário',
    pergunta: 'O que é qualidade de segurado e carência? Qual a diferença?',
    resposta: 'Qualidade de segurado é o vínculo com o RGPS: quem contribui (ou está no período de graça) a mantém. Carência é o número mínimo de contribuições mensais para ter direito a certos benefícios (ex.: 12 para auxílio por incapacidade temporária; 180 para aposentadoria por idade; 10 para salário-maternidade de contribuinte individual). Período de graça: 12 meses (art. 15, II), 24 se mais de 120 contribuições, +12 se desempregado comprovado; facultativo, 6 meses. Pode haver qualidade sem carência (e vice-versa).',
    dica: 'Exemplo prático ajuda: "um empregado demitido há 10 meses, com 15 contribuições, ainda tem qualidade e já cumpriu a carência de 12".'
  },
  {
    id: 5, materia: 'Direito Previdenciário',
    pergunta: 'Qual a diferença entre benefício previdenciário e assistencial? Dê exemplos.',
    resposta: 'Previdenciário (Lei 8.213/91): exige filiação, qualidade de segurado e, em regra, carência; é contributivo (aposentadorias, pensão por morte, auxílios por incapacidade, salário-maternidade, auxílio-acidente). Assistencial (Lei 8.742/93 — BPC/LOAS): independe de contribuição; destina-se a idoso (65 anos ou mais) ou pessoa com deficiência de longo prazo em situação de miserabilidade (renda per capita igual ou inferior a 1/4 do salário mínimo); não gera pensão por morte.',
    dica: 'Mencione que ambos são pedidos no INSS e, em caso de negativa, discutidos no JEF.'
  },
  {
    id: 6, materia: 'Direito Previdenciário',
    pergunta: 'Por que a perícia médica é tão importante nas ações por incapacidade?',
    resposta: 'Porque o ponto central é a existência, o grau (total ou parcial) e a duração (temporária ou permanente) da incapacidade, além da data de início — que se relaciona com a qualidade de segurado e com a carência. O juiz não está vinculado ao laudo (CPC, art. 479), mas se baseia nele. Súmula 47 TNU: reconhecida incapacidade parcial, analisam-se as condições pessoais e sociais. Nos JEF, as partes têm 10 dias para quesitos e assistentes (art. 12, §2º).',
    dica: 'Explique também o papel do estagiário: organizar documentos médicos, conferir datas e CNIS.'
  },
  {
    id: 7, materia: 'Direito Previdenciário',
    pergunta: 'Qual a diferença entre decadência e prescrição em matéria previdenciária?',
    resposta: 'Decadência (art. 103, caput): 10 anos para rever o ato de concessão, indeferimento, cancelamento ou cessação do benefício. Prescrição (art. 103, parágrafo único): 5 anos para cobrar parcelas vencidas, contados retroativamente do ajuizamento. O fundo de direito do benefício em si não prescreve. Exemplo: benefício concedido em 2020 e revisão pedida em 2026 — ainda no prazo decadencial; mas só se recebem as diferenças dos 5 anos anteriores ao ajuizamento.',
    dica: 'Mostre que sabe diferenciar o direito (decadência) do direito de cobrar parcelas (prescrição).'
  },
  {
    id: 8, materia: 'Processo Civil',
    pergunta: 'Diferencie sentença, decisão interlocutória e despacho.',
    resposta: 'CPC, art. 203: sentença é o pronunciamento por meio do qual o juiz, com fundamento nos arts. 485 e 487, põe fim à fase cognitiva do procedimento comum ou extingue a execução; decisão interlocutória é todo pronunciamento decisório que não seja sentença; despachos são os demais pronunciamentos do juiz praticados no processo, de ofício ou a requerimento da parte (sem conteúdo decisório). Cabe apelação da sentença, agravo de instrumento de certas interlocutórias (art. 1.015) e, em regra, não cabe recurso de despacho.',
    dica: 'No JEF: da sentença cabe recurso inominado (10 dias); de medidas cautelares, recorre-se (art. 5º).'
  },
  {
    id: 9, materia: 'Processo Civil',
    pergunta: 'O que são litispendência e coisa julgada?',
    resposta: 'Litispendência: repetição de ação idêntica (mesmas partes, causa de pedir e pedido) em curso (CPC, art. 337, §§1º a 3º) — extingue o processo sem mérito (art. 485, V). Coisa julgada: repetição de ação já decidida por decisão de mérito transitada em julgado (art. 502): torna imutável e indiscutível a decisão.',
    dica: 'Cite as três identidades: partes, causa de pedir e pedido.'
  },
  {
    id: 10, materia: 'Processo Civil',
    pergunta: 'Quando se concede tutela provisória? Diferencie urgência e evidência.',
    resposta: 'Tutela de urgência (art. 300): probabilidade do direito + perigo de dano ou risco ao resultado útil do processo; antecipada ou cautelar; pode ser antecedente ou incidental; veda-se quando houver perigo de irreversibilidade. Tutela de evidência (art. 311): sem perigo de dano, nos casos de abuso do direito de defesa, tese firmada em repetitivos/súmula vinculante com prova documental etc. No JEF, o art. 4º autoriza cautelares de ofício; no previdenciário, é comum em casos de incapacidade e BPC.',
    dica: 'Dê um exemplo: segurado doente sem renda pede restabelecimento de auxílio.'
  },
  {
    id: 11, materia: 'Processo Civil',
    pergunta: 'Fale sobre competência: absoluta e relativa. Como se define a competência da Justiça Federal?',
    resposta: 'Absoluta: matéria, pessoa e função — pode ser reconhecida de ofício a qualquer tempo (art. 64, §1º). Relativa: valor e território — deve ser alegada em contestação. A Justiça Federal tem competência em razão da pessoa (art. 109, I, da CF): causas em que a União, autarquia ou empresa pública federal sejam interessadas, exceto falência, acidente de trabalho e Justiça Eleitoral e do Trabalho. O autor pode ajuizar contra a União no seu domicílio, no local do fato, onde esteja a coisa ou no DF (art. 109, §2º).',
    dica: 'Mencione que as ações acidentárias (acidente de trabalho) ficam na Justiça Estadual.'
  },
  {
    id: 12, materia: 'Direito Civil',
    pergunta: 'O que é responsabilidade civil? Quais os elementos?',
    resposta: 'É o dever de reparar o dano causado a outrem (CC, arts. 186, 187 e 927). Elementos: conduta (ação ou omissão), dano (material ou moral), nexo de causalidade e, na responsabilidade subjetiva, culpa. Será objetiva quando a lei assim determinar ou em atividade de risco (art. 927, parágrafo único) e, para o Estado, pela CF, art. 37, §6º. Excludentes: legítima defesa, exercício regular de direito, estado de necessidade, culpa exclusiva da vítima, fato de terceiro, caso fortuito ou força maior.',
    dica: 'Cite a Súmula 37 do STJ (cumulação de dano material e moral).'
  },
  {
    id: 13, materia: 'Direito Civil',
    pergunta: 'Diferencie prescrição de decadência.',
    resposta: 'Prescrição: perda da pretensão pelo decurso do tempo (CC, arts. 189 e 205 a 206); pode ser suspensa e interrompida (uma vez). Decadência: perda do próprio direito potestativo por não exercício no prazo; em regra, não se suspende nem se interrompe (art. 207). Prazos: geral de prescrição, 10 anos (art. 205); reparação civil, 3 anos (art. 206, §3º, V); contra a Fazenda, 5 anos (Decreto 20.910/32). A prescrição pode ser alegada em qualquer grau e só é renunciável depois de consumada.',
    dica: 'Uma frase curta resume: prescrição atinge a pretensão; decadência atinge o direito.'
  },
  {
    id: 14, materia: 'Direito Civil',
    pergunta: 'O que é usucapião e por que não se aplica a imóveis da União?',
    resposta: 'Modo originário de aquisição da propriedade pela posse prolongada com ânimo de dono. Espécies: extraordinária (15 anos, ou 10 com moradia/obras — art. 1.238), ordinária (10 anos com justo título e boa-fé — art. 1.242), especial urbana (5 anos, até 250 m² — art. 1.240) e rural (5 anos, até 50 ha — art. 1.239). Os bens públicos não são usucapíveis (CF, arts. 183, §3º e 191, parágrafo único; Súmula 340 do STF), por proteção constitucional aos bens públicos, inclusive os dominicais.',
    dica: 'Tema comum na Justiça Federal: ocupações em áreas da União (terrenos de marinha, margens de ferrovias).'
  },
  {
    id: 15, materia: 'Prática do estágio',
    pergunta: 'Como você trabalharia uma minuta de sentença ou de despacho no Word? E como cuida do sigilo?',
    resposta: 'Pesquisar a legislação e a jurisprudência (STF, STJ, TNU, TRF2); conferir o relatório com os autos (datas, valores, nomes, números do processo); usar estilos, numeração automática, recuos e fonte padrão do gabinete; revisar ortografia e citações; guardar versões. Quanto ao sigilo: tudo que se vê nos autos é restrito às partes e ao Judiciário; não se comenta processo fora do trabalho, não se usa dado de processo em redes sociais e não se atua em causa de parente ou conhecido (impedimento/suspeição).',
    dica: 'O edital exige habilidade em Word (item 1.6) — prepare-se para demonstrar atalhos, estilos e formatação.'
  },
  {
    id: 16, materia: 'Prática do estágio',
    pergunta: 'Caso prático: um segurado de 58 anos, pedreiro, com lombalgia, teve o auxílio por incapacidade temporária cessado. Como você analisaria o caso?',
    resposta: 'Passo a passo: (1) verificar qualidade de segurado e carência (CNIS, vínculos, contribuições; 12 se doença comum); (2) conferir se houve prévio requerimento/negativa do INSS; (3) analisar documentos médicos e a perícia: incapacidade total ou parcial, temporária ou permanente, data de início (DII); (4) se parcial, considerar idade, escolaridade e profissão (Súmula 47 TNU); (5) conferir a competência (JEF até 60 SM; não é acidentária?); (6) pedido de tutela de urgência, se houver risco; (7) valor da causa, prescrição quinquenal, RPV.',
    dica: 'Mostre método: fatos, requisitos legais, provas e riscos. O examinador valoriza raciocínio, não só memorização.'
  }
];

// Provas antigas de estágio em Direito na Justiça Federal (documentos públicos, hospedados nos sites dos órgãos).
const provasAntigasPS = [
  {
    titulo: 'Subseção Judiciária de Vitória da Conquista (SJBA) — Processo seletivo, 11/12/2016',
    detalhe: 'A mais próxima do conteúdo da entrevista: tem blocos de Direito Civil, Processo Civil, Direito Previdenciário (8.213/91, 8.742/93) e Juizados Especiais Federais (Lei 10.259/2001).',
    url: 'https://www.trf1.jus.br/sjba/conteudo/files/Questionario_7755264_Prova_da_Selecao_de_Estagiarios___DIREITO_2016.pdf'
  },
  {
    titulo: 'Justiça Federal de Juiz de Fora (TRF6) — 2º Processo Seletivo de 2024',
    detalhe: '50 questões objetivas, 4 horas. Inclui Processo Civil, Direito Civil, Direito Previdenciário (segurado especial, qualidade de segurado, carência) e questão sobre a Lei 10.259/2001.',
    url: 'https://portal.trf6.jus.br/wp-content/uploads/2024/05/03-Caderno-de-prova.pdf'
  },
  {
    titulo: 'Subseção Judiciária de Tucuruí (SJPA) — Prova objetiva, 08/11/2020',
    detalhe: '30 questões com 4 alternativas. Tem bloco de Juizados Especiais, Processo Civil e Direito Civil.',
    url: 'https://www.trf1.jus.br/sjpa/conteudo/files/Prova%20Aplicada.pdf'
  },
  {
    titulo: 'Justiça Federal da 5ª Região — Subseção de Caruaru/PE — Caderno de Prova de Direito',
    detalhe: '50 questões objetivas e 1 subjetiva. Tem Processo Civil e Direito Civil (inclui prescrição, usucapião e competência da Justiça Federal).',
    url: 'https://www.jfpe.jus.br/images/stories/Estagios/PROVA%20COMPLETA%20%20DE%20DIREITO.pdf'
  }
];

const linksUteisPS = [
  { titulo: 'Seleção de estagiários — Justiça Federal do RJ (editais e resultados)', url: 'https://www.trf2.jus.br/jfrj/comunicacao/selecao-de-estagiarios' },
  { titulo: 'EMARF — Estágio: procedimento padrão do processo seletivo', url: 'https://emarf.trf2.jus.br/estagio/procedimento-padrao-para-o-processo-seletivo' },
  { titulo: 'Lei 10.259/2001 — Juizados Especiais Federais', url: 'https://www.planalto.gov.br/ccivil_03/leis/leis_2001/l10259.htm' },
  { titulo: 'Lei 8.213/1991 — Planos de Benefícios da Previdência Social', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8213cons.htm' },
  { titulo: 'Lei 8.742/1993 — Lei Orgânica da Assistência Social (BPC)', url: 'https://www.planalto.gov.br/ccivil_03/leis/l8742.htm' },
  { titulo: 'Lei 13.105/2015 — Código de Processo Civil', url: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13105.htm' },
  { titulo: 'Lei 10.406/2002 — Código Civil', url: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm' }
];

// Embaralha as alternativas de forma determinística (semente = id da questão), para o gabarito
// não ficar concentrado numa letra. A ordem é sempre a mesma a cada carregamento (progresso salvo continua válido).
(function embaralharAlternativasPS() {
  function prng(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6D2B79F5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  questoesPS.forEach(q => {
    const rnd = prng(q.id * 2654435761);
    const idx = q.alternativas.map((_, i) => i);
    for (let i = idx.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [idx[i], idx[j]] = [idx[j], idx[i]];
    }
    const certaTexto = q.alternativas[q.correta];
    q.alternativas = idx.map(i => q.alternativas[i]);
    q.correta = q.alternativas.indexOf(certaTexto);
  });
})();
