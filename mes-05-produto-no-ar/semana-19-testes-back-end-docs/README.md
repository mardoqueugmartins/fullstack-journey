# Semana 19 · Testes no back-end e documentação

> **Mês 5 · Produto seguro e no ar** · Dias 91–95 da trilha

**Por que importa:** API testada e documentada mostra que você sabe trabalhar em equipe.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 91 · Testes unitários de serviço

Teste as regras do service com um repositório falso, sem banco de dados.

> 💡 **Analogia:** É testar a receita na cozinha de casa antes de abrir o restaurante.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=testes%20unit%C3%A1rios%20node%20vitest)

**Exercícios**

- [ ] Teste a regra de conflito de horário.
- [ ] Teste o erro de saldo insuficiente.
- [ ] Simule o repository.
- [ ] Cubra os casos de borda.
- [ ] Use it.each para casos parecidos.
- [ ] Dê nomes de teste que expliquem a regra.

**Desafio:** Apague uma regra do código e confira qual teste falha.

### Dia 92 · Testes de integração

Testam a API inteira com um banco de teste real (Docker) e requisições HTTP com supertest.

> 💡 **Analogia:** É testar o carro inteiro numa pista fechada, não peça por peça.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=testes%20de%20integra%C3%A7%C3%A3o%20api%20supertest)

**Exercícios**

- [ ] Suba um banco de teste no Docker.
- [ ] Limpe o banco entre os testes.
- [ ] Teste um POST que devolve 201.
- [ ] Teste um 400 de validação.
- [ ] Teste 401 e 403.
- [ ] Crie factories de dados.

**Desafio:** Rode os testes de integração no CI com um serviço Postgres.

### Dia 93 · Documentação OpenAPI

OpenAPI (Swagger) descreve endpoints, entradas e respostas, e gera uma página interativa.

> 💡 **Analogia:** É o manual do eletrodoméstico: ninguém quer adivinhar qual botão faz o quê.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=swagger%20openapi%20node)

**Exercícios**

- [ ] Página do Swagger na rota /docs.
- [ ] Documente 5 endpoints.
- [ ] Exemplos de requisição e resposta.
- [ ] Autenticação dentro do Swagger.
- [ ] Gere a doc a partir dos schemas Zod.
- [ ] README explicando como rodar.

**Desafio:** Peça para alguém usar sua API só lendo a documentação.

### Dia 94 · Logs e observabilidade

Logs estruturados em JSON, métricas e rastreio de erros (Sentry) mostram o que acontece quando ninguém está olhando.

> 💡 **Analogia:** É a caixa-preta do avião: quando algo dá errado, você sabe o que aconteceu.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=logs%20estruturados%20pino%20node%20sentry)

**Exercícios**

- [ ] Configure o logger Pino.
- [ ] Use níveis de log corretamente.
- [ ] Inclua o request-id nos logs.
- [ ] Crie a rota /health.
- [ ] Conecte o Sentry (plano grátis).
- [ ] Receba um alerta de erro 500.

**Desafio:** Provoque um erro e rastreie do log até a linha do código.

---

## Dia 95 · Projeto: API pronta para equipe

**Problema:** Deixe o CashWise ou a API de agendamentos no nível que um time esperaria receber.

**Requisitos**

- [ ] 25 ou mais testes entre unitários e integração
- [ ] Swagger em /docs
- [ ] Logs estruturados e /health
- [ ] CI rodando testes com Postgres

**Critérios de pronto**

- [ ] CI verde
- [ ] Documentação acessível
- [ ] Selo de cobertura no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 91

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 92

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 93

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 94

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 95

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
