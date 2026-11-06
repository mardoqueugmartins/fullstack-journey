# Semana 18 · Autenticação e segurança

> **Mês 5 · Produto seguro e no ar** · Dias 86–90 da trilha

**Por que importa:** Segurança básica separa projeto de portfólio de sistema confiável.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 86 · Hash de senhas

Senha nunca é guardada como texto. Guardamos o hash (bcrypt ou argon2) com salt.

> 💡 **Analogia:** Hash é moer carne: dá para conferir se veio da mesma peça, mas não dá para desmoer.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=bcrypt%20hash%20senha%20node)

**Exercícios**

- [ ] Cadastro com bcrypt.
- [ ] Login comparando o hash.
- [ ] Política mínima de senha.
- [ ] Mensagem genérica de erro no login.
- [ ] Nunca registre senha em log.
- [ ] Teste que o hash muda a cada cadastro.

**Desafio:** Explique por que MD5 não serve para senhas.

### Dia 87 · JWT e sessões

JWT é um token assinado que prova quem você é. Sessões guardam o estado no servidor. Cookie httpOnly protege o token de scripts.

> 💡 **Analogia:** JWT é a pulseira do show: prova que você pagou, mas quem roubar entra no seu lugar até ela expirar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=jwt%20autentica%C3%A7%C3%A3o%20node)

**Exercícios**

- [ ] Gere um JWT no login.
- [ ] Middleware que valida o token.
- [ ] Expiração curta.
- [ ] Refresh token.
- [ ] Cookie httpOnly, secure e sameSite.
- [ ] Rota de logout.

**Desafio:** Decodifique um JWT no jwt.io e explique cada parte.

### Dia 88 · Autorização e papéis

Autenticar é saber quem é. Autorizar é saber o que pode fazer. Use papéis (admin, user) e confira se o recurso pertence ao usuário.

> 💡 **Analogia:** Crachá na empresa: todos entram no prédio, mas poucos entram na sala dos servidores.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=autoriza%C3%A7%C3%A3o%20rbac%20node)

**Exercícios**

- [ ] Campo role no usuário.
- [ ] Middleware requireRole.
- [ ] Confira se o recurso pertence ao usuário.
- [ ] Diferencie 401 de 403 nos testes.
- [ ] Esconda campos sensíveis nas respostas.
- [ ] Registre ações importantes (auditoria simples).

**Desafio:** Encontre uma falha IDOR no seu próprio código e corrija.

### Dia 89 · OWASP e segurança web

As falhas mais comuns: injeção, XSS, CSRF, dados expostos e configuração fraca. Helmet, rate limit e validação cobrem muito.

> 💡 **Analogia:** É trancar portas e janelas: cada item do OWASP é uma janela que costuma ficar aberta.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=owasp%20top%2010%20explicado)

**Exercícios**

- [ ] Leia o OWASP Top 10 e resuma 5 itens.
- [ ] Adicione o Helmet.
- [ ] Rate limit na rota de login.
- [ ] Demonstre e corrija um SQL injection.
- [ ] Proteja a saída contra XSS.
- [ ] Garanta que nenhum segredo está no Git.

**Desafio:** Escreva um checklist de segurança no README.

---

## Dia 90 · Projeto: Autenticação completa

**Problema:** Toda aplicação séria precisa de login seguro. Adicione autenticação ao CashWise ou à API de agendamentos.

**Requisitos**

- [ ] Cadastro, login, refresh e logout
- [ ] Papéis de usuário
- [ ] Recuperação de senha com token que expira
- [ ] Rate limit no login
- [ ] Testes das rotas protegidas

**Critérios de pronto**

- [ ] Nenhum segredo no repositório
- [ ] Diagrama de sequência do login no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 86

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 87

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 88

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 89

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 90

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
