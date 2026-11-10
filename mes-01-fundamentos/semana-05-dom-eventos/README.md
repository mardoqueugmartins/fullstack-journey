# Semana 05 · DOM, eventos e dados no navegador

> **Mês 1 · Fundamentos que a IA não substitui** · Dias 21–25 da trilha · 🏆 Chefe do mês

**Por que importa:** Entender o DOM faz o React deixar de ser mágica. Este é o fechamento do primeiro mês.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 21 · Manipulando o DOM

O DOM é a árvore de elementos da página que o JavaScript pode ler e alterar. querySelector encontra, createElement cria, textContent muda o texto.

> 💡 **Analogia:** O DOM é a árvore genealógica da página: cada tag tem pai, filhos e irmãos.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20dom%20manipula%C3%A7%C3%A3o)

**Exercícios**

- [ ] Mude o texto de um título via JS.
- [ ] Gere uma lista ul a partir de um array.
- [ ] Alterne uma classe para ativar tema escuro.
- [ ] Remova um elemento da página.
- [ ] Renderize cards de produtos a partir de um array de objetos.
- [ ] Conte quantos li existem na página.

**Desafio:** Crie uma função render(estado) que redesenha a lista inteira a cada mudança.

### Dia 22 · Eventos

Eventos são ações (clique, digitação, envio) que o JS escuta para reagir. Delegação usa um único ouvinte no elemento pai para muitos filhos.

> 💡 **Analogia:** É a campainha: você não fica olhando a porta, só reage quando ela toca.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20eventos%20addEventListener%20delega%C3%A7%C3%A3o)

**Exercícios**

- [ ] Contador com botões de mais e menos.
- [ ] Input que mostra quantos caracteres faltam.
- [ ] Use preventDefault num formulário.
- [ ] Exclua itens de uma lista com delegação de eventos.
- [ ] Crie um atalho de teclado.
- [ ] Aplique debounce num campo de busca.

**Desafio:** Crie um modal acessível que fecha com Esc e devolve o foco ao botão que abriu.

### Dia 23 · Formulários e validação

Formulários coletam dados. Validar no front dá resposta rápida, mas o back-end sempre valida de novo.

> 💡 **Analogia:** A validação do front é o porteiro educado. A do back é o cofre. Os dois precisam existir.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=valida%C3%A7%C3%A3o%20de%20formul%C3%A1rio%20javascript)

**Exercícios**

- [ ] Valide campos obrigatórios com mensagem própria.
- [ ] Ligue mensagens de erro ao campo com aria-describedby.
- [ ] Aplique máscara de telefone.
- [ ] Converta o formulário em objeto com FormData.
- [ ] Desabilite o botão enquanto envia.
- [ ] Mostre as regras de senha forte sendo cumpridas em tempo real.

**Desafio:** Crie um formulário em 3 etapas que guarda os dados entre elas.

### Dia 24 · localStorage e estado

localStorage guarda texto no navegador entre visitas, e JSON converte objetos. Estado é a fonte única de verdade que a tela mostra.

> 💡 **Analogia:** localStorage é a gaveta da sua mesa: guarda até você voltar, mas só naquele computador.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=localStorage%20javascript%20salvar%20dados)

**Exercícios**

- [ ] Salve o tema escolhido pelo usuário.
- [ ] Salve e recupere uma lista de tarefas.
- [ ] Trate JSON inválido com try/catch.
- [ ] Compare localStorage e sessionStorage na prática.
- [ ] Guarde uma versão do formato dos dados salvos.
- [ ] Crie um botão que limpa os dados com confirmação na tela.

**Desafio:** Sincronize os dados entre duas abas com o evento storage.

---

## Dia 25 · Projeto: Gerenciador de prazos

**Problema:** Autônomos como advogados e contadores perdem prazos em planilhas. Crie um app web de prazos que funcione no celular.

**Requisitos**

- [ ] Criar, editar, concluir e excluir prazos
- [ ] Filtros: hoje, esta semana, atrasados
- [ ] Ordenar por data e destacar urgentes
- [ ] Salvar tudo em localStorage
- [ ] Layout responsivo e acessível

**Critérios de pronto**

- [ ] Publicado com link público
- [ ] Zero erros no console
- [ ] README com GIF de uso
- [ ] 10 ou mais commits

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 21

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 22

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 23

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 24

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 25

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
