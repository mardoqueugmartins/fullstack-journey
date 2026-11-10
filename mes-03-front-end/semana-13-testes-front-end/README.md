# Semana 13 · Testes no front-end

> **Mês 3 · Front-end profissional** · Dias 61–65 da trilha · 🏆 Chefe do mês

**Por que importa:** Testes básicos aparecem como diferencial forte nas vagas júnior. Este é o chefe do mês 3.

[← Voltar ao mês](../README.md) · [Roadmap completo](../../ROADMAP.md)

---

## Aulas

### Dia 61 · Fundamentos de testes

Testes automatizados confirmam que o código faz o que deve. Pirâmide: muitos unitários, alguns de integração, poucos de ponta a ponta.

> 💡 **Analogia:** É o checklist do piloto antes de decolar: rápido, repetível e evita desastre.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=testes%20automatizados%20javascript%20vitest)

**Exercícios**

- [ ] Instale o Vitest.
- [ ] Teste uma função de soma.
- [ ] Teste a validação de CPF com vários casos.
- [ ] Organize com describe, it e expect.
- [ ] Teste que uma função lança erro.
- [ ] Gere o relatório de cobertura.

**Desafio:** TDD: escreva o teste antes da função formatarMoeda.

### Dia 62 · Testing Library

Testa componentes do jeito que o usuário usa: procura por texto e papel (role), clica e digita.

> 💡 **Analogia:** É testar o carro dirigindo, não abrindo o motor.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=react%20testing%20library%20vitest)

**Exercícios**

- [ ] Renderize e encontre um elemento por role.
- [ ] Clique e verifique a mudança na tela.
- [ ] Digite num input.
- [ ] Teste um formulário mostrando erro.
- [ ] Use uma função simulada como prop.
- [ ] Use findBy para algo que aparece depois.

**Desafio:** Teste o fluxo do carrinho do projeto da semana 10.

### Dia 63 · Mocks e APIs

Mocks substituem dependências externas (API, relógio) para os testes serem previsíveis. O MSW intercepta requisições.

> 💡 **Analogia:** Mock é o dublê de cinema: faz a cena perigosa no lugar do ator.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=msw%20mock%20service%20worker%20testes)

**Exercícios**

- [ ] Use vi.fn e vi.spyOn.
- [ ] Use fake timers.
- [ ] Handler do MSW com sucesso.
- [ ] Handler do MSW com erro 500.
- [ ] Teste o estado de carregando.
- [ ] Teste um hook com renderHook.

**Desafio:** Escreva um teste que falha se alguém apagar o tratamento de erro.

### Dia 64 · Testes de ponta a ponta

Testes E2E com Playwright simulam o usuário real no navegador. O CI roda tudo a cada push.

> 💡 **Analogia:** É o ensaio geral antes da estreia: palco, luz e figurino de verdade.

**Aula:** [buscar vídeo no YouTube](https://www.youtube.com/results?search_query=playwright%20testes%20e2e)

**Exercícios**

- [ ] Instale o Playwright.
- [ ] Teste um login.
- [ ] Teste um fluxo de compra.
- [ ] Tire print automático quando falhar.
- [ ] Rode num tamanho de tela de celular.
- [ ] Rode os testes no GitHub Actions.

**Desafio:** Coloque um selo de testes passando no README.

---

## Dia 65 · Projeto: Agendamento testado e no ar

**Problema:** Código sem teste assusta quem contrata. Blinde o projeto da semana 11 ou 12.

**Requisitos**

- [ ] 15 ou mais testes de componentes e regras
- [ ] 1 teste E2E do fluxo principal
- [ ] CI no GitHub Actions
- [ ] Deploy automático na branch principal

**Critérios de pronto**

- [ ] CI verde
- [ ] Cobertura de 60% ou mais nas regras
- [ ] Post no LinkedIn contando o que aprendeu

**Entrega:** _link do repositório ou deploy_

---

## Diário da semana

> Ao fim de cada dia, explique o conceito com suas palavras, como se fosse para alguém que não é dev.

### Dia 61

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 62

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 63

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 64

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**

### Dia 65

- **O que aprendi:**
- **O que travou:**
- **Commits / links:**
