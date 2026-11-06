# Semana 14 · Node.js

> **Mês 4 · Back-end e banco de dados** · Dias 66–70 da trilha

**Por que importa:** Node com TypeScript é o back-end mais pedido junto com React. Começa o mês do back-end.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 66 · Node e módulos

Node roda JavaScript fora do navegador, no servidor. Módulos (import e export) organizam o código, e o npm instala pacotes.

> 💡 **Analogia:** Node é tirar o motor do carro e colocar num barco: mesmo motor, outro lugar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=node.js%20do%20zero)

**Exercícios**

- [ ] Hello world com node.
- [ ] Configure type: module no package.json.
- [ ] Divida o código em 3 módulos.
- [ ] Leia argumentos com process.argv.
- [ ] Use variáveis de ambiente com .env e process.env.
- [ ] Crie scripts no package.json.

**Desafio:** Crie um pacote local e use em outro projeto com npm link.

### Dia 67 · Arquivos e streams

fs lê e escreve arquivos. Streams processam dados em pedaços, sem carregar tudo na memória.

> 💡 **Analogia:** Stream é beber de canudinho em vez de virar o copo: vai aos poucos.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=node%20fs%20streams)

**Exercícios**

- [ ] Leia e escreva um JSON.
- [ ] Liste os arquivos de uma pasta.
- [ ] Copie um arquivo.
- [ ] Leia um CSV grande linha a linha com readline.
- [ ] Monte caminhos com path.join.
- [ ] Trate o erro de arquivo inexistente.

**Desafio:** Conte as linhas de um arquivo de 100MB sem estourar a memória.

### Dia 68 · Event loop no servidor

O event loop deixa um servidor atender muitas requisições sem esperar cada leitura terminar. Código síncrono pesado trava todo mundo.

> 💡 **Analogia:** É o garçom que anota o pedido, entrega à cozinha e vai para a próxima mesa, sem ficar parado esperando.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=node%20event%20loop%20explicado)

**Exercícios**

- [ ] Mostre o bloqueio com um laço pesado.
- [ ] Compare a ordem de setImmediate, nextTick e setTimeout.
- [ ] Crie seu próprio EventEmitter.
- [ ] Mova um cálculo pesado para worker_threads.
- [ ] Leia 5 arquivos em paralelo com Promise.all.
- [ ] Meça tempos com performance.now.

**Desafio:** Explique em um parágrafo por que Node é bom para I/O e ruim para cálculo pesado.

### Dia 69 · Servidor HTTP puro

Antes do framework, entenda o módulo http: receber a requisição, ler URL e método, responder com status e JSON.

> 💡 **Analogia:** É cozinhar arroz na panela comum antes de usar a elétrica: você entende o que ela faz por você.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=node%20http%20server%20sem%20framework)

**Exercícios**

- [ ] Servidor que responde JSON.
- [ ] Roteamento manual por método e URL.
- [ ] Leia o corpo de um POST.
- [ ] Responda 404 para rotas desconhecidas.
- [ ] Adicione cabeçalhos de CORS.
- [ ] Registre cada requisição no console.

**Desafio:** Sirva arquivos estáticos com o content-type correto.

---

## Dia 70 · Projeto: CLI organizador de arquivos

**Problema:** A pasta Downloads vira bagunça. Crie uma ferramenta de linha de comando em Node e TypeScript que organiza tudo.

**Requisitos**

- [ ] Organiza por tipo e por data
- [ ] Modo --dry-run que só mostra o que faria
- [ ] Relatório final do que foi movido
- [ ] Ignora arquivos ocultos
- [ ] Log gravado em arquivo

**Critérios de pronto**

- [ ] Instalável com npm link
- [ ] README com exemplos de uso
- [ ] Testes das funções puras

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 66

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 67

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 68

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 69

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 70

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
