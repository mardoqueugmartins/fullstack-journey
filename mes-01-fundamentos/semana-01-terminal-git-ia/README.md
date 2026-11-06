# Semana 01 · Terminal, Git e IA do jeito certo

> **Mês 1 · Fundamentos que a IA não substitui** · Dias 1–5 da trilha

**Por que importa:** Git aparece em praticamente todas as vagas júnior. É a primeira coisa que um recrutador olha no seu GitHub.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 1 · Terminal e ambiente

O terminal é uma forma de conversar com o computador por comandos de texto. Com ele você navega por pastas, cria arquivos e roda programas muito mais rápido do que clicando.

> 💡 **Analogia:** É como pedir no balcão em vez de procurar sozinho pela loja: você diz exatamente o que quer e recebe.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=terminal%20linux%20comandos%20b%C3%A1sicos%20para%20programadores)

**Exercícios**

- [ ] Use pwd, ls e cd para navegar até a sua pasta de usuário.
- [ ] Crie a pasta estudos-fullstack com mkdir e entre nela.
- [ ] Crie 3 arquivos com touch (notas.md, index.html, app.js) e liste com ls -la.
- [ ] Renomeie notas.md para diario.md com mv e apague app.js com rm.
- [ ] Instale Node LTS e VS Code. Confirme com node -v e npm -v.
- [ ] Abra a pasta no VS Code direto do terminal com code .

**Desafio:** Escreva no diario.md 10 comandos que você usou hoje e o que cada um faz, sem consultar.

### Dia 2 · Git: o 'salvar jogo' do código

Git guarda o histórico do projeto em fotos chamadas commits. Você pode voltar no tempo, comparar versões e saber o que mudou.

> 💡 **Analogia:** É o checkpoint do videogame: cada commit é um ponto seguro para onde você pode voltar se der errado.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=git%20e%20github%20para%20iniciantes%20curso%20em%20v%C3%ADdeo)

**Exercícios**

- [ ] Rode git init na pasta estudos-fullstack.
- [ ] Configure git config --global user.name e user.email.
- [ ] Faça 3 commits com mensagens claras, usando git status antes de cada um.
- [ ] Use git diff para ver o que mudou antes de commitar.
- [ ] Veja o histórico com git log --oneline.
- [ ] Estrague um arquivo de propósito e recupere com git restore.

**Desafio:** Reescreva 5 mensagens de commit no padrão Conventional Commits (feat:, fix:, docs:, refactor:, chore:).

- **Commits / links:** `docs(semana-01): adiciona desafio do dia 2`, `docs(semana-01): adiciona resumo do dia 2`


### Dia 3 · GitHub, branches e Pull Request

Branch é uma linha paralela de trabalho. Pull Request é o pedido para juntar essa linha na principal, com revisão de outra pessoa.

> 💡 **Analogia:** É escrever um rascunho numa folha separada e pedir ao editor que aprove antes de entrar no livro.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=git%20branch%20merge%20pull%20request%20tutorial%20portugu%C3%AAs)

**Exercícios**

- [ ] Crie um repositório no GitHub e faça push do seu projeto.
- [ ] Configure acesso por chave SSH.
- [ ] Crie a branch feature/readme, faça um commit e abra um Pull Request.
- [ ] Faça o merge do PR e atualize sua main local com git pull.
- [ ] Provoque um conflito de merge de propósito e resolva.
- [ ] Clone um repositório público e rode git log nele.

**Desafio:** Abra um PR com descrição completa: o que mudou, por que mudou e como testar.

### Dia 4 · Estudar com IA sem virar refém

A IA acelera quem já entende o problema. Recrutadores descartam quem gera código que não consegue explicar. Use IA como tutor e revisor, não como atalho.

> 💡 **Analogia:** IA é uma calculadora: ótima para quem sabe montar a conta, perigosa para quem não sabe se o resultado faz sentido.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=como%20usar%20IA%20para%20estudar%20programa%C3%A7%C3%A3o%20sem%20ficar%20dependente)

**Exercícios**

- [ ] Peça à IA para explicar merge vs rebase e reescreva com suas palavras.
- [ ] Peça 5 perguntas de prova sobre Git e responda sem consultar.
- [ ] Escreva um prompt com contexto, objetivo e formato de saída.
- [ ] Peça para a IA revisar uma mensagem de commit sua e anote se concorda.
- [ ] Instale um assistente no VS Code e desligue o autocompletar durante exercícios.
- [ ] Crie o arquivo REGRAS-IA.md com suas 3 regras pessoais de uso.

**Desafio:** Faça uma pergunta técnica à IA e encontre um erro ou imprecisão conferindo na documentação oficial.

---

## Dia 5 · Projeto: Dev Journal

**Problema:** Recrutadores querem ver constância. Crie um repositório público que registra sua jornada nos próximos 6 meses.

**Requisitos**

- [ ] README com quem você é, stack-alvo e este roadmap
- [ ] Uma pasta por semana com anotações
- [ ] Profile README no GitHub (repositório com seu usuário)
- [ ] Foto, bio e link do LinkedIn no perfil
- [ ] Regras de IA publicadas no repositório

**Critérios de pronto**

- [ ] Pelo menos 5 commits no padrão Conventional Commits
- [ ] README legível no celular
- [ ] Link do repositório salvo abaixo

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 1

- **O que aprendi:** o terminal sempre está "dentro" de uma pasta, e tudo acontece ali.
- **O que travou:** não sabia que rm apaga direto, sem passar pela lixeira.
- **Commits / links:** diario.md

### Dia 2

- **O que aprendi:** o git permite criar versões do código, trabalhar em equipe sem causar problemas no código.
- **O que travou:** não sabia muito bem como criar branchs e fazer merge.
- **Commits / links:** `7534ff4` desafio do dia 2, `8092364` resumo do dia 2


### Dia 3

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 4

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 5

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
