# Semana 21 · Docker, CI/CD e cloud

> **Mês 5 · Produto seguro e no ar** · Dias 101–105 da trilha · 🏆 Chefe do mês

**Por que importa:** Cloud básico e deploy ganharam muito peso nas vagas júnior de 2026. Este é o chefe do mês 5.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 101 · Docker

Docker empacota o app com as dependências num contêiner que roda igual em qualquer lugar.

> 💡 **Analogia:** Contêiner de navio: não importa o que tem dentro, todo porto sabe carregar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=docker%20para%20desenvolvedores%20iniciantes)

**Exercícios**

- [ ] Instale o Docker.
- [ ] Rode um Postgres em contêiner.
- [ ] Escreva o Dockerfile da sua API.
- [ ] Crie o .dockerignore.
- [ ] Use build em múltiplos estágios.
- [ ] Suba API e banco com docker compose.

**Desafio:** Deixe a imagem com menos de 200MB.

### Dia 102 · CI/CD com GitHub Actions

CI roda lint e testes a cada push. CD publica automaticamente quando tudo passa.

> 💡 **Analogia:** Linha de montagem com controle de qualidade: peça com defeito não chega ao cliente.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=github%20actions%20ci%20cd%20node)

**Exercícios**

- [ ] Workflow com lint e testes.
- [ ] Cache do npm.
- [ ] Matriz com duas versões do Node.
- [ ] Use secrets.
- [ ] Deploy automático na main.
- [ ] Proteja a branch exigindo CI verde.

**Desafio:** Deploy de prévia para cada Pull Request.

### Dia 103 · Deploy e variáveis de ambiente

Front na Vercel, back no Render, Railway ou Fly, banco no Neon ou Supabase. Variáveis de ambiente separam desenvolvimento de produção.

> 💡 **Analogia:** É mudar de casa com as chaves certas: cada ambiente tem as suas.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=deploy%20node%20api%20render%20railway)

**Exercícios**

- [ ] Publique a API.
- [ ] Use um banco gerenciado.
- [ ] Configure as variáveis de ambiente.
- [ ] Conecte um domínio próprio.
- [ ] Confirme HTTPS.
- [ ] Rode as migrations no deploy.

**Desafio:** Faça o rollback de um deploy quebrado.

### Dia 104 · Cloud básico (AWS)

Conceitos que todo júnior deve conhecer: região, IAM (permissões), S3 (arquivos), funções serverless e controle de custo.

> 💡 **Analogia:** Cloud é alugar em vez de comprar: você paga pelo que usa, mas precisa fechar a torneira.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=aws%20para%20iniciantes%20s3%20iam)

**Exercícios**

- [ ] Crie a conta free tier com alerta de orçamento.
- [ ] Crie um usuário IAM e pare de usar o root.
- [ ] Crie um bucket S3 e envie um arquivo pelo SDK.
- [ ] Gere uma URL pré-assinada.
- [ ] Crie uma função Lambda simples.
- [ ] Anote os custos de cada serviço usado.

**Desafio:** Faça upload do seu app direto para o S3 com URL assinada.

---

## Dia 105 · Projeto: Do zero à produção

**Problema:** Leve o SaaS da semana 20 ao padrão de produção.

**Requisitos**

- [ ] Aplicação em Docker
- [ ] CI com lint, testes e build
- [ ] Deploy automático
- [ ] Monitoramento de erros e de disponibilidade
- [ ] Upload de arquivos no S3 ou similar

**Critérios de pronto**

- [ ] Link público estável
- [ ] Diagrama da infraestrutura no README
- [ ] Post no LinkedIn

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 101

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 102

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 103

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 104

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 105

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
