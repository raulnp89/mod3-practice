/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/


function generarNumAleatorio(min, max) {
  return Math.round(Math.random() * 100);
}
let myArr = [];
for (i = 0; i < 10; i++) {
  myArr.push(generarNumAleatorio(0, 100));
}

let numeroMin = Math.min(...myArr);
let numeroMax = Math.max(...myArr);

let total =
  "El mínimo es " +
  numeroMin +
  "." +
  "<br> El máximo es " +
  numeroMax +
  "." +
  "<br>La lista de números aleatorios es: " +
  myArr;

showContent(6, total);
  