# Projeto OAB Estudos - Documentação

## Visão Geral

Site estático de estudos para o Exame da OAB (Ordem dos Advogados do Brasil).
Permite filtrar questões por disciplina, exame, ano e status, com download das provas oficiais em PDF.

## Estrutura do Projeto

```
oab-estudos/
├── index.html          # Página principal do site
├── js/
│   ├── dados.js         # Banco de questões (formato JavaScript)
│   ├── app.js           # Lógica de filtros, exibição e gabarito
│   └── comentarios.js   # Anotações do usuário (localStorage)
├── DOCUMENTACAO.md     # Este arquivo
```

## Banco de Questões (dados.js)

### Formato de cada questão

```javascript
{
  id: 61,                  // ID único sequencial
  exame: "39",             // Número do exame (39-46) ou romano (XXXVII)
  ano: 2023,               // Ano de aplicação
  fase: "1ª Fase",         // Fase do exame
  disciplina: "Direito Constitucional",  // Matéria (vazia "" se não identificada)
  enunciado: "Texto completo da questão...",
  alternativas: [
    "Alternativa A)",
    "Alternativa B)",
    "Alternativa C)",
    "Alternativa D)"
  ],
  correta: 1,              // Índice da resposta: 0=A, 1=B, 2=C, 3=D, null=anulada
  comentario: ""           // Comentário explicativo (opcional)
}
```

### Total de Questões (estado real em `dados.js`, atualizado em 2026-07-10)

| Exame | Ano | IDs | Qtd | Status |
|-------|-----|-----|-----|--------|
| 39º   | 2023| 1-80    | 80 | ✅ Extraído e conferido |
| 40º   | 2024| 81-160  | 80 | ✅ Extraído e conferido |
| 41º   | 2024| 161-240 | 80 | ✅ Extraído e conferido |
| 43º   | 2025| 381-460 | 80 | ✅ Extraído e conferido |
| 44º   | 2025| 461-540 | 80 | ✅ Extraído e conferido |
| 42º   | 2024| 541-620 | 80 | ✅ Extraído e conferido |
| 45º   | 2025| 621-700 | 80 | ✅ Extraído e conferido |
| 46º   | 2026| 701-780 | 80 | ✅ Extraído e conferido |
| **Total** | | 1-780 (com furos) | **640** | |

Os IDs não são mais "posição no calendário de exames" — cada bloco de 80 é só
uma faixa livre atribuída na ordem em que os exames foram processados. 42º e
45º mantiveram os IDs que já tinham (541-620 e 621-700) para não invalidar
progresso salvo; os outros 6 exames ocuparam faixas livres. Não presuma mais
nenhuma relação entre ID e número do exame — sempre confira os campos
`exame`/`ano` de cada questão.

### Como isso foi extraído e verificado (2026-07-10)

**A pasta `provas/` (PDFs enviados pelo usuário) não pôde ser usada
diretamente**: os PDFs de prova (`*_tipo 1.pdf`) têm uma fonte incorporada
sem mapeamento Unicode utilizável — tanto `pypdf` quanto `pdfminer.six`
extraem apenas lixo (glyphs remapeados / `(cid:NNN)`). Isso não é bug de
biblioteca, é o PDF em si (provavelmente uma cópia de terceiros). Os
gabaritos da mesma pasta (`*_tipo_gabarito.pdf`) extraem texto limpo
normalmente.

Solução: baixar as provas oficiais direto do CDN da OAB, usando os links já
salvos em `PDF_LINKS` (ver seção seguinte — dois desses links estavam mortos
e foram corrigidos). Extração de texto feita com **PyMuPDF (`fitz`)**, que se
mostrou mais limpa que `pypdf`/`pdftotext` (sem os artefatos de kerning tipo
"e lementos" que apareciam na extração anterior).

Processo por exame:
1. Extrair texto de todas as páginas (menos a capa), cortando tudo a partir de
   "Questionário de percepção sobre a prova" (pesquisa de opinião pós-prova
   que reinicia a numeração 1-10 e confundiria o parser).
2. Remover blocos de cabeçalho/rodapé repetidos por página
   (`Nº EXAME DO ORDEM UNIFICADO ... Página N`).
3. Achar as 80 fronteiras de questão (linhas contendo só um número, na
   sequência estritamente crescente 1→80 — isso evita falsos positivos de
   números soltos dentro do enunciado).
4. Dividir cada bloco em enunciado + 4 alternativas pelos marcadores `A)` ou
   `(A)` (o formato varia por exame; o parser aceita os dois, mas exige que o
   marcador esteja no início de uma linha — sem essa exigência, sequências
   como "(IPVA)" eram lidas como se fossem a alternativa "A)").
5. `correta` cruzado com `GABARITOS[exame][número]` (essa tabela já existia
   em `dados.js` e está correta para os 8 exames — conferida contra os PDFs
   de gabarito).

**Validação**: reextraídas as 160 questões dos exames 42º/45º (já existentes)
com esse pipeline e comparadas contra o PDF oficial. Isso revelou que os
dados anteriores desses dois exames tinham problemas reais, agora corrigidos
junto com a adição dos 6 exames novos:
- Entidades HTML não decodificadas no meio do texto (ex.: `&acirc;` em vez de
  `â`) — 42 ocorrências.
- Trechos inteiros de alternativas faltando em algumas questões (ex.: id 652,
  652, 653 — cláusulas inteiras like "(Lei de Licitações e Contratos
  Administrativos)" ou "ao patrimônio" tinham sumido do texto salvo).
- Uma resposta de alternativa com conteúdo trocado (id 624, alternativa C,
  falava de "40 horas semanais" quando o PDF oficial diz "8 horas contínuas").
- Perda de maiúscula em nomes próprios em início de frase (ex. "ômega" em vez
  de "Ômega") — artefato de fonte com "drop cap" que o extrator antigo não
  tratava.

### Disciplinas Detectadas Automaticamente

O classificador identifica a disciplina por palavras-chave no enunciado e nas
alternativas (script `classificador.py`, ver seção de scripts). Disciplinas
suportadas (nome exato usado no campo `disciplina`):

1. Estatuto e Ética
2. Direito Constitucional
3. Direito Penal
4. Direito Processual Penal
5. Direito Civil
6. Direito Processual Civil
7. Direito do Trabalho
8. Direito Processual do Trabalho
9. Direito Tributário
10. Direito Empresarial
11. Direito Administrativo
12. Estatuto da Criança e do Adolescente
13. Direito do Consumidor
14. Filosofia do Direito
15. Direitos Humanos
16. Direito Internacional
17. Direito Ambiental
18. Direito Previdenciário
19. Direito Financeiro

## Como as Questões Foram Extraídas

### Ferramentas (pipeline atual, 2026-07-10)
- **PyMuPDF (`fitz`)**: extração de texto dos PDFs de prova (mais limpa que `pypdf`/`pdftotext` neste caso)
- **Python 3**: parsing (regex) e geração do bloco `questoes` do `dados.js`
- Ver seção "Scripts Utilizados" para onde encontrar os scripts

### Processo
1. Download dos PDFs oficiais das provas (Tipo 1 - Branca) e gabaritos, usando as URLs de `PDF_LINKS`
2. Extração do texto de cada página com `fitz`, cortando a seção de "Questionário de percepção" pós-prova
3. Remoção dos cabeçalhos/rodapés repetidos por página
4. Parsing: identificação de números de questão (1-80, sequência estritamente crescente) e divisão enunciado/alternativas pelos marcadores `A)`/`(A)` no início de linha
5. Matching com `GABARITOS[exame][número]` (já existente no `dados.js`): A=0, B=1, C=2, D=3, `null`=anulada
6. Classificação automática de disciplina por palavras-chave (`classificador.py`)

⚠️ A pasta `provas/` (PDFs enviados manualmente) **não é usável para extração de texto** —
os `*_tipo 1.pdf` têm fonte incorporada sem mapeamento Unicode (extração vira lixo em
qualquer biblioteca testada). Os `*_tipo_gabarito.pdf` da mesma pasta extraem normalmente,
mas o `dados.js` já carrega o gabarito de todos os 8 exames, então não há necessidade de
reprocessá-los. Use sempre os links de `PDF_LINKS` (CDN oficial da OAB) para o texto da prova.

### Gabaritos e Provas Oficiais (Links em `PDF_LINKS`)

Todos os 8 exames (39º-46º) têm `prova` e `gabarito` salvos em `PDF_LINKS` no
`dados.js`. Os links de 39º e 40º apontavam para `cdn.oab.org.br`, que saiu do
ar (DNS não resolve mais) — foram corrigidos em 2026-07-10 para o CDN atual
(`s.oab.org.br`), achados via `https://examedeordem.oab.org.br/EditaisProvas?NumeroExame=<ID>`.

| Exame | ID (portal) |
|-------|-----|
| 39º | 15122 |
| 40º | 15812 |
| 41º | 16135 |
| 42º | 16483 |
| 43º | 16773 |
| 44º | 17000 |
| 45º | 17431 |
| 46º | 17734 |
| 47º | 18197 (ainda não extraído, exame mais recente) |

## Pendências / Problemas Conhecidos

### Corrigido em 2026-07-09 e 2026-07-10
- **`alternativas` com 6 itens em vez de 4** (todas as questões existentes na época).
- **`correta: null` em 100% das questões existentes na época** — agora cruzado com `GABARITOS`.
- **Adicionados os 6 exames que faltavam** (39º, 40º, 41º, 43º, 44º, 46º — 480 questões nas
  faixas de ID 1-80, 81-160, 161-240, 381-460, 461-540, 701-780).
- **Reextraídas as questões dos exames 42º/45º** com o pipeline PyMuPDF, corrigindo
  entidades HTML não decodificadas, cláusulas inteiras que haviam sumido de algumas
  alternativas, uma resposta com conteúdo trocado, e perda de maiúscula em início de frase.
- **Links mortos em `PDF_LINKS`** (39º e 40º apontavam para `cdn.oab.org.br`, fora do ar) —
  atualizados para `s.oab.org.br`.
- **Encoding e texto de cabeçalho misturado ao enunciado**: não observado em nenhum dos 640
  questões desta extração (usando PyMuPDF + corte da seção de percepção pós-prova).

### Ainda pendente
- **Disciplina não identificada em ~69 das 640 questões** (aparecem como "Sem Classificação"
  no site) — o classificador por palavras-chave (`classificador.py`) não achou termos fortes
  o bastante. Requer revisão manual ou mais regras de classificação.
- **Falta o 47º exame** (2026, o mais recente — ID do portal: 18197), ainda não extraído.
- **Links do 37º e 38º exame em `PDF_LINKS` continuam mortos** (`cdn.oab.org.br`) — esses dois
  exames não fazem parte do banco de questões (não têm ID no portal salvo, `id: 0`), só
  aparecem na lista de downloads históricos da página Download. Fora do escopo desta correção.
- **Alternativas truncadas nas margens do PDF**: não confirmado nem descartado nesta leva.
- Um caractere isolado incorreto foi encontrado em 1 de 640 questões (glitch de
  extração, não sistemático) — se notar erros de digitação estranhos em alguma
  questão, é provável causa.

## Scripts Utilizados

O pipeline atual (Python) não está versionado no repositório — rodou a partir do
diretório de scratch da sessão. Para reproduzir/estender, recriar:

- **`parse_provas.py`**: extrai texto com `fitz`, corta o questionário de percepção,
  remove cabeçalhos/rodapés, acha as 80 fronteiras de questão e divide em
  enunciado + 4 alternativas pelos marcadores `A)`/`(A)`.
- **`classificador.py`**: classifica a disciplina por menção direta ao nome da área
  ("direito civil", etc.) e, na falta disso, por contagem de palavras-chave específicas
  por área (lista de regras no próprio arquivo).
- Script de geração final: lê `GABARITOS` do `dados.js`, roda os dois acima para os
  8 exames, serializa o array `questoes` combinado e substitui o bloco no `dados.js`.

### pdftotext / Poppler (pipeline antigo, Windows)
Não usado mais nesta sessão (Mac, sem Poppler instalado) — PyMuPDF substituiu com
melhor qualidade de extração para estes PDFs específicos.

## Como Continuar o Projeto

### Próximos Passos Sugeridos

1. **Revisar as ~69 questões "Sem Classificação"**: rodar `classificador.py` com
   mais regras, ou classificar manualmente.

2. **Adicionar questões do 47º exame** (2026, mais recente — ID 18197 no portal).

3. **Adicionar comentários**: preencher `comentario` com explicações das
   respostas corretas.

4. **Modo simulado**: permitir filtro por "questões nunca respondidas"
   para simular prova real.

### Comandos Úteis

```bash
# Instalar dependências de extração (Python)
pip3 install pymupdf

# Baixar prova/gabarito oficiais (exemplo, exame 47)
curl -s -o exame47.pdf "https://examedeordem.oab.org.br/EditaisProvas?NumeroExame=18197"
```
