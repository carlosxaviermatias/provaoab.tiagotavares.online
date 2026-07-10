const Timer = {
  STORAGE_KEY: 'oab_estudos_tempo',
  disciplinaAtiva: null,
  estado: { total: 0, porDisciplina: {} },

  carregar() {
    try {
      const dados = localStorage.getItem(this.STORAGE_KEY);
      return dados ? JSON.parse(dados) : { total: 0, porDisciplina: {} };
    } catch {
      return { total: 0, porDisciplina: {} };
    }
  },

  salvar() {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.estado));
  },

  iniciar() {
    this.estado = this.carregar();
    this.atualizarDisplay();
    setInterval(() => this.tick(), 1000);
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.salvar();
    });
    window.addEventListener('beforeunload', () => this.salvar());
  },

  tick() {
    if (document.hidden) return;
    this.estado.total++;
    if (this.disciplinaAtiva) {
      this.estado.porDisciplina[this.disciplinaAtiva] =
        (this.estado.porDisciplina[this.disciplinaAtiva] || 0) + 1;
    }
    this.atualizarDisplay();
    if (this.estado.total % 10 === 0) this.salvar();
  },

  setDisciplinaAtiva(nome) {
    this.disciplinaAtiva = nome || null;
  },

  formatar(segundos) {
    const h = Math.floor(segundos / 3600);
    const m = Math.floor((segundos % 3600) / 60);
    const s = segundos % 60;
    return [h, m, s].map(v => String(v).padStart(2, '0')).join(':');
  },

  formatarCurto(segundos) {
    if (segundos < 60) return `${segundos}s`;
    const m = Math.floor(segundos / 60);
    if (m < 60) return `${m}min`;
    const h = Math.floor(m / 60);
    const mm = m % 60;
    return `${h}h${String(mm).padStart(2, '0')}`;
  },

  atualizarDisplay() {
    const el = document.getElementById('cronometro');
    if (el) el.textContent = this.formatar(this.estado.total);
  },

  getTempoDisciplina(nome) {
    return this.estado.porDisciplina[nome] || 0;
  }
};
