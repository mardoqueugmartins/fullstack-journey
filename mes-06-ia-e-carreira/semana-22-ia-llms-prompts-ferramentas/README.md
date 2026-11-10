# Semana 22 · IA no produto: LLMs, prompts e ferramentas

> **Mês 6 · IA no produto e carreira** · Dias 106–110 da trilha

**Por que importa:** Em levantamento de 2026 com quase 7 mil vagas full stack, cerca de 1 em cada 3 pedia alguma competência em IA. Começa o mês da IA.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 106 · Como LLMs funcionam

Um LLM prevê o próximo pedaço de texto (token) com base no contexto. Tem limite de contexto, custo por token e pode inventar coisas (alucinar).

> 💡 **Analogia:** É um autocompletar gigantesco que leu muito: ótimo em padrões, mas não sabe se algo é verdade.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=como%20funcionam%20LLMs%20explicado%20simples)

**Exercícios**

- [ ] Conte os tokens de um texto num tokenizer.
- [ ] Compare temperatura 0 e 1 na mesma pergunta.
- [ ] Provoque uma alucinação e documente.
- [ ] Compare 2 modelos na mesma tarefa.
- [ ] Calcule o custo de 1.000 chamadas.
- [ ] Leia a documentação da API de um LLM (Anthropic ou OpenAI).

**Desafio:** Explique janela de contexto para alguém que não é dev.

### Dia 107 · Chamando a API de um LLM

A integração é feita pelo SDK: mensagem de sistema, mensagens do usuário e parâmetros. A chave fica sempre no servidor.

> 💡 **Analogia:** A chave da API é o cartão de crédito da empresa: nunca deixe no front.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=api%20claude%20openai%20node%20tutorial)

**Exercícios**

- [ ] Faça uma chamada simples pelo SDK em Node.
- [ ] Use um system prompt.
- [ ] Mantenha o histórico da conversa.
- [ ] Receba a resposta em streaming.
- [ ] Trate rate limit e timeout.
- [ ] Guarde a chave em variável de ambiente.

**Desafio:** Crie uma rota no Next.js que faz streaming da resposta para a tela.

### Dia 108 · Prompts e saída estruturada

Prompts bons têm contexto, tarefa, exemplos e formato. Saída estruturada (JSON validado com Zod) torna a resposta utilizável no código.

> 💡 **Analogia:** É o briefing para um freelancer: quanto mais claro o pedido e o formato de entrega, menos retrabalho.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=prompt%20engineering%20para%20desenvolvedores)

**Exercícios**

- [ ] Compare um prompt sem exemplos e com exemplos.
- [ ] Peça JSON e valide com Zod.
- [ ] Tente de novo quando o JSON vier inválido.
- [ ] Classifique textos em categorias.
- [ ] Extraia dados de um e-mail.
- [ ] Monte 10 casos de teste para o seu prompt.

**Desafio:** Meça a taxa de acerto do prompt em 20 exemplos.

### Dia 109 · Tool calling e agentes

Tool calling deixa o modelo pedir que seu código execute funções (consultar o banco, agendar). Agente é um ciclo: o modelo decide, a ferramenta executa, o modelo continua.

> 💡 **Analogia:** O modelo é o gerente que decide. As ferramentas são os funcionários que executam e trazem o resultado.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=tool%20calling%20function%20calling%20llm%20tutorial)

**Exercícios**

- [ ] Defina uma ferramenta com schema.
- [ ] Execute a ferramenta e devolva o resultado ao modelo.
- [ ] Adicione uma segunda ferramenta.
- [ ] Limite o ciclo a N passos.
- [ ] Peça confirmação do usuário antes de ações perigosas.
- [ ] Registre cada passo em log.

**Desafio:** Crie um assistente que consulta horários livres no seu banco.

---

## Dia 110 · Projeto: Triagem inteligente de atendimentos

**Problema:** Escritórios recebem muitas mensagens e perdem tempo triando. Use IA para classificar e resumir cada contato.

**Requisitos**

- [ ] Recebe o texto do cliente
- [ ] LLM devolve área (cível, criminal, trabalhista, outro), urgência e resumo em JSON validado
- [ ] Salva no banco
- [ ] Painel ordenado por urgência
- [ ] Plano B quando a IA falhar

**Critérios de pronto**

- [ ] 20 exemplos de teste com taxa de acerto no README
- [ ] Custo estimado por mensagem
- [ ] Chave da API protegida no servidor

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 106

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 107

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 108

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 109

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 110

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
