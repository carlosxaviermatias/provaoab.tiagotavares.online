// Simulado da 1ª fase: 40 questões sorteadas do banco, em 5 horas, com relógio e gabarito só no fim.
// A quantidade por disciplina acompanha a proporção das provas reais que estão no banco.
const Simulado = {
  STORAGE_KEY: 'oab_simulado_atual',
  HISTORICO_KEY: 'oab_simulado_historico',
  TOTAL_QUESTOES: 40,
  DURACAO_SEG: 5 * 3600,
  // Ordem em que os blocos costumam aparecer na prova da FGV; o que não estiver aqui vai para o fim.
  ORDEM: [
    'Estatuto e Ética', 'Filosofia do Direito', 'Direitos Humanos', 'Direito Internacional',
    'Direito Constitucional', 'Direito Administrativo', 'Direito Tributário', 'Direito Financeiro',
    'Direito Ambiental', 'Direito do Consumidor', 'Estatuto da Criança e do Adolescente',
    'Direito Civil', 'Direito Empresarial', 'Direito Processual Civil', 'Direito Penal',
    'Direito Processual Penal', 'Direito do Trabalho', 'Direito Processual do Trabalho',
    'Direito Previdenciário', 'Direito Eleitoral'
  ],
  estado: null,
  intervalo: null,

  // ---------- estado ----------
  carregar() {
    try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || 'null'); } catch { return null; }
  },

  salvar() {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.estado)); } catch { /* indisponível */ }
  },

  historico() {
    try { return JSON.parse(localStorage.getItem(this.HISTORICO_KEY) || '[]'); } catch { return []; }
  },

  registrarNoHistorico(resumo) {
    const h = this.historico();
    h.unshift(resumo);
    try { localStorage.setItem(this.HISTORICO_KEY, JSON.stringify(h.slice(0, 20))); } catch { /* indisponível */ }
  },

  abrir() {
    this.estado = this.carregar();
    this.render();
  },

  // ---------- sorteio ----------
  elegiveis() {
    // Fora: questões anuladas (sem gabarito oficial) e as que ainda não têm disciplina identificada.
    return questoes.filter(q => q.correta !== null && q.disciplina);
  },

  // Distribui as 40 vagas conforme o peso de cada disciplina no banco (método do maior resto).
  cotas(disponiveis) {
    const porDisc = {};
    disponiveis.forEach(q => { porDisc[q.disciplina] = (porDisc[q.disciplina] || 0) + 1; });
    const total = disponiveis.length;
    const bruto = Object.entries(porDisc).map(([disc, qtd]) => {
      const exato = qtd / total * this.TOTAL_QUESTOES;
      return { disc, qtd, piso: Math.floor(exato), resto: exato - Math.floor(exato) };
    });
    let soma = bruto.reduce((s, b) => s + b.piso, 0);
    bruto.sort((a, b) => b.resto - a.resto);
    for (let i = 0; soma < this.TOTAL_QUESTOES; i++, soma++) {
      bruto[i % bruto.length].piso++;
    }
    const cotas = {};
    bruto.forEach(b => { if (b.piso > 0) cotas[b.disc] = Math.min(b.piso, b.qtd); });
    return cotas;
  },

  embaralhar(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  },

  sortear() {
    const disponiveis = this.elegiveis();
    const cotas = this.cotas(disponiveis);
    const escolhidas = [];
    Object.entries(cotas).forEach(([disc, qtd]) => {
      const doBloco = this.embaralhar(disponiveis.filter(q => q.disciplina === disc)).slice(0, qtd);
      escolhidas.push(...doBloco);
    });
    const peso = d => {
      const i = this.ORDEM.indexOf(d);
      return i === -1 ? 999 : i;
    };
    escolhidas.sort((a, b) => peso(a.disciplina) - peso(b.disciplina));
    return escolhidas.map(q => q.id);
  },

  iniciar() {
    if (this.estado && !this.estado.finalizado) {
      if (!confirm('Já existe um simulado em andamento. Começar outro apaga o atual. Continuar?')) return;
    }
    this.estado = {
      ids: this.sortear(),
      respostas: {},
      inicio: Date.now(),
      duracao: this.DURACAO_SEG,
      modo: 'regressivo',
      finalizado: false,
      fim: null
    };
    // Simulado é treino novo: limpa riscos anteriores dessas questões.
    this.estado.ids.forEach(id => Risco.limpar('sim', id));
    this.salvar();
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // ---------- relógio ----------
  decorrido() {
    if (!this.estado) return 0;
    const ate = this.estado.finalizado && this.estado.fim ? this.estado.fim : Date.now();
    return Math.floor((ate - this.estado.inicio) / 1000);
  },

  restante() {
    return Math.max(0, (this.estado?.duracao ?? this.DURACAO_SEG) - this.decorrido());
  },

  formatar(seg) {
    const h = Math.floor(seg / 3600);
    const m = Math.floor((seg % 3600) / 60);
    const s = seg % 60;
    return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
  },

  alternarRelogio() {
    if (!this.estado) return;
    this.estado.modo = this.estado.modo === 'regressivo' ? 'crescente' : 'regressivo';
    this.salvar();
    this.atualizarRelogio();
  },

  atualizarRelogio() {
    const el = document.getElementById('sim-relogio');
    if (!el || !this.estado) return;
    const regressivo = this.estado.modo === 'regressivo';
    const seg = regressivo ? this.restante() : this.decorrido();
    el.textContent = this.formatar(seg);
    el.classList.toggle('alerta', regressivo && seg <= 600 && !this.estado.finalizado);
    const rotulo = document.getElementById('sim-relogio-rotulo');
    if (rotulo) rotulo.textContent = this.estado.finalizado ? 'tempo total' : (regressivo ? 'tempo restante' : 'tempo decorrido');
    if (!this.estado.finalizado && this.restante() === 0) this.finalizar(true);
  },

  iniciarTicker() {
    clearInterval(this.intervalo);
    if (!this.estado || this.estado.finalizado) return;
    this.intervalo = setInterval(() => this.atualizarRelogio(), 1000);
  },

  // ---------- respostas ----------
  responder(id, idx) {
    if (!this.estado || this.estado.finalizado) return;
    this.estado.respostas[id] = idx;
    this.salvar();
    document.querySelectorAll(`#sim-alternativas-${id} .alternativa`).forEach(el => el.classList.remove('selecionada'));
    document.getElementById(`sim-alt-${id}-${idx}`).classList.add('selecionada');
    this.atualizarCartao();
  },

  respondidas() {
    return this.estado ? Object.keys(this.estado.respostas).length : 0;
  },

  atualizarCartao() {
    const cartao = document.getElementById('sim-cartao');
    if (cartao) cartao.innerHTML = this.htmlCartao();
    const prog = document.getElementById('sim-progresso');
    if (prog) prog.textContent = `${this.respondidas()} de ${this.estado.ids.length} respondidas`;
  },

  irParaQuestao(id) {
    const el = document.getElementById(`sim-questao-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // ---------- encerramento ----------
  finalizar(porTempo) {
    if (!this.estado || this.estado.finalizado) return;
    const faltando = this.estado.ids.length - this.respondidas();
    if (!porTempo) {
      const aviso = faltando
        ? `Faltam ${faltando} questões sem resposta. Finalizar mesmo assim?`
        : 'Finalizar e ver o resultado?';
      if (!confirm(aviso)) return;
    }
    this.estado.finalizado = true;
    this.estado.fim = Date.now();
    this.estado.porTempo = !!porTempo;
    clearInterval(this.intervalo);
    this.salvar();
    const r = this.apurar();
    this.registrarNoHistorico({
      data: new Date().toISOString(),
      acertos: r.acertos,
      total: r.total,
      tempo: this.decorrido(),
      porTempo: !!porTempo
    });
    this.render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (porTempo) alert('O tempo de 5 horas acabou. O simulado foi encerrado e o resultado está na tela.');
  },

  apurar() {
    const ids = this.estado.ids;
    let acertos = 0, respondidas = 0;
    const porDisc = {};
    ids.forEach(id => {
      const q = questoes.find(x => x.id === id);
      if (!q) return;
      const d = porDisc[q.disciplina] || (porDisc[q.disciplina] = { total: 0, acertos: 0, respondidas: 0 });
      d.total++;
      const resp = this.estado.respostas[id];
      if (resp !== undefined) {
        respondidas++; d.respondidas++;
        if (resp === q.correta) { acertos++; d.acertos++; }
      }
    });
    return { acertos, respondidas, total: ids.length, porDisc };
  },

  descartar() {
    if (!confirm('Apagar este simulado e voltar à tela inicial?')) return;
    this.estado = null;
    clearInterval(this.intervalo);
    try { localStorage.removeItem(this.STORAGE_KEY); } catch { /* indisponível */ }
    this.render();
  },

  // ---------- telas ----------
  render() {
    const container = document.getElementById('sim-conteudo');
    if (!container) return;
    if (!this.estado) { container.innerHTML = this.htmlAbertura(); clearInterval(this.intervalo); return; }
    container.innerHTML = this.estado.finalizado ? this.htmlResultado() : this.htmlProva();
    this.estado.ids.forEach(id => Risco.aplicar('sim', id, 'sim-'));
    if (!this.estado.finalizado) {
      Object.entries(this.estado.respostas).forEach(([id, idx]) => {
        document.getElementById(`sim-alt-${id}-${idx}`)?.classList.add('selecionada');
      });
    }
    this.atualizarRelogio();
    this.iniciarTicker();
  },

  htmlAbertura() {
    const disponiveis = this.elegiveis();
    const cotas = this.cotas(disponiveis);
    const linhas = Object.entries(cotas)
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([d, q]) => `<tr><th>${d}</th><td>${q} ${q === 1 ? 'questão' : 'questões'}</td></tr>`).join('');
    const hist = this.historico();

    return `
      <div class="ps-destaque">
        <div>
          <h3>Simulado da 1ª fase</h3>
          <p>40 questões sorteadas do banco de ${disponiveis.length} questões reais, em até 5 horas.</p>
          <p class="ps-contagem">Gabarito e comentários só aparecem depois que você finaliza.</p>
        </div>
        <button class="btn-download" onclick="Simulado.iniciar()">Iniciar simulado</button>
      </div>

      <div class="ps-aviso">
        <strong>Como funciona:</strong> o relógio começa em <em>05:00:00</em> e corre para trás; clique nele para ver o tempo decorrido.
        Ao esgotar o tempo, a prova encerra sozinha. Clique na letra da alternativa para riscá-la, como no papel.
        A nota de corte da OAB é de 50% — aqui, <strong>20 dos 40 acertos</strong>.
      </div>

      <h3 class="ps-titulo">Distribuição das questões</h3>
      <p class="ps-obs">A quantidade por disciplina acompanha o peso de cada matéria nas provas que estão no banco (exames 39 a 47), com as questões sorteadas a cada simulado.</p>
      <table class="ps-tabela"><tbody>${linhas}</tbody></table>

      ${hist.length ? `
        <h3 class="ps-titulo">Simulados anteriores</h3>
        <table class="ps-tabela"><tbody>
          ${hist.map(h => {
            const d = new Date(h.data);
            const data = `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}/${d.getFullYear()}`;
            const pct = Math.round(h.acertos / h.total * 100);
            return `<tr><th>${data}</th><td>${h.acertos}/${h.total} acertos (${pct}%) · ${this.formatar(h.tempo)}${h.porTempo ? ' · encerrado pelo tempo' : ''}</td></tr>`;
          }).join('')}
        </tbody></table>` : ''}
    `;
  },

  htmlBarra() {
    return `
      <div class="sim-barra">
        <button class="sim-relogio-btn" onclick="Simulado.alternarRelogio()" title="Clique para alternar entre tempo restante e tempo decorrido">
          <span id="sim-relogio" class="sim-relogio">05:00:00</span>
          <span id="sim-relogio-rotulo" class="sim-relogio-rotulo">tempo restante</span>
        </button>
        <span id="sim-progresso" class="sim-progresso">${this.respondidas()} de ${this.estado.ids.length} respondidas</span>
        <div class="sim-acoes">
          <button class="btn-secondary" onclick="Simulado.descartar()">Descartar</button>
          <button class="btn-download" onclick="Simulado.finalizar(false)">Finalizar</button>
        </div>
      </div>`;
  },

  htmlCartao() {
    return this.estado.ids.map((id, i) => {
      const respondida = this.estado.respostas[id] !== undefined;
      return `<button class="sim-bolha ${respondida ? 'ok' : ''}" onclick="Simulado.irParaQuestao(${id})" title="Questão ${i + 1}">${i + 1}</button>`;
    }).join('');
  },

  htmlProva() {
    let discAtual = null;
    const blocos = this.estado.ids.map((id, i) => {
      const q = questoes.find(x => x.id === id);
      if (!q) return '';
      const titulo = q.disciplina !== discAtual ? `<h3 class="ps-secao">${q.disciplina}</h3>` : '';
      discAtual = q.disciplina;
      return titulo + `
        <div class="questao-card" id="sim-questao-${q.id}">
          <div class="questao-meta">
            <span class="tag tag-exame">Questão ${i + 1} de ${this.estado.ids.length}</span>
            <span class="tag tag-disciplina">${q.disciplina}</span>
          </div>
          <div class="questao-enunciado">${q.enunciado}</div>
          <div class="alternativas" id="sim-alternativas-${q.id}">
            ${q.alternativas.map((alt, idx) => `
              <div class="alternativa" id="sim-alt-${q.id}-${idx}" onclick="Simulado.responder(${q.id}, ${idx})">
                ${Risco.letra('sim', q.id, idx, 'sim-')}<span class="alt-texto">${alt}</span>
              </div>`).join('')}
          </div>
        </div>`;
    }).join('');

    return this.htmlBarra() + `
      <div class="sim-cartao" id="sim-cartao">${this.htmlCartao()}</div>
      <div class="questoes-lista">${blocos}</div>
      <div class="sim-rodape">
        <button class="btn-download" onclick="Simulado.finalizar(false)">Finalizar e ver resultado</button>
      </div>`;
  },

  htmlResultado() {
    const r = this.apurar();
    const pct = r.total ? Math.round(r.acertos / r.total * 100) : 0;
    const aprovado = r.acertos >= Math.ceil(r.total / 2);
    const letras = ['A', 'B', 'C', 'D', 'E'];

    const porDisc = Object.entries(r.porDisc).sort((a, b) => b[1].total - a[1].total).map(([d, v]) => {
      const p = v.total ? Math.round(v.acertos / v.total * 100) : 0;
      const cor = p >= 70 ? 'forte' : p < 40 ? 'fraca' : 'media';
      return `
        <div class="barra-disciplina">
          <div class="barra-info">
            <span class="barra-nome">${d}</span>
            <span class="barra-valor">${v.acertos}/${v.total} (${p}%)</span>
          </div>
          <div class="barra-trilho"><div class="barra-preenchida ${cor}" style="width:${p}%"></div></div>
        </div>`;
    }).join('');

    const revisao = this.estado.ids.map((id, i) => {
      const q = questoes.find(x => x.id === id);
      if (!q) return '';
      const resp = this.estado.respostas[id];
      const certa = resp === q.correta;
      const marca = resp === undefined ? 'Em branco' : certa ? 'Acertou' : 'Errou';
      const classe = resp === undefined ? 'tag-status' : certa ? 'tag-correta' : 'tag-errada';
      return `
        <div class="questao-card" id="sim-questao-${q.id}">
          <div class="questao-meta">
            <span class="tag tag-exame">Questão ${i + 1} · ${q.exame} (${q.ano})</span>
            <span class="tag tag-disciplina">${q.disciplina}</span>
            <span class="tag ${classe}">${marca}</span>
          </div>
          <div class="questao-enunciado">${q.enunciado}</div>
          <div class="alternativas" id="sim-alternativas-${q.id}">
            ${q.alternativas.map((alt, idx) => {
              const extra = idx === q.correta ? ' correta' : (idx === resp ? ' errada' : '');
              return `<div class="alternativa sem-clique${extra}" id="sim-alt-${q.id}-${idx}">
                <span class="alt-letra estatica">${letras[idx]})</span><span class="alt-texto">${alt}</span>
              </div>`;
            }).join('')}
          </div>
          <div class="gabarito-box">
            <div class="resposta ${certa ? 'certa' : 'errada'}">
              ${resp === undefined ? '&#128221; Você deixou em branco.' : certa ? '&#10004; Resposta correta!' : '&#10008; Resposta incorreta.'}
              ${certa ? '' : ` A alternativa correta é a <strong>${letras[q.correta]})</strong>.`}
            </div>
            <div class="explicacao"><strong>Comentário:</strong> ${q.comentario || 'Sem comentário cadastrado para esta questão.'}</div>
          </div>
        </div>`;
    }).join('');

    return `
      <div class="ps-destaque">
        <div>
          <h3>Resultado do simulado</h3>
          <p>${r.acertos} acertos em ${r.total} questões (${pct}%) · ${r.total - r.respondidas} em branco</p>
          <p class="ps-contagem">${aprovado ? 'Acima da nota de corte de 50%.' : `Abaixo da nota de corte: faltaram ${Math.ceil(r.total / 2) - r.acertos} acertos.`} Tempo: ${this.formatar(this.decorrido())}${this.estado.porTempo ? ' (encerrado pelo tempo)' : ''}.</p>
        </div>
        <button class="btn-download" onclick="Simulado.iniciar()">Novo simulado</button>
      </div>

      <div class="stats-grid">
        <div class="stat-card"><div class="stat-num">${r.acertos}</div><div class="stat-label">Acertos</div></div>
        <div class="stat-card"><div class="stat-num">${r.respondidas - r.acertos}</div><div class="stat-label">Erros</div></div>
        <div class="stat-card"><div class="stat-num">${r.total - r.respondidas}</div><div class="stat-label">Em branco</div></div>
        <div class="stat-card"><div class="stat-num">${pct}%</div><div class="stat-label">Aproveitamento</div></div>
      </div>

      <h3 class="ps-titulo">Desempenho por disciplina</h3>
      <div class="grafico-barras">${porDisc}</div>

      <h3 class="ps-titulo">Revisão das questões</h3>
      <p class="ps-obs">As respostas do simulado ficam separadas do banco de estudos: nada aqui altera suas estatísticas da aba Questões.</p>
      <div class="questoes-lista">${revisao}</div>
      <div class="sim-rodape">
        <button class="btn-secondary" onclick="Simulado.descartar()">Descartar este simulado</button>
        <button class="btn-download" onclick="Simulado.iniciar()">Novo simulado</button>
      </div>`;
  }
};
