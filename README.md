# 🏥 Sistema de Triagem de Pacientes - Front-End

<img width="1860" height="925" alt="image" src="https://github.com/user-attachments/assets/afa9aa8d-ad4e-4697-9f95-f588fa9cf030" />

> Sistema web responsivo para gerenciamento e triagem de pacientes em atendimento médico, desenvolvido em React + TypeScript com Vite.
> Deve consumir este [Back-End](https://github.com/carolinaarosendo/Fila-de-Atendimento/tree/feat/backend)

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Recursos Principais](#recursos-principais)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades Detalhadas](#funcionalidades-detalhadas)
- [Componentes Principais](#componentes-principais)
- [API Integration](#api-integration)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 👁️ Visão Geral

O **Sistema de Triagem de Pacientes** é uma aplicação web que facilita o gerenciamento de pacientes em filas de atendimento. O sistema classifica pacientes por nível de prioridade, monitora tempo de espera, permite visualização de detalhes e controla o fluxo de atendimento.

---

## ✨ Recursos Principais

### 📊 Dashboard Interativo
- Visualização de pacientes por categoria de prioridade
- Contadores em tempo real de pacientes por prioridade
- Filtros para visualizar pacientes por nível de urgência

### 👥 Gerenciamento de Pacientes
- **Cadastro de Novos Pacientes** com validação de campos obrigatórios
- **Visualização de Detalhes** em modal somente leitura
- **Atualização de Status** em tempo real
- **Remoção de Pacientes** da fila

### ⏱️ Monitoramento de Tempo de Espera
- Cálculo automático do tempo decorrido desde entrada
- Atualização a cada minuto
- Alerta visual quando tempo excede limite da prioridade
- Congelamento do tempo quando paciente entra em atendimento

### 🎯 Classificação de Prioridade
- **Emergência** (atendimento imediato, limite: 0 min)
- **Urgente** (limite: 10 minutos)
- **Pouco Urgente** (limite: 30 minutos)
- **Não Urgente** (limite: 120 minutos)

### 🔄 Fluxo de Atendimento
1. **Aguardando** → Paciente na fila
2. **Em Atendimento** → Paciente sendo atendido
3. **Finalizado** → Atendimento concluído

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 18+** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **CSS Modules** - Estilos encapsulados
- **Axios** - Cliente HTTP
- **React Icons** - Ícones

### Desenvolvimento
- **ESLint** - Linter de código
- **Package Manager** - npm

---

## 📦 Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Backend rodando em `http://localhost:3000` (ou URL configurada)

---

## 🚀 Instalação

### 1. Clone o repositório
```bash
git clone <URL-DO-REPOSITORIO>
cd SistemaTriagemFront-IESB
