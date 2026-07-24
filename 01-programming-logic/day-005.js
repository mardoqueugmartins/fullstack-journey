// // Desafio: refatorar sem mudar o comportamento

// // Uma funcionalidade do CashWise calcula o desconto de uma compra:

// function calcularDesconto(valorCompra, clientePremium) {
//   let desconto = 0;

//   if (valorCompra >= 500) {
//     desconto = 10;
//   }

//   if (clientePremium === true) {
//     desconto = 15;
//   }

//   if (valorCompra >= 500 && clientePremium === true) {
//     desconto = 20;
//   }

//   return desconto;
// }

// Sua missão:

// Reescreva a função usando uma única estrutura if / else if / else.
// Preserve exatamente estas regras:
// compra a partir de R$ 500 e cliente premium: 20%;
// apenas cliente premium: 15%;
// apenas compra a partir de R$ 500: 10%;
// nenhum requisito atendido: 0%.
// Execute estes testes:

// console.log(calcularDesconto(500, true));   // 20
// console.log(calcularDesconto(500, false));  // 10
// console.log(calcularDesconto(499, true));   // 15
// console.log(calcularDesconto(499, false));  // 0


// RESULTADO:
function calcularDesconto(valorCompra, clientePremium) {

  let desconto = 0;



 if (valorCompra >= 500 && clientePremium) {

     desconto = 20;

 } else if (clientePremium) {

     desconto = 15;

 } else if (valorCompra >= 500) {

     desconto = 10;

 } else {

     desconto = 0;

 }

 

 return desconto;

 

}



console.log(calcularDesconto(500, true));   // 20

console.log(calcularDesconto(500, false));  // 10

console.log(calcularDesconto(499, true));   // 15

console.log(calcularDesconto(499, false));  // 0