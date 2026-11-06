# Semana 23 · IA no produto: embeddings e RAG

> **Mês 6 · IA no produto e carreira** · Dias 111–115 da trilha

**Por que importa:** RAG e bancos vetoriais estão entre as habilidades de IA mais citadas nas vagas full stack.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 111 · Embeddings

Embedding transforma texto num vetor de números. Textos parecidos ficam próximos. A busca semântica encontra pelo significado, não pela palavra exata.

> 💡 **Analogia:** É um mapa de ideias: 'cachorro' fica perto de 'cão' e longe de 'boleto'.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=embeddings%20explicado%20busca%20sem%C3%A2ntica)

**Exercícios**

- [ ] Gere embeddings de 10 frases.
- [ ] Calcule a similaridade de cosseno à mão.
- [ ] Ordene frases pela proximidade com uma pergunta.
- [ ] Compare com uma busca por palavra-chave.
- [ ] Calcule o custo dos embeddings.
- [ ] Salve os vetores num JSON.

**Desafio:** Agrupe 30 frases por similaridade.

### Dia 112 · Banco vetorial com pgvector

pgvector adiciona vetores ao Postgres. Você busca os trechos mais próximos usando um índice.

> 💡 **Analogia:** É uma biblioteca organizada por assunto, não por ordem alfabética.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=pgvector%20postgres%20tutorial)

**Exercícios**

- [ ] Ative o pgvector (Supabase ou Neon).
- [ ] Crie uma tabela de documentos com coluna vetor.
- [ ] Insira embeddings.
- [ ] Busque os k mais próximos.
- [ ] Crie um índice HNSW.
- [ ] Filtre por metadados.

**Desafio:** Compare o tempo da busca com e sem índice.

### Dia 113 · RAG

RAG é buscar os trechos relevantes e enviá-los ao modelo junto com a pergunta, para ele responder com base nos seus dados e citar a fonte.

> 💡 **Analogia:** É prova com consulta: o aluno responde melhor quando recebe as páginas certas do livro.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=rag%20retrieval%20augmented%20generation%20tutorial)

**Exercícios**

- [ ] Divida documentos em pedaços (chunks).
- [ ] Monte o pipeline de ingestão.
- [ ] Recupere os 5 trechos mais próximos.
- [ ] Monte o prompt com esse contexto.
- [ ] Cite a fonte de cada resposta.
- [ ] Responda 'não encontrei' quando não houver base.

**Desafio:** Teste 3 tamanhos de chunk e compare as respostas.

### Dia 114 · Avaliação e custos

Avalie com casos de teste (evals), acompanhe custo, latência e erros, e use cache para perguntas repetidas.

> 💡 **Analogia:** É o controle de qualidade da padaria: prova um pão de cada fornada em vez de confiar só na receita.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=llm%20evals%20avalia%C3%A7%C3%A3o%20aplica%C3%A7%C3%B5es%20ia)

**Exercícios**

- [ ] Escreva 15 perguntas com a resposta esperada.
- [ ] Crie um script de avaliação.
- [ ] Meça a latência.
- [ ] Cache por hash da pergunta.
- [ ] Limite de custo por usuário.
- [ ] Botão de feedback útil e não útil.

**Desafio:** Painel simples de custo por dia.

---

## Dia 115 · Projeto: FAQ inteligente com documentos

**Problema:** Clientes perguntam sempre as mesmas coisas que já estão nos documentos. Crie um chat que responde com base neles.

**Requisitos**

- [ ] Upload de PDF ou TXT
- [ ] Ingestão com chunks e embeddings no pgvector
- [ ] Chat que responde citando os trechos
- [ ] Diz 'não encontrei' quando não sabe
- [ ] Histórico da conversa

**Critérios de pronto**

- [ ] Avaliação com 15 perguntas e taxa de acerto
- [ ] Publicado com link público
- [ ] Diagrama do pipeline no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 111

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 112

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 113

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 114

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 115

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
