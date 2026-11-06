# Semana 12 · React 3: estilo, dados do servidor e performance

> **Mês 3 · Front-end profissional** · Dias 56–60 da trilha

**Por que importa:** Empresas querem quem integra API com carregamento, erro e cache bem resolvidos.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 56 · Tailwind CSS

Tailwind estiliza com classes utilitárias direto no JSX. Acelera e padroniza o visual do time.

> 💡 **Analogia:** É um kit de carimbos: em vez de desenhar cada letra, você carimba padrões prontos.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=tailwind%20css%20tutorial%20portugu%C3%AAs)

**Exercícios**

- [ ] Instale Tailwind num projeto Vite.
- [ ] Refaça um card com Tailwind.
- [ ] Responsividade com sm, md e lg.
- [ ] Modo escuro.
- [ ] Extraia um componente em vez de repetir classes.
- [ ] Configure cores próprias no tema.

**Desafio:** Recrie uma tela do seu app favorito.

### Dia 57 · TanStack Query

TanStack Query gerencia dados do servidor: cache, recarregamento, carregando e erro. Separe o estado do servidor do estado da tela.

> 💡 **Analogia:** É um assistente que busca a informação, guarda uma cópia e avisa quando ela ficou velha.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=tanstack%20react%20query%20tutorial)

**Exercícios**

- [ ] Liste dados com useQuery.
- [ ] Use o filtro dentro da queryKey.
- [ ] Crie dados com useMutation.
- [ ] Invalide o cache após criar.
- [ ] Atualização otimista.
- [ ] Abra o devtools e explique o que vê.

**Desafio:** Implemente paginação infinita.

### Dia 58 · Onde guardar cada estado

Nem todo estado é global. Ordem: local, depois levantar estado, depois Context, depois uma store como Zustand. Filtros podem morar na URL.

> 💡 **Analogia:** Guarde as coisas perto de onde usa: escova no banheiro, não no sótão.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=zustand%20react%20estado%20global)

**Exercícios**

- [ ] Classifique os estados de um app em local, servidor, global e URL.
- [ ] Levante estado entre dois componentes irmãos.
- [ ] Carrinho com Zustand.
- [ ] Persista a store.
- [ ] Guarde filtros nos search params da URL.
- [ ] Use seletores para evitar renderizações a mais.

**Desafio:** Escreva um registro de decisão (ADR) curto explicando sua escolha de estado.

### Dia 59 · Performance

Meça antes de otimizar: React DevTools Profiler, memo, lazy loading e divisão de código.

> 💡 **Analogia:** Não troque o motor se o problema é o pneu furado: meça primeiro.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20performance%20memo%20lazy)

**Exercícios**

- [ ] Rode o Profiler numa lista grande.
- [ ] Use React.memo onde faz diferença medida.
- [ ] useMemo num cálculo caro.
- [ ] Carregue uma rota com lazy.
- [ ] Virtualize uma lista de 10 mil itens.
- [ ] Analise o tamanho do bundle.

**Desafio:** Reduza em 30% um tempo de renderização medido.

---

## Dia 60 · Projeto: Dashboard financeiro

**Problema:** O usuário quer entender os gastos do mês num olhar. Este pode ser o front do seu CashWise.

**Requisitos**

- [ ] React, TypeScript, Tailwind e TanStack Query
- [ ] API simulada com json-server ou MSW
- [ ] Gráfico com Recharts
- [ ] Filtros de mês e categoria guardados na URL
- [ ] Estados de carregando, erro e vazio

**Critérios de pronto**

- [ ] Publicado com link público
- [ ] Funciona bem no celular
- [ ] README com print e organização das pastas

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 56

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 57

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 58

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 59

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 60

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
