# 💰 Sistema de Controle Financeiro Pessoal

Um sistema web completo para gerenciamento de finanças pessoais, focado em facilidade de uso e visualização clara dos dados. Este projeto permite que o usuário registre suas receitas e despesas, acompanhe o saldo atual e visualize o comportamento do seu dinheiro através de gráficos dinâmicos.

## 🚀 Funcionalidades

- **Dashboard Resumo:** Visualização rápida do Total de Receitas, Total de Despesas, Saldo Atual e Total Geral.
- **Gestão de Transações (CRUD):** - Criação de novas entradas e saídas categorizadas.
  - Edição de transações existentes.
  - Exclusão de transações.
- **Gráficos Interativos:** Utilização da biblioteca Chart.js para renderizar:
  - Gráfico de linha mostrando a evolução de receitas e despesas ao longo do tempo.
  - Gráfico de rosca detalhando as despesas por categoria.
- **Busca em Tempo Real:** Filtro de transações por descrição diretamente na tabela.
- **Persistência de Dados:** Os dados são salvos no `localStorage` do navegador, garantindo que as informações não sejam perdidas ao recarregar a página.
- **Exportação de Dados:** Funcionalidade para exportar as transações para um arquivo CSV.
- **Arquitetura Modular:** Código JavaScript organizado em módulos (ES6 Modules) para melhor manutenção e separação de responsabilidades.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização com Flexbox e design responsivo, uso de gradientes e UI moderna.
- **JavaScript (Vanilla):** Lógica de programação, manipulação do DOM e uso de ES6 Modules (`import`/`export`).
- **[Chart.js](https://www.chartjs.org/):** Renderização dos gráficos de evolução e categorias.
- **LocalStorage API:** Para armazenamento local dos dados no navegador do usuário.

## 📁 Estrutura do Projeto

O projeto foi construído pensando em escalabilidade, separando a lógica em diferentes módulos:
- `app.js`: Arquivos principais de inicialização.
- `getValores.js`, `getEvolucao.js`, `getDespesas.js`: Módulos responsáveis por calcular e renderizar o dashboard e os gráficos.
- `busca.js`, `editar.js`, `excluir.js`: Módulos responsáveis pela interatividade da tabela de transações.
- `carregarModal.js`, `carregarScriptBtn.js`: Lógica de abertura do formulário e inserção de novos dados.