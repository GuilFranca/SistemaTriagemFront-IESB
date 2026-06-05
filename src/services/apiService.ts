import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const pacienteService = {
  listar() {
    return api.get('/pacientes');
  },

  criar(dados: any) {
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