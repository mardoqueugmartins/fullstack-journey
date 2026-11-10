# Semana 06 · HTTP, assincronia e APIs

> **Mês 2 · Dados, APIs e raciocínio** · Dias 26–30 da trilha

**Por que importa:** Todo app real conversa com APIs. Integrar front e back aparece em quase toda vaga júnior.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 26 · HTTP e REST

HTTP é o protocolo de pedido e resposta da web: métodos (GET, POST, PUT, DELETE), status (200, 404, 500), headers e corpo. REST organiza APIs em recursos.

> 💡 **Analogia:** É um restaurante: o pedido vai à cozinha e volta um prato com um status: entregue, em falta ou a cozinha pegou fogo.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=http%20rest%20api%20explicado%20para%20iniciantes)

**Exercícios**

- [ ] Abra a aba Network e anote 5 requisições de um site.
- [ ] Classifique 10 status codes por família (2xx, 3xx, 4xx, 5xx).
- [ ] Teste uma API pública no Insomnia, Bruno ou Thunder Client.
- [ ] Monte uma URL com query params.
- [ ] Leia e explique 3 headers de uma resposta.
- [ ] Desenhe as rotas REST de um recurso 'pedidos'.

**Desafio:** Explique idempotência com um exemplo de PUT e outro de POST.

### Dia 27 · Callbacks e Promises

Código assíncrono não trava o programa enquanto espera. Uma Promise representa um valor que vai chegar: pendente, resolvida ou rejeitada.

> 💡 **Analogia:** Promise é a senha do fast food: você recebe agora e o lanche chega depois, ou avisam que acabou.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20promises%20explicado)

**Exercícios**

- [ ] Preveja a ordem de execução de 3 setTimeout e confira.
- [ ] Crie uma função delay(ms) que retorna Promise.
- [ ] Encadeie 3 then.
- [ ] Trate um erro com catch.
- [ ] Use Promise.all com 3 delays.
- [ ] Crie um timeout com Promise.race.

**Desafio:** Desenhe o event loop (pilha e fila) para um exemplo com setTimeout de 0ms.

### Dia 28 · async/await e fetch

async/await escreve código assíncrono como se fosse em sequência. fetch busca dados de APIs pela rede.

> 💡 **Analogia:** await é esperar na fila com o celular na mão: você pausa aquela tarefa, mas o mundo continua andando.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=async%20await%20fetch%20api%20javascript)

**Exercícios**

- [ ] Busque um CEP na BrasilAPI e mostre na tela.
- [ ] Use try/catch com mensagem amigável.
- [ ] Verifique response.ok antes de ler o JSON.
- [ ] Mostre estados de carregando, erro e sucesso.
- [ ] Busque 3 recursos em paralelo.
- [ ] Cancele uma requisição com AbortController.

**Desafio:** Implemente retry com espera crescente: tenta 3 vezes, esperando 1s, 2s e 4s.

### Dia 29 · APIs na prática

Paginação, cache e tratamento de erro separam uma demo de um app de verdade.

> 💡 **Analogia:** Cache é o recado na geladeira: em vez de ligar de novo, você confere o que já sabe.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=consumir%20api%20pagina%C3%A7%C3%A3o%20cache%20javascript)

**Exercícios**

- [ ] Liste dados com paginação.
- [ ] Busca com debounce chamando a API.
- [ ] Cache em memória com Map.
- [ ] Cache no localStorage com tempo de expiração.
- [ ] Skeleton enquanto carrega.
- [ ] Crie uma função genérica apiClient(url, options).

**Desafio:** Leia a documentação de uma API nova, sem tutorial, e consuma um endpoint.

---

## Dia 30 · Projeto: Consulta de empresas por CNPJ

**Problema:** Vendedores e freelancers precisam checar rápido os dados de um cliente antes de fechar negócio.

**Requisitos**

- [ ] Busca por CNPJ na BrasilAPI
- [ ] Máscara e validação do CNPJ
- [ ] Estados de carregando, erro e vazio
- [ ] Histórico das últimas 10 buscas
- [ ] Cache de 24 horas

**Critérios de pronto**

- [ ] Trata CNPJ inexistente e API fora do ar
- [ ] Publicado com link público
- [ ] README explica as decisões de cache

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 26

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 27

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 28

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 29

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 30

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
