# Semana 15 · APIs REST com Node e TypeScript

> **Mês 4 · Back-end e banco de dados** · Dias 71–75 da trilha

**Por que importa:** Construir e documentar APIs é a base do back-end júnior.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 71 · Framework e rotas

Um framework (Express ou Fastify) organiza rotas, middlewares e respostas, e você foca na regra de negócio.

> 💡 **Analogia:** Rotas são o cardápio da API: cada item tem nome, preço e o que vem no prato.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=api%20rest%20node%20express%20typescript)

**Exercícios**

- [ ] Configure Fastify ou Express com TypeScript.
- [ ] CRUD de tarefas em memória.
- [ ] Use params e query.
- [ ] Responda 201, 204 e 404 nos lugares certos.
- [ ] Organize as pastas do projeto.
- [ ] Teste tudo no Insomnia ou Bruno.

**Desafio:** Versione a API com o prefixo /v1.

### Dia 72 · Middlewares e erros

Middleware é uma etapa no caminho da requisição (log, autenticação, validação). Um tratador de erros central dá respostas consistentes.

> 💡 **Analogia:** É a fila do aeroporto: raio-x, passaporte, embarque. Cada etapa pode barrar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=middleware%20express%20tratamento%20de%20erros)

**Exercícios**

- [ ] Middleware de log.
- [ ] Meça o tempo de cada resposta.
- [ ] Tratador de erros global.
- [ ] Classe AppError.
- [ ] Tratador de rota não encontrada.
- [ ] Formato padrão de erro: message e code.

**Desafio:** Adicione um request-id a todos os logs.

### Dia 73 · Validação com Zod

Nunca confie no que chega do cliente. Valide body, params e query com schemas e responda 400 com detalhes.

> 💡 **Analogia:** É a balança da companhia aérea: mala fora do padrão não embarca.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=zod%20valida%C3%A7%C3%A3o%20api%20node)

**Exercícios**

- [ ] Schema de criação.
- [ ] Schema de atualização parcial.
- [ ] Valide o id nos params.
- [ ] Converta query numérica com coerce.
- [ ] Mensagens de erro em português.
- [ ] Middleware genérico validate(schema).

**Desafio:** Gere os tipos a partir do schema e use no service.

### Dia 74 · Boas práticas REST

Paginação, filtros, ordenação, nomes no plural, status corretos e idempotência fazem uma API agradável de usar.

> 💡 **Analogia:** Boa API é placa de aeroporto: quem chega pela primeira vez entende sem perguntar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=boas%20pr%C3%A1ticas%20api%20rest)

**Exercícios**

- [ ] Paginação com limit, offset e total.
- [ ] Filtro por status.
- [ ] Ordenação por campo.
- [ ] Use PATCH e PUT corretamente.
- [ ] Rate limit simples.
- [ ] Configure CORS só para o seu front.

**Desafio:** Compare paginação por offset e por cursor e implemente a de cursor.

---

## Dia 75 · Projeto: API de agendamentos

**Problema:** O front da semana 11 precisa de um back-end de verdade.

**Requisitos**

- [ ] Rotas de serviços, horários e agendamentos
- [ ] Regra que impede conflito de horário
- [ ] Zod em todas as entradas
- [ ] Erros padronizados
- [ ] Paginação nas listagens

**Critérios de pronto**

- [ ] Coleção do Insomnia ou Bruno no repositório
- [ ] README com tabela de endpoints
- [ ] Front da semana 11 ligado à API

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 71

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 72

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 73

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 74

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 75

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
