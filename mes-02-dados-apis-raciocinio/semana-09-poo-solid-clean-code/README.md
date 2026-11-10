# Semana 09 · POO, SOLID e código limpo

> **Mês 2 · Dados, APIs e raciocínio** · Dias 41–45 da trilha · 🏆 Chefe do mês

**Por que importa:** POO, SOLID e clean code aparecem em entrevistas e em todo code review. Este é o chefe do mês 2.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 41 · Classes e objetos

Classe é um molde. Objeto é uma instância criada a partir dele, com dados (atributos) e comportamentos (métodos).

> 💡 **Analogia:** Classe é a forma de bolo. Cada bolo assado é um objeto: mesma forma, sabores diferentes.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=programa%C3%A7%C3%A3o%20orientada%20a%20objetos%20typescript)

**Exercícios**

- [ ] Crie a classe ContaBancaria com depositar e sacar.
- [ ] Use constructor e this.
- [ ] Crie um método estático.
- [ ] Use getter e setter.
- [ ] Crie 3 instâncias diferentes.
- [ ] Personalize o método toString.

**Desafio:** Impeça saldo negativo lançando um erro customizado.

### Dia 42 · Encapsulamento, herança e composição

Encapsular esconde detalhes internos. Herança reaproveita com extends. Composição monta objetos com partes. Na maioria dos casos, prefira composição.

> 💡 **Analogia:** Herança é 'é um' (cachorro é um animal). Composição é 'tem um' (carro tem motor). Trocar o motor é fácil; trocar a espécie, não.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=heran%C3%A7a%20vs%20composi%C3%A7%C3%A3o%20poo)

**Exercícios**

- [ ] Use private e campos com #.
- [ ] Crie Funcionario e Gerente com extends.
- [ ] Sobrescreva um método.
- [ ] Refaça o mesmo exemplo com composição.
- [ ] Implemente uma interface em 2 classes.
- [ ] Calcule a área de um array de formas (polimorfismo).

**Desafio:** Refatore uma herança de 3 níveis para composição.

### Dia 43 · SOLID

Cinco princípios para código fácil de mudar. Os mais cobrados de júnior: Responsabilidade Única (S) e Inversão de Dependência (D).

> 💡 **Analogia:** S é a caixa de ferramentas em vez do canivete: cada ferramenta faz uma coisa bem.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=solid%20explicado%20simples)

**Exercícios**

- [ ] Encontre uma violação do S num código seu.
- [ ] Separe uma classe que valida, salva e envia e-mail.
- [ ] Aplique o O com estratégias de desconto.
- [ ] Explique o L com o exemplo do quadrado e retângulo.
- [ ] Divida uma interface grande demais (I).
- [ ] Injete um repositório num serviço (D).

**Desafio:** Explique SOLID em 5 frases para alguém que não é dev.

### Dia 44 · Clean code e refatoração

Nomes claros, funções pequenas, nada de números mágicos, retorno antecipado. Código é lido muito mais vezes do que escrito.

> 💡 **Analogia:** Código limpo é cozinha organizada: o cozinheiro do próximo turno acha tudo.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=clean%20code%20boas%20pr%C3%A1ticas%20javascript)

**Exercícios**

- [ ] Renomeie 10 variáveis ruins.
- [ ] Troque ifs aninhados por retorno antecipado.
- [ ] Extraia números mágicos para constantes.
- [ ] Quebre uma função de 50 linhas.
- [ ] Remova comentários óbvios.
- [ ] Peça revisão à IA e aceite só o que souber justificar.

**Desafio:** Refatore o projeto da semana 3 e abra um PR com antes e depois.

---

## Dia 45 · Projeto: Sistema de reservas de mesas

**Problema:** Restaurantes perdem reservas no WhatsApp bagunçado. Modele o domínio com POO em TypeScript, ainda sem tela.

**Requisitos**

- [ ] Classes Mesa, Reserva, Cliente e Restaurante
- [ ] Sem conflito de horário e respeitando capacidade
- [ ] Cancelamento só até 2h antes
- [ ] Repositório em memória injetado no serviço
- [ ] Erros de domínio com mensagens claras

**Critérios de pronto**

- [ ] Script de demonstração com cenários
- [ ] 10 ou mais asserts passando
- [ ] Diagrama de classes em Mermaid no README

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 41

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 42

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 43

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 44

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 45

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
