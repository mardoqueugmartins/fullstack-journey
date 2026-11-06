# Semana 17 · Prisma e arquitetura em camadas

> **Mês 4 · Back-end e banco de dados** · Dias 81–85 da trilha · 🏆 Chefe do mês

**Por que importa:** ORMs aceleram o back-end e aparecem em quase toda stack Node moderna. Este é o chefe do mês 4.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 81 · Prisma e schema

ORM liga tabelas a objetos no código. O Prisma gera um cliente tipado a partir do schema.

> 💡 **Analogia:** ORM é um tradutor: você fala TypeScript e ele fala SQL com o banco.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=prisma%20orm%20tutorial)

**Exercícios**

- [ ] Instale o Prisma.
- [ ] Escreva um schema com 3 models.
- [ ] Rode prisma migrate dev.
- [ ] Abra o Prisma Studio.
- [ ] Crie um script de seed.
- [ ] Configure DATABASE_URL no .env.

**Desafio:** Ative o log de queries e compare o SQL gerado com o que você escreveria.

### Dia 82 · CRUD e relacionamentos

O Prisma faz criar, ler, atualizar e apagar, e trata relações com include e connect, tudo tipado.

> 💡 **Analogia:** include é pedir o combo: o lanche vem com batata e bebida na mesma bandeja.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=prisma%20rela%C3%A7%C3%B5es%20include)

**Exercícios**

- [ ] CRUD de clientes.
- [ ] Relação 1:N com include.
- [ ] Relação N:N.
- [ ] Filtros com AND e OR.
- [ ] Paginação com skip e take e com cursor.
- [ ] Use select para trazer só o necessário.

**Desafio:** Encontre e corrija um N+1 numa listagem.

### Dia 83 · Migrations e transações

Migrations versionam a estrutura do banco como o Git versiona o código. $transaction agrupa operações.

> 💡 **Analogia:** Migration é a reforma registrada na prefeitura: todo mundo sabe o que mudou e em que ordem.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=prisma%20migrations%20transaction)

**Exercícios**

- [ ] Adicione uma coluna com migration.
- [ ] Renomeie um campo sem perder dados.
- [ ] Use $transaction numa operação dupla.
- [ ] Implemente exclusão lógica (soft delete).
- [ ] Declare um índice no schema.
- [ ] Resete o banco de desenvolvimento.

**Desafio:** Desfaça manualmente uma migration problemática.

### Dia 84 · Arquitetura em camadas

Separar controller (HTTP), service (regras) e repository (dados) facilita testar e trocar peças.

> 💡 **Analogia:** Restaurante: o garçom não cozinha, o cozinheiro não vai ao estoque, o estoquista cuida dos ingredientes.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=arquitetura%20em%20camadas%20node%20controller%20service%20repository)

**Exercícios**

- [ ] Refatore uma rota em 3 camadas.
- [ ] Injete o repository no service.
- [ ] Crie uma interface de repository.
- [ ] Crie um repository em memória para testes.
- [ ] Crie DTOs de entrada e saída.
- [ ] Converta erros do Prisma (P2002) em erros de domínio.

**Desafio:** Desenhe a arquitetura em Mermaid.

---

## Dia 85 · Projeto: CashWise API

**Problema:** Finanças pessoais exigem dados corretos e relatórios confiáveis. Construa a API do CashWise.

**Requisitos**

- [ ] PostgreSQL com Prisma
- [ ] Contas, categorias e transações
- [ ] Relatório mensal por categoria
- [ ] Transferência entre contas dentro de uma transação
- [ ] Arquitetura em camadas

**Critérios de pronto**

- [ ] Migrations versionadas e seed
- [ ] README com endpoints
- [ ] Banco publicado no Neon ou Supabase

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 81

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 82

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 83

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 84

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 85

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
