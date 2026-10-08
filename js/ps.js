// Módulo "Processo Seletivo": estudo para a seleção de estagiários da Vara Federal de Três Rios (Edital SJRJ 47/2026).
// Progresso salvo em chave própria, separada do banco da OAB (não mistura as estatísticas).
const PS = {
  STORAGE_KEY: 'oab_ps_respostas',
  ITENS_POR_PAGINA: 10,
  ENTREVISTA_DATA: new Date(2026, 10, 5, 0, 0, 0), // 05/11/2026 (mês 10 = novembro)
  aba: 'geral',
  materiaAtiva: '',
  materiaEntrevista: '',
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
    if (!this.pronto) this.montar();
    this.mostrarAba(this.aba);
  },

  montar() {
    this.pronto = true;
    this.montarLinksProvas();
  },

  mostrarAba(aba) {
    this.aba = aba;
    document.querySelectorAll('.ps-aba').forEach(el => el.classList.toggle('ativa', el.id === `ps-aba-${aba}`));
    document.querySelectorAll('.ps-tab-btn').forEach(el => el.classList.toggle('ativo', el.dataset.aba === aba));
    if (aba === 'geral') this.renderGeral();
    if (aba === 'questoes') this.carregarQuestoes();
    if (aba === 'entrevista') this.renderEntrevista();
  },

  // ---------- Visão geral ----------
  diasAteEntrevista() {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    return Math.round((this.ENTREVISTA_DATA - hoje) / 86400000);
  },

  desempenhoPorMateria() {
    const r = this.getRespostas();
    return PS_MATERIAS.map(m => {
      const qs = questoesPS.filter(q => q.materia === m);
      let resp = 0, ac = 0;
      qs.forEach(q => {
        if (r[q.id] !== undefined) { resp++; if (r[q.id] === q.correta) ac++; }
      });
      return { materia: m, total: qs.length, resp, ac, pct: resp ? Math.round(ac / resp * 100) : null };
    });
  },

  renderGeral() {
    const dias = this.diasAteEntrevista();
    const contagem = dias > 1 ? `Faltam <strong>${dias} dias</strong> para a entrevista (05/11/2026).`
      : dias === 1 ? 'A entrevista é <strong>amanhã</strong> (05/11/2026).'
      : dias === 0 ? 'A entrevista é <strong>hoje</strong>.'
      : 'A data da entrevista (05/11/2026) já passou.';

    const desemp = this.desempenhoPorMateria();
    const totalResp = desemp.reduce((s, d) => s + d.resp, 0);
    const totalAc = desemp.reduce((s, d) => s + d.ac, 0);

    document.getElementById('ps-geral').innerHTML = `
      <div class="ps-destaque">
        <div>
          <h3>${this.esc(PS_EDITAL.titulo)}</h3>
          <p>${this.esc(PS_EDITAL.orgao)}</p>
          <p class="ps-contagem">${contagem}</p>
        </div>
        <a class="btn-download" href="processo-seletivo/Edital_47_SJRJ_2026.pdf" target="_blank" rel="noopener">Abrir o edital (PDF)</a>
      </div>

      <div class="ps-aviso">
        <strong>Como é a seleção:</strong> não há prova escrita. Vale a média entre o seu CR (mínimo 8,0) e a nota da entrevista oral, que cobra
        <em>Direito Civil, Processo Civil, Direito Previdenciário e Juizados Especiais Federais</em>. Por isso o conteúdo abaixo é dividido em
        questões objetivas (para fixar a matéria) e um roteiro de perguntas de entrevista com respostas-modelo.
      </div>

      <h3 class="ps-titulo">Seu progresso</h3>
      <div class="stats-grid">
        <div class="stat-card"><div class="stat-num">${questoesPS.length}</div><div class="stat-label">Questões no banco</div></div>
        <div class="stat-card"><div class="stat-num">${totalResp}</div><div class="stat-label">Respondidas</div></div>
        <div class="stat-card"><div class="stat-num">${totalAc}</div><div class="stat-label">Acertos</div></div>
        <div class="stat-card"><div class="stat-num">${totalResp ? Math.round(totalAc / totalResp * 100) : 0}%</div><div class="stat-label">Aproveitamento</div></div>
      </div>

      <div class="disciplinas-cards ps-materias">
        ${desemp.map(d => `
          <div class="disciplina-card" onclick="PS.estudarMateria('${this.esc(d.materia)}')">
            <div class="disc-nome">${this.esc(d.materia)}</div>
            <div class="disc-qtd">${d.total} questões | ${d.resp ? d.pct + '% acertos' : 'Nenhuma respondida'}</div>
            <div class="disc-tempo">Clique para estudar</div>
          </div>`).join('')}
      </div>

      <h3 class="ps-titulo">Dados do edital</h3>
      <table class="ps-tabela">
        <tbody>
          ${PS_EDITAL.resumo.map(([k, v]) => `<tr><th>${this.esc(k)}</th><td>${this.esc(v)}</td></tr>`).join('')}
        </tbody>
      </table>

      <h3 class="ps-titulo">Sugestão de plano até a entrevista</h3>
      <ol class="ps-plano">
        <li><strong>Semana 1 — Juizados Especiais Federais:</strong> Lei 10.259/2001 (competência, partes, prazos, recursos, RPV) e diferenças em relação ao CPC.</li>
        <li><strong>Semana 2 — Direito Previdenciário:</strong> segurados, período de graça, carência, benefícios por incapacidade, pensão por morte, BPC/LOAS, decadência e prescrição.</li>
        <li><strong>Semana 3 — Processo Civil:</strong> competência, tutelas provisórias, provas, sentença e coisa julgada, recursos e prazos.</li>
        <li><strong>Semana 4 — Direito Civil + simulado oral:</strong> prescrição, responsabilidade civil, usucapião, contratos e sucessões; ensaie o roteiro de entrevista em voz alta, medindo 2 minutos por resposta.</li>
      </ol>
      <p class="ps-obs">Questões baseadas na legislação e em súmulas vigentes, mas confira sempre a lei atualizada antes da entrevista.</p>
    `;
  },

  estudarMateria(materia) {
    this.mostrarAba('questoes');
    this.escolherMateria(materia);
  },

  // ---------- Questões ----------
  escolherMateria(materia) {
    this.materiaAtiva = materia;
    this.carregarQuestoes();
  },

  // Botões de matéria, com o progresso (respondidas/total) de cada uma.
  renderChips() {
    const r = this.getRespostas();
    const chip = (valor, nome, resp, total) =>
      `<button class="chip ${this.materiaAtiva === valor ? 'ativo' : ''}" data-valor="${this.esc(valor)}" onclick="PS.escolherMateria(this.dataset.valor)">${this.esc(nome)} <span>${resp}/${total}</span></button>`;
    const todas = questoesPS.filter(q => r[q.id] !== undefined).length;
    document.getElementById('ps-chips').innerHTML = chip('', 'Todas', todas, questoesPS.length) +
      PS_MATERIAS.map(m => {
        const qs = questoesPS.filter(q => q.materia === m);
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
    const status = document.getElementById('ps-filtro-status').value;
    const r = this.getRespostas();
    return questoesPS.filter(q => {
      if (mat && q.materia !== mat) return false;
      if (status === 'nao-respondida' && r[q.id] !== undefined) return false;
      if (status === 'correta' && r[q.id] !== q.correta) return false;
      if (status === 'errada' && (r[q.id] === undefined || r[q.id] === q.correta)) return false;
      return true;
    });
  },

  renderQuestoes() {
    const container = document.getElementById('ps-questoes');
    const pag = document.getElementById('ps-paginacao');
    const total = Math.ceil(this.filtradas.length / this.ITENS_POR_PAGINA);
    document.getElementById('ps-contador').textContent = `${this.filtradas.length} questões`;

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
        ? `<h3 class="ps-secao">${this.esc(q.materia)} <span>${questoesPS.filter(x => x.materia === q.materia).length} questões</span></h3>` : '';
      anterior = q.materia;
      return titulo + this.htmlQuestao(q);
    }).join('');
    const r = this.getRespostas();
    lote.forEach(q => {
      if (r[q.id] !== undefined) this.exibirGabarito(q, r[q.id]);
      Risco.aplicar('ps', q.id, 'ps-');
    });

    let html = '';
    for (let i = 1; i <= total; i++) {
      html += `<button class="${i === this.paginaAtual ? 'ativo' : ''}" onclick="PS.irPagina(${i})">${i}</button>`;
    }
    pag.innerHTML = total > 1 ? html : '';
  },

  htmlQuestao(q) {
    return `
      <div class="questao-card" id="ps-questao-${q.id}">
        <div class="questao-meta">
          <span class="tag tag-exame">Processo Seletivo</span>
          <span class="tag tag-disciplina">${this.esc(q.materia)}</span>
          <span class="tag tag-status" id="ps-status-${q.id}">Não respondida</span>
        </div>
        <div class="questao-enunciado">${this.esc(q.enunciado)}</div>
        <div class="alternativas" id="ps-alternativas-${q.id}">
          ${q.alternativas.map((alt, i) => `
            <div class="alternativa" id="ps-alt-${q.id}-${i}" onclick="PS.responder(${q.id}, ${i})">
              ${Risco.letra('ps', q.id, i, 'ps-')}<span class="alt-texto">${this.esc(alt)}</span>
            </div>`).join('')}
        </div>
        <div id="ps-gabarito-${q.id}" class="gabarito-box" style="display:none;"></div>
      </div>`;
  },

  responder(id, idx) {
    const q = questoesPS.find(x => x.id === id);
    if (!q) return;
    this.setResposta(id, idx);
    this.exibirGabarito(q, idx);
    this.renderChips();
  },

  exibirGabarito(q, idx) {
    const letras = ['A', 'B', 'C', 'D', 'E'];
    document.querySelectorAll(`#ps-alternativas-${q.id} .alternativa`).forEach(el => el.classList.remove('selecionada', 'correta', 'errada'));
    const sel = document.getElementById(`ps-alt-${q.id}-${idx}`);
    if (!sel) return;
    sel.classList.add('selecionada');
    const certa = idx === q.correta;
    if (certa) {
      sel.classList.add('correta');
    } else {
      sel.classList.add('errada');
      document.getElementById(`ps-alt-${q.id}-${q.correta}`).classList.add('correta');
    }
    const status = document.getElementById(`ps-status-${q.id}`);
    status.className = certa ? 'tag tag-correta' : 'tag tag-errada';
    status.textContent = certa ? 'Acertou' : 'Errou';

    const box = document.getElementById(`ps-gabarito-${q.id}`);
    box.style.display = 'block';
    box.innerHTML = `
      <div class="resposta ${certa ? 'certa' : 'errada'}">
        ${certa ? '&#10004; Resposta correta!' : `&#10008; Resposta incorreta. A alternativa correta é a <strong>${letras[q.correta]})</strong>.`}
      </div>
      <div class="explicacao"><strong>Comentário:</strong> ${this.esc(q.comentario)}</div>`;
  },

  irPagina(p) {
    this.paginaAtual = p;
    this.renderQuestoes();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  refazer() {
    if (!confirm('Apagar suas respostas do Processo Seletivo e começar de novo?')) return;
    try { localStorage.removeItem(this.STORAGE_KEY); } catch { /* ignora */ }
    this.carregarQuestoes();
  },

  // ---------- Entrevista ----------
  escolherMateriaEntrevista(materia) {
    this.materiaEntrevista = materia;
    this.renderEntrevista();
  },

  renderEntrevista() {
    const container = document.getElementById('ps-entrevista');
    const materias = [...new Set(entrevistaPS.map(e => e.materia))];
    const chip = (valor, nome, qtd) =>
      `<button class="chip ${this.materiaEntrevista === valor ? 'ativo' : ''}" data-valor="${this.esc(valor)}" onclick="PS.escolherMateriaEntrevista(this.dataset.valor)">${this.esc(nome)} <span>${qtd}</span></button>`;
    document.getElementById('ps-entrevista-chips').innerHTML = chip('', 'Todas', entrevistaPS.length) +
      materias.map(m => chip(m, m, entrevistaPS.filter(e => e.materia === m).length)).join('');
    container.innerHTML = entrevistaPS.map((e, i) => [e, i]).filter(([e]) => !this.materiaEntrevista || e.materia === this.materiaEntrevista).map(([e, i]) => `
      <details class="ps-entrevista-item">
        <summary>
          <span class="ps-num">${i + 1}</span>
          <span class="ps-pergunta">${this.esc(e.pergunta)}</span>
          <span class="tag tag-disciplina">${this.esc(e.materia)}</span>
        </summary>
        <div class="ps-resposta">
          <p><strong>Resposta-modelo:</strong> ${this.esc(e.resposta)}</p>
          <p class="ps-dica"><strong>Dica:</strong> ${this.esc(e.dica)}</p>
        </div>
      </details>`).join('');
  },

  // ---------- Provas antigas ----------
  montarLinksProvas() {
    document.getElementById('ps-provas').innerHTML = provasAntigasPS.map(p => `
      <div class="download-card">
        <h4>${this.esc(p.titulo)}</h4>
        <p class="ps-detalhe">${this.esc(p.detalhe)}</p>
        <div class="download-links" style="margin-top:12px">
          <a href="${this.esc(p.url)}" target="_blank" class="btn-download" rel="noopener">Abrir prova (PDF)</a>
        </div>
      </div>`).join('');
    document.getElementById('ps-links').innerHTML = linksUteisPS.map(l =>
      `<li><a href="${this.esc(l.url)}" target="_blank" rel="noopener">${this.esc(l.titulo)}</a></li>`).join('');
  }
};

function psAba(aba) { PS.mostrarAba(aba); }
