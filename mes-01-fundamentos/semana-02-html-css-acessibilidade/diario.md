# Diário · Semana 02

## Dia 6 · Desafio: navegação só com Tab

- Ordem do foco: links (serviços, contato), nome, email, telefone, mensagem e botão.
- Elementos que recebem foco: links, inputs...
- Elementos que NÃO recebem foco: imagens, títulos e textos.
- O foco ficou visível o tempo todo? Só enquanto aperta TAB.
- Links do menu levam à seção certa com Enter? Sim.
- Consegui preencher e enviar o formulário sem mouse? Sim.
- Onde o foco sumiu ou ficou confuso: depois do botão enviar o foco sumiu e foi para a aba do navegador.

## Dia 7 · Box model e Flexbox

- Propriedades novas no Flexbox Froggy: aprendi habilidades novas como o uso do row-reverse, order, align-self...
- box-sizing: com border-box o card tinha 280px; sem, 346px, porque com border-box a soma de tudo fica em 280px, sem o border-box, somente o conteúdo tem 280px, os 66px vem do padding e borda.
- Desafio (header do Google): fiz o desafio do Google, utilizei o que aprendi como justify-content: flex-end, align-items: center...

## Dia 8 · CSS Grid e responsividade

- minmax(200px, 1fr): o 200px é **o tamanho mínimo da coluna, e quando não cabe a imagem desce para a linha de baixo**. O 1fr faz as colunas dividirem igualmente o espaço que sobra.
- grid-template-areas: dou um nome para cada filho com grid-area (sem aspas!) e desenho a planta no pai. Topo aparece duas vezes porque precisa ocupar as duas colunas.
- Mobile-first: o CSS normal é o do **celular. O @media (min-width) só acrescenta** regras quando a tela é maior do que o valor que eu escolhi.
- rem: 1rem = **16px. Melhor que px porque cresce junto quando a pessoa aumenta a fonte no navegador (acessibilidade)**.
- object-fit: cover **preenche o espaço e corta as bordas da foto, contain mostra a foto inteira e deixa faixas vazias**.
- Desafio (dashboard): montei header, menu lateral, 4 cartões num grid e uma área de gráfico. Travei nas aspas do grid-area e no 1f no lugar de 1fr.

## Dia 9 · Acessibilidade e performance

- Performance: 78, Acessibilidade: 100, Boas práticas: 96, SEO: 91.
- LCP request discovery: o maior elemento da tela está demorando para ser encontrado e carregado.
- Network dependency tree: um arquivo fica esperando outro para carregar, atrasando o carregamento.
- Forced reflow: o navegador teve que recalcular o layout várias vezes para conseguir exibir.
- Use efficient cache lifetimes: o servidor não pede para o navegador salvar arquivos.
- Document request latency: o HTML está demorando muito para chegar.
- Viewport adicionado.
- Contraste: #aaaaaa sobre branco = 2.3:1 (Fail). #4d4d4d = 8.4:1 (Pass).
- Performance - nova nota: 83, Acessibilidade: 100, Boas práticas: 92, SEO: 91.
- Desafio: sitesporassinatura.mardoqueumartins.com.br foi de 88 para 96 em Acessibilidade (no ar). Problemas: contraste baixo (text-ink/45–55 → /65) e <dl> com divs no meio (cada card ganhou seu próprio <dl>). PRs #1 e #2 no repo do site.
- Deploy: o cPanel deu "could not contact the remote repository". Causa: o workflow recriava o branch deploy do zero (push -f) e o cPanel só aceita fast-forward. Corrigi empilhando cada build em cima do anterior.
