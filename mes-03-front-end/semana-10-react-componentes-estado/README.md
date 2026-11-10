# Semana 10 · React 1: componentes, props e estado

> **Mês 3 · Front-end profissional** · Dias 46–50 da trilha

**Por que importa:** React segue como a biblioteca de front mais pedida nas vagas júnior.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 46 · Componentes e JSX

React monta a interface com componentes: funções que devolvem JSX, um HTML escrito dentro do JavaScript.

> 💡 **Analogia:** Componentes são peças de LEGO: você monta peças pequenas e combina numa estrutura grande.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20do%20zero%20componentes%20jsx)

**Exercícios**

- [ ] Crie um projeto com Vite, React e TypeScript.
- [ ] Crie um componente Header.
- [ ] Reutilize um componente Card 3 vezes.
- [ ] Use Fragment para agrupar sem div extra.
- [ ] Faça renderização condicional.
- [ ] Estilize com CSS Modules.

**Desafio:** Quebre a landing page da semana 2 em 6 componentes.

### Dia 47 · Props e composição

Props são os dados que o pai passa para o filho. children permite componentes que embrulham outros.

> 💡 **Analogia:** Props são o pedido que o garçom passa à cozinha: o cozinheiro usa, mas não muda o pedido.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20props%20children)

**Exercícios**

- [ ] Card com props tipadas.
- [ ] Button com variantes (primário, secundário).
- [ ] Layout que recebe children.
- [ ] Prop do tipo função (onClick).
- [ ] Valores padrão para props.
- [ ] Lista de produtos recebida por props.

**Desafio:** Crie um Modal reutilizável usando children.

### Dia 48 · Estado e eventos

Estado é a memória do componente. Quando você muda o estado com o setter, o React redesenha a tela.

> 💡 **Analogia:** Estado é o placar do jogo: mudou o placar, o telão atualiza sozinho.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20usestate%20eventos)

**Exercícios**

- [ ] Contador.
- [ ] Botão que alterna tema.
- [ ] Input controlado.
- [ ] Lista com adicionar e remover.
- [ ] Atualize um objeto no estado sem mutar.
- [ ] Calcule um valor derivado em vez de duplicar estado.

**Desafio:** Explique por que chamar setCount(count + 1) duas vezes soma só 1, e resolva com a forma de função.

### Dia 49 · Listas, keys e formulários

map gera listas e key ajuda o React a saber qual item mudou. Formulários controlados ligam os inputs ao estado.

> 💡 **Analogia:** key é o número de chamada da turma: se dois alunos trocam de lugar, o professor ainda sabe quem é quem.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20listas%20keys%20formul%C3%A1rios)

**Exercícios**

- [ ] Lista com keys estáveis.
- [ ] Filtro de lista com campo de busca.
- [ ] Formulário de cadastro com validação.
- [ ] Checkbox e select controlados.
- [ ] Edição de item direto na lista.
- [ ] Ordenação ao clicar no cabeçalho da coluna.

**Desafio:** Mostre o bug que acontece ao usar o índice como key numa lista reordenável.

---

## Dia 50 · Projeto: Cardápio digital com carrinho

**Problema:** Restaurantes pequenos pagam caro por apps de cardápio. Crie um cardápio que envia o pedido pronto pelo WhatsApp.

**Requisitos**

- [ ] Categorias e busca
- [ ] Carrinho com quantidade e observação por item
- [ ] Total atualizado em tempo real
- [ ] Botão que monta o pedido e abre o link wa.me
- [ ] Carrinho salvo entre visitas

**Critérios de pronto**

- [ ] Publicado na Vercel
- [ ] Pensado primeiro para o celular
- [ ] Componentes tipados
- [ ] Lighthouse 90+

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 46

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 47

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 48

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 49

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 50

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
