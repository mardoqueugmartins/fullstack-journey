# Semana 20 · Next.js full stack

> **Mês 5 · Produto seguro e no ar** · Dias 96–100 da trilha

**Por que importa:** Next.js virou o caminho mais curto para entregar um produto full stack sozinho.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 96 · App Router

O Next.js cria rotas a partir de pastas. Server Components renderizam no servidor (rápidos e bons para SEO) e Client Components cuidam da interação.

> 💡 **Analogia:** Server Component é o prato montado na cozinha. Client Component é o tempero que o cliente coloca na mesa.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=next.js%20app%20router%20do%20zero)

**Exercícios**

- [ ] Crie um app Next.js.
- [ ] Rotas e layouts.
- [ ] Rota dinâmica [id].
- [ ] Metadata para SEO.
- [ ] loading.tsx e error.tsx.
- [ ] Use 'use client' só onde precisa.

**Desafio:** Explique a diferença entre Server e Client Components em 3 frases.

### Dia 97 · Dados e cache

Busque dados direto no Server Component. Cache e revalidação controlam o quanto os dados estão frescos.

> 💡 **Analogia:** É o jornal: pode ser impresso uma vez por dia (estático) ou a cada notícia (dinâmico).

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=next.js%20data%20fetching%20cache%20revalidate)

**Exercícios**

- [ ] fetch dentro de um Server Component.
- [ ] Revalidação por tempo.
- [ ] revalidatePath depois de uma mudança.
- [ ] generateStaticParams.
- [ ] Prisma direto no servidor.
- [ ] Streaming com Suspense.

**Desafio:** Compare o tempo de resposta de uma página estática e de uma dinâmica.

### Dia 98 · Server Actions e Route Handlers

Server Actions executam código no servidor direto de um formulário. Route Handlers criam endpoints de API.

> 💡 **Analogia:** Server Action é o interfone direto com a cozinha, sem passar pelo garçom.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=next.js%20server%20actions)

**Exercícios**

- [ ] Formulário com Server Action.
- [ ] Validação com Zod.
- [ ] Erros com useActionState.
- [ ] Route Handler GET e POST.
- [ ] Handler de webhook.
- [ ] Proteja a action por usuário logado.

**Desafio:** Interface otimista com useOptimistic.

### Dia 99 · Autenticação no Next

Auth.js, Clerk ou Better Auth adicionam login social e sessões. O middleware protege rotas inteiras.

> 💡 **Analogia:** É a portaria do condomínio: confere quem entra antes de chegar ao apartamento.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=next.js%20autentica%C3%A7%C3%A3o%20authjs)

**Exercícios**

- [ ] Login com GitHub.
- [ ] Proteja rotas com middleware.
- [ ] Leia a sessão num Server Component.
- [ ] Botão de sair.
- [ ] Dados separados por usuário.
- [ ] Papéis de usuário.

**Desafio:** Compare essa autenticação com a que você fez à mão na semana 18.

---

## Dia 100 · Projeto: Mini SaaS de agendamento

**Problema:** Junte front e back num produto só: o profissional configura a agenda e o cliente agenda por um link.

**Requisitos**

- [ ] Next.js, Prisma e PostgreSQL
- [ ] Login do profissional
- [ ] Cadastro de serviços e horários
- [ ] Página pública de agendamento
- [ ] Painel com os próximos atendimentos

**Critérios de pronto**

- [ ] Publicado na Vercel
- [ ] Dados persistidos de verdade
- [ ] Arquitetura explicada no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 96

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 97

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 98

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 99

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 100

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
