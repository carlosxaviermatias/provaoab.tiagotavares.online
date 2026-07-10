const Comentarios = {
  STORAGE_KEY: 'oab_estudos_comentarios',

  carregar() {
    try {
      const dados = localStorage.getItem(this.STORAGE_KEY);
      return dados ? JSON.parse(dados) : {};
    } catch {
      return {};
    }
  },

  salvar(comentarios) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(comentarios));
  },

  get(questaoId) {
    const todos = this.carregar();
    return todos[questaoId] || '';
  },

  set(questaoId, texto) {
    const todos = this.carregar();
    if (texto.trim()) {
      todos[questaoId] = texto.trim();
    } else {
      delete todos[questaoId];
    }
    this.salvar(todos);
  },

  listarTodos() {
    return this.carregar();
  }
};
