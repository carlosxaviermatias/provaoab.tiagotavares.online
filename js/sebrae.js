// Módulo "SEBRAE": estudo para o Processo Seletivo SEBRAE/RJ – ALI 02/2026 (Educação Empreendedora).
// Progresso em chave própria de localStorage, separado do banco da OAB e do PS da Justiça Federal.
const SB = {
  STORAGE_KEY: 'oab_sebrae_respostas',
  ITENS_POR_PAGINA: 10,
  PROVA_DATA: new Date(2026, 9, 6, 16, 0, 0),      // 06/10/2026, 16h (mês 9 = outubro)
  ENTREVISTA_DATA: new Date(2026, 10, 24, 0, 0, 0), // 24/11/2026 (início da janela 24 a 27/11)
  aba: 'geral',
  materiaAtiva: '',
  eixoResumo: '',
  competenciaAtiva: '',
  paginaAtual: 1,
  filtradas: [],

  esc(t) {
    return String(t).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  },

  getRespostas() {
    try { return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}'); } catch { return {}; }
  },

  setResposta(id, idx) {
    const r = this.getRespostas();
    r[id] = idx;
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(r)); } catch { /* armazenamento indisponível */ }
  },

  abrir() {
    if (!this.pronto) { this.pronto = true; this.montarLinks(); }
    this.mostrarAba(this.aba);
  },

  mostrarAba(aba) {
    this.aba = aba;
    document.querySelectorAll('.sb-aba').forEach(el => el.classList.toggle('ativa', el.id === `sb-aba-${aba}`));
    document.querySelectorAll('.sb-tab-btn').forEach(el => el.classList.toggle('ativo', el.dataset.aba === aba));
    if (aba === 'geral') this.renderGeral();
    if (aba === 'resumo') this.renderResumo();
    if (aba === 'questoes') this.carregarQuestoes();
    if (aba === 'entrevista') this.renderEntrevista();
  },

  // ---------- Visão geral ----------
  diasAte(data) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const alvo = new Date(data);
    alvo.setHours(0, 0, 0, 0);
    return Math.round((alvo - hoje) / 86400000);
  },

  frase(dias, rotulo, quando) {
    if (dias > 1) return `Faltam <strong>${dias} dias</strong> para ${rotulo} (${quando}).`;
    if (dias === 1) return `${rotulo.charAt(0).toUpperCase() + rotulo.slice(1)} é <strong>amanhã</strong> (${quando}).`;
    if (dias === 0) return `${rotulo.charAt(0).toUpperCase() + rotulo.slice(1)} é <strong>hoje</strong> (${quando}).`;
    return `${rotulo.charAt(0).toUpperCase() + rotulo.slice(1)} (${quando}) já passou.`;
  },

  desempenhoPorMateria() {
    const r = this.getRespostas();
    return SB_MATERIAS.map(m => {
      const qs = questoesSebrae.filter(q => q.materia === m);
      let resp = 0, ac = 0;
      qs.forEach(q => { if (r[q.id] !== undefined) { resp++; if (r[q.id] === q.correta) ac++; } });
      return { materia: m, total: qs.length, resp, ac, pct: resp ? Math.round(ac / resp * 100) : null };
    });
  },

  renderGeral() {
    const desemp = this.desempenhoPorMateria();
    const totalResp = desemp.reduce((s, d) => s + d.resp, 0);
    const totalAc = desemp.reduce((s, d) => s + d.ac, 0);
    const diasProva = this.diasAte(this.PROVA_DATA);
    const diasEntrev = this.diasAte(this.ENTREVISTA_DATA);
    const contagem = diasProva >= 0
      ? this.frase(diasProva, 'a prova objetiva', '06/10/2026, 16h')
      : this.frase(diasEntrev, 'a entrevista por competências', '24 a 27/11/2026');

    document.getElementById('sb-geral').innerHTML = `
      <div class="ps-destaque">
        <div>
          <h3>${this.esc(SB_EDITAL.titulo)}</h3>
          <p>${this.esc(SB_EDITAL.orgao)}</p>
          <p class="ps-contagem">${contagem}</p>
        </div>
      </div>

      <div class="ps-aviso">
        <strong>Onde se ganha pontos:</strong> a prova vale 50, a análise documental 10 e a <em>entrevista por competências 100</em>.
        Na prova, 20 das 50 questões são da metodologia Educação Empreendedora — e esse bloco ainda é o segundo critério de desempate.
        Atenção: <strong>zerar qualquer um dos três blocos elimina</strong>.
      </div>

      <h3 class="ps-titulo">Seu progresso nas questões</h3>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-num">${questoesSebrae.length}</div><div class="stat-label">Questões no banco</div></div>
        <div class="stat-card"><div class="stat-num">${totalResp}</div><div class="stat-label">Respondidas</div></div>
        <div class="stat-card"><div class="stat-num">${totalAc}</div><div class="stat-label">Acertos</div></div>
        <div class="stat-card"><div class="stat-num">${totalResp ? Math.round(totalAc / totalResp * 100) : 0}%</div><div class="stat-label">Aproveitamento</div></div>
      </div>

      <div class="disciplinas-cards ps-materias">
        ${desemp.map(d => `
          <div class="disciplina-card" onclick="SB.estudarMateria('${this.esc(d.materia)}')">
            <div class="disc-nome">${this.esc(d.materia)}</div>
            <div class="disc-qtd">${d.total} questões | ${d.resp ? d.pct + '% de acerto' : 'Nenhuma respondida'}</div>
            <div class="disc-tempo">Clique para estudar</div>
          </div>`).join('')}
      </div>

      <h3 class="ps-titulo">Dados do processo</h3>
      <table class="ps-tabela">
        <tbody>
          ${SB_EDITAL.resumo.map(([k, v]) => `<tr><th>${this.esc(k)}</th><td>${this.esc(v)}</td></tr>`).join('')}
        </tbody>
      </table>

      <h3 class="ps-titulo">Plano de estudo sugerido</h3>
      <ol class="ps-plano">
        <li><strong>Bloco 1 — Metodologia (maior peso):</strong> BNCC e competências gerais, Novo Ensino Médio, metodologias ativas, pedagogia de projetos, Design Thinking, Paulo Freire e inovação pedagógica.</li>
        <li><strong>Bloco 2 — Conhecimentos ALI:</strong> Manual de Oslo (4ª ed.), GEM, SEBRAE e Sistema S, LC 123, Marco Legal da Inovação, indicadores, produtividade e sustentabilidade.</li>
        <li><strong>Bloco 3 — Português:</strong> interpretação, crase, concordância, regência, pontuação e redação oficial (parecer, nota técnica, relatório).</li>
        <li><strong>Bloco 4 — Entrevista:</strong> monte de 6 a 8 histórias reais no formato STAR e ensaie em voz alta, com 2 minutos por resposta.</li>
      </ol>
      <p class="ps-obs">Material de apoio produzido a partir do Manual do Candidato e dos Anexos II e IV. Confira sempre a redação vigente das leis citadas.</p>
    `;
  },

  estudarMateria(materia) {
    this.mostrarAba('questoes');
    this.escolherMateria(materia);
  },

  // ---------- Resumo ----------
  escolherEixo(eixo) {
    this.eixoResumo = eixo;
    this.renderResumo();
  },

  renderResumo() {
    const eixos = [...new Set(SB_RESUMOS.map(r => r.eixo))];
    const chip = (valor, nome, qtd) =>
      `<button class="chip ${this.eixoResumo === valor ? 'ativo' : ''}" data-valor="${this.esc(valor)}" onclick="SB.escolherEixo(this.dataset.valor)">${this.esc(nome)} <span>${qtd}</span></button>`;
    document.getElementById('sb-resumo-chips').innerHTML = chip('', 'Tudo', SB_RESUMOS.length) +
      eixos.map(e => chip(e, e, SB_RESUMOS.filter(r => r.eixo === e).length)).join('');

    const lista = SB_RESUMOS.filter(r => !this.eixoResumo || r.eixo === this.eixoResumo);
    // Os resumos são conteúdo próprio do site e usam marcação de destaque, por isso vão como HTML.
    document.getElementById('sb-resumo').innerHTML = lista.map(r => `
      <div class="sb-card">
        <h3>${this.esc(r.titulo)} <span class="tag tag-disciplina">${this.esc(r.eixo)}</span></h3>
        <ul>${r.pontos.map(p => `<li>${p}</li>`).join('')}</ul>
      </div>`).join('');
  },

  // ---------- Questões ----------
  escolherMateria(materia) {
    this.materiaAtiva = materia;
    this.carregarQuestoes();
  },

  renderChips() {
    const r = this.getRespostas();
    const chip = (valor, nome, resp, total) =>
      `<button class="chip ${this.materiaAtiva === valor ? 'ativo' : ''}" data-valor="${this.esc(valor)}" onclick="SB.escolherMateria(this.dataset.valor)">${this.esc(nome)} <span>${resp}/${total}</span></button>`;
    const todas = questoesSebrae.filter(q => r[q.id] !== undefined).length;
    document.getElementById('sb-chips').innerHTML = chip('', 'Todas', todas, questoesSebrae.length) +
      SB_MATERIAS.map(m => {
        const qs = questoesSebrae.filter(q => q.materia === m);
        return chip(m, m, qs.filter(q => r[q.id] !== undefined).length, qs.length);
      }).join('');
  },

  carregarQuestoes() {
    this.filtradas = this.filtrar();
    this.renderChips();
    this.paginaAtual = 1;
    this.renderQuestoes();
  },

  filtrar() {
    const mat = this.materiaAtiva;
    const status = document.getElementById('sb-filtro-status').value;
    const r = this.getRespostas();
    return questoesSebrae.filter(q => {
      if (mat && q.materia !== mat) return false;
      if (status === 'nao-respondida' && r[q.id] !== undefined) return false;
      if (status === 'correta' && r[q.id] !== q.correta) return false;
      if (status === 'errada' && (r[q.id] === undefined || r[q.id] === q.correta)) return false;
      return true;
    });
  },

  renderQuestoes() {
    const container = document.getElementById('sb-questoes');
    const pag = document.getElementById('sb-paginacao');
    const paginas = Math.ceil(this.filtradas.length / this.ITENS_POR_PAGINA);
    document.getElementById('sb-contador').textContent = `${this.filtradas.length} questões`;

    if (!this.filtradas.length) {
      container.innerHTML = '<div class="sem-questoes"><p>Nenhuma questão encontrada com os filtros atuais.</p></div>';
      pag.innerHTML = '';
      return;
    }

    const ini = (this.paginaAtual - 1) * this.ITENS_POR_PAGINA;
    const lote = this.filtradas.slice(ini, ini + this.ITENS_POR_PAGINA);
    let anterior = null;
    container.innerHTML = lote.map(q => {
      const titulo = q.materia !== anterior
        ? `<h3 class="ps-secao">${this.esc(q.materia)} <span>${questoesSebrae.filter(x => x.materia === q.materia).length} questões</span></h3>` : '';
      anterior = q.materia;
      return titulo + this.htmlQuestao(q);
    }).join('');
    const r = this.getRespostas();
    lote.forEach(q => { if (r[q.id] !== undefined) this.exibirGabarito(q, r[q.id]); });

    let html = '';
    for (let i = 1; i <= paginas; i++) {
      html += `<button class="${i === this.paginaAtual ? 'ativo' : ''}" onclick="SB.irPagina(${i})">${i}</button>`;
    }
    pag.innerHTML = paginas > 1 ? html : '';
  },

  htmlQuestao(q) {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    return `
      <div class="questao-card" id="sb-questao-${q.id}">
        <div class="questao-meta">
          <span class="tag tag-exame">SEBRAE ALI 02/2026</span>
          <span class="tag tag-disciplina">${this.esc(q.materia)}</span>
          <span class="tag tag-status" id="sb-status-${q.id}">Não respondida</span>
        </div>
        <div class="questao-enunciado">${this.esc(q.enunciado)}</div>
        <div class="alternativas" id="sb-alternativas-${q.id}">
          ${q.alternativas.map((alt, i) => `
            <div class="alternativa" id="sb-alt-${q.id}-${i}" onclick="SB.responder(${q.id}, ${i})">
              <strong>${letras[i]})</strong> ${this.esc(alt)}
            </div>`).join('')}
        </div>
        <div id="sb-gabarito-${q.id}" class="gabarito-box" style="display:none;"></div>
      </div>`;
  },

  responder(id, idx) {
    const q = questoesSebrae.find(x => x.id === id);
    if (!q) return;
    this.setResposta(id, idx);
    this.exibirGabarito(q, idx);
    this.renderChips();
  },

  exibirGabarito(q, idx) {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    document.querySelectorAll(`#sb-alternativas-${q.id} .alternativa`).forEach(el => el.classList.remove('selecionada', 'correta', 'errada'));
    const sel = document.getElementById(`sb-alt-${q.id}-${idx}`);
    if (!sel) return;
    sel.classList.add('selecionada');
    const certa = idx === q.correta;
    if (certa) {
      sel.classList.add('correta');
    } else {
      sel.classList.add('errada');
      document.getElementById(`sb-alt-${q.id}-${q.correta}`).classList.add('correta');
    }
    const status = document.getElementById(`sb-status-${q.id}`);
    status.className = certa ? 'tag tag-correta' : 'tag tag-errada';
    status.textContent = certa ? 'Acertou' : 'Errou';

    const box = document.getElementById(`sb-gabarito-${q.id}`);
    box.style.display = 'block';
    box.innerHTML = `
      <div class="resposta ${certa ? 'certa' : 'errada'}">
        ${certa ? '&#10004; Resposta correta!' : `&#10008; Resposta incorreta. A alternativa correta é a <strong>${letras[q.correta]})</strong>.`}
      </div>
      <div class="explicacao"><strong>${certa ? 'Por que está certa' : 'Comentário'}:</strong> ${this.esc(q.comentario)}</div>`;
  },

  irPagina(p) {
    this.paginaAtual = p;
    this.renderQuestoes();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  refazer() {
    if (!confirm('Apagar suas respostas do bloco SEBRAE e começar de novo?')) return;
    try { localStorage.removeItem(this.STORAGE_KEY); } catch { /* ignora */ }
    this.carregarQuestoes();
  },

  // ---------- Entrevista ----------
  escolherCompetencia(c) {
    this.competenciaAtiva = c;
    this.renderEntrevista();
  },

  renderEntrevista() {
    const guia = SB_ENTREVISTA_GUIA;
    const bloco = (titulo, itens) => `
      <div class="sb-card">
        <h3>${titulo}</h3>
        <ul>${itens.map(i => `<li>${i}</li>`).join('')}</ul>
      </div>`;
    document.getElementById('sb-entrevista-guia').innerHTML =
      bloco('Como funciona a etapa', guia.comoFunciona) +
      bloco('Como responder: método STAR', guia.metodo) +
      bloco('Erros que derrubam nota', guia.erros) +
      bloco('Preparação na véspera', guia.preparacao);

    const comps = [...new Set(entrevistaSebrae.map(e => e.competencia))];
    const chip = (valor, nome, qtd) =>
      `<button class="chip ${this.competenciaAtiva === valor ? 'ativo' : ''}" data-valor="${this.esc(valor)}" onclick="SB.escolherCompetencia(this.dataset.valor)">${this.esc(nome)} <span>${qtd}</span></button>`;
    document.getElementById('sb-entrevista-chips').innerHTML = chip('', 'Todas', entrevistaSebrae.length) +
      comps.map(c => chip(c, c, entrevistaSebrae.filter(e => e.competencia === c).length)).join('');

    document.getElementById('sb-entrevista').innerHTML = entrevistaSebrae
      .filter(e => !this.competenciaAtiva || e.competencia === this.competenciaAtiva)
      .map((e, i) => `
        <details class="ps-entrevista-item">
          <summary>
            <span class="ps-num">${i + 1}</span>
            <span class="ps-pergunta">${this.esc(e.pergunta)}</span>
            <span class="tag tag-disciplina">${this.esc(e.competencia)}</span>
          </summary>
          <div class="ps-resposta">
            <p><strong>Como responder:</strong> ${this.esc(e.resposta)}</p>
            <p class="ps-dica"><strong>Dica:</strong> ${this.esc(e.dica)}</p>
          </div>
        </details>`).join('');
  },

  // ---------- Links ----------
  montarLinks() {
    document.getElementById('sb-links').innerHTML = SB_LINKS.map(l =>
      `<li><a href="${this.esc(l.url)}" target="_blank" rel="noopener">${this.esc(l.titulo)}</a></li>`).join('');
  }
};

function sbAba(aba) { SB.mostrarAba(aba); }
