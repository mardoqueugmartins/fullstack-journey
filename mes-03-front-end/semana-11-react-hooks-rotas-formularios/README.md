# Semana 11 · React 2: efeitos, hooks, rotas e formulários

> **Mês 3 · Front-end profissional** · Dias 51–55 da trilha

**Por que importa:** Hooks, rotas e formulários são o dia a dia de um dev júnior de front.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 51 · useEffect

useEffect sincroniza o componente com algo externo (API, timer, evento do navegador). As dependências dizem quando rodar, e o cleanup desfaz.

> 💡 **Analogia:** É ligar o ventilador quando entra no quarto e desligar ao sair: o desligar é o cleanup.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20useeffect%20explicado)

**Exercícios**

- [ ] Busque dados quando o componente aparece.
- [ ] Busque de novo quando o filtro mudar.
- [ ] Limpe um setInterval no cleanup.
- [ ] Ouça o resize da janela e remova o ouvinte.
- [ ] Provoque e corrija um loop infinito.
- [ ] Evite condição de corrida com AbortController.

**Desafio:** Leia 'You Might Not Need an Effect' na documentação do React e liste 3 casos.

### Dia 52 · Hooks customizados

Hooks customizados extraem lógica reutilizável, como useFetch e useLocalStorage.

> 💡 **Analogia:** É tempero pronto: você combinou os ingredientes uma vez e usa em várias receitas.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20custom%20hooks)

**Exercícios**

- [ ] useLocalStorage.
- [ ] useDebounce.
- [ ] useFetch com carregando e erro.
- [ ] useToggle.
- [ ] useMediaQuery.
- [ ] Quebre uma regra dos hooks de propósito e leia o erro.

**Desafio:** Crie um useForm simples com validação.

### Dia 53 · Rotas e Context

React Router cria páginas sem recarregar. Context compartilha dados globais (usuário, tema) sem passar props por todos os níveis.

> 💡 **Analogia:** Context é o Wi-Fi da casa: todos os cômodos acessam sem puxar cabo de um cômodo para o outro.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20router%20context%20api)

**Exercícios**

- [ ] Rotas home, sobre e detalhe/:id.
- [ ] Leia o parâmetro com useParams.
- [ ] Página 404.
- [ ] Rota protegida.
- [ ] ThemeContext.
- [ ] AuthContext simulado.

**Desafio:** Layout com menu que destaca a rota ativa e rotas aninhadas.

### Dia 54 · Formulários robustos

React Hook Form com Zod reduz código e valida bem. Mensagens claras e acessíveis fazem diferença.

> 💡 **Analogia:** É o formulário do banco com os campos já marcados: você preenche e ele avisa na hora o que falta.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20hook%20form%20zod)

**Exercícios**

- [ ] Login com React Hook Form e Zod.
- [ ] Mensagens de erro acessíveis.
- [ ] Máscara de telefone.
- [ ] Campos dinâmicos (adicionar vários telefones).
- [ ] Envio assíncrono com estado de carregando.
- [ ] Reset do formulário após enviar.

**Desafio:** Formulário em 3 etapas que mantém os dados entre elas.

---

## Dia 55 · Projeto: Agendamento online

**Problema:** Profissionais perdem tempo confirmando horários por mensagem. Crie o front de um sistema de agendamento.

**Requisitos**

- [ ] Rotas: serviços, horários e confirmação
- [ ] Fluxo: serviço, depois dia, depois horário
- [ ] Horários ocupados bloqueados (dados simulados)
- [ ] Formulário validado com Zod
- [ ] Context guardando o agendamento em andamento

**Critérios de pronto**

- [ ] Publicado com link público
- [ ] Fluxo completo em menos de 60 segundos
- [ ] Fluxograma no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 51

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 52

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 53

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 54

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 55

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
