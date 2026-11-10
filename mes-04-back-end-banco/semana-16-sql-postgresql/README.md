# Semana 16 · SQL e PostgreSQL

> **Mês 4 · Back-end e banco de dados** · Dias 76–80 da trilha

**Por que importa:** Quase toda vaga júnior pede SQL básico: SELECT, JOIN, INSERT.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 76 · Modelagem de dados

Modelar é decidir tabelas, colunas e relações (1:1, 1:N, N:N) antes de codar. Chaves primárias e estrangeiras ligam tudo.

> 💡 **Analogia:** Tabelas são planilhas que se conhecem: a de pedidos aponta para a de clientes pelo id.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=modelagem%20de%20banco%20de%20dados%20relacional)

**Exercícios**

- [ ] Modele um escritório: clientes, processos e prazos.
- [ ] Desenhe o diagrama no dbdiagram.io.
- [ ] Normalize uma tabela com dados repetidos.
- [ ] Crie uma relação N:N com tabela de junção.
- [ ] Escolha o tipo certo de cada coluna.
- [ ] Adicione NOT NULL, UNIQUE e CHECK.

**Desafio:** Modele o sistema de reservas da semana 9.

### Dia 77 · SQL essencial

SELECT busca, WHERE filtra, ORDER BY ordena, INSERT, UPDATE e DELETE alteram dados.

> 💡 **Analogia:** SQL é fazer um pedido preciso no balcão: 'os nomes dos clientes de Maceió, em ordem alfabética'.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=sql%20para%20iniciantes%20postgresql)

**Exercícios**

- [ ] Suba um Postgres (Docker ou Neon).
- [ ] Crie as tabelas do modelo de ontem.
- [ ] Insira 20 registros.
- [ ] Escreva 5 SELECT com WHERE.
- [ ] Faça um UPDATE sempre com WHERE.
- [ ] Busque texto com ILIKE.

**Desafio:** Resolva as lições do SQLBolt.

### Dia 78 · JOINs e agregações

JOIN junta tabelas relacionadas. GROUP BY com COUNT, SUM e AVG resume dados.

> 💡 **Analogia:** JOIN é juntar duas listas de chamada pelo número do aluno.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=sql%20join%20group%20by%20explicado)

**Exercícios**

- [ ] INNER JOIN de pedidos com clientes.
- [ ] LEFT JOIN para achar clientes sem pedidos.
- [ ] Total por cliente com GROUP BY.
- [ ] Filtre grupos com HAVING.
- [ ] Use uma subquery.
- [ ] Top 3 clientes por faturamento.

**Desafio:** Relatório de faturamento mensal em uma única query.

### Dia 79 · Índices e transações

Índices aceleram buscas. Transações garantem que várias operações acontecem juntas ou nenhuma. EXPLAIN mostra o plano da consulta.

> 💡 **Analogia:** Índice é o índice remissivo do livro. Transação é a transferência bancária: sai de uma conta e entra na outra, ou nada acontece.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=sql%20%C3%ADndices%20transa%C3%A7%C3%B5es%20explain)

**Exercícios**

- [ ] EXPLAIN ANALYZE antes e depois de criar um índice.
- [ ] Crie um índice composto.
- [ ] Use BEGIN, COMMIT e ROLLBACK.
- [ ] Simule uma transferência entre contas.
- [ ] Impeça saldo negativo com constraint.
- [ ] Explique o problema N+1.

**Desafio:** Explique ACID com um exemplo real.

---

## Dia 80 · Projeto: Banco de um escritório

**Problema:** Escritórios precisam de relatórios que planilha não entrega. Crie o banco e as consultas de negócio.

**Requisitos**

- [ ] Schema com 6 ou mais tabelas
- [ ] Seed com dados realistas
- [ ] 20 consultas de negócio (prazos da semana, clientes sem contato há 30 dias, faturamento por área)
- [ ] Índices com justificativa

**Critérios de pronto**

- [ ] schema.sql e queries.sql comentados
- [ ] Diagrama ER no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 76

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 77

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 78

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 79

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 80

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
