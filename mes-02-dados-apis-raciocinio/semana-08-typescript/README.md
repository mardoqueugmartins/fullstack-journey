# Semana 08 · TypeScript

> **Mês 2 · Dados, APIs e raciocínio** · Dias 36–40 da trilha

**Por que importa:** TypeScript virou padrão nas vagas JS. Ele pega erros antes de o código rodar.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 36 · Tipos e inferência

TypeScript adiciona tipos ao JavaScript. O compilador aponta erros antes de rodar, e a inferência descobre muitos tipos sozinha.

> 💡 **Analogia:** É o corretor ortográfico do código: sublinha o erro antes de você enviar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=typescript%20para%20iniciantes)

**Exercícios**

- [ ] Configure um projeto com tsc --init e strict ligado.
- [ ] Tipe parâmetros e retorno de 3 funções.
- [ ] Use arrays e tuplas tipadas.
- [ ] Compare any e unknown com exemplos.
- [ ] Use tipos literais ('pix' | 'cartao').
- [ ] Converta um arquivo JS seu e corrija 5 erros apontados.

**Desafio:** Ligue noUncheckedIndexedAccess e explique o que mudou.

### Dia 37 · Interfaces, types e unions

interface e type descrevem o formato dos objetos. Union (A | B) aceita várias opções, e narrowing descobre qual delas você tem.

> 💡 **Analogia:** Interface é a planta da casa: diz quais cômodos existem, não como decorar.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=typescript%20interface%20type%20union)

**Exercícios**

- [ ] Crie a interface Usuario com campos opcionais.
- [ ] Tipe um status com union de strings.
- [ ] Modele pagamento como união discriminada (pix, cartão, boleto).
- [ ] Escreva um type guard.
- [ ] Use Record para um dicionário.
- [ ] Use readonly para impedir alterações.

**Desafio:** Modele estados de requisição (idle, loading, success, error) e trate todos com switch exaustivo usando never.

### Dia 38 · Generics e utility types

Generics criam funções e tipos reutilizáveis para qualquer tipo, sem perder a segurança. Partial, Pick e Omit transformam tipos existentes.

> 💡 **Analogia:** Generic é uma embalagem com etiqueta em branco: serve para qualquer produto, mas depois que você escreve, só aquele entra.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=typescript%20generics%20explicado)

**Exercícios**

- [ ] Função first<T> que devolve o primeiro item.
- [ ] Tipo ApiResponse<T>.
- [ ] Use Partial num update.
- [ ] Crie DTOs com Pick e Omit.
- [ ] Use keyof numa função de ordenação.
- [ ] Crie um groupBy genérico tipado.

**Desafio:** Tipe um fetcher genérico get<T>(url).

### Dia 39 · TypeScript num projeto real

Tipar dados de API, configurar ESLint e Prettier e criar scripts deixa o projeto profissional. Zod valida em tempo de execução o que o TS só confere na compilação.

> 💡 **Analogia:** O TypeScript confere a planta. O Zod confere o caminhão que chegou na obra.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=zod%20typescript%20valida%C3%A7%C3%A3o)

**Exercícios**

- [ ] Crie um projeto Vite com TypeScript.
- [ ] Configure ESLint e Prettier.
- [ ] Tipe a resposta da BrasilAPI.
- [ ] Crie um schema Zod e use z.infer.
- [ ] Crie os scripts dev, build e lint.
- [ ] Rode tsc --noEmit antes de cada commit com husky.

**Desafio:** Documente 3 bugs que o modo strict encontrou.

---

## Dia 40 · Projeto: Migração para TypeScript

**Problema:** Código JavaScript cresce e quebra em silêncio. Migre o Gerenciador de prazos para TypeScript.

**Requisitos**

- [ ] strict ligado
- [ ] Nenhum any
- [ ] Tipos de domínio num arquivo próprio
- [ ] Zod validando os dados lidos do localStorage
- [ ] ESLint sem avisos

**Critérios de pronto**

- [ ] Build sem erros
- [ ] PR de migração com descrição antes e depois
- [ ] README atualizado

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 36

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 37

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 38

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 39

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 40

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
