/**
 * Semana 03 · Dia 12 · Operadores e condicionais
 * Exercício: validarSaida(valor, saldoAtual)
 *
 * Regras:
 *   - valor menor ou igual a 0: "Valor inválido"
 *   - valor maior que saldoAtual: "Saldo insuficiente"
 *   - caso contrário: "Saída permitida"
 *
 * Executar: node condicionais-validar-saida.js
 */

function validarSaida(valor, saldoAtual) {
  if (valor <= 0) {
    return "Valor inválido";
  } else if (valor > saldoAtual) {
    return "Saldo insuficiente";
  } else {
    return "Saída permitida";
  }
}

console.log(validarSaida(0, 1000)); // Valor inválido
console.log(validarSaida(1500, 1000)); // Saldo insuficiente
console.log(validarSaida(500, 1000)); // Saída permitida
