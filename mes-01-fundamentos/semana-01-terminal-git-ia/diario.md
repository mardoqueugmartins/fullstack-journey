# Diário · Semana 01

## Dia 1 · Desafio: 10 comandos de memória

1. `pwd`: mostra em qual pasta eu estou agora.
2. `cd`: abre uma pasta especifica.
3. `cd ~`: volta para a pasta home do projeto.
4. `mkdir`: cria uma pasta.
5. `ls`: exibe arquivos do diretório atual.
6. `cp`: copiar/duplicar um arquivo.
7. `mv`: mover/renomear um arquivo/pasta.
8. `rm`: deletar um arquivo.
9. `rm -rf`: deletar uma pasta.
10. `touch`: criar um arquivo vazio.

## Dia 2 · Desafio: Reescreva 5 mensagens de commit no padrão Conventional Commits (feat:, fix:, docs:, refactor:, chore:).

1. git commit -m "chore: inicializa projeto"
2. git commit -m "docs: adiciona README do projeto"
3. git commit -m "fix: corrige link quebrado no README"
4. git commit -m "feat: adiciona título na página inicial"
5. git commit -m "docs: atualiza instruções de instalação"

## Dia 4 · Merge vs rebase (com minhas palavras)

1. Merge: junta a cópia que estou trabalhando com a original e coloca uma nota informando que nesse ponto eu juntei a cópia com o original.

2. Rebase: junta a cópia que estou trabalhando com o original, porém reescreve o histórico da minha cópia e não informa onde as cópias foram juntas ao original. Também não é interessante fazer rebase em uma cópia já baixada, porque quem já baixou ficará com uma versão diferente da minha.

## Revisão de commits pela IA:

- Concordo com a revisão, porque fica mais fácil de outro desenvolvedor entender.
- Sobre o discutível, eu também concordo, porque analisei e acredito que a forma que foi explicado é bem mais fácil de entender.
- O que vou fazer de diferente nos próximos commits: vou escrever no imperativo.

## Dia 4 · Desafio: conferindo a IA na documentação

- O que a IA disse: Ele só age sobre o que ainda não virou commit.
- O que a documentação diz: É possível restaurar qualquer commit diferente usando "--source" e não só o último.
- Conclusão: Temos sempre que analisar o que a IA sugere antes de colocar no código. Consultei a documentação e descobri que posso usar o "--source" para trazer um arquivo de qualquer commit.
