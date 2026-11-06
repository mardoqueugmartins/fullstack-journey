# Semana 04 · JavaScript 2: funções, arrays e objetos

> **Mês 1 · Fundamentos que a IA não substitui** · Dias 16–20 da trilha

**Por que importa:** map, filter e reduce aparecem em quase todo teste técnico júnior. Objetos e JSON são a língua das APIs.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 16 · Funções

Funções são blocos reutilizáveis que recebem entradas (parâmetros) e devolvem uma saída (return). Arrow function é a forma curta. Escopo define onde a variável existe.

> 💡 **Analogia:** Função é uma receita: ingredientes entram, o prato sai, e você repete quantas vezes quiser.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20fun%C3%A7%C3%B5es%20arrow%20function%20escopo)

**Exercícios**

- [ ] Função que converte Celsius para Fahrenheit.
- [ ] Função com parâmetro padrão.
- [ ] Arrow function que retorna um objeto.
- [ ] Função que recebe outra função como argumento (callback).
- [ ] Demonstre escopo de bloco com let dentro de um if.
- [ ] Escreva uma função pura e uma impura e explique a diferença.

**Desafio:** Implemente a validação de CPF pelo algoritmo dos dígitos verificadores.

### Dia 17 · Arrays e map, filter, reduce

Arrays guardam listas. map transforma cada item, filter seleciona, reduce acumula num valor só, find busca o primeiro que bate.

> 💡 **Analogia:** É uma esteira de fábrica: map pinta cada peça, filter tira as defeituosas, reduce embala tudo numa caixa.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20map%20filter%20reduce%20explicado)

**Exercícios**

- [ ] Dobre todos os números de um array com map.
- [ ] Filtre usuários maiores de idade.
- [ ] Some o total de um carrinho com reduce.
- [ ] Encontre um usuário por id com find.
- [ ] Ordene produtos por preço com sort.
- [ ] Remova itens duplicados usando Set.

**Desafio:** Implemente seu próprio meuMap e meuFilter sem usar os nativos.

### Dia 18 · Objetos e JSON

Objetos agrupam dados em pares chave e valor. JSON é o formato de texto que as APIs usam para trocar objetos. Desestruturação e spread extraem e copiam dados.

> 💡 **Analogia:** Objeto é uma ficha cadastral. JSON é essa ficha enviada pelo correio.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20objetos%20destructuring%20spread%20json)

**Exercícios**

- [ ] Crie um objeto cliente com endereço aninhado.
- [ ] Extraia nome e cidade com desestruturação.
- [ ] Atualize um campo usando spread, sem alterar o original.
- [ ] Liste chaves e valores com Object.entries.
- [ ] Converta com JSON.stringify e volte com JSON.parse.
- [ ] Agrupe uma lista de pedidos por status num objeto.

**Desafio:** Faça uma cópia profunda com structuredClone e explique por que spread não basta.

### Dia 19 · Strings, datas e regex

Strings têm métodos para cortar, buscar e trocar texto. Date e Intl formatam datas e moedas. Regex encontra padrões no texto.

> 💡 **Analogia:** Regex é um detector de metais: você descreve o formato e ele aponta tudo que bate.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=javascript%20string%20m%C3%A9todos%20regex%20b%C3%A1sico)

**Exercícios**

- [ ] Capitalize a primeira letra de cada nome.
- [ ] Gere um slug a partir de um título.
- [ ] Formate valores em reais com Intl.NumberFormat.
- [ ] Calcule a diferença em dias entre duas datas.
- [ ] Valide um e-mail com uma regex simples.
- [ ] Extraia telefones de um texto longo.

**Desafio:** Mascare um CPF no formato 123.***.***-09.

---

## Dia 20 · Projeto: Analisador de extrato

**Problema:** Pessoas não sabem para onde vai o dinheiro. Leia um CSV de extrato bancário e gere um relatório no terminal.

**Requisitos**

- [ ] Ler o arquivo com fs.readFileSync
- [ ] Transformar o CSV em array de objetos
- [ ] Categorizar por palavras-chave (mercado, transporte...)
- [ ] Total por categoria e por mês
- [ ] Top 5 maiores gastos

**Critérios de pronto**

- [ ] Funções de cálculo separadas da leitura do arquivo
- [ ] CSV de exemplo no repositório
- [ ] README com exemplo da saída

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 16

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 17

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 18

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 19

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 20

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
