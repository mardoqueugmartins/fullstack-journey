// Exercício

// Escreva uma função chamada:

// function validarSaida(valor, saldoAtual) {

// }

// Ela deve seguir estas regras:

// Se valor for menor ou igual a 0, retorne:

// "Valor inválido"

// Senão, se valor for maior que saldoAtual, retorne:

// "Saldo insuficiente"

// Caso contrário, retorne:

// "Saída permitida"
// Depois teste sua função:
// console.log(validarSaida(0, 1000));
// console.log(validarSaida(1500, 1000));
// console.log(validarSaida(500, 1000));
// O que você deve entregar
// A função escrita por você.
// A saída dos três console.log.


function validarSaida(valor, saldoAtual) {
  if (valor <= 0) {
    return "Valor inválido";
  } else if (valor > saldoAtual) {
    return "Saldo insuficiente";
  } else {
    return "Saída permitida";
  }
}


console.log(validarSaida(0, 1000));
console.log(validarSaida(1500, 1000));
console.log(validarSaida(500, 1000));