/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/
const cache = {};

function calcularFibonacci(n) {
  if (cache[n] !== undefined) {
    return cache[n];
  }

  let resultadoFibo;
  if (n === 0) {
    resultadoFibo = 0;
  } else if (n === 1) {
    resultadoFibo = 1;
  } else {
    resultadoFibo = calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
  }

  cache[n] = resultadoFibo;

  return resultadoFibo;
}

const n = 7;
const resultadoFibo = calcularFibonacci(n);
showContent(
  20,
  `El número ${n} de la serie de Fibonacci es ${resultadoFibo}`
);
