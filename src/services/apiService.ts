import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Tipamos o parâmetro 'dados' como 'any' ou criamos um objeto genérico para passar no post
export const pacienteService = {
  listar() {
    return api.get('/pacientes');
  },

  criar(dados: any) { // Adicionada a tipagem ': any' aqui para o TS não reclamar
    return api.post('/pacientes', dados);
  },

  atualizarStatus(id: string | number, status: string) {
    return api.patch(`/pacientes/${id}/status`, { status });
  },

  remover(id: string | number) {
    return api.delete(`/pacientes/${id}`);
  }
};

export default api;