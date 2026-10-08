// Riscar alternativas: clicar na letra (A, B, C, D) corta a alternativa, como se faz no papel.
// Serve aos três bancos (OAB, Processo Seletivo e SEBRAE) e ao simulado; o estado fica no navegador.
const Risco = {
  STORAGE_KEY: 'oab_alternativas_riscadas',
  LETRAS: ['A', 'B', 'C', 'D', 'E'],
  cache: null,

  carregar() {
    if (this.cache) return this.cache;
    try { this.cache = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}'); } catch { this.cache = {}; }
    return this.cache;
  },

  salvar() {
    try { localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cache || {})); } catch { /* armazenamento indisponível */ }
  },

  // banco: 'oab' | 'ps' | 'sb' | 'sim' — mantém os bancos separados mesmo com ids iguais.
  chave(banco, questaoId) {
    return `${banco}:${questaoId}`;
  },

  riscadas(banco, questaoId) {
    return this.carregar()[this.chave(banco, questaoId)] || [];
  },

  esta(banco, questaoId, idx) {
    return this.riscadas(banco, questaoId).includes(idx);
  },

  // Chamado pelo clique na letra. Não deixa o clique chegar à alternativa (que responderia a questão).
  alternar(ev, banco, questaoId, idx, prefixo) {
    if (ev) { ev.stopPropagation(); ev.preventDefault(); }
    const dados = this.carregar();
    const chave = this.chave(banco, questaoId);
    const lista = dados[chave] || [];
    const pos = lista.indexOf(idx);
    if (pos >= 0) lista.splice(pos, 1); else lista.push(idx);
    if (lista.length) dados[chave] = lista; else delete dados[chave];
    this.cache = dados;
    this.salvar();
    this.aplicar(banco, questaoId, prefixo);
  },

  // Reaplica o estado visual de uma questão já renderizada.
  aplicar(banco, questaoId, prefixo) {
    const lista = this.riscadas(banco, questaoId);
    document.querySelectorAll(`#${prefixo}alternativas-${questaoId} .alternativa`).forEach((el, i) => {
      const riscada = lista.includes(i);
      el.classList.toggle('riscada', riscada);
      const letra = el.querySelector('.alt-letra');
      if (letra) letra.setAttribute('aria-pressed', riscada ? 'true' : 'false');
    });
  },

  // HTML da letra clicável, usada no início de cada alternativa.
  letra(banco, questaoId, idx, prefixo) {
    const l = this.LETRAS[idx] || String(idx + 1);
    return `<span class="alt-letra" role="button" tabindex="0" aria-pressed="false" title="Clique para riscar esta alternativa"
      onclick="Risco.alternar(event, '${banco}', ${questaoId}, ${idx}, '${prefixo}')"
      onkeydown="if(event.key==='Enter'||event.key===' '){Risco.alternar(event, '${banco}', ${questaoId}, ${idx}, '${prefixo}');}">${l})</span>`;
  },

  limpar(banco, questaoId) {
    const dados = this.carregar();
    delete dados[this.chave(banco, questaoId)];
    this.cache = dados;
    this.salvar();
  }
};
