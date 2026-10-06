const SEM_DISCIPLINA_VALOR = '__sem_classificacao__';
const SEM_DISCIPLINA_NOME = 'Sem Classificação';

const App = {
  ITENS_POR_PAGINA: 10,
  paginaAtual: 1,
  questoesFiltradas: [],
  todasDisciplinas: [],

  init() {
    this.extrairDisciplinas();
    this.povoarFiltros();
    this.atualizarHome();
    this.carregarQuestoes();
    Timer.iniciar();
  },

  extrairDisciplinas() {
    const discMap = {};
    questoes.forEach(q => {
      if (!discMap[q.disciplina]) {
        discMap[q.disciplina] = 0;
      }
      discMap[q.disciplina]++;
    });
    this.todasDisciplinas = Object.entries(discMap).map(([valor, qtd]) => ({
      valor,
      nome: valor || SEM_DISCIPLINA_NOME,
      qtd
    }));
  },

  povoarFiltros() {
    const selDisciplina = document.getElementById('filtro-disciplina');
    const selExame = document.getElementById('filtro-exame');
    const selAno = document.getElementById('filtro-ano');

    this.todasDisciplinas.sort((a, b) => a.nome.localeCompare(b.nome)).forEach(d => {
      const opt = document.createElement('option');
      opt.value = d.valor ? d.valor : SEM_DISCIPLINA_VALOR;
      opt.textContent = `${d.nome} (${d.qtd})`;
      selDisciplina.appendChild(opt);
    });

    const exames = new Set(questoes.map(q => `${q.exame} (${q.ano})`));
    const examesArr = [...exames].sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || 0);
      const numB = parseInt(b.match(/\d+/)?.[0] || 0);
      return numB - numA;
    });
    examesArr.forEach(e => {
      const opt = document.createElement('option');
      opt.value = e;
      opt.textContent = e;
      selExame.appendChild(opt);
    });

    const anos = [...new Set(questoes.map(q => q.ano))].sort((a, b) => b - a);
    anos.forEach(a => {
      const opt = document.createElement('option');
      opt.value = a;
      opt.textContent = a;
      selAno.appendChild(opt);
    });
  },

  navegar(pagina) {
    document.querySelectorAll('.pagina').forEach(p => p.classList.remove('ativa'));
    document.getElementById(`pagina-${pagina}`).classList.add('ativa');

    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('ativo'));
    document.querySelector(`.nav-btn[data-pagina="${pagina}"]`)?.classList.add('ativo');

    if (pagina === 'home') this.atualizarHome();
    if (pagina === 'questoes') this.carregarQuestoes();
    if (pagina === 'estatisticas') this.carregarEstatisticas();
    if (pagina === 'comentarios') this.carregarComentarios();
    if (pagina === 'download') this.carregarDownloads();
    if (pagina === 'ps') PS.abrir();

    if (pagina !== 'questoes') Timer.setDisciplinaAtiva(null);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  getStorage() {
    try {
      return JSON.parse(localStorage.getItem('oab_estudos_respostas') || '{}');
    } catch {
      return {};
    }
  },

  salvarResposta(questaoId, alternativaIdx) {
    const respostas = this.getStorage();
    respostas[questaoId] = alternativaIdx;
    localStorage.setItem('oab_estudos_respostas', JSON.stringify(respostas));
  },

  getResposta(questaoId) {
    const respostas = this.getStorage();
    return respostas[questaoId];
  },

  atualizarHome() {
    const respostas = this.getStorage();
    const total = questoes.length;
    let respondidas = 0;
    let acertos = 0;

    questoes.forEach(q => {
      if (q.correta !== null && respostas[q.id] !== undefined) {
        respondidas++;
        if (respostas[q.id] === q.correta) acertos++;
      }
    });

    document.getElementById('stat-total').textContent = total;
    document.getElementById('stat-respondidas').textContent = respondidas;
    document.getElementById('stat-acertos').textContent = acertos;
    document.getElementById('stat-aproveitamento').textContent =
      respondidas > 0 ? Math.round((acertos / respondidas) * 100) + '%' : '0%';

    const container = document.getElementById('disciplinas-lista');
    container.innerHTML = '';

    const respostasObj = respostas;
    this.todasDisciplinas.forEach(d => {
      const questoesDisc = questoes.filter(q => q.disciplina === d.valor);
      let acertosDisc = 0;
      let respDisc = 0;
      questoesDisc.forEach(q => {
        if (q.correta !== null && respostasObj[q.id] !== undefined) {
          respDisc++;
          if (respostasObj[q.id] === q.correta) acertosDisc++;
        }
      });

      const card = document.createElement('div');
      card.className = 'disciplina-card';
      card.onclick = () => { this.navegar('questoes'); document.getElementById('filtro-disciplina').value = d.valor ? d.valor : SEM_DISCIPLINA_VALOR; this.carregarQuestoes(); };
      card.innerHTML = `
        <div class="disc-nome">${d.nome}</div>
        <div class="disc-qtd">${d.qtd} questões | ${respDisc > 0 ? Math.round((acertosDisc / respDisc) * 100) + '% acertos' : 'Nenhuma respondida'}</div>
        <div class="disc-tempo">${Timer.formatarCurto(Timer.getTempoDisciplina(d.nome))} estudados</div>
      `;
      container.appendChild(card);
    });
  },

  carregarEstatisticas() {
    const respostas = this.getStorage();
    const total = questoes.length;
    let respondidas = 0;
    let acertos = 0;

    questoes.forEach(q => {
      if (q.correta !== null && respostas[q.id] !== undefined) {
        respondidas++;
        if (respostas[q.id] === q.correta) acertos++;
      }
    });

    const aproveitamento = respondidas > 0 ? Math.round((acertos / respondidas) * 100) : 0;

    document.getElementById('estat-geral-cards').innerHTML = `
      <div class="stat-card">
        <div class="stat-num">${total}</div>
        <div class="stat-label">Questões no Banco</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${respondidas}</div>
        <div class="stat-label">Respondidas</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${acertos}</div>
        <div class="stat-label">Acertos</div>
      </div>
      <div class="stat-card">
        <div class="stat-num">${aproveitamento}%</div>
        <div class="stat-label">Aproveitamento Geral</div>
      </div>
    `;

    const porDisciplina = this.todasDisciplinas.map(d => {
      const qsDisc = questoes.filter(q => q.disciplina === d.valor);
      let respDisc = 0;
      let acertosDisc = 0;
      qsDisc.forEach(q => {
        if (q.correta !== null && respostas[q.id] !== undefined) {
          respDisc++;
          if (respostas[q.id] === q.correta) acertosDisc++;
        }
      });
      const pct = respDisc > 0 ? Math.round((acertosDisc / respDisc) * 100) : null;
      return { nome: d.nome, respDisc, acertosDisc, pct, tempo: Timer.getTempoDisciplina(d.nome) };
    }).sort((a, b) => (b.pct ?? -1) - (a.pct ?? -1));

    document.getElementById('grafico-disciplinas').innerHTML = porDisciplina.map(d => {
      const corClasse = d.pct === null ? '' : d.pct >= 70 ? 'forte' : d.pct < 40 ? 'fraca' : 'media';
      const valorTexto = d.pct === null ? 'Sem respostas' : `${d.pct}% (${d.acertosDisc}/${d.respDisc})`;
      return `
        <div class="barra-disciplina">
          <div class="barra-info">
            <span class="barra-nome">${d.nome}</span>
            <span class="barra-valor">${valorTexto}</span>
          </div>
          <div class="barra-trilho">
            <div class="barra-preenchida ${corClasse}" style="width:${d.pct ?? 0}%"></div>
          </div>
          <div class="barra-tempo">${Timer.formatarCurto(d.tempo)} estudados</div>
        </div>
      `;
    }).join('');
  },

  carregarQuestoes() {
    this.questoesFiltradas = this.filtrarQuestoes();
    this.paginaAtual = 1;
    this.renderizarQuestoes();
  },

  filtrarQuestoes() {
    const discSelecionada = document.getElementById('filtro-disciplina').value;
    const discFiltro = discSelecionada === SEM_DISCIPLINA_VALOR ? '' : discSelecionada;
    const exameFiltro = document.getElementById('filtro-exame').value;
    const statusFiltro = document.getElementById('filtro-status').value;
    const anoFiltro = document.getElementById('filtro-ano').value;
    const respostas = this.getStorage();

    const discParaTimer = discSelecionada === SEM_DISCIPLINA_VALOR ? SEM_DISCIPLINA_NOME : discSelecionada;
    Timer.setDisciplinaAtiva(discParaTimer || null);

    return questoes.filter(q => {
      if (discSelecionada && q.disciplina !== discFiltro) return false;
      if (exameFiltro && `${q.exame} (${q.ano})` !== exameFiltro) return false;
      if (anoFiltro && String(q.ano) !== anoFiltro) return false;
      if (statusFiltro === 'nao-respondida' && respostas[q.id] !== undefined) return false;
      if (statusFiltro === 'correta' && (q.correta === null || respostas[q.id] !== q.correta)) return false;
      if (statusFiltro === 'errada') {
        if (respostas[q.id] === undefined || q.correta === null || respostas[q.id] === q.correta) return false;
      }
      if (statusFiltro === 'nao-acertadas') {
        if (q.correta === null) return false;
        if (respostas[q.id] !== undefined && respostas[q.id] === q.correta) return false;
      }
      return true;
    });
  },

  renderizarQuestoes() {
    const container = document.getElementById('questoes-container');
    const paginacao = document.getElementById('paginacao');
    const totalPaginas = Math.ceil(this.questoesFiltradas.length / this.ITENS_POR_PAGINA);

    if (this.questoesFiltradas.length === 0) {
      container.innerHTML = '<div class="sem-questoes"><p>Nenhuma questão encontrada com os filtros atuais.</p></div>';
      paginacao.innerHTML = '';
      return;
    }

    const inicio = (this.paginaAtual - 1) * this.ITENS_POR_PAGINA;
    const fim = inicio + this.ITENS_POR_PAGINA;
    const questoesPagina = this.questoesFiltradas.slice(inicio, fim);

    container.innerHTML = questoesPagina.map(q => this.renderQuestaoHtml(q)).join('');

    questoesPagina.forEach(q => {
      const resposta = this.getResposta(q.id);
      if (resposta !== undefined) {
        this.exibirGabarito(q, resposta);
      }
    });

    if (totalPaginas > 1) {
      let pagHtml = '';
      for (let i = 1; i <= totalPaginas && i <= 15; i++) {
        pagHtml += `<button class="${i === this.paginaAtual ? 'ativo' : ''}" onclick="App.irPagina(${i})">${i}</button>`;
      }
      paginacao.innerHTML = pagHtml;
    } else {
      paginacao.innerHTML = '';
    }
  },

  renderQuestaoHtml(q) {
    return `
      <div class="questao-card" id="questao-${q.id}">
        <div class="questao-meta">
          <span class="tag tag-exame">${q.exame} (${q.ano})</span>
          <span class="tag tag-disciplina">${q.disciplina}</span>
          <span class="tag tag-status" id="status-${q.id}">Não respondida</span>
        </div>
        <div class="questao-enunciado">${q.enunciado}</div>
        <div class="alternativas" id="alternativas-${q.id}">
          ${q.alternativas.map((alt, idx) => `
            <div class="alternativa" id="alt-${q.id}-${idx}" onclick="App.selecionarAlternativa(${q.id}, ${idx})">
              ${alt}
            </div>
          `).join('')}
        </div>
        <div id="gabarito-${q.id}" class="gabarito-box" style="display:none;"></div>
        <div class="comentario-area">
          <textarea id="comentario-${q.id}" placeholder="Seu comentário ou anotação sobre esta questão..." oninput="Comentarios.set(${q.id}, this.value)">${Comentarios.get(q.id)}</textarea>
          <div id="comentario-salvo-${q.id}" class="comentario-salvo">Comentário salvo</div>
        </div>
      </div>
    `;
  },

  selecionarAlternativa(questaoId, alternativaIdx) {
    const questoesPagina = this.questoesFiltradas.slice(
      (this.paginaAtual - 1) * this.ITENS_POR_PAGINA,
      (this.paginaAtual - 1) * this.ITENS_POR_PAGINA + this.ITENS_POR_PAGINA
    );
    const q = questoes.find(q => q.id === questaoId);
    if (!q) return;

    this.salvarResposta(questaoId, alternativaIdx);
    this.exibirGabarito(q, alternativaIdx);
    this.atualizarStatusQuestao(questaoId, alternativaIdx, q.correta);
    this.atualizarHome();
  },

  exibirGabarito(q, alternativaIdx) {
    document.querySelectorAll(`#alternativas-${q.id} .alternativa`).forEach(el => {
      el.classList.remove('selecionada', 'correta', 'errada');
    });

    document.getElementById(`alt-${q.id}-${alternativaIdx}`).classList.add('selecionada');

    if (q.correta !== null && alternativaIdx === q.correta) {
      document.getElementById(`alt-${q.id}-${alternativaIdx}`).classList.add('correta');
    } else if (q.correta !== null) {
      document.getElementById(`alt-${q.id}-${alternativaIdx}`).classList.add('errada');
      document.getElementById(`alt-${q.id}-${q.correta}`).classList.add('correta');
    }

    const gabarito = document.getElementById(`gabarito-${q.id}`);
    gabarito.style.display = 'block';
    if (q.correta !== null) {
      const certa = alternativaIdx === q.correta;
      gabarito.innerHTML = `
        <div class="resposta ${certa ? 'certa' : 'errada'}">
          ${certa ? '&#10004; Resposta correta!' : '&#10008; Resposta incorreta.'}
          ${certa ? '' : ` A alternativa correta é <strong>${q.alternativas[q.correta]}</strong>`}
        </div>
        <div class="explicacao"><strong>Comentário:</strong> ${q.comentario}</div>
      `;
    } else {
      gabarito.innerHTML = `
        <div class="resposta">
          &#128221; Questão registrada. O gabarito oficial ainda não foi associado.
        </div>
        <div class="explicacao"><strong>Comentário:</strong> ${q.comentario}</div>
      `;
    }
  },

  atualizarStatusQuestao(questaoId, alternativaIdx, correta) {
    const status = document.getElementById(`status-${questaoId}`);
    if (correta === null) {
      status.className = 'tag tag-status';
      status.textContent = 'Respondida';
    } else if (alternativaIdx === correta) {
      status.className = 'tag tag-correta';
      status.textContent = 'Acertou';
    } else {
      status.className = 'tag tag-errada';
      status.textContent = 'Errou';
    }
  },

  irPagina(pagina) {
    this.paginaAtual = pagina;
    this.renderizarQuestoes();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  carregarComentarios() {
    const container = document.getElementById('comentarios-container');
    const todos = Comentarios.listarTodos();
    const ids = Object.keys(todos);

    if (ids.length === 0) {
      container.innerHTML = '<div class="sem-questoes"><p>Você ainda não fez nenhum comentário. Estude as questões e adicione suas anotações!</p></div>';
      return;
    }

    container.innerHTML = ids.map(id => {
      const q = questoes.find(q => q.id === parseInt(id));
      if (!q) return '';
      return `
        <div class="comentario-card">
          <div class="ref-questao">
            <strong>${q.disciplina}</strong> &mdash; ${q.exame} (${q.ano})
          </div>
          <div class="comentario-texto">${todos[id]}</div>
          <button class="btn-ver-questao" onclick="App.irParaQuestao(${q.id})">Ver questão</button>
        </div>
      `;
    }).join('');
  },

  irParaQuestao(questaoId) {
    this.navegar('questoes');
    document.getElementById('filtro-disciplina').value = '';
    document.getElementById('filtro-exame').value = '';
    document.getElementById('filtro-ano').value = '';
    document.getElementById('filtro-status').value = '';
    this.carregarQuestoes();
  },

  carregarDownloads() {
    const container = document.getElementById('download-lista');

    const examesLista = Object.entries(PDF_LINKS).sort((a, b) => {
      const numA = parseInt(a[1].id) || 0;
      const numB = parseInt(b[1].id) || 0;
      return numB - numA;
    });

    container.innerHTML = examesLista.map(([key, info]) => {
      const parenIdx = key.lastIndexOf(' (');
      const exame = key.substring(0, parenIdx);
      const ano = key.substring(parenIdx + 2, key.length - 1);

      return `
        <div class="download-card">
          <h4>${exame} Exame de Ordem (${ano})</h4>
          <div class="download-links" style="margin-top:12px">
            <a href="${info.prova}" target="_blank" class="btn-download" rel="noopener">PDF Prova Oficial</a>
            ${info.gabarito ? `<a href="${info.gabarito}" target="_blank" class="btn-download btn-download-gabarito" rel="noopener">PDF Gabarito</a>` : '<span class="btn-download disabled">Gabarito indispon\u00edvel</span>'}
          </div>
        </div>
      `;
    }).join('');
  },

  filtrarPorNaoRespondidas() {
    this.navegar('questoes');
    document.getElementById('filtro-status').value = 'nao-respondida';
    this.carregarQuestoes();
  },

  filtrarPorErradas() {
    this.navegar('questoes');
    document.getElementById('filtro-status').value = 'errada';
    this.carregarQuestoes();
  },

  iniciarModoProva() {
    this.navegar('questoes');
    document.getElementById('filtro-disciplina').value = '';
    document.getElementById('filtro-exame').value = '';
    document.getElementById('filtro-ano').value = '';
    document.getElementById('filtro-status').value = 'nao-respondida';
    this.carregarQuestoes();
  }
};

function navegar(pagina) { App.navegar(pagina); }
function aplicarFiltros() { App.carregarQuestoes(); }
function iniciarModoProva() { App.iniciarModoProva(); }
function filtrarPorNaoRespondidas() { App.filtrarPorNaoRespondidas(); }
function filtrarPorErradas() { App.filtrarPorErradas(); }

document.addEventListener('DOMContentLoaded', () => App.init());
