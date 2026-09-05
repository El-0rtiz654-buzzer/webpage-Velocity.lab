# Plano de Implementação: Landing Page Loja de Bicicletas Online - VELOCITY.LAB

## 1. Visão Geral (Overview)
Criação da Landing Page moderna, imersiva e de alta performance para a **Loja de Bicicletas Online - VELOCITY.LAB (Home & Showroom)**.
O projeto será desenvolvido utilizando **ReactJS** com **Vite (JavaScript)** e **CSS puro (Vanilla CSS)** com design tokens bem definidos, seguindo rigorosamente a identidade visual escura, arrojada e de alta precisão do design system Apex Velocity / VELOCITY.LAB.

- **Tipo de Projeto:** WEB (Landing Page + Showroom Interativo)
- **Framework/Build:** Vite + React (JavaScript)
- **Estilização:** CSS Puro (Custom Properties, BEM modular, Glassmorphism, Zero Framework CSS externo)
- **Design Inspiration:** `VELOCITY.LAB - Home & Showroom` (Dark Theme, Racing Red `#E31B23`, Montserrat + Inter, Grid responsivo de 12 colunas)

---

## 2. Critérios de Sucesso (Success Criteria)
- [x] Projeto React + Vite criado em JavaScript na raiz de forma limpa.
- [x] Design System em CSS puro implementado via variáveis (`:root`) com cores, tipografia, espaçamentos e elevações.
- [x] Navbar fixa com efeito blur/glassmorphism, logo VELOCITY.LAB e navegação suave.
- [x] Hero Section cinematográfica com tipografia de impacto, call-to-actions duplos e speed lines.
- [x] Barra de Filtros Rápida ("Power Bar") funcional para filtrar categorias (Aero Road, Gravel, E-Bike, MTB).
- [x] Showroom Interativo com catálogo de bicicletas de alta gama, exibindo specs técnicas detalhadas (peso, grupo, autonomia), troca de cores em tempo real e drawer/modal de detalhes rápidos.
- [x] Página dedicada de Engenharia & Especificações Técnicas (Bento Grid de mídia, métricas KPI, tabela completa de montagem mecânica, seletor de modelos e resumo de pedido).
- [x] Montador Custom Studio (Estúdio interativo de montagem personalizada passo a passo com cálculo dinâmico de peso, aerodinâmica, acabamento, transmissão, rodas, cockpit e gravação a laser no chassi).
- [x] Seção & Vitrine de Componentes & Acessórios de Alta Precisão (Cockpits aerodinâmicos T1100G, rodas com rolamentos cerâmicos CeramicSpeed, medidores de potência, capacetes de túnel de vento, torquímetros de paddock e lubrificantes de grafeno).
- [x] Seção "Engineering Lab" detalhando inovações em carbono e aerodinâmica com cards interativos.
- [x] Mini-carrinho/checkout demonstrativo interativo com badge de contagem de itens.
- [x] Design 100% responsivo (Desktop, Tablet e Mobile).
- [x] Performance veloz sem dependências pesadas, respeitando acessibilidade e sem bugs de console.

---

## 3. Stack Tecnológica (Tech Stack)
| Camada | Escolha | Justificativa |
|---|---|---|
| **Ambiente & Build** | Vite + React (JS) | Inicialização ultrarrápida, HMR instantâneo, compatível com o pedido do usuário |
| **Linguagem** | JavaScript (ESModules) | Especificado pelo usuário |
| **Estilos** | CSS Puro (Vanilla CSS) | Especificado pelo usuário; permite controle fino de animações, glassmorphism e micro-interações |
| **Ícones** | SVG embutido / Material Symbols | Leveza absoluta sem sobrecarga de bibliotecas de terceiros |
| **Imagens** | Assets otimizados e CDN de alta resolução | Imagens de estúdio de bicicletas esportivas de ponta |

---

## 4. Estrutura de Arquivos Planejada (File Structure)
```
velocity.lab/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── styles/
│   │   ├── tokens.css       # Variáveis de cor, tipografia, sombras e espaçamentos
│   │   ├── reset.css        # Reset moderno e base typography
│   │   ├── navbar.css       # Estilos da barra de navegação
│   │   ├── hero.css         # Estilos da hero section e speed lines
│   │   ├── filterbar.css    # Barra de busca e filtros rápidos
│   │   ├── showroom.css     # Grid de produtos e cards de bicicleta
│   │   ├── engineering.css  # Seção de tecnologia e inovações
│   │   ├── modal.css        # Quick View modal e drawer de carrinho
│   │   └── footer.css       # Rodapé institucional
│   ├── data/
│   │   └── bikes.js         # Dados estruturados das bicicletas (specs, fotos, cores, preços)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── FilterBar.jsx
│       ├── Showroom.jsx
│       ├── BikeCard.jsx
│       ├── EngineeringLab.jsx
│       ├── QuickViewModal.jsx
│       ├── CartDrawer.jsx
│       └── Footer.jsx
```

---

## 5. Divisão de Tarefas (Task Breakdown)

### Tarefa 1: Inicialização do Projeto
- **Agente:** `project-planner` / `orchestrator`
- **Ação:** Executar `npm create vite@latest . -- --template react` (ou configuração equivalente sem sobrescrever configs existentes) e instalar dependências básicas.
- **INPUT:** Diretório do workspace.
- **OUTPUT:** Estrutura funcional Vite React JS.
- **VERIFY:** `package.json` com dependências `react` e `vite`.

### Tarefa 2: Definição do Design System em CSS Puro
- **Agente:** `frontend-specialist`
- **Ação:** Criar `tokens.css` com as cores do VELOCITY.LAB (`#131313`, `#E31B23`, `#2A2A2A`, `#FFFFFF`), fontes Montserrat e Inter, variáveis de grid e animações.
- **INPUT:** Layout Apex Velocity / VELOCITY.LAB.
- **OUTPUT:** `src/styles/tokens.css` e `reset.css`.
- **VERIFY:** Importação no `main.jsx` e renderização de variáveis no root.

### Tarefa 3: Dados Estruturados de Produtos (`bikes.js`)
- **Agente:** `frontend-specialist`
- **Ação:** Criar catálogo de bicicletas de ponta com fotos reais em estúdio, especificações de engenharia (Quadro Carbono T1100, Câmbio Shimano Dura-Ace Di2, Peso 6.8kg, Freios Hidráulicos) e opções de cores.
- **INPUT:** Requisitos de loja de bicicletas.
- **OUTPUT:** `src/data/bikes.js`.
- **VERIFY:** Array de dados exportável com ao menos 6 a 8 modelos exclusivos.

### Tarefa 4: Construção da Navbar & Hero Section
- **Agente:** `frontend-specialist`
- **Ação:** Desenvolver Header fixo com badge de carrinho e Hero Section com tipografia imponente, speed line vermelho e CTAs interativos.
- **INPUT:** Tokens CSS e design do layout.
- **OUTPUT:** `Navbar.jsx`, `Hero.jsx` e seus respectivos CSS.
- **VERIFY:** Exibição com visual dark mode cinematográfico e botões de ação rápida.

### Tarefa 5: Barra de Filtros ("Power Bar") e Grid do Showroom
- **Agente:** `frontend-specialist`
- **Ação:** Implementar filtro por categoria (Road, Gravel, E-Bike, MTB) e cards de bicicleta com seletor de cor interativo, badge de specs e botão "Detalhes / Comprar".
- **INPUT:** `bikes.js` e filtros de estado no React.
- **OUTPUT:** `FilterBar.jsx`, `Showroom.jsx`, `BikeCard.jsx`.
- **VERIFY:** Filtros funcionando dinamicamente em tempo real ao clicar nas categorias.

### Tarefa 6: Modal Quick-View & Mini-Carrinho (Cart Drawer)
- **Agente:** `frontend-specialist`
- **Ação:** Modal com visualização técnica detalhada e Drawer lateral de carrinho para adição/remoção de itens com feedback visual.
- **INPUT:** Estado global/local de carrinho e produto selecionado.
- **OUTPUT:** `QuickViewModal.jsx`, `CartDrawer.jsx`.
- **VERIFY:** Abertura, fechamento e atualização de contadores de itens sem erros.

### Tarefa 7: Seção Innovation Lab & Footer
- **Agente:** `frontend-specialist`
- **Ação:** Seção destacando túnel de vento, aerodinâmica integrada e garantia vitalícia de quadro, seguido por rodapé com links completos.
- **INPUT:** Identidade da marca.
- **OUTPUT:** `EngineeringLab.jsx`, `Footer.jsx`.
- **VERIFY:** Layout polido e responsivo de ponta a ponta.

---

## 6. Verificação Final (Phase X)
- [ ] Build de produção: `npm run build` executado sem alertas nem erros.
- [ ] Design System em CSS Puro: sem uso de Tailwind ou frameworks externos de CSS.
- [ ] Fidelidade visual: paleta escura com destaques em vermelho de alta velocidade e tipografia Montserrat + Inter.
- [ ] Teste de responsividade: navegação e grid testados para mobile e desktop.
